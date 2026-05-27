export type ScenarioKey = 'baseline' | 'automation' | 'technological' | 'humanCentric'

export type OccupationScenarioLevels = {
  y2024: number
  y2030: number
  y2035: number
}

export type OccupationScenarioRequirement = {
  netChange: number
  replacementDemand: number
}

export type RawOccupation = {
  code: string
  title: string
  baseline: OccupationScenarioLevels
  automation: OccupationScenarioLevels
  technological: OccupationScenarioLevels
  humanCentric: OccupationScenarioLevels
  requirements: Record<ScenarioKey, OccupationScenarioRequirement>
  adjustedEmployment: OccupationScenarioLevels
  adjustedAiJobs: OccupationScenarioLevels
  adjustedAiNetChange: number
}

export type RawSector = {
  code: string
  label: string
  sectionCode: string
  sectionLabel: string
  kind: 'section' | 'sector'
  rates: (number | null)[] | null
}

export const rawOccupations: RawOccupation[] = [
  {
    "code": "1121",
    "title": "Production managers and directors in manufacturing",
    "baseline": { "y2024": 268, "y2030": 283, "y2035": 296 },
    "automation": { "y2024": 263, "y2030": 268, "y2035": 271 },
    "technological": { "y2024": 268, "y2030": 279, "y2035": 287 },
    "humanCentric": { "y2024": 268, "y2030": 278, "y2035": 286 },
    "requirements": {
      "baseline": {
        "netChange": 29,
        "replacementDemand": 110
      },
      "automation": {
        "netChange": 8,
        "replacementDemand": 104
      },
      "technological": {
        "netChange": 19,
        "replacementDemand": 108
      },
      "humanCentric": {
        "netChange": 18,
        "replacementDemand": 108
      }
    },
    "adjustedEmployment": { "y2024": 268, "y2030": 279, "y2035": 287 },
    "adjustedAiJobs": { "y2024": 2.6, "y2030": 58.8, "y2035": 73.9 },
    "adjustedAiNetChange": 71
  },
  {
    "code": "1131",
    "title": "Financial managers and directors",
    "baseline": { "y2024": 344, "y2030": 364, "y2035": 381 },
    "automation": { "y2024": 339, "y2030": 344, "y2035": 348 },
    "technological": { "y2024": 345, "y2030": 359, "y2035": 370 },
    "humanCentric": { "y2024": 344, "y2030": 357, "y2035": 368 },
    "requirements": {
      "baseline": {
        "netChange": 37,
        "replacementDemand": 141
      },
      "automation": {
        "netChange": 10,
        "replacementDemand": 134
      },
      "technological": {
        "netChange": 25,
        "replacementDemand": 139
      },
      "humanCentric": {
        "netChange": 24,
        "replacementDemand": 139
      }
    },
    "adjustedEmployment": { "y2024": 345, "y2030": 359, "y2035": 370 },
    "adjustedAiJobs": { "y2024": 2, "y2030": 67.6, "y2035": 82.7 },
    "adjustedAiNetChange": 81
  },
  {
    "code": "1132",
    "title": "Marketing, sales and advertising directors",
    "baseline": { "y2024": 278, "y2030": 294, "y2035": 307 },
    "automation": { "y2024": 273, "y2030": 278, "y2035": 281 },
    "technological": { "y2024": 278, "y2030": 289, "y2035": 298 },
    "humanCentric": { "y2024": 278, "y2030": 288, "y2035": 297 },
    "requirements": {
      "baseline": {
        "netChange": 30,
        "replacementDemand": 114
      },
      "automation": {
        "netChange": 8,
        "replacementDemand": 108
      },
      "technological": {
        "netChange": 20,
        "replacementDemand": 112
      },
      "humanCentric": {
        "netChange": 19,
        "replacementDemand": 112
      }
    },
    "adjustedEmployment": { "y2024": 278, "y2030": 289, "y2035": 298 },
    "adjustedAiJobs": { "y2024": 1.7, "y2030": 53.9, "y2035": 65.7 },
    "adjustedAiNetChange": 64
  },
  {
    "code": "1133",
    "title": "Public relations and communications directors",
    "baseline": { "y2024": 14, "y2030": 15, "y2035": 16 },
    "automation": { "y2024": 14, "y2030": 14, "y2035": 15 },
    "technological": { "y2024": 14, "y2030": 15, "y2035": 15 },
    "humanCentric": { "y2024": 14, "y2030": 15, "y2035": 15 },
    "requirements": {
      "baseline": {
        "netChange": 2,
        "replacementDemand": 6
      },
      "automation": {
        "netChange": 0,
        "replacementDemand": 6
      },
      "technological": {
        "netChange": 1,
        "replacementDemand": 6
      },
      "humanCentric": {
        "netChange": 1,
        "replacementDemand": 6
      }
    },
    "adjustedEmployment": { "y2024": 14, "y2030": 15, "y2035": 15 },
    "adjustedAiJobs": { "y2024": 0.1, "y2030": 3.8, "y2035": 5.2 },
    "adjustedAiNetChange": 5
  },
  {
    "code": "1136",
    "title": "Human resource managers and directors",
    "baseline": { "y2024": 247, "y2030": 261, "y2035": 273 },
    "automation": { "y2024": 243, "y2030": 247, "y2035": 250 },
    "technological": { "y2024": 247, "y2030": 257, "y2035": 265 },
    "humanCentric": { "y2024": 247, "y2030": 256, "y2035": 264 },
    "requirements": {
      "baseline": {
        "netChange": 26,
        "replacementDemand": 101
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 96
      },
      "technological": {
        "netChange": 18,
        "replacementDemand": 100
      },
      "humanCentric": {
        "netChange": 17,
        "replacementDemand": 99
      }
    },
    "adjustedEmployment": { "y2024": 247, "y2030": 257, "y2035": 265 },
    "adjustedAiJobs": { "y2024": 1, "y2030": 52.4, "y2035": 65.3 },
    "adjustedAiNetChange": 64
  },
  {
    "code": "1137",
    "title": "Information technology directors",
    "baseline": { "y2024": 194, "y2030": 205, "y2035": 215 },
    "automation": { "y2024": 191, "y2030": 194, "y2035": 197 },
    "technological": { "y2024": 195, "y2030": 202, "y2035": 209 },
    "humanCentric": { "y2024": 194, "y2030": 202, "y2035": 208 },
    "requirements": {
      "baseline": {
        "netChange": 21,
        "replacementDemand": 80
      },
      "automation": {
        "netChange": 5,
        "replacementDemand": 75
      },
      "technological": {
        "netChange": 14,
        "replacementDemand": 78
      },
      "humanCentric": {
        "netChange": 13,
        "replacementDemand": 78
      }
    },
    "adjustedEmployment": { "y2024": 195, "y2030": 202, "y2035": 209 },
    "adjustedAiJobs": { "y2024": 2.6, "y2030": 86.8, "y2035": 148.4 },
    "adjustedAiNetChange": 146
  },
  {
    "code": "1150",
    "title": "Managers and directors in retail and wholesale",
    "baseline": { "y2024": 304, "y2030": 322, "y2035": 337 },
    "automation": { "y2024": 299, "y2030": 305, "y2035": 308 },
    "technological": { "y2024": 305, "y2030": 317, "y2035": 327 },
    "humanCentric": { "y2024": 304, "y2030": 316, "y2035": 325 },
    "requirements": {
      "baseline": {
        "netChange": 33,
        "replacementDemand": 125
      },
      "automation": {
        "netChange": 9,
        "replacementDemand": 118
      },
      "technological": {
        "netChange": 22,
        "replacementDemand": 123
      },
      "humanCentric": {
        "netChange": 21,
        "replacementDemand": 123
      }
    },
    "adjustedEmployment": { "y2024": 305, "y2030": 317, "y2035": 327 },
    "adjustedAiJobs": { "y2024": 0.4, "y2030": 60.8, "y2035": 74.7 },
    "adjustedAiNetChange": 74
  },
  {
    "code": "1163",
    "title": "Senior officers in fire, ambulance, prison and related services",
    "baseline": { "y2024": 15, "y2030": 16, "y2035": 17 },
    "automation": { "y2024": 15, "y2030": 15, "y2035": 16 },
    "technological": { "y2024": 16, "y2030": 16, "y2035": 17 },
    "humanCentric": { "y2024": 15, "y2030": 16, "y2035": 17 },
    "requirements": {
      "baseline": {
        "netChange": 2,
        "replacementDemand": 6
      },
      "automation": {
        "netChange": 0,
        "replacementDemand": 6
      },
      "technological": {
        "netChange": 1,
        "replacementDemand": 6
      },
      "humanCentric": {
        "netChange": 1,
        "replacementDemand": 6
      }
    },
    "adjustedEmployment": { "y2024": 16, "y2030": 16, "y2035": 17 },
    "adjustedAiJobs": { "y2024": 0.3, "y2030": 2.7, "y2035": 3.2 },
    "adjustedAiNetChange": 3
  },
  {
    "code": "1171",
    "title": "Health services and public health managers and directors",
    "baseline": { "y2024": 58, "y2030": 61, "y2035": 64 },
    "automation": { "y2024": 57, "y2030": 58, "y2035": 58 },
    "technological": { "y2024": 58, "y2030": 60, "y2035": 62 },
    "humanCentric": { "y2024": 58, "y2030": 60, "y2035": 61 },
    "requirements": {
      "baseline": {
        "netChange": 6,
        "replacementDemand": 24
      },
      "automation": {
        "netChange": 2,
        "replacementDemand": 22
      },
      "technological": {
        "netChange": 4,
        "replacementDemand": 23
      },
      "humanCentric": {
        "netChange": 4,
        "replacementDemand": 23
      }
    },
    "adjustedEmployment": { "y2024": 58, "y2030": 60, "y2035": 62 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 17.4, "y2035": 24.2 },
    "adjustedAiNetChange": 24
  },
  {
    "code": "1259",
    "title": "Managers and proprietors in other services n.e.c.",
    "baseline": { "y2024": 153, "y2030": 167, "y2035": 180 },
    "automation": { "y2024": 151, "y2030": 160, "y2035": 167 },
    "technological": { "y2024": 154, "y2030": 167, "y2035": 178 },
    "humanCentric": { "y2024": 154, "y2030": 166, "y2035": 176 },
    "requirements": {
      "baseline": {
        "netChange": 27,
        "replacementDemand": 71
      },
      "automation": {
        "netChange": 16,
        "replacementDemand": 68
      },
      "technological": {
        "netChange": 24,
        "replacementDemand": 71
      },
      "humanCentric": {
        "netChange": 22,
        "replacementDemand": 70
      }
    },
    "adjustedEmployment": { "y2024": 154, "y2030": 167, "y2035": 178 },
    "adjustedAiJobs": { "y2024": 0.7, "y2030": 30.6, "y2035": 36.9 },
    "adjustedAiNetChange": 36
  },
  {
    "code": "2112",
    "title": "Biological scientists",
    "baseline": { "y2024": 30, "y2030": 32, "y2035": 33 },
    "automation": { "y2024": 31, "y2030": 34, "y2035": 37 },
    "technological": { "y2024": 31, "y2030": 35, "y2035": 38 },
    "humanCentric": { "y2024": 31, "y2030": 35, "y2035": 39 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 9
      },
      "automation": {
        "netChange": 6,
        "replacementDemand": 10
      },
      "technological": {
        "netChange": 8,
        "replacementDemand": 10
      },
      "humanCentric": {
        "netChange": 8,
        "replacementDemand": 10
      }
    },
    "adjustedEmployment": { "y2024": 31, "y2030": 35, "y2035": 38 },
    "adjustedAiJobs": { "y2024": 0.1, "y2030": 10.7, "y2035": 14.8 },
    "adjustedAiNetChange": 15
  },
  {
    "code": "2114",
    "title": "Physical scientists",
    "baseline": { "y2024": 30, "y2030": 32, "y2035": 34 },
    "automation": { "y2024": 31, "y2030": 35, "y2035": 38 },
    "technological": { "y2024": 32, "y2030": 36, "y2035": 39 },
    "humanCentric": { "y2024": 32, "y2030": 36, "y2035": 40 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 9
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 10
      },
      "technological": {
        "netChange": 8,
        "replacementDemand": 10
      },
      "humanCentric": {
        "netChange": 8,
        "replacementDemand": 10
      }
    },
    "adjustedEmployment": { "y2024": 32, "y2030": 36, "y2035": 39 },
    "adjustedAiJobs": { "y2024": 0.1, "y2030": 11.3, "y2035": 16 },
    "adjustedAiNetChange": 16
  },
  {
    "code": "2115",
    "title": "Social and humanities scientists",
    "baseline": { "y2024": 42, "y2030": 45, "y2035": 47 },
    "automation": { "y2024": 43, "y2030": 48, "y2035": 52 },
    "technological": { "y2024": 44, "y2030": 49, "y2035": 54 },
    "humanCentric": { "y2024": 44, "y2030": 50, "y2035": 55 },
    "requirements": {
      "baseline": {
        "netChange": 5,
        "replacementDemand": 13
      },
      "automation": {
        "netChange": 9,
        "replacementDemand": 14
      },
      "technological": {
        "netChange": 11,
        "replacementDemand": 14
      },
      "humanCentric": {
        "netChange": 11,
        "replacementDemand": 14
      }
    },
    "adjustedEmployment": { "y2024": 44, "y2030": 49, "y2035": 54 },
    "adjustedAiJobs": { "y2024": 0.1, "y2030": 10.8, "y2035": 13.5 },
    "adjustedAiNetChange": 13
  },
  {
    "code": "2121",
    "title": "Civil engineers",
    "baseline": { "y2024": 121, "y2030": 129, "y2035": 136 },
    "automation": { "y2024": 125, "y2030": 140, "y2035": 151 },
    "technological": { "y2024": 126, "y2030": 143, "y2035": 157 },
    "humanCentric": { "y2024": 127, "y2030": 145, "y2035": 159 },
    "requirements": {
      "baseline": {
        "netChange": 15,
        "replacementDemand": 37
      },
      "automation": {
        "netChange": 26,
        "replacementDemand": 40
      },
      "technological": {
        "netChange": 31,
        "replacementDemand": 41
      },
      "humanCentric": {
        "netChange": 33,
        "replacementDemand": 41
      }
    },
    "adjustedEmployment": { "y2024": 126, "y2030": 143, "y2035": 157 },
    "adjustedAiJobs": { "y2024": 0.4, "y2030": 50.2, "y2035": 73.8 },
    "adjustedAiNetChange": 73
  },
  {
    "code": "2122",
    "title": "Mechanical engineers",
    "baseline": { "y2024": 77, "y2030": 82, "y2035": 86 },
    "automation": { "y2024": 79, "y2030": 89, "y2035": 96 },
    "technological": { "y2024": 80, "y2030": 91, "y2035": 100 },
    "humanCentric": { "y2024": 81, "y2030": 92, "y2035": 101 },
    "requirements": {
      "baseline": {
        "netChange": 10,
        "replacementDemand": 23
      },
      "automation": {
        "netChange": 17,
        "replacementDemand": 25
      },
      "technological": {
        "netChange": 19,
        "replacementDemand": 26
      },
      "humanCentric": {
        "netChange": 21,
        "replacementDemand": 26
      }
    },
    "adjustedEmployment": { "y2024": 80, "y2030": 91, "y2035": 100 },
    "adjustedAiJobs": { "y2024": 0.8, "y2030": 34.6, "y2035": 53 },
    "adjustedAiNetChange": 52
  },
  {
    "code": "2123",
    "title": "Electrical engineers",
    "baseline": { "y2024": 34, "y2030": 36, "y2035": 38 },
    "automation": { "y2024": 35, "y2030": 39, "y2035": 42 },
    "technological": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "humanCentric": { "y2024": 36, "y2030": 41, "y2035": 45 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 10
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 11
      },
      "technological": {
        "netChange": 9,
        "replacementDemand": 11
      },
      "humanCentric": {
        "netChange": 9,
        "replacementDemand": 12
      }
    },
    "adjustedEmployment": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "adjustedAiJobs": { "y2024": 0.2, "y2030": 15.6, "y2035": 24.2 },
    "adjustedAiNetChange": 24
  },
  {
    "code": "2124",
    "title": "Electronics engineers",
    "baseline": { "y2024": 39, "y2030": 42, "y2035": 44 },
    "automation": { "y2024": 41, "y2030": 45, "y2035": 49 },
    "technological": { "y2024": 41, "y2030": 47, "y2035": 51 },
    "humanCentric": { "y2024": 41, "y2030": 47, "y2035": 52 },
    "requirements": {
      "baseline": {
        "netChange": 5,
        "replacementDemand": 12
      },
      "automation": {
        "netChange": 9,
        "replacementDemand": 13
      },
      "technological": {
        "netChange": 10,
        "replacementDemand": 13
      },
      "humanCentric": {
        "netChange": 11,
        "replacementDemand": 13
      }
    },
    "adjustedEmployment": { "y2024": 41, "y2030": 47, "y2035": 51 },
    "adjustedAiJobs": { "y2024": 0.7, "y2030": 18.3, "y2035": 28.6 },
    "adjustedAiNetChange": 28
  },
  {
    "code": "2125",
    "title": "Production and process engineers",
    "baseline": { "y2024": 39, "y2030": 42, "y2035": 44 },
    "automation": { "y2024": 41, "y2030": 45, "y2035": 49 },
    "technological": { "y2024": 41, "y2030": 47, "y2035": 51 },
    "humanCentric": { "y2024": 41, "y2030": 47, "y2035": 52 },
    "requirements": {
      "baseline": {
        "netChange": 5,
        "replacementDemand": 12
      },
      "automation": {
        "netChange": 9,
        "replacementDemand": 13
      },
      "technological": {
        "netChange": 10,
        "replacementDemand": 13
      },
      "humanCentric": {
        "netChange": 11,
        "replacementDemand": 13
      }
    },
    "adjustedEmployment": { "y2024": 41, "y2030": 47, "y2035": 51 },
    "adjustedAiJobs": { "y2024": 0.3, "y2030": 17.4, "y2035": 26.5 },
    "adjustedAiNetChange": 26
  },
  {
    "code": "2126",
    "title": "Aerospace engineers",
    "baseline": { "y2024": 25, "y2030": 26, "y2035": 28 },
    "automation": { "y2024": 26, "y2030": 29, "y2035": 31 },
    "technological": { "y2024": 26, "y2030": 29, "y2035": 32 },
    "humanCentric": { "y2024": 26, "y2030": 30, "y2035": 33 },
    "requirements": {
      "baseline": {
        "netChange": 3,
        "replacementDemand": 7
      },
      "automation": {
        "netChange": 5,
        "replacementDemand": 8
      },
      "technological": {
        "netChange": 6,
        "replacementDemand": 8
      },
      "humanCentric": {
        "netChange": 7,
        "replacementDemand": 8
      }
    },
    "adjustedEmployment": { "y2024": 26, "y2030": 29, "y2035": 32 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 11.6, "y2035": 18.2 },
    "adjustedAiNetChange": 18
  },
  {
    "code": "2131",
    "title": "IT project managers",
    "baseline": { "y2024": 120, "y2030": 128, "y2035": 135 },
    "automation": { "y2024": 124, "y2030": 138, "y2035": 150 },
    "technological": { "y2024": 125, "y2030": 142, "y2035": 155 },
    "humanCentric": { "y2024": 126, "y2030": 143, "y2035": 158 },
    "requirements": {
      "baseline": {
        "netChange": 15,
        "replacementDemand": 36
      },
      "automation": {
        "netChange": 26,
        "replacementDemand": 39
      },
      "technological": {
        "netChange": 30,
        "replacementDemand": 40
      },
      "humanCentric": {
        "netChange": 32,
        "replacementDemand": 41
      }
    },
    "adjustedEmployment": { "y2024": 125, "y2030": 142, "y2035": 155 },
    "adjustedAiJobs": { "y2024": 2.1, "y2030": 63.8, "y2035": 108.5 },
    "adjustedAiNetChange": 106
  },
  {
    "code": "2132",
    "title": "IT managers",
    "baseline": { "y2024": 209, "y2030": 223, "y2035": 235 },
    "automation": { "y2024": 216, "y2030": 241, "y2035": 261 },
    "technological": { "y2024": 218, "y2030": 247, "y2035": 271 },
    "humanCentric": { "y2024": 219, "y2030": 250, "y2035": 275 },
    "requirements": {
      "baseline": {
        "netChange": 26,
        "replacementDemand": 63
      },
      "automation": {
        "netChange": 45,
        "replacementDemand": 68
      },
      "technological": {
        "netChange": 53,
        "replacementDemand": 70
      },
      "humanCentric": {
        "netChange": 56,
        "replacementDemand": 71
      }
    },
    "adjustedEmployment": { "y2024": 218, "y2030": 247, "y2035": 271 },
    "adjustedAiJobs": { "y2024": 3.1, "y2030": 116.1, "y2035": 203.3 },
    "adjustedAiNetChange": 200
  },
  {
    "code": "2133",
    "title": "IT business analysts, architects and systems designers",
    "baseline": { "y2024": 147, "y2030": 157, "y2035": 165 },
    "automation": { "y2024": 152, "y2030": 170, "y2035": 184 },
    "technological": { "y2024": 154, "y2030": 174, "y2035": 191 },
    "humanCentric": { "y2024": 154, "y2030": 176, "y2035": 194 },
    "requirements": {
      "baseline": {
        "netChange": 18,
        "replacementDemand": 44
      },
      "automation": {
        "netChange": 32,
        "replacementDemand": 48
      },
      "technological": {
        "netChange": 37,
        "replacementDemand": 49
      },
      "humanCentric": {
        "netChange": 40,
        "replacementDemand": 50
      }
    },
    "adjustedEmployment": { "y2024": 154, "y2030": 174, "y2035": 191 },
    "adjustedAiJobs": { "y2024": 4.7, "y2030": 83.1, "y2035": 147.1 },
    "adjustedAiNetChange": 142
  },
  {
    "code": "2134",
    "title": "Programmers and software development professionals",
    "baseline": { "y2024": 491, "y2030": 523, "y2035": 551 },
    "automation": { "y2024": 506, "y2030": 566, "y2035": 613 },
    "technological": { "y2024": 512, "y2030": 580, "y2035": 636 },
    "humanCentric": { "y2024": 514, "y2030": 586, "y2035": 646 },
    "requirements": {
      "baseline": {
        "netChange": 61,
        "replacementDemand": 148
      },
      "automation": {
        "netChange": 106,
        "replacementDemand": 160
      },
      "technological": {
        "netChange": 124,
        "replacementDemand": 164
      },
      "humanCentric": {
        "netChange": 132,
        "replacementDemand": 166
      }
    },
    "adjustedEmployment": { "y2024": 512, "y2030": 580, "y2035": 636 },
    "adjustedAiJobs": { "y2024": 17, "y2030": 301.3, "y2035": 572.4 },
    "adjustedAiNetChange": 555
  },
  {
    "code": "2135",
    "title": "Cyber security professionals",
    "baseline": { "y2024": 36, "y2030": 38, "y2035": 40 },
    "automation": { "y2024": 37, "y2030": 41, "y2035": 44 },
    "technological": { "y2024": 37, "y2030": 42, "y2035": 46 },
    "humanCentric": { "y2024": 37, "y2030": 43, "y2035": 47 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 11
      },
      "automation": {
        "netChange": 8,
        "replacementDemand": 12
      },
      "technological": {
        "netChange": 9,
        "replacementDemand": 12
      },
      "humanCentric": {
        "netChange": 10,
        "replacementDemand": 12
      }
    },
    "adjustedEmployment": { "y2024": 37, "y2030": 42, "y2035": 46 },
    "adjustedAiJobs": { "y2024": 0.4, "y2030": 21.7, "y2035": 40.9 },
    "adjustedAiNetChange": 41
  },
  {
    "code": "2136",
    "title": "IT quality and testing professionals",
    "baseline": { "y2024": 34, "y2030": 36, "y2035": 38 },
    "automation": { "y2024": 35, "y2030": 39, "y2035": 42 },
    "technological": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "humanCentric": { "y2024": 36, "y2030": 40, "y2035": 45 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 10
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 11
      },
      "technological": {
        "netChange": 9,
        "replacementDemand": 11
      },
      "humanCentric": {
        "netChange": 9,
        "replacementDemand": 11
      }
    },
    "adjustedEmployment": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "adjustedAiJobs": { "y2024": 0.4, "y2030": 19.7, "y2035": 35.6 },
    "adjustedAiNetChange": 35
  },
  {
    "code": "2137",
    "title": "IT network professionals",
    "baseline": { "y2024": 35, "y2030": 37, "y2035": 39 },
    "automation": { "y2024": 36, "y2030": 40, "y2035": 43 },
    "technological": { "y2024": 36, "y2030": 41, "y2035": 45 },
    "humanCentric": { "y2024": 36, "y2030": 41, "y2035": 45 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 10
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 11
      },
      "technological": {
        "netChange": 9,
        "replacementDemand": 12
      },
      "humanCentric": {
        "netChange": 9,
        "replacementDemand": 12
      }
    },
    "adjustedEmployment": { "y2024": 36, "y2030": 41, "y2035": 45 },
    "adjustedAiJobs": { "y2024": 0.4, "y2030": 19.4, "y2035": 34.2 },
    "adjustedAiNetChange": 34
  },
  {
    "code": "2141",
    "title": "Web design professionals",
    "baseline": { "y2024": 34, "y2030": 36, "y2035": 38 },
    "automation": { "y2024": 35, "y2030": 39, "y2035": 42 },
    "technological": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "humanCentric": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 10
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 11
      },
      "technological": {
        "netChange": 8,
        "replacementDemand": 11
      },
      "humanCentric": {
        "netChange": 9,
        "replacementDemand": 11
      }
    },
    "adjustedEmployment": { "y2024": 35, "y2030": 40, "y2035": 44 },
    "adjustedAiJobs": { "y2024": 0.7, "y2030": 17, "y2035": 27.7 },
    "adjustedAiNetChange": 27
  },
  {
    "code": "2142",
    "title": "Graphic and multimedia designers",
    "baseline": { "y2024": 107, "y2030": 114, "y2035": 120 },
    "automation": { "y2024": 110, "y2030": 123, "y2035": 134 },
    "technological": { "y2024": 112, "y2030": 127, "y2035": 139 },
    "humanCentric": { "y2024": 112, "y2030": 128, "y2035": 141 },
    "requirements": {
      "baseline": {
        "netChange": 13,
        "replacementDemand": 32
      },
      "automation": {
        "netChange": 23,
        "replacementDemand": 35
      },
      "technological": {
        "netChange": 27,
        "replacementDemand": 36
      },
      "humanCentric": {
        "netChange": 29,
        "replacementDemand": 36
      }
    },
    "adjustedEmployment": { "y2024": 112, "y2030": 127, "y2035": 139 },
    "adjustedAiJobs": { "y2024": 0.8, "y2030": 52.7, "y2035": 84.8 },
    "adjustedAiNetChange": 84
  },
  {
    "code": "2161",
    "title": "Research and development ( R&D ) managers",
    "baseline": { "y2024": 101, "y2030": 108, "y2035": 114 },
    "automation": { "y2024": 104, "y2030": 117, "y2035": 126 },
    "technological": { "y2024": 106, "y2030": 120, "y2035": 131 },
    "humanCentric": { "y2024": 106, "y2030": 121, "y2035": 133 },
    "requirements": {
      "baseline": {
        "netChange": 13,
        "replacementDemand": 31
      },
      "automation": {
        "netChange": 22,
        "replacementDemand": 33
      },
      "technological": {
        "netChange": 26,
        "replacementDemand": 34
      },
      "humanCentric": {
        "netChange": 27,
        "replacementDemand": 34
      }
    },
    "adjustedEmployment": { "y2024": 106, "y2030": 120, "y2035": 131 },
    "adjustedAiJobs": { "y2024": 1.4, "y2030": 49.1, "y2035": 78.6 },
    "adjustedAiNetChange": 77
  },
  {
    "code": "2162",
    "title": "Other researchers, unspecified discipline",
    "baseline": { "y2024": 60, "y2030": 64, "y2035": 68 },
    "automation": { "y2024": 62, "y2030": 69, "y2035": 75 },
    "technological": { "y2024": 63, "y2030": 71, "y2035": 78 },
    "humanCentric": { "y2024": 63, "y2030": 72, "y2035": 79 },
    "requirements": {
      "baseline": {
        "netChange": 7,
        "replacementDemand": 18
      },
      "automation": {
        "netChange": 13,
        "replacementDemand": 20
      },
      "technological": {
        "netChange": 15,
        "replacementDemand": 20
      },
      "humanCentric": {
        "netChange": 16,
        "replacementDemand": 20
      }
    },
    "adjustedEmployment": { "y2024": 63, "y2030": 71, "y2035": 78 },
    "adjustedAiJobs": { "y2024": 3.8, "y2030": 23.8, "y2035": 34.3 },
    "adjustedAiNetChange": 31
  },
  {
    "code": "2226",
    "title": "Other psychologists",
    "baseline": { "y2024": 34, "y2030": 36, "y2035": 38 },
    "automation": { "y2024": 34, "y2030": 36, "y2035": 38 },
    "technological": { "y2024": 35, "y2030": 38, "y2035": 40 },
    "humanCentric": { "y2024": 35, "y2030": 38, "y2035": 40 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 15
      },
      "automation": {
        "netChange": 3,
        "replacementDemand": 14
      },
      "technological": {
        "netChange": 5,
        "replacementDemand": 15
      },
      "humanCentric": {
        "netChange": 5,
        "replacementDemand": 15
      }
    },
    "adjustedEmployment": { "y2024": 35, "y2030": 38, "y2035": 40 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 6.7, "y2035": 8 },
    "adjustedAiNetChange": 8
  },
  {
    "code": "2311",
    "title": "Higher education teaching professionals",
    "baseline": { "y2024": 261, "y2030": 276, "y2035": 288 },
    "automation": { "y2024": 262, "y2030": 275, "y2035": 286 },
    "technological": { "y2024": 266, "y2030": 284, "y2035": 300 },
    "humanCentric": { "y2024": 266, "y2030": 285, "y2035": 301 },
    "requirements": {
      "baseline": {
        "netChange": 26,
        "replacementDemand": 105
      },
      "automation": {
        "netChange": 24,
        "replacementDemand": 105
      },
      "technological": {
        "netChange": 34,
        "replacementDemand": 109
      },
      "humanCentric": {
        "netChange": 35,
        "replacementDemand": 109
      }
    },
    "adjustedEmployment": { "y2024": 266, "y2030": 284, "y2035": 300 },
    "adjustedAiJobs": { "y2024": 4.9, "y2030": 48.1, "y2035": 57.2 },
    "adjustedAiNetChange": 52
  },
  {
    "code": "2313",
    "title": "Secondary education teaching professionals",
    "baseline": { "y2024": 524, "y2030": 553, "y2035": 577 },
    "automation": { "y2024": 525, "y2030": 552, "y2035": 574 },
    "technological": { "y2024": 534, "y2030": 571, "y2035": 602 },
    "humanCentric": { "y2024": 534, "y2030": 572, "y2035": 604 },
    "requirements": {
      "baseline": {
        "netChange": 53,
        "replacementDemand": 211
      },
      "automation": {
        "netChange": 48,
        "replacementDemand": 211
      },
      "technological": {
        "netChange": 68,
        "replacementDemand": 218
      },
      "humanCentric": {
        "netChange": 70,
        "replacementDemand": 219
      }
    },
    "adjustedEmployment": { "y2024": 534, "y2030": 571, "y2035": 602 },
    "adjustedAiJobs": { "y2024": 1.7, "y2030": 100.3, "y2035": 120.4 },
    "adjustedAiNetChange": 119
  },
  {
    "code": "2319",
    "title": "Teaching professionals n.e.c.",
    "baseline": { "y2024": 140, "y2030": 147, "y2035": 154 },
    "automation": { "y2024": 140, "y2030": 147, "y2035": 153 },
    "technological": { "y2024": 142, "y2030": 152, "y2035": 160 },
    "humanCentric": { "y2024": 142, "y2030": 152, "y2035": 161 },
    "requirements": {
      "baseline": {
        "netChange": 14,
        "replacementDemand": 56
      },
      "automation": {
        "netChange": 13,
        "replacementDemand": 56
      },
      "technological": {
        "netChange": 18,
        "replacementDemand": 58
      },
      "humanCentric": {
        "netChange": 19,
        "replacementDemand": 58
      }
    },
    "adjustedEmployment": { "y2024": 142, "y2030": 152, "y2035": 160 },
    "adjustedAiJobs": { "y2024": 0.7, "y2030": 20.9, "y2035": 24 },
    "adjustedAiNetChange": 23
  },
  {
    "code": "2322",
    "title": "Education managers",
    "baseline": { "y2024": 75, "y2030": 79, "y2035": 83 },
    "automation": { "y2024": 75, "y2030": 79, "y2035": 82 },
    "technological": { "y2024": 76, "y2030": 82, "y2035": 86 },
    "humanCentric": { "y2024": 76, "y2030": 82, "y2035": 86 },
    "requirements": {
      "baseline": {
        "netChange": 8,
        "replacementDemand": 30
      },
      "automation": {
        "netChange": 7,
        "replacementDemand": 30
      },
      "technological": {
        "netChange": 10,
        "replacementDemand": 31
      },
      "humanCentric": {
        "netChange": 10,
        "replacementDemand": 31
      }
    },
    "adjustedEmployment": { "y2024": 76, "y2030": 82, "y2035": 86 },
    "adjustedAiJobs": { "y2024": 0.3, "y2030": 14.9, "y2035": 18.1 },
    "adjustedAiNetChange": 18
  },
  {
    "code": "2412",
    "title": "Solicitors and lawyers",
    "baseline": { "y2024": 211, "y2030": 226, "y2035": 239 },
    "automation": { "y2024": 207, "y2030": 213, "y2035": 217 },
    "technological": { "y2024": 210, "y2030": 221, "y2035": 230 },
    "humanCentric": { "y2024": 210, "y2030": 221, "y2035": 230 },
    "requirements": {
      "baseline": {
        "netChange": 29,
        "replacementDemand": 81
      },
      "automation": {
        "netChange": 10,
        "replacementDemand": 77
      },
      "technological": {
        "netChange": 19,
        "replacementDemand": 79
      },
      "humanCentric": {
        "netChange": 19,
        "replacementDemand": 79
      }
    },
    "adjustedEmployment": { "y2024": 210, "y2030": 221, "y2035": 230 },
    "adjustedAiJobs": { "y2024": 0.7, "y2030": 33, "y2035": 38.6 },
    "adjustedAiNetChange": 38
  },
  {
    "code": "2421",
    "title": "Chartered and certified accountants",
    "baseline": { "y2024": 219, "y2030": 235, "y2035": 249 },
    "automation": { "y2024": 215, "y2030": 221, "y2035": 226 },
    "technological": { "y2024": 219, "y2030": 230, "y2035": 239 },
    "humanCentric": { "y2024": 219, "y2030": 230, "y2035": 239 },
    "requirements": {
      "baseline": {
        "netChange": 30,
        "replacementDemand": 84
      },
      "automation": {
        "netChange": 11,
        "replacementDemand": 80
      },
      "technological": {
        "netChange": 20,
        "replacementDemand": 83
      },
      "humanCentric": {
        "netChange": 20,
        "replacementDemand": 83
      }
    },
    "adjustedEmployment": { "y2024": 219, "y2030": 230, "y2035": 239 },
    "adjustedAiJobs": { "y2024": 2.8, "y2030": 51.3, "y2035": 65.3 },
    "adjustedAiNetChange": 62
  },
  {
    "code": "2422",
    "title": "Finance and investment analysts and advisers",
    "baseline": { "y2024": 310, "y2030": 332, "y2035": 352 },
    "automation": { "y2024": 304, "y2030": 313, "y2035": 319 },
    "technological": { "y2024": 309, "y2030": 325, "y2035": 338 },
    "humanCentric": { "y2024": 309, "y2030": 325, "y2035": 338 },
    "requirements": {
      "baseline": {
        "netChange": 42,
        "replacementDemand": 119
      },
      "automation": {
        "netChange": 15,
        "replacementDemand": 113
      },
      "technological": {
        "netChange": 28,
        "replacementDemand": 117
      },
      "humanCentric": {
        "netChange": 28,
        "replacementDemand": 117
      }
    },
    "adjustedEmployment": { "y2024": 309, "y2030": 325, "y2035": 338 },
    "adjustedAiJobs": { "y2024": 4.8, "y2030": 91.2, "y2035": 124.9 },
    "adjustedAiNetChange": 120
  },
  {
    "code": "2431",
    "title": "Management consultants and business analysts",
    "baseline": { "y2024": 197, "y2030": 212, "y2035": 224 },
    "automation": { "y2024": 194, "y2030": 199, "y2035": 203 },
    "technological": { "y2024": 197, "y2030": 207, "y2035": 215 },
    "humanCentric": { "y2024": 197, "y2030": 207, "y2035": 215 },
    "requirements": {
      "baseline": {
        "netChange": 27,
        "replacementDemand": 76
      },
      "automation": {
        "netChange": 10,
        "replacementDemand": 72
      },
      "technological": {
        "netChange": 18,
        "replacementDemand": 74
      },
      "humanCentric": {
        "netChange": 18,
        "replacementDemand": 74
      }
    },
    "adjustedEmployment": { "y2024": 197, "y2030": 207, "y2035": 215 },
    "adjustedAiJobs": { "y2024": 1, "y2030": 49.6, "y2035": 64.5 },
    "adjustedAiNetChange": 63
  },
  {
    "code": "2432",
    "title": "Marketing and commercial managers",
    "baseline": { "y2024": 111, "y2030": 119, "y2035": 126 },
    "automation": { "y2024": 109, "y2030": 112, "y2035": 114 },
    "technological": { "y2024": 110, "y2030": 116, "y2035": 121 },
    "humanCentric": { "y2024": 110, "y2030": 116, "y2035": 121 },
    "requirements": {
      "baseline": {
        "netChange": 15,
        "replacementDemand": 43
      },
      "automation": {
        "netChange": 6,
        "replacementDemand": 40
      },
      "technological": {
        "netChange": 10,
        "replacementDemand": 42
      },
      "humanCentric": {
        "netChange": 10,
        "replacementDemand": 42
      }
    },
    "adjustedEmployment": { "y2024": 110, "y2030": 116, "y2035": 121 },
    "adjustedAiJobs": { "y2024": 5.1, "y2030": 23, "y2035": 28.4 },
    "adjustedAiNetChange": 23
  },
  {
    "code": "2433",
    "title": "Actuaries, economists and statisticians",
    "baseline": { "y2024": 92, "y2030": 99, "y2035": 105 },
    "automation": { "y2024": 91, "y2030": 93, "y2035": 95 },
    "technological": { "y2024": 92, "y2030": 97, "y2035": 101 },
    "humanCentric": { "y2024": 92, "y2030": 97, "y2035": 101 },
    "requirements": {
      "baseline": {
        "netChange": 13,
        "replacementDemand": 36
      },
      "automation": {
        "netChange": 5,
        "replacementDemand": 34
      },
      "technological": {
        "netChange": 8,
        "replacementDemand": 35
      },
      "humanCentric": {
        "netChange": 8,
        "replacementDemand": 35
      }
    },
    "adjustedEmployment": { "y2024": 92, "y2030": 97, "y2035": 101 },
    "adjustedAiJobs": { "y2024": 3.6, "y2030": 28.7, "y2035": 40.1 },
    "adjustedAiNetChange": 36
  },
  {
    "code": "2434",
    "title": "Business and related research professionals",
    "baseline": { "y2024": 72, "y2030": 77, "y2035": 81 },
    "automation": { "y2024": 70, "y2030": 72, "y2035": 74 },
    "technological": { "y2024": 71, "y2030": 75, "y2035": 78 },
    "humanCentric": { "y2024": 71, "y2030": 75, "y2035": 78 },
    "requirements": {
      "baseline": {
        "netChange": 10,
        "replacementDemand": 28
      },
      "automation": {
        "netChange": 4,
        "replacementDemand": 26
      },
      "technological": {
        "netChange": 7,
        "replacementDemand": 27
      },
      "humanCentric": {
        "netChange": 7,
        "replacementDemand": 27
      }
    },
    "adjustedEmployment": { "y2024": 71, "y2030": 75, "y2035": 78 },
    "adjustedAiJobs": { "y2024": 2.2, "y2030": 15.5, "y2035": 19.3 },
    "adjustedAiNetChange": 17
  },
  {
    "code": "2439",
    "title": "Business, research and administrative professionals n.e.c.",
    "baseline": { "y2024": 91, "y2030": 97, "y2035": 103 },
    "automation": { "y2024": 89, "y2030": 92, "y2035": 94 },
    "technological": { "y2024": 91, "y2030": 95, "y2035": 99 },
    "humanCentric": { "y2024": 91, "y2030": 95, "y2035": 99 },
    "requirements": {
      "baseline": {
        "netChange": 12,
        "replacementDemand": 35
      },
      "automation": {
        "netChange": 5,
        "replacementDemand": 33
      },
      "technological": {
        "netChange": 8,
        "replacementDemand": 34
      },
      "humanCentric": {
        "netChange": 8,
        "replacementDemand": 34
      }
    },
    "adjustedEmployment": { "y2024": 91, "y2030": 95, "y2035": 99 },
    "adjustedAiJobs": { "y2024": 0.8, "y2030": 22.1, "y2035": 28.4 },
    "adjustedAiNetChange": 28
  },
  {
    "code": "2440",
    "title": "Business and financial project management professionals",
    "baseline": { "y2024": 268, "y2030": 287, "y2035": 304 },
    "automation": { "y2024": 263, "y2030": 270, "y2035": 276 },
    "technological": { "y2024": 267, "y2030": 281, "y2035": 292 },
    "humanCentric": { "y2024": 267, "y2030": 281, "y2035": 292 },
    "requirements": {
      "baseline": {
        "netChange": 37,
        "replacementDemand": 103
      },
      "automation": {
        "netChange": 13,
        "replacementDemand": 97
      },
      "technological": {
        "netChange": 24,
        "replacementDemand": 101
      },
      "humanCentric": {
        "netChange": 25,
        "replacementDemand": 101
      }
    },
    "adjustedEmployment": { "y2024": 267, "y2030": 281, "y2035": 292 },
    "adjustedAiJobs": { "y2024": 8.2, "y2030": 55.6, "y2035": 68.7 },
    "adjustedAiNetChange": 60
  },
  {
    "code": "2481",
    "title": "Quality control and planning engineers",
    "baseline": { "y2024": 47, "y2030": 51, "y2035": 53 },
    "automation": { "y2024": 46, "y2030": 48, "y2035": 49 },
    "technological": { "y2024": 47, "y2030": 49, "y2035": 51 },
    "humanCentric": { "y2024": 47, "y2030": 49, "y2035": 51 },
    "requirements": {
      "baseline": {
        "netChange": 6,
        "replacementDemand": 18
      },
      "automation": {
        "netChange": 2,
        "replacementDemand": 17
      },
      "technological": {
        "netChange": 4,
        "replacementDemand": 18
      },
      "humanCentric": {
        "netChange": 4,
        "replacementDemand": 18
      }
    },
    "adjustedEmployment": { "y2024": 47, "y2030": 49, "y2035": 51 },
    "adjustedAiJobs": { "y2024": 0.2, "y2030": 13.9, "y2035": 19.2 },
    "adjustedAiNetChange": 19
  },
  {
    "code": "2482",
    "title": "Quality assurance and regulatory professionals",
    "baseline": { "y2024": 122, "y2030": 131, "y2035": 139 },
    "automation": { "y2024": 120, "y2030": 124, "y2035": 126 },
    "technological": { "y2024": 122, "y2030": 128, "y2035": 133 },
    "humanCentric": { "y2024": 122, "y2030": 128, "y2035": 134 },
    "requirements": {
      "baseline": {
        "netChange": 17,
        "replacementDemand": 47
      },
      "automation": {
        "netChange": 6,
        "replacementDemand": 45
      },
      "technological": {
        "netChange": 11,
        "replacementDemand": 46
      },
      "humanCentric": {
        "netChange": 11,
        "replacementDemand": 46
      }
    },
    "adjustedEmployment": { "y2024": 122, "y2030": 128, "y2035": 133 },
    "adjustedAiJobs": { "y2024": 0.4, "y2030": 22.2, "y2035": 26.6 },
    "adjustedAiNetChange": 26
  },
  {
    "code": "3113",
    "title": "Engineering technicians",
    "baseline": { "y2024": 48, "y2030": 50, "y2035": 52 },
    "automation": { "y2024": 51, "y2030": 57, "y2035": 63 },
    "technological": { "y2024": 52, "y2030": 62, "y2035": 70 },
    "humanCentric": { "y2024": 51, "y2030": 59, "y2035": 66 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 16
      },
      "automation": {
        "netChange": 12,
        "replacementDemand": 18
      },
      "technological": {
        "netChange": 18,
        "replacementDemand": 19
      },
      "humanCentric": {
        "netChange": 15,
        "replacementDemand": 18
      }
    },
    "adjustedEmployment": { "y2024": 52, "y2030": 62, "y2035": 70 },
    "adjustedAiJobs": { "y2024": 0.2, "y2030": 20, "y2035": 28 },
    "adjustedAiNetChange": 28
  },
  {
    "code": "3119",
    "title": "Science, engineering and production technicians n.e.c.",
    "baseline": { "y2024": 42, "y2030": 44, "y2035": 46 },
    "automation": { "y2024": 44, "y2030": 51, "y2035": 55 },
    "technological": { "y2024": 46, "y2030": 55, "y2035": 62 },
    "humanCentric": { "y2024": 45, "y2030": 52, "y2035": 58 },
    "requirements": {
      "baseline": {
        "netChange": 3,
        "replacementDemand": 14
      },
      "automation": {
        "netChange": 11,
        "replacementDemand": 16
      },
      "technological": {
        "netChange": 16,
        "replacementDemand": 17
      },
      "humanCentric": {
        "netChange": 13,
        "replacementDemand": 16
      }
    },
    "adjustedEmployment": { "y2024": 46, "y2030": 55, "y2035": 62 },
    "adjustedAiJobs": { "y2024": 0.1, "y2030": 20.9, "y2035": 31.6 },
    "adjustedAiNetChange": 32
  },
  {
    "code": "3120",
    "title": "CAD, drawing and architectural technicians",
    "baseline": { "y2024": 77, "y2030": 80, "y2035": 83 },
    "automation": { "y2024": 81, "y2030": 92, "y2035": 100 },
    "technological": { "y2024": 83, "y2030": 99, "y2035": 112 },
    "humanCentric": { "y2024": 82, "y2030": 95, "y2035": 106 },
    "requirements": {
      "baseline": {
        "netChange": 6,
        "replacementDemand": 25
      },
      "automation": {
        "netChange": 20,
        "replacementDemand": 28
      },
      "technological": {
        "netChange": 29,
        "replacementDemand": 31
      },
      "humanCentric": {
        "netChange": 24,
        "replacementDemand": 29
      }
    },
    "adjustedEmployment": { "y2024": 83, "y2030": 99, "y2035": 112 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 37.8, "y2035": 57.1 },
    "adjustedAiNetChange": 57
  },
  {
    "code": "3131",
    "title": "IT operations technicians",
    "baseline": { "y2024": 119, "y2030": 124, "y2035": 129 },
    "automation": { "y2024": 126, "y2030": 143, "y2035": 156 },
    "technological": { "y2024": 130, "y2030": 154, "y2035": 175 },
    "humanCentric": { "y2024": 128, "y2030": 148, "y2035": 165 },
    "requirements": {
      "baseline": {
        "netChange": 10,
        "replacementDemand": 39
      },
      "automation": {
        "netChange": 31,
        "replacementDemand": 44
      },
      "technological": {
        "netChange": 45,
        "replacementDemand": 48
      },
      "humanCentric": {
        "netChange": 37,
        "replacementDemand": 46
      }
    },
    "adjustedEmployment": { "y2024": 130, "y2030": 154, "y2035": 175 },
    "adjustedAiJobs": { "y2024": 1.7, "y2030": 72.7, "y2035": 124.3 },
    "adjustedAiNetChange": 123
  },
  {
    "code": "3132",
    "title": "IT user support technicians",
    "baseline": { "y2024": 100, "y2030": 105, "y2035": 108 },
    "automation": { "y2024": 106, "y2030": 120, "y2035": 132 },
    "technological": { "y2024": 109, "y2030": 130, "y2035": 147 },
    "humanCentric": { "y2024": 107, "y2030": 124, "y2035": 139 },
    "requirements": {
      "baseline": {
        "netChange": 8,
        "replacementDemand": 33
      },
      "automation": {
        "netChange": 26,
        "replacementDemand": 37
      },
      "technological": {
        "netChange": 38,
        "replacementDemand": 40
      },
      "humanCentric": {
        "netChange": 31,
        "replacementDemand": 38
      }
    },
    "adjustedEmployment": { "y2024": 109, "y2030": 130, "y2035": 147 },
    "adjustedAiJobs": { "y2024": 0.7, "y2030": 55.7, "y2035": 89.7 },
    "adjustedAiNetChange": 89
  },
  {
    "code": "3133",
    "title": "Database administrators and web content technicians",
    "baseline": { "y2024": 75, "y2030": 78, "y2035": 81 },
    "automation": { "y2024": 79, "y2030": 90, "y2035": 99 },
    "technological": { "y2024": 82, "y2030": 97, "y2035": 110 },
    "humanCentric": { "y2024": 80, "y2030": 93, "y2035": 104 },
    "requirements": {
      "baseline": {
        "netChange": 6,
        "replacementDemand": 24
      },
      "automation": {
        "netChange": 19,
        "replacementDemand": 28
      },
      "technological": {
        "netChange": 29,
        "replacementDemand": 30
      },
      "humanCentric": {
        "netChange": 24,
        "replacementDemand": 29
      }
    },
    "adjustedEmployment": { "y2024": 82, "y2030": 97, "y2035": 110 },
    "adjustedAiJobs": { "y2024": 3.4, "y2030": 42.1, "y2035": 68.2 },
    "adjustedAiNetChange": 65
  },
  {
    "code": "3213",
    "title": "Medical and dental technicians",
    "baseline": { "y2024": 33, "y2030": 35, "y2035": 37 },
    "automation": { "y2024": 34, "y2030": 37, "y2035": 39 },
    "technological": { "y2024": 34, "y2030": 38, "y2035": 42 },
    "humanCentric": { "y2024": 34, "y2030": 38, "y2035": 42 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 15
      },
      "automation": {
        "netChange": 6,
        "replacementDemand": 16
      },
      "technological": {
        "netChange": 8,
        "replacementDemand": 16
      },
      "humanCentric": {
        "netChange": 7,
        "replacementDemand": 16
      }
    },
    "adjustedEmployment": { "y2024": 34, "y2030": 38, "y2035": 42 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 11.8, "y2035": 16.4 },
    "adjustedAiNetChange": 16
  },
  {
    "code": "3412",
    "title": "Authors, writers and translators",
    "baseline": { "y2024": 123, "y2030": 132, "y2035": 139 },
    "automation": { "y2024": 121, "y2030": 122, "y2035": 123 },
    "technological": { "y2024": 123, "y2030": 127, "y2035": 130 },
    "humanCentric": { "y2024": 123, "y2030": 127, "y2035": 130 },
    "requirements": {
      "baseline": {
        "netChange": 15,
        "replacementDemand": 46
      },
      "automation": {
        "netChange": 2,
        "replacementDemand": 43
      },
      "technological": {
        "netChange": 7,
        "replacementDemand": 45
      },
      "humanCentric": {
        "netChange": 7,
        "replacementDemand": 45
      }
    },
    "adjustedEmployment": { "y2024": 123, "y2030": 127, "y2035": 130 },
    "adjustedAiJobs": { "y2024": 0.8, "y2030": 20.8, "y2035": 24.7 },
    "adjustedAiNetChange": 24
  },
  {
    "code": "3413",
    "title": "Actors, entertainers and presenters",
    "baseline": { "y2024": 43, "y2030": 46, "y2035": 48 },
    "automation": { "y2024": 42, "y2030": 43, "y2035": 43 },
    "technological": { "y2024": 43, "y2030": 44, "y2035": 46 },
    "humanCentric": { "y2024": 43, "y2030": 44, "y2035": 45 },
    "requirements": {
      "baseline": {
        "netChange": 5,
        "replacementDemand": 16
      },
      "automation": {
        "netChange": 1,
        "replacementDemand": 15
      },
      "technological": {
        "netChange": 3,
        "replacementDemand": 16
      },
      "humanCentric": {
        "netChange": 3,
        "replacementDemand": 16
      }
    },
    "adjustedEmployment": { "y2024": 43, "y2030": 44, "y2035": 46 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 5.3, "y2035": 6 },
    "adjustedAiNetChange": 6
  },
  {
    "code": "3429",
    "title": "Design occupations n.e.c.",
    "baseline": { "y2024": 25, "y2030": 27, "y2035": 28 },
    "automation": { "y2024": 25, "y2030": 25, "y2035": 25 },
    "technological": { "y2024": 25, "y2030": 26, "y2035": 27 },
    "humanCentric": { "y2024": 25, "y2030": 26, "y2035": 27 },
    "requirements": {
      "baseline": {
        "netChange": 3,
        "replacementDemand": 10
      },
      "automation": {
        "netChange": 0,
        "replacementDemand": 9
      },
      "technological": {
        "netChange": 2,
        "replacementDemand": 9
      },
      "humanCentric": {
        "netChange": 1,
        "replacementDemand": 9
      }
    },
    "adjustedEmployment": { "y2024": 25, "y2030": 26, "y2035": 27 },
    "adjustedAiJobs": { "y2024": 0, "y2030": 8.9, "y2035": 13.2 },
    "adjustedAiNetChange": 13
  },
  {
    "code": "3534",
    "title": "Financial accounts managers",
    "baseline": { "y2024": 143, "y2030": 147, "y2035": 150 },
    "automation": { "y2024": 139, "y2030": 136, "y2035": 132 },
    "technological": { "y2024": 142, "y2030": 141, "y2035": 140 },
    "humanCentric": { "y2024": 142, "y2030": 141, "y2035": 140 },
    "requirements": {
      "baseline": {
        "netChange": 7,
        "replacementDemand": 51
      },
      "automation": {
        "netChange": -7,
        "replacementDemand": 47
      },
      "technological": {
        "netChange": -2,
        "replacementDemand": 49
      },
      "humanCentric": {
        "netChange": -2,
        "replacementDemand": 49
      }
    },
    "adjustedEmployment": { "y2024": 142, "y2030": 141, "y2035": 140 },
    "adjustedAiJobs": { "y2024": 0.3, "y2030": 40.7, "y2035": 57.4 },
    "adjustedAiNetChange": 57
  },
  {
    "code": "3543",
    "title": "Project support officers",
    "baseline": { "y2024": 42, "y2030": 43, "y2035": 44 },
    "automation": { "y2024": 41, "y2030": 40, "y2035": 39 },
    "technological": { "y2024": 42, "y2030": 41, "y2035": 41 },
    "humanCentric": { "y2024": 42, "y2030": 41, "y2035": 41 },
    "requirements": {
      "baseline": {
        "netChange": 2,
        "replacementDemand": 15
      },
      "automation": {
        "netChange": -2,
        "replacementDemand": 14
      },
      "technological": {
        "netChange": -1,
        "replacementDemand": 14
      },
      "humanCentric": {
        "netChange": -1,
        "replacementDemand": 14
      }
    },
    "adjustedEmployment": { "y2024": 42, "y2030": 41, "y2035": 41 },
    "adjustedAiJobs": { "y2024": 0.2, "y2030": 10.8, "y2035": 14.6 },
    "adjustedAiNetChange": 14
  },
  {
    "code": "3544",
    "title": "Data analysts",
    "baseline": { "y2024": 123, "y2030": 127, "y2035": 129 },
    "automation": { "y2024": 120, "y2030": 117, "y2035": 114 },
    "technological": { "y2024": 122, "y2030": 122, "y2035": 121 },
    "humanCentric": { "y2024": 122, "y2030": 122, "y2035": 121 },
    "requirements": {
      "baseline": {
        "netChange": 6,
        "replacementDemand": 44
      },
      "automation": {
        "netChange": -6,
        "replacementDemand": 41
      },
      "technological": {
        "netChange": -2,
        "replacementDemand": 42
      },
      "humanCentric": {
        "netChange": -2,
        "replacementDemand": 42
      }
    },
    "adjustedEmployment": { "y2024": 122, "y2030": 122, "y2035": 121 },
    "adjustedAiJobs": { "y2024": 54.9, "y2030": 85.9, "y2035": 100.4 },
    "adjustedAiNetChange": 46
  },
  {
    "code": "3551",
    "title": "Buyers and procurement officers",
    "baseline": { "y2024": 81, "y2030": 83, "y2035": 85 },
    "automation": { "y2024": 79, "y2030": 77, "y2035": 75 },
    "technological": { "y2024": 81, "y2030": 80, "y2035": 80 },
    "humanCentric": { "y2024": 81, "y2030": 80, "y2035": 80 },
    "requirements": {
      "baseline": {
        "netChange": 4,
        "replacementDemand": 29
      },
      "automation": {
        "netChange": -4,
        "replacementDemand": 27
      },
      "technological": {
        "netChange": -1,
        "replacementDemand": 28
      },
      "humanCentric": {
        "netChange": -1,
        "replacementDemand": 28
      }
    },
    "adjustedEmployment": { "y2024": 81, "y2030": 80, "y2035": 80 },
    "adjustedAiJobs": { "y2024": 0.2, "y2030": 18.9, "y2035": 24.8 },
    "adjustedAiNetChange": 25
  },
  {
    "code": "3552",
    "title": "Business sales executives",
    "baseline": { "y2024": 139, "y2030": 143, "y2035": 146 },
    "automation": { "y2024": 135, "y2030": 132, "y2035": 128 },
    "technological": { "y2024": 138, "y2030": 137, "y2035": 136 },
    "humanCentric": { "y2024": 138, "y2030": 137, "y2035": 136 },
    "requirements": {
      "baseline": {
        "netChange": 7,
        "replacementDemand": 50
      },
      "automation": {
        "netChange": -7,
        "replacementDemand": 46
      },
      "technological": {
        "netChange": -2,
        "replacementDemand": 48
      },
      "humanCentric": {
        "netChange": -2,
        "replacementDemand": 48
      }
    },
    "adjustedEmployment": { "y2024": 138, "y2030": 137, "y2035": 136 },
    "adjustedAiJobs": { "y2024": 2.3, "y2030": 22.7, "y2035": 27.2 },
    "adjustedAiNetChange": 25
  },
  {
    "code": "3554",
    "title": "Marketing associate professionals",
    "baseline": { "y2024": 158, "y2030": 162, "y2035": 166 },
    "automation": { "y2024": 154, "y2030": 150, "y2035": 146 },
    "technological": { "y2024": 157, "y2030": 156, "y2035": 155 },
    "humanCentric": { "y2024": 157, "y2030": 156, "y2035": 155 },
    "requirements": {
      "baseline": {
        "netChange": 8,
        "replacementDemand": 57
      },
      "automation": {
        "netChange": -8,
        "replacementDemand": 52
      },
      "technological": {
        "netChange": -2,
        "replacementDemand": 54
      },
      "humanCentric": {
        "netChange": -2,
        "replacementDemand": 54
      }
    },
    "adjustedEmployment": { "y2024": 157, "y2030": 156, "y2035": 155 },
    "adjustedAiJobs": { "y2024": 1.3, "y2030": 38.5, "y2035": 51.2 },
    "adjustedAiNetChange": 50
  },
  {
    "code": "3556",
    "title": "Sales accounts and business development managers",
    "baseline": { "y2024": 268, "y2030": 275, "y2035": 282 },
    "automation": { "y2024": 262, "y2030": 255, "y2035": 248 },
    "technological": { "y2024": 266, "y2030": 265, "y2035": 263 },
    "humanCentric": { "y2024": 266, "y2030": 265, "y2035": 263 },
    "requirements": {
      "baseline": {
        "netChange": 14,
        "replacementDemand": 96
      },
      "automation": {
        "netChange": -13,
        "replacementDemand": 89
      },
      "technological": {
        "netChange": -3,
        "replacementDemand": 92
      },
      "humanCentric": {
        "netChange": -3,
        "replacementDemand": 92
      }
    },
    "adjustedEmployment": { "y2024": 266, "y2030": 265, "y2035": 263 },
    "adjustedAiJobs": { "y2024": 2.4, "y2030": 45.6, "y2035": 55.2 },
    "adjustedAiNetChange": 53
  },
  {
    "code": "3571",
    "title": "Human resources and industrial relations officers",
    "baseline": { "y2024": 167, "y2030": 171, "y2035": 175 },
    "automation": { "y2024": 163, "y2030": 158, "y2035": 155 },
    "technological": { "y2024": 166, "y2030": 165, "y2035": 163 },
    "humanCentric": { "y2024": 166, "y2030": 165, "y2035": 163 },
    "requirements": {
      "baseline": {
        "netChange": 9,
        "replacementDemand": 60
      },
      "automation": {
        "netChange": -8,
        "replacementDemand": 55
      },
      "technological": {
        "netChange": -2,
        "replacementDemand": 57
      },
      "humanCentric": {
        "netChange": -2,
        "replacementDemand": 58
      }
    },
    "adjustedEmployment": { "y2024": 166, "y2030": 165, "y2035": 163 },
    "adjustedAiJobs": { "y2024": 0.5, "y2030": 38.6, "y2035": 50.5 },
    "adjustedAiNetChange": 50
  },
  {
    "code": "3574",
    "title": "Other vocational and industrial trainers",
    "baseline": { "y2024": 183, "y2030": 188, "y2035": 192 },
    "automation": { "y2024": 179, "y2030": 174, "y2035": 169 },
    "technological": { "y2024": 182, "y2030": 181, "y2035": 179 },
    "humanCentric": { "y2024": 182, "y2030": 181, "y2035": 179 },
    "requirements": {
      "baseline": {
        "netChange": 10,
        "replacementDemand": 66
      },
      "automation": {
        "netChange": -9,
        "replacementDemand": 61
      },
      "technological": {
        "netChange": -2,
        "replacementDemand": 63
      },
      "humanCentric": {
        "netChange": -2,
        "replacementDemand": 63
      }
    },
    "adjustedEmployment": { "y2024": 182, "y2030": 181, "y2035": 179 },
    "adjustedAiJobs": { "y2024": 1, "y2030": 41.3, "y2035": 53.7 },
    "adjustedAiNetChange": 53
  },
  {
    "code": "5244",
    "title": "Computer system and equipment installers and servicers",
    "baseline": { "y2024": 53, "y2030": 51, "y2035": 50 },
    "automation": { "y2024": 52, "y2030": 48, "y2035": 44 },
    "technological": { "y2024": 53, "y2030": 50, "y2035": 47 },
    "humanCentric": { "y2024": 53, "y2030": 49, "y2035": 46 },
    "requirements": {
      "baseline": {
        "netChange": -3,
        "replacementDemand": 15
      },
      "automation": {
        "netChange": -8,
        "replacementDemand": 14
      },
      "technological": {
        "netChange": -6,
        "replacementDemand": 14
      },
      "humanCentric": {
        "netChange": -6,
        "replacementDemand": 14
      }
    },
    "adjustedEmployment": { "y2024": 53, "y2030": 50, "y2035": 47 },
    "adjustedAiJobs": { "y2024": 2.2, "y2030": 16.1, "y2035": 24.4 },
    "adjustedAiNetChange": 22
  }
]

