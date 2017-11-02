config.entities.add([

// fixtures

  {
    id: 'fxt-shamanHut',
    name: "txt-fxt-shamanHut-name",
    initItems: {'il-trade-shamanHut':4, 'il-tomePages':4, 'il-metaItems':99},
    priceTable: 'shamanHut',
    sprite: "res_fxt_shamanHut.png",
    particle: 'pt-shamanHut',
    flags: '+dreamVisions +inhabited',
    actions: ['evt-shamanHut-enter'],
    reqBiomeFlags: '-desert',
    setNeighbors: [
       {ref:'tl-swamp', reqBiomeFlags: '-prehistoric -dry'},
       {ref:'tl-sulfur-swamp', reqBiomeFlags: '+prehistoric -dry'},
       {ref:'tl-jungle-thick', reqBiomeFlags: '-dry'},
       {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
       {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
       {ref:'tl-river-shallow', reqBiomeFlags: '-prehistoric -dry'},
       {ref:'tl-sulfur-shallow', reqBiomeFlags: '+prehistoric -dry'},
     ],
     setTile: [
       {ref:'tl-sulfur-swamp', reqBiomeFlags: '+prehistoric -dry'},
       {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
       {ref:'tl-swamp'},
     ],
     debugColor: 'deeppink',
  },
  {
    id: 'fxt-shamanHut-forsaken',
    name: "txt-fxt-shamanHut-name",
    debugColor: '#770057',
    sprite: "res_fxt_shamanHut.png",
    actions: 'evt-shamanHut-forsaken',
  },

// events

  {
    id: 'evt-shamanHut-forsaken',
    text: "txt-evt-shamanHut-forsaken"
  },
  { 
    id: 'evt-shamanHut-enter',
    actionText: "txt-evt-shamanHut-enter-action",
    text: "txt-evt-shamanHut-enter",
    report: "txt-evt-shamanHut-enter-report",
    showImage: {src: 'evt_fxt_shamanHut_1.png', type: 'day'},
    npc: ['pl-native-shaman'],
    events: 'evt-shamanHut-actions'
  },
  { 
    id: 'evt-shamanHut-trade',
    actionText: "txt-evt-mission-trade-action",
    text: "txt-evt-shamanHut-trade",
    barter: {
      close: 'evt-shamanHut-trade-deal',
      cancel: 'evt-shamanHut-trade-cancel',
    }
  },
  {
    id: 'evt-shamanHut-trade-deal',
    text: "txt-evt-shamanHut-trade-deal",
    events: 'evt-shamanHut-actions'
  },
  {
    id: 'evt-shamanHut-trade-cancel',
    text: "txt-evt-shamanHut-trade-cancel",
    events: 'evt-shamanHut-actions'
  },
  { 
    id: 'evt-shamanHut-heal-trade',
    actionText: "txt-evt-shamanHut-heal-trade-action",
    text: "txt-evt-shamanHut-heal-trade",
    charEffects: {
      count: "any",
      reqStatus: '+injured | +infected'
    },
    barter: {
      baseValue: 20, 
      close: 'evt-shamanHut-heal-trade-deal',
      cancel: 'evt-shamanHut-trade-cancel',
    }
  },
  {
    id: 'evt-shamanHut-heal-trade-deal',
    text: "txt-evt-shamanHut-heal-trade-deal",
    charEffects: {
      count: "any",
      reqStatus: '+injured | +infected',
      actions: 'evt-shamanHut-heal-injured'
    },
  },
  {
    id: 'evt-shamanHut-heal-injured',
    actionText: "txt-evt-firstAid-heal-action",
    text: "txt-evt-shamanHut-heal-injured",
    report: "txt-evt-shamanHut-heal-injured-report",
    setStatus: '-infected',
    health: 20,
    events: 'evt-shamanHut-actions'
  },
  { 
    id: 'evt-shamanHut-cleanse-trade',
    actionText: "txt-evt-shamanHut-cleanse-trade-action",
    chat: 'cl-shamanGarvey',
    text: "txt-evt-shamanHut-cleanse-trade",
    charEffects: {
      reqStatusFlags: '+ailment | +rabies'
    },
    barter: {
      baseValue: 20, 
      close: 'evt-shamanHut-cleanse-trade-deal',
      cancel: 'evt-shamanHut-trade-cancel',
    },
  },
  {
    id: 'evt-shamanHut-cleanse-trade-deal',
    text: "txt-evt-shamanHut-cleanse-trade-deal",
    charEffects: {
      count: 'any',
      reqStatusFlags: '+ailment | +rabies',
      reqCharFlags: '-abomination',
      actions: 'evt-shamanHut-cleanse'
    },
  },
  {
    id: 'evt-shamanHut-cleanse',
    actionText: "txt-evt-shamanHut-cleanse-action",
    text: "txt-evt-shamanHut-cleanse",
    report: "txt-evt-shamanHut-cleanse-report",
    removeStatusWithFlags: '+ailment | +rabies',
    events: 'evt-shamanHut-actions'
  },
  { 
    id: 'evt-shamanHut-actions',
    actions: [
      'evt-shamanHut-heal-trade',
      'evt-shamanHut-cleanse-trade',
      'evt-shamanHut-trade',
      'evt-leave',
    ]
  },
])
