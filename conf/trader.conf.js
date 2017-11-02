config.entities.add([

// fixtures

  {
    id: 'fxt-trader',
    name: "txt-fxt-trader-name",
    reqBiomeFlags: '-arctic',
    flags: '+trader',
    sprite: "res_fxt_trader.png",
    particle: 'pt-trader',
    priceTable: 'trader',
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-corrupted-plains', reqBiomeFlags: '+corrupted'},
      {ref:'tl-grass'},
    ],
    setNeighbors: [
      {count: 6, ref:'tl-dry', reqBiomeFlags: '+dry'},
      {count: 6, ref:'tl-desert', reqBiomeFlags: '+desert'},
      {count: 6, ref:'tl-grass', reqBiomeFlags: '+grass'},
      {count: 6, ref:'tl-corrupted-plains', reqBiomeFlags: '+corrupted'},
    ],
    actions: 'evt-trader-enter',
    debugColor: 'deeppink',
  },

// item tables

  {
    id: 'il-trade-trader-normal',
    items: [
      {slots: 2, 'it-machete':20},
      {slots: 2, 'it-climbingGear':20},
      {slots: 2, 'it-rope':20},
      {slots: 2, 'it-ammo':10},
      {slots: 2, 'it-shovel':5},
      {slots: 2, 'it-torch':10},
      {slots: 2, 'it-chocolate':10}, 
      {slots: 2, 'it-canvas':6},
      {slots: 2, 'it-whisky':10}, 
      {slots: 2, 'it-tinCans':10}, 
      {slots: 2, 'it-spear':5},
      {slots: 2, 'it-nativeTrinket':3},
      {slots: 1, 'it-marbles':5},
      {slots: 1, 'it-costonFlare':10}, 
      {slots: 1, 'it-dynamite':10}, 
      {slots: 1, 'it-binoculars':1}, 
      {slots: 1, 'it-sextant':1}, 
      {slots: 1, 'it-telescope':1}, 
      {slots: 1, 'it-elephantTusk':3},
      {slots: 1, 'it-bongos':1},
      {slots: 1, 'it-firstAid':10},
      {slots: 1, 'it-map-treasure':1},
      {slots: 1, 'it-pendulum-treasure':1},
      {slots: 1, 'it-pendulum-blessing':1},
      {slots: 1, 'it-pendulum-shrine':1},
    ]
  },
  {
    id: 'il-trade-trader-special',
    items: [
      {slots: 8, 'it-moonStone':1},
      {slots: 2, 'it-nativeTrinket':3},
      {slots: 1, 'it-cocaLeaves':10},
      {slots: 1, 'it-map-treasure':3},
      {slots: 1, 'it-hornFlute':10},
      {slots: 1, 'it-crystalBall':1},
      {slots: 1, 'il-tomePages':2},
      {slots: 1, 'it-dinoSkull':1},
      {slots: 1, 'it-miniPuppets':6},
      {slots: 1, 'it-pendulum-treasure':1},
      {slots: 1, 'it-pendulum-blessing':1},
      {slots: 1, 'it-pendulum-shrine':1},
      {slots: 1, 'it-voodooDoll':3},
    ]
  },

// events

  {
    id: 'evt-trader-enter',
    actionText: "txt-evt-trader-enter-action",
    text: "txt-evt-trader-enter",
    report: "txt-evt-trader-enter-report",
    playMusic: 'thm_utility_2',
    npc: 'npc-trader',
    showImage: {src: 'evt_fxt_trader_1.png', type: 'day'},
    actions: [
      'evt-trader-barter',
      'evt-trader-leave'
    ]
  },
  {
    id: 'evt-trader-barter',
    actionText: "txt-evt-mission-trade-action",
    events: [
      {
        slots: 4,
        text: "txt-evt-trader-barter",
        barter: {
          items: {'il-trade-trader-normal':8, 'it-water':20, 'il-metaItems':99}, 
          close: 'evt-trader-leave',
        },
      }, 
      {
        text: "txt-evt-trader-barter-1",
        barter: {
          items: {'il-trade-trader-special':8, 'it-water':20, 'il-metaItems':99}, 
          close: 'evt-trader-leave',
        },
      }, 
    ],
  },
  {
    id: 'evt-trader-leave',
    actionText: "txt-evt-leave-action",
    text: "txt-evt-trader-leave",
    replaceFixtures: {},
  }, 
])