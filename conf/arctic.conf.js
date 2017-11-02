config.entities.add([

  // design thoughts:
  // - biome should not spawn more than 4 fixtures locally
  // - biome should spawn settlement or nature (not both)

// items

  {
    id: 'it-snowshoe',
    name: "txt-it-snowshoe-name",
    description: "txt-it-snowshoe",
    reqBiomeFlags: '+arctic',
    sprite: 'it_utility_snowshoe_1.png',
    value: {
      base: 2,
      village: 8,
      karma: 1,
    },
    maxStack: 20,
    resellFactor: 0.5,
    debugCategory: 'travel',
  },

// pockets

  {
    id: 'pck-arctic', 
    name: "txt-pck-arctic-name",
    flags: '+arctic',
    tribeGen: 'tg-arctic',
    shipTile: 'tl-packIce',
    previewSprite: 'hud_worldmap_pocketPreview_arctic.png',
    slotMarker: 'hud_mapMarker_arctic.png',
    ambientSound: 'sfx_loop_arctic_1',
    goals: [
      'gol-goldenTemple-moonStone', 
      'gol-goldenTemple-buried'
    ],
    debugItems: {'it-snowshoe':5},
    fixtures: [
      [ // resting group
        {ref: 'grp-village'},
        {ref: 'fxt-polarStation-A'},
        {ref: 'fxt-polarStation-B'},
        {ref: 'grp-sanity-nature'},
        {ref: 'fxt-polarStation-C'},
        {ref: 'grp-village'},
        {ref: 'grp-village'},
      ],
      [ // loot group
        {ref: 'grp-cave'},
        {ref: 'grp-loot'},
        {ref: 'grp-loot'},
        {ref: 'grp-cave'},
        {ref: 'grp-loot'},
        {ref: 'grp-loot'},
      ],
      [ // utility 
        {ref: 'fxt-stoneCircle'},
        ,
        ,
        {ref: 'fxt-stoneCircle'},
      ],
      [ // shrine/special group
        {ref: 'grp-treasure'},
        ,
        {ref: 'grp-treasure'},
        {ref: 'grp-special'},
        {ref: 'grp-treasure'},
        {select:2, group: [
          {ref: 'grp-special'},
          {ref: 'grp-treasure'}
        ]}
      ],
      [
        {reqWorld: '3..', chance:0.5, select:2, ref:'fxt-cave-teleport'}
      ],
      [
        ,
        ,
        {reqDifficulty: '1..', ref: 'fxt-magneticMountain'},
        {reqDifficulty: '1..', ref: 'fxt-magneticMountain'},
        {reqDifficulty: '1..', ref: 'fxt-magneticMountain'},
      ],
      [
        {reqWorld: '3', select: 1, ref: 'fxt-geysir-inactive'},
      ],
      [
        {reqWorld: '4', select: 2, group: [
          {slots: 1, select: 1, ref: 'fxt-volcano-spawn-small-inactive'},
          {slots: 1, select: 1, ref: 'fxt-volcano-spawn-large-inactive'},
          {slots: 3, select: 3, ref: 'fxt-geysir-inactive'},
          {slots: 3, select: 2, ref: 'fxt-geysir-inactive'},
        ]},
      ],
      [
        {reqWorld: '5', select: 1, group: [
          {slots: 1, select: 1, ref: 'fxt-volcano-spawn-large-inactive'},
          {slots: 1, select: 3, ref: 'fxt-volcano-spawn-small-inactive'},
          {slots: 3, select: 4, ref: 'fxt-geysir-inactive'},
        ]},
      ],
      [
        {ref:'fxt-hiddenTreasure'},
        {chance: 0.25, ref:'fxt-mountainFaceSecret'},
      ]   
    ],
    borderBiome: ['bio-outside-sea-arctic'],
    seaBorderBiome: ['bio-outside-sea-arctic'],
    biomes: [
      {ref: 'bio-arctic-generic'},
      {select: 5, group: 'grp-arctic-sanity'}
    ],
  },

// biome groups

  {
    id: 'grp-arctic-sanity',
    group: [ // With Sanity fixtures
      {slots: 1, ref: 'bio-arctic-deepSnow'},
      {slots: 1, ref: 'bio-arctic-packIce'},
      {slots: 1, ref: 'bio-arctic-glaciers'},
      {slots: 1, ref: 'bio-arctic-crystalForest'},
      {slots: 1, ref: 'bio-arctic-plateau'},
    ]
  },

// biomes

  {
    id: 'bio-arctic-generic', 
    name: "txt-pck-arctic-name", 
    flags: '+arctic', 
    debugColor: 'white',
    eventImg: { 
      day:'evt_bio_arctic_1.png', 
      night:'evt_bio_arctic_1_night.png' 
    },
    terrain: [
      {perlin: 0.92,  tile: 'tl-glacier-land'},
      {perlin: 0.9,   tile: 'tl-arcticSea'},
      {perlin: 0.89,  tile: 'tl-glacier-water'},
      {perlin: 0.84,  tile: 'tl-packIce'},
      {perlin: 0.80,  tile: 'tl-frozenPlains'},
      {perlin: 0.73,  tile: 'tl-snowForest'},
      {perlin: 0.69,  tile: 'tl-deepSnow'},
      {perlin: 0.63,  tile: 'tl-frozenPlains'},
      {perlin: 0.61,  tile: 'tl-glacier-land'},
      {perlin: 0.60,  tile: 'tl-crystalForest'},
      {perlin: 0.58,  tile: 'tl-frozenPlains'},
      {perlin: 0.575, tile: 'tl-crystalForest'}, 
      {perlin: 0.54,  tile: 'tl-snowForest'},  
      {perlin: 0.50,  tile: 'tl-frozenPlains'},
      {perlin: 0.49,  tile: 'tl-deepSnow'},
      {perlin: 0.46,  tile: 'tl-frozenPlains'},
      {perlin: 0.43,  tile: 'tl-deepSnow'},
      {perlin: 0.42,  tile: 'tl-glacier-land'},
      {perlin: 0.39,  tile: 'tl-arcticSea'},
      {perlin: 0.36,  tile: 'tl-frozenPlains'},
      {perlin: 0.3,   tile: 'tl-arcticSea'},
      {perlin: 0.2,   tile: 'tl-packIce'},
      {perlin: 0.12,  tile: 'tl-arcticSea'},
      {perlin: 0.11,  tile: 'tl-glacier-water'},
      {perlin: 0.0,   tile: 'tl-arcticSea'},
    ],
    fixtures: [
      // {chance: 1.0, group: 'grp-rest'},
      // {chance: 1.0, group: 'grp-loot'},
      // {chance: 1.0, group: 'grp-loot'},
      {chance: 0.2, ref: 'fxt-glacier-giant-1'},
    ],
    zones: [
      {reqWorld: '..2', chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-wolf-arctic'},
      ]},
      {reqWorld: '1..', chance: 1, select: 1, group: [
        {slots: 1, ref: 'zn-wolf-arctic'},
        {slots: 1, ref: 'zn-polarBear'},
        {slots: 1, ref: 'zn-walrus'},
      ]},
      {reqWorld: '3..', chance: 1, select: 1, group: [
        {slots: 4, ref: 'zn-polarBear'},
        {slots: 3, ref: 'zn-walrus'},
        {slots: 1, ref: 'zn-sabertooth-white'},
      ]},
    ],
  },
  {
    id: 'bio-arctic-deepSnow', 
    extends: 'bio-arctic-generic',
    terrain: [
      {perlin: 0.93,  tile: 'tl-deepSnow'},
      {perlin: 0.87,  tile: 'tl-plateau'},
      {perlin: 0.84,  tile: 'tl-packIce'},
      {perlin: 0.82,  tile: 'tl-arcticSea'},
      {perlin: 0.80,  tile: 'tl-packIce'},
      {perlin: 0.75,  tile: 'tl-deepSnow'},
      {perlin: 0.74,  tile: 'tl-crystalForest'},
      {perlin: 0.69,  tile: 'tl-deepSnow'},
      {perlin: 0.60,  tile: 'tl-plateau'},
      {perlin: 0.59,  tile: 'tl-frozenPlains'},
      {perlin: 0.54,  tile: 'tl-deepSnow'},
      {perlin: 0.50,  tile: 'tl-snowForest'},      
      {perlin: 0.47,  tile: 'tl-deepSnow'},
      {perlin: 0.45,  tile: 'tl-frozenPlains'},
      {perlin: 0.41,  tile: 'tl-deepSnow'},
      {perlin: 0.35,  tile: 'tl-arcticSea'},
      {perlin: 0.0,   tile: 'tl-deepSnow'},
    ],
    fixtures: [
      // {chance: 1.0, group: 'grp-rest'},
      // {chance: 1.0, group: 'grp-treasure'},
      // {chance: 1.0, group: 'grp-loot'},
    ],
  },
  {      
    id: 'bio-arctic-packIce', 
    extends: 'bio-arctic-generic',
    terrain: [
      {perlin: 0.9,   tile: 'tl-arcticSea'},
      {perlin: 0.8,   tile: 'tl-packIce'},
      {perlin: 0.7,   tile: 'tl-arcticSea'},
      {perlin: 0.67,  tile: 'tl-packIce'},
      {perlin: 0.65,  tile: 'tl-deepSnow'},
      {perlin: 0.63,  tile: 'tl-packIce'},
      {perlin: 0.59,  tile: 'tl-arcticSea'},
      {perlin: 0.55,  tile: 'tl-packIce'},
      {perlin: 0.53,  tile: 'tl-glacier-water'},
      {perlin: 0.43,  tile: 'tl-packIce'},
      {perlin: 0.42,  tile: 'tl-deepSnow'},
      {perlin: 0.41,  tile: 'tl-glacier-water'},
      {perlin: 0.31,  tile: 'tl-arcticSea'},
      {perlin: 0.27,  tile: 'tl-deepSnow'},
      {perlin: 0.1,   tile: 'tl-packIce'},
      {perlin: 0.0,   tile: 'tl-arcticSea'},
    ],
    fixtures: [
      // {chance: 1.0, group: 'grp-rest'},
      // {chance: 1.0, group: 'grp-loot'},
      // {chance: 1.0, group: 'grp-loot'},

      {chance: 0.5, ref: 'fxt-glacier-giant-1'},
    ],
  },
  {      
    id: 'bio-arctic-glaciers', 
    extends: 'bio-arctic-generic',
    terrain: [
      {perlin: 0.96,   tile: 'tl-frozenPlains'},
      {perlin: 0.95,   tile: 'tl-glacier-land'},
      {perlin: 0.91,   tile: 'tl-deepSnow'},
      {perlin: 0.89,   tile: 'tl-arcticSea'},
      {perlin: 0.86,   tile: 'tl-packIce'},
      {perlin: 0.83,   tile: 'tl-arcticSea'},
      {perlin: 0.81,   tile: 'tl-glacier-land'},
      {perlin: 0.80,   tile: 'tl-crystalForest'},
      {perlin: 0.75,   tile: 'tl-frozenPlains'},
      {perlin: 0.72,   tile: 'tl-snowForest'},
      {perlin: 0.69,   tile: 'tl-deepSnow'},
      {perlin: 0.67,   tile: 'tl-glacier-land'},
      {perlin: 0.66,   tile: 'tl-snowForest'},
      {perlin: 0.64,   tile: 'tl-frozenPlains'},
      {perlin: 0.62,   tile: 'tl-glacier-land'},
      {perlin: 0.60,   tile: 'tl-deepSnow'},      
      {perlin: 0.58,   tile: 'tl-frozenPlains'},
      {perlin: 0.56,   tile: 'tl-glacier-land'},
      {perlin: 0.55,   tile: 'tl-deepSnow'},
      {perlin: 0.52,   tile: 'tl-arcticSea'},
      {perlin: 0.51,   tile: 'tl-glacier-water'},
      {perlin: 0.57,   tile: 'tl-packIce'},
      {perlin: 0.54,   tile: 'tl-glacier-land'},
      {perlin: 0.53,   tile: 'tl-crystalForest'},
      {perlin: 0.50,   tile: 'tl-frozenPlains'},
      {perlin: 0.48,   tile: 'tl-snowForest'},
      {perlin: 0.44,   tile: 'tl-frozenPlains'},
      {perlin: 0.42,   tile: 'tl-glacier-land'},
      {perlin: 0.40,   tile: 'tl-deepSnow'},
      {perlin: 0.37,   tile: 'tl-glacier-land'},
      {perlin: 0.3,    tile: 'tl-deepSnow'},
      {perlin: 0.22,   tile: 'tl-frozenPlains'},
      {perlin: 0.15,   tile: 'tl-glacier-land'},
      {perlin: 0.08,   tile: 'tl-deepSnow'},
      {perlin: 0.0,    tile: 'tl-glacier-land'},
    ],
    fixtures: [
      // {chance: 1.0, group: 'grp-rest'},
      // {chance: 1.0, group: 'grp-treasure'},
      // {chance: 1.0, group: 'grp-special'},

      {chance: 1, ref: 'fxt-glacier-giant-1'},
    ],
  },
  {      
    id: 'bio-arctic-crystalForest',
    extends: 'bio-arctic-generic',
    terrain: [
      {perlin: 0.96,   tile: 'tl-packIce'},
      {perlin: 0.93,   tile: 'tl-arcticSea'},
      {perlin: 0.89,   tile: 'tl-crystalForest'},
      {perlin: 0.86,   tile: 'tl-deepSnow'},
      {perlin: 0.83,   tile: 'tl-arcticSea'},
      {perlin: 0.80,   tile: 'tl-packIce'},
      {perlin: 0.79,   tile: 'tl-glacier-water'},
      {perlin: 0.77,   tile: 'tl-glacier-land'},
      {perlin: 0.73,   tile: 'tl-crystalForest'},
      {perlin: 0.69,   tile: 'tl-snowForest'},
      {perlin: 0.68,   tile: 'tl-frozenPlains'},
      {perlin: 0.62,   tile: 'tl-arctic-chasm'},
      {perlin: 0.59,   tile: 'tl-crystalForest'},
      {perlin: 0.58,   tile: 'tl-frozenPlains'},
      {perlin: 0.5,    tile: 'tl-crystalForest'},
      {perlin: 0.45,   tile: 'tl-glacier-land'},
      {perlin: 0.35,   tile: 'tl-crystalForest'},
      {perlin: 0.31,   tile: 'tl-arcticSea'},
      {perlin: 0.27,   tile: 'tl-deepSnow'},
      {perlin: 0.2,    tile: 'tl-packIce'},
      {perlin: 0.0,    tile: 'tl-arcticSea'},
    ],
    fixtures: [
      // {chance: 1.0, group: 'grp-rest'},
      // {chance: 1.0, group: 'grp-loot'},
      // {chance: 1.0, group: 'grp-special'},

      {chance: 0.3, ref: 'fxt-glacier-giant-1'},
    ],
  },
  {      
    id: 'bio-arctic-plateau', 
    extends: 'bio-arctic-generic',
    terrain: [
      {perlin: 0.9,   tile: 'tl-arcticSea'},
      {perlin: 0.8,   tile: 'tl-packIce'},
      {perlin: 0.78,  tile: 'tl-deepSnow'},
      {perlin: 0.65,  tile: 'tl-plateau'},
      {perlin: 0.61,  tile: 'tl-snowForest'},
      {perlin: 0.60,  tile: 'tl-crystalForest'},
      {perlin: 0.59,  tile: 'tl-deepSnow'},
      {perlin: 0.54,  tile: 'tl-frozenPlains'},
      {perlin: 0.50,  tile: 'tl-snowForest'},
      {perlin: 0.42,  tile: 'tl-plateau'},
      {perlin: 0.40,  tile: 'tl-packIce'},
      {perlin: 0.40,  tile: 'tl-arcticSea'},
      {perlin: 0.33,  tile: 'tl-plateau'},
      {perlin: 0.31,  tile: 'tl-arcticSea'},
      {perlin: 0.29,  tile: 'tl-deepSnow'},
      {perlin: 0.27,  tile: 'tl-frozenPlains'},
      {perlin: 0.24,  tile: 'tl-snowForest'},
      {perlin: 0.22,  tile: 'tl-frozenPlains'},
      {perlin: 0.2,   tile: 'tl-packIce'},
      {perlin: 0.16,  tile: 'tl-arcticSea'},
      {perlin: 0.15,  tile: 'tl-packIce'},
      {perlin: 0.1,   tile: 'tl-arcticSea'},
      {perlin: 0.0,   tile: 'tl-plateau'},
    ],
    fixtures: [
      // {chance: 1.0, group: 'grp-rest'},
      // {chance: 1.0, group: 'grp-treasure'},
      // {chance: 1.0, group: 'grp-loot'},
    ],
  },
  {
    id: 'bio-outside-sea-arctic', 
    name: "txt-bio-outside-sea-arctic-name",
    debugColor: 'gray',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    flags: '+arctic', 
    terrain: [
      {perlin: 0.67, tile: 'tl-arcticSea'},
      {perlin: 0.62, tile: 'tl-packIce'},
      {perlin: 0.60, tile: 'tl-glacier-water'},
      {perlin: 0.59, tile: 'tl-packIce'},
      {perlin: 0.10, tile: 'tl-arcticSea'},
      {perlin: 0.04, tile: 'tl-packIce'},
      {perlin: 0.00, tile: 'tl-glacier-water'},
    ],
    fixtures: [
      {ref: 'fxt-glacier-giant-1'},
    ],
  },


// fixtures

  {
    id: 'fxt-village-inuit',
    extends: 'fxt-village-1',
    reqBiomeFlags: '+arctic',
    sprite: "res_fxt_village_inuit.png",
    flags: '+village +villageType_inuit +settlement +inhabited +tribeInuit',
    particle: 'pt-village-inuit',
    spawnEvents: [
      {slots:1, setFixtureFlags:'+tribeInuit'},
    ],
    dayEvents: {
      reqStanding: '-10',
      replaceFixtures: {new:'fxt-village-inuit-angry'},
    },
    setTile: [
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
    ],
    setNeighbors: [
      {count: 4, ref:'tl-deepSnow'},
      {count: 2, ref:'tl-packIce'},
    ],
    debugCategory: 'village',
  },
  {
    id: 'fxt-village-inuit-angry',
    extends: 'fxt-village-1-angry',
    sprite: "res_fxt_village_inuit.png",
    flags: '+village +villageType_inuit +settlement +inhabited',
    particle: 'pt-village-inuit-angry',
  },

  {
    id: 'fxt-glacier-giant-1',
    name: "txt-fxt-glacier-giant-1-name",
    reqBiomeFlags: '+arctic',
    sprite: "res_fxt_glacier_giant_1.png",
    debugCategory: 'decorative',
    showHint: false,
    mapScore: 0,
    subFixtures: [
      {ref: 'fxt-glacier-giant-2', offsets: '1nw'},
      {ref: 'fxt-glacier-giant-3', offsets: '1n'},
      {ref: 'fxt-glacier-giant-4', offsets: '1ne'},
    ],
    setTile: [ {ref:'tl-arcticSea'} ],
    setNeighbors: [ {count:6, ref:'tl-arcticSea'} ],
  },

  // Particles

  {
    id: 'pt-snowStorm',
    timer: [0.5, 1],
    count: 1, 
    imgSrc: ['pt_snowFall_3.png',],
    offsetX: [-30, 30],
    offsetY: [-35, -25],
    velX: [-4, 4], 
    velY: [10, 10],
    weight: 0,
    maxTime: 2.2,
    fadeStart: 0.7,
    isAbsolute: false
  },
  {
    id: 'zn-snowStorm',
    name: "txt-zn-snowStorm-name",
    //tileFlags: '+desert',
    canAttack: false,
    particle: 'pt-snowStorm',
    //eventChance: 0.8,
    showOutline: false,
    stopTravel: true,
    events: {
      showImage: {src: 'evt_fxt_empty.png', type: 'day'},
      text: "txt-zn-desertStorm",
      removeZone: true,
      turns: +3,
      partyEffects: {
        posTile: {traversable:true, range:'5..7', reachable:true},
        teleport: true,  
      }        
    }
  },
  {
    id: 'spr-snowStorm',
    defaultLifeTime: 20,
    defaultChance: 0.6,
    removeFixture: false,
    particle: 'pt-snowStorm',
    //partyEvents: 'evt-sprawl-fire',
    viewCost: 0.7,
    blockZone: false,
  },

  // Giant Glacier Subfixtures

  { 
    id: 'fxt-glacier-giant-2',
    debugCategory:'ruins',
    sprite: "res_fxt_glacier_giant_2.png",
    showHint: false,
    mapScore: 0,
    isRemovable: false
  },
  { 
    id: 'fxt-glacier-giant-3',
    extends: 'fxt-glacier-giant-2',
    sprite: "res_fxt_glacier_giant_3.png",
  },
  { 
    id: 'fxt-glacier-giant-4',
    extends: 'fxt-glacier-giant-2',
    sprite: "res_fxt_glacier_giant_4.png",
  },

// tiles
  
  {
    id: 'tl-packIce',
    name: "txt-tl-packIce",
    sprites: [
      "res_tile_packIce_1.png",
      "res_tile_packIce_2.png",
      "res_tile_packIce_3.png",
      "res_tile_packIce_4.png",
      "res_tile_packIce_5.png",
      "res_tile_packIce_6.png",
    ],
    borderImgIdx: 39,
    borderPrio: 6,
    moveCost: 4,
    borderTag: 'water',
    viewCost: 0.2,
    crumble: 'tl-arcticSea',
    eventImg: {
      day:'evt_tile_packIce_1.png',
      night: 'evt_tile_packIce_1.png'
    }, 
    moveSounds: [
      'sfx_move_water_1', 
      'sfx_move_water_2',
      'sfx_move_water_3',
      'sfx_move_water_4'
    ],
    travelParticle: 'pt-travel-water',
    flags: '+iceDanger',
    sprawls: [
      {id:'spr-chasm', chance:0},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-river-shallow'},
      {id:'spr-geysir-flood', burnedTile:'tl-arcticSea'},
    ],
  },
  {
    id: 'tl-arcticSea',
    name: "txt-tl-arcticSea",
    flags: '+river',
    sprites: [
      "res_tile_arcticSea_1.png",
      "res_tile_arcticSea_1.png",
      "res_tile_arcticSea_1.png",
      "res_tile_arcticSea_2.png",
      "res_tile_arcticSea_3.png",
      "res_tile_arcticSea_4.png",
      "res_tile_arcticSea_5.png",
      "res_tile_arcticSea_6.png",
      "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png", "res_tile_arcticSea_7.png",
    ],
    borderSprites: [
      ["res_tileBorder_arcticSea_n_1.png",  "res_tileBorder_arcticSea_n_2.png",   "res_tileBorder_arcticSea_n_3.png"],
      ["res_tileBorder_arcticSea_ne_1.png", "res_tileBorder_arcticSea_ne_2.png",  "res_tileBorder_arcticSea_ne_3.png"],
      ["res_tileBorder_arcticSea_se_1.png", "res_tileBorder_arcticSea_se_2.png",  "res_tileBorder_arcticSea_se_3.png"],
      ["res_tileBorder_arcticSea_s_1.png",  "res_tileBorder_arcticSea_s_2.png",   "res_tileBorder_arcticSea_s_3.png"],
      ["res_tileBorder_arcticSea_sw_1.png", "res_tileBorder_arcticSea_sw_2.png",  "res_tileBorder_arcticSea_sw_3.png"],
      ["res_tileBorder_arcticSea_nw_1.png", "res_tileBorder_arcticSea_nw_2.png",  "res_tileBorder_arcticSea_nw_3.png"],
    ],
    borderImgIdx: 39,
    borderPrio: 6,
    borderTag: 'water',
    viewCost: 0.1,
    moveCost: -1,
    events: 'evt-tile-river',
    sprawls: [
      {id:'spr-dry', burnedTile:'tl-river-shallow'},
      {id:'spr-fire', lifeTime:0},
      {id:'spr-geysir-flood', burnedTile:'tl-arcticSea'},
      {id:'spr-geysir-dry', lifeTime:2, burnedTile:'tl-packIce'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-river'},
    ],
  },
  {
    id: 'tl-deepSnow',
    name: "txt-tl-deepSnow",
    sprites: [
      "res_tile_deepSnow_1.png", "res_tile_deepSnow_1.png", "res_tile_deepSnow_1.png", "res_tile_deepSnow_1.png",
      "res_tile_deepSnow_2.png", "res_tile_deepSnow_2.png", "res_tile_deepSnow_2.png", "res_tile_deepSnow_2.png",
      "res_tile_deepSnow_3.png", "res_tile_deepSnow_3.png", "res_tile_deepSnow_3.png", "res_tile_deepSnow_3.png",
      "res_tile_deepSnow_4.png", "res_tile_deepSnow_4.png", "res_tile_deepSnow_4.png", "res_tile_deepSnow_4.png",
      "res_tile_deepSnow_5.png", "res_tile_deepSnow_5.png", "res_tile_deepSnow_5.png", "res_tile_deepSnow_5.png",
      "res_tile_deepSnow_6.png", "res_tile_deepSnow_6.png", "res_tile_deepSnow_6.png", "res_tile_deepSnow_6.png",
      "res_tile_deepSnow_7.png", 
      "res_tile_deepSnow_8.png", 
      "res_tile_deepSnow_9.png",
      "res_tile_deepSnow_10.png",
      "res_tile_deepSnow_11.png",
      "res_tile_deepSnow_12.png",
    ],
    borderImgIdx: 35,
    borderPrio: 2,
    moveCost: {default:10, 'it-snowshoe':5},
    viewCost: 0.4,
    flags: '+arctic +iceDanger',
    travelParticle: 'pt-travel-deepSnow',
    eventImg: {
      day: 'evt_tile_deepSnow_1.png',
      night: 'evt_tile_deepSnow_1.png'
    },
    moveSounds: ['sfx_move_snow_1', 'sfx_move_snow_2', 'sfx_move_snow_3'],
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass'},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-plains'},
      {id:'spr-geysir-flood', burnedTile:'tl-arcticSea'},
    ]
  },
  {
    id: 'tl-glacier-water',
    name: "txt-tl-glacier-water",
    flags: '+mountain',
    sprites: [
      "res_tile_glacier_water_1.png",
      "res_tile_glacier_water_2.png",
      "res_tile_glacier_water_3.png",
      "res_tile_glacier_water_4.png",
      "res_tile_glacier_water_5.png",
    ],
    borderImgIdx: 39,
    borderPrio: 6,
    borderOnlyKnown: true,
    elevation: 3.0,
    borderTag: 'water',
    viewCost: 0.6,
    moveCost: -1,
    breakStamps: true,
    breakLines: true,
    travelParticle: 'pt-travel-water',
    eventImg: {
      day: 'evt_tile_mountain_1.png',
      night:'evt_tile_mountain_1.png'
    },
    sprawls: [
      {id:'spr-fire', lifeTime:0},
      {id:'spr-dry', chance:0},
      {id:'spr-flood', lifeTime:0},
      {id:'spr-geysir-flood', lifeTime:0},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
    ]
  },
  {
    id: 'tl-glacier-land',
    name: "txt-tl-glacier-water",
    flags: '+mountain',
    sprites: [
      "res_tile_glacier_land_1.png",
      "res_tile_glacier_land_2.png",
      "res_tile_glacier_land_3.png",
      "res_tile_glacier_land_4.png",
      "res_tile_glacier_land_5.png",
      "res_tile_glacier_land_6.png",
    ],
    borderSprites: [
      ["res_tileBorder_glacier_land_n_1.png", "res_tileBorder_glacier_land_n_2.png", "res_tileBorder_glacier_land_n_3.png"],
      ["res_tileBorder_glacier_land_ne_1.png", "res_tileBorder_glacier_land_ne_2.png"],
      ["res_tileBorder_glacier_land_se_1.png", "res_tileBorder_glacier_land_se_2.png", "res_tileBorder_glacier_land_se_3.png"],
      ["res_tileBorder_glacier_land_s_1.png", "res_tileBorder_glacier_land_s_2.png", "res_tileBorder_glacier_land_s_3.png"],
      ["res_tileBorder_glacier_land_sw_1.png", "res_tileBorder_glacier_land_sw_2.png", "res_tileBorder_glacier_land_sw_3.png"],
      ["res_tileBorder_glacier_land_nw_1.png", "res_tileBorder_glacier_land_nw_2.png"],
    ],
    borderPrio: 7,
    borderImgIdx: 41,
    borderOnlyKnown: true,
    elevation: 3.0,
    viewCost: 0.6,
    moveCost: -1,
    breakStamps: true,
    breakLines: true,
    travelParticle: 'pt-travel-deepSnow',
    sprawls: [
      {id:'spr-fire', lifeTime:0},
      {id:'spr-dry', chance:0},
      {id:'spr-flood', lifeTime:0},
      {id:'spr-geysir-flood', lifeTime:0},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-mountain'},
    ]
  },
  {
    id: 'tl-glacier-land-traversable',
    extends: 'tl-glacier-land',
    moveCost: 3,
    elevation: 1.0,
    moveSounds: ['sfx_move_ice_1', 'sfx_move_ice_2', 'sfx_move_ice_3'],
  },
  {
    id: 'tl-frozenPlains',
    name: "txt-tl-frozenPlains",
    sprites: [
      //"res_tile_frozenPlains_5.png",
      "res_tile_frozenPlains_1.png", "res_tile_frozenPlains_1.png",
      "res_tile_frozenPlains_2.png", "res_tile_frozenPlains_2.png",
      "res_tile_frozenPlains_3.png", "res_tile_frozenPlains_3.png",
      "res_tile_frozenPlains_4.png", "res_tile_frozenPlains_4.png",
      "res_tile_frozenPlains_5.png", "res_tile_frozenPlains_5.png",
      "res_tile_frozenPlains_6.png", "res_tile_frozenPlains_6.png",
      "res_tile_frozenPlains_7.png",
      "res_tile_frozenPlains_8.png",
      "res_tile_frozenPlains_9.png",
      "res_tile_frozenPlains_10.png",

    ],
    borderImgIdx: 38,
    borderPrio: 1,
    viewCost: 0.25,
    moveCost: 2,
    eventImg: {
      day:'evt_tiles_frozenPlains_1.png',
      night: 'evt_tiles_frozenPlains_1.png'
    },
    moveSounds: ['sfx_move_ice_1', 'sfx_move_ice_2', 'sfx_move_ice_3'],
    travelParticle: 'pt-travel-frozenPlains',
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass'},
      {id:'spr-fire', chance:0.5, lifeTime:2, burnedTile: 'tl-scorchedEarth'},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-plains'},
      {id:'spr-geysir-flood', burnedTile:'tl-arcticSea'},
    ]
  },
  {
    id: 'tl-plateau',
    name: "txt-tl-plateau",
    sprites: [
      //"res_tile_frozenPlains_5.png",
      "res_tile_plateau_1.png", "res_tile_plateau_1.png",
      "res_tile_plateau_2.png", "res_tile_plateau_2.png",
      "res_tile_plateau_3.png", "res_tile_plateau_3.png",
      "res_tile_plateau_4.png", "res_tile_plateau_4.png",
      "res_tile_plateau_5.png", "res_tile_plateau_5.png",
      "res_tile_plateau_6.png",
      "res_tile_plateau_7.png",
    ],
    borderImgIdx: 36,
    borderPrio: 8,
    viewCost: 0.6,
    elevation: 2.2,
    moveCost: {default:1, sledge:12},
    passCost: {default:24, 'it-climbingGear':17},
    flags: '+hill',
    eventImg: {
      day:'evt_tile_plateau_1.png',
      night: 'evt_tile_plateau.png'
    },
    moveSounds: ['sfx_move_dry_1', 'sfx_move_dry_2', 'sfx_move_dry_3'],
    travelParticle: 'pt-travel-plateau',
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass'},
      {id:'spr-dry',  chance:0.0},
      {id:'spr-fire', chance:0.5, lifeTime:2, burnedTile: 'tl-scorchedEarth'},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
      {id:'spr-geysir-flood', chance:0.0},
    ]
  },
  {
    id: 'tl-snowForest',
    name: "txt-tl-snowForest",
    sprites: [
      "res_tile_snowForest_1.png",
      "res_tile_snowForest_2.png",
      "res_tile_snowForest_3.png",
      "res_tile_snowForest_4.png",
      "res_tile_snowForest_5.png",
      "res_tile_snowForest_6.png",
    ],
    borderImgIdx: 37,
    borderPrio: 3,
    viewCost: 0.4,
    moveCost: 3,
    eventImg: {
      day:'evt_tiles_snowForest_1.png',
      night: 'evt_tiles_snowForest_1.png'
    },
    moveSounds: ['sfx_move_snow_1', 'sfx_move_snow_2', 'sfx_move_snow_3'],
     travelParticle: 'pt-travel-frozenPlains',
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass'},
      {id:'spr-fire', chance:0.5, lifeTime:2, burnedTile: 'tl-scorchedEarth'},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-jungle-thick'},
      {id:'spr-geysir-flood', burnedTile:'tl-arcticSea'},
    ]
  },
  {
    id: 'tl-crystalForest',
    name: "txt-tl-crystalForest",
    sprites: [
      "res_tile_chrystalForest_1.png",
      "res_tile_chrystalForest_2.png",
      "res_tile_chrystalForest_3.png",
      "res_tile_chrystalForest_4.png",
      "res_tile_chrystalForest_5.png",
      "res_tile_chrystalForest_6.png",
    ],
    borderImgIdx: 40,
    borderPrio: 4,
    viewCost: 0.4,
    moveCost: 4,
    hideParty: false,
    eventImg: {
      day:'evt_tiles_chrystalForest.png',
      night: 'evt_tiles_chrystalForest.png'
    },
    moveSounds: ['sfx_move_ice_1', 'sfx_move_ice_2', 'sfx_move_ice_3'],
    travelParticle: 'pt-travel-crystalForest',
    sprawls: [
      {id:'spr-fertile', burnedTile: 'tl-grass'},
      {id:'spr-fire', chance:0.5, lifeTime:2, burnedTile: 'tl-scorchedEarth'},
      {id:'spr-chasm', burnedTile: 'tl-arctic-chasm'},
      {id:'spr-corrupt', burnedTile: 'tl-corrupted-stoneForest'},
      {id:'spr-geysir-flood', burnedTile:'tl-arcticSea'},
    ]
  },
  {
    id: 'tl-arctic-chasm',
    name: "txt-tl-arctic-chasm",
    flags: '+pit',
    sprites: [
      "res_tile_arcticChasm_1.png",
      "res_tile_arcticChasm_2.png",
      "res_tile_arcticChasm_3.png",
      "res_tile_arcticChasm_4.png",
      "res_tile_arcticChasm_5.png",
      "res_tile_arcticChasm_6.png",
      "res_tile_arcticChasm_7.png",
    ],
    borderImgIdx: 42,
    borderPrio: 5,
    borderOnlyKnown: true,
    borderTag: 'pit',
    viewCost: 0.05,
    moveCost: -1,
    events: 'evt-tile-pit',
    sprawls: [
      {id:'spr-fire', lifeTime:0},
      {id:'spr-dry', chance:0},
      {id:'spr-flood', lifeTime:0},
      {id:'spr-geysir-flood', lifeTime:0},
    ]
  },

])