root = typeof exports !== "undefined" && exports !== null ? exports : config;

root.entities.add([
  {
    id: 'ex-expedition1',
    range: '0',
    worlds: ['wd-world-1', 'wd-world-1v']
  },
  {
    id: 'ex-expedition2',
    range: '1',
    worlds: ['wd-world-2']
  },
  {
    id: 'ex-expedition3',
    range: '2',
    worlds: ['wd-world-3']
  },
  {
    id: 'ex-expedition4',
    range: '3',
    worlds: ['wd-world-4', 'wd-world-4v']
  },
  {
    id: 'ex-expedition5',
    range: '4',
    worlds: ['wd-world-5', 'wd-world-5v']
  },
  {
    id: 'ex-expedition6',
    range: '5',
    worlds: ['wd-world-6']
  },
  {
    id: 'ex-expedition-plus',
    range: '6..',
    worlds: ['wd-extra-1']
  },


  {
    id: 'wd-world-1',
    numSites: 2,
    biomeCount: [2, 1],
    pockets: ['pck-grass', 'pck-dry'],
    maxCompassScore: [1, 1, 1],
    goalFame: 100,
    rivalTurns: 100,
    debugXP: 2
  },
  {
    id: 'wd-world-1v',
    extends: 'wd-world-1',
    biomeCount: [1, 2],
    debugXP: 2
  },
  {
    id: 'wd-world-2',
    numSites: 2,
    biomeCount: [2, 2],
    pockets: ['pck-grass', 'pck-dry', 'pck-desert', 'pck-arctic'],
    blockedBiomes: 1,
    maxCompassScore: [30, 30, 60],
    goalFame: 120,
    rivalTurns: 120,
    debugXP: 3
  }, 
  {
    id: 'wd-world-3',
    numSites: 3,
    biomeCount: [2, 2],
    pockets: ['pck-grass', 'pck-dry', 'pck-desert', 'pck-arctic'],
    maxCompassScore: [40, 40, 80],
    goalFame: 140,
    rivalTurns: 130,
    debugXP: 4
  }, 
  {
    id: 'wd-world-4',
    numSites: 3,
    biomeCount: [3, 2],
    pockets: ['pck-grass', 'pck-dry', 'pck-desert', 'pck-arctic'],
    blockedBiomes: 2,
    maxCompassScore: [50, 50, 100],
    goalFame: 160,
    rivalTurns: 160,
    debugXP: 4
  },
  {
    id: 'wd-world-4v',
    extends: 'wd-world-4',
    biomeCount: [2, 3],
    debugXP: 4
  },
  {
    id: 'wd-world-5',
    numSites: 3,
    biomeCount: [3, 2],
    pockets: ['pck-grass', 'pck-dry', 'pck-desert', 'pck-arctic'],
    blockedBiomes: 1,
    maxCompassScore: [60, 60, 120],
    goalFame: 180,
    rivalTurns: 200,
    debugXP: 4
  },
  {
    id: 'wd-world-5v',
    extends: 'wd-world-5',
    biomeCount: [2, 3],
    debugXP: 4
  },
  {
    id: 'wd-world-6',
    numSites: 1,
    biomeCount: [3, 3],
    pockets: ['pck-prehistoric'],
    blockedBiomes: 3,
    maxCompassScore: [70, 70, 140],
    goalFame: 200,
    rivalTurns: 240,
    debugXP: 4
  },

// extras

  {
    id: 'wd-extra-1',
    numSites: 1,
    biomeCount: [4, 3],
    pockets: ['pck-prehistoric'],
    blockedBiomes: 5,
    maxCompassScore: [70, 70, 140],
    goalFame: 200,
  },

// 

  {
    id: 'wd-warped-prehistoric',
    biomeCount: [2, 2],
    pockets: 'pck-warped-prehistoric',
    blockedBiomes: 1,
  },
  {
    id: 'wd-warped-refill',
    biomeCount: [1, 1],
    pockets: 'pck-warped-refill',
  },
  {
    id: 'wd-warped-blessing',
    biomeCount: [1, 1],
    pockets: 'pck-warped-blessing',
  },
  {
    id: 'wd-warped-corrupted',
    biomeCount: [1, 1],
    pockets: 'pck-warped-corrupted',
  },

// tutorials

  {
    id: 'wd-tutorial-1',
    pockets: 'pck-world-tutorial-1',
    biomeCount: [3, 1],
    startPos: [0, 0],
    maxCompassScore: [1, 1, 1],
    goalFame: 20,
  },
  {
    id: 'wd-tutorial-2',
    pockets: 'pck-world-tutorial-2',
    biomeCount: [2, 2],
    startPos: [0, 0],
    maxCompassScore: [50, 50, 50],
    goalFame: 40,
  },
  {
    id: 'wd-tutorial-3',
    pockets: 'pck-world-tutorial-3',
    biomeCount: [2, 2],
    startPos: [0, 0],
    maxCompassScore: [50, 50, 50],
    goalFame: 60,
  },
]);