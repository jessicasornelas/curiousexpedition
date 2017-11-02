config.entities.add([

// fixtures

  {
    id: 'fxt-monsterDen-hyena',
    name: "txt-fxt-monsterDen-hyena-name",
    debugColor: 'lightgray',
    sprite: "res_fxt_cave.png",
    setNeighbors: ['tl-hill'],
    setTile: 'tl-hill',
    actions: 'evt-monsterDen-hyena-approach',
    dayEvents: [
      {
        slots: 1,
        reqZone: {flags:'+hyena', range:'..6', count:'0'},
        addZone: {ref:'zn-hyena', range:1}
      },
      { slots:5 }
    ],
  },
  
  
// events

  {
    id: 'evt-monsterDen-hyena-approach',
    actionText: "txt-evt-altar-approach-action",
    playMusic: ['thm_nature_mystic_1', 'thm_nature_mystic_2'],
    showImage: {src: 'evt_fxt_cave_1.png', type:'day'},
    text: "txt-evt-monsterDen-hyena-approach",
    report: "txt-evt-monsterDen-hyena-approach-report",
    chat: 'cl-cave-approach',
    actions: ['evt-leave'],
  },
  
 

])