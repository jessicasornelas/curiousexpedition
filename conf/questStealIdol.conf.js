config.entities.add([

// status

  {
    id: 'st-idol',
    debugCategory: 'Quest',
    title: "txt-st-idol-title",
    description: "txt-st-idol",
    sprite: "res_status_idol.png",
    important: true,
  },

// events

  {
    id: 'evt-harbor-quest-idol',
    npc: 'npc-trader',
    text: "txt-evt-harbor-quest-idol",
    report: "txt-evt-harbor-quest-idol-report",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-missionary-action",
        text: "txt-evt-harbor-quest-idol-1",
        report: "txt-evt-harbor-quest-idol-report-1",
        setPartyStatus: '+idol',
        events: 'evt-harbor-eventSelection'
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-idol-2",
        report: "txt-evt-harbor-quest-idol-report-2",
        events: 'evt-harbor-eventSelection'
      },
    ]
  },
  {
    id: 'evt-harbor-quest-idol-complete',
    reqPartyStatus: {'st-idol':true}, setPartyStatus: {'st-idol':false},
    reqItems: {'it-idol':1},
    npc: 'npc-trader',
    text: "txt-evt-harbor-quest-idol-complete",
    actions: [
      {
        actionText: "txt-evt-harbor-quest-idol-complete-action",
        text: "txt-evt-harbor-quest-idol-complete-1",
        items: {'it-idol':-1},
        report: "txt-evt-harbor-quest-idol-complete-report",
        actions: 'evt-harbor-quest-reward',
      },
      {
        actionText: "txt-evt-angry-demandPayment-action-1",
        text: "txt-evt-harbor-quest-idol-complete-2",
        fame: -fameLarge,
        events: 'evt-harbor-eventSelection',
      },
    ],
  },

])