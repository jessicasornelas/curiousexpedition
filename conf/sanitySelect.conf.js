config.entities.add([

  {
    id: 'evt-sanity-select', // triggered when resting
    partyEvents: { ref: 'evt-setImage-nightCamp'},
    select: [
      {
        reqSanity: '0',
        playMusic: 'thm_nature_night_campfire_dark_2',
        select: 'evt-sanity-selectLow'
      },
      {
        reqSanity: '1..29',
        playMusic: 'thm_nature_night_campfire',
        select: 'evt-sanity-selectLow'
      },
      {
        reqSanity: '30..69',
        playMusic: 'thm_nature_night_campfire',
        select: 'evt-sanity-selectMedium'
      },
      {
        reqSanity: '70..',
        playMusic: 'thm_nature_night_campfire',
        select: 'evt-sanity-selectHigh'
      },
    ]
  },
  {
    id: 'evt-noSanity-select', // triggered when traveling
    partyEvents: { ref: 'evt-setImage-nightCamp' },
    playMusic: 'thm_nature_night_campfire_dark_2',
    select: [
      {slots: 4, ref:'evt-sanity-selectZero'},
      {slots: 1, ref:'evt-sanity-selectLow'}
    ]
  },
  {
    id: 'evt-sanity-return',
    partyEvents:[
      {
        optional: true,
        reqPartyFlags: '+natureSleep',
        select: 'evt-nature-sleep'
      }
    ]
  },

  {
    // drastic negative outcomes (don't have to offer choice)
    id: 'evt-sanity-selectZero',
    chat: 'cl-noSanity',
    select: [
      {prio: 1, slots: 5, ref: 'evt-noSanity-injuredDeath'},
      {prio: 1, slots: 5, ref: 'evt-noSanity-paranoidKill'},
      {prio: 1, slots: 5, ref: 'evt-noSanity-gunKill'},
      {prio: 1, slots: 5, ref: 'evt-noSanity-racist'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-eatAnimal'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-cannibal'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-trap'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-dropItems'},

      {prio: 1, slots: 4, ref: 'evt-noSanity-jungle-crushed'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-animalAttack'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-animalRabies'},
      {prio: 1, slots: 4, ref: 'evt-noSanity-dinoAttack'},
      {prio: 1, slots: 1, ref: 'evt-noSanity-disappearCube'},
      {prio: 1, slots: 1, ref: 'evt-noSanity-poisonAnimal'},
      {prio: 1, slots: 1, ref: 'evt-noSanity-abominationCurse'},

      {prio: 1, slots: 1, ref: 'evt-noSanity-desert-quicksand'},
      {prio: 1, slots: 1, ref: 'evt-noSanity-arctic-hypothermia'},
      {prio: 1, slots: 1, ref: 'evt-noSanity-arctic-water'},

      {prio: 2, slots: 3, ref: 'evt-noSanity-eatOnlyFriend'},
      {prio: 2, slots: 2, ref: 'evt-noSanity-onlyFriend'},
      {prio: 4, slots: 1, ref: 'evt-noSanity-lastEntryCannibal'},
      {prio: 5, slots: 1, ref: 'evt-noSanity-loneSurvivor'},
      {prio: 6, slots: 1, ref: 'evt-noSanity-ghosts-help'},
      {prio: 7, slots: 1, ref: 'evt-noSanity-lastEntry'},

      {prio: 100, ref: 'evt-sanity-selectLow'} // fall through
    ]
  },
  {
    // small negative outcome (should offer choice what kind)
    // conflicts lower the loyalty of a trek member
    id: 'evt-sanity-selectLow',       
    select: [
      {slots: 8, ref: 'evt-sanity-conflict-racist'},
      {slots: 8, ref: 'evt-sanity-conflict-sexistMale'},
      {slots: 8, ref: 'evt-sanity-conflict-sexistFemale'},
      {slots: 5, ref: 'evt-sanity-conflict-joking'},
      {slots: 4, ref: 'evt-sanity-conflict-rally'},
      {slots: 4, ref: 'evt-sanity-conflict-lostPersonalItem'},
      {slots: 5, ref: 'evt-sanity-conflict-single'},
      {slots: 5, ref: 'evt-sanity-conflict-queen'},
      {slots: 5, ref: 'evt-sanity-conflict-badStanding'},
      {slots: 5, ref: 'evt-sanity-conflict-angry'},

      // {slots: 5, ref: 'evt-sanity-conflict-traitor1'},
      // {slots: 5, ref: 'evt-sanity-conflict-traitor2'},
      // {slots: 1, ref: 'evt-sanity-nativeGhosts'},

      {slots: 2, ref: 'evt-sanity-return-nativeCurse'},

      {slots: 5, ref: 'evt-sanity-goodStanding-nativeVisit'},
      {slots: 5, ref: 'evt-sanity-goodStanding-nativeTeleport'},

      {slots: 9, ref: 'evt-noSanity-soldierHelp'},
      {slots: 6, ref: 'evt-noSanity-ghosts-help'},

      {slots: 5, ref: 'evt-sanity-timAlone'},
      {slots: 4, ref: 'evt-sanity-lovecraft-racist'},
      {slots: 2, ref: 'evt-sanity-nightmare'},
      {slots: 2, ref: 'evt-sanity-jungleRot'},

      {slots: 2, ref: 'evt-sanity-apply-paranoid'},
      {slots: 2, ref: 'evt-sanity-apply-claustrophobic'},
      {slots: 2, ref: 'evt-sanity-apply-lepidopterophobia'},
      {slots: 2, ref: 'evt-sanity-apply-acrophobia'},
      {slots: 2, ref: 'evt-sanity-apply-dendrophobia'},
      {slots: 2, ref: 'evt-sanity-apply-kleptomania'},
      {slots: 2, ref: 'evt-sanity-apply-pyromaniac'},
      {slots: 2, ref: 'evt-sanity-apply-bipolar'},
      {slots: 2, ref: 'evt-sanity-apply-sprained'},
      {slots: 2, ref: 'evt-sanity-apply-scurvy'},
      {slots: 2, ref: 'evt-sanity-apply-hearingLoss'},
      {slots: 2, ref: 'evt-sanity-apply-viewingLoss'},
      {slots: 2, ref: 'evt-sanity-apply-hallucinations'},
      {slots: 2, ref: 'evt-sanity-apply-pneumonia'},

      {slots: 1, ref: 'evt-sanity-flavor-lowSanity'},
      {slots: 3, ref: 'evt-sanity-kleptomania-stealItem'},
      {slots: 3, ref: 'evt-sanity-kleptomania-conflict'},

      {slots: 6, ref: 'evt-sanity-alcohol'},
      {slots: 6, ref: 'evt-sanity-paranoid-racist'},
      {slots: 6, ref: 'evt-sanity-fight'},
      {slots: 5, ref: 'evt-sanity-cannibal'},

      {slots: 4, ref: 'evt-sanity-mummy'},
      {slots: 3, ref: 'evt-sanity-paranoid'},
      {slots: 5, ref: 'evt-sanity-cultist-injureSelf'},
      {slots: 2, ref: 'evt-sanity-cultist-leaveForMission'},

      {slots: 4, ref: 'evt-sanity-arctic-frostbite'},
      {slots: 2, ref: 'evt-sanity-faithLost'},

      {prio: 100, ref: 'evt-sanity-selectMedium'} // fall through
    ],
  },
  {
    // optional challenges for the player that can be ignored without harm
    // or neutral flavor event
    id: 'evt-sanity-selectMedium',
    select: [
      {slots: 3, ref: 'evt-sanity-return-imaginary'},
      {slots: 3, ref: 'evt-sanity-return-angryLeave'},
      {slots: 2, ref: 'evt-sanity-return-friend'},

      {slots: 1, ref: 'evt-sanity-nativeVisit-init'},
      {slots: 2, ref: 'evt-sanity-vulture'},
      {slots: 2, ref: 'evt-sanity-alcoholic-turkey'},

      {slots: 1, ref: 'evt-sanity-challenge-climbTree'},
      {slots: 1, ref: 'evt-sanity-challenge-strength'},
      {slots: 1, ref: 'evt-sanity-challenge-mind'},

      {slots: 4, ref: 'evt-sanity-mummy'},
      {slots: 1, ref: 'evt-sanity-nativeGhosts'},
      {slots: 1, ref: 'evt-sanity-helpNative-1'},
      {slots: 1, ref: 'evt-sanity-helpNative-2'},

      {slots: 2, ref: 'evt-sanity-flavor-imaginary'},
      {slots: 2, ref: 'evt-sanity-flavor-memory-nightmare'},
      {slots: 2, ref: 'evt-sanity-flavor-drums'},
      {slots: 2, ref: 'evt-sanity-flavor-history'},
      {slots: 2, ref: 'evt-sanity-flavor-cook'},
      {slots: 4, ref: 'evt-sanity-flavor-missionary'},
      {slots: 2, ref: 'evt-sanity-flavor-childhood'},
      {slots: 2, ref: 'evt-sanity-flavor-temples'},
      {slots: 2, ref: 'evt-sanity-flavor-magneticMountains'},
      {slots: 2, ref: 'evt-sanity-flavor-patternMatching'},
      {slots: 2, ref: 'evt-sanity-flavor-stoneOverhang'},
      {slots: 2, ref: 'evt-sanity-flavor-waterfall'},
      {slots: 2, ref: 'evt-sanity-flavor-lastExpedition'},
      {slots: 1, ref: 'evt-sanity-flavor-romance'},
      {slots: 2, ref: 'evt-sanity-flavor-gorillas'},
      {slots: 2, ref: 'evt-sanity-flavor-desert'},
      {slots: 2, ref: 'evt-sanity-flavor-homeworld'},
      {slots: 2, ref: 'evt-sanity-flavor-mountainFace'},
      {slots: 2, ref: 'evt-sanity-flavor-sticks'},
      {slots: 2, ref: 'evt-sanity-flavor-angry'},

      {slots: 2, ref: 'evt-sanity-flavor-arctic-snowBlind'},

      {slots: 2, ref: 'evt-sanity-flavor-tesla'},
      {slots: 1, ref: 'evt-sanity-lovecraft-racist'},

      // flavor waterfall
      // flavor hot springs

      {prio: 100, ref: 'evt-sanity-selectHigh'} // fall through
    ]
  },
  {
    // should leave player in a better state
    // should not just give out sanity, as player might have full sanity
    id: 'evt-sanity-selectHigh',
    select: [
      {slots: 1, ref: 'evt-sanity-positive-flavor-camp'},
      {slots: 3, ref: 'evt-sanity-positive-flavor-diary'},
      
      {slots: 3, ref: 'evt-sanity-positive-native'},
      {slots: 3, ref: 'evt-sanity-positive-memory'},
      {slots: 3, ref: 'evt-sanity-positive-playing'},
      {slots: 3, ref: 'evt-sanity-positive-acknowledge'},
      {slots: 5, ref: 'evt-sanity-positive-nativeScout'},
      {slots: 5, ref: 'evt-sanity-positive-cook'},
      {slots: 3, ref: 'evt-sanity-positive-translator'},
      {slots: 5, ref: 'evt-sanity-positive-nativeWarrior'},
      {slots: 5, ref: 'evt-sanity-positive-nativeShaman'},
      {slots: 5, ref: 'evt-sanity-positive-trader'},
      {slots: 5, ref: 'evt-sanity-positive-sailor'},
      {slots: 5, ref: 'evt-sanity-positive-missionary'},
      {slots: 5, ref: 'evt-sanity-positive-soldierBritish'},
      {slots: 5, ref: 'evt-sanity-positive-animalHandler'},
      {slots: 1, ref: 'evt-sanity-positive-fame-stars'},
      {slots: 1, ref: 'evt-sanity-positive-faithRegained'},
      {slots: 1, ref: 'evt-sanity-positive-notRacist'},
      {slots: 1, ref: 'evt-sanity-positive-goodStanding'},
      
      {slots: 3, ref: 'evt-sanity-alcoholic-turkey'},

      {slots: 5, ref: 'evt-sanity-mummy'},
      {slots: 1, ref: 'evt-sanity-nativeGhosts'},
      {slots: 1, ref: 'evt-sanity-nativeBond'},

      // todo: one positive event per character type
      // - 2 natives in trek
      // - native animal handler
      // - soldier british/scottish
      // - cultist
      // - artist
      // - bedouin
      // - tim/sterling/louis
    ]
  },

])