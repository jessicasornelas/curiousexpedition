config.entities.add([

// status 

  {
    id: 'st-kleptomania',
    debugCategory: 'Ailment',
    title: "txt-st-kleptomania-title",
    description: "txt-st-kleptomania",
    flags: '+ailment',
    important: true,
    sprite: 'res_status_kleptomanic.png'
  },
  {
    id: 'st-kleptomania-idol',
    debugCategory: 'Ailment',
    tripEvents: [
      {slots: 2},
      {
        partyEffects: { ref: 'evt-setImage-nightCamp' },
        text: "txt-st-kleptomania-idol",
        removeStatus: true,
        actions: [
          {
            actionText: "txt-st-kleptomania-idol-action",
            text: "txt-st-kleptomania-idol-1",
            loyalty: -1,
            items: {'it-idol':1}
          },
          {
            actionText: "txt-st-kleptomania-idol-action-1",
            text: "txt-st-kleptomania-idol-2",
          }
        ]
      }
    ]
  },

// events

  {
    id: 'evt-village-rest-kleptomania',
    charEffects: {
      reqStatus: '+kleptomania', 
      text: "txt-evt-village-rest-kleptomania",
      report: "txt-evt-village-rest-kleptomania-report",
    },
    standing: -1,
    events: 'evt-village-actions-night'
  },
])