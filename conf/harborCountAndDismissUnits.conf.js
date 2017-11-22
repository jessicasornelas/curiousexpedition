config.entities.add([

  // Count Units

  {
    id: 'evt-harbor-countTrek',
    select: [
      {
        reqFreePartyCount: '..-1',
        text: "txt-evt-harbor-countTrek",
        showPartyCount: true,
        charEvents: [
          {
            count: 'any',
            optional: true,
            reqCharFlags: '-special -abomination +humanoid',
            actions: {
              actionText: "txt-evt-harbor-countTrek-action",
              removeCharacter: true,
              text: "txt-evt-harbor-countTrek-1",
              select: 'evt-harbor-eventSelection',
            },
          },
          {
            count: 'any',
            reqCharFlags: '-special -humanoid',
            optional: true,
            actions: {
              actionText: "txt-evt-harbor-countTrek-action",
              removeCharacter: true,
              text: "txt-evt-harbor-countTrek-2",
              select: 'evt-harbor-eventSelection',
            },
          },
        ],
      },
      {
        prio: 1,
        setPartyFlags: '+harborCheck_UnitCount',
        select: 'evt-harbor-eventSelection',
      },
    ],    
  },

  // Dismiss Units

  {
    id: 'evt-harbor-dismissUnit',
    actionText: "txt-evt-harbor-dismissUnit-action",
    text: "txt-evt-harbor-dismissUnit",
    charEvents: [
      {
        count: 'any',
        optional: true,
        reqCharFlags: '-special -abomination +humanoid',
        actions: {
          actionText: "txt-evt-harbor-countTrek-action",
          removeCharacter: true,
          text: "txt-evt-harbor-dismissUnit-1",
          select: 'evt-harbor-eventSelection',
        },
      },
      {
        count: 'any',
        reqCharFlags: '-special -humanoid',
        optional: true,
        actions: {
          actionText: "txt-evt-harbor-countTrek-action",
          removeCharacter: true,
          text: "txt-evt-harbor-dismissUnit-2",
          select: 'evt-harbor-eventSelection',
        },
      },
    ],
    actions: {
      actionText: "txt-evt-harbor-dismissUnit-action-1",
      select: 'evt-harbor-eventSelection',
    },
  },

])