config.entities.add([

// fixtures

  {
    id: 'fxt-oldCamp',
    name: "txt-fxt-oldCamp-name",
    flags: '+dreamVisions +oldCamp',
    sprite: [
      {ref:'res_fxt_oldCamp.png', reqBiomeFlags: '-arctic'},
      {ref:'res_fxt_oldCamp_arctic.png', reqBiomeFlags: '+arctic'},
    ],
    setTile: [
      {ref:'tl-dry', reqBiomeFlags: '+dry'},
      {ref:'tl-desert', reqBiomeFlags: '+desert'},
      {ref:'tl-deepSnow', reqBiomeFlags: '+arctic'},
      {ref:'tl-grass'},
    ],
    setNeighbors: [
      {ref:'tl-river-shallow', reqBiomeFlags: '-desert -arctic'},
      {ref:'tl-packIce', reqBiomeFlags: '+arctic'}
    ], 
    spawnEvents: [
      {slots:1},
      {slots:1, setFixtureFlags: '+wildlife'}
    ],
    actions: 'evt-oldCamp-enter',
    debugCategory: 'loot',
    debugColor: '#5DADE2'
  },

// events

  {
    id: 'evt-oldCamp-enter',
    actionText: "txt-evt-altar-approach-action",
    reqFixtureFlags: '-explored',
    chat: 'cl-scaryPlace',
    playMusic: [
      'thm_nature_mystic_1', 
      'thm_nature_mystic_2'
    ],
    events: [
      {
        reqTutorial: true,
        text: "txt-evt-oldCamp-enter",
        showImage: {src: 'evt_fxt_oldCamp_1.png', type:'day'},
        actions: [
          {
            actionText: "txt-evt-oldCamp-enter-action",
            text: "txt-evt-oldCamp-enter-1",
            events: 'evt-oldCamp-searchOutcome',
          },
          {
            actionText: "txt-evt-leave-action",
            alwaysShown: true,
            reqTileFlags: '+dontAllowToLeave',
          },
        ],
      },
      {
        reqTutorial: false,
        partyEffects: [
          {
            optional: true, reqBiomeFlags: '-arctic',
            showImage: {src: 'evt_fxt_oldCamp_1.png', type:'day'},
            text: "txt-evt-oldCamp-enter-2",
          },
          {
            optional: true, reqBiomeFlags: '+arctic',
            text: "txt-evt-oldCamp-enter-arctic",
            events: [
              {
                slots:1,
                showImage: {
                  src: 'evt_fxt_oldCamp_arctic.png', type: 'day', showMounted: true,
                  particles: ['pt-snow-1', 'pt-snow-2', 'pt-snow-3'],
                },
              },
              {
                slots:1,
                showImage: {
                  src: 'evt_fxt_oldCamp_arctic.png', type: 'day', showMounted: true,
                },
              }
            ],
          },
          {
            optional: true,
            reqFixtureFlags: '+wildlife',
            text: 'txt-evt-leave-wildlife-hint'
          }
        ],
        report: "txt-evt-oldCamp-enter-report",
        actions: [
          {ref:'evt-searchArea', pushEvent: 'evt-oldCamp-searchOutcome'}, 
          'evt-leave'
        ],
      },
    ],
  },
  {
    id: 'evt-oldCamp-searchOutcome',
    setFixtureFlags: '+explored',
    events: [
      {
        reqTutorial: false,
        text: "txt-evt-oldCamp-searchOutcome",
        report: "txt-evt-oldCamp-searchOutcome-report",
        events: [
          {
            reqDifficulty: '1..',
            loot: {
              items: [
                {slots:5, 'il-loot-standard':1, 'il-loot-edible':1}, 
                {slots:2, 'il-loot-standard':1, 'it-polarStation-ticket':2},
                {slots:1, 'it-map-treasure':1, 'il-loot-standard':1},
              ],
              close: 'evt-leave',
            },
          },
          {
            reqDifficulty: '0',
            loot: {
              items: [
                {slots:5, 'il-loot-standard':1, 'il-loot-edible-easy':1, 'it-polarStation-ticket':2},
                {slots:2, 'il-loot-edible-easy':1, 'il-loot-edible':1}, 
                {slots:1, 'it-map-treasure':1, 'it-shovel':1, 'il-loot-edible':1},
              ],
              close: 'evt-leave',
            }
          },
        ],
      },
      {
        reqTutorial: true,
        text: "txt-evt-oldCamp-searchOutcome-1",
        loot: {
          items: [
            {slots:1, 'it-chocolate':3, 'it-marbles':4},
          ], 
          close: 'evt-leave'
        }
      },
    ],
  },
])