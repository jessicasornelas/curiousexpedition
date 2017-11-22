config.entities.add([

// fixtures

  {
    id: 'fxt-slaver',
    reqWorld: '2..',
    name: "txt-fxt-slaver-name",
    debugColor: '#770057',
    initItems: {'il-trade-slaver':7, 'it-water':20, 'il-metaItems':99},
    sprite: "res_fxt_slaver.png", particle: 'pt-slaver',
    priceTable: 'slaver',
    actions: ['evt-slaver-init'],
    setTile: [
      {ref:'tl-dry'},
    ],
    setNeighbors: [
      {ref:'tl-dry', count:3},
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '-dry | -desert'},
      {ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry | +desert'},
    ],
  },

// Init & Random Slaves

  {
    id: 'evt-slaver-init', 
    reqFixtureFlags: '-slaverKilled',
    actionText: "txt-evt-slaver-init-action",
    select: [
      {
        reqPartyFlags: '-slaverAggro',
        select: 'evt-slaver-enter',
      },
      {
        reqPartyFlags: '+slaverAggro',
        select: 'evt-slaver-aggro',
      },
    ],
  },
  {
    id: 'evt-slaver-enter',
    text: "txt-evt-slaver-enter",
    report: "txt-evt-slaver-enter-report",
    showImage: {src: 'evt_fxt_slaver_1.png', type: 'day'}, npc: [ 'npc-slaver' ],
    select: [
    	{ reqFixtureFlags: '-slotsSet',	select: 'evt-slaver-randomSlaves' },
    	{	reqFixtureFlags: '+slotsSet', select: 'evt-slaver-actions' }
    ],
  },
  {
    id: 'evt-slaver-randomSlaves',
		setFixtureFlags: '+slotsSet',
		partyEvents: [
	   	{
	   		select: [
	   			{setFixtureFlags:'+slot1_warrior'},
	   			{setFixtureFlags:'+slot1_scout'},
	   			{setFixtureFlags:'+slot1_shaman'},
	   			{setFixtureFlags:'+slot1_animalHandler'},
	   		],
	   	},
	   	{
	   		select: [
	   			{setFixtureFlags:'+slot2_warrior'},
	   			{setFixtureFlags:'+slot2_scout'},
	   			{setFixtureFlags:'+slot2_shaman'},
	   			{setFixtureFlags:'+slot2_animalHandler'},
	   		],
	   	},
	   	{
	   		select: [
					{setFixtureFlags:'+slot3_warrior'},
	   			{setFixtureFlags:'+slot3_scout'},
	   			{setFixtureFlags:'+slot3_shaman'},
	   			{setFixtureFlags:'+slot3_animalHandler'},
	   		],
	   	},
	   	{
	   		select: [
	   			{setFixtureFlags:'+slot4_warrior'},
	   			{setFixtureFlags:'+slot4_scout'},
	   			{setFixtureFlags:'+slot4_shaman'},
	   			{setFixtureFlags:'+slot4_animalHandler'},
	   		],
	   	},
		],
    select: 'evt-slaver-actions',
  },

// Actions

  {
    id: 'evt-slaver-actions',
    actions: [
      'evt-slaver-inspectSlaves',
      'evt-slaver-sell-unit',
      'evt-slaver-trade',
      'evt-slaver-attack',
      'evt-leave',
    ]  
  },

// Buying Slaves

  {
  	id: 'evt-slaver-inspectSlaves',
  	actionText: "txt-evt-slaver-inspectSlaves-action",
  	showImage: {src: 'evt_fxt_slaver_1.png', type: 'day'},
  	npc: [ 'npc-slaver' ],
  	text: "txt-evt-slaver-inspectSlaves",
  	partyEvents: [
  		{reqFixtureFlags:'+slot1_warrior', npc: 'pl-native-warrior', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-1", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot1_scout', npc: 'pl-native-scout', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-2", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot1_shaman', npc: 'pl-native-shaman', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-3", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot1_animalHandler', npc: 'pl-native-animalHandler', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-4", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},

  		{reqFixtureFlags:'+slot2_warrior', npc: 'pl-native-warrior', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-1", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot2_scout', npc: 'pl-native-scout', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-2", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot2_shaman', npc: 'pl-native-shaman', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-3", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot2_animalHandler', npc: 'pl-native-animalHandler', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-4", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},

  		{reqFixtureFlags:'+slot3_warrior', npc: 'pl-native-warrior', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-1", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot3_scout', npc: 'pl-native-scout', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-2", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot3_shaman', npc: 'pl-native-shaman', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-3", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot3_animalHandler', npc: 'pl-native-animalHandler', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-4", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},

  		{reqFixtureFlags:'+slot4_warrior', npc: 'pl-native-warrior', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-1", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot4_scout', npc: 'pl-native-scout', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-2", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot4_shaman', npc: 'pl-native-shaman', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-3", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  		{reqFixtureFlags:'+slot4_animalHandler', npc: 'pl-native-animalHandler', optional:true, npcEvents: { actions: { actionText: "txt-evt-slaver-inspectSlaves-action-4", addNPC: true, setCharFlags: '+homeWorld +slave', select:'evt-slaver-slaves-payment' } },},
  	],
  	actions: {
  		actionText: "txt-evt-dismiss-default-action-1",
  		showImage: {src: 'evt_fxt_slaver_1.png', type: 'day'}, npc: [ 'npc-slaver' ],
  		text: "txt-evt-slaver-inspectSlaves-1",
  		select: 'evt-slaver-actions',
  	},
  },
  {
  	id: 'evt-slaver-slaves-payment',
  	text: "txt-evt-slaver-slaves-payment",
  	
  	barter: {
  	  baseValue: {base:25},
  	  close: {
        standing: standingCostSlaverTrade,
  	    text: "txt-evt-slaver-slaves-payment-1",
  	    showImage: {src: 'evt_fxt_slaver_1.png', type: 'day'}, npc: [ 'npc-slaver' ],
  	    report: "txt-evt-slaver-slaves-payment-report",
  	    select: 'evt-slaver-actions',
  	  },
  	  cancel: {
  	  	text: "txt-evt-slaver-slaves-payment-2",
  	  	charEvents: { reqCharFlags:'+slave', removeCharacter:true},
  	  	showImage: {src: 'evt_fxt_slaver_1.png', type: 'day'}, npc: [ 'npc-slaver' ],
  	  	select: 'evt-slaver-actions',
  	  },
  	}, 
  },
  
// Trading

  {
    id: 'evt-slaver-trade',
    actionText: "txt-evt-mission-trade-action",
    select: {
      barter: {
        close: {
          text: "txt-evt-slaver-trade-yes",
          standing: standingCostSlaverTrade,
          select: 'evt-slaver-actions',
        },
        cancel: {
          text: "txt-evt-slaver-trade",
          select:'evt-slaver-actions'
        },
      }
    },
  },

// Selling a Unit
  {
    id: 'evt-slaver-sell-unit',
    actionText:"txt-evt-slaver-sell-unit-action",
    text:"txt-evt-slaver-sell-unit",
    chat: 'cl-slaverySell',
    charEvents: {
      count: 'any', 
      optional: false,
      reqCharFlags: '+humanoid -special', 
      actions: 'evt-slaver-sell-unit-loot'
    },
    actions: {
    	actionText: "txt-evt-dismiss-default-action-1",
    	text: "txt-evt-slaver-sell-unit-1",
    	select: 'evt-slaver-actions',
    },
  },
  {
    id: 'evt-slaver-sell-unit-loot',
    actionText: "txt-evt-slaver-sell-unit-loot-action",
    text:"txt-evt-slaver-sell-unit-loot",
    removeCharacter: true,
    charEvents: { 
      reqCharFlags: '-special +humanoid', 
      chat: 'cl-slaverySell-comment' 
    },
    showImage: {
      src: 'evt_fxt_slaver_1.png', 
      type: 'day'
    }, 
    npc: [ 'npc-slaver' ],
    setCharFlags: '+selling',
    standing: standingCostSlaverTrade,

    barter: {
      baseValue: {base:-30},
      close:  {text: "txt-evt-slaver-sell-unit-loot-1", select: 'evt-slaver-actions'},
      cancel: {text: "txt-evt-slaver-sell-unit-loot-2", select: 'evt-slaver-actions'},
    }, 
  },

// Attack

  {
    id: 'evt-slaver-attack',
    actionText: "txt-evt-slaver-attack-action",
    setPartyFlags: '+slaverAggro',
    setFixtureFlags: '+slaverCombat',
    showImage: {type: 'day', src: 'evt_fxt_slaver_combat.png'},
    combat: [
      {reqWorld:'..4', 'emy-slaver': 1,  'emy-slaver-minion': 2, 'emy-hyena': 1},
      {reqWorld:'5..', 'emy-slaver': 1,  'emy-slaver-minion': 3, 'emy-hyena': 1},
    ],
  },
  {
    id: 'evt-slaver-aggro',
    partyEvents: [
      {
        optional: true, reqFixtureFlags: '+slaverCombat',
        text: "txt-evt-slaver-aggro",
      },
      {
        optional: true, reqFixtureFlags: '-slaverCombat',
        text: "txt-evt-slaver-aggro-1",
      },
    ],
    showImage: {type: 'day', src: 'evt_fxt_slaver_1.png'}, npc: ['npc-slaver'],
    actions: {
      actionText: "txt-evt-cave-ghostsQuest-action",
      select: 'evt-slaver-attack',
    },
  },
  {
    id: 'evt-slaver-combatOutcome',
    showImage: {type: 'day', src: 'evt_fxt_slaver_fire.png'},
    setFixtureFlags: '+slaverKilled',
    text: "txt-evt-slaver-combatOutcome",
    incAchievement: "ach-slave-free",
    select: {
      reqFreePartyCount: 1,
      text: "txt-evt-slaver-combatOutcome-1",
      select: [
        {addCharacter: {id:'pl-native-warrior', setCharFlags: '+homeWorld'}},
        {addCharacter: {id:'pl-native-shaman', setCharFlags: '+homeWorld'}},
        {addCharacter: {id:'pl-native-animalHandler', setCharFlags: '+homeWorld'}},
        {addCharacter: {id:'pl-native-scout', setCharFlags: '+homeWorld'}},
      ],
    },
    standing: +5,
    startSprawl: {ref:'spr-fire', radius:1, power:6},
    actions: 'evt-leave',
  },
 ])
