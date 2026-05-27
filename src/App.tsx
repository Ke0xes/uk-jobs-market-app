import { useEffect, useMemo, useState, type MouseEvent } from 'react'
import { extent, hierarchy, treemap, type HierarchyNode, type HierarchyRectangularNode } from 'd3'
import './App.css'
import { sourceLinks, ukOccupations, ukSectors, type OccupationRecord, type SectorRecord } from './data/ukOccupations'

type ViewMode = 'occupations' | 'sectors'
type OccupationLayerKey = 'employmentGrowth' | 'aiScale' | 'aiExposure' | 'aiGain'
type SectorLayerKey = 'currentPenetration' | 'earlyPenetration' | 'penetrationGain'
type DisplayRecord = OccupationRecord | SectorRecord

type TooltipState = {
  item: DisplayRecord
  x: number
  y: number
}

type BucketDefinition = {
  label: string
  min: number
  max: number
  colorValue: number
}

const CANVAS_WIDTH = 1320
const CANVAS_HEIGHT = 980

const isOccupation = (item: DisplayRecord): item is OccupationRecord => 'majorGroup' in item

const formatThousands = (value: number) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}M`
  }

  return `${Math.round(value)}K`
}

const formatSignedPercent = (value: number) => `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`

const getEmploymentGrowth = (occupation: OccupationRecord) =>
  ((occupation.employment2035 - occupation.employment2024) / occupation.employment2024) * 100

const getAiExposureShare = (occupation: OccupationRecord) =>
  (occupation.aiJobs2035 / occupation.employment2035) * 100

const getAiGain = (occupation: OccupationRecord) => occupation.aiJobs2035 - occupation.aiJobs2024

const boostContrast = (t: number) => {
  const centered = (t - 0.5) * 2
  const boosted = Math.sign(centered) * Math.pow(Math.abs(centered), 0.55)
  return boosted / 2 + 0.5
}

const greenRedCss = (t: number, alpha: number) => {
  const clamped = boostContrast(Math.max(0, Math.min(1, t)))

  let red = 0
  let green = 0
  let blue = 0

  if (clamped < 0.5) {
    const step = clamped / 0.5
    red = Math.round(30 + step * 200)
    green = Math.round(180 - step * 20)
    blue = Math.round(40 - step * 20)
  } else {
    const step = (clamped - 0.5) / 0.5
    red = Math.round(230 + step * 25)
    green = Math.round(160 - step * 130)
    blue = Math.round(20 - step * 5)
  }

  return `rgba(${red},${green},${blue},${alpha})`
}

const getSectorCurrentPenetration = (sector: SectorRecord) => sector.penetration2023

const getSectorEarlyPenetration = (sector: SectorRecord) => sector.penetration2013

const getSectorPenetrationGain = (sector: SectorRecord) => sector.penetrationGain

const colorForOccupationLayer = (layerKey: OccupationLayerKey, occupation: OccupationRecord, alpha = 0.58) => {
  if (layerKey === 'employmentGrowth') {
    const value = getEmploymentGrowth(occupation)
    return greenRedCss(1 - Math.max(0, Math.min(1, (value + 12) / 24)), alpha)
  }

  if (layerKey === 'aiExposure') {
    return greenRedCss(getAiExposureShare(occupation) / 100, alpha)
  }

  if (layerKey === 'aiScale') {
    return greenRedCss(1 - Math.max(0, Math.min(1, occupation.aiJobs2035 / 600)), alpha)
  }

  return greenRedCss(1 - Math.max(0, Math.min(1, getAiGain(occupation) / 150)), alpha)
}

const colorForSectorLayer = (layerKey: SectorLayerKey, sector: SectorRecord, alpha = 0.58) => {
  if (layerKey === 'earlyPenetration') {
    return greenRedCss(Math.max(0, Math.min(1, getSectorEarlyPenetration(sector) / 35)), alpha)
  }

  if (layerKey === 'currentPenetration') {
    return greenRedCss(Math.max(0, Math.min(1, getSectorCurrentPenetration(sector) / 35)), alpha)
  }

  return greenRedCss(Math.max(0, Math.min(1, getSectorPenetrationGain(sector) / 30)), alpha)
}

const occupationLayerDefinitions: Record<
  OccupationLayerKey,
  {
    label: string
    legendLow: string
    legendHigh: string
    description: string
    tileInfo: (occupation: OccupationRecord) => string
    summaryTitle: string
    summaryValue: (occupations: OccupationRecord[]) => string
    summaryLabel: string
    buckets: BucketDefinition[]
    groupTitle: string
    groupValue: (occupations: OccupationRecord[]) => number
    groupValueFormat: (value: number) => string
    groupPct: (value: number, maxValue: number) => number
  }
> = {
  employmentGrowth: {
    label: 'Outlook',
    legendLow: 'Declining',
    legendHigh: 'Growing',
    description: 'Projected change in occupation employment between 2024 and 2035.',
    tileInfo: (occupation) => `${formatSignedPercent(getEmploymentGrowth(occupation))} · ${formatThousands(occupation.employment2024)} jobs`,
    summaryTitle: 'Avg. outlook',
    summaryValue: (occupations) => {
      const totalJobs = occupations.reduce((sum, occupation) => sum + occupation.employment2024, 0)
      const weighted = occupations.reduce(
        (sum, occupation) => sum + getEmploymentGrowth(occupation) * occupation.employment2024,
        0,
      )
      return formatSignedPercent(weighted / totalJobs)
    },
    summaryLabel: 'job-weighted',
    buckets: [
      { label: 'Declining (<0%)', min: -Infinity, max: 0, colorValue: -5 },
      { label: 'Slow (0-3%)', min: 0, max: 3, colorValue: 1.5 },
      { label: 'Average (4-7%)', min: 4, max: 7, colorValue: 5.5 },
      { label: 'Fast (8-14%)', min: 8, max: 15, colorValue: 11 },
      { label: 'Much faster (15%+)', min: 15, max: Infinity, colorValue: 20 },
    ],
    groupTitle: 'Outlook by group',
    groupValue: (occupations) => {
      const totalJobs = occupations.reduce((sum, occupation) => sum + occupation.employment2024, 0)
      const weighted = occupations.reduce(
        (sum, occupation) => sum + getEmploymentGrowth(occupation) * occupation.employment2024,
        0,
      )
      return totalJobs > 0 ? weighted / totalJobs : 0
    },
    groupValueFormat: formatSignedPercent,
    groupPct: (value) => Math.max(0, Math.min(100, ((value + 10) / 30) * 100)),
  },
  aiScale: {
    label: 'AI Jobs 2035',
    legendLow: 'Lower',
    legendHigh: 'Higher',
    description: 'Projected jobs involving AI activities by 2035, in thousands.',
    tileInfo: (occupation) => `${occupation.aiJobs2035.toFixed(1)}K · ${formatThousands(occupation.employment2024)} jobs`,
    summaryTitle: 'AI jobs (2035)',
    summaryValue: (occupations) => formatThousands(occupations.reduce((sum, occupation) => sum + occupation.aiJobs2035, 0)),
    summaryLabel: 'projected involved in AI activities',
    buckets: [
      { label: '<25K', min: 0, max: 25, colorValue: 12 },
      { label: '25-50K', min: 25, max: 50, colorValue: 37 },
      { label: '50-100K', min: 50, max: 100, colorValue: 75 },
      { label: '100-200K', min: 100, max: 200, colorValue: 150 },
      { label: '200K+', min: 200, max: Infinity, colorValue: 260 },
    ],
    groupTitle: 'AI jobs by group',
    groupValue: (occupations) => occupations.reduce((sum, occupation) => sum + occupation.aiJobs2035, 0),
    groupValueFormat: (value) => formatThousands(value),
    groupPct: (value, maxValue) => (maxValue > 0 ? (value / maxValue) * 100 : 0),
  },
  aiExposure: {
    label: 'Digital AI Exposure',
    legendLow: 'Low',
    legendHigh: 'High',
    description: 'Share of projected 2035 occupation employment expected to involve AI activities.',
    tileInfo: (occupation) => `${getAiExposureShare(occupation).toFixed(1)}% · ${formatThousands(occupation.employment2024)} jobs`,
    summaryTitle: 'Avg. exposure',
    summaryValue: (occupations) => {
      const totalJobs = occupations.reduce((sum, occupation) => sum + occupation.employment2024, 0)
      const weighted = occupations.reduce(
        (sum, occupation) => sum + getAiExposureShare(occupation) * occupation.employment2024,
        0,
      )
      return `${(weighted / totalJobs).toFixed(1)}%`
    },
    summaryLabel: 'job-weighted share of 2035 employment',
    buckets: [
      { label: 'Minimal (<10%)', min: 0, max: 10, colorValue: 5 },
      { label: 'Low (10-25%)', min: 10, max: 25, colorValue: 17.5 },
      { label: 'Moderate (25-40%)', min: 25, max: 40, colorValue: 32.5 },
      { label: 'High (40-60%)', min: 40, max: 60, colorValue: 50 },
      { label: 'Very high (60%+)', min: 60, max: Infinity, colorValue: 80 },
    ],
    groupTitle: 'Exposure by group',
    groupValue: (occupations) => {
      const totalJobs = occupations.reduce((sum, occupation) => sum + occupation.employment2024, 0)
      const weighted = occupations.reduce(
        (sum, occupation) => sum + getAiExposureShare(occupation) * occupation.employment2024,
        0,
      )
      return totalJobs > 0 ? weighted / totalJobs : 0
    },
    groupValueFormat: (value) => `${value.toFixed(1)}%`,
    groupPct: (value) => Math.max(0, Math.min(100, value)),
  },
  aiGain: {
    label: 'AI Job Gain',
    legendLow: 'Lower',
    legendHigh: 'Higher',
    description: 'Increase in jobs involving AI activities between 2024 and 2035.',
    tileInfo: (occupation) => `+${getAiGain(occupation).toFixed(1)}K · ${formatThousands(occupation.employment2024)} jobs`,
    summaryTitle: 'AI gain',
    summaryValue: (occupations) => formatThousands(occupations.reduce((sum, occupation) => sum + getAiGain(occupation), 0)),
    summaryLabel: 'new jobs involving AI activities',
    buckets: [
      { label: '<10K', min: 0, max: 10, colorValue: 5 },
      { label: '10-25K', min: 10, max: 25, colorValue: 17.5 },
      { label: '25-50K', min: 25, max: 50, colorValue: 37.5 },
      { label: '50-100K', min: 50, max: 100, colorValue: 75 },
      { label: '100K+', min: 100, max: Infinity, colorValue: 125 },
    ],
    groupTitle: 'AI gain by group',
    groupValue: (occupations) => occupations.reduce((sum, occupation) => sum + getAiGain(occupation), 0),
    groupValueFormat: (value) => `+${formatThousands(value)}`,
    groupPct: (value, maxValue) => (maxValue > 0 ? (value / maxValue) * 100 : 0),
  },
}

const sectorLayerDefinitions: Record<
  SectorLayerKey,
  {
    label: string
    legendLow: string
    legendHigh: string
    description: string
    tileInfo: (sector: SectorRecord) => string
    summaryTitle: string
    summaryValue: (sectors: SectorRecord[]) => string
    summaryLabel: string
    buckets: BucketDefinition[]
    groupTitle: string
    groupValue: (sectors: SectorRecord[]) => number
    groupValueFormat: (value: number) => string
    groupPct: (value: number, maxValue: number) => number
  }
> = {
  currentPenetration: {
    label: 'Patent AI Share (2023)',
    legendLow: 'Lower',
    legendHigh: 'Higher',
    description: 'Share of sector patents that were AI-related in 2023, from Table 8.6.',
    tileInfo: (sector) => `${sector.penetration2023.toFixed(2)}% in 2023`,
    summaryTitle: 'Avg. 2023 share',
    summaryValue: (sectors) => `${(sectors.reduce((sum, sector) => sum + sector.penetration2023, 0) / sectors.length).toFixed(2)}%`,
    summaryLabel: 'across published two-digit sectors',
    buckets: [
      { label: '<1%', min: 0, max: 1, colorValue: 0.5 },
      { label: '1-3%', min: 1, max: 3, colorValue: 2 },
      { label: '3-7%', min: 3, max: 7, colorValue: 5 },
      { label: '7-15%', min: 7, max: 15, colorValue: 11 },
      { label: '15%+', min: 15, max: Infinity, colorValue: 24 },
    ],
    groupTitle: '2023 share by section',
    groupValue: (sectors) => sectors.reduce((sum, sector) => sum + sector.penetration2023, 0) / sectors.length,
    groupValueFormat: (value) => `${value.toFixed(2)}%`,
    groupPct: (value) => Math.max(0, Math.min(100, (value / 30) * 100)),
  },
  earlyPenetration: {
    label: 'Patent AI Share (2013)',
    legendLow: 'Lower',
    legendHigh: 'Higher',
    description: 'Share of sector patents that were AI-related in 2013, the first CPC year in the appendix.',
    tileInfo: (sector) => `${sector.penetration2013.toFixed(2)}% in 2013`,
    summaryTitle: 'Avg. 2013 share',
    summaryValue: (sectors) => `${(sectors.reduce((sum, sector) => sum + sector.penetration2013, 0) / sectors.length).toFixed(2)}%`,
    summaryLabel: 'historical starting point',
    buckets: [
      { label: '0%', min: 0, max: 0.01, colorValue: 0 },
      { label: '0-0.5%', min: 0.01, max: 0.5, colorValue: 0.25 },
      { label: '0.5-1.5%', min: 0.5, max: 1.5, colorValue: 1 },
      { label: '1.5-3%', min: 1.5, max: 3, colorValue: 2.25 },
      { label: '3%+', min: 3, max: Infinity, colorValue: 5 },
    ],
    groupTitle: '2013 share by section',
    groupValue: (sectors) => sectors.reduce((sum, sector) => sum + sector.penetration2013, 0) / sectors.length,
    groupValueFormat: (value) => `${value.toFixed(2)}%`,
    groupPct: (value) => Math.max(0, Math.min(100, (value / 8) * 100)),
  },
  penetrationGain: {
    label: '2013-2023 Gain',
    legendLow: 'Smaller',
    legendHigh: 'Larger',
    description: 'Increase in AI patent penetration between 2013 and 2023 in the published sector appendix.',
    tileInfo: (sector) => `+${sector.penetrationGain.toFixed(2)} pts over 2013-2023`,
    summaryTitle: 'Avg. gain',
    summaryValue: (sectors) => `+${(sectors.reduce((sum, sector) => sum + sector.penetrationGain, 0) / sectors.length).toFixed(2)} pts`,
    summaryLabel: 'patent penetration increase',
    buckets: [
      { label: '<1 pt', min: -Infinity, max: 1, colorValue: 0.5 },
      { label: '1-3 pts', min: 1, max: 3, colorValue: 2 },
      { label: '3-6 pts', min: 3, max: 6, colorValue: 4.5 },
      { label: '6-12 pts', min: 6, max: 12, colorValue: 9 },
      { label: '12 pts+', min: 12, max: Infinity, colorValue: 20 },
    ],
    groupTitle: 'Gain by section',
    groupValue: (sectors) => sectors.reduce((sum, sector) => sum + sector.penetrationGain, 0) / sectors.length,
    groupValueFormat: (value) => `+${value.toFixed(2)} pts`,
    groupPct: (value) => Math.max(0, Math.min(100, (value / 25) * 100)),
  },
}

type TreemapNode<T> = HierarchyRectangularNode<{ children: T[] } | T>
type LayoutNode<T> = HierarchyNode<{ children: T[] }>

const buildTreemap = <T,>(items: T[], sizeAccessor: (item: T) => number) => {
  const root = hierarchy({ children: items } as { children: T[] })
    .sum((node: T | { children: T[] }) => ('children' in (node as { children: T[] }) ? 0 : sizeAccessor(node as T)))
    .sort((left: LayoutNode<T>, right: LayoutNode<T>) => (right.value ?? 0) - (left.value ?? 0))

  treemap<{ children: T[] }>()
    .size([CANVAS_WIDTH, CANVAS_HEIGHT])
    .paddingOuter(0)
    .paddingInner(5)(root)

  return root.leaves() as TreemapNode<T>[]
}

const trimLabel = (label: string, maxChars: number) => {
  if (label.length <= maxChars) {
    return label
  }

  return `${label.slice(0, Math.max(0, maxChars - 1)).trimEnd()}…`
}

const wrapLabel = (label: string, width: number, maxLines = 2) => {
  const words = label.split(' ')
  const lines: string[] = []
  const maxChars = Math.max(10, Math.floor(width / 8.6))
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length <= maxChars || current.length === 0) {
      current = next
      continue
    }

    lines.push(current)
    current = word

    if (lines.length === maxLines) {
      break
    }
  }

  if (current && lines.length < maxLines) {
    lines.push(current)
  }

  if (lines.length > maxLines) {
    lines.length = maxLines
  }

  if (lines.length === maxLines && words.join(' ') !== lines.join(' ')) {
    lines[maxLines - 1] = trimLabel(lines[maxLines - 1], maxChars)
  }

  return lines
}

const buildOccupationTierRows = (
  occupations: OccupationRecord[],
  buckets: BucketDefinition[],
  layerKey: OccupationLayerKey,
) => {
  const totalJobs = occupations.reduce((sum, occupation) => sum + occupation.employment2024, 0)
  const values = occupations.map((occupation) => {
    if (layerKey === 'employmentGrowth') return getEmploymentGrowth(occupation)
    if (layerKey === 'aiExposure') return getAiExposureShare(occupation)
    if (layerKey === 'aiScale') return occupation.aiJobs2035
    return getAiGain(occupation)
  })

  return buckets.map((bucket) => {
    let jobs = 0

    occupations.forEach((occupation, index) => {
      const value = values[index]
      if (value >= bucket.min && value < bucket.max) {
        jobs += occupation.employment2024
      }
    })

    return {
      ...bucket,
      jobs,
      pct: totalJobs > 0 ? (jobs / totalJobs) * 100 : 0,
    }
  })
}

const buildSectorTierRows = (sectors: SectorRecord[], buckets: BucketDefinition[], layerKey: SectorLayerKey) => {
  return buckets.map((bucket) => {
    const count = sectors.filter((sector) => {
      const value =
        layerKey === 'currentPenetration'
          ? getSectorCurrentPenetration(sector)
          : layerKey === 'earlyPenetration'
            ? getSectorEarlyPenetration(sector)
            : getSectorPenetrationGain(sector)

      return value >= bucket.min && value < bucket.max
    }).length

    return {
      ...bucket,
      count,
      pct: sectors.length > 0 ? (count / sectors.length) * 100 : 0,
    }
  })
}

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('occupations')
  const [occupationLayerKey, setOccupationLayerKey] = useState<OccupationLayerKey>('aiExposure')
  const [sectorLayerKey, setSectorLayerKey] = useState<SectorLayerKey>('currentPenetration')
  const [selectedOccupationCode, setSelectedOccupationCode] = useState(ukOccupations[0].code)
  const [selectedSectorCode, setSelectedSectorCode] = useState(ukSectors[0]?.code ?? '')
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  const activeOccupationLayer = occupationLayerDefinitions[occupationLayerKey]
  const activeSectorLayer = sectorLayerDefinitions[sectorLayerKey]
  const activeLayer = viewMode === 'occupations' ? activeOccupationLayer : activeSectorLayer
  useEffect(() => {
    setTooltip(null)
  }, [viewMode, occupationLayerKey, sectorLayerKey])

  useEffect(() => {
    if (viewMode === 'occupations' || ukSectors.length > 0) {
      return
    }

    setViewMode('occupations')
  }, [viewMode])

  const treemapLeaves = useMemo(
    () =>
      viewMode === 'occupations'
        ? buildTreemap(ukOccupations, (occupation) => occupation.employment2024)
        : buildTreemap(ukSectors, (sector) => Math.max(sector.penetration2023, 0.2)),
    [viewMode],
  )

  const selectedOccupation = ukOccupations.find((occupation) => occupation.code === selectedOccupationCode) ?? ukOccupations[0]
  const selectedSector = ukSectors.find((sector) => sector.code === selectedSectorCode) ?? ukSectors[0]
  const selectedItem = viewMode === 'occupations' ? selectedOccupation : selectedSector

  const occupationGroups = Array.from(new Set(ukOccupations.map((occupation) => occupation.majorGroup)))
  const sectorGroups = Array.from(new Set(ukSectors.map((sector) => sector.sectionLabel)))

  const occupationTierRows = buildOccupationTierRows(ukOccupations, activeOccupationLayer.buckets, occupationLayerKey)
  const sectorTierRows = buildSectorTierRows(ukSectors, activeSectorLayer.buckets, sectorLayerKey)

  const occupationMaxGroupValue = Math.max(
    ...occupationGroups.map((group) =>
      activeOccupationLayer.groupValue(ukOccupations.filter((occupation) => occupation.majorGroup === group)),
    ),
  )

  const sectorMaxGroupValue = Math.max(
    ...sectorGroups.map((group) =>
      activeSectorLayer.groupValue(ukSectors.filter((sector) => sector.sectionLabel === group)),
    ),
  )

  const occupationGroupRows = occupationGroups.map((group) => {
    const occupations = ukOccupations.filter((occupation) => occupation.majorGroup === group)
    const value = activeOccupationLayer.groupValue(occupations)

    return {
      label: group,
      display: activeOccupationLayer.groupValueFormat(value),
      pct: activeOccupationLayer.groupPct(value, occupationMaxGroupValue),
      color:
        occupationLayerKey === 'employmentGrowth'
          ? greenRedCss(1 - Math.max(0, Math.min(1, (value + 12) / 24)), 0.8)
          : occupationLayerKey === 'aiExposure'
            ? greenRedCss(value / 100, 0.8)
            : occupationLayerKey === 'aiScale'
              ? greenRedCss(1 - Math.max(0, Math.min(1, value / 600)), 0.8)
              : greenRedCss(1 - Math.max(0, Math.min(1, value / 150)), 0.8),
    }
  })

  const sectorGroupRows = sectorGroups.map((group) => {
    const sectors = ukSectors.filter((sector) => sector.sectionLabel === group)
    const value = activeSectorLayer.groupValue(sectors)

    return {
      label: group,
      display: activeSectorLayer.groupValueFormat(value),
      pct: activeSectorLayer.groupPct(value, sectorMaxGroupValue),
      color:
        sectorLayerKey === 'earlyPenetration'
          ? greenRedCss(Math.max(0, Math.min(1, value / 8)), 0.8)
          : sectorLayerKey === 'currentPenetration'
            ? greenRedCss(Math.max(0, Math.min(1, value / 30)), 0.8)
            : greenRedCss(Math.max(0, Math.min(1, value / 25)), 0.8),
    }
  })

  const legendExtents = useMemo(() => {
    const values =
      viewMode === 'occupations'
        ? ukOccupations.map((occupation) => {
            if (occupationLayerKey === 'employmentGrowth') return getEmploymentGrowth(occupation)
            if (occupationLayerKey === 'aiExposure') return getAiExposureShare(occupation)
            if (occupationLayerKey === 'aiScale') return occupation.aiJobs2035
            return getAiGain(occupation)
          })
        : ukSectors.map((sector) => {
            if (sectorLayerKey === 'earlyPenetration') return getSectorEarlyPenetration(sector)
            if (sectorLayerKey === 'currentPenetration') return getSectorCurrentPenetration(sector)
            return getSectorPenetrationGain(sector)
          })

    return extent(values)
  }, [viewMode, occupationLayerKey, sectorLayerKey])

  const handleTileMove = (event: MouseEvent<SVGGElement>, item: DisplayRecord) => {
    setTooltip({ item, x: event.clientX, y: event.clientY })
  }

  const selectedOutlook = selectedOccupation ? getEmploymentGrowth(selectedOccupation) : 0
  const selectedExposure = selectedOccupation ? getAiExposureShare(selectedOccupation) : 0
  const selectedGain = selectedOccupation ? getAiGain(selectedOccupation) : 0
  const selectedSectorGain = selectedSector ? getSectorPenetrationGain(selectedSector) : 0
  const occupationTotalJobs = ukOccupations.reduce((sum, occupation) => sum + occupation.employment2024, 0)

  return (
    <div id="wrapper">
      <div id="header">
        <div className="intro">
          <h1>
            UK Job Market Visualizer
            <a href={sourceLinks[0].href} target="_blank" rel="noreferrer">
              Source
            </a>
          </h1>
          <p>
            This now uses the full published appendix: <b>{ukOccupations.length} occupation rows from Tables 8.1-8.4</b>
            {' '}and <b>{ukSectors.length} sector rows from Tables 8.5-8.6</b>. In occupation mode, area is proportional to
            {' '}<b>adjusted 2024 employment</b>. In sector mode, area is proportional to the sector&apos;s <b>2023 AI patent share</b>
            {' '}because the sector appendix publishes exposure rates, not employment counts.
          </p>
          <p>
            The visual treatment still follows the Karpathy jobs explorer, but the data model is now broader:
            unadjusted scenario levels, replacement demand, adjusted AI-job estimates, and a separate sector-level
            patent penetration view sourced directly from the GOV.UK appendix.
          </p>
          <details>
            <summary>View UK data notes and sources</summary>
            <div className="prompt-box">
              Primary occupation data source: {sourceLinks[0].label}\n\n
              Supporting digital context: {sourceLinks[1].label}\n\n
              Occupation mode uses Tables 8.1 to 8.4. Sector mode uses Tables 8.5 and 8.6.\n\n
              Sector penetration values are historical patent shares for 2013 to 2023, not projected sector
              employment counts. Occupation AI-job figures come from the adjusted technological-opportunities
              appendix tables.
            </div>
          </details>
          <p>
            <b>Caveat on Digital AI Exposure:</b> the UK source publishes counts of jobs involving AI
            activities, not Karpathy-style LLM exposure scores. In occupation mode, the Digital AI Exposure layer is
            the share of an occupation&apos;s 2035 employment expected to involve AI activities. In sector mode, the
            comparable signal is AI patent penetration.
          </p>
        </div>

        <div className="controls-row">
          <div className="stat-section">
            <h3>View</h3>
            <div className="color-toggle">
              <button
                type="button"
                className={viewMode === 'occupations' ? 'active' : ''}
                onClick={() => setViewMode('occupations')}
              >
                Occupations
              </button>
              <button
                type="button"
                className={viewMode === 'sectors' ? 'active' : ''}
                onClick={() => setViewMode('sectors')}
              >
                Sectors
              </button>
            </div>
          </div>

          <div className="stat-section">
            <h3>Layer</h3>
            <div className="color-toggle">
              {viewMode === 'occupations'
                ? Object.entries(occupationLayerDefinitions).map(([key, definition]) => (
                    <button
                      key={key}
                      type="button"
                      data-mode={key}
                      className={key === occupationLayerKey ? 'active' : ''}
                      onClick={() => setOccupationLayerKey(key as OccupationLayerKey)}
                    >
                      {definition.label}
                    </button>
                  ))
                : Object.entries(sectorLayerDefinitions).map(([key, definition]) => (
                    <button
                      key={key}
                      type="button"
                      data-mode={key}
                      className={key === sectorLayerKey ? 'active' : ''}
                      onClick={() => setSectorLayerKey(key as SectorLayerKey)}
                    >
                      {definition.label}
                    </button>
                  ))}
            </div>
          </div>

          <div className="gradient-legend">
            <span>{activeLayer.legendLow}</span>
            <div className="gradient-bar" />
            <span>{activeLayer.legendHigh}</span>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-section">
            <h3>{viewMode === 'occupations' ? 'Tracked jobs' : 'Tracked sectors'}</h3>
            <div className="stat-big">
              {viewMode === 'occupations' ? formatThousands(occupationTotalJobs) : ukSectors.length}
            </div>
            <div className="stat-label">
              {viewMode === 'occupations' ? 'adjusted 2024 employment' : 'with published AI patent rates'}
            </div>
          </div>

          <div className="stat-section">
            <h3>{activeLayer.summaryTitle}</h3>
            <div className="stat-big">
              {viewMode === 'occupations'
                ? activeOccupationLayer.summaryValue(ukOccupations)
                : activeSectorLayer.summaryValue(ukSectors)}
            </div>
            <div className="stat-label">{activeLayer.summaryLabel}</div>
          </div>

          <div className="stat-section">
            <h3>{activeLayer.label} tiers</h3>
            <div className="tier-bar">
              {viewMode === 'occupations'
                ? occupationTierRows.map((tier) => (
                    <div className="tier-row" key={tier.label}>
                      <div
                        className="tier-color"
                        style={{
                          background:
                            occupationLayerKey === 'employmentGrowth'
                              ? greenRedCss(1 - Math.max(0, Math.min(1, (tier.colorValue + 12) / 24)), 1)
                              : occupationLayerKey === 'aiExposure'
                                ? greenRedCss(tier.colorValue / 100, 1)
                                : occupationLayerKey === 'aiScale'
                                  ? greenRedCss(1 - Math.max(0, Math.min(1, tier.colorValue / 600)), 1)
                                  : greenRedCss(1 - Math.max(0, Math.min(1, tier.colorValue / 150)), 1),
                        }}
                      />
                      <span className="tier-name">{tier.label}</span>
                      <span className="tier-jobs">{formatThousands(tier.jobs)}</span>
                      <span className="tier-pct">{tier.pct.toFixed(0)}%</span>
                    </div>
                  ))
                : sectorTierRows.map((tier) => (
                    <div className="tier-row" key={tier.label}>
                      <div
                        className="tier-color"
                        style={{
                          background:
                            sectorLayerKey === 'earlyPenetration'
                              ? greenRedCss(Math.max(0, Math.min(1, tier.colorValue / 8)), 1)
                              : sectorLayerKey === 'currentPenetration'
                                ? greenRedCss(Math.max(0, Math.min(1, tier.colorValue / 30)), 1)
                                : greenRedCss(Math.max(0, Math.min(1, tier.colorValue / 25)), 1),
                        }}
                      />
                      <span className="tier-name">{tier.label}</span>
                      <span className="tier-jobs">{tier.count}</span>
                      <span className="tier-pct">{tier.pct.toFixed(0)}%</span>
                    </div>
                  ))}
            </div>
          </div>

          <div className="stat-section">
            <h3>{activeLayer.groupTitle}</h3>
            <div className="hbar-chart">
              {(viewMode === 'occupations' ? occupationGroupRows : sectorGroupRows).map((row) => (
                <div className="hbar-row" key={row.label}>
                  <span className="hbar-label">{row.label.replace(' occupations', '')}</span>
                  <div className="hbar-track">
                    <div className="hbar-fill" style={{ width: `${row.pct}%`, background: row.color }} />
                  </div>
                  <span className="hbar-val">{row.display}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stat-section">
            <h3>{viewMode === 'occupations' ? 'Selected occupation' : 'Selected sector'}</h3>
            <div className="stat-big small-stat">
              {selectedItem ? (isOccupation(selectedItem) ? selectedItem.title : selectedItem.label) : ''}
            </div>
            {viewMode === 'occupations' && selectedOccupation ? (
              <div className="selected-meta">
                <span>SOC {selectedOccupation.code}</span>
                <span>{formatThousands(selectedOccupation.employment2024)} total jobs in 2024</span>
                <span>{formatSignedPercent(selectedOutlook)} total job outlook to 2035</span>
                <span>{selectedExposure.toFixed(1)}% of 2035 jobs estimated to involve AI</span>
                <span>+{selectedGain.toFixed(1)}K estimated AI-involved jobs by 2035</span>
                <span>{selectedOccupation.requirements.technological.replacementDemand.toFixed(0)}K replacement openings, 2024-2035</span>
              </div>
            ) : null}
            {viewMode === 'sectors' && selectedSector ? (
              <div className="selected-meta">
                <span>NACE {selectedSector.code}</span>
                <span>{selectedSector.sectionLabel}</span>
                <span>{selectedSector.penetration2013.toFixed(2)}% in 2013</span>
                <span>{selectedSector.penetration2023.toFixed(2)}% in 2023</span>
                <span>+{selectedSectorGain.toFixed(2)} pts</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
        id="canvas"
        role="img"
        aria-label={viewMode === 'occupations' ? 'UK occupation treemap' : 'UK sector treemap'}
      >
        {treemapLeaves.map((leaf) => {
          const item = leaf.data as DisplayRecord
          const width = leaf.x1 - leaf.x0
          const height = leaf.y1 - leaf.y0
          const title = isOccupation(item) ? item.title : item.label
          const clipId = `tile-clip-${viewMode}-${item.code}`
          const isSelected = isOccupation(item)
            ? item.code === selectedOccupation?.code
            : item.code === selectedSector?.code
          const isCompactTile = width < 150 || height < 72
          const titleLines = wrapLabel(title, width, isCompactTile ? 1 : 2)
          const canShowTitle = width > 72 && height > (isCompactTile ? 20 : 36)
          const canShowSubinfo = width > 170 && height > 86

          return (
            <g
              key={item.code}
              transform={`translate(${leaf.x0}, ${leaf.y0})`}
              onMouseMove={(event) => handleTileMove(event, item)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => {
                if (isOccupation(item)) {
                  setSelectedOccupationCode(item.code)
                  return
                }

                setSelectedSectorCode(item.code)
              }}
            >
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={
                  isOccupation(item)
                    ? colorForOccupationLayer(
                        occupationLayerKey,
                        item,
                        item.code === tooltip?.item.code ? 0.82 : 0.56,
                      )
                    : colorForSectorLayer(sectorLayerKey, item, item.code === tooltip?.item.code ? 0.82 : 0.56)
                }
                stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.06)'}
                strokeWidth={isSelected ? 2 : 1}
              />

              <clipPath id={clipId}>
                <rect x={0} y={0} width={width} height={height} rx={0} ry={0} />
              </clipPath>

              {canShowTitle ? (
                <text className="tile-title" x={6} y={6} clipPath={`url(#${clipId})`}>
                  {titleLines.map((line, index) => (
                    <tspan key={`${item.code}-${line}`} x={6} dy={index === 0 ? 0 : 13}>
                      {line}
                    </tspan>
                  ))}
                </text>
              ) : null}

              {canShowSubinfo ? (
                <text className="tile-subinfo" x={6} y={40} clipPath={`url(#${clipId})`}>
                  {isOccupation(item) ? activeOccupationLayer.tileInfo(item) : activeSectorLayer.tileInfo(item)}
                </text>
              ) : null}
            </g>
          )
        })}
      </svg>

      {tooltip ? (
        <div
          id="tooltip"
          className="visible"
          style={{ left: `${Math.min(window.innerWidth - 360, tooltip.x + 16)}px`, top: `${Math.max(12, tooltip.y - 16)}px` }}
        >
          <div className="tt-title">{isOccupation(tooltip.item) ? tooltip.item.title : tooltip.item.label}</div>
          {isOccupation(tooltip.item) ? (
            <>
              <div className="tt-exposure">
                {occupationLayerKey === 'employmentGrowth' ? `Outlook: ${formatSignedPercent(getEmploymentGrowth(tooltip.item))}` : null}
                {occupationLayerKey === 'aiScale' ? `AI jobs in 2035: ${tooltip.item.aiJobs2035.toFixed(1)}K` : null}
                {occupationLayerKey === 'aiExposure' ? `Digital AI exposure: ${getAiExposureShare(tooltip.item).toFixed(1)}%` : null}
                {occupationLayerKey === 'aiGain' ? `AI job gain: +${getAiGain(tooltip.item).toFixed(1)}K` : null}
              </div>
              <div className="tt-stats">
                <span className="label">Total occupation jobs (2024)</span>
                <span className="value">{formatThousands(tooltip.item.employment2024)}</span>
                <span className="label">Total occupation jobs (2035)</span>
                <span className="value">{formatThousands(tooltip.item.employment2035)}</span>
                <span className="label">Estimated AI-involved jobs (2024)</span>
                <span className="value">{tooltip.item.aiJobs2024.toFixed(1)}K</span>
                <span className="label">Estimated AI-involved jobs (2035)</span>
                <span className="value">{tooltip.item.aiJobs2035.toFixed(1)}K</span>
                <span className="label">Replacement openings, 2024-2035</span>
                <span className="value">{tooltip.item.requirements.technological.replacementDemand.toFixed(0)}K</span>
                <span className="label">Major group</span>
                <span className="value">{tooltip.item.majorGroup}</span>
              </div>
            </>
          ) : (
            <>
              <div className="tt-exposure">
                {sectorLayerKey === 'earlyPenetration' ? `2013 AI patent share: ${tooltip.item.penetration2013.toFixed(2)}%` : null}
                {sectorLayerKey === 'currentPenetration' ? `2023 AI patent share: ${tooltip.item.penetration2023.toFixed(2)}%` : null}
                {sectorLayerKey === 'penetrationGain' ? `2013-2023 gain: +${tooltip.item.penetrationGain.toFixed(2)} pts` : null}
              </div>
              <div className="tt-stats">
                <span className="label">Section</span>
                <span className="value">{tooltip.item.sectionLabel}</span>
                <span className="label">2013</span>
                <span className="value">{tooltip.item.penetration2013.toFixed(2)}%</span>
                <span className="label">2018</span>
                <span className="value">{tooltip.item.ratesByYear[2018].toFixed(2)}%</span>
                <span className="label">2023</span>
                <span className="value">{tooltip.item.penetration2023.toFixed(2)}%</span>
                <span className="label">Gain</span>
                <span className="value">+{tooltip.item.penetrationGain.toFixed(2)} pts</span>
              </div>
            </>
          )}
          <div className="tt-rationale">
            {isOccupation(tooltip.item)
              ? 'The first two rows are total occupation employment under the Technological Opportunities scenario. The AI-involved rows are the report\'s estimate of how many of those jobs directly involve AI activities. Replacement openings are jobs created by people leaving the occupation, not new growth alone. '
              : ''}
            {activeLayer.description} Layer range: {legendExtents[0]?.toFixed(1) ?? '0'} to {legendExtents[1]?.toFixed(1) ?? '0'}.
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
