config.entities.add([

  {
    id: 'it-butterfly-collection',
    name: "txt-it-butterfly-collection-name",
    description: "txt-it-butterfly-collection",
    debugCategory: 'butterflies',
    sprite: 'it_butterflyCollection_1.png',
    noWeight: true,
    maxStack: 1,
    losable: false
  },
  {
    id: 'it-butterfly-random',
    name: "txt-it-butterfly-random-name",
    description: "txt-it-butterfly-collection",
    collectionItem: 'it-butterfly-collection',
    debugCategory: 'butterflies',
    value: 0,
    fame: fameVerySmall, 
    funds: fundsTiny,
    maxStack: 1,
  }
]) 