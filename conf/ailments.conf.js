config.entities.add([

	{
    id: 'st-cannibal',
    title: "txt-st-cannibal-title",
    description: "txt-st-cannibal",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_cannibal.png",
  },
  {
    id: 'st-alcoholic',
    title: "txt-st-alcoholic-title",
    description: "txt-st-alcoholic",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_alcoholic.png",
    dayEvents: [
      {reqAge: 35, loyalty:-1 ,resetStatusAge:true},
      {
        charEffects: {
          count:4,
          reqStatus: '+alcoholic',
          incAchievement: 'ach-alcoholics'
        }
      }
    ],
  },
  {
    id: 'st-racist',
    title: "txt-st-racist-title",
    description: "txt-st-racist",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_racist.png",
  },
  {
    id: 'st-sexist',
    title: "txt-st-sexist-title",
    description: "txt-st-sexist",
    flags: '+ailment',
    debugCategory: 'Ailment',
    sprite: "res_status_sexist.png",
    important: true,
  },
  {
    id: 'st-pyromaniac',
    title: "txt-st-pyromaniac-title",
    description: "txt-st-pyromaniac",
    flags: '+ailment',
    debugCategory: 'Ailment',
    sprite: "res_status_pyromaniac.png",
    important: true
  },
  {
    id: 'st-bipolar',
    title: "txt-st-bipolar-title",
    description: "txt-st-bipolar",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_bipolar.png",
  },
  {
    id: 'st-paranoid',
    title: "txt-st-paranoid-title",
    description: "txt-st-paranoid",
    flags: '+ailment',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_paranoid.png",
  },

])