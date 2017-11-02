config.entities.add([
  
  // fixtures
  {
    id: 'fxt-fumarole-spawn',
    debugCategory: 'hazard',
    showHint: false, mapScore: 0, hideParty:false,
    spawnEvents: {
      replaceFixtures: {new:'fxt-fumarole-1'}
    }
  },
  {
    id: 'fxt-fumarole-1',
    name: "txt-fxt-fumarole-name",
    debugCategory: 'hazard',
    sprite: [
      {ref:'res_fxt_fumarole_1.png', reqBiomeFlags: ''},
    ],
    setTile: [
      {ref:'tl-frozenPlains', reqBiomeFlags: '+arctic'},
      {ref:'tl-dry', reqBiomeFlags: '+grass | +dry | +prehistoric'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
    ],
    setNeighbors: [ 
      {count:4, ref:'tl-frozenPlains', reqBiomeFlags: '+arctic'},
      {count:4, ref:'tl-dry-stoneForest', reqBiomeFlags: '+grass | +dry | +prehistoric'},
      {count:4, ref:'tl-desert-stoneForest', reqBiomeFlags: '+desert'},    
    ],
    showHint: false, mapScore: 0, hideParty:false,
    particle: 'pt-fumarole-smoke-active',
    spawnEvents: { setTileFlags: '-poisonGasSpawned +active' },
    dayEvents: [
      {reqTileFlags: '-active', reqAge: 30, setTileFlags: '+active', setFixtureParticle: 'pt-fumarole-smoke-active', resetFixtureAge:true },
      {reqTileFlags: '+active -poisonGasSpawned', reqAge: 3, setTileFlags: '+poisonGasSpawned', addZone: {ref:'zn-poisonGas', range:1} },
      {reqTileFlags: '+active', reqAge: 4, setTileFlags: '-active -poisonGasSpawned', setFixtureParticle: 'pt-fumarole-smoke-1', resetFixtureAge:true },
    ],
  },
  {
    id: 'fxt-fumarole-inactive',
    name: "txt-fxt-fumarole-name",
    debugCategory: 'hazard',
    sprite: "res_fxt_fumarole_1.png",
    showHint: false, mapScore: 0, hideParty:false,
    particle: 'pt-fumarole-smoke-1',
    spawnEvents: { setTileFlags: '-poisonGasSpawned' },
    dayEvents: [
      {slots: 1, reqAge: 30, replaceFixtures: {new:'fxt-fumarole-active'} },
      {slots: 3, },
    ],
  },
  {
    id: 'fxt-fumarole-active',
    extends: 'fxt-fumarole-inactive',
    particle: 'pt-fumarole-smoke-active',
    spawnEvents: {
      camShake: {power:2, length:2.0},
    },
    dayEvents: [
      {reqAge: 3, reqTileFlags: '-poisonGasSpawned', setTileFlags: '+poisonGasSpawned', addZone: {ref:'zn-poisonGas', range:1} },
      {reqAge: 4, replaceFixtures: {new:'fxt-fumarole-inactive'} },
    ],
  },

// ZONES

  {
    id: 'zn-poisonGas',
    name: "txt-zn-poisonGas-name",
    canAttack: false,
    particle: 'pt-poisonGas',
    flags: '+poisonGas',
    eventChance: 1,
    hideParty: true,
    showOutline: false,
    stopTravel: false,
    moveSpeed: 2,
    lifeTurns: '17..20', 
    size: [2,2],
    events: {
     charEffects: { count: "all", health: -2 },
     chat: 'cl-poisonGas',
    },
  },

// PARTICLES

  {
    id: 'pt-poisonGas',
    timer: [0.5, 0.7],
    count: 1, 
    velX: [-10, 10], 
    velY: [-6, 6],
    offsetY: [-20, 20],
    offsetX: [-20, 20],
    imgSrc: ['pt_poisonGas_1.png', 'pt_poisonGas_2.png', 'pt_poisonGas_3.png', 'pt_poisonGas_4.png', 'pt_poisonGas_5.png'],
    weight: 0,
    maxTime: 2.2,
    fadeStart: 1.2,
    isAbsolute: false
  },
  {
    id: 'pt-fumarole-smoke-1',
    timer: [0.3,0.6],
    count: 1, 
    offsetX: 3,
    offsetY: -18,
    imgSrc: ['pt_fumarole_smoke_1.png', 'pt_fumarole_smoke_2.png', 'pt_fumarole_smoke_3.png', 'pt_fumarole_smoke_4.png', 'pt_fumarole_smoke_1.png', 'pt_fumarole_smoke_2.png', 'pt_fumarole_smoke_3.png', 'pt_fumarole_smoke_4.png', 'pt_fumarole_smoke_5.png',],
    velX: [-3, 3], 
    velY: [-3, 0], 
    weight: -11,
    maxTime: 2.0,
    fadeStart: 0.6,
    isAbsolute: false
  },
  {
    id: 'pt-fumarole-smoke-active',
    timer: [0.1,0.1],
    count: 1, 
    offsetX: 3,
    offsetY: -18,
    imgSrc: ['pt_fumarole_smoke_6.png', 'pt_fumarole_smoke_7.png', 'pt_fumarole_smoke_6.png', 'pt_fumarole_smoke_8.png', 'pt_fumarole_smoke_2.png', 'pt_fumarole_smoke_3.png'],
    velX: [-6, 6], 
    velY: [-70, -60], 
    weight: 3,
    maxTime: 0.8,
    fadeStart: 0.6,
    isAbsolute: false
  },
  {
    id: 'pt-fumarole-smoke-2',
    extends: 'pt-fumarole-smoke-1',
    offsetX: 9,
    offsetY: -21,
  },
  {
    id: 'pt-fumarole-smoke-3',
    extends: 'pt-fumarole-smoke-1',
    offsetX: -8,
    offsetY: -21,
  },
  {
    id: 'pt-fumarole-smoke-4',
    extends: 'pt-fumarole-smoke-1',
    offsetX: -7,
    offsetY: -4,
  },

])
