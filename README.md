# UK AI Work Explorer

![UK AI Work Explorer screenshot](App%20shot.jpg)

UK AI Work Explorer is a narrative data app for understanding where artificial intelligence is most visible in the UK labour market, which occupations appear most exposed to AI-driven change, and which sectors show the strongest signs of AI intensity. It is designed to make official UK labour-market evidence easier to scan, compare, and interpret through a treemap interface rather than a dense appendix of tables.

The purpose of the project is straightforward: give people a clearer way to explore how AI is showing up in work across the UK without relying on vague headlines or speculative rankings. Instead of presenting AI as an abstract trend, the app turns published UK evidence into a visual map of occupations and sectors so users can quickly see where employment is large, where AI-related activity is concentrated, and where change appears to be accelerating.

## Inspiration

The app was directly inspired by Andrej Karpathy's jobs explorer at [karpathy.ai/jobs](https://karpathy.ai/jobs). That project set the reference point for the overall experience: a large, visual, treemap-led interface that helps users reason about labour-market change by scanning patterns rather than reading spreadsheets. This build keeps that spirit, but reworks it around UK evidence, UK occupational structure, and UK-specific measures of AI relevance.

## What The App Shows

The explorer currently supports two complementary views.

- Occupations view maps UK occupations using the DSIT / Warwick labour-market projections and AI-related job estimates.
- Sector view maps industries using historical AI patent penetration rates, showing where AI intensity has been strongest over time.
- Layer controls let the user recolor the treemap by exposure, growth, scale, or change depending on the active view.
- Selection panels and tooltips explain how to read each tile, including the distinction between total jobs, AI-involved jobs, and replacement demand.

Together, those views are meant to answer a simple question: where in the UK economy is AI most likely to matter, and what kind of labour-market signal supports that conclusion?

## Data And Method

The app is intentionally strict about source legitimacy.

- Occupation-level projections and AI-related job figures come from the 2026 DSIT / Warwick Institute for Employment Research publication, AI Skills for Life and Work: Labour market and skills projections.
- The occupation explorer is backed by the published appendix tables 8.1 to 8.4.
- The sector explorer uses appendix tables 8.5 and 8.6, which provide AI patent penetration history by sector.
- UK digital-access context is drawn from the ONS bulletin Internet access - households and individuals, Great Britain: 2020.

This matters because the app is not trying to guess the future from scraped job ads or proprietary black-box scores. Its job is to make published UK evidence legible and interactive.

## Data Sources

- [DSIT / Warwick Institute for Employment Research: AI Skills for Life and Work: Labour market and skills projections (2026)](https://www.gov.uk/government/publications/ai-skills-for-life-and-work-labour-market-and-skills-projections/ai-skills-for-life-and-work-labour-market-and-skills-projections)
- [ONS: Internet access - households and individuals, Great Britain (2020)](https://www.ons.gov.uk/peoplepopulationandcommunity/householdcharacteristics/homeinternetandsocialmediausage/bulletins/internetaccesshouseholdsandindividuals/2020)
- [Nomis API documentation](https://www.nomisweb.co.uk/api/v01/help)

## Current Scope

This is not a full UK clone of the entire US jobs explorer ecosystem. It is a focused UK interpretation built around the strongest official occupation- and sector-level AI evidence currently available in the cited government-backed report. Where the source tables do not publish a metric directly, the interface stays explicit about that limitation. For example, sector tiles are sized by 2023 AI patent share because the appendix does not provide comparable sector employment totals for the same view.

## Running The Project

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```
