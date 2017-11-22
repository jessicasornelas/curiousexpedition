config.entities.add([

// statuses (sicknesses)

  {
    id: 'st-malaria',
    debugCategory: 'sickness',
    title: "txt-st-malaria-title",
    description: "txt-st-malaria",
    sprite: "res_status_fever.png",
    flags: '+ailment +affliction',
    important: true,
    autoRemove: true,
    bonus: {tripCost: +0.25, healthRegen: -0.5},
    dayEvents: [
      {reqAge: '51..', setCharFlags:'+sickDeath', select:'evt-sickDeath'}
    ]
  },
  {
    id: 'st-jungleFever',
    debugCategory: 'sickness',
    title: "txt-st-jungleFever-title",
    description: "txt-st-jungleFever",
    sprite: "res_status_diarrea.png",
    flags: '+ailment +affliction',
    important: true,
    autoRemove: true,
    bonus: {healthRegen: -0.75},
    dayEvents: [
      {reqAge: '40..', 
        reqCharFlags: '-feverSpread', 
        setCharFlags: '+feverSpread',
        charEvents: {
          reqStatus: '-jungleFever',
          reqCharFlags: '+humanoid', 
          setStatus: '+jungleFever', 
        }
      }
    ],
  },
  {
    id: 'st-minorPoisoning',
    debugCategory: 'sickness',
    title: "txt-st-minorPoisoning-title",
    description: "txt-st-minorPoisoning",
    sprite: "res_status_nausea.png",
    flags: '+ailment +affliction',
    autoRemove: true,
    important: true,
    bonus: {tripCost: +0.15, healthRegen: -0.2},
    buffDays: '10',
    buffEndEvents: {chat: 'cl-feelingBetter'}
  },
  {
    id: 'st-sprained',
    title: "txt-st-sprained-title",
    debugCategory: 'ailment',
    important: true,
    autoRemove: true,
    sprite: 'res_status_sprained.png',
    flags: '+ailment',
    bonus: {capacity:-1},
    buffDays: '25..35',
    buffEndEvents: {chat: 'cl-feelingBetter'}
  },
  {
    id: 'st-hearingLoss',
    title: "txt-st-hearingLoss-title",
    debugCategory: 'ailment',
    important: true,
    autoRemove: true,
    sprite: 'res_status_hearingLoss.png',
    flags: '+ailment',
    bonus: {combatRoll:-1},
    buffDays: '35..50',
    buffEndEvents: {chat: 'cl-feelingBetter'}
  },
  {
    id: 'st-viewingLoss',
    title: "txt-st-viewingLoss-title",
    sprite: 'res_status_viewingLoss.png',
    flags: '+ailment',
    important: true,
    autoRemove: true,
    bonus: {viewDist:-0.4},
    buffDays: '35..50',
    buffEndEvents: {chat: 'cl-feelingBetter'},
    debugCategory: 'ailment',
  },
  {
    id: 'st-pneumonia',
    title: "txt-st-pneumonia-title",
    description: "txt-st-pneumonia",
    sprite: 'res_status_pneumonia.png',
    flags: '+ailment',
    important: true,
    bonus: {health: -5},
    buffDays: '30..60',
    buffEndEvents: {chat: 'cl-feelingBetter'},
    autoRemove: true,
    debugCategory: 'ailment',
  },
  {
    id: 'st-jungleRot',
    title: "txt-st-jungleRot-title",
    description: "txt-st-jungleRot",
    sprite: "res_status_fever.png",
    flags: '+ailment +affliction',
    important: true,
    autoRemove: true,
    buffDays: '10..20',
    dayEvents: [
      {slots:2}, 
      {slots:1, health:-1, chat:'cl-notFeelingWell', reqWaiting:false},
    ],
    buffEndEvents: {chat: 'cl-feelingBetter'},
    debugCategory: 'ailment',
  },
  {
    id: 'st-scurvy',
    title: "txt-st-scurvy-title",
    description: "txt-st-scurvy",
    flags: '+ailment',
    sprite: "res_status_scurvy.png",
    important: true,
    autoRemove: true,
    bonus: {infection: +0.3},
    dayEvents: [
      {slots:5}, 
      {slots:1, health:-1, chat:'cl-notFeelingWell', reqWaiting:false},
    ],
    debugCategory: 'sickness',
  },
  {
    id: 'st-rabies',
    title: "txt-st-rabies-title",
    description: "txt-st-rabies",
    debugCategory: 'sickness',
    sprite: "res_status_rabies.png",
    autoRemove: true,
    important: true,
    dayEvents: [
      {prio:0, reqAge:'50..', setCharFlags:'+sickDeath', select:'evt-sickDeath'},
      {prio:1, reqAge:'20..', select:'evt-rabies-attack', resetAge:true},
      {prio:1, reqAge:'20..', slots:10},
    ],
  },
  {
    id: 'evt-rabies-attack',
    charEvents: [
      {
        reqStatus: '+rabies',
        text: "txt-evt-rabies-attack"
      },
      {
        reqCharFlags: '+humanoid -special | +mammal -special',
        reqStatus: '-rabies',
        text: "txt-evt-rabies-attack-1",
        setStatus: '+rabies'
      }
    ]
  },

// events

  {
    id: 'evt-sickDeath',
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    charEvents: {
      reqCharFlags: '+sickDeath',
      text: "txt-evt-sickDeath",
      removeCharacter: true,
      report: "txt-evt-sickDeath-report",
    },
    actions: 'evt-leave',
  },
  {
    id: 'evt-applySickness',
    select: [
      {
        slots: 4,
        charEvents: {
          reqCharFlags: '+humanoid -special',
          reqStatus: '-malaria', 
          setStatus: '+malaria', 
          chat: 'cl-mosquitos',
          removeZone: true
        }
      },
      {
        slots: 1,
        charEvents: {
          reqCharFlags: '+humanoid -special',
          reqStatus: '-jungleFever', 
          setStatus: '+jungleFever', 
          chat: 'cl-mosquitos',
          removeZone: true
        }
      }
    ]
  },

// zones

  {
    id: 'zn-mosquito',
    name: "txt-zn-mosquito-name",
    tileFlags: '+swamp',
    particle: 'pt-mosquitos',
    sprite: 'res_zone_mosquitos.png',
    canAttack: false,
    eventChance: 1.0,
    showOutline: false,
    stopTravel: false,
    events: 'evt-applySickness'
  },

// chats

  {
    id: 'cl-mosquitos',
    lines: {text: 'txt-cl-mosquitos'}
  },
  {
    id: 'cl-fever',
    lines: {text: 'txt-cl-fever'}
  },
  {
    id: 'cl-notFeelingWell',
    lines: {text: 'txt-cl-notFeelingWell'}
  },
  {
    id: 'cl-feelingBetter',
    lines: {text: 'txt-cl-feelingBetter'}
  }
])