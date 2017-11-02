config.entities.add([

// items

  {
    id: 'it-map-treasure',
    name: "txt-it-map-treasure-name",
    description: "txt-it-map-treasure",
    debugCategory: 'map',
    sprite: 'it_special_map_1.png',
    resellFactor: 0.2,
    value: 20,
    maxStack: 1,
    autoRemove: true,
    noWeight: true,
    miniMap: {
      width: 150, height: 150, coverage: 1, 
      initEvents: {
        addFixture: {ref:'fxt-treasure', range:'world', animate:false}
      }
    },
  },
  {
    id: 'it-shovel',
    name: "txt-it-shovel-name",
    description: "txt-it-shovel",
    sprite: 'it_utility_shovel_1.png',
    debugCategory: 'utility',
    value: {
      base: 5,
      karma: 1,
    },
    maxStack: 5,
    events: {
      items: {'it-shovel':-1},
      events: 'evt-treasure-dig',
    },
  },

  // high value

  {
    id: 'it-treasure-highValue',
    debugCategory: 'treasure',
    isAbstract: true,
    value: {
      base: 50,
      village: 40,
      karma: karmaLarge,
    },
    maxStack: 1,
    fame: fameVeryLarge,
    funds: fundsLarge,
  },
  {
    id: 'it-treasure-slokra',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-slokra-name",
    description: "txt-it-treasure-slokra",
    sprite: 'it_treasure_slokra_1.png',
  },
  {
    id: 'it-treasure-beauty',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-beauty-name",
    description: "txt-it-treasure-beauty",
    sprite: 'it_treasure_beauty_1.png',
  },
  {
    id: 'it-treasure-mask',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-mask-name",
    description: "txt-it-treasure-mask",
    sprite: 'it_treasure_mask_1.png',
  },
  {
    id: 'it-treasure-bowl',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-bowl-name",
    description: "txt-it-treasure-bowl",
    sprite: 'it_treasure_bowl_1.png',
  },
  {
    id: 'it-treasure-skull',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-skull-name",
    description: "txt-it-treasure-skull",
    sprite: 'it_treasure_skull_1.png',
  },
  {
    id: 'it-treasure-dagger',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-dagger-name",
    description: "txt-it-treasure-dagger",
    sprite: 'it_treasure_dagger_1.png',
  },
  {
    id: 'it-treasure-owl',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-owl-name",
    description: "txt-it-treasure-owl",
    sprite: 'it_treasure_owl_1.png',
  },
  {
    id: 'it-treasure-eagle',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-eagle-name",
    description: "txt-it-treasure-eagle",
    sprite: 'it_treasure_eagle_1.png',
  },
  {
    id: 'it-treasure-statue',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-statue-name",
    description: "txt-it-treasure-statue",
    sprite: 'it_treasure_statue_1.png',
  },
  {
    id: 'it-treasure-plate',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-plate-name",
    description: "txt-it-treasure-plate",
    sprite: 'it_treasure_plate_1.png',
  },
  {
    id: 'it-treasure-amulet',
    extends: 'it-treasure-highValue',
    name: "txt-it-treasure-amulet-name",
    description: "txt-it-treasure-amulet",
    sprite: 'it_treasure_amulet_1.png',
  },
  {
    id: 'it-treasure-eggplant',
    extends: 'it-treasure-highValue',
    reqWorld: '0',
    debugCategory: 'treasure',
    name: "txt-it-treasure-eggplant-name",
    description: "txt-it-treasure-eggplant",
    sprite: 'it_treasure_eggplant_1.png',
    value: {
      base: 50,
      village: 40,
      karma: karmaVeryLarge,
    }
  },

  // medium value
  
  {
    id: 'it-treasure-mediumValue',
    debugCategory: 'treasure',
    isAbstract: true,
    value: {
      base: 40,
      village: 30,
      karma: karmaMedium,
    },
    maxStack: 10,
    fame: fameLarge,
    funds: fundsLarge,
  },
  {
    id: 'it-treasure-vase',
    extends: 'it-treasure-mediumValue',
    name: "txt-it-treasure-vase-name",
    description: "txt-it-treasure-vase",
    sprite: 'it_treasure_vase_1.png',
  },
  {
    id: 'it-treasure-head',
    extends: 'it-treasure-mediumValue',
    name: "txt-it-treasure-head-name",
    description: "txt-it-treasure-head",
    sprite: 'it_treasure_head_1.png',
  },
  {
    id: 'it-treasure-earrings',
    extends: 'it-treasure-mediumValue',
    name: "txt-it-treasure-earrings-name",
    description: "txt-it-treasure-earrings",
    sprite: 'it_treasure_earrings_1.png',
  },
  {
    id: 'it-treasure-coin',
    extends: 'it-treasure-mediumValue',
    name: "txt-it-treasure-coin-name",
    description: "txt-it-treasure-coin",
    sprite: 'it_treasure_coin_1.png',
  },
  {
    id: 'it-treasure-lama',
    extends: 'it-treasure-mediumValue',
    name: "txt-it-treasure-lama-name",
    description: "txt-it-treasure-lama",
    sprite: 'it_treasure_lama_1.png',
  },
  {
    id: 'it-treasure-goblet',
    extends: 'it-treasure-mediumValue',
    name: "txt-it-treasure-goblet-name",
    description: "txt-it-treasure-goblet",
    sprite: 'it_treasure_goblet_1.png',
  },
  {
    id: 'it-treasure-necklace',
    extends: 'it-treasure-mediumValue',
    debugCategory: 'treasure',
    name: "txt-it-treasure-necklace-name",
    description: "txt-it-treasure-necklace",
    sprite: 'it_treasure_necklace_1.png',
  },

// fixtures

  {
    id: 'fxt-treasure',
    mapScore: 0,
    showHint: false,
    flags: '+burriedTreasure',
    hideParty: false,
    setTile: [
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {ref:'tl-dry', reqBiomeFlags: '+desert'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
      {ref:'tl-jungle-thick'},
    ],
  },
  {
    id: 'fxt-shownTreasure',
    mapScore: 0,
    showHint:false,
    flags: '+burriedTreasure',
    hideParty: false,
    sprite: "res_fxt_treasureLocation.png",
  },
  {
    id: 'fxt-subfixture-treasure-1',
    extends: 'fxt-subfixture',
    sprite: [
      {ref:'res_fxt_sub_sticks_1.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_sub_sticks_3.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry | +desert'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
      {ref:'tl-grass'},
    ],
  },
  {
    id: 'fxt-subfixture-treasure-2',
    extends: 'fxt-subfixture-treasure-1',
    sprite: [
      {ref:'res_fxt_sub_sticks_2.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_sub_sticks_4.png', reqBiomeFlags: '+arctic'},
    ],
  },

// events

  {
    id: 'evt-treasure-dig',
    events: [
      {
        reqFixture: {flags: '+burriedTreasure'},
        showImage: {src: 'evt_fxt_empty.png', type: 'day'},
        text: "txt-evt-treasure-dig",
        chat: 'cl-generic',
        incAchievement: "ach-secret-treasure",
        replaceFixtures: {},
        events: [
          {
            reqDifficulty: '1..',
            loot: {
              items: [
                {slots: 4, 'il-magic':1},
                {slots: 1, 'il-magic':1, 'il-treasure-highValue':1},
                {slots: 1, 'il-magic':1, 'it-dinoSkull':1},
              ]
            },
          },
          {
            reqDifficulty: '0',
            loot: {
              items: [
                {slots: 4, 'il-magic':1},
                {slots: 1, 'il-magic':1, 'il-treasure-highValue':1},
                {slots: 1, 'il-magic':1, 'il-treasure-lowValue-easy':1},
                {slots: 1, 'il-magic':1, 'it-dinoSkull':1}
              ]
            },
          },
        ],
      },
      {
        reqFixture: {flags: '+burriedTreasureSchroedinger'},
        showImage: {src: 'evt_fxt_empty.png', type: 'day'},
        text: "txt-evt-treasure-dig-1",
        chat: 'cl-generic',
        replaceFixtures: {},
        loot: {
          items: {'it-box-schroedinger':1},
        },
      },
      {
        prio: 1,
        showImage: {src: 'evt_fxt_empty.png', type: 'day'},
        chat: 'cl-generic',
        text: "txt-evt-treasure-dig-2",
      },
    ]
  }

])