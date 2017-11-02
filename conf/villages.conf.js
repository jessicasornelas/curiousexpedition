config.entities.add([

// fixtures

  {
    id: 'fxt-village-1',
    name: "txt-fxt-village-1-name",
    reqBiomeFlags: '-desert -arctic',
    flags: '+village +villageType_1 +settlement +inhabited',
    worldMap: true,
    sprite: "res_fxt_village_2.png",
    initItems: {'il-trade-village':6, 'it-jewels':1, 'it-water':20, 'il-metaItems':99},
    priceTable: 'village',
    particle: 'pt-village-1',
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert'},
      {ref:'tl-grass'}
    ],
    setNeighbors: [
      {count: 2, ref:'tl-jungle-thick', reqBiomeFlags: '+grass'},
      {count: 2, ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {count: 3, ref:'tl-mountain'},
      {ref:'tl-river-shallow'},
    ],
    actions: 'evt-village-init',
    sprawlEvents: {id:'spr-fire', standing:-3},
    subFixtures: {
      ref: 'fxt-subfixture-village-1 fxt-subfixture-village-2', 
      offsets: '4n 4sw 4se',
      chance: 0.75,
    }, 
    spawnEvents: [
      { setFixtureFlags:'+tribeWarriors' },
      { reqTutorial:false, setFixtureFlags:'+tribeScouts' },
      { reqTutorial:false, setFixtureFlags:'+tribeShamans'}
    ],
    dayEvents: [
      {
        reqStanding: '-10',
        reqFixtureFlags: '-angry +inhabited',
        setFixtureFlags: '+angry',
        events: [
          {
            reqFixtureFlags: '+villageType_1',
            setFixtureParticle: 'pt-village-2-angry',
          },
          {
            prio: 1,
            setFixtureParticle: 'pt-village-2-angry',
          }
        ]
      },
      {
        reqFixtureFlags: '+angry',
        partyEffects: [
          {reqZone: {flags:'+native', range:'..6', count:'0'}},
          {reqZone: {flags:'+native', range:'world', count:'..2'}},
        ],
        events: [
          {
            reqTileFlags: '-counting0',
            setTileFlags: '+counting0'
          },
          {
            reqTileFlags: '+counting0 -counting1 -counting2',
            setTileFlags: '+counting1'
          },
          {
            reqTileFlags: '+counting0 +counting1 -counting2',
            setTileFlags: '+counting2'
          },
          {
            reqTileFlags: '+counting2 +counting1 +counting0',
            setTileFlags: '-counting2 -counting1 -counting0',
            events: [
              {
                reqFixtureFlags: '-villageType_lizard', 
                addZone: {ref:'zn-angryNatives', range:1, seeking:true}
              },
              {
                prio: 1,
                addZone: {ref:'zn-angryLizards', range:1, seeking:true}
              }
            ]
          },
        ],
      }
    ],
    debugCategory: 'village', debugColor: '#64ff58',
  },
  {
    id: 'fxt-subfixture',
    debugCategory: 'subfixtures',
    debugColor: 'blue',
    showHint: false,
    hideParty:false,
  },
  {
    id: 'fxt-subfixture-village-1',
    extends: 'fxt-subfixture',
    sprite: [
      {ref:'res_fxt_sub_fire_1.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_sub_fire_3.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
      {ref:'tl-grass', reqBiomeFlags: '+grass | +prehistoric'},
    ],
  },
  {
    id: 'fxt-subfixture-village-2',
    extends: 'fxt-subfixture-village-1',
    sprite: [
      {ref:'res_fxt_sub_fire_2.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_sub_fire_4.png', reqBiomeFlags: '+arctic'},
    ],
  },
  {
    id: 'fxt-village-2',
    extends: 'fxt-village-1',
    reqBiomeFlags: '+dry -arctic',
    worldMap: true,
    sprite: "res_fxt_village_1.png",
    flags: '+village +villageType_2 +settlement +inhabited',
    initItems: {'il-trade-village':6, 'it-jewels':1, 'it-water':10, 'il-metaItems':99},
    particle: 'pt-village-2',
    setTile: [
      {ref:'tl-grass', reqBiomeFlags: '+grass'},
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert'},
    ],
    setNeighbors: [
      {count: 1, ref:'tl-dry'},
      {count: 4, ref:'tl-hill'},
      {ref:'tl-river-shallow'},
    ],
    debugCategory: 'village',
  },
  {
    id: 'fxt-village-3',
    extends: 'fxt-village-1',
    sprite: "res_fxt_village_water.png",
    reqBiomeFlags: '-desert -dry -arctic',
    flags: '+village +villageType_3 +settlement +inhabited',
    initItems: {'il-trade-village':6, 'it-jewels':1, 'it-water':20, 'il-metaItems':99},
    reqWorld: '1..',
    particle: 'pt-village-2',
    setTile: [
      {ref:'tl-river-shallow', reqBiomeFlags: '+dry | +grass | +mushrooms'},
      {ref:'tl-sulfur-shallow', reqBiomeFlags: '+prehistoric -mushrooms'},
    ],
    setNeighbors: [
      {count: 5, ref:'tl-river-shallow', reqBiomeFlags: '+dry | +grass | +mushrooms'},
      {count: 5, ref:'tl-sulfur-shallow', reqBiomeFlags: '+prehistoric -mushrooms'},
    ],
    debugCategory: 'village',
  },
  {
    id: 'fxt-village-4',
    extends: 'fxt-village-1',
    flags: '+village +villageType_4 +tribeNomads +settlement +inhabited',
    reqBiomeFlags: '+desert -arctic',
    initItems: {'il-trade-village':6, 'it-jewels':3, 'it-water':10, 'il-metaItems':99},
    sprite: "res_fxt_village_desert.png",
    setTile: 'tl-desert',
    setNeighbors: [
      {count: 6, ref:'tl-desert'},
    ],
    particle: 'pt-village-2',
    debugCategory: 'village',
  },
  {
    id: 'fxt-village-abandoned',
    name: "txt-fxt-village-abandoned-name",
    flags: '+village +settlement',
    debugCategory: 'village',
    debugColor: 'blue',
    sprite: "res_fxt_village_abandoned.png",
    actions: 'evt-village-abandoned',
  },
  {
    id: 'fxt-village-4-abandoned',
    extends: 'fxt-village-abandoned',
    sprite: "res_fxt_village_abandoned.png",
  },
  {
    id: 'fxt-village-bones',
    extends: 'fxt-village-1',
    flags: '+village +villageType_lizard +settlement +inhabited',
    reqBiomeFlags: '-desert -arctic',
    sprite: "res_fxt_village_bones.png",
    particle: 'pt-village-bones',
    spawnEvents: [
      {slots:1, setFixtureFlags:'+tribeLizards'},
    ],
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert '},
      {ref:'tl-corrupted-plains', reqBiomeFlags: '+corrupted'},
      {ref:'tl-grass-bushes', reqBiomeFlags: '+prehistoric | +grass | +water'},
    ],
    setNeighbors: [
      {count: 3, ref:'tl-dry-jungle-light', reqBiomeFlags: '+dry | +desert '},
      {count: 3, ref:'tl-corrupted-jungle-light', reqBiomeFlags: '+corrupted '},
      {count: 3, ref:'tl-jungle-light', reqBiomeFlags: '+prehistoric | +grass | +water'},
    ],
    debugCategory: 'village',
  },

// events

  {
    id: 'evt-village-init',
    actionText: "txt-evt-village-init-action",
    reqFixtureFlags: '-angry',
    partyEffects: [
      {
        optional: true,
        reqFixtureFlags: '-idolSet -tribeLizards',
        events: [
          {slots: 5, setFixtureFlags: '+idolSet'},
          {slots: 1, setFixtureFlags: '+idolSet +idolVillage', reqTutorial:false},
        ]
      },
    ],
    pushEvent: 'evt-village-enter',
    events: 'evt-village-setImageDay',
  },

  // +enterEvent is set after the first time entering the village

  {
    id: 'evt-village-enter',
    chat: 'cl-village-enter',
    events: [
      {
        reqFixtureFlags: '-inhabited',
        text: "txt-evt-village-enter-forsaken"
      },
      {
        prio: 1, // tutorial
        reqTutorial: true,
        text: "txt-evt-village-enter",
        events: 'evt-village-enterCheck'
      },
      {
        prio: 1, // slave return
        charEffects: {
          reqCharFlags: '+homeWorld +slave',
          events: 'evt-village-enter-slave',
        }
      },
      {
        prio: 2, // not first enter
        reqFixtureFlags: '+enterEvent', 
        text: "txt-evt-village-enter-1",
        events: 'evt-village-enterCheck',
      },
      {
        prio: 2, // first enter - trigger enter event
        reqFixtureFlags: '-enterEvent',
        setFixtureFlags: '+enterEvent',
        text: "txt-evt-village-enter-2",
        report: "txt-evt-village-enter-report",

      // --- Village type

        partyEffects: [
          { 
            optional: true, reqFixtureFlags: '+tribeWarriors',
            text: "txt-evt-village-enter-3",
            report: "txt-evt-village-enter-report-1",
          },
          { 
            optional: true, reqFixtureFlags: '+tribeScouts',
            text: "txt-evt-village-enter-4",
            report: "txt-evt-village-enter-report-2",
          },
          { 
            optional: true, reqFixtureFlags: '+tribeShamans',
            text: "txt-evt-village-enter-5",
            report: "txt-evt-village-enter-report-3",
          },
          { 
            optional: true, reqFixtureFlags: '+tribeNomads',
            text: "txt-evt-village-enter-6",
            report: "txt-evt-village-enter-report-4",
          },
          { 
            optional: true, reqFixtureFlags: '+tribeLizards',
            text: "txt-evt-village-enter-7",
            report: "txt-evt-village-enter-report-5",
          },
        ],

        // --- Enter events

        events: [
          {
            reqWorld: '1..', 
            reqFixtureFlags: '+idolVillage',
            events: 'evt-village-enter-idol'
          },
          {
            reqFixtureFlags: '+harborQuestKonrad', 
            events: 'evt-village-enter-konrad',
          },
          {
            reqPartyStatus: '+escortVillager',
            reqPartyFlags: '-escortVillagerRecruited',
            events: 'evt-village-enter-escortVillager',
          },
          {
            reqStanding: '-2..',
            charEffects: { reqStatus: '+blessingHoly' },
            events:'evt-village-enter-blessingHoly'
          },
          {
            prio:1,
            reqWorld: '1..',
            reqStanding: '..-1',
            events:'evt-village-enter-requestPresents'
          },
          {
            prio:1,
            reqWorld: '1..',
            reqStanding: '..-1',
            events:'evt-village-enter-whatDoWeWant'
          },
          {
            prio:1,
            reqWorld: '1..',
            reqStanding: '-3..',
            events: 'evt-village-enter-beastMaster'
          },
          {
            prio:1,
            events:'evt-village-enter-neutral'
          },
          {
            prio:1,
            reqStanding: '2..',
            events:'evt-village-enter-presents'
          },
          {
            prio:1,
            reqStanding: '-2..',
            events:'evt-village-enter-food'
          },
        ],
      },
    ],    
  },
  {
    id: 'evt-village-enter-whatDoWeWant',
    npcEffects: {
      text: "txt-evt-village-enter-whatDoWeWant",
      actions: [
        {
          actionText: "txt-evt-mission-cultist-rest-action",
          setFixtureFlags: '+recruitFail +tradeFail',
          text: "txt-evt-village-enter-whatDoWeWant-1",
          events: 'evt-village-enterCheck'
        },
        {
          actionText: "txt-evt-village-enter-whatDoWeWant-action",
          setTileFlags: '+restFail',
          text: "txt-evt-village-enter-whatDoWeWant-2",
          events: 'evt-village-enterCheck'
        },
        {
          actionText: "txt-evt-village-enter-whatDoWeWant-action-1",
          events: [
            {
              text: "txt-evt-village-enter-whatDoWeWant-3",
              events: 'evt-village-replaceAngry',
              actions: 'evt-leave'
            },
            {
              text: "txt-evt-village-enter-whatDoWeWant-4",
              items: {'it-map-treasure':1},
              actions: 'evt-village-enterCheck'
            },
          ],
        },
      ],
    },
  },
  {
    id: 'evt-village-enter-slave',
    charEffects: {
      reqCharFlags: '+homeWorld +slave',
      text: "txt-evt-village-enter-slave",
      actions: [
        {
        actionText: "txt-evt-village-enter-slave-action",
        standing: +4,
        events: {
            text: "txt-evt-village-enter-slave-1",
            events: [
              {
                slots: 5,
                text: "txt-evt-village-enter-slave-2",
                removeCharacter: true,
                actions: 'evt-village-main',
              },
              {
                slots: 1,
                text: "txt-evt-village-enter-slave-3",
                loyalty: +4,
                setCharFlags: '-slave',
                actions: 'evt-village-main',
              },
            ],
          },
        },
        {
          actionText: "txt-evt-village-enter-slave-action-1",
          text: "txt-evt-village-enter-slave-4",
          standing: -2,
          loyalty: -3,
          actions: 'evt-village-main',
        },
      ],
    },
  },
  {
    id: 'evt-village-enter-presents',
    text: "txt-evt-village-enter-presents",
    loot: {
      items: [
        {slots: 1, 'il-trade-village':1, 'it-mango':4},
        {slots: 1, 'il-loot-native':1, 'it-cocaLeaves':3},
      ],
      close: 'evt-village-enterCheck',
      cancel: 'evt-village-enterCheck',
    },
  },
  {
    id: 'evt-village-enter-blessingHoly',
    standing: +4,
    charEffects: {
      reqStatus: '+blessingHoly',
      text: "txt-evt-village-enter-blessingHoly",
    },
    actions: 'evt-village-enterCheck',
  },
  {
    id: 'evt-village-enter-beastMaster',
    text: "txt-evt-village-enter-beastMaster",
    setFixtureFlags: '+beastMaster',
    actions: 'evt-village-enterCheck',
  },
  {
    id: 'evt-village-enter-neutral',
    text: "txt-evt-village-enter-neutral",
    actions: 'evt-village-enterCheck',
  },
  {
    id: 'evt-village-enter-idol',
    text: "txt-evt-village-enter-idol",
    actions: 'evt-village-enterCheck',
  },
  {
    id: 'evt-village-enter-food',
    text: "txt-evt-village-enter-food",
    loot: {
      items: {'it-meat-animal-cooked-perfect':3},
      close: 'evt-village-enterCheck',
      cancel: 'evt-village-enterCheck'
    }
  },
  {
    id: 'evt-village-enter-requestPresents',
    text: "txt-evt-village-enter-requestPresents",
    barter: {
      baseValue: {base:15},
      close: {
        text: "txt-evt-village-enter-requestPresents-1",
        events: 'evt-village-enterCheck',
      },
      cancel: {
        events: [
          {
            slots:1,
            events: 'evt-village-replaceAngry',
            text: "txt-evt-village-enter-requestPresents-2",
          },
          {
            slots:1,
            setFixtureFlags: '-enterEvent',
            text: "txt-evt-village-enter-requestPresents-3",
          },
        ],
      },
    },
  },
  {
    id: 'evt-village-enter-escortVillager',
    npc: 'pl-village-escort',
    setPartyFlags: '+escortVillagerRecruited',
    npcEffects: {
      text: "txt-evt-village-enter-escortVillager",
      report: '§I found the wife I was asked to escort to London by the wealthy foreigner.',
      setPartyFlags: '+escortVillagerShrineInfo',
      actions: {
        actionText: "txt-evt-sanity-angry-action",
        addNPC: true,
        standing: +2,
        events: 'evt-village-enterCheck',
      },
    },
  },
  {
    id: 'evt-village-enterCheck',
    events: [ 
       {ref: 'evt-village-notWelcome'},
       {prio: 1, ref: 'evt-village-main'},
    ],
  },
  {
    id: 'evt-village-actions',
    events: [
      {
        actions: [
          'evt-village-familyAmulet',
          'evt-village-quest-letter',
          'evt-village-quest-missionary',
          'evt-village-rest',
          'evt-village-recruit',
          'evt-village-trade',
          'evt-village-beastMaster',
          'evt-village-leave',
        ],
      },
    ],
  },
  {
    id: 'evt-village-actions-night',
    actions: [
      'evt-village-actions-night-anthropology',
      'evt-village-actions-night-painting',
      'evt-village-sleep',
      'evt-village-stealIdol',
    ],
  },
  {
    id: 'evt-village-notWelcome',
    reqStanding: '..-9',
    text: "txt-evt-village-notWelcome",
    actions: 'evt-village-leave'
  },
  {
    id: 'evt-village-main',
    partyEffects: [
      // --- Player standing
      {
        prio: -1, 
        reqTutorial: true, optional: true,
        text: "txt-evt-village-main-tut",
      },
      // --- Steal Idol event
      { optional: true, reqFixtureFlags: '+idolVillage -tribeLizards',
        text: "txt-evt-village-main",
      },
      {
        optional: true, reqStanding: '2..', reqTutorial: false,
        text: "txt-evt-village-main-0",
        report: "txt-evt-village-main-report",
      },
      {
        optional: true, reqStanding: '0..1', reqTutorial: false,
        text: "txt-evt-village-main-1",
        report: "txt-evt-village-main-report-1",
      },
      {
        optional: true, reqStanding: '-3..-1', reqTutorial: false,
        text: "txt-evt-village-main-2",
        report: "txt-evt-village-main-report-2",
      },
      {
        optional: true, reqStanding: '-6..-4', reqTutorial: false,
        text: "txt-evt-village-main-3",
        report: "txt-evt-village-main-report-3",
      },
      {
        optional: true, reqStanding: '-8..-7', reqTutorial: false,
        text: "txt-evt-village-main-4",
        report: "txt-evt-village-main-report-4",
      },
      {
        charEffects: [ 
          { 
            optional: true,  // Translator
            reqStanding: '-2..',
            reqCharFlags: '+translator -special',
            setTempFlags: '+translatorUnit',
            text: "txt-evt-village-main-5"
          },
          { 
            optional: true,  // Polyglot
            reqStanding: '-2..',
            reqCharFlags: '+translator +special',
            reqTempFlags: '-translatorUnit',
            text: "txt-evt-village-main-6"
          },
        ], 
      },
    ],     
    events: 'evt-village-actions'
  },
  {
    id: 'evt-village-main-update',
    actionText: "txt-evt-village-main-update-action",
    partyEffects: [
      {
        optional: true, 
        prio: -1, 
        reqTutorial: true, 
        text: "txt-evt-village-main-update-tut"
      },
      {
        optional: true, 
        reqStanding: [2,10], 
        reqTutorial: false, 
        text: "txt-evt-village-main-update-0"
      },
      {
        optional: true, 
        reqStanding: [-1,1], 
        reqTutorial: false, 
        text: "txt-evt-village-main-update"
      },
      {
        optional: true, 
        reqStanding: [-3,-2], 
        reqTutorial: false, 
        text: "txt-evt-village-main-update-1"
      },
      {
        optional: true, 
        reqStanding: [-6,-4], 
        reqTutorial: false, 
        text: "txt-evt-village-main-update-2"
      },
      {
        optional: true, 
        reqStanding: [-8,-7], 
        reqTutorial: false, 
        text: "txt-evt-village-main-update-3"
      },
      {
        optional: true, 
        reqFixtureFlags: '+idolVillage',
        text: "txt-evt-village-main-update-idol",
      },
      {
        optional: true, chance: 0.3,
        reqFixtureFlags: '+wedding',
        setFixtureFlags: '-wedding',
        text: "txt-evt-village-main-update-weddingDone"
      },
      {
        optional: true, 
        reqFixtureFlags: '+wedding',
        text: "txt-evt-village-main-update-wedding"
      },
    ],
    events: 'evt-village-actions'
  },
  {
    id: 'evt-village-rest',
    alwaysShown: true,
    actionText: "txt-evt-village-rest-action",
    reqTileFlags: '-restFail',
    partyEffects: 'evt-village-setImageNight',
    events: [
      {
        prio: -1,
        reqTutorial: true,
        text: "txt-evt-village-rest",
        events: 'evt-village-nightSelect',
      },
      {
        reqStanding: '-2..10',
        text: "txt-evt-village-rest-1", 
        report: "txt-evt-village-rest-report",
        events: 'evt-village-nightSelect',
      },
      {
        reqStanding: '-8..-3',
        text: "txt-evt-village-rest-2", 
        barter: {
          baseValue: {base:15},
          close: {
            text: "txt-evt-village-rest-3", 
            events: 'evt-village-nightSelect',
          },
          cancel: {
            text: "txt-evt-village-rest-no",
            events: 'evt-village-actions',
          },
        },
      },
    ],
  },
  {
    id: 'evt-village-sleep',
    actionText: "txt-evt-mission-sleep-action",
    sanity: {base: sanityRestVillage, bonus: 'villageSanityBonus'},
    turns: 1,
    standing: standingCostVillageUse,

    charEffects: { 
      optional: true,
      reqPerk: '+polyglot',
      standing: -standingCostVillageUse, 
    },
    events: 'evt-village-morning'
  },
  {
    id: 'evt-village-morning',
    text: "txt-evt-village-morning",
    chat: 'cl-newMorning',
    pushEvent: 'evt-village-main-update',
    events: 'evt-village-setImageDay',   
  },
  {
    id: 'evt-village-trade',
    actionText: "txt-evt-mission-trade-action",
    alwaysShown: true,
    reqFixtureFlags: '-tradeFail',
    events: [
      {
        barter: {
          close: {
            text: "txt-evt-village-trade",
            events: [
              {
                reqTileFlags: '-traded',
                setTileFlags: '+traded',
                events: 'evt-village-actions'
              },
              {
                prio: 1,
                events: 'evt-village-actions'
              },
            ],
          },
          cancel: {
            text: "txt-evt-village-trade-1",
            events: 'evt-village-actions',
          },
        },
      },
      {
        reqStanding: '..-7',
        setFixtureFlags: '+tradeFail',
        text: "txt-evt-village-trade-refuse",
        events: 'evt-village-main-update'
      },
    ],
  },
  {
    id: 'evt-village-recruit',
    reqFixtureFlags: '-recruitFail',
    actionText: "txt-evt-mission-cultist-recruit-action",
    text: "txt-evt-village-recruit",
    showPartyCount: true,
    alwaysShown: true,
    chat: 'cl-village-recruit',
    partyEffects: [
      {
        // Warrior Village
        reqFixtureFlags: '+villageType_1', optional: true,
        showImage: {src: 'evt_fxt_village_1.png', type: 'day'},
      },
      {
        // Scout Village
        reqFixtureFlags: '+villageType_2', optional: true,
        showImage: { src: 'evt_fxt_village_1.png', type: 'day'},
      },
      {
        // Shaman Village
        reqFixtureFlags: '+villageType_3', optional: true,
        showImage: {src: 'evt_fxt_village_3.png', type: 'day'},
      },
      {
        // Beduin Village
        reqFixtureFlags: '+villageType_4', optional: true,
        showImage: {src: 'evt_fxt_village_4.png', type: 'day'},
      },
      {
        // Inuit Village
        reqFixtureFlags: '+villageType_inuit', optional: true,
        events: [
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_village_inuit_1.png', type: 'day', showMounted: true,
              particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
            },
          },
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_village_inuit_1.png', type: 'day', showMounted: true,
            },
          }
        ],
      },
      {
        // Lizard Village
        reqFixtureFlags: '+villageType_lizard', optional: true,
        showImage: {src: 'evt_fxt_village_bones.png', type: 'day'},
      },
    ],
    actions: {
      actionText: "txt-evt-dismiss-default-action-1",
      pushEvent: 'evt-village-main-update',
      events: 'evt-village-setImageDay',
    },
    events: [
      {
        reqStanding: '..1',
        text: "txt-evt-village-recruit-refuse",
      },
      {
        prio:1,
        text: "txt-evt-village-recruit-1",
        setFixtureFlags: '+recruitFail',
        partyEffects: [
          {events: 'evt-village-recruit-select', reqTutorial:false, optional: true},
          {events: 'evt-village-recruit-select', reqTutorial:false, optional: true},
          {events: 'evt-village-recruit-select', reqTutorial:false, optional: true},

          {events: 'evt-village-recruit-warrior', reqTutorial:true, optional: true},
          {events: 'evt-village-recruit-warrior', reqTutorial:true, optional: true},
          {events: 'evt-village-recruit-warrior', reqTutorial:true, optional: true},
        ],
      },
    ],
  },

  {
    id: 'evt-village-recruit-select',
    events: [
      {
        slots:3, 
        events: [
          {ref: 'evt-village-recruit-warrior'},
          {ref: 'evt-village-recruit-scout'},
          {ref: 'evt-village-recruit-shaman'},
          {ref: 'evt-village-recruit-bedouin'},
          {ref: 'evt-village-recruit-lizard-warrior'},
          {ref: 'evt-village-recruit-lizard-shaman'},
        ],
      },
      {ref: 'evt-village-recruit-animalHandler', slots:2},
      {ref: 'evt-village-recruit-donkey'},
      {ref: 'evt-village-recruit-buffalo'},
      {ref: 'evt-village-recruit-camel'},
      {ref: 'evt-village-recruit-parasaurolophus'},
      {ref: 'evt-village-recruit-chasmosaurus'},
    ]
  },

  {
    id: 'evt-village-recruit-warrior',
    reqFixtureFlags: '+tribeWarriors | +tribeInuit',
    npc: 'pl-native-warrior',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-warrior-action",
        text: "txt-evt-village-recruit-warrior",
        report: "txt-evt-village-recruit-warrior-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        chat: 'cl-join-nativeWarrior',
        pushEvent: 'evt-village-main-update',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-setImageDay',
      }
    }
  },
  {
    id: 'evt-village-recruit-scout',
    reqFixtureFlags: '+tribeScouts',
    npc: 'pl-native-scout',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-scout-action",
        text: "txt-evt-village-recruit-scout",
        report: "txt-evt-village-recruit-scout-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        chat: 'cl-join-nativeScout',
        pushEvent: 'evt-village-main-update',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-setImageDay',
      }
    }
  },
  {
    id: 'evt-village-recruit-shaman',
    reqFixtureFlags: '+tribeShamans',
    npc: 'pl-native-shaman',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-shaman-action",
        text: "txt-evt-village-recruit-shaman",
        report: "txt-evt-village-recruit-shaman-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        chat: 'cl-join-nativeShaman',
        pushEvent: 'evt-village-main-update',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-setImageDay',
      }
    }
  },
  {
    id: 'evt-village-recruit-bedouin',
    reqFixtureFlags: '+tribeNomads',
    npc: 'pl-bedouin',
    npcEffects: {
      actions: {
        actionText: "txt-evt-harbor-recruit-bedouin-action",
        text: "txt-evt-village-recruit-bedouin",
        report: "txt-evt-village-recruit-bedouin-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        chat: 'cl-join-bedouin',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-lizard-warrior',
    reqFixtureFlags: '+tribeLizards',
    npc: 'pl-lizard-warrior',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-warrior-action",
        text: "txt-evt-village-recruit-lizard-warrior",
        report: "txt-evt-village-recruit-lizard-warrior-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-lizard-shaman',
    reqFixtureFlags: '+tribeLizards',
    npc: 'pl-lizard-shaman',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-shaman-action",
        text: "txt-evt-village-recruit-lizard-shaman",
        report: "txt-evt-village-recruit-lizard-shaman-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-animalHandler',
    reqFixtureFlags: '+tribeWarriors | +tribeScouts | +tribeShamans',
    charEffects: {count: 'all', reqCharFlags: '-nativeAnimalHandler'},

    npc: 'pl-native-animalHandler',
    npcEffects: {
      actions: { 
        actionText: "txt-evt-village-recruit-animalHandler-action", // Enter proper unit type here!
        text: "txt-evt-village-recruit-animalHandler",
        report: "txt-evt-village-recruit-animalHandler-report",
        addNPC: true,
        setCharFlags: '+homeWorld',
        setStatus: '+homesick',
        chat: 'cl-join-nativeAnimalHandler',
        incAchievement: 'ach-recr-natives',
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-donkey',
    reqFixtureFlags: '+tribeWarriors | +tribeScouts | +tribeShamans',
    // text: "txt-evt-village-recruit-donkey-offer",

    npc: 'anm-donkey',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-donkey-action",
        text: "txt-evt-village-recruit-donkey",
        report: "txt-evt-village-recruit-donkey-report",
        addNPC: true,
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-buffalo',
    reqFixtureFlags: '+tribeWarriors | +tribeScouts | +tribeShamans',
    // text: "txt-evt-village-recruit-buffalo-offer",

    npc: 'anm-waterBuffalo',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-buffalo-action",
        text: "txt-evt-village-recruit-buffalo",
        report: "txt-evt-village-recruit-buffalo-report",
        addNPC: true,
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-camel',
    reqFixtureFlags: '+tribeNomads',
    // text: "txt-evt-village-recruit-camel-offer",

    npc: 'anm-camel',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-camel-action",
        text: "txt-evt-village-recruit-camel-offer",
        report: "txt-evt-village-recruit-camel-report",
        addCharacter: 'anm-camel',
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-parasaurolophus',
    reqFixtureFlags: '+tribeLizards',
    // text: "txt-evt-village-recruit-parasaurolophus-offer",

    npc: 'anm-parasaurolophus',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-parasaurolophus-action",
        text: "txt-evt-village-recruit-parasaurolophus-yes",
        report: "txt-evt-village-recruit-parasaurolophus-yes-report",
        addCharacter: 'anm-parasaurolophus',
        incAchievement: 'ach-recr-dino',
        events: 'evt-village-main-update'
      }
    }
  },
  {
    id: 'evt-village-recruit-chasmosaurus',
    reqFixtureFlags: '+tribeLizards',
    // text: "txt-evt-village-recruit-chasmosaurus-offer",

    npc: 'anm-chasmosaurus',
    npcEffects: {
      actions: {
        actionText: "txt-evt-village-recruit-chasmosaurus-action",
        text: "txt-evt-village-recruit-chasmosaurus",
        report: "txt-evt-village-recruit-chasmosaurus-report",
        addCharacter: 'anm-chasmosaurus',
        incAchievement: 'ach-recr-dino',
        events: 'evt-village-main-update'
      }
    }
  },

  {
    id: 'evt-village-leave',
    actionText: "txt-evt-leave-action",
    alwaysShown: true,
    events: [
      {
        // Escort Villager Quest Shrine reveal
        reqPartyFlags: '+escortVillagerShrineInfo',
        setPartyFlags: '-escortVillagerShrineInfo',
        charEffects: {
          reqCharFlags: '+escortVillager',
          text: "txt-evt-village-leave-escort",
        },
        posTile: {fixtureFlags: '+shrine'},
        revealTiles: {radius:1, centerCam:true},
      },
      {
        prio: 1, // Optional things
        charEffects: [
          {
            optional: true,
            reqCharFlags: '-special +humanoid',
            text: "txt-evt-village-leave"
          },
          {
            optional: true, count: 'all',
            reqCharFlags: '+special | -humanoid',
            text: "txt-evt-village-leave-1"
          },
          {
            optional:true, chance:0.3, 
            reqFixtureFlags: '+idolVillage', 
            reqStatus: '+kleptomania',
            setFixtureFlags: '-idolVillage', 
            setStatus: '+kleptomania-idol'
          },
          {
            optional: true, chance: 0.6, 
            reqStatus: '+racist',
            text: "txt-evt-village-leave-2"
          },
          {
            optional: true, chance: 0.3, 
            reqCharFlags: '+native -slave',
            text: "txt-evt-village-leave-3"
          }
        ],
        partyEffects: [
          {
            optional: true, 
            reqFixtureFlags: '+wedding',
            setFixtureFlags: '-wedding',
            standing: -2,
            text: "txt-evt-village-leave-wedding",
          },
          {
            optional: true, 
            chance: 0.5, 
            reqStanding: '-3..-1', 
            reqPartyStatus: '-followed-natives', 
            setPartyStatus: '+followed-natives',
            text: "txt-evt-village-leave-4",
          },
          {
            optional: true, 
            reqStanding: '-10..-4', 
            reqPartyStatus: '-followed-natives', 
            setPartyStatus: '+followed-natives',
            text: "txt-evt-village-leave-5",
          },
        ],
      },
    ],
  },

// Village Night Events

  {
    id: 'evt-village-nightSelect',  
    events: [
      {prio: -1,  ref: 'evt-village-rest-tutorial'},
      {slots: 1, ref: 'evt-village-rest-alcohol'},
      {slots: 3, ref: 'evt-village-rest-racist'},
      {slots: 3, ref: 'evt-village-rest-paranoid'},
      {slots: 1, ref: 'evt-village-rest-offerEat'},
      {slots: 4, ref: 'evt-village-rest-mummy'},
      {slots: 3, ref: 'evt-village-rest-kleptomania'},
      {slots: 3, ref: 'evt-village-rest-killOffer'},
      {slots: 1, ref: 'evt-village-rest-whisky'},
      {slots: 1, ref: 'evt-village-rest-loveStay'},
      {slots: 1, ref: 'evt-village-rest-animalFeast'},
      {slots: 5, ref: 'evt-village-rest-tiedUnit'},
      {slots: 5, ref: 'evt-village-rest-imaginaryArgument'},
      {slots: 1, ref: 'evt-village-rest-child'},
      {slots: 1, ref: 'evt-village-rest-rash'},
      {slots: 3, ref: 'evt-village-rest-bongoPlayer'},
      {slots: 3, ref: 'evt-village-rest-angryUnit'},
      {slots: 3, ref: 'evt-village-rest-badRumors'},
      {slots: 1, ref: 'evt-village-rest-unlockSpecialWorld'},
      {slots: 9, ref: 'evt-village-rest-positive-gameover'},

      {slots: 1, ref: 'evt-village-rest-wedding'},
      {slots: 1, ref: 'evt-village-rest-maturation'},
      {slots: 1, ref: 'evt-village-rest-funeral'},

      {slots: 2, ref: 'evt-village-rest-flavor-generic'},
      {slots: 1, ref: 'evt-village-rest-flavor-idol'},
      
      {slots: 1, ref: 'evt-village-rest-questionGender'},
      {slots: 1, ref: 'evt-village-rest-questionMankind'},
      {slots: 1, ref: 'evt-village-rest-questionSuperiorLife'},
      {slots: 1, ref: 'evt-village-rest-questionPolygamy'},
    ],
  },
  {
    id: 'evt-village-rest-tutorial',
    reqTutorial: true,
    text: "txt-evt-village-rest-tutorial",
    actions: 'evt-village-sleep'
  },
  {
    id: 'evt-village-rest-flavor-generic',
    text: "txt-evt-village-rest-generic",
    report: "txt-evt-village-rest-generic-report",
    events: 'evt-village-actions-night'
  },
  {
    id: 'evt-village-rest-unlockSpecialWorld',
    text: "txt-evt-village-rest-unlockSpecialWorld",
    report: "txt-evt-village-rest-unlockSpecialWorld-report",
    actions: [
      {
        actionText: "txt-evt-village-rest-unlockSpecialWorld-action",
        barter: {
          baseValue: {base:15},
          close: {
            partyEffects: 'evt-village-actions-night',
            events: 'evt-unlock-specialWorld-withText',
          },
          cancel: {
            text: "txt-evt-village-rest-unlockSpecialWorld-1",
            events: 'evt-village-actions-night',
          },
        },
      },
      {
        actionText: "txt-evt-village-rest-unlockSpecialWorld-action-1",
        text: "txt-evt-village-rest-unlockSpecialWorld-no",
        events: 'evt-village-actions-night',     
      },
    ],
  },
  {
    id: 'evt-village-rest-alcohol',
    chat: 'cl-alcohol',
    text: "txt-evt-village-rest-alcohol",
    report: "txt-evt-village-rest-alcohol-report",
    actions: [
      {
        actionText: "txt-evt-mission-sleep-event-2-accept-action",
        chat: 'cl-alcohol',
        text: "txt-evt-village-rest-alcohol-1",
        report: "txt-evt-village-rest-alcohol-report-1",
        sanity: +10, compassScore: malusAlcohol, standing: +1,
        charEffects: [
          {
            chance: 0.4, 
            optional: true, 
            reqCharFlags: '+humanoid -special',
            reqStatus: {'st-alcoholic': false}, 
            setStatus: {'st-alcoholic': true},
            text: "txt-evt-village-rest-alcohol-2",
            report: "txt-evt-village-rest-alcohol-report-2",
          },
          {
            optional: true, 
            count: 'any', 
            reqStatus: {'pk-sanityDrinking-1':true},
            sanity: +10
          },
        ],
        events: 'evt-village-actions-night'
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        standing: -1,
        text: "txt-evt-village-rest-alcohol-3",
        report: "txt-evt-village-rest-alcohol-report-3",
        events: 'evt-village-actions-night'
      },
    ],
  },
  {
    id: 'evt-village-rest-racist',
      charEffects: {
        reqStatus: '+racist', 
        text: "txt-evt-village-rest-racist",
        report: "txt-evt-village-rest-racist-report",
      },
      standing: -1,
      events: 'evt-village-actions-night'
  },
  {
    id: 'evt-village-rest-paranoid',
    charEffects: {
      reqStatus: {'st-paranoid':true}, 
      text: "txt-evt-village-rest-paranoid",
      report: "txt-evt-village-rest-paranoid-report",
    },
    standing: -1,
    events: [{ref:'evt-village-actions-night'}],   
  },
  {
    id: 'evt-village-rest-compassScore',
    text: "txt-evt-village-rest-compassScore",
    report: "txt-evt-village-rest-compassScore-report",
    compassScore: +5,
    events: [{ref:'evt-village-actions-night'}],       
  },
  {
    id: 'evt-village-rest-offerEat',
    text: "txt-evt-village-rest-offerEat",
    report: "txt-evt-village-rest-offerEat-report",
    charEffects: {
      optional: true,
      reqCharFlags: '+native', 
      text: "txt-evt-village-rest-offerEat-1",
      report: "txt-evt-village-rest-offerEat-report-1",
    },
    actions: [
      {
        actionText: "txt-evt-village-rest-offerEat-action",
        text: "txt-evt-village-rest-offerEat-2",
        report: "txt-evt-village-rest-offerEat-report-2",
        charEffects: {
          optional: true,
          reqCharFlags: '+native', 
          text: "txt-evt-village-rest-offerEat",
        },
        sanity: -20, standing: +1,
        events: [{ref:'evt-village-actions-night'}],
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        standing: -1,
        text: "txt-evt-village-rest-offerEat-3",
        report: "txt-evt-village-rest-offerEat-report-3",
        events: [{ref:'evt-village-actions-night'}],
      },
    ],
  },
  {
    id: 'evt-village-rest-mummy',
    text: "txt-evt-village-rest-mummy",
    report: "txt-evt-village-rest-mummy-report",
    reqItems: {'it-mummy':1},
    standing: -1,
    actions: [
      {
        actionText: "txt-evt-village-rest-mummy-action",
        text: "txt-evt-village-rest-mummy-1",
        report: "txt-evt-village-rest-mummy-report-1",
        items: {'it-mummy':-1},
        events: [{ref:'evt-village-actions-night'}],
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        standing: -3,
        text: "txt-evt-village-rest-mummy-2",
        report: "txt-evt-village-rest-mummy-report-2",
        events: [{ref:'evt-village-actions-night'}],
      },
    ],
  },
  {
    id: 'evt-village-rest-killOffer',
    charEffects: [
      {
        optional:false, reqStatus: [{'st-paranoid':true}, {'st-racist':true}], 
        text: "txt-evt-village-rest-killOffer",
        report: "txt-evt-village-rest-killOffer-report",
        actions: [
          {
            actionText: "txt-evt-village-rest-killOffer-action",
            text: "txt-evt-village-rest-killOffer-1",
            report: "txt-evt-village-rest-killOffer-report-1",
            removeCharacter: true,
            standing: +2,
            events: 'evt-village-actions-night'
          },
          {
            actionText: "txt-evt-village-rest-unlockSpecialWorld-action-1",
            text: "txt-evt-village-rest-killOffer-2",
            report: "txt-evt-village-rest-killOffer-report-2",
            events: 'evt-village-actions-night'
          },
        ], 
      },    
    ],   
  },
  {
    id: 'evt-village-rest-questionMankind',
    text: "txt-evt-village-rest-questionMankind",
    report: "txt-evt-village-rest-questionMankind-report",
    chat: 'cl-villageReligion',
    actions: [
      {
        actionText: "txt-evt-village-rest-questionMankind-action",
        text: "txt-evt-village-rest-questionMankind-1",
        report: "txt-evt-village-rest-questionMankind-report-1",
        events: 'evt-village-actions-night',
      },
      {
        actionText: "txt-evt-village-rest-questionMankind-action-1",
        charEffects: {optional:true, count:'any', loyalty:-1, reqCharFlags:'+missionary'},
        text: "txt-evt-village-rest-questionMankind-2",
        report: "txt-evt-village-rest-questionMankind-report-2",
        events: 'evt-village-actions-night'
      },
      {
        actionText: "txt-evt-village-rest-questionMankind-action-2",
        charEffects: {optional:true, chance:0.5, count:'any', loyalty:-1, reqCharFlags:'+missionary'},
        text: "txt-evt-village-rest-questionMankind-3",
        report: "txt-evt-village-rest-questionMankind-report-3",
        events: 'evt-village-actions-night'
      }
    ]   
  },
  {
    id: 'evt-village-rest-whisky',
    text: "txt-evt-village-rest-whisky",
    report: "txt-evt-village-rest-whisky-report",
    reqItems: {'it-whisky':1},
    actions: [
      {
        actionText: "txt-evt-village-rest-whisky-action",
        text: "txt-evt-village-rest-whisky-1",
        report: "txt-evt-village-rest-whisky-report-1",
        items: {'it-whisky':-1},
        standing: +1,
        events: [{ref:'evt-village-actions-night'}],
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-village-rest-whisky-2",
        report: "txt-evt-village-rest-whisky-report-2",
        events: [{ref:'evt-village-actions-night'}],
      },
    ],    
  },
  {
    id: 'evt-village-rest-loveStay',
    charEffects: {
      reqCharFlags: '-special +humanoid',
      reqStatus: '-racist',
      text: "txt-evt-village-rest-loveStay",
      actions: ['evt-village-rest-loveStay-yes', 'evt-village-rest-loveStay-no']
    }
  }, 
  {
    id: 'evt-village-rest-loveStay-yes',
    actionText: "txt-evt-village-rest-loveStay-yes-action",
    text: "txt-evt-village-rest-loveStay-yes",
    report: "txt-evt-village-rest-loveStay-report",
    removeCharacter: true,
    standing: +4,
    charEffects: {
      reqStatus: '+racist',
      optional: true,
      text: "txt-evt-village-rest-loveStay-yes-racist"
    },
    events: 'evt-village-actions-night'
  },
  {
    id: 'evt-village-rest-loveStay-no',
    actionText: "txt-evt-village-enter-slave-action-1",
    loyalty: -2,
    text: "txt-evt-village-rest-loveStay-no",
    events: 'evt-village-actions-night'
  },
  {
    id: 'evt-village-rest-animalFeast',
    text: "txt-evt-village-rest-animalFeast",
    charEffects: {
      reqCharFlags: '-humanoid -imaginary', 
      count:'any',
      actions: {
        actionText: "txt-evt-village-rest-animalFeast-action",
        text: "txt-evt-village-rest-animalFeast-yes",
        report: "txt-evt-village-rest-animalFeast-report",
        storeCharacter: true,
        standing: +5,
        events: 'evt-village-actions-night'
      },
    },
    actions: {
      actionText: "txt-pl-cultist-action",
      text: "txt-evt-village-rest-animalFeast-no",
      events: 'evt-village-actions-night'
    }
  },
  {
    id: 'evt-village-rest-questionSuperiorLife',
    text: "txt-evt-village-rest-questionSuperiorLife",
    chat: 'cl-villageHuizinga',
    actions: [
      {
        actionText: "txt-evt-village-rest-questionSuperiorLife-action",
        text: "txt-evt-village-rest-questionSuperiorLife-1",
        standing: -2,
        charEffects: {
          count: 1,
          optional: true,
          reqStatus: {'st-homesick':true},
          loyalty: +1,
        },
        events: 'evt-village-actions-night',
      },
      {
        actionText: "txt-evt-village-rest-questionSuperiorLife-action-1",
        text: "txt-evt-village-rest-questionSuperiorLife-2",
        standing: +2,
        events: 'evt-village-actions-night',
      },
      {
        actionText: "txt-evt-village-rest-questionMankind-action-2",
        text: "txt-evt-village-rest-questionSuperiorLife-3",
        events: 'evt-village-actions-night',
      }
    ]   
  },
  {
    id: 'evt-village-rest-tiedUnit',
    storeEffects: {
      reqCharFlags: '-native +humanoid -dead',
      reqAge: '20..',
      text: "txt-evt-village-rest-tiedUnit",
      report: "txt-evt-village-rest-tiedUnit-report",
      actions: [
        {
          actionText: "txt-evt-village-rest-tiedUnit-action",
          text: "txt-evt-village-rest-tiedUnit-barter",
          barter: {
            baseValue: 50,
            close: {
              text: "txt-evt-village-rest-tiedUnit-1",
              report: "txt-evt-village-rest-tiedUnit-report-1",
              restoreCharacter: true,
              events: 'evt-village-actions-night'
            },
            cancel: {
              actionText: "txt-st-kleptomania-idol-action-1",
              text: "txt-evt-village-rest-tiedUnit-2",
              report: "txt-evt-village-rest-tiedUnit-report-2",
              unstoreCharacter: true,
              events: 'evt-village-actions-night'
            },
          },
        },
        {
          actionText: "txt-st-kleptomania-idol-action-1",
          text: "txt-evt-village-rest-tiedUnit-3",
          report: "txt-evt-village-rest-tiedUnit-report-3",
          unstoreCharacter: true,
          events: 'evt-village-actions-night'
        }
      ]
    }
  },
  {
    id: 'evt-village-rest-imaginaryArgument',
    charEffects: {
      reqCharFlags: '+imaginary',
      text: "txt-evt-village-rest-imaginaryArgument",
      standing: -3,
      events: 'evt-village-actions-night',
    }
  },
  {
    id: 'evt-village-rest-questionPolygamy',
    events: [
      {
        charEffects: {
          reqCharFlags: '+special', reqGender: 'male'
        },
        text: "txt-evt-village-rest-questionPolygamy",
        actions: [
          {
            actionText: "txt-evt-village-rest-questionPolygamy-action",
            text: "txt-evt-village-rest-questionPolygamy-1",
            events: 'evt-village-actions-night',
          },
          {
            actionText: "txt-evt-village-rest-questionPolygamy-action-1",
            text: "txt-evt-village-rest-questionPolygamy-2",
            events: 'evt-village-actions-night',
          },
        ]  
      },
      {
        charEffects: {
          reqCharFlags: '+special', reqGender: 'female'
        },
        text: "txt-evt-village-rest-questionPolygamy-3",
        actions: [
          {
            actionText: "txt-evt-village-rest-questionPolygamy-action-2",
            text: "txt-evt-village-rest-questionPolygamy-4",
            events: 'evt-village-actions-night'
          },
          {
            actionText: "txt-evt-village-rest-questionPolygamy-action-3",
            text: "txt-evt-village-rest-questionPolygamy-5",
            events: 'evt-village-actions-night'
          },
        ],  
      },
    ],  
  },
  {
    id: 'evt-village-rest-child',
    reqFreePartyCount:'1..',
    charEffects: {
      reqCharFlags: '+humanoid -special', reqStatus: '-racist',
      setCharFlags: '+lover',
      events: [
        {
          setPartyFlags: '+loverM',
          text:"txt-evt-village-rest-childM",
        },
        {
          setPartyFlags: '+loverF',
          text:"txt-evt-village-rest-childF",
        }
      ]
    },
    actions: [
      'evt-village-rest-child-yes', 
      'evt-village-rest-child-no'
    ]
  },
  {
    id: 'evt-village-rest-child-yes',
    actionText: "txt-evt-village-rest-child-yes-action",
    text: "txt-evt-village-rest-child-yes",
    events: [
      'evt-village-rest-child-success',
      'evt-village-rest-child-failure'
    ]
  },
  {
    id: 'evt-village-rest-child-no',
    actionText: "txt-evt-angry-demandPayment-action-1",
    charEffects: {
      reqCharFlags: '+lover',
      setCharFlags: '-lover',
      loyalty: -2,
      text: "txt-evt-village-rest-child-no",
    },
    events: 'evt-village-actions-night'
  },
  {
    id: 'evt-village-rest-child-success',
    text: "txt-evt-village-rest-child-success",
    partyEffects: [
      {
        events: [
          {
            charEffects: {reqCharFlags: '-nativeScout', count: 'all'},
            events: [
              {
                reqPartyFlags:'+loverM', 
                addCharacter: {id:'pl-native-scout', gender:'male'},
              },
              {
                reqPartyFlags:'+loverF', 
                addCharacter: {id:'pl-native-scout', gender:'female'},
              }
            ],
          },
          {
            charEffects: {reqCharFlags: '-nativeShaman', count: 'all'},
            events: [
              {
                reqPartyFlags:'+loverM', 
                addCharacter: {id:'pl-native-shaman', gender:'male'},
              },
              {
                reqPartyFlags:'+loverF', 
                addCharacter: {id:'pl-native-shaman', gender:'female'},
              }
            ],
          },
          {
            charEffects: {reqCharFlags: '-nativeWarrior', count: 'all'},
            events: [
              {
                reqPartyFlags:'+loverM', 
                addCharacter: {id:'pl-native-warrior', gender:'male'},
              },
              {
                reqPartyFlags:'+loverF', 
                addCharacter: {id:'pl-native-warrior', gender:'female'},
              }
            ],
          },
          {
            charEffects: {reqCharFlags: '-nativeAnimalHandler', count: 'all'},
            events: [
              {
                reqPartyFlags:'+loverM', 
                addCharacter: {id:'pl-native-animalHandler', gender:'male'},
              },
              {
                reqPartyFlags:'+loverF', 
                addCharacter: {id:'pl-native-animalHandler', gender:'female'},
              }
            ],
          }
        ] 
      },
      {
        setPartyFlags: '-loverM -loverF'
      },
      'evt-village-replaceAngry'
    ]
  },
  {
    id: 'evt-village-rest-child-failure',
    charEffects: {
      reqCharFlags: '+lover',
      text: "txt-evt-village-rest-child-failure",
      standing: standingCostSacrilegLarge,
      actions: [
        {
          actionText: "txt-act-barter-action",
          text: "txt-evt-village-rest-child-failure-barter",
          barter: {
            baseValue: {base:50},
            close: {
              text: "txt-evt-village-rest-child-failure-1",
              report: "txt-evt-village-rest-child-failure-report",
              events: 'evt-village-actions-night',
            },
            cancel: {
              actionText: "txt-st-kleptomania-idol-action-1",
              text: "txt-evt-village-rest-child-failure-2",
              report: "txt-evt-village-rest-child-failure-report-1",
              removeCharacter: true,
              events: 'evt-village-actions-night',
            },
          },
        },
        {
          actionText: "txt-st-kleptomania-idol-action-1",
          text: "txt-evt-village-rest-child-failure-3",
          report: "txt-evt-village-rest-child-failure-report-2",
          removeCharacter: true,
          events: 'evt-village-actions-night',
        },
      ]
    },
  },
  {
    id: 'evt-village-rest-angryUnit',
    charEffects:{
      reqStatus: {'st-angry':true},
      text: "txt-evt-village-rest-angryUnit",
      actions: [
        {
          actionText: "txt-evt-village-rest-angryUnit-action",
          text: "txt-evt-village-rest-angryUnit-1",
          events: [
            {
              text: "txt-evt-village-rest-angryUnit-2",
              removeCharacter: true,
              events: 'evt-village-actions-night',
            },
            {
              text: "txt-evt-village-rest-angryUnit-3",
              loyalty: +1,
              events: 'evt-village-actions-night',
            },
          ],
        },
        {
          actionText: "txt-evt-village-rest-angryUnit-action-1",
          text: "txt-evt-village-rest-angryUnit-4",
          events: 'evt-village-actions-night'
        },
      ],
    },
  }, 
  {
    id: 'evt-village-rest-badRumors',
    charEffects: {
      reqCharFlags: '+special',
      text: "txt-evt-village-rest-badRumors"
    },
    storeEffects: {
      reqLoyalty: '0',
      text: "txt-evt-village-rest-badRumors-1"
    },
    events: 'evt-village-actions-night'
  }, 
  {
    id: 'evt-village-rest-rash',
    text: "txt-evt-village-rest-rash",  
    actions: [
      {
        actionText: "txt-evt-village-rest-rash-action",
        text: "txt-evt-village-rest-rash-1",
        standing: +1,
        charEffects: {
          chance: 0.5,
          setPartyStatus: '+jungleFever'
        },
        events: 'evt-village-actions-night',
      },
      {
        actionText: "txt-evt-village-rest-rash-action-1",
        text: "txt-evt-village-rest-rash-2",
        standing: -1,
        events: 'evt-village-actions-night',
      },
    ],
  },
  {
    id: 'evt-village-rest-questionGender',
    text: "txt-evt-village-rest-questionGender",
    report: "txt-evt-village-rest-questionGender-report",
    actions: [
      {
        charEffects: {
          optional:true, count:'any',  
          reqCharFlags:'+humanoid -special', reqGender:'male', 
          loyalty: -1
        },
        actionText: "txt-evt-village-rest-questionGender-action",
        text: "txt-evt-village-rest-questionGender-1",
        report: "txt-evt-village-rest-questionGender-report-1",
        events: 'evt-village-actions-night'
      },
      {
        charEffects: {
          optional:true, count:'any',
          reqCharFlags:'+humanoid -special', reqGender:'female', 
          loyalty:-1
        },
        actionText: "txt-evt-village-rest-questionGender-action-1",
        text: "txt-evt-village-rest-questionGender-2",
        report: "txt-evt-village-rest-questionGender-report-2",
        events: 'evt-village-actions-night'
      },
      {
        charEffects: {
          optional:true, count:'any', 
          reqStatus:'+sexist', loyalty:-1
        },
        actionText: "txt-evt-village-rest-questionGender-action-2",
        text: "txt-evt-village-rest-questionGender-3",
        report: "txt-evt-village-rest-questionGender-report-3",
        events: 'evt-village-actions-night'
      }
    ]   
  },
  {
    id: 'evt-village-rest-bongoPlayer',
    reqItems: {'it-bongos':1},
    text: "txt-evt-village-rest-bongoPlayer",
    actions:[
      {
        actionText: "txt-evt-village-rest-bongoPlayer-action",
        text: "txt-evt-village-rest-bongoPlayer-1",
        events:  [
          {
            text: "txt-evt-village-rest-bongoPlayer-2",
            items: {'it-bongos':-1},
            events: 'evt-village-actions-night'
          },
          {
            slots: 2,
            text: "txt-evt-village-rest-bongoPlayer-3",
            items: {'it-bongos':-1, 'it-bongosTuned':1},
            events: 'evt-village-actions-night'
          },
        ],
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        standing: standingCostSacrilegSmall,
        text: "txt-evt-village-rest-bongoPlayer-4",
        events: 'evt-village-actions-night'
      },
    ],
  },
  {
    id: 'evt-village-rest-positive-gameover',
    reqStanding: '8..', reqWorld: '3..', reqDifficulty: '1..',
    text: "txt-evt-village-rest-positive-gameover",
    report: "txt-evt-village-rest-positive-gameover-report",
    actions: [
      {
        actionText: "txt-evt-village-rest-positive-gameover-action",
        text: "txt-evt-village-rest-positive-gameover-1",
        actions:  [
          {
            actionText: "txt-evt-village-rest-positive-gameover-action",
            text: "txt-evt-village-rest-positive-gameover-2",
            charEffects: {
              reqCharFlags: '+special',
              text: "txt-evt-village-rest-positive-gameover-3",  
            },            
            unlockCharacter: 'sp-fortune',
            actions: {gameOver: "The End"}
          },
          'evt-village-rest-positive-gameover-cancel',
        ]  
      },
      'evt-village-rest-positive-gameover-cancel'
    ],
  },
  {
    id: 'evt-village-rest-positive-gameover-cancel',
    actionText: "txt-evt-village-rest-positive-gameover-cancel-action",
    text: "txt-evt-village-rest-positive-gameover-cancel",
    events: 'evt-village-actions-night'
  },

  {
    id: 'evt-village-rest-wedding',
    reqMaxPerWorld: 1,
    text: "txt-evt-village-rest-wedding",
    setFixtureFlags: '+wedding',
    partyEffects: {
      events: [
        { text: "txt-evt-village-rest-wedding-var1" },
        { text: "txt-evt-village-rest-wedding-var2" },
        { text: "txt-evt-village-rest-wedding-var3" },
      ]
    },
    events: 'evt-village-actions-night'
  },

  {
    id: 'evt-village-rest-funeral-bless',
    actionText: "txt-evt-village-rest-funeral-bless-action",
    reqDice: 'mind',
    winEvents: {
      text: "txt-evt-village-rest-funeral-missionary-bless-success",
      standing: +2,
      events: 'evt-village-actions-night'
    },
    failEvents: {
      text: "txt-evt-village-rest-funeral-missionary-bless-fail",
      standing: -2,
      events: 'evt-village-actions-night'
    }
  },
  {
    id: 'evt-village-rest-funeral-noBless',
    actionText: "txt-evt-village-rest-funeral-noBless-action",
    text: "txt-evt-village-rest-funeral-missionary-noBless",
    loyalty: -1,
    events: 'evt-village-actions-night'
  },

  {
    id: 'evt-village-rest-funeral',
    text: "txt-evt-village-rest-funeral",
    events: [
      {
        reqCharFlags: '+missionary',
        text: "txt-evt-village-rest-funeral-missionary",
        actions: ['evt-village-rest-funeral-bless', 'evt-village-rest-funeral-noBless']
      },
      {
        prio: 1, ref: 'evt-village-actions-night'
      }
    ]
  },
  {
    id: 'evt-village-rest-maturation',
    reqMaxPerWorld: 1,
    reqFixtureFlags: '-wedding',
    text: "txt-evt-village-rest-maturation",
    partyEffects: [
      { 
        optional: true, 
        text: "txt-evt-village-rest-maturation-var1",
        reqBiomeFlags: '-desert -jungle'
      },
      { 
        optional: true, 
        text: "txt-evt-village-rest-maturation-varDesert",
        reqBiomeFlags: '+desert' 
      },
      { 
        optional: true, 
        text: "txt-evt-village-rest-maturation-varJungle",
        reqBiomeFlags: '+jungle' 
      },
      { 
        optional: true, 
        text: "txt-evt-village-rest-maturation-2" 
      }
    ],
    charEffects: {
      reqCharFlags: '+special',
      actions: {
        actionText: "txt-evt-village-rest-maturation-yes-action",
        reqDice: 'agility | stability',
        winEvents: {
          id: 'evt-village-rest-maturation-win',
          text: "txt-evt-village-rest-maturation-win",
          standing: +2,
          events: 'evt-village-actions-night'
        },
        failEvents: {
          id: 'evt-village-rest-maturation-fail',
          text: "txt-evt-village-rest-maturation-fail",
          standing: -2,
          events: 'evt-village-actions-night'
        }  
      }
    },
    actions: {
      id: 'evt-village-rest-maturation-no',
      actionText: "txt-evt-village-rest-maturation-no-action",
      text: "txt-evt-village-rest-maturation-no",
      standing: -1,
      events: 'evt-village-actions-night'
    }
  },
  {
    id: 'evt-village-rest-flavor-idol',
    reqFixtureFlags: '+idolVillage',
    reqMaxPerWorld: 1,
    text: "txt-evt-village-rest-flavor-idol",
    events: 'evt-village-actions-night'
  },

  {
    id: 'evt-village-stealIdol',
    reqFixtureFlags: '+idolVillage', 
    reqDice: 'stability',
    actionText: "txt-evt-village-stealIdol-action",
    items: {'it-idol':1},
    winEvents: {
      id: 'evt-village-stealIdol-win',
      standing: standingCostSacrilegSmall,
      setFixtureFlags: '-idolVillage +idolVillageCombat',
      text: "txt-evt-village-stealIdol-success",
      report: "txt-evt-village-stealIdol-success-report",
    },
    failEvents: {
      id: 'evt-village-stealIdol-fail',
      standing: standingCostSacrilegLarge,
      text: "txt-evt-village-stealIdol-fail",
      events: 'evt-village-replaceAngry'
    }
  },  

  // --------------

  {
    id: 'evt-village-actions-night-anthropology',
    actionText: "txt-evt-village-actions-night-anthropology-action",
    text: "txt-evt-village-actions-night-anthropology",
    charEffects: {reqStatus: {'pk-anthropology':true}},
    reqTileFlags: '-anthropology',
    setTileFlags: '+anthropology',
    report: "txt-evt-village-actions-night-anthropology-report",
    items: {'it-anthropologicalStudies':+1},
    incAchievement: "ach-studies-collect",
    events: [
      {
        slots: 3,
        text: "txt-evt-village-actions-night-anthropology-1",
        events: 'evt-village-actions-night'
      },
      {
        slots: 1,
        text: "txt-evt-village-actions-night-anthropology-2",
        events: 'evt-village-actions-night'
      },
    ], 
  },
  {
    id: 'evt-village-actions-night-painting',
    actionText: "txt-evt-village-actions-night-painting-action",
    reqFixtureFlags: '-painting',
    setFixtureFlags: '+painting',
    pushEvent: 'evt-village-actions-night',
    charEffects: [
      {
        reqCharFlags: {artist:true}, count:1,
        reqItems: {'it-canvas':1},
      },
      {
        optional: true,
        reqCharFlags: {artist:true}, count:1,
        reqStatus: {'st-angry':false},
        text: "txt-evt-village-actions-night-painting",
        events: [
          {
            slots: 1,
            reqStanding: [-5, 10], 
            text: "txt-evt-village-actions-night-painting-1",
            report: "txt-evt-village-actions-night-painting-report",
            setTempFlags: {paintingNative:true},
            events: 'evt-painting-create',
          },
          {
            slots: 3,
            reqStanding: [-10, -3], 
            text: "txt-evt-village-actions-night-painting-2",
            report: "txt-evt-village-actions-night-painting-report-1",
            items: {'it-canvas':-1},
            setTempFlags: {paintingNative:true},
          },
        ],
      },
      {
        optional:true,
        reqCharFlags: {artist:true}, count:1,
        reqStatus: {'st-angry':true},
        events: 'evt-painting-angry',
      },
    ],
  },
  {
    id: 'evt-village-setImageDay',
    
    partyEffects: [
      {
        // Warrior Village
        reqFixtureFlags: '+villageType_1', optional: true,
        showImage: {src: 'evt_fxt_village_1.png', type: 'day'},
        playMusic: 'thm_village_2',
      },
      {
        reqFixtureFlags: '+villageType_1 +inhabited', optional: true,
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ]
      },
      {
        // Scout Village
        reqFixtureFlags: '+villageType_2', optional: true,
        showImage: { src: 'evt_fxt_village_1.png', type: 'day'},
        playMusic: 'thm_village_2',
      },
      {
        reqFixtureFlags: '+villageType_2 +inhabited', optional: true,
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Shaman Village
        reqFixtureFlags: '+villageType_3', optional: true,
        showImage: {src: 'evt_fxt_village_3.png', type: 'day'},
        playMusic: 'thm_village_2',
      },
      {
        reqFixtureFlags: '+villageType_3 +inhabited', optional: true,
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Beduin Village
        reqFixtureFlags: '+villageType_4', optional: true,
        showImage: {src: 'evt_fxt_village_4.png', type: 'day'},
        playMusic: 'thm_village_2',
      }, 
      {
        reqFixtureFlags: '+villageType_4 +inhabited', optional: true,
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Inuit Village
        reqFixtureFlags: '+villageType_inuit', optional: true,
        playMusic: 'thm_arctic_village_1',
        events: [
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_village_inuit_1.png', type: 'day', showMounted: true,
              particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
            },
          },
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_village_inuit_1.png', type: 'day', showMounted: true,
            },
          }
        ],
      },
      {
        reqFixtureFlags: '+villageType_inuit +inhabited', optional: true,
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Lizard Village
        reqFixtureFlags: '+villageType_lizard', optional: true,
        showImage: {src: 'evt_fxt_village_bones.png', type: 'day'}
      },
      {
        reqFixtureFlags: '+villageType_lizard +inhabited', optional: true,
        npc: [
          'npc-village-lizard-generic',
          'npc-village-lizard-generic',
          'npc-village-lizard-generic',
          'npc-village-lizard-generic',
          'npc-village-lizard-generic',
          'npc-village-lizard-chief',
          'npc-village-lizard-generic',
        ],
      },
    ],
    popEvent: true,
  },
  {
    id: 'evt-village-setImageNight',
    partyEffects: [
      {
        // Warrior Village
        optional: true,
        reqFixtureFlags: '+villageType_1',
        playMusic: 'thm_village_3',
        showImage: {
          src:'evt_fxt_village_1_night.png', 
          type:'night',
          showMounted:false
        },
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Scout Village
        optional: true,
        reqFixtureFlags: '+villageType_2',
        playMusic: 'thm_village_3',
        showImage: { 
          src:'evt_fxt_village_1_night.png', 
          type:'night',
          showMounted:false
        },
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Shaman Village
        optional: true,
        reqFixtureFlags: '+villageType_3',
        playMusic: 'thm_village_3',
        showImage: {
          src:'evt_fxt_village_3_night.png', 
          type:'night',
          showMounted:false
        },
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Beduin Village
        optional: true,
        reqFixtureFlags: '+villageType_4',
        playMusic: 'thm_village_3',
        showImage: {
          src:'evt_fxt_village_4_night.png', 
          type:'night',
          showMounted:false
        },
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Inuit Village
        optional: true,
        reqFixtureFlags: '+villageType_inuit',
        playMusic: 'thm_arctic_night_1', 
        events: [
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_village_inuit_1_night.png', type: 'night', showMounted: false,
              particles: ['pt-snow-1', 'pt-snow-2'],
            },
          },
          {
            slots:1,
            showImage: {
              src: 'evt_fxt_village_inuit_1_night.png', type: 'night', showMounted: false,
            },
          }
        ],
        npc: [
          'npc-native-generic-chief',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
          'npc-native-generic',
        ],
      },
      {
        // Lizard Village
        optional: true,
        reqFixtureFlags: '+villageType_lizard', 
        showImage: {
          src: 'evt_fxt_village_bones_night.png',
          type: 'night', 
          showMounted:false
        },
        npc: [
          'npc-village-lizard-generic',
          'npc-village-lizard-generic',
          'npc-village-lizard-chief',
          'npc-village-lizard-generic',
        ],
      },
    ],
  },
  // ---- Replace with angry village
  {
    id: 'evt-village-replaceAngry',
    setFixtureFlags: '+angry',
    setFixtureParticle: 'pt-village-2-angry',
  },
  {
    id: 'evt-village-abandoned',
    actionText: "txt-evt-village-abandoned-action",
    reqTileFlags: '-explored',
    text: "txt-evt-village-abandoned",
    partyEffects: [
      {
        reqFixtureFlags: '+villageType_1', optional: true,
        showImage: { 
          src: 'evt_fxt_village_1.png',
          type: 'day',
        },
      },
      {
        reqFixtureFlags: '+villageType_2', optional: true,
        showImage: { 
          src: 'evt_fxt_village_1.png',
          type: 'day',
        },
      },
      {
        reqFixtureFlags: '+villageType_3', optional: true,
        showImage: { 
          src: 'evt_fxt_village_3.png',
          type: 'day',
        },
      },
      {
        reqFixtureFlags: '+villageType_4', optional: true,
        showImage: { 
          src: 'evt_fxt_village_4.png',
          type: 'day',
        },
      },
    ],
    actions: [
      {
        actionText: "txt-act-loot-action",
        text: "txt-evt-village-abandoned-loot",
        loot: {
          items: {'il-trade-village':2},
          close: 'evt-village-abandoned-leave',
          cancel: 'evt-village-abandoned-leave',
        },
      },
      {
        actionText: "txt-evt-leave-action",
        events: 'evt-village-abandoned-leave',
      },
    ],
  },
  {
    id: 'evt-village-abandoned-leave',
    setTileFlags: {explored:true},
    text: "txt-evt-village-abandoned-leave",
    actionText: "txt-evt-village-abandoned-leave-action",
  },

  // --- Quests

  {
    id: 'evt-village-quest-missionary',
    actionText: "txt-evt-village-quest-missionary-action",
    reqPartyStatus: '+missionary',
    setPartyStatus: '-missionary',
    reqFixtureFlags: '+questMissionary',
    setFixtureFlags: '-questMissionary',
    charEffects: {
      reqCharFlags: '+missionary',
      text: "txt-evt-village-quest-missionary",
      posTile: {fixtureFlags: '+shrine'},
      removeCharacter: true,
      revealTiles: {radius:1, centerCam:true},
    },
    report: "txt-evt-village-quest-missionary-report",
    standing: +2,
    events: 'evt-village-main-update',
  },
  {
    id: 'evt-village-enter-konrad',
    text: "txt-evt-village-enter-konrad",
    npc: 'emy-konrad',
    actions: [
      'evt-village-quest-konrad',
      'evt-village-leave',
    ],
  },
  {
    id: 'evt-village-quest-konrad',
    actionText: "txt-evt-village-quest-konrad-action",
    text: "txt-evt-village-quest-konrad",
    report: "txt-evt-village-quest-konrad-report",
    actions: [
      {
        actionText: "txt-evt-cave-ghostsQuest-action",
        partyEffects: [
          {
            reqFixtureFlags: '+villageType_1', optional: true,
            showImage: {src: 'evt_fxt_village_1.png', type: 'day'},
          },
          {
            reqFixtureFlags: '+villageType_2', optional: true,
            showImage: {src: 'evt_fxt_village_1.png', type: 'day'},
          },
          {
            reqFixtureFlags: '+villageType_3', optional: true,
            showImage: {src: 'evt_fxt_village_3.png', type: 'day'},
          },
          {
            reqFixtureFlags: '+villageType_4', optional: true,
            showImage: {src: 'evt_fxt_village_4.png', type: 'day'},
          },
          {
            reqFixtureFlags: '+villageType_lizard', optional: true,
            showImage: {src: 'evt_fxt_village_bones.png', type: 'day'},
          }
        ],
        combat: [{'emy-konrad':1}],
      },
      {
        actionText: "txt-evt-leave-action",
      }
    ],
  },
  {
    id: 'evt-village-quest-konrad-loot',
    setFixtureFlags: '-harborQuestKonrad', 
    loot: {
      items: {'it-quest-5-decoration':1},
      close: 'evt-village-quest-konrad-success',
      cancel: 'evt-village-quest-konrad-success',    
    },
  },
  {
    id: 'evt-village-quest-konrad-success',
    setTileFlags: {harborQuestKonrad:false},
    text: "txt-evt-village-quest-konrad-success",
    report: "txt-evt-village-quest-konrad-success-report",
    standing: +2,
    pushEvent: 'evt-village-actions',
    events: 'evt-village-setImageDay',
  },

  {
    id: 'evt-village-familyAmulet',
    reqTileFlags: {familyAmulet:true},
    setTile: {familyAmulet:false},
    reqItems: {'it-familyAmulet':1},
    actionText: "txt-evt-village-familyAmulet-action",
    text: "txt-evt-village-familyAmulet",
    items: {'it-familyAmulet':-1},
    standing: +2,
    events: 'evt-village-main-update'
  },

  // for legacy save game purposes

  {
    id: 'fxt-village-1-angry',
    extends: 'fxt-village-1'
  },
  {
    id: 'fxt-village-2-angry',
    extends: 'fxt-village-2',
  },
  {
    id: 'fxt-village-3-angry',
    extends: 'fxt-village-3',
  },
  {
    id: 'fxt-village-4-angry',
    extends: 'fxt-village-4',
  },
  {
    id: 'fxt-village-bones-angry',
    extends: 'fxt-village-bones',
  }
])
