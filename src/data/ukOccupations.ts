import {
  rawOccupations,
  rawSectors,
  type OccupationScenarioLevels,
  type OccupationScenarioRequirement,
  type ScenarioKey,
} from './reportTables'

export type MajorGroup =
  | 'Managers and directors'
  | 'Professional occupations'
  | 'Associate professional and technical'
  | 'Skilled trades'

export type OccupationRecord = {
  code: string
  title: string
  majorGroup: MajorGroup
  employment2024: number
  employment2030: number
  employment2035: number
  aiJobs2024: number
  aiJobs2030: number
  aiJobs2035: number
  adjustedAiNetChange: number
  scenarios: Record<ScenarioKey, OccupationScenarioLevels>
  requirements: Record<ScenarioKey, OccupationScenarioRequirement>
}

export type SectorRecord = {
  code: string
  label: string
  sectionCode: string
  sectionLabel: string
  penetration2013: number
  penetration2023: number
  penetrationGain: number
  ratesByYear: Record<number, number>
}

const majorGroupByCode: Record<string, MajorGroup> = {
  '1': 'Managers and directors',
  '2': 'Professional occupations',
  '3': 'Associate professional and technical',
  '5': 'Skilled trades',
}

const sectorYears = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] as const

export const ukOccupations: OccupationRecord[] = rawOccupations.map((occupation) => ({
  code: occupation.code,
  title: occupation.title,
  majorGroup: majorGroupByCode[occupation.code[0]],
  employment2024: occupation.adjustedEmployment.y2024,
  employment2030: occupation.adjustedEmployment.y2030,
  employment2035: occupation.adjustedEmployment.y2035,
  aiJobs2024: occupation.adjustedAiJobs.y2024,
  aiJobs2030: occupation.adjustedAiJobs.y2030,
  aiJobs2035: occupation.adjustedAiJobs.y2035,
  adjustedAiNetChange: occupation.adjustedAiNetChange,
  scenarios: {
    baseline: occupation.baseline,
    automation: occupation.automation,
    technological: occupation.technological,
    humanCentric: occupation.humanCentric,
  },
  requirements: occupation.requirements,
}))

export const ukSectors: SectorRecord[] = rawSectors
  .filter((sector) => sector.kind === 'sector' && sector.rates !== null)
  .map((sector) => {
    const ratesByYear = Object.fromEntries(
      sectorYears.map((year, index) => [year, sector.rates?.[index] ?? 0]),
    ) as Record<number, number>

    return {
      code: sector.code,
      label: sector.label,
      sectionCode: sector.sectionCode,
      sectionLabel: sector.sectionLabel,
      penetration2013: ratesByYear[2013],
      penetration2023: ratesByYear[2023],
      penetrationGain: ratesByYear[2023] - ratesByYear[2013],
      ratesByYear,
    }
  })

export const digitalAccessHighlights = [
  {
    label: 'Households with internet access',
    value: '96%',
    detail: 'Great Britain, Jan-Feb 2020 (ONS Internet Access bulletin)',
  },
  {
    label: '65+ single-adult households connected',
    value: '80%',
    detail: 'The oldest households remained the least connected despite year-on-year gains.',
  },
  {
    label: 'Adults using internet banking',
    value: '76%',
    detail: 'A useful proxy for everyday digital participation in the economy.',
  },
  {
    label: 'Adults shopping online',
    value: '87%',
    detail: 'Shows how deeply digital channels already mediate household consumption.',
  },
]

export const sourceLinks = [
  {
    label: 'DSIT / Warwick Institute for Employment Research: AI Skills for Life and Work (2026)',
    href: 'https://www.gov.uk/government/publications/ai-skills-for-life-and-work-labour-market-and-skills-projections/ai-skills-for-life-and-work-labour-market-and-skills-projections',
  },
  {
    label: 'ONS: Internet access - households and individuals, Great Britain (2020)',
    href: 'https://www.ons.gov.uk/peoplepopulationandcommunity/householdcharacteristics/homeinternetandsocialmediausage/bulletins/internetaccesshouseholdsandindividuals/2020',
  },
  {
    label: 'Nomis API',
    href: 'https://www.nomisweb.co.uk/api/v01/help',
  },
]