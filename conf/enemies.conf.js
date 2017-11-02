config.entities.add([
  
  {
    id: 'emy-hyena',
    debugCategory: 'Enemy',
    name: "txt-emy-hyena-name",
    health: 6,
    dice: ['dc-attack-enemy-hyena'],
    items: {'it-pelt-hyena':1, 'it-meat-raw':1, 'it-animalTooth':1},
    variations: [
      {sprite:'emy_hyena_1.png'},
      {sprite:'emy_hyena_2.png'},
      {sprite:'emy_hyena_3.png'},
      {sprite:'emy_hyena_4.png'},
    ],
    isLeftFacingSprite: true
  },
  {
    id: 'emy-hyena-black',
    debugCategory: 'Enemy Quest',
    name: "txt-emy-hyena-name",
    health: 16,
    dice: ['dc-attack-enemy-hyenaBlack', 'dc-attack-enemy-hyenaBlack', 'dc-attack-enemy-hyenaBlack',],
    items: {'it-pelt-hyena-black':1, 'it-meat-raw':3, 'it-animalTooth':3},
    sprite: 'emy_hyena_black.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-wolf-arctic',
    debugCategory: 'Enemy',
    name: "txt-emy-wolf-arctic-name",
    health: 8,
    dice: ['dc-attack-enemy-wolf-arctic', 'dc-attack-enemy-wolf-arctic'],
    items: {'it-pelt-arctic-wolf':1, 'it-meat-raw':2, 'it-animalTooth':2},
    sprite: 'emy_wolf_arctic_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-walrus',
    debugCategory: 'Enemy',
    name: "txt-emy-walrus-name",
    health: 22,
    dice: ['dc-attack-enemy-walrus', 'dc-attack-enemy-walrus'],
    items: {'it-meat-raw':6, 'it-walrustooth':2},
    sprite: 'emy_walrus_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-polarBear',
    debugCategory: 'Enemy',
    name: "txt-emy-polarBear-name",
    health: 20,
    dice: ['dc-attack-enemy-polarBear'],
    items: {'it-pelt-polarBear':1, 'it-meat-raw':4, 'it-animalTooth':4},
    sprite: 'emy_polarBear_1.png',
    portrait: 'res_face_polarBear_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-sabertooth-white',
    debugCategory: 'Enemy',
    name: "txt-emy-sabertooth-name",
    health: 20,
    dice: ['dc-attack-enemy-sabertooth', 'dc-attack-enemy-sabertooth'],
    items: {'it-pelt-sabertooth-white':1, 'it-meat-raw':4, 'it-sabertooth':2},
    sprite: 'emy_sabertooth_white.png',
    portrait: 'res_face_sabertooth_white.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-tiger',
    debugCategory: 'Enemy',
    name: "txt-emy-tiger-name",
    health: 14,
    dice: ['dc-attack-enemy-tiger', 'dc-attack-enemy-tiger'],
    items: {'it-pelt-tiger':1, 'it-meat-raw':2, 'it-animalTooth':3},
    sprite: 'emy_tiger_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-tiger-white',
    debugCategory: 'Enemy',
    name: "txt-emy-tiger-white-name",
    health: 18,
    dice: ['dc-attack-enemy-tiger-white', 'dc-attack-enemy-tiger-white'],
    items: {'it-pelt-tiger-white':1, 'it-meat-raw':2, 'it-animalTooth':1},
    sprite: 'emy_tiger_white.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-sabertooth',
    debugCategory: 'Enemy',
    name: "txt-emy-sabertooth-name",
    health: 20,
    dice: ['dc-attack-enemy-sabertooth', 'dc-attack-enemy-sabertooth'],
    items: {'it-pelt-sabertooth':1, 'it-meat-raw':4, 'it-sabertooth':2},
    sprite: 'emy_sabertooth.png',
    portrait: 'res_face_sabertooth.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-panther',
    debugCategory: 'Enemy',
    name: "txt-emy-panther-name",
    health: 10,
    dice: ['dc-attack-enemy-panther', 'dc-attack-enemy-panther', 'dc-attack-enemy-panther'],
    items: {'it-pelt-panther':1, 'it-meat-raw':2, 'it-animalTooth':3},
    sprite: 'emy_panther_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-gorilla',
    debugCategory: 'Enemy',
    name: "txt-emy-gorilla-name",
    health: 18,
    dice: ['dc-attack-enemy-gorilla', 'dc-attack-enemy-gorilla'],
    items: {'it-gorillaPaw':2, 'it-meat-raw':3, 'it-animalTooth':2},
    sprite: 'emy_gorilla_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-elephant',
    debugCategory: 'Enemy',
    name: "txt-emy-elephant-name",
    health: 25,
    dice: ['dc-attack-enemy-elephant', 'dc-attack-enemy-elephant'],
    items: [
      {slots:1, 'it-meat-raw':4, 'it-elephantTusk':1},
      {slots:1, 'it-meat-raw':4, 'it-elephantTusk':2},
    ],
    sprite: 'res_anm_elephant_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-triceratops',
    debugCategory: 'Enemy',
    name: "txt-emy-triceratops-name",
    health: 25,
    dice: ['dc-attack-enemy-7',],
    items: [
      {slots:1, 'it-meat-raw':4, 'it-triceratopsHorn':1},
      {slots:1, 'it-meat-raw':4, 'it-triceratopsHorn':2},
    ],
    sprite: 'res_anm_triceratops_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-crocodile',
    debugCategory: 'Enemy',
    name: "txt-emy-crocodile-name",
    health: 18,
    dice: ['dc-attack-enemy-crocodile', 'dc-attack-enemy-crocodile'],
    items: {'it-meat-raw':4, 'it-animalTooth':5, 'it-pelt-crocodile':1},
    sprite: 'emy_crocodile_1.png',
    portrait: 'res_face_crocodile_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-raptor',
    debugCategory: 'Enemy',
    name: "txt-emy-raptor-name",
    health: 12,
    dice: ['dc-attack-enemy-raptor', 'dc-attack-enemy-raptor', 'dc-attack-enemy-raptor'],
    items: {'it-meat-raw':3, 'it-animalTooth':4, 'it-raptorScale':1},
    sprite: 'emy_raptor_1.png',
    portrait: 'res_face_raptor_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-giantScorpion',
    debugCategory: 'Enemy',
    name: "txt-emy-giantScorpion-name",
    health: 12,
    dice: ['dc-attack-enemy-giantScorpion', 'dc-attack-enemy-giantScorpion'],
    items: {'it-meat-raw':5, 'it-giantScorpionSting':1},
    sprite: 'emy_giantScorpion_1.png',
    portrait: 'res_face_giantScorpion_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-giantSpider',
    debugCategory: 'Enemy',
    name: "txt-emy-giantSpider-name",
    health: 10,
    dice: ['dc-attack-enemy-giantSpider'],
    items: [
      {slots: 3, 'it-meat-raw':2, 'it-spiderLeg':1},
      {slots: 2, 'it-meat-raw':2, 'it-spiderLeg':2},
      {slots: 1, 'it-meat-raw':2, 'it-spiderLeg':3},
      {slots: 1, 'it-meat-raw':2, 'it-spiderLeg':4},
    ],
    sprite: 'emy_giantSpider_1.png',
    portrait: 'res_face_giantSpider_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-giantSpider-quest',
    debugCategory: 'Enemy',
    name: "txt-emy-giantSpider-name",
    health: 10,
    dice: ['dc-attack-enemy-giantSpider'],
    items: [
      {slots: 2, 'it-meat-raw':3, 'it-spiderLeg':2, 'it-pumpkinLantern':1},
    ],
    sprite: 'emy_giantSpider_1.png',
    portrait: 'res_face_giantSpider_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-giantBird',
    debugCategory: 'Enemy',
    name: "txt-emy-giantBird-name",
    health: 18,
    dice: ['dc-attack-enemy-giantBird', 'dc-attack-enemy-giantBird', 'dc-attack-enemy-giantBird'],
    items: {'it-meat-raw':5,'it-giantBirdFeather':2},
    sprite: 'emy_giantBird_1.png',
    portrait: 'res_face_giantBird_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-giantCrab',
    debugCategory: 'Enemy',
    name: "txt-emy-giantCrab-name",
    health: 25,
    dice: [
      'dc-attack-enemy-giantCrab',
      'dc-attack-enemy-giantCrab',
      'dc-attack-enemy-giantCrab',
      'dc-attack-enemy-giantCrab'
    ],
    items: {'it-meat-raw':10,'it-giantCrabPincer':2},
    sprite: 'emy_giantCrab_1.png',
    portrait: 'res_face_giantCrab_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-killerPlant',
    debugCategory: 'Enemy',
    name: "txt-emy-killerPlant-name",
    health: 15,
    dice: {faces:'dmg1 dmg1 dmg1 dmg2 dmg3', sprite:'hud_dice_bg_emy_1.png'},
    items: {},
    sprite: 'emy_killerPlant_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-zombie',
    debugCategory: 'Enemy',
    name: "txt-emy-zombie-name",
    health: 10,
    dice: {faces:'dmg1 dmg1 dmg1 dmg1 dmg2 dmg3', sprite:'hud_dice_bg_emy_1.png'},
    items: {},
    sprite: 'emy_zombie_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-mummy',
    debugCategory: 'Enemy',
    name: "txt-emy-mummy-name",
    health: 20,
    dice: ['dc-attack-enemy-mummy', 'dc-attack-enemy-mummy', 'dc-attack-enemy-mummy'],
    items: {'it-mummy':1},
    sprite: 'emy_mummy_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-abomination',
    debugCategory: 'Enemy',
    name: "txt-emy-abomination-name",
    health: 12,
    dice: 'dc-abomination-1 dc-abomination-2',
    items: {'it-meat-raw':3},
    sprite: 'emy_abomination_1.png',
    isLeftFacingSprite: true
  },

  {
    id: 'emy-zombiePygmy-warrior',
    debugCategory: 'Enemy',
    name: "txt-emy-zombiePygmy-warrior-name",
    health: 4,
    dice: ['dc-attack-2', 'dc-support-2'],
    items: [
      {slots: 1, 'it-spear':1},
      {slots: 2, 'it-meat-raw':2},
      {slots: 1, 'it-rope':1},
      {slots: 1, 'it-mushroom-healing':1},
      {slots: 1, 'it-cocaLeaves':1},
      {slots: 1, 'it-mushroom-view':1},
    ],
    sprite: 'emy_zombiePygmy_warrior.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-zombiePygmy-shaman',
    debugCategory: 'Enemy',
    name: "txt-emy-zombiePygmy-shaman-name",
    health: 8,
    dice: ['dc-attack-2', 'dc-shaman-2'],
    items: [
      {slots: 1, 'it-spear':1},
      {slots: 2, 'it-meat-raw':2},
      {slots: 1, 'it-rope':1},
      {slots: 1, 'it-mushroom-healing':1},
      {slots: 1, 'it-cocaLeaves':1},
      {slots: 1, 'it-mushroom-view':1},
    ],
    sprite: 'emy_zombiePygmy_shaman.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-slaver',
    debugCategory: 'Enemy',
    name: "txt-emy-slaver-name",
    health: 12,
    dice: ['dc-whip', 'dc-attack-2'],
    items: [
      {slots: 4, 'it-ammo':10},
      {slots: 4, 'it-whisky':4},
      {slots: 4, 'it-costonFlare':10},
      {slots: 4, 'it-jewels':3},
      {slots: 4, 'it-dynamite':5},
      {slots: 5, 'it-whip':1},
    ],
    sprite: 'emy_slaver_1.png',
    isLeftFacingSprite: true
  },
  {
    id: 'emy-slaver-minion',
    debugCategory: 'Enemy',
    name: "txt-emy-slaver-minion-name",
    health: 8,
    dice: ['dc-pistol', 'dc-defend-1'],
    items: [
      {slots: 5, 'it-marbles':2},
      {slots: 4, 'it-ammo':2},
      {slots: 4, 'it-whisky':1},
      {slots: 3, 'it-cocaLeaves':2},
      {slots: 3, 'il-treasure-lowValue':1},
      {slots: 3, 'it-costonFlare':2},
      {slots: 1, 'it-pistol':1},
    ],
    variations: [
      {gender:'male', sprite: 'emy_slaver_minion_1.png'},
      {gender:'male', sprite: 'emy_slaver_minion_2.png'},
    ], 
    isLeftFacingSprite: true
  },


// ------- Natives

  {
    id: 'emy-native-warrior',
    debugCategory: 'Enemy Native',
    name: "txt-emy-native-warrior-name",
    health: 8,
    dice: 'dc-attack-2 dc-spear',
    items: {slots: 1, 'il-loot-combat-native':1},
    sprite: 'native'
  },
  {
    id: 'emy-native-scout',
    debugCategory: 'Enemy Native',
    name: "txt-emy-native-scout-name",
    health: 6,
    dice: 'dc-attack-1 dc-defend-1',
    items: {slots: 1, 'il-loot-combat-native':1},
    sprite: 'native'
  },
  {
    id: 'emy-native-shaman',
    debugCategory: 'Enemy Native',
    name: "txt-emy-native-shaman-name",
    health: 4,
    dice: 'dc-shaman-2 dc-support-1',
    items: {slots: 1, 'il-loot-combat-native':1},
    sprite: 'native'
  },

  {
    id: 'emy-lizard-warrior',
    debugCategory: 'Enemy Native',
    name: "txt-emy-lizard-warrior-name",
    health: 12,
    dice: 'dc-attack-2 dc-spear',
    items: {slots: 1, 'il-loot-combat-native':1},
    variations: [
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_1.png', portrait: 'res_face_lizard_1.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_2.png', portrait: 'res_face_lizard_2.png',
        miniSprite: 'res_porter_lizard_2_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_3.png', portrait: 'res_face_lizard_3.png',
        miniSprite: 'res_porter_lizard_3_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_6.png', portrait: 'res_face_lizard_6.png',
        miniSprite: 'res_porter_lizard_6_mini.png',
      },
    ],
  },
  {
    id: 'emy-lizard-scout',
    debugCategory: 'Enemy Native',
    name: "txt-emy-lizard-scout-name",
    health: 10,
    dice: 'dc-attack-2 dc-defend-1',
    items: {slots: 1, 'il-loot-combat-native':1},
    variations: [
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_1.png', portrait: 'res_face_lizard_1.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_2.png', portrait: 'res_face_lizard_2.png',
        miniSprite: 'res_porter_lizard_2_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_3.png', portrait: 'res_face_lizard_3.png',
        miniSprite: 'res_porter_lizard_3_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_6.png', portrait: 'res_face_lizard_6.png',
        miniSprite: 'res_porter_lizard_6_mini.png',
      },
    ],
  },
  {
    id: 'emy-lizard-shaman',
    debugCategory: 'Enemy Native',
    name: "txt-emy-lizard-shaman-name",
    health: 6,
    dice: 'dc-shaman-2 dc-support-2',
    items: {slots: 1, 'il-loot-combat-native':1},
    variations: [
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_4.png', 
        portrait: 'res_face_lizard_4.png',
        miniSprite: 'res_porter_lizard_4_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_5.png', 
        portrait: 'res_face_lizard_5.png',
        miniSprite: 'res_porter_lizard_5_mini.png',
      },
      {
        gender: 'hybrid', name: 'lizard',
        sprite: 'res_porter_lizard_6.png', 
        portrait: 'res_face_lizard_6.png',
        miniSprite: 'res_porter_lizard_6_mini.png',
      },
    ],
  },

// -------- Quests

  {
    id: 'emy-konrad',
    debugCategory: 'Enemy Quest',
    name: 'Konrad',
    title: "txt-emy-konrad-title",
    description: "txt-emy-konrad",
    health: 12,
    dice:['dc-attack-2', 'dc-attack-2', 'dc-defend-2'],
    items: {'it-quest-5-decoration':1},
    sprite: 'emy_konrad_1.png',
    isLeftFacingSprite: true,
    imgSlot: 'npc2',
  },
  
])
