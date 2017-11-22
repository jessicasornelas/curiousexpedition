config.entities.add([

// events

  {
    id: 'evt-hotAirBalloon-explore',
    showImage: {src: 'evt_fxt_balloon_1.png', type: 'day'},
    actionText: "txt-evt-hotAirBalloon-explore-action",
    select: [
      {prio:0, ref:'evt-hotAirBalloon-warped'},
      {prio:1, ref:'evt-hotAirBalloon-access'},
      {prio:2, ref:'evt-hotAirBalloon-fail'}
    ]
  },
  {
    id: 'evt-hotAirBalloon-warped',
    reqBiomeFlags: '+warped',
    text: "txt-evt-hotAirBalloon-warped",
  },
  {
    id: 'evt-hotAirBalloon-fail',
    text: "txt-evt-hotAirBalloon-fail",
  },
  {
    id: 'evt-hotAirBalloon-access',
    text: "txt-evt-hotAirBalloon-access",
    report: "txt-evt-hotAirBalloon-access-report",
    charEvents: {
      count:2, reqCharFlags:'+humanoid'
    },
    actions: [
      'evt-hotAirBalloon-stash', 
      'evt-hotAirBalloon-makeRoom',
      'evt-hotAirBalloon-abort-leave',
    ]
  },
  {
    id: 'evt-hotAirBalloon-makeRoom',
    actionText: "txt-evt-hotAirBalloon-makeRoom-action",
    reqPartyCount:'2..',
    text: "txt-evt-hotAirBalloon-makeRoom",
    chat: 'cl-hotAirBalloon-makeRoom',
    charEvents: {
      optional:true,
      reqCharFlags: '-special -abomination',
      reqStatus: '-zeroSlot',
      count:'any',
      actions: {
        actionText: "txt-evt-harbor-countTrek-action",
        text: "txt-evt-hotAirBalloon-makeRoom-1",
        report: "txt-evt-hotAirBalloon-makeRoom-report", 
        removeCharacter: true,
        select: 'evt-hotAirBalloon-access',
      },
    },
    actions: {
      actionText: "txt-evt-hotAirBalloon-makeRoom-action-1",
      select: 'evt-hotAirBalloon-access',
    }
  },
  {
    id: 'evt-hotAirBalloon-stash',
    actionText: "txt-evt-hotAirBalloon-stash-action",
    select: [
      {
        reqFreePartyCount:'-10..0',
        escape: {
          title: "txt-evt-hotAirBalloon-stash-title",
          slots: 2,
          close: 'evt-hotAirBalloon-takeOff',
          cancel: 'evt-hotAirBalloon-abort'
        },
      },
      {
        reqFreePartyCount:'1',
        escape: {
          title: "txt-evt-hotAirBalloon-stash-title",
          slots: 3,
          close: 'evt-hotAirBalloon-takeOff',
          cancel: 'evt-hotAirBalloon-abort'
        },
      },
      {
        reqFreePartyCount:'2',
        escape: {
          title: "txt-evt-hotAirBalloon-stash-title",
          slots: 4,
          close: 'evt-hotAirBalloon-takeOff',
          cancel: 'evt-hotAirBalloon-abort'
        },
      },
      {
        reqFreePartyCount:'3',
        escape: {
          title: "txt-evt-hotAirBalloon-stash-title",
          slots: 5,
          close: 'evt-hotAirBalloon-takeOff',
          cancel: 'evt-hotAirBalloon-abort'
        },
      },
      {
        reqFreePartyCount:'4..',
        escape: {
          title: "txt-evt-hotAirBalloon-stash-title",
          slots: 6,
          close: 'evt-hotAirBalloon-takeOff',
          cancel: 'evt-hotAirBalloon-abort'
        },
      },
    ],
  },
  {
    id: 'evt-hotAirBalloon-abort',
    actionText: "txt-evt-hotAirBalloon-abort-action",
    text: "txt-evt-hotAirBalloon-abort",
    select: 'evt-hotAirBalloon-access',
  },
  {
    id: 'evt-hotAirBalloon-abort-leave',
    setPartyFlags: "+abortedExpedition",
    actionText: "txt-evt-hotAirBalloon-abort-action",
    text: "txt-evt-hotAirBalloon-abort-leave",
  },
  {
    id: 'evt-hotAirBalloon-takeOff',
    actionText: "txt-evt-hotAirBalloon-takeOff-action",
    text: "txt-evt-hotAirBalloon-takeOff",
    report: "txt-evt-hotAirBalloon-takeOff-report",
    incAchievement: "ach-hot-air-balloon",
    charEvents: [
      {
        optional: true,
        reqCharFlags: '+homeWorld',
        reqLoyalty: '..2',
        reqStatus: '+homesick',
        text: "txt-evt-hotAirBalloon-takeOff-1",
        report: "txt-evt-hotAirBalloon-takeOff-report-1",
        removeCharacter: true
      },
      {
        optional: true,
        reqCharFlags: '+homeWorld',
        reqStatus: '+homesick',
        reqLoyalty: '3..',
        setStatus: '-homesick',
        text: "txt-evt-hotAirBalloon-takeOff-2", // TODO: handle in the same way as pyramid
        setCharFlags: '-homeWorld',
      },
    ],
    actions: {
      endWorld: {goalFame:false}
    },
  }
])