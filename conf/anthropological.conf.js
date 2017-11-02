config.entities.add([

// perks

  {
    id: 'pk-anthropology',
    title: "txt-pk-anthropology-title",
    debugCategory: 'perk',
    description: "txt-pk-anthropology",
    isPerk: true,
    sprite: "res_status_anthropology.png",
  },

// items

  {
    id: 'it-anthropologicalCollection',
    name: "txt-it-anthropologicalCollection-name",
    description: "txt-it-anthropologicalCollection",
    debugCategory: 'fame',
    sprite: 'it_special_book_1.png',
    value: {base: 10, karma: 1},
    maxStack: 1,
    showInHallOfFame: false,
  },
  {
    id: 'it-anthropologicalStudies',
    name: "txt-it-anthropologicalCollection-name",
    description: "txt-it-anthropologicalCollection",
    collectionItem: 'it-anthropologicalCollection',
    debugCategory: 'fame',
    sprite: 'it_special_book_1.png',
    fame: fameVeryLarge, 
    funds: fundsVerySmall, 
    value: {base: 10, karma: 1},
    maxStack: 20,
  },
])