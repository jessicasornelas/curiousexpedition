config.entities.add([

// pocket

  {
    id: 'pck-desert', 
    name: "txt-pck-desert-name",
    previewSprite: 'hud_worldmap_pocketPreview_desert.png',
    slotMarker: 'hud_mapMarker_desert.png',
    ambientSound: 'sfx_loop_desert_1',
    goals: [
      'gol-goldenTemple-moonStone',
      'gol-goldenTemple-buried'
    ],
    fixtures: [
      [ // resting group
        {ref: 'grp-village'},
        {ref: 'fxt-mission'},
        {ref: 'grp-sanity-nature'},
        {ref: 'grp-sanity-nature'},
        {select:3, group: [
          {ref: 'grp-village'},
          {ref: 'fxt-mission'},
          {ref: 'grp-sanity-nature'},
        ]},
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
        {ref: 'fxt-trader'},
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
        {ref:'fxt-hiddenTreasure'},
        {chance: 0.25, ref:'fxt-mountainFaceSecret'},
      ]
    ],
    biomes: [
      {ref: 'bio-desert-generic'},
      {select: 1, group: 'grp-drylands-sanity', chance:0.1},
      {select: 2, group: 'grp-desert-sanity'},
      {chance: 0.7, select: 1, reqWorld:'3..', group:[
        {slots: 1, group: 'grp-grasslands-sanity'},
        {slots: 1, group: 'grp-drylands-sanity'},
      ]},
      {select: 5, group: 'grp-desert-sanity'},
    ]
  },

// biome groups

  {
    id: 'grp-desert-sanity',
    group: [
      {slots: 1, ref: 'bio-desert-mountains'},
      {slots: 1, ref: 'bio-desert-cactusForest'},
      {slots: 1, ref: 'bio-desert-forest'},
      {slots: 1, ref: 'bio-desert-sands'},
      {slots: 1, ref: 'bio-desert-pits'},
      {slots: 1, ref: 'bio-desert-stoneForest'},
    ]
  },

// biomes

  {
    id: 'bio-desert-generic', 
    name: "txt-pck-desert-name",
    flags: '+desert',
    debugColor: 'gold',
    eventImg: {
      day:'evt_bio_desert_1.png',
      night:'evt_bio_desert_1_night.png'
    },
    terrain: [
      {perlin: 0.78, tile: 'tl-desert'},
      {perlin: 0.75, tile: 'tl-mountain'},
      {perlin: 0.72, tile: 'tl-dry'},
      {perlin: 0.68, tile: 'tl-cactusForest'},
      {perlin: 0.61, tile: 'tl-desert'},
      {perlin: 0.60, tile: 'tl-mountain'},
      {perlin: 0.59, tile: 'tl-desert-stoneForest'},
      {perlin: 0.51, tile: 'tl-dry'},
      {perlin: 0.48, tile: 'tl-dry-stoneForest'},
      {perlin: 0.45, tile: 'tl-dry'},
      {perlin: 0.43, tile: 'tl-desert'},
      {perlin: 0.42, tile: 'tl-hill'},
      {perlin: 0.41, tile: 'tl-mountain'},
      {perlin: 0.40, tile: 'tl-dry'},
      {perlin: 0.38, tile: 'tl-cactusForest'},
      {perlin: 0.24, tile: 'tl-desert'},
      {perlin: 0.21, tile: 'tl-dry'},
      {perlin: 0.20, tile: 'tl-hill'},
      {perlin: 0.16, tile: 'tl-desert'},
      {perlin: 0.15, tile: 'tl-desert-stoneForest'},
      {perlin: 0.10, tile: 'tl-desert'},
      {perlin: 0.00, tile: 'tl-cactusForest'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: '2..3', select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: '4..', select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},

      {chance:1.0, select:2, ref:'zn-desertStorm'}
    ]
  },
  {
    id: 'bio-desert-sands',
    extends: 'bio-desert-generic',
    terrain: [
      {perlin: 0.80, tile: 'tl-desert'},
      {perlin: 0.73, tile: 'tl-mountain'},
      {perlin: 0.45, tile: 'tl-desert'},
      {perlin: 0.40, tile: 'tl-dry'},
      {perlin: 0.35, tile: 'tl-cactusForest'},
      {perlin: 0.00, tile: 'tl-desert'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: '2..3', select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: '4..', select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},

      {chance:1.0, select:2, ref:'zn-desertStorm'}
    ],
  },
  {
    id: 'bio-desert-cactusForest', 
    extends: 'bio-desert-generic',
    terrain: [
      {perlin: 0.90, tile: 'tl-mountain'},
      {perlin: 0.86, tile: 'tl-desert'},
      {perlin: 0.85, tile: 'tl-hill'},
      {perlin: 0.75, tile: 'tl-cactusForest'},
      {perlin: 0.60, tile: 'tl-desert'},
      {perlin: 0.58, tile: 'tl-mountain'},
      {perlin: 0.55, tile: 'tl-cactusForest'},
      {perlin: 0.52, tile: 'tl-dry-stoneForest'},
      {perlin: 0.45, tile: 'tl-cactusForest'},
      {perlin: 0.43, tile: 'tl-hill'},
      {perlin: 0.40, tile: 'tl-dry'},
      {perlin: 0.35, tile: 'tl-desert'},
      {perlin: 0.20, tile: 'tl-cactusForest'},
      {perlin: 0.15, tile: 'tl-desert'},
      {perlin: 0.00, tile: 'tl-cactusForest'},
     ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: [2,3], select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: [4,5], select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},
    ],
  },
  {
    id: 'bio-desert-pits', 
    extends: 'bio-desert-generic',
    flags: '+desert +pits',
    terrain: [
      {perlin: 0.90, tile: 'tl-mountain'},
      {perlin: 0.72, tile: 'tl-desert'},
      {perlin: 0.56, tile: 'tl-pit-desert'},
      {perlin: 0.47, tile: 'tl-desert'},
      {perlin: 0.44, tile: 'tl-cactusForest'},
      {perlin: 0.40, tile: 'tl-dry-stoneForest'},
      {perlin: 0.35, tile: 'tl-dry'},
      {perlin: 0.32, tile: 'tl-cactusForest'},
      {perlin: 0.26, tile: 'tl-desert'},
      {perlin: 0.15, tile: 'tl-pit-desert'},
      {perlin: 0.00, tile: 'tl-desert'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-raptor'},
      ]},
      {reqWorld: [2,3], select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: [4,5], select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},
    ],
  },
  {
    id: 'bio-desert-forest', 
    flags: '+desert +dry',
    extends: 'bio-desert-generic',
    terrain: [
      {perlin: 0.95, tile: 'tl-mountain'},
      {perlin: 0.68, tile: 'tl-desert'},
      {perlin: 0.65, tile: 'tl-cactusForest'},
      {perlin: 0.63, tile: 'tl-desert-stoneForest'},
      {perlin: 0.62, tile: 'tl-dry'},
      {perlin: 0.54, tile: 'tl-dry-jungle-thick'},
      {perlin: 0.53, tile: 'tl-mountain'},
      {perlin: 0.44, tile: 'tl-dry-jungle-thick'},
      {perlin: 0.43, tile: 'tl-dry-stoneForest'},
      {perlin: 0.41, tile: 'tl-dry'},
      {perlin: 0.38, tile: 'tl-desert-stoneForest'},
      {perlin: 0.00, tile: 'tl-desert'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-tiger'},
      ]},
      {reqWorld: [2,3], select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-tiger'},
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: [4,5], select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-tiger'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},
    ],
  },
  {
    id: 'bio-desert-mountains', 
    extends: 'bio-desert-generic',
    flags: '+desert +mountain',
    terrain: [
      {perlin: 0.90, tile: 'tl-mountain'},
      {perlin: 0.86, tile: 'tl-desert'},
      {perlin: 0.85, tile: 'tl-dry'},
      {perlin: 0.83, tile: 'tl-desert'},
      {perlin: 0.79, tile: 'tl-mountain'},
      {perlin: 0.76, tile: 'tl-cactusForest'},
      {perlin: 0.57, tile: 'tl-desert'},
      {perlin: 0.52, tile: 'tl-dry'},
      {perlin: 0.50, tile: 'tl-dry-stoneForest'},
      {perlin: 0.47, tile: 'tl-dry'},
      {perlin: 0.40, tile: 'tl-mountain'},
      {perlin: 0.33, tile: 'tl-desert'},
      {perlin: 0.29, tile: 'tl-mountain'},
      {perlin: 0.15, tile: 'tl-desert'},
      {perlin: 0.00, tile: 'tl-mountain'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-hyena'},
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-giantBird'},
      ]},
      {reqWorld: [2,3], select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 1, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: [4,5], select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},
    ],
  },
  {
    id: 'bio-desert-stoneForest', 
    extends: 'bio-desert-generic',
    terrain: [
      {perlin: 0.90, tile: 'tl-desert'},
      {perlin: 0.85, tile: 'tl-mountain'},
      {perlin: 0.70, tile: 'tl-dry-stoneForest'},
      {perlin: 0.60, tile: 'tl-desert'},
      {perlin: 0.58, tile: 'tl-pit-desert'},
      {perlin: 0.50, tile: 'tl-desert'},
      {perlin: 0.45, tile: 'tl-cactusForest'},
      {perlin: 0.25, tile: 'tl-dry-stoneForest'},
      {perlin: 0.20, tile: 'tl-desert'},
      {perlin: 0.15, tile: 'tl-mountain'},
      {perlin: 0.00, tile: 'tl-dry-stoneForest'},
    ],
    fixtures: [
    ],
    zones: [
      {chance: 1.0, select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 1, ref: 'zn-hyena'},
        {slots: 2, ref: 'zn-raptor'},
        {slots: 2, ref: 'zn-giantBird'},
      ]},
      {chance: 0.3, select: 1, group: [
        {slots: 1, ref: 'zn-raptor'},
      ]},
      {reqWorld: [2,3], select: 1, group: [
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 3, ref: 'zn-raptor'},
        {slots: 2, ref: 'zn-giantScorpion'},
      ]},
      {reqWorld: [4,5], select: 1, group: [,
        {slots: 1, ref: 'zn-panther'},
        {slots: 2, ref: 'zn-giantBird'},
        {slots: 4, ref: 'zn-raptor'},
        {slots: 3, ref: 'zn-giantScorpion'},
      ]},
    ],
  }

])