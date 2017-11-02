config.entities.add([

// special pockets

  {
    id: 'pck-whiteTiger', 
    extends: 'pck-grass',
    name: "txt-pck-whiteTiger-name",
    description: "txt-pck-whiteTiger",
    specialBiomes: 'bio-whiteTiger'
  },
  {
    id: 'pck-waterTemple', 
    extends: 'pck-grass',
    name: "txt-pck-waterTemple-name",
    description: "txt-pck-waterTemple",
    ambientSound: 'sfx_loop_swamp_1',
    specialBiomes: 'bio-waterTemple'
  },
  {
    id: 'pck-elephantGraveyard', 
    extends: 'pck-grass',
    name: "txt-pck-elephantGraveyard-name",
    description: "txt-pck-elephantGraveyard",
    ambientSound: 'sfx_loop_swamp_1',
    specialBiomes: 'bio-elephantGraveyard'
  },
  {
    id: 'pck-volcano-dry', 
    extends: 'pck-dry',
    name: "txt-pck-volcano-dry-name",
    description: "txt-pck-volcano-dry",
    fixtures: [
      {reqWorld: '1..', select: 1, ref: 'fxt-volcano-spawn-large-inactive'},
      {reqWorld: '2..', select: 1, ref: 'fxt-volcano-spawn-large-inactive'},
      {reqWorld: '3..', select: 2, ref: 'fxt-volcano-spawn-large-inactive'},
      {reqWorld: '4..', select: 2, ref: 'fxt-volcano-spawn-large-inactive'},
      {reqWorld: '5..', select: 2, ref: 'fxt-volcano-spawn-large-inactive'},

      {reqWorld: '1..', select: 1, group: 'grp-treasure'},
      {reqWorld: '2..', select: 1, group: 'grp-treasure'},
      {reqWorld: '3..', select: 1, group: 'grp-treasure'},
      {reqWorld: '4..', select: 1, group: 'grp-treasure'},
      {reqWorld: '5..', select: 1, group: 'grp-treasure'},
    ],
  },

// special biomes

  {
    id: 'bio-whiteTiger', 
    name: "txt-bio-whiteTiger-name",
    flags: {grass:true},
    dist: 1,
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 1,
    terrain: [
      {perlin: 0.90,  tile: 'tl-swamp'},
      {perlin: 0.70,  tile: 'tl-jungle-thick'},
      {perlin: 0.66,  tile: 'tl-grass'},
      {perlin: 0.64,  tile: 'tl-mountain'},
      {perlin: 0.63,  tile: 'tl-river-shallow'},
      {perlin: 0.61,  tile: 'tl-river'},
      {perlin: 0.59,  tile: 'tl-jungle-thick'},
      {perlin: 0.58,  tile: 'tl-hill'},
      {perlin: 0.50,  tile: 'tl-jungle-thick'},
      {perlin: 0.47,  tile: 'tl-jungle-light'},
      {perlin: 0.45,  tile: 'tl-grass'},
      {perlin: 0.44,  tile: 'tl-jungle-light'},
      {perlin: 0.37,  tile: 'tl-jungle-thick'},
      {perlin: 0.35,  tile: 'tl-hill'},
      {perlin: 0.33,  tile: 'tl-jungle-thick'},
      {perlin: 0.30,  tile: 'tl-grass'},
      {perlin: 0.28,  tile: 'tl-grass-bushes'},
      {perlin: 0.27,  tile: 'tl-jungle-light'},
      {perlin: 0.22,  tile: 'tl-swamp'},
      {perlin: 0.21,  tile: 'tl-river-shallow'},
      {perlin: 0.16,  tile: 'tl-river'},
      {perlin: 0.12,  tile: 'tl-river-shallow'},
      {perlin: 0.11,   tile: 'tl-jungle-light'},
      {perlin: 0.0,   tile: 'tl-jungle-thick'},
    ],
    zones: [
      {chance: 1, select: 4, group: [
          {slots: 1, ref: 'zn-tiger-white'},
      ]},
    ],
  },
  {
    id: 'bio-waterTemple', 
    name: "txt-bio-waterTemple-name",
    dist: 1,
    flags: {grass:true, water:true},
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 1,
    terrain: [
      {perlin: 0.87, tile: 'tl-grass'},
      {perlin: 0.83, tile: 'tl-hill'},
      {perlin: 0.80, tile: 'tl-grass'},
      {perlin: 0.77, tile: 'tl-mountain'},
      {perlin: 0.72, tile: 'tl-river-shallow'},
      {perlin: 0.67, tile: 'tl-mountain'},
      {perlin: 0.57, tile: 'tl-river-shallow'},
      {perlin: 0.51, tile: 'tl-mountain'},
      {perlin: 0.50, tile: 'tl-river-shallow'},
      {perlin: 0.47, tile: 'tl-grass'},
      {perlin: 0.43, tile: 'tl-hill'},
      {perlin: 0.40, tile: 'tl-grass'},
      {perlin: 0.20, tile: 'tl-river-shallow'},
      {perlin: 0.15, tile: 'tl-mountain'},
      {perlin: 0.07, tile: 'tl-grass'},
      {perlin: 0.03, tile: 'tl-hill'},
      {perlin: 0.00, tile: 'tl-grass'},
    ],
    fixtures: [
      {select:7, ref: 'fxt-geysir-inactive'},
      {select:3, ref: 'fxt-shrine-rope'},
    ],
  },
  {
    id: 'bio-elephantGraveyard',
    name: "txt-bio-elephantGraveyard-name",
    dist:1,
    flags: {grass:true, water:true},
    eventImg: {
      day:'evt_bio_grasslands_1.png', 
      night:'evt_bio_grasslands_1_night.png'
    },
    tokenIdx: 4,
    terrain: [
      {perlin: 0.92,  tile: 'tl-jungle-light'},
      {perlin: 0.88,  tile: 'tl-jungle-thick'},
      {perlin: 0.85,  tile: 'tl-grass-bushes'},
      {perlin: 0.84,  tile: 'tl-hill'},
      {perlin: 0.75,  tile: 'tl-swamp'},
      {perlin: 0.69,  tile: 'tl-river-shallow'},
      {perlin: 0.65,  tile: 'tl-jungle-thick'},
      {perlin: 0.60,  tile: 'tl-swamp'},
      {perlin: 0.58,  tile: 'tl-jungle-light'},
      {perlin: 0.57,  tile: 'tl-jungle-thick'},
      {perlin: 0.54,  tile: 'tl-river-shallow'},
      {perlin: 0.515,  tile: 'tl-river'},
      {perlin: 0.51,  tile: 'tl-river-shallow'},
      {perlin: 0.50,  tile: 'tl-mountain'},
      {perlin: 0.495,  tile: 'tl-river-shallow'},
      {perlin: 0.44,  tile: 'tl-river'},
      {perlin: 0.30,  tile: 'tl-swamp'},
      {perlin: 0.29,  tile: 'tl-river-shallow'},
      {perlin: 0.18,  tile: 'tl-swamp'},
      {perlin: 0.175,  tile: 'tl-hill'},
      {perlin: 0.10,  tile: 'tl-swamp'},
      {perlin: 0.00,  tile: 'tl-grass'},
    ],
    fixtures: [
      {chance: 1.0, select: 4, ref: 'fxt-elephantGraveyard'},
    ],
    zones: [
      {chance: 1, select: 5, ref: 'zn-crocodile'},
    ],
  },

])