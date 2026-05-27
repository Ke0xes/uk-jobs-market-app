# UK AI Work Explorer

A Vite + React dashboard inspired by Karpathy's jobs explorer, rebuilt around official UK labour-market and digital-access sources.

## What this build does

- Renders a treemap of UK AI-related occupations, sized by 2024 employment.
- Lets you recolour the map by AI exposure, projected employment growth, AI jobs in 2035, or AI job gain.
- Shows a detail panel for the selected occupation plus UK digital-access context cards.
- Documents the methodology and source links inside the UI.

## Source basis

This version is intentionally strict about provenance.

- Occupation-level employment and AI-activity figures come from the 2026 DSIT / Warwick Institute for Employment Research publication: `AI Skills for Life and Work: Labour market and skills projections`.
- Digital-access context cards come from the ONS bulletin `Internet access - households and individuals, Great Britain: 2020`.
- Nomis is linked in the app as the next official source to use when expanding this from the current AI-related occupation subset into a broader whole-economy UK labour explorer.

## Current scope

This is not yet a full UK equivalent of the entire US BLS explorer. It focuses on the strongest official UK occupation-level AI dataset currently available: AI-related 4-digit SOC occupations in the adjusted 2024-2035 scenario.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