export const rawSectors: RawSector[] = [
  {
    "code": "A",
    "label": "Agriculture",
    "sectionCode": "A",
    "sectionLabel": "Agriculture",
    "kind": "section",
    "rates": [
      0.2,
      0.3,
      0.35,
      0.34,
      0.6,
      0.75,
      1.23,
      2.06,
      2.38,
      3.61,
      4.3
    ]
  },
  {
    "code": "01",
    "label": "Crop and animal production, hunting and related service activities",
    "sectionCode": "A",
    "sectionLabel": "Agriculture",
    "kind": "sector",
    "rates": [
      0.19,
      0.3,
      0.36,
      0.38,
      0.64,
      0.74,
      1.32,
      2.11,
      2.45,
      3.88,
      4.41
    ]
  },
  {
    "code": "02",
    "label": "Forestry and logging",
    "sectionCode": "A",
    "sectionLabel": "Agriculture",
    "kind": "sector",
    "rates": [
      0,
      3.17,
      0,
      0,
      0,
      0,
      0,
      1.69,
      7.14,
      3.33,
      20.41
    ]
  },
  {
    "code": "03",
    "label": "Fishing and aquaculture",
    "sectionCode": "A",
    "sectionLabel": "Agriculture",
    "kind": "sector",
    "rates": [
      0.3,
      0,
      0.34,
      0,
      0.35,
      0.9,
      0.6,
      1.63,
      1.33,
      1.07,
      2.03
    ]
  },
  {
    "code": "B",
    "label": "Mining and Quarrying",
    "sectionCode": "B",
    "sectionLabel": "Mining and Quarrying",
    "kind": "section",
    "rates": [
      1,
      0.75,
      0.71,
      0.83,
      0.72,
      1.21,
      1.47,
      2.5,
      3.99,
      5.69,
      8.17
    ]
  },
  {
    "code": "05",
    "label": "Mining of coal and lignite",
    "sectionCode": "B",
    "sectionLabel": "Mining and Quarrying",
    "kind": "sector",
    "rates": [
      2,
      1.15,
      1.38,
      1.16,
      1.37,
      1.67,
      2.55,
      2.54,
      4.89,
      6.63,
      4.73
    ]
  },
  {
    "code": "06",
    "label": "Extraction of crude petroleum and natural gas",
    "sectionCode": "B",
    "sectionLabel": "Mining and Quarrying",
    "kind": "sector",
    "rates": [
      0.95,
      1.01,
      1.09,
      1.01,
      1.19,
      1.19,
      2.02,
      3.04,
      5.37,
      7.32,
      7.53
    ]
  },
  {
    "code": "07",
    "label": "Mining of metal ores",
    "sectionCode": "B",
    "sectionLabel": "Mining and Quarrying",
    "kind": "sector",
    "rates": [
      0.93,
      0.68,
      1.42,
      2.22,
      0,
      0.85,
      3.2,
      2.5,
      6.77,
      1.28,
      5.13
    ]
  },
  {
    "code": "08",
    "label": "Other mining and quarrying",
    "sectionCode": "B",
    "sectionLabel": "Mining and Quarrying",
    "kind": "sector",
    "rates": [
      0.93,
      1.08,
      0.75,
      0.89,
      1.18,
      1.1,
      1.78,
      2.79,
      4.57,
      5.84,
      7.8
    ]
  },
  {
    "code": "09",
    "label": "Mining support service activities (G06Q 50/02 only (systems for mining*)",
    "sectionCode": "B",
    "sectionLabel": "Mining and Quarrying",
    "kind": "sector",
    "rates": [
      0,
      0,
      4,
      3.23,
      5,
      19.35,
      12.9,
      16,
      22.73,
      33.33,
      40.46
    ]
  },
  {
    "code": "C",
    "label": "Manufacturing",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "section",
    "rates": [
      0.41,
      0.51,
      0.57,
      0.76,
      0.93,
      1.36,
      2.08,
      3.1,
      4.08,
      5.21,
      6.3
    ]
  },
  {
    "code": "10",
    "label": "Manufacture of food products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0,
      0.03,
      0.05,
      0.02,
      0.08,
      0.39,
      0.45,
      0.89,
      0.95,
      0.82,
      1.91
    ]
  },
  {
    "code": "11",
    "label": "Manufacture of beverages",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0,
      0.56,
      0,
      0,
      0,
      0,
      0,
      0.75,
      0.43,
      0.45,
      0.98
    ]
  },
  {
    "code": "12",
    "label": "Manufacture of tobacco products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.54,
      0.35,
      0.51,
      0.24,
      0.2,
      0.27,
      0.09,
      0.68,
      0.81,
      0.99,
      0.58
    ]
  },
  {
    "code": "13",
    "label": "Manufacture of textiles",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0,
      0.07,
      0.03,
      0.07,
      0.1,
      0.21,
      0.5,
      1.55,
      1.24,
      1.79,
      1.49
    ]
  },
  {
    "code": "14",
    "label": "Manufacture of wearing apparel",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.07,
      0.25,
      0.17,
      0.16,
      0.47,
      0.52,
      1.25,
      1.44,
      1.69,
      1.69,
      1.36
    ]
  },
  {
    "code": "15",
    "label": "Manufacture of leather and related products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.23,
      0.29,
      0.38,
      0.52,
      0.34,
      0.59,
      0.97,
      1.07,
      1.19,
      1.72,
      1.38
    ]
  },
  {
    "code": "16",
    "label": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0,
      0,
      0,
      0,
      0,
      0,
      0.39,
      1.03,
      1.19,
      0.63,
      1.51
    ]
  },
  {
    "code": "17",
    "label": "Manufacture of paper and paper products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0,
      0,
      0,
      0,
      0.09,
      0,
      0,
      0,
      0.36,
      0.54,
      0.61
    ]
  },
  {
    "code": "18",
    "label": "Printing and reproduction of recorded media",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      1.53,
      2.35,
      1.71,
      1.96,
      2.83,
      4.46,
      8.2,
      12.12,
      15.12,
      17.98,
      20.25
    ]
  },
  {
    "code": "19",
    "label": "Manufacture of coke and refined petroleum products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.04,
      0,
      0.04,
      0.09,
      0.09,
      0.05,
      0.05,
      0.16,
      0.35,
      1.05,
      0.97
    ]
  },
  {
    "code": "20",
    "label": "Manufacture of chemicals and chemical products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.02,
      0.04,
      0.04,
      0.02,
      0.04,
      0.08,
      0.08,
      0.1,
      0.15,
      0.3,
      0.41
    ]
  },
  {
    "code": "21",
    "label": "Manufacture of basic pharmaceutical products and pharmaceutical preparations",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.08,
      0.06,
      0.07,
      0.06,
      0.09,
      0.12,
      0.18,
      0.27,
      0.39,
      0.41,
      0.55
    ]
  },
  {
    "code": "22",
    "label": "Manufacture of rubber and plastic products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      1.7,
      0.14,
      0.15,
      0.48,
      0.15,
      0.34,
      0.37,
      0.68,
      0.77,
      1.35,
      1.51
    ]
  },
  {
    "code": "23",
    "label": "Manufacture of other non-metallic mineral products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.03,
      0.03,
      0.06,
      0,
      0.03,
      0.16,
      0.11,
      0.08,
      0.36,
      0.65,
      0.55
    ]
  },
  {
    "code": "24",
    "label": "Manufacture of basic metals",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0,
      0.03,
      0.06,
      0.08,
      0.1,
      0.06,
      0.16,
      0.21,
      0.31,
      0.77,
      1.06
    ]
  },
  {
    "code": "25",
    "label": "Manufacture of fabricated metal products, except machinery and equipment",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      1.61,
      0.22,
      0.28,
      1.04,
      0.54,
      0.68,
      0.74,
      1.3,
      1.48,
      1.87,
      1.99
    ]
  },
  {
    "code": "26",
    "label": "Manufacture of computer, electronic and optical products",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.34,
      0.34,
      0.38,
      0.66,
      0.73,
      1.15,
      1.6,
      2.27,
      3.06,
      3.84,
      4.58
    ]
  },
  {
    "code": "27",
    "label": "Manufacture of electrical equipment",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.96,
      1.06,
      1.28,
      1.72,
      1.96,
      2.77,
      3.99,
      5.56,
      7.06,
      9.51,
      11.81
    ]
  },
  {
    "code": "28",
    "label": "Manufacture of machinery and equipment n.e.c.",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.14,
      0.19,
      0.03,
      0.24,
      0.31,
      0.58,
      0.89,
      1.35,
      1.85,
      2.1,
      2.6
    ]
  },
  {
    "code": "29",
    "label": "Manufacture of motor vehicles, trailers and semi-trailers",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.57,
      0.73,
      0.35,
      0.75,
      0.85,
      1.36,
      2.26,
      3.59,
      4.52,
      4.96,
      5.97
    ]
  },
  {
    "code": "30",
    "label": "Manufacture of other transport equipment",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.14,
      0.14,
      0.22,
      0.61,
      0.64,
      1.06,
      1.72,
      2.25,
      2.59,
      3.1,
      3.34
    ]
  },
  {
    "code": "31",
    "label": "Manufacture of furniture",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.12,
      0.18,
      0.14,
      0.2,
      0.23,
      0.69,
      1.02,
      1.87,
      2.45,
      2.18,
      2.57
    ]
  },
  {
    "code": "32",
    "label": "Other manufacturing",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      0.53,
      1.01,
      0.85,
      0.97,
      1.09,
      1.44,
      1.7,
      2.55,
      3.95,
      4.57,
      5.32
    ]
  },
  {
    "code": "33",
    "label": "Repair and installation of machinery and equipment",
    "sectionCode": "C",
    "sectionLabel": "Manufacturing",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "D",
    "label": "ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY",
    "sectionCode": "D",
    "sectionLabel": "ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY",
    "kind": "section",
    "rates": [
      0.25,
      0.38,
      0.27,
      0.69,
      0.65,
      1,
      1.54,
      2.01,
      1.86,
      2.47,
      3.26
    ]
  },
  {
    "code": "35",
    "label": "Electricity, gas, steam and air conditioning supply",
    "sectionCode": "D",
    "sectionLabel": "ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY",
    "kind": "sector",
    "rates": [
      0.25,
      0.38,
      0.27,
      0.69,
      0.65,
      1,
      1.54,
      2.01,
      1.86,
      2.47,
      3.26
    ]
  },
  {
    "code": "E",
    "label": "WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES",
    "sectionCode": "E",
    "sectionLabel": "WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES",
    "kind": "section",
    "rates": [
      0.04,
      0.17,
      0.04,
      0.28,
      0.46,
      0.24,
      0.61,
      0.77,
      1.65,
      2.1,
      1.94
    ]
  },
  {
    "code": "36 and 37",
    "label": "Water collection, treatment and supply and Sewerage",
    "sectionCode": "E",
    "sectionLabel": "WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES",
    "kind": "sector",
    "rates": [
      0,
      0.15,
      0,
      0.31,
      0.2,
      0.3,
      0.48,
      0.44,
      1.18,
      2.04,
      1.94
    ]
  },
  {
    "code": "38 and 39",
    "label": "Waste collection, treatment and disposal activities; materials recovery and Remediation activities and other waste management services",
    "sectionCode": "E",
    "sectionLabel": "WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES",
    "kind": "sector",
    "rates": [
      0.08,
      0.35,
      0.08,
      0.46,
      0.88,
      0.22,
      0.76,
      1.15,
      2.11,
      2.17,
      2.27
    ]
  },
  {
    "code": "F",
    "label": "CONSTRUCTION",
    "sectionCode": "F",
    "sectionLabel": "CONSTRUCTION",
    "kind": "section",
    "rates": [
      0.07,
      0.16,
      0.16,
      0.13,
      0.2,
      0.45,
      0.67,
      0.85,
      1.13,
      1.21,
      1.31
    ]
  },
  {
    "code": "41",
    "label": "Construction of buildings",
    "sectionCode": "F",
    "sectionLabel": "CONSTRUCTION",
    "kind": "sector",
    "rates": [
      0.11,
      0.06,
      0.1,
      0.07,
      0.27,
      0.63,
      0.86,
      0.7,
      0.91,
      0.71,
      0.93
    ]
  },
  {
    "code": "42",
    "label": "Civil engineering",
    "sectionCode": "F",
    "sectionLabel": "CONSTRUCTION",
    "kind": "sector",
    "rates": [
      0.06,
      0.25,
      0.21,
      0.25,
      0.19,
      0.38,
      0.65,
      0.65,
      1,
      1.13,
      1.67
    ]
  },
  {
    "code": "43",
    "label": "Specialised construction activities",
    "sectionCode": "F",
    "sectionLabel": "CONSTRUCTION",
    "kind": "sector",
    "rates": [
      0,
      0.17,
      0.17,
      0.2,
      0.12,
      0.95,
      0.6,
      1.24,
      1.74,
      2.28,
      1.53
    ]
  },
  {
    "code": "G",
    "label": "WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES, MOTORCYCLES",
    "sectionCode": "G",
    "sectionLabel": "WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES, MOTORCYCLES",
    "kind": "section",
    "rates": [
      3.24,
      10.42,
      5.3,
      7.49,
      7.84,
      9.21,
      14.83,
      20.08,
      23.11,
      21.01,
      26.06
    ]
  },
  {
    "code": "45",
    "label": "Wholesale and retail trade and repair of motor vehicles and motorcycles",
    "sectionCode": "G",
    "sectionLabel": "WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES, MOTORCYCLES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "46",
    "label": "Wholesale trade, except of motor vehicles and motorcycles",
    "sectionCode": "G",
    "sectionLabel": "WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES, MOTORCYCLES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "47",
    "label": "Retail trade, except of motor vehicles and motorcycles",
    "sectionCode": "G",
    "sectionLabel": "WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES, MOTORCYCLES",
    "kind": "sector",
    "rates": null
  },
  {
    "code": "H",
    "label": "TRANSPORTATION AND STORAGE",
    "sectionCode": "H",
    "sectionLabel": "TRANSPORTATION AND STORAGE",
    "kind": "section",
    "rates": [
      0.13,
      0.14,
      0.21,
      0.6,
      0.63,
      1.09,
      1.69,
      2.23,
      2.6,
      3.09,
      3.33
    ]
  },
  {
    "code": "49",
    "label": "Land transport and transport via pipelines",
    "sectionCode": "H",
    "sectionLabel": "TRANSPORTATION AND STORAGE",
    "kind": "sector",
    "rates": [
      0,
      0.08,
      0.15,
      1.98,
      0.73,
      1.85,
      1.84,
      1.47,
      4.41,
      5.13,
      5.56
    ]
  },
  {
    "code": "50",
    "label": "Water transport",
    "sectionCode": "H",
    "sectionLabel": "TRANSPORTATION AND STORAGE",
    "kind": "sector",
    "rates": [
      0.1,
      0.42,
      0.22,
      0.37,
      0.45,
      1.14,
      1.73,
      2.35,
      2.56,
      3.37,
      2.99
    ]
  },
  {
    "code": "51",
    "label": "Air transport",
    "sectionCode": "H",
    "sectionLabel": "TRANSPORTATION AND STORAGE",
    "kind": "sector",
    "rates": [
      0.45,
      0.41,
      0.97,
      1.98,
      2.12,
      2.69,
      3.07,
      3.77,
      4.65,
      6.06,
      5.72
    ]
  },
  {
    "code": "52",
    "label": "Warehousing and support activities for transportation",
    "sectionCode": "H",
    "sectionLabel": "TRANSPORTATION AND STORAGE",
    "kind": "sector",
    "rates": [
      0.09,
      0.08,
      0.05,
      0.27,
      0.17,
      0.6,
      1.26,
      1.75,
      1.8,
      1.92,
      2.37
    ]
  },
  {
    "code": "53",
    "label": "Postal and courier activities",
    "sectionCode": "H",
    "sectionLabel": "TRANSPORTATION AND STORAGE",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "I",
    "label": "ACCOMMODATION AND FOOD SERVICE ACTIVITIES",
    "sectionCode": "I",
    "sectionLabel": "ACCOMMODATION AND FOOD SERVICE ACTIVITIES",
    "kind": "section",
    "rates": [
      2.17,
      1.05,
      4.15,
      5.26,
      6.07,
      6.8,
      6.59,
      12.03,
      17.33,
      17.71,
      22.96
    ]
  },
  {
    "code": "55",
    "label": "Accommodation",
    "sectionCode": "I",
    "sectionLabel": "ACCOMMODATION AND FOOD SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "56",
    "label": "Food and beverage service activities",
    "sectionCode": "I",
    "sectionLabel": "ACCOMMODATION AND FOOD SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "J",
    "label": "INFORMATION AND COMMUNICATION",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "section",
    "rates": [
      1.57,
      1.72,
      1.79,
      2.05,
      2.38,
      3.19,
      4.7,
      6.72,
      8.94,
      11.29,
      13.54
    ]
  },
  {
    "code": "58",
    "label": "Publishing activities",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "sector",
    "rates": [
      2.23,
      2.37,
      2.44,
      2.64,
      2.96,
      4.01,
      6.02,
      8.7,
      11.57,
      14.09,
      16.42
    ]
  },
  {
    "code": "59",
    "label": "Motion picture, video and television programme production, sound recording and music publishing activities",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "sector",
    "rates": [
      1.35,
      1.49,
      1.72,
      1.88,
      2.14,
      2.85,
      4.35,
      6.56,
      9.14,
      11.52,
      13.53
    ]
  },
  {
    "code": "60",
    "label": "Programming and broadcasting activities",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "sector",
    "rates": [
      3,
      3.77,
      3.72,
      3.92,
      5.28,
      7.67,
      11.89,
      16.43,
      20.8,
      23.77,
      25.23
    ]
  },
  {
    "code": "61",
    "label": "Telecommunications",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "sector",
    "rates": [
      1.31,
      1.46,
      1.64,
      1.9,
      2.32,
      3.13,
      4.53,
      6.47,
      8.66,
      10.81,
      12.04
    ]
  },
  {
    "code": "62",
    "label": "Computer programming, consultancy and related activities",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "sector",
    "rates": [
      2.25,
      2.39,
      2.46,
      2.71,
      3.04,
      4.11,
      6.13,
      8.84,
      12.33,
      13.95,
      16.16
    ]
  },
  {
    "code": "63",
    "label": "Information service activities",
    "sectionCode": "J",
    "sectionLabel": "INFORMATION AND COMMUNICATION",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "K",
    "label": "FINANCIAL AND INSURANCE ACTIVITIES",
    "sectionCode": "K",
    "sectionLabel": "FINANCIAL AND INSURANCE ACTIVITIES",
    "kind": "section",
    "rates": [
      4.46,
      5.98,
      2.68,
      4.32,
      5,
      8.16,
      9.56,
      20.67,
      19.55,
      21.03,
      25.13
    ]
  },
  {
    "code": "64",
    "label": "Financial service activities, except insurance and pension funding",
    "sectionCode": "K",
    "sectionLabel": "FINANCIAL AND INSURANCE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "65",
    "label": "Insurance, reinsurance and pension funding, except compulsory Social security",
    "sectionCode": "K",
    "sectionLabel": "FINANCIAL AND INSURANCE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "66",
    "label": "Activities auxiliary to financial services and insurance activities",
    "sectionCode": "K",
    "sectionLabel": "FINANCIAL AND INSURANCE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "L",
    "label": "REAL ESTATE ACTIVITIES",
    "sectionCode": "L",
    "sectionLabel": "REAL ESTATE ACTIVITIES",
    "kind": "section",
    "rates": [
      0.56,
      4.15,
      3.55,
      1.26,
      4.5,
      6.34,
      14.29,
      15.79,
      22.35,
      20.93,
      25.57
    ]
  },
  {
    "code": "68",
    "label": "Real estate activities",
    "sectionCode": "L",
    "sectionLabel": "REAL ESTATE ACTIVITIES",
    "kind": "sector",
    "rates": [
      0.56,
      4.15,
      3.55,
      1.26,
      4.5,
      6.34,
      14.29,
      15.79,
      22.35,
      20.93,
      25.57
    ]
  },
  {
    "code": "M",
    "label": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "section",
    "rates": [
      3.24,
      3.71,
      3.55,
      3.89,
      4.34,
      6.97,
      10.75,
      14.21,
      17.25,
      19.67,
      21.91
    ]
  },
  {
    "code": "69",
    "label": "Legal and accounting activities",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      4.01,
      3.72,
      4.18,
      4.04,
      3.7,
      9.11,
      12.48,
      26.99,
      20.68,
      24.06,
      26.68
    ]
  },
  {
    "code": "70",
    "label": "Activities of head offices; management consultancy activities",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      3.32,
      4.07,
      3.87,
      4.41,
      4.83,
      8.13,
      12.07,
      16.22,
      18.22,
      21.18,
      23.45
    ]
  },
  {
    "code": "71",
    "label": "Architectural and engineering activities; technical testing and analysis",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      1.49,
      1.34,
      1.88,
      1.76,
      2.54,
      4.4,
      8.92,
      12.7,
      15.12,
      17.09,
      19.13
    ]
  },
  {
    "code": "72",
    "label": "Scientific research and development",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "73",
    "label": "Advertising and market research",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      4.18,
      4.91,
      4.14,
      4.6,
      5.15,
      7.48,
      13.34,
      16.11,
      19.12,
      21.93,
      25.1
    ]
  },
  {
    "code": "74",
    "label": "Other professional, scientific and technical activities",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "75",
    "label": "Veterinary activities",
    "sectionCode": "M",
    "sectionLabel": "PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES",
    "kind": "sector",
    "rates": [
      0,
      1.44,
      0,
      0,
      0,
      0,
      0,
      2.65,
      2.87,
      1.42,
      2.78
    ]
  },
  {
    "code": "N",
    "label": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "section",
    "rates": [
      2.97,
      3.51,
      3.47,
      3.91,
      4.14,
      6.95,
      10.01,
      13.48,
      15.52,
      17.73,
      20.29
    ]
  },
  {
    "code": "76",
    "label": "Rental and leasing activities",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      0,
      51.39,
      3.61,
      18.85,
      11.03,
      2.33,
      7.57,
      9.18,
      11.2,
      14.73,
      17.28
    ]
  },
  {
    "code": "77",
    "label": "Employment activities",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "78",
    "label": "Travel agency, tour operator and other reservation service and related activities",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      0,
      0,
      8.75,
      1.74,
      7.63,
      9.42,
      11.36,
      13.64,
      17.39,
      17.2,
      25.32
    ]
  },
  {
    "code": "79",
    "label": "Security and investigation activities",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      2.12,
      4.07,
      2.81,
      3.57,
      3.24,
      4.91,
      6.19,
      8.3,
      10.25,
      10.44,
      13.65
    ]
  },
  {
    "code": "80",
    "label": "Services to buildings and landscape activities",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "81",
    "label": "Office administrative, office support and other business support activities",
    "sectionCode": "N",
    "sectionLabel": "ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      3.32,
      4.07,
      3.87,
      4.41,
      4.83,
      8.13,
      11.9,
      16.22,
      18.22,
      21.18,
      23.2
    ]
  },
  {
    "code": "O",
    "label": "PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY",
    "sectionCode": "O",
    "sectionLabel": "PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY",
    "kind": "section",
    "rates": [
      1.93,
      4.98,
      7.42,
      6.99,
      6.27,
      8.75,
      16.43,
      21.54,
      22.58,
      22.56,
      26.79
    ]
  },
  {
    "code": "84",
    "label": "Public administration and defence; compulsory social security",
    "sectionCode": "O",
    "sectionLabel": "PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "P",
    "label": "EDUCATION",
    "sectionCode": "P",
    "sectionLabel": "EDUCATION",
    "kind": "section",
    "rates": [
      2.02,
      3.92,
      7.74,
      8.39,
      8.15,
      8.5,
      20.69,
      24.04,
      24.34,
      36.61,
      33.33
    ]
  },
  {
    "code": "85",
    "label": "Education",
    "sectionCode": "P",
    "sectionLabel": "EDUCATION",
    "kind": "sector",
    "rates": [
      2.02,
      3.92,
      7.74,
      8.39,
      8.15,
      8.5,
      20.69,
      24.04,
      24.34,
      36.61,
      33.33
    ]
  },
  {
    "code": "Q",
    "label": "HUMAN HEALTH AND SOCIAL WORK ACTIVITIES",
    "sectionCode": "Q",
    "sectionLabel": "HUMAN HEALTH AND SOCIAL WORK ACTIVITIES",
    "kind": "section",
    "rates": [
      1.38,
      1.72,
      1.35,
      1.62,
      1.8,
      2.23,
      3.72,
      5.04,
      7.3,
      9.65,
      11.46
    ]
  },
  {
    "code": "86",
    "label": "Human health activities",
    "sectionCode": "Q",
    "sectionLabel": "HUMAN HEALTH AND SOCIAL WORK ACTIVITIES",
    "kind": "sector",
    "rates": [
      0.48,
      0.7,
      0.66,
      0.74,
      0.85,
      1.16,
      1.82,
      2.53,
      3.46,
      4.39,
      5.26
    ]
  },
  {
    "code": "87",
    "label": "Residential care activities",
    "sectionCode": "Q",
    "sectionLabel": "HUMAN HEALTH AND SOCIAL WORK ACTIVITIES",
    "kind": "sector",
    "rates": [
      0.2,
      0.28,
      0.32,
      0.66,
      0.63,
      0.6,
      0.84,
      1.19,
      1.94,
      3.41,
      2.79
    ]
  },
  {
    "code": "88",
    "label": "Social work activities without accommodation",
    "sectionCode": "Q",
    "sectionLabel": "HUMAN HEALTH AND SOCIAL WORK ACTIVITIES",
    "kind": "sector",
    "rates": [
      6.73,
      5.74,
      5.49,
      6.36,
      4.27,
      5.34,
      17.9,
      10.82,
      18.1,
      33.33,
      25.52
    ]
  },
  {
    "code": "R",
    "label": "ARTS, ENTERTAINMENT AND RECREATION",
    "sectionCode": "R",
    "sectionLabel": "ARTS, ENTERTAINMENT AND RECREATION",
    "kind": "section",
    "rates": [
      1.38,
      1.72,
      1.35,
      1.62,
      1.8,
      2.23,
      3.72,
      5.04,
      7.3,
      9.65,
      11.46
    ]
  },
  {
    "code": "90",
    "label": "Creative, arts and entertainment activities",
    "sectionCode": "R",
    "sectionLabel": "ARTS, ENTERTAINMENT AND RECREATION",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "91",
    "label": "Libraries, archives, museums and other cultural activities",
    "sectionCode": "R",
    "sectionLabel": "ARTS, ENTERTAINMENT AND RECREATION",
    "kind": "sector",
    "rates": [
      3.89,
      6.37,
      4.99,
      5.07,
      5.5,
      7.41,
      8.69,
      12.74,
      15.29,
      15.49,
      17.5
    ]
  },
  {
    "code": "92",
    "label": "Gambling and betting activities",
    "sectionCode": "R",
    "sectionLabel": "ARTS, ENTERTAINMENT AND RECREATION",
    "kind": "sector",
    "rates": [
      1.75,
      1.45,
      0,
      4.05,
      25.76,
      17.91,
      15.09,
      13.24,
      19.62,
      21.08,
      27.06
    ]
  },
  {
    "code": "93",
    "label": "Sports activities and amusement and recreation activities",
    "sectionCode": "R",
    "sectionLabel": "ARTS, ENTERTAINMENT AND RECREATION",
    "kind": "sector",
    "rates": [
      0.39,
      0.79,
      0.42,
      1.55,
      1.21,
      1.52,
      1.89,
      3.1,
      4.87,
      6.76,
      7.48
    ]
  },
  {
    "code": "S",
    "label": "OTHER SERVICE ACTIVITIES",
    "sectionCode": "S",
    "sectionLabel": "OTHER SERVICE ACTIVITIES",
    "kind": "section",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "94",
    "label": "Activities of membership organisations",
    "sectionCode": "S",
    "sectionLabel": "OTHER SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "95",
    "label": "Repair of computers and personal and household goods",
    "sectionCode": "S",
    "sectionLabel": "OTHER SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "96",
    "label": "Other personal service activities",
    "sectionCode": "S",
    "sectionLabel": "OTHER SERVICE ACTIVITIES",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "T",
    "label": "ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS-AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE",
    "sectionCode": "T",
    "sectionLabel": "ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS-AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE",
    "kind": "section",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "97",
    "label": "Activities of households as employers of domestic personnel",
    "sectionCode": "T",
    "sectionLabel": "ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS-AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "98",
    "label": "Undifferentiated goods/services-producing activities of private households for own use",
    "sectionCode": "T",
    "sectionLabel": "ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS-AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE",
    "kind": "sector",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "U",
    "label": "ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES",
    "sectionCode": "U",
    "sectionLabel": "ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES",
    "kind": "section",
    "rates": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    "code": "99",
    "label": "Activities of extraterritorial organisations and bodies",
    "sectionCode": "U",
    "sectionLabel": "ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES",
    "kind": "sector",
    "rates": null
  }
]
