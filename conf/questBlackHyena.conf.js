config.entities.add([

// items

  {
    id: 'it-pelt-hyena-black',
    name: "txt-it-pelt-hyena-black-name",
    description: "txt-it-pelt-hyena-black",
    debugCategory: 'trophy',
    sprite: 'it_animal_peltsnarfrattle_1.png',
    value: {
      base: 25,
      trader: 50,
      karma: 1,
    },
    maxStack: 10,
    fame: fameVerySmall,
    funds: fundsSmall,
  },

// characters

  {
    id: 'npc-hunter',
    name: "txt-npc-hunter-name",
    title: "txt-npc-hunter-title",
    description: "txt-npc-hunter",
    isNPC: true,
    variations: [
      {gender:'male', name:'westernCharacterMale', sprite:'res_expl_selous.png'},
    ],
    debugCategory: 'NPC'
  },

// statuses

  {
    id: 'st-blackHyena',
    debugCategory: 'Quest',
    title: "txt-st-blackHyena-title",
    description: "txt-st-blackHyena",
    sprite: "res_status_hyena.png",
    important: true,
  },

// events

  {
    id: 'evt-harbor-quest-blackHyena',
    npc: 'npc-hunter',
    text: "txt-evt-harbor-quest-blackHyena",
    report: "txt-evt-harbor-quest-blackHyena-report",
    npcEffects: {
      actions: {
        actionText: "txt-evt-harbor-quest-missionary-action",
        text: "txt-evt-harbor-quest-blackHyena-1",
        report: "txt-evt-harbor-quest-blackHyena-report-1",
        setPartyStatus: {'st-blackHyena':true},
        events: 'evt-harbor-eventSelection',  
      }
    },
    actions: {
      actionText: "txt-evt-angry-demandPayment-action-1",
      text: "txt-evt-harbor-quest-blackHyena-2",
      report: "txt-evt-harbor-quest-blackHyena-report-2",
      events: 'evt-harbor-eventSelection',
    }
  },
  {
    id: 'evt-harbor-quest-blackHyena-complete',
    reqPartyStatus: '+blackHyena', 
    text: "txt-evt-harbor-quest-blackHyena-complete",
    npc: 'npc-hunter',
    setPartyStatus: '-blackHyena',
    npcEffects: {
      actions: {
        incAchievement: "ach-kill-snarfrattle",
        reqItems: {'it-pelt-hyena-black':1},
        alwaysShown: true,
        actionText: "txt-evt-harbor-quest-blackHyena-complete-action",
        text: "txt-evt-harbor-quest-blackHyena-complete-1",
        report: "txt-evt-harbor-quest-blackHyena-complete-report",
        items: {'it-pelt-hyena-black':-1},
        actions: 'evt-harbor-quest-reward',
      }
    },
    actions: {
      actionText: "txt-evt-harbor-quest-schroedinger-complete-action-1",
      text: "txt-evt-harbor-quest-blackHyena-complete-2",
      fame: -fameLarge,
      events: 'evt-harbor-eventSelection',
    }
  }
])