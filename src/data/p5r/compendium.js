// derived from https://github.com/chinhodado/persona5_calculator/blob/master/data/PersonaDataRoyal.js
const compendium = {
  Abaddon: {
    inherits: 'Curse',
    item: {
      name: 'Megaton Raid Belt',
      type: 'Item'
    },
    level: 75,
    arcana: 'Judgement',
    skills: {
      Mabufudyne: 0,
      'Megaton Raid': 0,
      'Enduring Soul': 0,
      'Flash Bomb': 78,
      'Ailment Boost': 79,
      'Absorb Phys': 80,
      Gigantomachia: 81
    },
    stats: {
      st: 51,
      ma: 42,
      en: 58,
      ag: 38,
      lu: 43
    },
    trait: 'Mouth of Savoring',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'God\'s Hand Belt',
      type: 'Item'
    },
    affinities: {
      physical: 'ab',
      gun: 'ab',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'ab'
    },
    name: 'Abaddon'
  },
  Agathion: {
    inherits: 'Electric',
    item: {
      name: 'Zio',
      type: 'Skill Card'
    },
    level: 3,
    arcana: 'Chariot',
    skills: {
      Dia: 0,
      Baisudi: 0,
      Lunge: 4,
      Rakukaja: 6,
      Zio: 7,
      'Dodge Elec': 8
    },
    stats: {
      st: 3,
      ma: 4,
      en: 5,
      ag: 7,
      lu: 3
    },
    trait: 'Rare Antibody',
    area: 'Aiyatsbus',
    floor: 'L1',
    alarmItem: {
      name: 'Mazio',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Agathion'
  },
  Alice: {
    special: true,
    inherits: 'Curse',
    item: {
      name: 'Spiral Hell Ring',
      type: 'Item'
    },
    level: 83,
    arcana: 'Death',
    skills: {
      Mamudoon: 0,
      'Mudo Boost': 0,
      Maeigaon: 0,
      'Die For Me!': 85,
      Megidolaon: 86,
      Concentrate: 87,
      'Survival Trick': 88
    },
    stats: {
      st: 45,
      ma: 61,
      en: 49,
      ag: 54,
      lu: 47
    },
    trait: 'Just Die',
    max: true,
    alarmItem: {
      name: 'Cursed Ribbon',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: 'rs',
      bless: 'wk',
      curse: 'rp'
    },
    name: 'Alice'
  },
  Alilat: {
    inherits: 'Ice',
    item: {
      name: 'Mabufudyne',
      type: 'Skill Card'
    },
    level: 81,
    arcana: 'Empress',
    skills: {
      'Diamond Dust': 0,
      Marakukaja: 0,
      'Freeze Boost': 0,
      Mabufudyne: 82,
      Concentrate: 83,
      'Auto-Maraku': 85,
      'Ice Amp': 86,
      'Ice Age': 87
    },
    stats: {
      st: 45,
      ma: 54,
      en: 57,
      ag: 49,
      lu: 45
    },
    trait: 'Frigid Bloodline',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Diamond Dust',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rp',
      gun: 'rp',
      fire: 'wk',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: 'nu',
      nuclear: '-',
      bless: '-',
      curse: 'wk'
    },
    name: 'Alilat'
  },
  'Ame-no-Uzume': {
    inherits: 'Almighty',
    item: {
      name: 'Senryou Yakusha',
      type: 'Item'
    },
    level: 13,
    arcana: 'Lovers',
    skills: {
      Mazio: 0,
      Magaru: 0,
      Media: 0,
      'Nocturnal Flash': 15,
      Baisudi: 16,
      'Divine Grace': 18
    },
    stats: {
      st: 7,
      ma: 10,
      en: 9,
      ag: 11,
      lu: 9
    },
    trait: 'Electric Bloodline',
    area: 'Chemdah',
    floor: 'L6 & 7',
    alarmItem: {
      name: 'Senryou Yakusha R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Ame-no-Uzume'
  },
  Ananta: {
    inherits: 'Nuclear',
    item: {
      name: 'Spiral Nuclear Ring',
      type: 'Item'
    },
    level: 44,
    arcana: 'Councillor',
    skills: {
      Mafreila: 0,
      'Defense Master': 0,
      'Elec Wall': 0,
      'Abysmal Surge': 46,
      'Growth 2': 47,
      Marakukaja: 48,
      Freidyne: 49,
      'Nuke Boost': 50
    },
    stats: {
      st: 26,
      ma: 30,
      en: 31,
      ag: 27,
      lu: 25
    },
    trait: 'Atomic Bloodline',
    alarmItem: {
      name: 'Reactor Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Ananta'
  },
  Andras: {
    inherits: 'Ice',
    item: {
      name: 'Evil Touch',
      type: 'Skill Card'
    },
    level: 27,
    arcana: 'Devil',
    skills: {
      'Foul Breath': 0,
      'Terror Claw': 0,
      'Evil Touch': 28,
      'Fear Boost': 29,
      Rakunda: 31,
      'Ghastly Wail': 32
    },
    stats: {
      st: 15,
      ma: 19,
      en: 19,
      ag: 21,
      lu: 14
    },
    trait: 'Foul Odor',
    area: 'Akzeriyyuth',
    floor: '???',
    alarmItem: {
      name: 'Evil Smile',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Andras'
  },
  Angel: {
    inherits: 'Bless',
    item: {
      name: 'Kouha',
      type: 'Skill Card'
    },
    level: 9,
    arcana: 'Justice',
    skills: {
      Kouha: 0,
      Makajam: 0,
      Dia: 0,
      Baisudi: 10,
      'Dodge Curse': 11,
      Dekunda: 12
    },
    stats: {
      st: 6,
      ma: 9,
      en: 5,
      ag: 9,
      lu: 5
    },
    trait: 'Skillful Combo',
    area: 'Aiyatsbus / Kaitul',
    floor: 'L5 & 6 / L1-4',
    alarmItem: {
      name: 'Makouha',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Angel'
  },
  Anubis: {
    inherits: 'Almighty',
    item: {
      name: 'Makouga',
      type: 'Skill Card'
    },
    level: 34,
    arcana: 'Judgement',
    skills: {
      Hamaon: 0,
      Mudoon: 0,
      Makouga: 0,
      Maeiga: 36,
      Dekunda: 37,
      'Resist Bless': 38
    },
    stats: {
      st: 19,
      ma: 24,
      en: 22,
      ag: 21,
      lu: 23
    },
    trait: 'Deathly Illness',
    area: 'Akzeriyyuth',
    floor: 'L10 & 11',
    alarmItem: {
      name: 'Kougaon',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Anubis'
  },
  Anzu: {
    inherits: 'Wind',
    item: {
      name: 'Garula',
      type: 'Skill Card'
    },
    level: 25,
    arcana: 'Hierophant',
    skills: {
      Garula: 0,
      Masukukaja: 0,
      'Wind Break': 0,
      'Assault Dive': 27,
      Dekaja: 28,
      'Null Forget': 29
    },
    stats: {
      st: 14,
      ma: 18,
      en: 15,
      ag: 21,
      lu: 14
    },
    trait: 'Wind Bloodline',
    area: 'Akzeriyyuth',
    floor: 'L1-3, 5-7, 9-11',
    alarmItem: {
      name: 'Magarula',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'rp',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Anzu'
  },
  Apsaras: {
    inherits: 'Ice',
    item: {
      name: 'Media',
      type: 'Skill Card'
    },
    level: 11,
    arcana: 'Priestess',
    skills: {
      Rebellion: 0,
      'Ice Wall': 0,
      Bufu: 0,
      Media: 13,
      'Elec Wall': 14,
      'Wind Wall': 16
    },
    stats: {
      st: 7,
      ma: 11,
      en: 6,
      ag: 10,
      lu: 6
    },
    trait: 'Internal Hypnosis',
    area: 'Chemdah',
    floor: 'L1-4',
    alarmItem: {
      name: 'Diarama',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Apsaras'
  },
  'Ara Mitama': {
    inherits: 'Nuclear',
    item: {
      name: 'Nuclear Ring',
      type: 'Item'
    },
    level: 30,
    arcana: 'Chariot',
    skills: {
      'Miracle Punch': 0,
      Freila: 0,
      Taunt: 0,
      Rebellion: 31,
      Marakunda: 32,
      'Rage Boost': 34,
      Matarukaja: 35
    },
    stats: {
      st: 20,
      ma: 18,
      en: 20,
      ag: 20,
      lu: 19
    },
    trait: 'Atomic Bloodline',
    alarmItem: {
      name: 'Spiral Nuclear Ring',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Ara Mitama'
  },
  Arahabaki: {
    inherits: 'Ailment',
    item: {
      name: 'Tapsuan',
      type: 'Item'
    },
    level: 35,
    arcana: 'Hermit',
    skills: {
      Makarakarn: 0,
      'Abysmal Surge': 0,
      'Null Brainwash': 0,
      'Spirit Drain': 37,
      'Flash Bomb': 38,
      'Defense Master': 39
    },
    stats: {
      st: 21,
      ma: 23,
      en: 22,
      ag: 24,
      lu: 22
    },
    trait: 'Immunity',
    area: 'Adyeshach',
    floor: 'L1-4, 6-8, 10',
    alarmItem: {
      name: 'Fine Tapsuan',
      type: 'Item'
    },
    affinities: {
      physical: 'rp',
      gun: 'rp',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'wk',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Arahabaki'
  },
  Archangel: {
    inherits: 'Bless',
    item: {
      name: 'Hama',
      type: 'Skill Card'
    },
    level: 14,
    arcana: 'Justice',
    skills: {
      'Giant Slice': 0,
      Dazzler: 0,
      Hama: 0,
      Rebellion: 16,
      'Power Slash': 17,
      'Vajra Blast': 19
    },
    stats: {
      st: 11,
      ma: 9,
      en: 10,
      ag: 12,
      lu: 7
    },
    trait: 'Skillful Combo',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    alarmItem: {
      name: 'Mahama',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Archangel'
  },
  Ardha: {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Sahasrara',
      type: 'Item'
    },
    level: 84,
    arcana: 'Temperance',
    skills: {
      'God\'s Hand': 0,
      'Cosmic Flare': 0,
      'Invigorate 3': 0,
      Agneyastra: 87,
      'Auto-Masuku': 88,
      'Fortified Moxy': 89,
      Salvation: 90
    },
    stats: {
      st: 54,
      ma: 56,
      en: 55,
      ag: 54,
      lu: 40
    },
    trait: 'Naranari',
    max: true,
    alarmItem: {
      name: 'Sahasrara EX',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Ardha'
  },
  Arsene: {
    inherits: 'Curse',
    item: {
      name: 'Arsene\'s Cane',
      type: 'Item'
    },
    level: 1,
    arcana: 'Fool',
    skills: {
      Eiha: 0,
      Cleave: 2,
      Sukunda: 4,
      'Dream Needle': 5,
      'Adverse Resolve': 7
    },
    stats: {
      st: 2,
      ma: 2,
      en: 2,
      ag: 3,
      lu: 1
    },
    trait: 'Pinch Anchor',
    alarmItem: {
      name: 'The Great Thief Stick',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rs'
    },
    name: 'Arsene'
  },
  Asura: {
    special: true,
    inherits: 'Nuclear',
    item: {
      name: 'Vajra',
      type: 'Item'
    },
    level: 76,
    arcana: 'Sun',
    skills: {
      'Atomic Flare': 0,
      Mahamaon: 0,
      Marakukaja: 0,
      'Auto-Mataru': 78,
      Mafreidyne: 79,
      'High Counter': 80,
      'Unshaken Will': 81
    },
    stats: {
      st: 52,
      ma: 48,
      en: 51,
      ag: 49,
      lu: 35
    },
    trait: 'Atomic Hellscape',
    max: true,
    alarmItem: {
      name: 'Unparalleled Vajra',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'rp',
      bless: '-',
      curse: '-'
    },
    name: 'Asura'
  },
  Atavaka: {
    inherits: 'Physical',
    item: {
      name: 'Brave Blade',
      type: 'Skill Card'
    },
    level: 65,
    arcana: 'Faith',
    skills: {
      Maragidyne: 0,
      'Oni Kagura': 0,
      Mediarahan: 0,
      'High Counter': 67,
      Samarecarm: 68,
      'Brave Blade': 70,
      'Attack Master': 71
    },
    stats: {
      st: 51,
      ma: 36,
      en: 43,
      ag: 38,
      lu: 34
    },
    trait: 'Savior Bloodline',
    alarmItem: {
      name: 'Sword Dance',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: 'rp',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Atavaka'
  },
  Atropos: {
    inherits: 'Electric',
    item: {
      name: 'Mazionga',
      type: 'Skill Card'
    },
    level: 39,
    arcana: 'Fortune',
    skills: {
      Mazionga: 0,
      'Fire Wall': 0,
      'Elec Break': 0,
      Mediarama: 41,
      'Elec Boost': 42,
      Ziodyne: 44,
      Concentrate: 45
    },
    stats: {
      st: 23,
      ma: 30,
      en: 22,
      ag: 27,
      lu: 22
    },
    trait: 'Mighty Gaze',
    alarmItem: {
      name: 'Ziodyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Atropos'
  },
  Attis: {
    inherits: 'Fire',
    item: {
      name: 'Null Curse',
      type: 'Skill Card'
    },
    level: 82,
    arcana: 'Hanged Man',
    skills: {
      Maragidyne: 0,
      Salvation: 0,
      Thermopylae: 0,
      'Enduring Soul': 84,
      Samarecarm: 85,
      'Absorb Curse': 86,
      'Blazing Hell': 88
    },
    stats: {
      st: 49,
      ma: 50,
      en: 48,
      ag: 54,
      lu: 52
    },
    trait: 'Vitality of the Tree',
    max: true,
    alarmItem: {
      name: 'Absorb Curse',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'wk'
    },
    name: 'Attis'
  },
  Baal: {
    inherits: 'Wind',
    item: {
      name: 'Yagrush',
      type: 'Item'
    },
    level: 82,
    arcana: 'Emperor',
    skills: {
      'Panta Rhei': 0,
      Revolution: 0,
      Matarukaja: 0,
      Ayamur: 84,
      Tetraja: 85,
      Charge: 86,
      'Vacuum Wave': 87
    },
    stats: {
      st: 54,
      ma: 58,
      en: 53,
      ag: 47,
      lu: 41
    },
    trait: 'Wind Bloodline',
    alarmItem: {
      name: 'Yagrush EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: 'ab',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Baal'
  },
  Baphomet: {
    inherits: 'Almighty',
    item: {
      name: 'Bufudyne',
      type: 'Skill Card'
    },
    level: 58,
    arcana: 'Devil',
    skills: {
      Agidyne: 0,
      'Evade Fire': 0,
      'Burn Boost': 0,
      Bufudyne: 59,
      Ziodyne: 61,
      'Shock Boost': 62,
      'Freeze Boost': 63
    },
    stats: {
      st: 34,
      ma: 42,
      en: 36,
      ag: 38,
      lu: 31
    },
    trait: 'Thermal Conduct',
    area: 'Sheriruth',
    floor: 'L13 (after Palace 7)',
    alarmItem: {
      name: 'Mabufudyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Baphomet'
  },
  Barong: {
    inherits: 'Electric',
    item: {
      name: 'Ziodyne',
      type: 'Skill Card'
    },
    level: 52,
    arcana: 'Emperor',
    skills: {
      Ziodyne: 0,
      'Wage War': 0,
      'Invigorate 2': 0,
      'Elec Break': 54,
      'Null Elec': 55,
      Maziodyne: 57
    },
    stats: {
      st: 33,
      ma: 35,
      en: 33,
      ag: 37,
      lu: 25
    },
    trait: 'Blessed Bloodline',
    area: 'Sheriruth',
    floor: 'L11 & 12 (after Palace 7)',
    alarmItem: {
      name: 'Maziodyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Barong'
  },
  Beelzebub: {
    inherits: 'Curse',
    item: {
      name: 'Fleurs du Mal',
      type: 'Item'
    },
    level: 87,
    arcana: 'Devil',
    skills: {
      Maeigaon: 0,
      Mamudoon: 0,
      'Evil Smile': 0,
      'Curse Amp': 88,
      Concentrate: 89,
      'Demonic Decree': 90,
      'Repel Ice': 91,
      Megidolaon: 92
    },
    stats: {
      st: 55,
      ma: 61,
      en: 54,
      ag: 56,
      lu: 42
    },
    trait: 'Mother\'s Lament',
    max: true,
    alarmItem: {
      name: 'Fleurs du Mal R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rp'
    },
    name: 'Beelzebub'
  },
  Belial: {
    inherits: 'Curse',
    item: {
      name: 'Mamudoon',
      type: 'Skill Card'
    },
    level: 82,
    arcana: 'Devil',
    skills: {
      Eigaon: 0,
      Bloodbath: 0,
      'Curse Amp': 0,
      Maeigaon: 84,
      'Fear Boost': 85,
      Mamudoon: 86,
      'Demonic Decree': 88
    },
    stats: {
      st: 52,
      ma: 53,
      en: 51,
      ag: 48,
      lu: 49
    },
    trait: 'Bloodstained Eyes',
    alarmItem: {
      name: 'Demonic Decree',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'nu',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Belial'
  },
  Belphegor: {
    inherits: 'Ice',
    item: {
      name: 'Mabufula',
      type: 'Skill Card'
    },
    level: 37,
    arcana: 'Tower',
    skills: {
      Mabufula: 0,
      'Ice Break': 0,
      'Null Rage': 38,
      'Dodge Fire': 39,
      Bufudyne: 41,
      Concentrate: 42
    },
    stats: {
      st: 25,
      ma: 27,
      en: 24,
      ag: 23,
      lu: 19
    },
    trait: 'Intense Focus',
    area: 'Adyeshach',
    floor: 'L6-8, 10',
    alarmItem: {
      name: 'Bufudyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: 'rp'
    },
    name: 'Belphegor'
  },
  Berith: {
    inherits: 'Physical',
    item: {
      name: 'Cleave',
      type: 'Skill Card'
    },
    level: 9,
    arcana: 'Hierophant',
    skills: {
      Cleave: 0,
      Rakukaja: 0,
      Tarukaja: 10,
      'Dodge Fire': 11,
      'Power Slash': 13
    },
    stats: {
      st: 9,
      ma: 6,
      en: 8,
      ag: 8,
      lu: 3
    },
    trait: 'Crisis Control',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    alarmItem: {
      name: 'Power Slash',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: 'rs',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Berith'
  },
  Bicorn: {
    inherits: 'Wind',
    item: {
      name: 'Lunge',
      type: 'Skill Card'
    },
    level: 4,
    arcana: 'Hermit',
    skills: {
      Lunge: 0,
      Tarunda: 0,
      Garu: 6,
      'Ice Wall': 7,
      'Apt Pupil': 8
    },
    stats: {
      st: 5,
      ma: 3,
      en: 3,
      ag: 5,
      lu: 3
    },
    trait: 'Striking Weight',
    area: 'Aiyatsbus',
    floor: 'L1 & 2',
    alarmItem: {
      name: 'Assault Dive',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Bicorn'
  },
  Bishamonten: {
    inherits: 'Nuclear',
    item: {
      name: 'Mafreidyne',
      type: 'Skill Card'
    },
    level: 67,
    arcana: 'Hierophant',
    skills: {
      Freidyne: 0,
      Diarahan: 0,
      'Deadly Fury': 0,
      Mafreidyne: 69,
      'Nuke Amp': 71,
      Tetrakarn: 72,
      'God\'s Hand': 73
    },
    stats: {
      st: 51,
      ma: 37,
      en: 42,
      ag: 44,
      lu: 34
    },
    trait: 'Savior Bloodline',
    alarmItem: {
      name: 'Atomic Flare',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Bishamonten'
  },
  'Black Frost': {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Naraka Whip',
      type: 'Item'
    },
    level: 67,
    arcana: 'Fool',
    skills: {
      Mabufudyne: 0,
      'One-shot Kill': 0,
      'Miracle Punch': 0,
      'Ice Amp': 68,
      'Freeze Boost': 70,
      'Repel Fire': 71,
      'Diamond Dust': 72
    },
    stats: {
      st: 44,
      ma: 46,
      en: 41,
      ag: 42,
      lu: 35
    },
    trait: 'Frigid Bloodline',
    alarmItem: {
      name: 'Dainaraka Whip',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rp',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'nu',
      bless: '-',
      curse: 'rp'
    },
    name: 'Black Frost'
  },
  'Black Ooze': {
    inherits: 'Curse',
    item: {
      name: 'Headbutt',
      type: 'Skill Card'
    },
    level: 18,
    arcana: 'Moon',
    skills: {
      Sledgehammer: 0,
      'Evil Touch': 0,
      'Foul Breath': 0,
      'Ambient Aid': 20,
      Headbutt: 21,
      'Brain Jack': 23,
      'Flash Bomb': 24
    },
    stats: {
      st: 15,
      ma: 7,
      en: 16,
      ag: 8,
      lu: 15
    },
    trait: 'Rare Antibody',
    area: 'Adyeshach',
    floor: 'L1-4, 6',
    alarmItem: {
      name: 'Memory Blow',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: 'rs',
      electric: 'wk',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Black Ooze'
  },
  'Black Rider': {
    inherits: 'Curse',
    item: {
      name: 'Megidola',
      type: 'Skill Card'
    },
    level: 59,
    arcana: 'Tower',
    skills: {
      Mamudoon: 0,
      'Flash Bomb': 0,
      Maeigaon: 0,
      'Ambient Aid': 60,
      Bloodbath: 61,
      'Ghastly Wail': 63,
      Megidola: 64
    },
    stats: {
      st: 36,
      ma: 42,
      en: 34,
      ag: 42,
      lu: 30
    },
    trait: 'Gloomy Child',
    alarmItem: {
      name: 'Megidolaon',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Black Rider'
  },
  Bugs: {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Bear Gloves',
      type: 'Item'
    },
    level: 49,
    arcana: 'Fool',
    skills: {
      'Miracle Punch': 0,
      Masukunda: 0,
      Psiodyne: 0,
      'Auto-Mataru': 51,
      'Triple Down': 52,
      'Evade Phys': 54,
      'Fast Heal': 55
    },
    stats: {
      st: 35,
      ma: 33,
      en: 30,
      ag: 32,
      lu: 24
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Big Bear Gloves',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: 'wk',
      bless: '-',
      curse: 'nu'
    },
    name: 'Bugs'
  },
  Byakhee: {
    inherits: 'Fire',
    item: {
      name: 'Null Wind',
      type: 'Skill Card'
    },
    level: 70,
    arcana: 'Moon',
    skills: {
      Agidyne: 0,
      'Foul Breath': 0,
      'Death Scythe': 0,
      Maragidyne: 72,
      'Ailment Boost': 73,
      'Fire Break': 74,
      'Heat Riser': 75
    },
    stats: {
      st: 42,
      ma: 49,
      en: 43,
      ag: 51,
      lu: 32
    },
    trait: 'Heated Bloodline',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Repel Wind',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: 'wk',
      electric: '-',
      wind: 'nu',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: 'nu'
    },
    name: 'Byakhee'
  },
  Byakko: {
    inherits: 'Ice',
    item: {
      name: 'Spiral Snow Ring',
      type: 'Item'
    },
    level: 45,
    arcana: 'Temperance',
    skills: {
      'Swift Strike': 0,
      Mabufula: 0,
      Counterstrike: 0,
      'Ice Boost': 47,
      'Ice Break': 48,
      'Evade Fire': 49,
      'Null Rage': 50,
      Bufudyne: 51
    },
    stats: {
      st: 35,
      ma: 28,
      en: 30,
      ag: 32,
      lu: 17
    },
    trait: 'Retaliating Body',
    alarmItem: {
      name: 'Blizzard Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: 'rs'
    },
    name: 'Byakko'
  },
  'Cait Sith': {
    inherits: 'Ailment',
    item: {
      name: 'Agi',
      type: 'Skill Card'
    },
    level: 5,
    arcana: 'Magician',
    skills: {
      Agi: 0,
      Cleave: 0,
      Tarukaja: 0,
      'Resist Sleep': 6,
      Sukukaja: 7,
      Media: 9
    },
    stats: {
      st: 6,
      ma: 4,
      en: 4,
      ag: 5,
      lu: 3
    },
    trait: 'Thermal Conduct',
    alarmItem: {
      name: 'Maragi',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Cait Sith'
  },
  Cerberus: {
    inherits: 'Fire',
    item: {
      name: 'Megaton Raid',
      type: 'Skill Card'
    },
    level: 55,
    arcana: 'Chariot',
    skills: {
      Agidyne: 0,
      'Megaton Raid': 0,
      Rebellion: 56,
      'High Counter': 57,
      Maragidyne: 58,
      'Enduring Soul': 60
    },
    stats: {
      st: 39,
      ma: 35,
      en: 32,
      ag: 39,
      lu: 27
    },
    trait: 'Heated Bloodline',
    area: 'Sheriruth',
    floor: 'L7-9 (after Palace 7)',
    alarmItem: {
      name: 'God\'s Hand',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Cerberus'
  },
  Chernobog: {
    inherits: 'Ailment',
    item: {
      name: 'Mudoon',
      type: 'Skill Card'
    },
    level: 62,
    arcana: 'Death',
    skills: {
      Mudoon: 0,
      Bloodbath: 0,
      'Myriad Slashes': 0,
      'Foul Breath': 63,
      Deathbound: 64,
      'Fear Boost': 66,
      'Brave Blade': 67
    },
    stats: {
      st: 40,
      ma: 37,
      en: 39,
      ag: 38,
      lu: 39
    },
    trait: 'Crisis Control',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Mamudoon',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: 'wk',
      ice: 'ab',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'ab'
    },
    name: 'Chernobog'
  },
  'Chi You': {
    special: true,
    inherits: 'Psy',
    item: {
      name: 'Repel Phys',
      type: 'Skill Card'
    },
    level: 88,
    arcana: 'Chariot',
    skills: {
      'Psycho Force': 0,
      'Repel Phys': 0,
      Gigantomachia: 0,
      'Fortify Spirit': 90,
      'Psycho Blast': 91,
      'Absorb Psy': 92,
      Concentrate: 94
    },
    stats: {
      st: 56,
      ma: 57,
      en: 54,
      ag: 53,
      lu: 51
    },
    trait: 'Chi You\'s Blessing',
    alarmItem: {
      name: 'Absorb Phys',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'nu',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Chi You'
  },
  Chimera: {
    inherits: 'Physical',
    item: {
      name: 'Null Fire',
      type: 'Skill Card'
    },
    level: 74,
    arcana: 'Strength',
    skills: {
      Maragidyne: 0,
      'Heat Wave': 0,
      Bufudyne: 0,
      Marakunda: 76,
      'Fire Amp': 77,
      Mabufudyne: 78,
      'Ice Amp': 79
    },
    stats: {
      st: 51,
      ma: 40,
      en: 42,
      ag: 48,
      lu: 48
    },
    trait: 'Foul Stench',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Absorb Fire',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'nu',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'wk'
    },
    name: 'Chimera'
  },
  Choronzon: {
    inherits: 'Curse',
    item: {
      name: 'Curse Ring',
      type: 'Item'
    },
    level: 28,
    arcana: 'Magician',
    skills: {
      Pulinpa: 0,
      'Life Drain': 0,
      Rampage: 0,
      Maeiha: 29,
      'Dodge Elec': 30,
      Eiga: 31,
      'Curse Boost': 32,
      'Climate Decorum': 33
    },
    stats: {
      st: 16,
      ma: 19,
      en: 19,
      ag: 18,
      lu: 19
    },
    trait: 'Draining Mouth',
    area: 'Kaitul',
    floor: 'L1-4',
    alarmItem: {
      name: 'Spiral Curse Ring',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: '-'
    },
    name: 'Choronzon'
  },
  Clotho: {
    inherits: 'Healing',
    item: {
      name: 'Tetraja',
      type: 'Skill Card'
    },
    level: 27,
    arcana: 'Fortune',
    skills: {
      Mahama: 0,
      'Me Patra': 0,
      Makajam: 0,
      Tetraja: 28,
      Makajamaon: 30,
      'Energy Shower': 31,
      'Invigorate 1': 33
    },
    stats: {
      st: 14,
      ma: 19,
      en: 18,
      ag: 20,
      lu: 17
    },
    trait: 'Relief Bloodline',
    alarmItem: {
      name: 'Makarakarn',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: 'nu',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Clotho'
  },
  'Crystal Skull': {
    rare: true,
    item: {
      name: 'Crystal Skull',
      type: 'Item'
    },
    level: 50,
    arcana: 'Fool',
    skills: {
      Maragidyne: 0,
      Mabufudyne: 0,
      Magarudyne: 0,
      Maziodyne: 0,
      Mapsiodyne: 0,
      Mafreidyne: 0,
      Makougaon: 0,
      Maeigaon: 0,
      'Foul Stench': 0,
      'Ailment Hunter': 0,
      'Cursed Bloodline': 0
    },
    stats: {
      st: 50,
      ma: 50,
      en: 50,
      ag: 50,
      lu: 50
    },
    trait: 'Ultimate Vessel',
    area: 'Sheriruth / Da\'at',
    floor: 'L7-9. 11-13 (after Palace 7) / All',
    alarmItem: {
      name: 'Crystal Skull R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Crystal Skull'
  },
  'Cu Chulainn': {
    inherits: 'Almighty',
    item: {
      name: 'One-shot Kill',
      type: 'Skill Card'
    },
    level: 76,
    arcana: 'Faith',
    skills: {
      'High Counter': 0,
      'One-shot Kill': 0,
      Rebellion: 0,
      Matarukaja: 78,
      'Brave Blade': 79,
      Charge: 80,
      'Apt Pupil': 81
    },
    stats: {
      st: 55,
      ma: 44,
      en: 46,
      ag: 48,
      lu: 42
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Riot Gun',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'rp',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'Cu Chulainn'
  },
  Cybele: {
    inherits: 'Healing',
    item: {
      name: 'Sabazios',
      type: 'Item'
    },
    level: 83,
    arcana: 'Priestess',
    skills: {
      Samarecarm: 0,
      Mediarahan: 0,
      Makougaon: 0,
      'Amrita Shower': 84,
      'Auto-Maraku': 86,
      'Absorb Bless': 87,
      Salvation: 89
    },
    stats: {
      st: 44,
      ma: 57,
      en: 49,
      ag: 51,
      lu: 55
    },
    trait: 'Linked Bloodline',
    max: true,
    alarmItem: {
      name: 'Gordios',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'Cybele'
  },
  Daisoujou: {
    inherits: 'Bless',
    item: {
      name: 'Spiral Blessing Ring',
      type: 'Item'
    },
    level: 40,
    arcana: 'Hierophant',
    skills: {
      'Spirit Drain': 0,
      Makouga: 0,
      Samsara: 41,
      'Bless Boost': 42,
      Diarahan: 43,
      'Me Patra': 44,
      'Null Rage': 45
    },
    stats: {
      st: 21,
      ma: 33,
      en: 24,
      ag: 24,
      lu: 25
    },
    trait: 'Draining Mouth',
    alarmItem: {
      name: 'Divine Ring',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Daisoujou'
  },
  Dakini: {
    inherits: 'Physical',
    item: {
      name: 'Tempest Slash',
      type: 'Skill Card'
    },
    level: 50,
    arcana: 'Empress',
    skills: {
      'Bad Beat': 0,
      'Myriad Slashes': 0,
      'Rising Slash': 0,
      'High Counter': 52,
      Deathbound: 53,
      Rebellion: 54,
      Charge: 55
    },
    stats: {
      st: 34,
      ma: 32,
      en: 34,
      ag: 28,
      lu: 29
    },
    trait: 'Skillful Combo',
    area: 'Sheriruth',
    floor: 'L7-9 (after Palace 7)',
    alarmItem: {
      name: 'Myriad Slashes',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Dakini'
  },
  Decarabia: {
    inherits: 'Fire',
    item: {
      name: 'Maragion',
      type: 'Skill Card'
    },
    level: 32,
    arcana: 'Councillor',
    skills: {
      Agilao: 0,
      'Ominous Words': 0,
      Tetrakarn: 33,
      'Fire Boost': 35,
      Agidyne: 36,
      'Null Fire': 37,
      Megidola: 38
    },
    stats: {
      st: 21,
      ma: 23,
      en: 19,
      ag: 22,
      lu: 18
    },
    trait: 'Heated Bloodline',
    area: 'Adyeshach',
    floor: 'L3, 4, 6-8',
    alarmItem: {
      name: 'Agidyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'wk',
      gun: '-',
      fire: 'rp',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: 'rs'
    },
    name: 'Decarabia'
  },
  Dionysus: {
    inherits: 'Ailment',
    item: {
      name: 'Maziodyne',
      type: 'Skill Card'
    },
    level: 71,
    arcana: 'Councillor',
    skills: {
      Maziodyne: 0,
      Ziodyne: 0,
      'Brain Jack': 0,
      Thermopylae: 72,
      'Ailment Boost': 73,
      'Amrita Shower': 75,
      Debilitate: 76
    },
    stats: {
      st: 42,
      ma: 48,
      en: 44,
      ag: 42,
      lu: 44
    },
    trait: 'Pinch Anchor',
    alarmItem: {
      name: 'Thunder Reign',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Dionysus'
  },
  Dominion: {
    inherits: 'Bless',
    item: {
      name: 'Makougaon',
      type: 'Skill Card'
    },
    level: 68,
    arcana: 'Justice',
    skills: {
      Makajamaon: 0,
      Hamaon: 0,
      Kougaon: 0,
      Makougaon: 70,
      'Hama Boost': 71,
      Mahamaon: 72,
      'Evade Curse': 74
    },
    stats: {
      st: 42,
      ma: 45,
      en: 43,
      ag: 44,
      lu: 37
    },
    trait: 'Blessed Bloodline',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Divine Judgement',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: 'rp',
      bless: 'nu',
      curse: 'rs'
    },
    name: 'Dominion'
  },
  Eligor: {
    inherits: 'Fire',
    item: {
      name: 'Tarukaja',
      type: 'Skill Card'
    },
    level: 16,
    arcana: 'Emperor',
    skills: {
      Maragi: 0,
      'Sharp Student': 0,
      Tarukaja: 0,
      'Double Fangs': 18,
      Sukunda: 19,
      'Memory Blow': 20
    },
    stats: {
      st: 12,
      ma: 10,
      en: 13,
      ag: 10,
      lu: 10
    },
    trait: 'Thermal Conduct',
    area: 'Chemdah',
    floor: 'L3 & 4',
    alarmItem: {
      name: 'Matarukaja',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Eligor'
  },
  'Emperor\'s Amulet': {
    rare: true,
    item: {
      name: 'Emperor\'s Amulet',
      type: 'Item'
    },
    level: 35,
    arcana: 'Hanged Man',
    skills: {
      Agidyne: 0,
      Bufudyne: 0,
      Garudyne: 0,
      Ziodyne: 0,
      Psiodyne: 0,
      Freidyne: 0,
      Kougaon: 0,
      Eigaon: 0,
      'Frigid Bloodline': 0,
      'Wind Bloodline': 0,
      'Psychic Bloodline': 0
    },
    stats: {
      st: 35,
      ma: 35,
      en: 35,
      ag: 35,
      lu: 35
    },
    trait: 'Ultimate Vessel',
    area: 'Sheriruth',
    floor: 'L7-9, 11-13 (after Palace 7)',
    alarmItem: {
      name: 'Emperor\'s Charm R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Emperor\'s Amulet'
  },
  Fafnir: {
    inherits: 'Nuclear',
    item: {
      name: 'Spiral Reactor Ring',
      type: 'Item'
    },
    level: 86,
    arcana: 'Hermit',
    skills: {
      Gigantomachia: 0,
      'Evil Smile': 0,
      'Cosmic Flare': 0,
      'Atomic Flare': 88,
      'Nuke Amp': 90,
      Debilitate: 91,
      'Absorb Nuke': 92
    },
    stats: {
      st: 61,
      ma: 55,
      en: 58,
      ag: 48,
      lu: 43
    },
    trait: 'Ailment Hunter',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Fire Dragon Horn',
      type: 'Item'
    },
    affinities: {
      physical: 'rp',
      gun: 'rp',
      fire: 'ab',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: 'ab',
      bless: '-',
      curse: '-'
    },
    name: 'Fafnir'
  },
  Flauros: {
    special: true,
    inherits: 'Ailment',
    item: {
      name: 'Giant Slice Belt',
      type: 'Item'
    },
    level: 19,
    arcana: 'Devil',
    skills: {
      'Giant Slice': 0,
      'Dormin Rush': 0,
      Dekaja: 0,
      'Dodge Phys': 20,
      Rebellion: 22,
      'Cornered Fang': 23,
      'Heat Up': 24
    },
    stats: {
      st: 15,
      ma: 11,
      en: 13,
      ag: 14,
      lu: 11
    },
    trait: 'Gluttonmouth',
    alarmItem: {
      name: 'Rising Slash Belt',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: 'wk',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Flauros'
  },
  Forneus: {
    inherits: 'Psy',
    item: {
      name: 'Psiodyne',
      type: 'Skill Card'
    },
    level: 63,
    arcana: 'Magician',
    skills: {
      Psiodyne: 0,
      Masukunda: 0,
      'Brain Jack': 0,
      'Survival Trick': 65,
      'Stagnant Air': 66,
      Mapsiodyne: 67,
      'Evade Psy': 68
    },
    stats: {
      st: 41,
      ma: 39,
      en: 40,
      ag: 42,
      lu: 34
    },
    trait: 'Bloodstained Eyes',
    area: 'Sheriruth',
    floor: 'L12 & 13 (after Palace 7)',
    alarmItem: {
      name: 'Mapsiodyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: 'wk',
      wind: '-',
      psychic: 'nu',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Forneus'
  },
  Fortuna: {
    inherits: 'Wind',
    item: {
      name: 'Lucky Robe',
      type: 'Item'
    },
    level: 46,
    arcana: 'Fortune',
    skills: {
      Magarula: 0,
      Masukukaja: 0,
      Tetraja: 0,
      Garudyne: 47,
      'Touch n\' Go': 49,
      'Amrita Drop': 50,
      'Evade Elec': 51
    },
    stats: {
      st: 23,
      ma: 32,
      en: 29,
      ag: 34,
      lu: 27
    },
    trait: 'Wind Bloodline',
    alarmItem: {
      name: 'Super Lucky Robe',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: 'wk',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Fortuna'
  },
  Futsunushi: {
    inherits: 'Physical',
    item: {
      name: 'Hinokagutsuchi',
      type: 'Item'
    },
    level: 86,
    arcana: 'Magician',
    skills: {
      'Myriad Slashes': 0,
      Matarukaja: 0,
      'Apt Pupil': 0,
      Charge: 88,
      'Brave Blade': 89,
      'Regenerate 3': 90,
      'Firm Stance': 91,
      'Auto-Maraku': 92
    },
    stats: {
      st: 60,
      ma: 58,
      en: 55,
      ag: 52,
      lu: 40
    },
    trait: 'Will of the Sword',
    max: true,
    alarmItem: {
      name: 'Hinokagutsuchi II',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Futsunushi'
  },
  'Fuu-Ki': {
    inherits: 'Wind',
    item: {
      name: 'Wind Boost',
      type: 'Skill Card'
    },
    level: 23,
    arcana: 'Star',
    skills: {
      'Tetra Break': 0,
      Tarukaja: 0,
      Garula: 0,
      'Wind Boost': 25,
      Magarula: 26,
      'Resist Wind': 27
    },
    stats: {
      st: 14,
      ma: 17,
      en: 16,
      ag: 15,
      lu: 14
    },
    trait: 'Intense Focus',
    area: 'Kaitul',
    floor: 'L8 & 9',
    alarmItem: {
      name: 'Wind Amp',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'ab',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Fuu-Ki'
  },
  Gabriel: {
    inherits: 'Almighty',
    item: {
      name: 'Spiral Blizzard Ring',
      type: 'Item'
    },
    level: 77,
    arcana: 'Temperance',
    skills: {
      Maziodyne: 0,
      Mabufudyne: 0,
      'Divine Judgement': 78,
      'Ali Dance': 79,
      'Evade Curse': 80,
      'Touch n\' Go': 81,
      'Ice Amp': 82,
      Salvation: 83
    },
    stats: {
      st: 43,
      ma: 51,
      en: 48,
      ag: 54,
      lu: 42
    },
    trait: 'Relentless',
    alarmItem: {
      name: 'Diamond Dust Lily',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'nu',
      nuclear: '-',
      bless: 'ab',
      curse: '-'
    },
    name: 'Gabriel'
  },
  Ganesha: {
    inherits: 'Ailment',
    item: {
      name: 'Rebellion',
      type: 'Skill Card'
    },
    level: 53,
    arcana: 'Sun',
    skills: {
      'Miracle Punch': 0,
      'Tempest Slash': 0,
      Rebellion: 0,
      Tetraja: 55,
      'Resist Psy': 56,
      Masukunda: 57,
      Charge: 60
    },
    stats: {
      st: 39,
      ma: 31,
      en: 37,
      ag: 33,
      lu: 26
    },
    trait: 'Gluttonmouth',
    area: 'Sheriruth',
    floor: 'L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)',
    alarmItem: {
      name: 'Revolution',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'ab',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Ganesha'
  },
  Garuda: {
    inherits: 'Wind',
    item: {
      name: 'Garudyne',
      type: 'Skill Card'
    },
    level: 52,
    arcana: 'Star',
    skills: {
      Garudyne: 0,
      'Mind Slice': 0,
      'Amrita Shower': 53,
      Masukukaja: 54,
      'Evade Elec': 55,
      Magarudyne: 57,
      'Wind Amp': 59
    },
    stats: {
      st: 30,
      ma: 36,
      en: 29,
      ag: 39,
      lu: 29
    },
    trait: 'Wind Bloodline',
    area: 'Sheriruth',
    floor: 'L12 (after Palace 7)',
    alarmItem: {
      name: 'Magarudyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: '-'
    },
    name: 'Garuda'
  },
  Genbu: {
    inherits: 'Ice',
    item: {
      name: 'Frost Ring',
      type: 'Item'
    },
    level: 7,
    arcana: 'Temperance',
    skills: {
      Bufu: 0,
      Rakunda: 0,
      Patra: 8,
      Mabufu: 10,
      'Resist Forget': 11,
      'Defense Master': 12
    },
    stats: {
      st: 5,
      ma: 6,
      en: 7,
      ag: 6,
      lu: 4
    },
    trait: 'Cold-Blooded',
    alarmItem: {
      name: 'Spiral Frost Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'wk',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Genbu'
  },
  Girimehkala: {
    inherits: 'Ailment',
    item: {
      name: 'Swift Strike',
      type: 'Skill Card'
    },
    level: 43,
    arcana: 'Moon',
    skills: {
      Mudoon: 0,
      Marakunda: 0,
      Deathbound: 0,
      Agidyne: 45,
      'Wage War': 47,
      'Repel Phys': 50
    },
    stats: {
      st: 32,
      ma: 24,
      en: 32,
      ag: 29,
      lu: 19
    },
    trait: 'Cursed Bloodline',
    area: 'Adyeshach',
    floor: 'L4, 6-8, 10',
    alarmItem: {
      name: 'Deathbound',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rp',
      gun: 'rp',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Girimehkala'
  },
  Hanuman: {
    inherits: 'Physical',
    item: {
      name: 'Ruyi Jingu Bang',
      type: 'Item'
    },
    level: 64,
    arcana: 'Strength',
    skills: {
      'Tempest Slash': 0,
      Matarunda: 0,
      Revolution: 0,
      Deathbound: 65,
      'Tetra Break': 67,
      'Regenerate 3': 69
    },
    stats: {
      st: 43,
      ma: 38,
      en: 40,
      ag: 40,
      lu: 38
    },
    trait: 'Potent Hypnosis',
    area: 'Sheriruth',
    floor: 'L12 & 13 (after Palace 7)',
    alarmItem: {
      name: 'Fine Ruyi Jingu Bang',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Hanuman'
  },
  Hariti: {
    inherits: 'Electric',
    item: {
      name: 'Revival Charm',
      type: 'Item'
    },
    level: 40,
    arcana: 'Empress',
    skills: {
      Zionga: 0,
      'Energy Shower': 0,
      Mabaisudi: 0,
      Samarecarm: 41,
      'Nocturnal Flash': 42,
      Mediarama: 44,
      'Dizzy Boost': 45,
      'Spirit Drain': 46
    },
    stats: {
      st: 21,
      ma: 32,
      en: 24,
      ag: 23,
      lu: 27
    },
    trait: 'Electric Bloodline',
    alarmItem: {
      name: 'Rejuvenate Charm',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: 'rs',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Hariti'
  },
  Hastur: {
    inherits: 'Wind',
    item: {
      name: 'Spiral Gale Ring',
      type: 'Item'
    },
    level: 84,
    arcana: 'Star',
    skills: {
      'Vacuum Wave': 0,
      'Nocturnal Flash': 0,
      Debilitate: 0,
      'Abyssal Eye': 86,
      'Wind Amp': 87,
      'Spirit Drain': 88,
      'Repel Wind': 89
    },
    stats: {
      st: 51,
      ma: 59,
      en: 52,
      ag: 56,
      lu: 41
    },
    trait: 'Mouth of Savoring',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Storm Sculpture',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: 'ab',
      psychic: 'nu',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Hastur'
  },
  Hecatoncheires: {
    inherits: 'Physical',
    item: {
      name: 'Swift Strike Belt',
      type: 'Item'
    },
    level: 42,
    arcana: 'Hanged Man',
    skills: {
      'Swift Strike': 0,
      'Regenerate 2': 0,
      Tarukaja: 0,
      Endure: 43,
      Rebellion: 45,
      'Fortified Moxy': 46,
      'Gatling Blows': 49
    },
    stats: {
      st: 35,
      ma: 22,
      en: 27,
      ag: 23,
      lu: 26
    },
    trait: 'Gluttonmouth',
    alarmItem: {
      name: 'Gatling Belt',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Hecatoncheires'
  },
  'Hell Biker': {
    special: true,
    inherits: 'Fire',
    item: {
      name: 'Black Jacket',
      type: 'Item'
    },
    level: 37,
    arcana: 'Death',
    skills: {
      Mudoon: 0,
      Agilao: 0,
      'Speed Master': 0,
      Tentarafoo: 38,
      'Fire Boost': 39,
      Maragion: 40,
      Mamudoon: 41
    },
    stats: {
      st: 23,
      ma: 24,
      en: 24,
      ag: 30,
      lu: 17
    },
    trait: 'Internal Hypnosis',
    alarmItem: {
      name: 'Dark Jacket',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rp',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: '-'
    },
    name: 'Hell Biker'
  },
  'High Pixie': {
    inherits: 'Healing',
    item: {
      name: 'Magaru',
      type: 'Skill Card'
    },
    level: 16,
    arcana: 'Fool',
    skills: {
      Garu: 0,
      Media: 0,
      Dormina: 0,
      Diarama: 19,
      Pulinpa: 20,
      Magaru: 22
    },
    stats: {
      st: 8,
      ma: 14,
      en: 10,
      ag: 13,
      lu: 10
    },
    trait: 'Skillful Combo',
    area: 'Kaitul',
    floor: 'L1-3',
    alarmItem: {
      name: 'Garula',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'rs',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'High Pixie'
  },
  'Hope Diamond': {
    rare: true,
    item: {
      name: 'Hope Diamond',
      type: 'Item'
    },
    level: 40,
    arcana: 'Death',
    skills: {
      'Auto-Mataru': 0,
      'Auto-Maraku': 0,
      'Auto-Masuku': 0,
      Endure: 0,
      'Regenerate 2': 0,
      'Invigorate 2': 0,
      'High Counter': 0,
      'Fast Heal': 0,
      'Internal Hypnosis': 0,
      'Striking Weight': 0,
      'Retaliating Body': 0
    },
    stats: {
      st: 40,
      ma: 40,
      en: 40,
      ag: 40,
      lu: 40
    },
    trait: 'Ultimate Vessel',
    area: 'Sheriruth',
    floor: 'L7-9. 11-13 (after Palace 7)',
    alarmItem: {
      name: 'Hope Diamond R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Hope Diamond'
  },
  Horus: {
    inherits: 'Almighty',
    item: {
      name: 'Hallowed Ring',
      type: 'Item'
    },
    level: 47,
    arcana: 'Sun',
    skills: {
      Megidola: 0,
      Diarama: 0,
      Kougaon: 0,
      'Flash Bomb': 49,
      Masukukaja: 50,
      Hamaon: 51,
      'Hama Boost': 52
    },
    stats: {
      st: 30,
      ma: 32,
      en: 29,
      ag: 35,
      lu: 22
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Spiral Hallowed Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: '-'
    },
    name: 'Horus'
  },
  'Hua Po': {
    inherits: 'Fire',
    item: {
      name: 'Ember Ring',
      type: 'Item'
    },
    level: 9,
    arcana: 'Hanged Man',
    skills: {
      Agi: 0,
      Dormina: 0,
      Tarunda: 11,
      'Resist Forget': 12,
      Maragi: 13,
      'Burn Boost': 15
    },
    stats: {
      st: 4,
      ma: 10,
      en: 4,
      ag: 8,
      lu: 8
    },
    trait: 'Thermal Conduct',
    area: 'Chemdah',
    floor: 'L1-3',
    alarmItem: {
      name: 'Spiral Ember Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: 'rp',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Hua Po'
  },
  Incubus: {
    inherits: 'Ailment',
    item: {
      name: 'Dream Needle',
      type: 'Skill Card'
    },
    level: 5,
    arcana: 'Devil',
    skills: {
      'Life Drain': 0,
      'Dream Needle': 0,
      Dormina: 7,
      Tarunda: 8,
      'Dodge Curse': 9
    },
    stats: {
      st: 4,
      ma: 6,
      en: 4,
      ag: 5,
      lu: 3
    },
    trait: 'Draining Mouth',
    area: 'Aiyatsbus',
    floor: 'L2, 3 & 6',
    alarmItem: {
      name: 'Dormin Rush',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: '-'
    },
    name: 'Incubus'
  },
  Inugami: {
    inherits: 'Fire',
    item: {
      name: 'Giant Slice',
      type: 'Skill Card'
    },
    level: 14,
    arcana: 'Hanged Man',
    skills: {
      Pulinpa: 0,
      Tarukaja: 0,
      'Giant Slice': 0,
      'Dream Needle': 15,
      'Lucky Punch': 17,
      'Brain Shake': 18,
      'Confuse Boost': 19
    },
    stats: {
      st: 11,
      ma: 9,
      en: 9,
      ag: 12,
      lu: 8
    },
    trait: 'Foul Odor',
    area: 'Chemdah',
    floor: 'L4, 6 & 7',
    alarmItem: {
      name: 'Rising Slash',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Inugami'
  },
  'Ippon-Datara': {
    inherits: 'Physical',
    item: {
      name: 'Sledgehammer',
      type: 'Skill Card'
    },
    level: 13,
    arcana: 'Hermit',
    skills: {
      Sledgehammer: 0,
      Tarukaja: 0,
      'Resist Dizzy': 0,
      Rampage: 15,
      'Sharp Student': 17,
      Counter: 18
    },
    stats: {
      st: 11,
      ma: 7,
      en: 14,
      ag: 6,
      lu: 8
    },
    trait: 'Striking Weight',
    area: 'Chemdah',
    floor: 'L1-4',
    alarmItem: {
      name: 'Flash Bomb',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: 'rs',
      ice: 'wk',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Ippon-Datara'
  },
  Ishtar: {
    inherits: 'Healing',
    item: {
      name: 'Spiral Thunder Ring',
      type: 'Item'
    },
    level: 85,
    arcana: 'Lovers',
    skills: {
      Mediarahan: 0,
      Samarecarm: 0,
      'Absorb Wind': 0,
      'Insta-Heal': 87,
      Maziodyne: 88,
      'Spell Master': 89,
      Salvation: 90
    },
    stats: {
      st: 48,
      ma: 59,
      en: 49,
      ag: 58,
      lu: 48
    },
    trait: 'Grace of Mother',
    max: true,
    alarmItem: {
      name: 'Goddess Horn',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Ishtar'
  },
  Isis: {
    inherits: 'Healing',
    item: {
      name: 'Kouga',
      type: 'Skill Card'
    },
    level: 26,
    arcana: 'Priestess',
    skills: {
      Makouga: 0,
      Mahama: 0,
      Diarama: 0,
      'Resist Despair': 27,
      Hamaon: 29,
      'Hama Boost': 30,
      Makarakarn: 32
    },
    stats: {
      st: 14,
      ma: 20,
      en: 17,
      ag: 18,
      lu: 16
    },
    trait: 'Savior Bloodline',
    area: 'Akzeriyyuth',
    floor: 'L5-7, 9-11',
    alarmItem: {
      name: 'Makouga',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'Isis'
  },
  'Jack Frost': {
    inherits: 'Ice',
    item: {
      name: 'Frost Hood',
      type: 'Item'
    },
    level: 11,
    arcana: 'Magician',
    skills: {
      Bufu: 0,
      'Ice Break': 0,
      Baisudi: 0,
      Mabufu: 12,
      Rakunda: 13,
      'Freeze Boost': 15
    },
    stats: {
      st: 8,
      ma: 9,
      en: 7,
      ag: 9,
      lu: 7
    },
    trait: 'Frigid Bloodline',
    area: 'Chemdah',
    floor: 'L4 & 6',
    alarmItem: {
      name: 'Frost Ace Hood',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'nu',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Jack Frost'
  },
  'Jack-o\'-Lantern': {
    inherits: 'Fire',
    item: {
      name: 'Pumpkin Bomb',
      type: 'Item'
    },
    level: 2,
    arcana: 'Magician',
    skills: {
      Agi: 0,
      Rakunda: 0,
      'Sharp Student': 4,
      Dazzler: 5,
      'Resist Sleep': 7
    },
    stats: {
      st: 2,
      ma: 3,
      en: 3,
      ag: 3,
      lu: 2
    },
    trait: 'Thermal Conduct',
    area: 'Qimranut / Aiyatsbus',
    floor: 'Any / L1',
    alarmItem: {
      name: 'Pumpkin Buster',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Jack-o\'-Lantern'
  },
  Jatayu: {
    inherits: 'Wind',
    item: {
      name: 'Speed Master',
      type: 'Skill Card'
    },
    level: 51,
    arcana: 'Hanged Man',
    skills: {
      Garudyne: 0,
      Masukukaja: 0,
      'Nocturnal Flash': 0,
      'Dizzy Boost': 52,
      'Wind Amp': 54,
      Magarudyne: 55,
      'Speed Master': 57
    },
    stats: {
      st: 31,
      ma: 34,
      en: 29,
      ag: 36,
      lu: 30
    },
    trait: 'Wind Bloodline',
    alarmItem: {
      name: 'Auto-Masuku',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: 'wk',
      bless: 'rs',
      curse: '-'
    },
    name: 'Jatayu'
  },
  Jikokuten: {
    inherits: 'Physical',
    item: {
      name: 'Assault Belt',
      type: 'Item'
    },
    level: 22,
    arcana: 'Temperance',
    skills: {
      'Assault Dive': 0,
      'Defense Master': 0,
      Rakunda: 0,
      'Kill Rush': 24,
      Counter: 25,
      Matarukaja: 27,
      'Adverse Resolve': 28
    },
    stats: {
      st: 18,
      ma: 11,
      en: 16,
      ag: 15,
      lu: 13
    },
    trait: 'Internal Hypnosis',
    alarmItem: {
      name: 'Rush Belt',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Jikokuten'
  },
  Kaiwan: {
    inherits: 'Almighty',
    item: {
      name: 'Makajam',
      type: 'Skill Card'
    },
    level: 36,
    arcana: 'Star',
    skills: {
      Makajam: 0,
      Psio: 0,
      'Forget Boost': 37,
      'Speed Master': 38,
      Makajamaon: 39,
      Psiodyne: 40,
      Marakunda: 41
    },
    stats: {
      st: 23,
      ma: 26,
      en: 24,
      ag: 22,
      lu: 20
    },
    trait: 'Psychic Bloodline',
    area: 'Adyeshach',
    floor: 'L10-12',
    alarmItem: {
      name: 'Makajamaon',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'nu',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Kaiwan'
  },
  Kali: {
    inherits: 'Fire',
    item: {
      name: 'Null Psy',
      type: 'Skill Card'
    },
    level: 63,
    arcana: 'Empress',
    skills: {
      'Heat Wave': 0,
      Bloodbath: 0,
      'Brave Blade': 0,
      Charge: 65,
      'High Counter': 66,
      'Repel Psy': 67,
      'Vorpal Blade': 68
    },
    stats: {
      st: 43,
      ma: 41,
      en: 39,
      ag: 39,
      lu: 34
    },
    trait: 'Relentless',
    alarmItem: {
      name: 'Repel Psy',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rp',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rp',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Kali'
  },
  Kelpie: {
    inherits: 'Wind',
    item: {
      name: 'Garu',
      type: 'Skill Card'
    },
    level: 6,
    arcana: 'Strength',
    skills: {
      Garu: 0,
      Lunge: 0,
      'Resist Brainwash': 8,
      Sukukaja: 9,
      'Terror Claw': 10
    },
    stats: {
      st: 5,
      ma: 5,
      en: 5,
      ag: 6,
      lu: 4
    },
    trait: 'Striking Weight',
    area: 'Aiyatsbus',
    floor: 'L3',
    alarmItem: {
      name: 'Magaru',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Kelpie'
  },
  'Kikuri-Hime': {
    inherits: 'Healing',
    item: {
      name: 'Energy Drop',
      type: 'Skill Card'
    },
    level: 40,
    arcana: 'Priestess',
    skills: {
      Lullaby: 0,
      Marakukaja: 0,
      'Energy Drop': 0,
      Mediarama: 41,
      Tetraja: 43,
      'Divine Grace': 45
    },
    stats: {
      st: 22,
      ma: 31,
      en: 24,
      ag: 28,
      lu: 22
    },
    trait: 'Relief Bloodline',
    area: 'Sheriruth',
    floor: 'L3-5 (before Palace 7) / L2 & 3 (after Palace 7)',
    alarmItem: {
      name: 'Energy Shower',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Kikuri-Hime'
  },
  'Kin-Ki': {
    inherits: 'Physical',
    item: {
      name: 'Vajra Blast',
      type: 'Skill Card'
    },
    level: 25,
    arcana: 'Chariot',
    skills: {
      'Vajra Blast': 0,
      Rakukaja: 0,
      'Regenerate 1': 0,
      'Dodge Psy': 27,
      Sledgehammer: 28,
      'Bad Beat': 30,
      Counterstrike: 31
    },
    stats: {
      st: 21,
      ma: 13,
      en: 21,
      ag: 15,
      lu: 12
    },
    trait: 'Retaliating Body',
    area: 'Kaitul',
    floor: 'L4, 5, 7-9',
    alarmItem: {
      name: 'Vicious Strike',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rp',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Kin-Ki'
  },
  'King Frost': {
    inherits: 'Ice',
    item: {
      name: 'King Frost Cape',
      type: 'Item'
    },
    level: 61,
    arcana: 'Emperor',
    skills: {
      Bufudyne: 0,
      'Ice Break': 0,
      'Megaton Raid': 0,
      'Freeze Boost': 62,
      Mabufudyne: 64,
      Concentrate: 65,
      'Ice Amp': 67
    },
    stats: {
      st: 40,
      ma: 44,
      en: 43,
      ag: 29,
      lu: 34
    },
    trait: 'Frigid Bloodline',
    area: 'Sheriruth',
    floor: 'L8, 11, 12, 13 (after Palace 7)',
    alarmItem: {
      name: 'King Frost Cape EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'King Frost'
  },
  Kodama: {
    inherits: 'Ailment',
    item: {
      name: 'Psy Ring',
      type: 'Item'
    },
    level: 11,
    arcana: 'Star',
    skills: {
      Garu: 0,
      Rakunda: 0,
      Psi: 12,
      'Evil Touch': 13,
      Tarukaja: 14,
      'Fear Boost': 15,
      'Resist Fear': 17
    },
    stats: {
      st: 7,
      ma: 11,
      en: 8,
      ag: 10,
      lu: 4
    },
    trait: 'Skillful Combo',
    area: 'Aiyatsbus',
    floor: 'L1-3',
    alarmItem: {
      name: 'Spiral Psy Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Kodama'
  },
  'Koh-i-Noor': {
    rare: true,
    item: {
      name: 'Koh-i-Noor',
      type: 'Item'
    },
    level: 25,
    arcana: 'Priestess',
    skills: {
      'Dodge Fire': 0,
      'Dodge Ice': 0,
      'Dodge Wind': 0,
      'Dodge Elec': 0,
      'Dodge Psy': 0,
      'Dodge Nuke': 0,
      'Dodge Bless': 0,
      'Dodge Curse': 0,
      'Crisis Control': 0,
      'Bloodstained Eyes': 0,
      'Rare Antibody': 0
    },
    stats: {
      st: 25,
      ma: 25,
      en: 25,
      ag: 25,
      lu: 25
    },
    trait: 'Ultimate Vessel',
    area: 'Adyeshach',
    floor: 'L1-4, 6-8, 10-12',
    alarmItem: {
      name: 'Koh-i-Noor R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Koh-i-Noor'
  },
  Kohryu: {
    special: true,
    inherits: 'Psy',
    item: {
      name: 'Spiral Mystic Ring',
      type: 'Item'
    },
    level: 76,
    arcana: 'Hierophant',
    skills: {
      'Psycho Force': 0,
      Mediarahan: 0,
      Mapsiodyne: 0,
      'Life Aid': 78,
      Concentrate: 79,
      'Psy Amp': 80,
      'Spell Master': 82
    },
    stats: {
      st: 43,
      ma: 51,
      en: 50,
      ag: 53,
      lu: 38
    },
    trait: 'Universal Law',
    max: true,
    alarmItem: {
      name: 'Dragon\'s Heart',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: 'nu',
      nuclear: 'wk',
      bless: 'nu',
      curse: '-'
    },
    name: 'Kohryu'
  },
  'Koppa Tengu': {
    inherits: 'Wind',
    item: {
      name: 'Breeze Ring',
      type: 'Item'
    },
    level: 11,
    arcana: 'Temperance',
    skills: {
      Garu: 0,
      Sukukaja: 0,
      'Growth 1': 12,
      Taunt: 13,
      'Rage Boost': 14,
      'Wage War': 15
    },
    stats: {
      st: 7,
      ma: 8,
      en: 8,
      ag: 11,
      lu: 6
    },
    trait: 'Intense Focus',
    area: 'Chemdah',
    floor: 'L6 & 7',
    alarmItem: {
      name: 'Spiral Breeze Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: '-'
    },
    name: 'Koppa Tengu'
  },
  Koropokkuru: {
    inherits: 'Ice',
    item: {
      name: 'Bufu',
      type: 'Skill Card'
    },
    level: 9,
    arcana: 'Hermit',
    skills: {
      Makajam: 0,
      Bufu: 0,
      'Dodge Ice': 11,
      Sukunda: 12,
      'Fire Wall': 13,
      Mabufu: 14,
      'Climate Decorum': 15
    },
    stats: {
      st: 5,
      ma: 8,
      en: 6,
      ag: 9,
      lu: 6
    },
    trait: 'Foul Odor',
    area: 'Chemdah',
    floor: 'L2 & 3',
    alarmItem: {
      name: 'Mabufu',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Koropokkuru'
  },
  Koumokuten: {
    inherits: 'Physical',
    item: {
      name: 'Regenerate 2',
      type: 'Skill Card'
    },
    level: 49,
    arcana: 'Hermit',
    skills: {
      'Assault Dive': 0,
      'Regenerate 2': 0,
      Revolution: 0,
      'Attack Master': 51,
      'Ice Wall': 52,
      'Enduring Soul': 54,
      'Deadly Fury': 55
    },
    stats: {
      st: 37,
      ma: 29,
      en: 34,
      ag: 29,
      lu: 25
    },
    trait: 'Gluttonmouth',
    alarmItem: {
      name: 'Regenerate 3',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Koumokuten'
  },
  Kumbhanda: {
    inherits: 'Ailment',
    item: {
      name: 'Terror Claw',
      type: 'Skill Card'
    },
    level: 42,
    arcana: 'Hermit',
    skills: {
      Magarula: 0,
      'Stagnant Air': 0,
      Bloodbath: 0,
      'Tempest Slash': 43,
      Dekaja: 45,
      'Fear Boost': 46,
      Revolution: 47
    },
    stats: {
      st: 25,
      ma: 30,
      en: 25,
      ag: 27,
      lu: 26
    },
    trait: 'Rare Antibody',
    area: 'Sheriruth',
    floor: 'L8, 9, 11-13 (before Palace 7) / L4 & 5 (after Palace 7)',
    alarmItem: {
      name: 'Bloodbath',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Kumbhanda'
  },
  'Kurama Tengu': {
    inherits: 'Wind',
    item: {
      name: 'Wind Ring',
      type: 'Item'
    },
    level: 31,
    arcana: 'Hermit',
    skills: {
      'Double Shot': 0,
      Masukunda: 0,
      Magarula: 0,
      'Wind Boost': 32,
      'Brain Jack': 34,
      'Growth 2': 36
    },
    stats: {
      st: 20,
      ma: 19,
      en: 21,
      ag: 24,
      lu: 16
    },
    trait: 'Skillful Combo',
    area: 'Sheriruth',
    floor: 'L11 (after Palace 7)',
    alarmItem: {
      name: 'Spiral Wind Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Kurama Tengu'
  },
  Kushinada: {
    inherits: 'Healing',
    item: {
      name: 'Cure Charm',
      type: 'Item'
    },
    level: 42,
    arcana: 'Lovers',
    skills: {
      'Hysterical Slap': 0,
      'Psy Wall': 0,
      Mediarama: 0,
      Matarukaja: 44,
      'Null Confuse': 45,
      'Wind Wall': 46,
      'Amrita Shower': 47,
      'Null Ice': 48
    },
    stats: {
      st: 24,
      ma: 30,
      en: 26,
      ag: 28,
      lu: 25
    },
    trait: 'Savior Bloodline',
    area: 'Sheriruth',
    floor: 'L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)',
    alarmItem: {
      name: 'Spiral Cure Charm',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'rp',
      curse: '-'
    },
    name: 'Kushinada'
  },
  'Kushi Mitama': {
    inherits: 'Healing',
    item: {
      name: 'Aid Charm',
      type: 'Item'
    },
    level: 12,
    arcana: 'Councillor',
    skills: {
      Dia: 0,
      Media: 0,
      Makajam: 0,
      'Regenerate 1': 13,
      'Wind Wall': 14,
      'Forget Boost': 16
    },
    stats: {
      st: 7,
      ma: 11,
      en: 9,
      ag: 8,
      lu: 8
    },
    trait: 'Gluttonmouth',
    alarmItem: {
      name: 'Spiral Aid Charm',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Kushi Mitama'
  },
  Lachesis: {
    inherits: 'Ice',
    item: {
      name: 'Snow Ring',
      type: 'Item'
    },
    level: 35,
    arcana: 'Fortune',
    skills: {
      Mabaisudi: 0,
      Bufula: 0,
      'Growth 2': 0,
      Marakukaja: 36,
      'Elec Wall': 37,
      Mabufula: 39,
      'Ice Boost': 41
    },
    stats: {
      st: 18,
      ma: 26,
      en: 22,
      ag: 25,
      lu: 21
    },
    trait: 'Internal Hypnosis',
    alarmItem: {
      name: 'Spiral Snow Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'wk',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Lachesis'
  },
  Lakshmi: {
    inherits: 'Healing',
    item: {
      name: 'Amrita Charm',
      type: 'Item'
    },
    level: 69,
    arcana: 'Fortune',
    skills: {
      Lullaby: 0,
      Diarahan: 0,
      Bufudyne: 0,
      Mediarahan: 70,
      'Climate Decorum': 71,
      'Amrita Shower': 72,
      'Life Aid': 74
    },
    stats: {
      st: 39,
      ma: 49,
      en: 41,
      ag: 47,
      lu: 38
    },
    trait: 'Wealth of Lotus',
    max: true,
    alarmItem: {
      name: 'Spiral Amrita Charm',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Lakshmi'
  },
  Lamia: {
    inherits: 'Fire',
    item: {
      name: 'Rakukaja',
      type: 'Skill Card'
    },
    level: 26,
    arcana: 'Empress',
    skills: {
      Mudo: 0,
      Rakukaja: 0,
      'Rising Slash': 0,
      'Ominous Words': 27,
      'Foul Breath': 28,
      Mamudo: 30,
      'Despair Boost': 31
    },
    stats: {
      st: 21,
      ma: 15,
      en: 18,
      ag: 19,
      lu: 12
    },
    trait: 'Foul Odor',
    area: 'Akzeriyyuth',
    floor: 'L3, 5-7, 9-11',
    alarmItem: {
      name: 'Marakukaja',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: 'nu'
    },
    name: 'Lamia'
  },
  'Leanan Sidhe': {
    inherits: 'Almighty',
    item: {
      name: 'Mudo',
      type: 'Skill Card'
    },
    level: 19,
    arcana: 'Lovers',
    skills: {
      Rakunda: 0,
      Psio: 0,
      'Marin Karin': 20,
      Mamudo: 21,
      Mapsi: 22,
      Eiga: 23
    },
    stats: {
      st: 9,
      ma: 17,
      en: 12,
      ag: 16,
      lu: 10
    },
    trait: 'Skillful Technique',
    area: 'Kaitul',
    floor: 'L3-5',
    alarmItem: {
      name: 'Mamudo',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: 'rs',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Leanan Sidhe'
  },
  Legion: {
    inherits: 'Psy',
    item: {
      name: 'Foul Breath',
      type: 'Skill Card'
    },
    level: 38,
    arcana: 'Fool',
    skills: {
      Bloodbath: 0,
      'Life Drain': 0,
      'Evil Smile': 0,
      'Foul Breath': 39,
      'Tetra Break': 40,
      'Null Dizzy': 42,
      Eigaon: 45
    },
    stats: {
      st: 24,
      ma: 24,
      en: 30,
      ag: 23,
      lu: 20
    },
    trait: 'Draining Mouth',
    area: 'Adyeshach',
    floor: 'L1-4',
    alarmItem: {
      name: 'Stagnant Air',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Legion'
  },
  Lilim: {
    inherits: 'Ice',
    item: {
      name: 'Ice Boost',
      type: 'Skill Card'
    },
    level: 32,
    arcana: 'Devil',
    skills: {
      Bufula: 0,
      Lullaby: 0,
      'Freeze Boost': 0,
      Masukunda: 34,
      'Dodge Bless': 35,
      'Spirit Drain': 36,
      Mabufula: 37
    },
    stats: {
      st: 17,
      ma: 23,
      en: 18,
      ag: 25,
      lu: 20
    },
    trait: 'Cold-Blooded',
    area: 'Adyeshach',
    floor: 'L6-8, 10-12',
    alarmItem: {
      name: 'Ice Amp',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Lilim'
  },
  Lilith: {
    inherits: 'Almighty',
    item: {
      name: 'Null Nuke',
      type: 'Skill Card'
    },
    level: 60,
    arcana: 'Moon',
    skills: {
      Mabufudyne: 0,
      Makarakarn: 0,
      Freidyne: 0,
      Mafreidyne: 62,
      'Spirit Drain': 63,
      'Freeze Boost': 64,
      'Nuke Amp': 65
    },
    stats: {
      st: 33,
      ma: 43,
      en: 37,
      ag: 39,
      lu: 35
    },
    trait: 'Mighty Gaze',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Repel Nuke',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rp',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rp',
      bless: '-',
      curse: 'nu'
    },
    name: 'Lilith'
  },
  Loa: {
    inherits: 'Curse',
    item: {
      name: 'Ominous Words',
      type: 'Skill Card'
    },
    level: 70,
    arcana: 'Hermit',
    skills: {
      Mamudoon: 0,
      'Abysmal Surge': 0,
      'Life Drain': 0,
      Maeigaon: 72,
      'Absorb Curse': 73,
      'Spirit Drain': 74,
      'Fortify Spirit': 75
    },
    stats: {
      st: 42,
      ma: 47,
      en: 43,
      ag: 46,
      lu: 39
    },
    trait: 'Draining Mouth',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Abysmal Surge',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: 'nu',
      wind: '-',
      psychic: 'wk',
      nuclear: 'rs',
      bless: 'wk',
      curse: '-'
    },
    name: 'Loa'
  },
  Lucifer: {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Tyrant Pistol',
      type: 'Item'
    },
    level: 93,
    arcana: 'Star',
    skills: {
      Gigantomachia: 0,
      'Absorb Curse': 0,
      'Morning Star': 94,
      'Spell Master': 95,
      'Heat Riser': 96,
      'Repel Bless': 97,
      'Insta-Heal': 98,
      'Absorb Phys': 99
    },
    stats: {
      st: 61,
      ma: 59,
      en: 59,
      ag: 56,
      lu: 51
    },
    trait: 'Allure of Wisdom',
    max: true,
    alarmItem: {
      name: 'Tyrant Pistol EX',
      type: 'Item'
    },
    affinities: {
      physical: 'nu',
      gun: 'nu',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'ab'
    },
    name: 'Lucifer'
  },
  Macabre: {
    inherits: 'Curse',
    item: {
      name: 'Bloodbath',
      type: 'Skill Card'
    },
    level: 73,
    arcana: 'Hanged Man',
    skills: {
      'Death Scythe': 0,
      'Evil Smile': 0,
      Mamudoon: 0,
      'Auto-Masuku': 74,
      'Ghastly Wail': 75,
      'Myriad Slashes': 76,
      'Ali Dance': 78
    },
    stats: {
      st: 48,
      ma: 49,
      en: 42,
      ag: 48,
      lu: 39
    },
    trait: 'Ailment Hunter',
    note: 'Only available after 1/12',
    alarmItem: {
      name: 'Death Scythe',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Macabre'
  },
  Mada: {
    inherits: 'Fire',
    item: {
      name: 'Spiral Inferno Ring',
      type: 'Item'
    },
    level: 90,
    arcana: 'Tower',
    skills: {
      Inferno: 0,
      'Fire Amp': 0,
      'Burn Boost': 0,
      'Fortify Spirit': 91,
      'Blazing Hell': 92,
      'Amrita Shower': 93,
      'Enduring Soul': 95,
      'Spell Master': 96
    },
    stats: {
      st: 55,
      ma: 54,
      en: 61,
      ag: 59,
      lu: 48
    },
    trait: 'Drunken Passion',
    max: true,
    alarmItem: {
      name: 'Dark Flame Band',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: 'nu',
      bless: '-',
      curse: '-'
    },
    name: 'Mada'
  },
  Makami: {
    inherits: 'Nuclear',
    item: {
      name: 'Frei',
      type: 'Skill Card'
    },
    level: 15,
    arcana: 'Temperance',
    skills: {
      'Double Fangs': 0,
      Frei: 0,
      'Energy Drop': 0,
      Mafrei: 17,
      Makajam: 18,
      'Resist Despair': 19,
      'Dodge Elec': 20
    },
    stats: {
      st: 13,
      ma: 12,
      en: 8,
      ag: 11,
      lu: 8
    },
    trait: 'Skillful Technique',
    area: 'Chemdah',
    floor: 'L6 & 7',
    alarmItem: {
      name: 'Mafrei',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'rs',
      psychic: '-',
      nuclear: 'rs',
      bless: 'nu',
      curse: '-'
    },
    name: 'Makami'
  },
  Mandrake: {
    inherits: 'Electric',
    item: {
      name: 'Sukunda',
      type: 'Skill Card'
    },
    level: 3,
    arcana: 'Death',
    skills: {
      Pulinpa: 0,
      'Energy Drop': 0,
      Lunge: 4,
      Sukunda: 5
    },
    stats: {
      st: 2,
      ma: 3,
      en: 3,
      ag: 4,
      lu: 4
    },
    trait: 'Savior Bloodline',
    area: 'Qimranut / Aiyatsbus',
    floor: 'All / L1',
    alarmItem: {
      name: 'Masukunda',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Mandrake'
  },
  Mara: {
    inherits: 'Psy',
    item: {
      name: 'Mapsiodyne',
      type: 'Skill Card'
    },
    level: 73,
    arcana: 'Tower',
    skills: {
      Mapsiodyne: 0,
      'One-shot Kill': 0,
      'Tetra Break': 0,
      Charge: 74,
      'Brain Buster': 76,
      'Psy Amp': 77,
      'Psycho Force': 78
    },
    stats: {
      st: 51,
      ma: 43,
      en: 43,
      ag: 45,
      lu: 44
    },
    trait: 'Mighty Gaze',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Psycho Force',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rp',
      nuclear: '-',
      bless: 'rs',
      curse: 'nu'
    },
    name: 'Mara'
  },
  Maria: {
    inherits: 'Healing',
    item: {
      name: 'Spiral Heal Charm',
      type: 'Item'
    },
    level: 93,
    arcana: 'Faith',
    skills: {
      'Invigorate 3': 0,
      Salvation: 0,
      'Holy Benevolence': 0,
      'Heat Riser': 94,
      'Holy Embrace': 96,
      'Angelic Grace': 97,
      'Holy Whisper': 98
    },
    stats: {
      st: 52,
      ma: 66,
      en: 53,
      ag: 54,
      lu: 61
    },
    trait: 'Ave Maria',
    max: true,
    alarmItem: {
      name: 'Rosary of Purity',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'rs',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: 'ab',
      curse: '-'
    },
    name: 'Maria'
  },
  Matador: {
    inherits: 'Psy',
    item: {
      name: 'Blood Red Capote',
      type: 'Item'
    },
    level: 17,
    arcana: 'Death',
    skills: {
      Psi: 0,
      'Null Dizzy': 0,
      Sukukaja: 0,
      Mapsi: 18,
      'Double Shot': 20,
      'Swift Strike': 22
    },
    stats: {
      st: 11,
      ma: 13,
      en: 10,
      ag: 16,
      lu: 8
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Bloodied Capote',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Matador'
  },
  Melchizedek: {
    inherits: 'Bless',
    item: {
      name: 'Hamaon',
      type: 'Skill Card'
    },
    level: 58,
    arcana: 'Justice',
    skills: {
      'Megaton Raid': 0,
      Hamaon: 0,
      'Hama Boost': 59,
      Revolution: 60,
      Mahamaon: 62,
      Matarukaja: 63,
      'God\'s Hand': 65
    },
    stats: {
      st: 37,
      ma: 32,
      en: 40,
      ag: 39,
      lu: 33
    },
    trait: 'Deathly Illness',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Mahamaon',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: 'rs',
      nuclear: '-',
      bless: 'ab',
      curse: 'nu'
    },
    name: 'Melchizedek'
  },
  Metatron: {
    special: true,
    inherits: 'Bless',
    item: {
      name: 'Nataraja',
      type: 'Item'
    },
    level: 89,
    arcana: 'Justice',
    skills: {
      Mahamaon: 0,
      'Sword Dance': 0,
      Makougaon: 0,
      Megidolaon: 91,
      'Hama Boost': 92,
      Concentrate: 93,
      'Bless Amp': 94,
      'Divine Judgement': 95
    },
    stats: {
      st: 54,
      ma: 61,
      en: 60,
      ag: 57,
      lu: 42
    },
    trait: 'Martyr\'s Gift',
    alarmItem: {
      name: 'Nataraja EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'rp',
      psychic: 'ab',
      nuclear: 'ab',
      bless: '-',
      curse: 'wk'
    },
    name: 'Metatron'
  },
  Michael: {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Judge of Hell',
      type: 'Item'
    },
    level: 87,
    arcana: 'Judgement',
    skills: {
      'Divine Judgement': 0,
      Mabufudyne: 0,
      Debilitate: 0,
      'Sword Dance': 89,
      Mahamaon: 90,
      Megidolaon: 91,
      'Cosmic Flare': 92
    },
    stats: {
      st: 57,
      ma: 54,
      en: 55,
      ag: 56,
      lu: 46
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Judge End',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'nu'
    },
    name: 'Michael'
  },
  Mishaguji: {
    inherits: 'Ailment',
    item: {
      name: 'Spiral Karma Ring',
      type: 'Item'
    },
    level: 52,
    arcana: 'Hierophant',
    skills: {
      'Regenerate 3': 0,
      'Brain Jack': 0,
      Psiodyne: 0,
      'One-shot Kill': 54,
      Endure: 55,
      Deathbound: 56,
      'Ailment Boost': 57
    },
    stats: {
      st: 32,
      ma: 32,
      en: 32,
      ag: 32,
      lu: 35
    },
    trait: 'Ailment Hunter',
    alarmItem: {
      name: 'Mystic Ring',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'ab'
    },
    name: 'Mishaguji'
  },
  Mitra: {
    inherits: 'Bless',
    item: {
      name: 'Death Contract',
      type: 'Item'
    },
    level: 33,
    arcana: 'Temperance',
    skills: {
      Kouga: 0,
      Mahama: 0,
      Diarama: 0,
      Makouga: 34,
      Dekunda: 35,
      'Bless Boost': 36,
      Thermopylae: 38
    },
    stats: {
      st: 19,
      ma: 26,
      en: 19,
      ag: 24,
      lu: 18
    },
    trait: 'Blessed Bloodline',
    alarmItem: {
      name: 'Death Promise',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'Mitra'
  },
  Mithras: {
    inherits: 'Nuclear',
    item: {
      name: 'Nuke Boost',
      type: 'Skill Card'
    },
    level: 39,
    arcana: 'Sun',
    skills: {
      Tentarafoo: 0,
      Mafreila: 0,
      'Heat Wave': 0,
      'Tetra Break': 41,
      'Nuke Break': 42,
      Mabaisudi: 43,
      Freidyne: 45
    },
    stats: {
      st: 27,
      ma: 25,
      en: 27,
      ag: 25,
      lu: 20
    },
    trait: 'Skillful Technique',
    area: 'Adyeshach',
    floor: 'L11 & 12',
    alarmItem: {
      name: 'Nuke Amp',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'nu',
      bless: '-',
      curse: '-'
    },
    name: 'Mithras'
  },
  Mokoi: {
    inherits: 'Ailment',
    item: {
      name: 'Dekunda',
      type: 'Skill Card'
    },
    level: 9,
    arcana: 'Death',
    skills: {
      Tarukaja: 0,
      Dazzler: 0,
      'Skull Cracker': 10,
      'Marin Karin': 12,
      'Dodge Elec': 13,
      Dekunda: 14
    },
    stats: {
      st: 9,
      ma: 5,
      en: 6,
      ag: 10,
      lu: 4
    },
    trait: 'Gloomy Child',
    area: 'Chemdah',
    floor: 'L1-4',
    alarmItem: {
      name: 'Dekaja',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Mokoi'
  },
  Moloch: {
    inherits: 'Fire',
    item: {
      name: 'Inferno Ring',
      type: 'Item'
    },
    level: 60,
    arcana: 'Hanged Man',
    skills: {
      Agidyne: 0,
      'Stagnant Air': 0,
      'Evil Smile': 0,
      Maragidyne: 62,
      'Ghastly Wail': 63,
      'Absorb Fire': 64,
      'Fire Amp': 65
    },
    stats: {
      st: 32,
      ma: 45,
      en: 42,
      ag: 31,
      lu: 37
    },
    trait: 'Immunity',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Spiral Inferno Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: 'rs',
      wind: 'rs',
      psychic: 'ab',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Moloch'
  },
  Mot: {
    inherits: 'Ailment',
    item: {
      name: 'Null Elec',
      type: 'Skill Card'
    },
    level: 72,
    arcana: 'Death',
    skills: {
      Megidola: 0,
      Matarukaja: 0,
      Maeigaon: 0,
      Concentrate: 74,
      Megidolaon: 76,
      'Repel Elec': 77
    },
    stats: {
      st: 43,
      ma: 51,
      en: 48,
      ag: 42,
      lu: 39
    },
    trait: 'Mighty Gaze',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Repel Elec',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'ab',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rp'
    },
    name: 'Mot'
  },
  'Mother Harlot': {
    inherits: 'Ice',
    item: {
      name: 'Claiomh Solais',
      type: 'Item'
    },
    level: 85,
    arcana: 'Empress',
    skills: {
      Mabufudyne: 0,
      Mamudoon: 0,
      'Mudo Boost': 0,
      'Ice Age': 86,
      'Ice Amp': 87,
      'Repel Bless': 88,
      Debilitate: 90
    },
    stats: {
      st: 55,
      ma: 54,
      en: 48,
      ag: 50,
      lu: 55
    },
    trait: 'Ghost Nest',
    max: true,
    alarmItem: {
      name: 'Claiomh Solais R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Mother Harlot'
  },
  Mothman: {
    inherits: 'Electric',
    item: {
      name: 'Skull Cracker',
      type: 'Skill Card'
    },
    level: 33,
    arcana: 'Moon',
    skills: {
      'Skull Cracker': 0,
      Mazionga: 0,
      'Shock Boost': 0,
      Tentarafoo: 35,
      'Ambient Aid': 36,
      Makajamaon: 37,
      Ziodyne: 38
    },
    stats: {
      st: 21,
      ma: 24,
      en: 16,
      ag: 24,
      lu: 21
    },
    trait: 'Static Electricity',
    area: 'Adyeshach',
    floor: 'L3, 4, 7, 8, 10',
    alarmItem: {
      name: 'Mind Slice',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Mothman'
  },
  Naga: {
    inherits: 'Electric',
    item: {
      name: 'Counter',
      type: 'Skill Card'
    },
    level: 24,
    arcana: 'Hermit',
    skills: {
      'Power Slash': 0,
      'Memory Blow': 0,
      Zionga: 0,
      'Shock Boost': 26,
      Counter: 27,
      Mazionga: 28,
      Marakukaja: 29
    },
    stats: {
      st: 15,
      ma: 17,
      en: 15,
      ag: 17,
      lu: 15
    },
    trait: 'Striking Weight',
    area: 'Akzeriyyuth',
    floor: 'L2, 3, 5-7, 9',
    alarmItem: {
      name: 'Counterstrike',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Naga'
  },
  Narcissus: {
    inherits: 'Ailment',
    item: {
      name: 'Dazzler',
      type: 'Skill Card'
    },
    level: 48,
    arcana: 'Lovers',
    skills: {
      Dazzler: 0,
      Magarula: 0,
      'Energy Drop': 0,
      'Growth 3': 50,
      'Dizzy Boost': 51,
      Mediarama: 52,
      'Ambient Aid': 53
    },
    stats: {
      st: 27,
      ma: 31,
      en: 29,
      ag: 33,
      lu: 31
    },
    trait: 'Gluttonmouth',
    area: 'Sheriruth',
    floor: 'L7 & 8 (after Palace 7)',
    alarmItem: {
      name: 'Nocturnal Flash',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'nu',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Narcissus'
  },
  Nebiros: {
    inherits: 'Curse',
    item: {
      name: 'Marin Karin',
      type: 'Skill Card'
    },
    level: 74,
    arcana: 'Devil',
    skills: {
      'Marin Karin': 0,
      Mapsiodyne: 0,
      Marakukaja: 0,
      'Brain Jack': 76,
      'Brainwash Boost': 77,
      Megidolaon: 78,
      'Null Bless': 80
    },
    stats: {
      st: 45,
      ma: 52,
      en: 44,
      ag: 46,
      lu: 42
    },
    trait: 'Psychic Bloodline',
    alarmItem: {
      name: 'Brain Jack',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'nu',
      nuclear: '-',
      bless: 'wk',
      curse: 'rs'
    },
    name: 'Nebiros'
  },
  'Neko Shogun': {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Catnap',
      type: 'Item'
    },
    level: 30,
    arcana: 'Star',
    skills: {
      Psio: 0,
      Diarama: 0,
      Masukukaja: 0,
      'Invigorate 1': 31,
      'Cornered Fang': 33,
      'Defense Master': 35,
      'Fortified Moxy': 36
    },
    stats: {
      st: 19,
      ma: 20,
      en: 19,
      ag: 21,
      lu: 18
    },
    trait: 'Pinch Anchor',
    alarmItem: {
      name: 'Cat Buster',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'rs'
    },
    name: 'Neko Shogun'
  },
  Nekomata: {
    inherits: 'Ailment',
    item: {
      name: 'Pawzooka',
      type: 'Item'
    },
    level: 17,
    arcana: 'Magician',
    skills: {
      Magaru: 0,
      'Terror Claw': 0,
      'Evil Touch': 0,
      'Hysterical Slap': 18,
      'Wind Break': 20,
      'Elec Wall': 21,
      'Dodge Elec': 22
    },
    stats: {
      st: 13,
      ma: 10,
      en: 12,
      ag: 15,
      lu: 8
    },
    trait: 'Foul Odor',
    area: 'Kaitul',
    floor: 'L2-4',
    alarmItem: {
      name: 'Paw-omber',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Nekomata'
  },
  'Nigi Mitama': {
    inherits: 'Healing',
    item: {
      name: 'Prayer Ring',
      type: 'Item'
    },
    level: 22,
    arcana: 'Councillor',
    skills: {
      Baisudi: 0,
      Diarama: 0,
      Makouha: 0,
      'Divine Grace': 24,
      'Me Patra': 25,
      'Climate Decorum': 26
    },
    stats: {
      st: 13,
      ma: 15,
      en: 15,
      ag: 16,
      lu: 14
    },
    trait: 'Relief Bloodline',
    alarmItem: {
      name: 'Spiral Prayer Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Nigi Mitama'
  },
  Norn: {
    inherits: 'Almighty',
    item: {
      name: 'Recarm',
      type: 'Skill Card'
    },
    level: 52,
    arcana: 'Fortune',
    skills: {
      Ziodyne: 0,
      Garudyne: 0,
      'Nocturnal Flash': 0,
      Diarahan: 54,
      'Amrita Drop': 55,
      Tetraja: 56,
      Samarecarm: 57
    },
    stats: {
      st: 30,
      ma: 38,
      en: 33,
      ag: 34,
      lu: 28
    },
    trait: 'Intense Focus',
    area: 'Sheriruth',
    floor: 'L11-13 (before Palace 7) / L5 (after Palace 7)',
    alarmItem: {
      name: 'Samarecarm',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: 'ab',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Norn'
  },
  Nue: {
    inherits: 'Curse',
    item: {
      name: 'Maeiha',
      type: 'Skill Card'
    },
    level: 20,
    arcana: 'Death',
    skills: {
      Maeiha: 0,
      'Skull Cracker': 0,
      Mudo: 21,
      Pulinpa: 22,
      Mamudo: 24,
      'Assault Dive': 25,
      'Curse Boost': 26
    },
    stats: {
      st: 16,
      ma: 10,
      en: 17,
      ag: 14,
      lu: 10
    },
    trait: 'Mighty Gaze',
    area: 'Chemdah',
    floor: 'L4',
    alarmItem: {
      name: 'Eiga',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Nue'
  },
  Obariyon: {
    inherits: 'Physical',
    item: {
      name: 'Lucky Punch',
      type: 'Skill Card'
    },
    level: 8,
    arcana: 'Fool',
    skills: {
      Snap: 0,
      Sukunda: 0,
      'Lucky Punch': 9,
      'Resist Fear': 10,
      Dekaja: 12
    },
    stats: {
      st: 7,
      ma: 3,
      en: 9,
      ag: 8,
      lu: 4
    },
    trait: 'Striking Weight',
    area: 'Aiyatsbus',
    floor: 'L3, 5 & 6',
    alarmItem: {
      name: 'Miracle Punch',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Obariyon'
  },
  Oberon: {
    inherits: 'Electric',
    item: {
      name: 'Heat Wave',
      type: 'Skill Card'
    },
    level: 66,
    arcana: 'Emperor',
    skills: {
      Ziodyne: 0,
      'Nocturnal Flash': 0,
      'Heat Wave': 0,
      Matarukaja: 68,
      'Myriad Slashes': 69,
      'Evade Nuke': 70,
      Samarecarm: 71,
      'Elec Amp': 72
    },
    stats: {
      st: 40,
      ma: 45,
      en: 42,
      ag: 43,
      lu: 35
    },
    trait: 'Static Electricity',
    area: 'Sheriruth',
    floor: 'L13 (after Palace 7)',
    alarmItem: {
      name: 'Vorpal Blade',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: 'nu',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Oberon'
  },
  Odin: {
    inherits: 'Electric',
    item: {
      name: 'Wild Hunt',
      type: 'Item'
    },
    level: 84,
    arcana: 'Emperor',
    skills: {
      'Thunder Reign': 0,
      'Myriad Slashes': 0,
      Marakukaja: 0,
      'Wild Thunder': 86,
      Concentrate: 87,
      'Fast Heal': 88,
      'Elec Amp': 89
    },
    stats: {
      st: 53,
      ma: 58,
      en: 54,
      ag: 52,
      lu: 42
    },
    trait: 'Bargain Bolts',
    max: true,
    alarmItem: {
      name: 'Gungnir',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: 'ab',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'rp'
    },
    name: 'Odin'
  },
  Okuninushi: {
    inherits: 'Psy',
    item: {
      name: 'Official\'s Robe',
      type: 'Item'
    },
    level: 54,
    arcana: 'Faith',
    skills: {
      Mapsio: 0,
      'Myriad Slashes': 0,
      Matarukaja: 0,
      'Psy Boost': 55,
      'Psy Break': 56,
      'Evade Nuke': 57,
      'Heat Wave': 59
    },
    stats: {
      st: 39,
      ma: 35,
      en: 33,
      ag: 32,
      lu: 30
    },
    trait: 'Psychic Bloodline',
    alarmItem: {
      name: 'Official\'s Robe R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: 'wk',
      psychic: 'nu',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Okuninushi'
  },
  'Ongyo-Ki': {
    special: true,
    inherits: 'Physical',
    item: {
      name: 'Myriad Slash Belt',
      type: 'Item'
    },
    level: 89,
    arcana: 'Hermit',
    skills: {
      'Myriad Slashes': 0,
      Makajamaon: 0,
      'Last Stand': 0,
      'Arms Master': 91,
      'Regenerate 3': 92,
      'Firm Stance': 93,
      Agneyastra: 95
    },
    stats: {
      st: 56,
      ma: 53,
      en: 57,
      ag: 59,
      lu: 49
    },
    trait: 'Demon\'s Bite',
    max: true,
    alarmItem: {
      name: 'Sword Dance Belt',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'rp'
    },
    name: 'Ongyo-Ki'
  },
  Oni: {
    inherits: 'Physical',
    item: {
      name: 'Rampage',
      type: 'Skill Card'
    },
    level: 20,
    arcana: 'Strength',
    skills: {
      Rampage: 0,
      Counter: 0,
      Snap: 0,
      'Giant Slice': 22,
      'Sharp Student': 23,
      'Memory Blow': 24
    },
    stats: {
      st: 19,
      ma: 9,
      en: 17,
      ag: 12,
      lu: 10
    },
    trait: 'Retaliating Body',
    area: 'Kaitul',
    floor: 'L3-5, 8, 9',
    alarmItem: {
      name: 'Kill Rush',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Oni'
  },
  Onmoraki: {
    inherits: 'Curse',
    item: {
      name: 'Grudge Ring',
      type: 'Item'
    },
    level: 12,
    arcana: 'Moon',
    skills: {
      Eiha: 0,
      'Ice Wall': 0,
      Agi: 13,
      'Evil Touch': 14,
      Pulinpa: 15,
      'Confuse Boost': 17
    },
    stats: {
      st: 9,
      ma: 12,
      en: 7,
      ag: 10,
      lu: 5
    },
    trait: 'Intense Focus',
    area: 'Chemdah',
    floor: 'L3 & 4',
    alarmItem: {
      name: 'Spiral Grudge Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Onmoraki'
  },
  Orichalcum: {
    rare: true,
    item: {
      name: 'Orichalcum',
      type: 'Item'
    },
    level: 60,
    arcana: 'Faith',
    skills: {
      Inferno: 0,
      'Diamond Dust': 0,
      'Panta Rhei': 0,
      'Thunder Reign': 0,
      'Psycho Force': 0,
      'Atomic Flare': 0,
      'Divine Judgement': 0,
      'Demonic Decree': 0,
      Immunity: 0,
      'Mouth of Savoring': 0,
      'Blessed Bloodline': 0
    },
    stats: {
      st: 60,
      ma: 60,
      en: 60,
      ag: 60,
      lu: 60
    },
    trait: 'Ultimate Vessel',
    alarmItem: {
      name: 'Orichalcum R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: '-'
    },
    name: 'Orichalcum'
  },
  Orlov: {
    rare: true,
    item: {
      name: 'Orlov',
      type: 'Item'
    },
    level: 30,
    arcana: 'Strength',
    skills: {
      Maragion: 0,
      Mabufula: 0,
      Magarula: 0,
      Mazionga: 0,
      Mapsio: 0,
      Mafreila: 0,
      Makouga: 0,
      Maeiga: 0,
      'Heated Bloodline': 0,
      'Electric Bloodline': 0,
      'Atomic Bloodline': 0
    },
    stats: {
      st: 30,
      ma: 30,
      en: 30,
      ag: 30,
      lu: 30
    },
    trait: 'Ultimate Vessel',
    area: 'Sheriruth',
    floor: 'Any (before Palace 7) / L1-5 (after Palace 7)',
    alarmItem: {
      name: 'Orlov R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'wk'
    },
    name: 'Orlov'
  },
  Orobas: {
    inherits: 'Fire',
    item: {
      name: 'Rakunda',
      type: 'Skill Card'
    },
    level: 17,
    arcana: 'Hierophant',
    skills: {
      Maragi: 0,
      Sukukaja: 0,
      Dekaja: 0,
      Marakunda: 19,
      'Fire Break': 20,
      Makajamaon: 21
    },
    stats: {
      st: 11,
      ma: 14,
      en: 15,
      ag: 12,
      lu: 6
    },
    trait: 'Mighty Gaze',
    area: 'Kaitul',
    floor: 'L1-3',
    alarmItem: {
      name: 'Marakunda',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Orobas'
  },
  Orthrus: {
    inherits: 'Fire',
    item: {
      name: 'Agilao',
      type: 'Skill Card'
    },
    level: 21,
    arcana: 'Hanged Man',
    skills: {
      Agilao: 0,
      'Double Fangs': 0,
      Maragi: 0,
      'Burn Boost': 22,
      'Cornered Fang': 24,
      Matarukaja: 26
    },
    stats: {
      st: 16,
      ma: 14,
      en: 14,
      ag: 19,
      lu: 7
    },
    trait: 'Thermal Conduct',
    area: 'Kaitul',
    floor: 'L4, 5, 7-9',
    alarmItem: {
      name: 'Maragion',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Orthrus'
  },
  Ose: {
    inherits: 'Ailment',
    item: {
      name: 'Counterstrike',
      type: 'Skill Card'
    },
    level: 42,
    arcana: 'Fool',
    skills: {
      'Oni Kagura': 0,
      Counterstrike: 0,
      Charge: 0,
      'Tempest Slash': 43,
      Matarukaja: 45,
      'Heat Wave': 47
    },
    stats: {
      st: 32,
      ma: 24,
      en: 25,
      ag: 31,
      lu: 21
    },
    trait: 'Retaliating Body',
    area: 'Sheriruth',
    floor: 'L1-5, 9 (before Palace 7) / L1-4 (after Palace 7)',
    alarmItem: {
      name: 'High Counter',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Ose'
  },
  'Pale Rider': {
    inherits: 'Curse',
    item: {
      name: 'Hex Ring',
      type: 'Item'
    },
    level: 54,
    arcana: 'Death',
    skills: {
      'Abysmal Surge': 0,
      Eigaon: 0,
      'Brain Shake': 0,
      'Curse Boost': 55,
      Megidola: 56,
      'Evade Bless': 58,
      Deathbound: 59
    },
    stats: {
      st: 32,
      ma: 37,
      en: 33,
      ag: 40,
      lu: 27
    },
    trait: 'Foul Stench',
    alarmItem: {
      name: 'Spiral Hex Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rp'
    },
    name: 'Pale Rider'
  },
  Parvati: {
    inherits: 'Psy',
    item: {
      name: 'Null Ice',
      type: 'Skill Card'
    },
    level: 56,
    arcana: 'Lovers',
    skills: {
      Diarama: 0,
      Psiodyne: 0,
      'Psy Break': 0,
      'Energy Shower': 57,
      Diarahan: 58,
      Mapsiodyne: 59,
      'Null Ice': 61
    },
    stats: {
      st: 33,
      ma: 39,
      en: 33,
      ag: 39,
      lu: 31
    },
    trait: 'Skillful Technique',
    area: 'Sheriruth',
    floor: 'L9, 11, 12 (after Palace 7)',
    alarmItem: {
      name: 'Repel Ice',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rp',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Parvati'
  },
  Pazuzu: {
    inherits: 'Curse',
    item: {
      name: 'Spiral Curse Ring',
      type: 'Item'
    },
    level: 45,
    arcana: 'Devil',
    skills: {
      Maeiga: 0,
      Tentarafoo: 0,
      Mudoon: 0,
      'Ambient Aid': 47,
      'Evil Smile': 48,
      'Stagnant Air': 49,
      Eigaon: 50
    },
    stats: {
      st: 29,
      ma: 33,
      en: 27,
      ag: 26,
      lu: 27
    },
    trait: 'Cursed Bloodline',
    alarmItem: {
      name: 'Hex Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Pazuzu'
  },
  Phoenix: {
    inherits: 'Nuclear',
    item: {
      name: 'Heavensent Dress',
      type: 'Item'
    },
    level: 21,
    arcana: 'Faith',
    skills: {
      Freila: 0,
      'Dream Needle': 0,
      Diarama: 22,
      Recarm: 23,
      'Nuke Boost': 25,
      Mafreila: 26
    },
    stats: {
      st: 12,
      ma: 15,
      en: 15,
      ag: 17,
      lu: 11
    },
    trait: 'Atomic Bloodline',
    alarmItem: {
      name: 'Godsent Dress',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: 'wk',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Phoenix'
  },
  Pisaca: {
    inherits: 'Curse',
    item: {
      name: 'Headhunter Ladle',
      type: 'Item'
    },
    level: 28,
    arcana: 'Death',
    skills: {
      'Dream Needle': 0,
      Rampage: 0,
      'Stagnant Air': 0,
      Mamudo: 29,
      'Abysmal Surge': 31,
      'Despair Boost': 32,
      Mudoon: 33
    },
    stats: {
      st: 19,
      ma: 21,
      en: 21,
      ag: 16,
      lu: 14
    },
    trait: 'Rare Antibody',
    area: 'Akzeriyyuth',
    floor: 'L5-7, 9-11',
    alarmItem: {
      name: 'Headhunter Ladle EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Pisaca'
  },
  Pixie: {
    inherits: 'Electric',
    item: {
      name: 'Static Ring',
      type: 'Item'
    },
    level: 2,
    arcana: 'Lovers',
    skills: {
      Zio: 0,
      Dia: 0,
      Patra: 3,
      Tarukaja: 5,
      'Resist Confuse': 6
    },
    stats: {
      st: 1,
      ma: 3,
      en: 3,
      ag: 4,
      lu: 2
    },
    trait: 'Static Electricity',
    area: 'Qimranut / Aiyatsbus',
    floor: 'Any / L1 & 3',
    alarmItem: {
      name: 'Spiral Static Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: 'wk',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Pixie'
  },
  Power: {
    inherits: 'Bless',
    item: {
      name: 'Bless Boost',
      type: 'Skill Card'
    },
    level: 41,
    arcana: 'Justice',
    skills: {
      Hamaon: 0,
      'Brain Shake': 0,
      'Swift Strike': 42,
      Makouga: 43,
      'Bless Boost': 44,
      Masukukaja: 45,
      'Null Curse': 46
    },
    stats: {
      st: 30,
      ma: 26,
      en: 28,
      ag: 25,
      lu: 21
    },
    trait: 'Internal Hypnosis',
    area: 'Sheriruth',
    floor: 'L1-5, 7 (before Palace 7) / L1-3 (after Palace 7)',
    alarmItem: {
      name: 'Bless Amp',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Power'
  },
  Principality: {
    inherits: 'Bless',
    item: {
      name: 'Blessing Ring',
      type: 'Item'
    },
    level: 29,
    arcana: 'Justice',
    skills: {
      Makouga: 0,
      Makajamaon: 0,
      Tetraja: 0,
      Mediarama: 30,
      'Forget Boost': 32,
      'Bless Boost': 34,
      Mabaisudi: 35
    },
    stats: {
      st: 17,
      ma: 19,
      en: 18,
      ag: 21,
      lu: 19
    },
    trait: 'Blessed Bloodline',
    alarmItem: {
      name: 'Spiral Blessing Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Principality'
  },
  'Queen Mab': {
    inherits: 'Almighty',
    item: {
      name: 'Masquerade Ribbon',
      type: 'Item'
    },
    level: 43,
    arcana: 'Magician',
    skills: {
      Mazionga: 0,
      Makajamaon: 0,
      'Burn Boost': 0,
      Matarunda: 44,
      'Makara Break': 46,
      Agidyne: 47,
      Concentrate: 48
    },
    stats: {
      st: 23,
      ma: 35,
      en: 26,
      ag: 30,
      lu: 22
    },
    trait: 'Static Electricity',
    area: 'Sheriruth',
    floor: 'L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)',
    alarmItem: {
      name: 'Masquerade Ribbon R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Queen Mab'
  },
  'Queen\'s Necklace': {
    rare: true,
    item: {
      name: 'Queen\'s Necklace',
      type: 'Item'
    },
    level: 15,
    arcana: 'Empress',
    skills: {
      Tarukaja: 0,
      Rakukaja: 0,
      Sukukaja: 0,
      Recarm: 0,
      Media: 0,
      Tarunda: 0,
      Rakunda: 0,
      Sukunda: 0,
      'Potent Hypnosis': 0,
      'Relief Bloodline': 0,
      'Savior Bloodline': 0
    },
    stats: {
      st: 15,
      ma: 15,
      en: 15,
      ag: 15,
      lu: 15
    },
    trait: 'Ultimate Vessel',
    area: 'Kaitul',
    floor: 'L1-5, 7-9',
    alarmItem: {
      name: 'Queen\'s Necklace R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Queen\'s Necklace'
  },
  Quetzalcoatl: {
    inherits: 'Wind',
    item: {
      name: 'Magarudyne',
      type: 'Skill Card'
    },
    level: 66,
    arcana: 'Sun',
    skills: {
      Magarula: 0,
      Garudyne: 0,
      'Memory Blow': 0,
      'Growth 3': 68,
      'Regenerate 3': 69,
      Magarudyne: 70,
      'Wind Amp': 71
    },
    stats: {
      st: 41,
      ma: 46,
      en: 41,
      ag: 43,
      lu: 34
    },
    trait: 'Wind Bloodline',
    alarmItem: {
      name: 'Panta Rhei',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Quetzalcoatl'
  },
  'Raja Naga': {
    inherits: 'Electric',
    item: {
      name: 'Thunder Ring',
      type: 'Item'
    },
    level: 55,
    arcana: 'Temperance',
    skills: {
      Ziodyne: 0,
      'Elec Break': 0,
      Tentarafoo: 0,
      'Shock Boost': 57,
      Makarakarn: 58,
      Maziodyne: 59,
      'Evade Wind': 60
    },
    stats: {
      st: 33,
      ma: 37,
      en: 36,
      ag: 35,
      lu: 31
    },
    trait: 'Electric Bloodline',
    alarmItem: {
      name: 'Spiral Thunder Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Raja Naga'
  },
  Rakshasa: {
    inherits: 'Physical',
    item: {
      name: 'Regenerate 1',
      type: 'Skill Card'
    },
    level: 24,
    arcana: 'Strength',
    skills: {
      'Giant Slice': 0,
      'Wind Wall': 0,
      Tarukaja: 0,
      'Regenerate 1': 26,
      'Mind Slice': 27,
      Counterstrike: 28,
      'Adverse Resolve': 30
    },
    stats: {
      st: 20,
      ma: 15,
      en: 18,
      ag: 17,
      lu: 9
    },
    trait: 'Skillful Combo',
    personality: 'Irritable',
    area: 'Kaitul',
    floor: 'L5, 7-9',
    alarmItem: {
      name: 'Regenerate 2',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rs'
    },
    name: 'Rakshasa'
  },
  Rangda: {
    inherits: 'Curse',
    item: {
      name: 'Maeiga',
      type: 'Skill Card'
    },
    level: 48,
    arcana: 'Magician',
    skills: {
      'Swift Strike': 0,
      Bloodbath: 0,
      Counterstrike: 0,
      Eigaon: 49,
      Matarunda: 51,
      Mudoon: 53
    },
    stats: {
      st: 28,
      ma: 34,
      en: 30,
      ag: 33,
      lu: 26
    },
    trait: 'Cursed Bloodline',
    area: 'Sheriruth',
    floor: 'L11-13 (before Palace 7) / L5 (after Palace 7)',
    alarmItem: {
      name: 'Eigaon',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rp',
      gun: 'rp',
      fire: 'nu',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Rangda'
  },
  Raphael: {
    inherits: 'Almighty',
    item: {
      name: 'Null Bless',
      type: 'Skill Card'
    },
    level: 78,
    arcana: 'Lovers',
    skills: {
      'Sword Dance': 0,
      Charge: 0,
      Dekaja: 0,
      'Heat Riser': 80,
      'Growth 3': 81,
      'Adverse Resolve': 82,
      'Arms Master': 83
    },
    stats: {
      st: 57,
      ma: 45,
      en: 49,
      ag: 55,
      lu: 35
    },
    trait: 'Pinch Anchor',
    alarmItem: {
      name: 'Repel Bless',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: 'nu',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'Raphael'
  },
  'Red Rider': {
    inherits: 'Psy',
    item: {
      name: 'Karma Ring',
      type: 'Item'
    },
    level: 41,
    arcana: 'Tower',
    skills: {
      'Rising Slash': 0,
      'Psy Break': 0,
      Mapsio: 0,
      'Negative Pile': 42,
      'Despair Boost': 44,
      'Ominous Words': 45,
      'Last Stand': 46
    },
    stats: {
      st: 26,
      ma: 27,
      en: 25,
      ag: 29,
      lu: 23
    },
    trait: 'Ailment Hunter',
    alarmItem: {
      name: 'Spiral Karma Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Red Rider'
  },
  Regent: {
    rare: true,
    item: {
      name: 'Regent',
      type: 'Item'
    },
    level: 10,
    arcana: 'Emperor',
    skills: {
      Maragi: 0,
      Mabufu: 0,
      Magaru: 0,
      Mazio: 0,
      Mapsi: 0,
      Mafrei: 0,
      Makouha: 0,
      Maeiha: 0,
      'Mighty Gaze': 0,
      'Skillful Technique': 0,
      'Skillful Combo': 0
    },
    stats: {
      st: 10,
      ma: 10,
      en: 10,
      ag: 10,
      lu: 10
    },
    trait: 'Ultimate Vessel',
    area: 'Qimranut / Aiyatsbus / Chemdah',
    floor: 'Any / L1-3, 5 & 6 / L1-4, 6 & 7',
    alarmItem: {
      name: 'Regent R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Regent'
  },
  'Saki Mitama': {
    inherits: 'Healing',
    item: {
      name: 'Energy Charm',
      type: 'Item'
    },
    level: 6,
    arcana: 'Lovers',
    skills: {
      Bufu: 0,
      'Energy Drop': 0,
      'Wind Wall': 0,
      'Growth 1': 7,
      Rakukaja: 8,
      'Resist Dizzy': 10
    },
    stats: {
      st: 4,
      ma: 6,
      en: 5,
      ag: 6,
      lu: 4
    },
    trait: 'Internal Hypnosis',
    alarmItem: {
      name: 'Spiral Energy Charm',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Saki Mitama'
  },
  Sandalphon: {
    inherits: 'Bless',
    item: {
      name: 'Sword of Sinai',
      type: 'Item'
    },
    level: 75,
    arcana: 'Moon',
    skills: {
      Mahamaon: 0,
      Samarecarm: 0,
      'Amrita Shower': 0,
      'Angelic Grace': 77,
      'Repel Curse': 78,
      'Sword Dance': 79,
      Megidolaon: 81
    },
    stats: {
      st: 46,
      ma: 51,
      en: 49,
      ag: 48,
      lu: 38
    },
    trait: 'Omen',
    max: true,
    alarmItem: {
      name: 'Sword of Sinai II',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'nu'
    },
    name: 'Sandalphon'
  },
  Sandman: {
    inherits: 'Wind',
    item: {
      name: 'Dormina',
      type: 'Skill Card'
    },
    level: 23,
    arcana: 'Magician',
    skills: {
      Dormina: 0,
      Garula: 0,
      'Dormin Rush': 0,
      Sukunda: 24,
      'Null Sleep': 26,
      Magarula: 27,
      'Sleep Boost': 28
    },
    stats: {
      st: 11,
      ma: 13,
      en: 14,
      ag: 17,
      lu: 21
    },
    trait: 'Foul Odor',
    area: 'Akzeriyyuth',
    floor: 'L1-3',
    alarmItem: {
      name: 'Lullaby',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: 'wk',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Sandman'
  },
  Sarasvati: {
    inherits: 'Healing',
    item: {
      name: 'Mediarama',
      type: 'Skill Card'
    },
    level: 50,
    arcana: 'Priestess',
    skills: {
      Mediarama: 0,
      'Ice Wall': 0,
      Tentarafoo: 0,
      'Psy Wall': 51,
      Dekaja: 52,
      Matarunda: 53,
      Diarahan: 54
    },
    stats: {
      st: 30,
      ma: 35,
      en: 32,
      ag: 33,
      lu: 27
    },
    trait: 'Relief Bloodline',
    area: 'Sheriruth',
    floor: 'L7-9. 12 (after Palace 7)',
    alarmItem: {
      name: 'Diarahan',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Sarasvati'
  },
  Satan: {
    inherits: 'Ice',
    item: {
      name: 'Tantric Oath',
      type: 'Item'
    },
    level: 92,
    arcana: 'Judgement',
    skills: {
      'Diamond Dust': 0,
      'Ice Age': 0,
      'Regenerate 3': 0,
      'Black Viper': 94,
      'Invigorate 3': 95,
      'Fortify Spirit': 96,
      Concentrate: 97,
      'Absorb Ice': 98
    },
    stats: {
      st: 62,
      ma: 59,
      en: 55,
      ag: 52,
      lu: 55
    },
    trait: 'Cocytus',
    max: true,
    alarmItem: {
      name: 'Tantric Oath R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: 'rp',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rp'
    },
    name: 'Satan'
  },
  Satanael: {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Paradise Lost',
      type: 'Item'
    },
    level: 95,
    arcana: 'Fool',
    skills: {
      Maeigaon: 0,
      Megidolaon: 0,
      'Survival Trick': 0,
      'Riot Gun': 0,
      'Black Viper': 96,
      'Heat Riser': 97,
      'Tyrant\'s Mind': 98,
      'Victory Cry': 99
    },
    stats: {
      st: 63,
      ma: 60,
      en: 57,
      ag: 56,
      lu: 56
    },
    trait: 'Pagan Allure',
    note: 'Only available on NG+',
    alarmItem: {
      name: 'Paradise Lost R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: 'rs',
      bless: 'nu',
      curse: 'ab'
    },
    name: 'Satanael'
  },
  Scathach: {
    inherits: 'Wind',
    item: {
      name: 'Makarakarn',
      type: 'Skill Card'
    },
    level: 77,
    arcana: 'Priestess',
    skills: {
      Mabufudyne: 0,
      'Myriad Slashes': 0,
      Makarakarn: 0,
      'Freeze Boost': 78,
      Matarukaja: 79,
      'Vorpal Blade': 81,
      'Attack Master': 82
    },
    stats: {
      st: 48,
      ma: 52,
      en: 46,
      ag: 48,
      lu: 44
    },
    trait: 'Skillful Technique',
    area: 'Adyeshach',
    floor: 'L10-12',
    alarmItem: {
      name: 'Tetrakarn',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'rp',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Scathach'
  },
  Seiryu: {
    inherits: 'Ice',
    item: {
      name: 'Blizzard Ring',
      type: 'Item'
    },
    level: 62,
    arcana: 'Councillor',
    skills: {
      Bufudyne: 0,
      Diarahan: 0,
      Marakukaja: 0,
      'Repel Nuke': 63,
      Mabufudyne: 65,
      'Amrita Drop': 66,
      Makarakarn: 67
    },
    stats: {
      st: 38,
      ma: 41,
      en: 43,
      ag: 37,
      lu: 34
    },
    trait: 'Relentless',
    alarmItem: {
      name: 'Spiral Blizzard Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Seiryu'
  },
  Setanta: {
    inherits: 'Physical',
    item: {
      name: 'Rebellion Anklet',
      type: 'Item'
    },
    level: 25,
    arcana: 'Emperor',
    skills: {
      'Giant Slice': 0,
      'Dormin Rush': 0,
      Counter: 0,
      Charge: 27,
      Rebellion: 29,
      'Rising Slash': 30
    },
    stats: {
      st: 19,
      ma: 16,
      en: 18,
      ag: 13,
      lu: 16
    },
    trait: 'Retaliating Body',
    alarmItem: {
      name: 'Revolution Anklet',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Setanta'
  },
  Seth: {
    special: true,
    inherits: 'Fire',
    item: {
      name: 'Triple Shot Belt',
      type: 'Item'
    },
    level: 51,
    arcana: 'Tower',
    skills: {
      'One-shot Kill': 0,
      Agidyne: 0,
      Masukukaja: 0,
      'Gun Amp': 53,
      'Fire Break': 54,
      'Fortify Spirit': 56
    },
    stats: {
      st: 32,
      ma: 35,
      en: 30,
      ag: 35,
      lu: 28
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Special Shot Belt',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rp',
      ice: '-',
      electric: '-',
      wind: 'nu',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rs'
    },
    name: 'Seth'
  },
  Shiisaa: {
    inherits: 'Electric',
    item: {
      name: 'Double Fangs',
      type: 'Skill Card'
    },
    level: 15,
    arcana: 'Strength',
    skills: {
      'Double Fangs': 0,
      'Skull Cracker': 0,
      Frei: 0,
      'Dodge Curse': 16,
      Rampage: 17,
      'Dodge Elec': 19
    },
    stats: {
      st: 10,
      ma: 11,
      en: 11,
      ag: 11,
      lu: 9
    },
    trait: 'Atomic Bloodline',
    alarmItem: {
      name: 'Cornered Fang',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Shiisaa'
  },
  'Shiki-Ouji': {
    inherits: 'Psy',
    item: {
      name: 'Double Shot',
      type: 'Skill Card'
    },
    level: 18,
    arcana: 'Chariot',
    skills: {
      Tarukaja: 0,
      Taunt: 0,
      'Double Shot': 0,
      Mapsi: 19,
      Dekaja: 21,
      Psio: 23,
      'Oni Kagura': 24
    },
    stats: {
      st: 16,
      ma: 14,
      en: 12,
      ag: 9,
      lu: 10
    },
    trait: 'Psychic Bloodline',
    area: 'Chemdah',
    floor: 'L6 & 7',
    alarmItem: {
      name: 'Triple Down',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'nu',
      gun: 'nu',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Shiki-Ouji'
  },
  Shiva: {
    special: true,
    inherits: 'Psy',
    item: {
      name: 'Megido Fire',
      type: 'Item'
    },
    level: 82,
    arcana: 'Judgement',
    skills: {
      'Psycho Force': 0,
      Maziodyne: 0,
      'Enduring Soul': 0,
      'Riot Gun': 85,
      Megidolaon: 86,
      'Auto-Mataru': 87,
      'Psycho Blast': 88
    },
    stats: {
      st: 55,
      ma: 54,
      en: 53,
      ag: 53,
      lu: 38
    },
    trait: 'Psychic Bloodline',
    alarmItem: {
      name: 'Megido Blaster',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'rp',
      wind: '-',
      psychic: 'ab',
      nuclear: 'wk',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Shiva'
  },
  Siegfried: {
    inherits: 'Physical',
    item: {
      name: 'Vorpal Blade Belt',
      type: 'Item'
    },
    level: 84,
    arcana: 'Faith',
    skills: {
      'Brave Blade': 0,
      Masukukaja: 0,
      'High Counter': 0,
      Charge: 85,
      'Apt Pupil': 87,
      'Vorpal Blade': 89,
      'Auto-Mataru': 90
    },
    stats: {
      st: 61,
      ma: 43,
      en: 55,
      ag: 55,
      lu: 45
    },
    trait: 'Retaliating Body',
    alarmItem: {
      name: 'Brave Belt',
      type: 'Item'
    },
    affinities: {
      physical: 'nu',
      gun: 'rs',
      fire: '-',
      ice: 'rs',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Siegfried'
  },
  Silky: {
    inherits: 'Healing',
    item: {
      name: 'Silk Dress',
      type: 'Item'
    },
    level: 6,
    arcana: 'Priestess',
    skills: {
      Dormina: 0,
      Bufu: 0,
      Dia: 7,
      Patra: 9,
      'Sharp Student': 10
    },
    stats: {
      st: 4,
      ma: 7,
      en: 4,
      ag: 5,
      lu: 5
    },
    trait: 'Intense Focus',
    area: 'Aiyatsbus',
    floor: 'L2, 3, 5 & 6',
    alarmItem: {
      name: 'Fine Silk Dress',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rs',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Silky'
  },
  Skadi: {
    inherits: 'Ice',
    item: {
      name: 'Snow Queen\'s Whip',
      type: 'Item'
    },
    level: 53,
    arcana: 'Priestess',
    skills: {
      'Deadly Fury': 0,
      'Evil Smile': 0,
      'Fear Boost': 0,
      'Ghastly Wail': 54,
      Mabufudyne: 56,
      Maeigaon: 57,
      'Spirit Drain': 58
    },
    stats: {
      st: 33,
      ma: 39,
      en: 32,
      ag: 34,
      lu: 28
    },
    trait: 'Bloodstained Eyes',
    area: 'Sheriruth',
    floor: 'L12 & 13 (before Palace 7) / L5 (after Palace 7)',
    alarmItem: {
      name: 'Snow Queen\'s Whip II',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rp',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Skadi'
  },
  Slime: {
    inherits: 'Curse',
    item: {
      name: 'Tarunda',
      type: 'Skill Card'
    },
    level: 10,
    arcana: 'Chariot',
    skills: {
      Lunge: 0,
      'Evil Touch': 0,
      Tarunda: 11,
      'Fire Wall': 13,
      Headbutt: 14
    },
    stats: {
      st: 9,
      ma: 6,
      en: 11,
      ag: 6,
      lu: 5
    },
    trait: 'Rare Antibody',
    area: 'Qimranut / Aiyatsbus',
    floor: 'Any / L1, 2, 3, 6',
    alarmItem: {
      name: 'Matarunda',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Slime'
  },
  Sraosha: {
    special: true,
    inherits: 'Bless',
    item: {
      name: 'Archangel Bra',
      type: 'Item'
    },
    level: 80,
    arcana: 'Star',
    skills: {
      Kougaon: 0,
      Mahamaon: 0,
      'Hama Boost': 0,
      Makougaon: 81,
      'Angelic Grace': 83,
      'Amrita Shower': 84,
      Debilitate: 85
    },
    stats: {
      st: 47,
      ma: 56,
      en: 45,
      ag: 56,
      lu: 43
    },
    trait: 'Blessed Bloodline',
    alarmItem: {
      name: 'High Archangel Bra',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'ab',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'wk'
    },
    name: 'Sraosha'
  },
  'Stone of Scone': {
    rare: true,
    item: {
      name: 'Stone of Scone',
      type: 'Item'
    },
    level: 20,
    arcana: 'Fortune',
    skills: {
      Agilao: 0,
      Bufula: 0,
      Garula: 0,
      Zionga: 0,
      Psio: 0,
      Freila: 0,
      Kouga: 0,
      Eiga: 0,
      Relentless: 0,
      Gluttonmouth: 0,
      'Intense Focus': 0
    },
    stats: {
      st: 20,
      ma: 20,
      en: 20,
      ag: 20,
      lu: 20
    },
    trait: 'Ultimate Vessel',
    area: 'Akzeriyyuth',
    floor: 'L1-3, 5-7, 9-11',
    alarmItem: {
      name: 'Stone of Scone R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Stone of Scone'
  },
  Succubus: {
    inherits: 'Curse',
    item: {
      name: 'Brain Shot',
      type: 'Item'
    },
    level: 7,
    arcana: 'Moon',
    skills: {
      Dormina: 0,
      Rebellion: 0,
      Agi: 8,
      Dekaja: 10,
      'Sleep Boost': 11,
      Mudo: 12
    },
    stats: {
      st: 4,
      ma: 7,
      en: 5,
      ag: 8,
      lu: 4
    },
    trait: 'Foul Odor',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    alarmItem: {
      name: 'Pink Buster',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Succubus'
  },
  Sudama: {
    inherits: 'Psy',
    item: {
      name: 'Mapsi',
      type: 'Skill Card'
    },
    level: 17,
    arcana: 'Hermit',
    skills: {
      Mapsi: 0,
      'Lucky Punch': 0,
      Tarukaja: 0,
      'Ambient Aid': 20,
      'Wind Wall': 21,
      'Apt Pupil': 22,
      Psio: 23
    },
    stats: {
      st: 9,
      ma: 14,
      en: 12,
      ag: 13,
      lu: 10
    },
    trait: 'Gloomy Child',
    area: 'Chemdah',
    floor: 'L6 & 7',
    alarmItem: {
      name: 'Psio',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Sudama'
  },
  'Sui-Ki': {
    inherits: 'Ice',
    item: {
      name: 'Bufula',
      type: 'Skill Card'
    },
    level: 24,
    arcana: 'Moon',
    skills: {
      Mabufu: 0,
      Sledgehammer: 0,
      Bufula: 0,
      'Null Ice': 26,
      'Wage War': 27,
      Mabufula: 28,
      'Dodge Fire': 29
    },
    stats: {
      st: 16,
      ma: 15,
      en: 15,
      ag: 18,
      lu: 15
    },
    trait: 'Frigid Bloodline',
    area: 'Kaitul',
    floor: 'L7-9',
    alarmItem: {
      name: 'Mabufula',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: 'ab',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Sui-Ki'
  },
  Surt: {
    inherits: 'Fire',
    item: {
      name: 'Maragidyne',
      type: 'Skill Card'
    },
    level: 83,
    arcana: 'Magician',
    skills: {
      'Blazing Hell': 0,
      'Attack Master': 0,
      'Brave Blade': 0,
      'Fire Amp': 84,
      Marakunda: 85,
      'Evade Ice': 86,
      Gigantomachia: 88
    },
    stats: {
      st: 55,
      ma: 54,
      en: 51,
      ag: 50,
      lu: 46
    },
    trait: 'Heated Bloodline',
    alarmItem: {
      name: 'Inferno',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: 'ab',
      ice: 'wk',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Surt'
  },
  Suzaku: {
    inherits: 'Nuclear',
    item: {
      name: 'Atom Ring',
      type: 'Item'
    },
    level: 16,
    arcana: 'Sun',
    skills: {
      Frei: 0,
      Tarunda: 0,
      'Marin Karin': 0,
      Dekunda: 18,
      Mafrei: 19,
      'Speed Master': 20,
      Matarunda: 21
    },
    stats: {
      st: 9,
      ma: 12,
      en: 10,
      ag: 15,
      lu: 9
    },
    trait: 'Gluttonmouth',
    alarmItem: {
      name: 'Spiral Atom Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Suzaku'
  },
  'Take-Minakata': {
    inherits: 'Electric',
    item: {
      name: 'Zionga',
      type: 'Skill Card'
    },
    level: 26,
    arcana: 'Hanged Man',
    skills: {
      Zionga: 0,
      'Assault Dive': 0,
      'Defense Master': 0,
      Mazionga: 27,
      'Elec Boost': 29,
      'Swift Strike': 31,
      'Shock Boost': 32
    },
    stats: {
      st: 17,
      ma: 19,
      en: 18,
      ag: 16,
      lu: 15
    },
    trait: 'Electric Bloodline',
    area: 'Kaitul',
    floor: 'L7-9',
    alarmItem: {
      name: 'Mazionga',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Take-Minakata'
  },
  'Tam Lin': {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Fairy Knight Armor',
      type: 'Item'
    },
    level: 27,
    arcana: 'Faith',
    skills: {
      'Assault Dive': 0,
      'Brain Shake': 0,
      Rebellion: 0,
      'Sharp Student': 28,
      'Brain Buster': 30,
      'Brainwash Boost': 31,
      'Heat Up': 32
    },
    stats: {
      st: 21,
      ma: 16,
      en: 18,
      ag: 16,
      lu: 17
    },
    trait: 'Gluttonmouth',
    alarmItem: {
      name: 'Fairy Hero Armor',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'ab',
      curse: 'wk'
    },
    name: 'Tam Lin'
  },
  Thor: {
    inherits: 'Electric',
    item: {
      name: 'Mjolnir',
      type: 'Item'
    },
    level: 64,
    arcana: 'Chariot',
    skills: {
      Ziodyne: 0,
      'Megaton Raid': 0,
      'High Counter': 0,
      'Elec Amp': 66,
      Maziodyne: 67,
      'Heat Up': 68,
      'Wild Thunder': 71
    },
    stats: {
      st: 44,
      ma: 39,
      en: 43,
      ag: 38,
      lu: 35
    },
    trait: 'Intense Focus',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Imprisoned Mjolnir',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Thor'
  },
  Thoth: {
    inherits: 'Nuclear',
    item: {
      name: 'Mafreila',
      type: 'Skill Card'
    },
    level: 36,
    arcana: 'Emperor',
    skills: {
      Taunt: 0,
      Freila: 0,
      Masukunda: 0,
      Megido: 37,
      'Psy Wall': 39,
      Concentrate: 40,
      'Growth 2': 42
    },
    stats: {
      st: 21,
      ma: 28,
      en: 21,
      ag: 24,
      lu: 21
    },
    trait: 'Skillful Technique',
    area: 'Akzeriyyuth',
    floor: 'L6, 7, 9-11',
    alarmItem: {
      name: 'Freidyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'nu',
      bless: 'nu',
      curse: 'rs'
    },
    name: 'Thoth'
  },
  Throne: {
    inherits: 'Bless',
    item: {
      name: 'Spiral Divine Ring',
      type: 'Item'
    },
    level: 72,
    arcana: 'Justice',
    skills: {
      Agidyne: 0,
      Hamaon: 0,
      'Burn Boost': 0,
      'Fire Amp': 74,
      Makougaon: 75,
      'Invigorate 3': 76,
      Inferno: 78
    },
    stats: {
      st: 42,
      ma: 49,
      en: 43,
      ag: 46,
      lu: 43
    },
    trait: 'Crisis Control',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'Judgement Cross',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: 'nu',
      psychic: '-',
      nuclear: 'wk',
      bless: 'rp',
      curse: '-'
    },
    name: 'Throne'
  },
  Thunderbird: {
    inherits: 'Electric',
    item: {
      name: 'Elec Boost',
      type: 'Skill Card'
    },
    level: 34,
    arcana: 'Sun',
    skills: {
      Mazionga: 0,
      Tarukaja: 0,
      'Shock Boost': 0,
      Rebellion: 35,
      Ziodyne: 37,
      'Elec Boost': 38,
      Maziodyne: 39
    },
    stats: {
      st: 17,
      ma: 24,
      en: 24,
      ag: 26,
      lu: 18
    },
    trait: 'Electric Bloodline',
    alarmItem: {
      name: 'Elec Amp',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'ab',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: 'wk'
    },
    name: 'Thunderbird'
  },
  Titania: {
    inherits: 'Nuclear',
    item: {
      name: 'Freidyne',
      type: 'Skill Card'
    },
    level: 56,
    arcana: 'Empress',
    skills: {
      Freidyne: 0,
      Ziodyne: 0,
      Lullaby: 0,
      Concentrate: 59,
      'Nuke Amp': 60,
      Mediarahan: 61
    },
    stats: {
      st: 32,
      ma: 40,
      en: 35,
      ag: 38,
      lu: 30
    },
    trait: 'Foul Stench',
    area: 'Sheriruth',
    floor: 'L8, 9, 11-13 (after Palace 7)',
    alarmItem: {
      name: 'Mafreidyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'rs',
      bless: 'rs',
      curse: 'rs'
    },
    name: 'Titania'
  },
  Trumpeter: {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Reactor Ring',
      type: 'Item'
    },
    level: 59,
    arcana: 'Judgement',
    skills: {
      Mafreidyne: 0,
      'Abysmal Surge': 0,
      'Brain Buster': 0,
      'Fortify Spirit': 61,
      'Gun Amp': 62,
      'Life Aid': 63,
      Debilitate: 65
    },
    stats: {
      st: 33,
      ma: 42,
      en: 40,
      ag: 38,
      lu: 31
    },
    trait: 'Relentless',
    alarmItem: {
      name: 'Spiral Reactor Ring',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: 'rp',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'nu'
    },
    name: 'Trumpeter'
  },
  Unicorn: {
    inherits: 'Bless',
    item: {
      name: 'Mahama',
      type: 'Skill Card'
    },
    level: 39,
    arcana: 'Faith',
    skills: {
      'Assault Dive': 0,
      Mahama: 0,
      Dekunda: 0,
      Samarecarm: 41,
      'Swift Strike': 42,
      Kougaon: 43,
      Hamaon: 44
    },
    stats: {
      st: 20,
      ma: 27,
      en: 25,
      ag: 28,
      lu: 24
    },
    trait: 'Blessed Bloodline',
    area: 'Sheriruth',
    floor: 'L1-4 (before Palace 7) / L1 & 2 (after Palace 7)',
    alarmItem: {
      name: 'Hamaon',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Unicorn'
  },
  Uriel: {
    inherits: 'Almighty',
    item: {
      name: 'Heaven\'s Gate',
      type: 'Item'
    },
    level: 81,
    arcana: 'Justice',
    skills: {
      Deathbound: 0,
      'Myriad Slashes': 0,
      Bloodbath: 0,
      'Repel Nuke': 83,
      Megidolaon: 84,
      'Angelic Grace': 85,
      'Spell Master': 86
    },
    stats: {
      st: 50,
      ma: 54,
      en: 49,
      ag: 55,
      lu: 42
    },
    trait: 'Mouth of Savoring',
    alarmItem: {
      name: 'Providence',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'ab',
      bless: 'rp',
      curse: '-'
    },
    name: 'Uriel'
  },
  Valkyrie: {
    inherits: 'Physical',
    item: {
      name: 'Rising Slash',
      type: 'Skill Card'
    },
    level: 44,
    arcana: 'Strength',
    skills: {
      'Rising Slash': 0,
      Counterstrike: 0,
      'Attack Master': 45,
      Deathbound: 46,
      Matarukaja: 47,
      'Dodge Phys': 49
    },
    stats: {
      st: 33,
      ma: 24,
      en: 28,
      ag: 29,
      lu: 25
    },
    trait: 'Skillful Combo',
    area: 'Sheriruth',
    floor: 'L3-5, 7-9 (before Palace 7) / L2-4 (after Palace 7)',
    alarmItem: {
      name: 'Deadly Fury',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: 'wk',
      ice: 'rp',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    },
    name: 'Valkyrie'
  },
  Vasuki: {
    special: true,
    inherits: 'Ailment',
    item: {
      name: 'Kuzuryu Gouhou',
      type: 'Item'
    },
    level: 68,
    arcana: 'Star',
    skills: {
      Mahamaon: 0,
      'Brain Jack': 0,
      'Triple Down': 0,
      'Trigger Happy': 70,
      Makarakarn: 71,
      'Brainwash Boost': 72,
      'Null Curse': 73
    },
    stats: {
      st: 42,
      ma: 45,
      en: 44,
      ag: 42,
      lu: 38
    },
    trait: 'Foul Stench',
    alarmItem: {
      name: 'Kuzuryu Gouhou EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: 'nu',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'wk'
    },
    name: 'Vasuki'
  },
  Vishnu: {
    inherits: 'Almighty',
    item: {
      name: 'Sudarshana',
      type: 'Item'
    },
    level: 83,
    arcana: 'Fool',
    skills: {
      Megidolaon: 0,
      Magarudyne: 0,
      'Ali Dance': 0,
      'Vacuum Wave': 85,
      Concentrate: 86,
      'Repel Fire': 87,
      'Wind Amp': 88,
      'Riot Gun': 90
    },
    stats: {
      st: 56,
      ma: 51,
      en: 49,
      ag: 57,
      lu: 43
    },
    trait: 'Vahana\'s Wings',
    max: true,
    alarmItem: {
      name: 'Sudarshana EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'ab',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Vishnu'
  },
  'Vohu Manah': {
    inherits: 'Almighty',
    item: {
      name: 'Doomsday',
      type: 'Item'
    },
    level: 80,
    arcana: 'Councillor',
    skills: {
      'Divine Judgement': 0,
      'Bless Amp': 0,
      Makougaon: 0,
      'Absorb Bless': 82,
      'Fortify Spirit': 83,
      'Invigorate 3': 84,
      Salvation: 85
    },
    stats: {
      st: 46,
      ma: 59,
      en: 45,
      ag: 56,
      lu: 41
    },
    trait: 'Positive Thoughts',
    max: true,
    alarmItem: {
      name: 'Ancient Day',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'ab',
      curse: 'nu'
    },
    name: 'Vohu Manah'
  },
  'White Rider': {
    inherits: 'Curse',
    item: {
      name: 'Gun Boost',
      type: 'Skill Card'
    },
    level: 38,
    arcana: 'Chariot',
    skills: {
      'Triple Down': 0,
      'Evil Touch': 0,
      'Oni Kagura': 0,
      'Gun Boost': 40,
      Maeiga: 41,
      Masukukaja: 42,
      'Foul Breath': 43,
      'Ailment Boost': 44
    },
    stats: {
      st: 22,
      ma: 21,
      en: 26,
      ag: 27,
      lu: 25
    },
    trait: 'Bloodstained Eyes',
    alarmItem: {
      name: 'Gun Amp',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'rp'
    },
    name: 'White Rider'
  },
  Yaksini: {
    inherits: 'Ice',
    item: {
      name: 'Hysterical Slap',
      type: 'Skill Card'
    },
    level: 20,
    arcana: 'Empress',
    skills: {
      'Hysterical Slap': 0,
      'Wage War': 0,
      Counter: 0,
      'Oni Kagura': 22,
      'Attack Master': 23,
      'Vicious Strike': 24
    },
    stats: {
      st: 14,
      ma: 11,
      en: 13,
      ag: 16,
      lu: 13
    },
    trait: 'Foul Odor',
    area: 'Kaitul',
    floor: 'L3-5, 7',
    alarmItem: {
      name: 'Oni Kagura',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    },
    name: 'Yaksini'
  },
  'Yamata-no-Orochi': {
    inherits: 'Ice',
    item: {
      name: 'Triple Down',
      type: 'Skill Card'
    },
    level: 64,
    arcana: 'Judgement',
    skills: {
      'One-shot Kill': 0,
      Mabufudyne: 0,
      'Freeze Boost': 0,
      'Absorb Ice': 66,
      'Ice Amp': 67,
      'Diamond Dust': 69
    },
    stats: {
      st: 44,
      ma: 38,
      en: 48,
      ag: 36,
      lu: 33
    },
    trait: 'Cold-Blooded',
    area: 'Da\'at',
    floor: 'All',
    alarmItem: {
      name: 'One-shot Kill',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    },
    name: 'Yamata-no-Orochi'
  },
  Yatagarasu: {
    inherits: 'Fire',
    item: {
      name: 'Black Wing Robe',
      type: 'Item'
    },
    level: 57,
    arcana: 'Councillor',
    skills: {
      Agidyne: 0,
      'Makara Break': 0,
      Dekunda: 0,
      Mediarahan: 59,
      'Last Stand': 60,
      'Wind Break': 61,
      'Null Wind': 64
    },
    stats: {
      st: 35,
      ma: 41,
      en: 30,
      ag: 40,
      lu: 32
    },
    trait: 'Potent Hypnosis',
    alarmItem: {
      name: 'Black Wing Robe R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    },
    name: 'Yatagarasu'
  },
  Yoshitsune: {
    special: true,
    inherits: 'Physical',
    item: {
      name: 'Usumidori',
      type: 'Item'
    },
    level: 87,
    arcana: 'Tower',
    skills: {
      'Brave Blade': 0,
      Charge: 0,
      Ziodyne: 0,
      'Last Stand': 89,
      'Fast Heal': 90,
      'Elec Amp': 92,
      'Hassou Tobi': 94
    },
    stats: {
      st: 63,
      ma: 52,
      en: 50,
      ag: 54,
      lu: 49
    },
    trait: 'Retaliating Body',
    alarmItem: {
      name: 'Usumidori R',
      type: 'Item'
    },
    affinities: {
      physical: 'nu',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: '-'
    },
    name: 'Yoshitsune'
  },
  Yurlungur: {
    inherits: 'Electric',
    item: {
      name: 'Mirrirmina',
      type: 'Item'
    },
    level: 43,
    arcana: 'Sun',
    skills: {
      'Brain Jack': 0,
      Mazionga: 0,
      Megidola: 0,
      Revolution: 45,
      'Elec Break': 46,
      'Tetra Break': 48,
      'Elec Boost': 49
    },
    stats: {
      st: 26,
      ma: 29,
      en: 30,
      ag: 27,
      lu: 24
    },
    trait: 'Mouth of Savoring',
    alarmItem: {
      name: 'Mirrirmina EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    },
    name: 'Yurlungur'
  },
  'Zaou-Gongen': {
    inherits: 'Fire',
    item: {
      name: 'God\'s Hand Belt',
      type: 'Item'
    },
    level: 80,
    arcana: 'Strength',
    skills: {
      Maragidyne: 0,
      'Abysmal Surge': 0,
      'God\'s Hand': 0,
      'Evade Phys': 82,
      'Enduring Soul': 83,
      'Gun Amp': 84,
      'Blazing Hell': 86
    },
    stats: {
      st: 57,
      ma: 45,
      en: 50,
      ag: 56,
      lu: 39
    },
    trait: 'Undying Fury',
    max: true,
    alarmItem: {
      name: 'Gigantomachia Belt',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rp',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Zaou-Gongen'
  },
  Zouchouten: {
    inherits: 'Electric',
    item: {
      name: 'Spark Ring',
      type: 'Item'
    },
    level: 31,
    arcana: 'Strength',
    skills: {
      'Kill Rush': 0,
      Zionga: 0,
      'Terror Claw': 32,
      'Sharp Student': 33,
      'Resist Fear': 34,
      'Swift Strike': 35,
      'Attack Master': 36
    },
    stats: {
      st: 22,
      ma: 19,
      en: 24,
      ag: 18,
      lu: 17
    },
    trait: 'Electric Bloodline',
    alarmItem: {
      name: 'Spiral Spark Ring',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Zouchouten'
  },
  Ariadne: {
    inherits: 'Almighty',
    item: {
      name: 'Red String',
      type: 'Item'
    },
    level: 30,
    arcana: 'Fortune',
    skills: {
      'Beast Weaver': 0,
      'Apt Pupil': 0,
      'Miracle Punch': 0,
      'Attack Master': 31,
      'Fortified Moxy': 32,
      'Evade Phys': 34,
      Charge: 36
    },
    stats: {
      st: 23,
      ma: 19,
      en: 20,
      ag: 17,
      lu: 18
    },
    trait: 'Tag Team',
    dlc: true,
    alarmItem: {
      name: 'Red String R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'nu',
      bless: 'rs',
      curse: '-'
    },
    name: 'Ariadne'
  },
  'Ariadne Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Auto-Mataru',
      type: 'Skill Card'
    },
    level: 42,
    arcana: 'Fortune',
    skills: {
      'Beast Weaver': 0,
      'Apt Pupil': 0,
      'Miracle Punch': 0,
      'Auto-Mataru': 43,
      'Heat Up': 44,
      'Evade Phys': 46,
      Charge: 48
    },
    stats: {
      st: 36,
      ma: 23,
      en: 29,
      ag: 24,
      lu: 21
    },
    trait: 'Tag Team',
    dlc: true,
    alarmItem: {
      name: 'Auto-Maraku',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'nu',
      bless: 'rs',
      curse: '-'
    },
    name: 'Ariadne Picaro'
  },
  Asterius: {
    inherits: 'Almighty',
    item: {
      name: 'Blazing Horns',
      type: 'Item'
    },
    level: 56,
    arcana: 'Fortune',
    skills: {
      Titanomachia: 0,
      Maragidyne: 0,
      'Burn Boost': 0,
      'Auto-Mataru': 57,
      'Fire Amp': 59,
      Tetrakarn: 60,
      Gigantomachia: 62
    },
    stats: {
      st: 43,
      ma: 43,
      en: 32,
      ag: 32,
      lu: 25
    },
    trait: 'Frenzied Bull',
    dlc: true,
    alarmItem: {
      name: 'Inferno Horns',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Asterius'
  },
  'Asterius Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Gigantomachia',
      type: 'Skill Card'
    },
    level: 62,
    arcana: 'Fortune',
    skills: {
      Titanomachia: 0,
      Maragidyne: 0,
      'Burn Boost': 0,
      'Auto-Masuku': 63,
      'Fire Amp': 65,
      Makarakarn: 66,
      Gigantomachia: 68
    },
    stats: {
      st: 46,
      ma: 46,
      en: 36,
      ag: 36,
      lu: 29
    },
    trait: 'Frenzied Bull',
    dlc: true,
    alarmItem: {
      name: 'Agneyastra',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Asterius Picaro'
  },
  Athena: {
    inherits: 'Almighty',
    item: {
      name: 'Kugelbein',
      type: 'Item'
    },
    level: 46,
    arcana: 'Chariot',
    skills: {
      'Akashic Arts': 0,
      Marakukaja: 0,
      'Rising Slash': 0,
      Diarahan: 47,
      Matarukaja: 48,
      'Auto-Maraku': 50,
      Samarecarm: 51,
      'Megaton Raid': 52
    },
    stats: {
      st: 33,
      ma: 27,
      en: 29,
      ag: 29,
      lu: 27
    },
    trait: 'Grace of the Olive',
    dlc: true,
    alarmItem: {
      name: 'Kugelbein R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Athena'
  },
  'Athena Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Charge',
      type: 'Skill Card'
    },
    level: 50,
    arcana: 'Chariot',
    skills: {
      'Akashic Arts': 0,
      Matarukaja: 0,
      'Rising Slash': 0,
      Diarahan: 51,
      Marakukaja: 52,
      'Auto-Mataru': 54,
      Samarecarm: 55,
      'Megaton Raid': 56
    },
    stats: {
      st: 35,
      ma: 30,
      en: 31,
      ag: 32,
      lu: 29
    },
    trait: 'Grace of the Olive',
    dlc: true,
    alarmItem: {
      name: 'Concentrate',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    },
    name: 'Athena Picaro'
  },
  Izanagi: {
    inherits: 'Almighty',
    item: {
      name: 'White Headband',
      type: 'Item'
    },
    level: 20,
    arcana: 'Fool',
    skills: {
      'Cross Slash': 0,
      Zionga: 0,
      Tarukaja: 0,
      'Rising Slash': 21,
      'Dodge Phys': 22,
      Mazionga: 24,
      'Growth 3': 25
    },
    stats: {
      st: 14,
      ma: 13,
      en: 13,
      ag: 14,
      lu: 13
    },
    trait: 'God Maker',
    dlc: true,
    alarmItem: {
      name: 'White Headband R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Izanagi'
  },
  'Izanagi Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Growth 2',
      type: 'Skill Card'
    },
    level: 23,
    arcana: 'Fool',
    skills: {
      'Cross Slash': 0,
      Zionga: 0,
      Rakukaja: 0,
      'Rising Slash': 24,
      'Null Phys': 25,
      Mazionga: 27,
      'Growth 3': 28
    },
    stats: {
      st: 16,
      ma: 15,
      en: 15,
      ag: 16,
      lu: 14
    },
    trait: 'God Maker',
    dlc: true,
    alarmItem: {
      name: 'Growth 3',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'nu',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    },
    name: 'Izanagi Picaro'
  },
  'Izanagi-no-Okami': {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Shiny Belt',
      type: 'Item'
    },
    level: 80,
    arcana: 'World',
    skills: {
      'Myriad Truths': 0,
      'Victory Cry': 0,
      'Angelic Grace': 0,
      Concentrate: 81,
      'Heat Riser': 82,
      'Heat Up': 83,
      Salvation: 84,
      'Almighty Boost': 85
    },
    stats: {
      st: 52,
      ma: 56,
      en: 46,
      ag: 48,
      lu: 45
    },
    trait: 'Country Maker',
    dlc: true,
    alarmItem: {
      name: 'Shiny Belt R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Izanagi-no-Okami'
  },
  'Izanagi-no-Okami Picaro': {
    special: true,
    inherits: 'Almighty',
    item: {
      name: 'Mediarahan',
      type: 'Skill Card'
    },
    level: 89,
    arcana: 'World',
    skills: {
      'Myriad Truths': 0,
      'Victory Cry': 0,
      'Angelic Grace': 0,
      Concentrate: 90,
      Debilitate: 91,
      'Enduring Soul': 92,
      Salvation: 93,
      'Almighty Boost': 94
    },
    stats: {
      st: 54,
      ma: 61,
      en: 56,
      ag: 58,
      lu: 45
    },
    trait: 'Country Maker',
    dlc: true,
    alarmItem: {
      name: 'Salvation',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    },
    name: 'Izanagi-no-Okami Picaro'
  },
  Kaguya: {
    inherits: 'Almighty',
    item: {
      name: 'Moonlight Robe',
      type: 'Item'
    },
    level: 16,
    arcana: 'Moon',
    skills: {
      'Shining Arrows': 0,
      Mediarama: 0,
      Counterstrike: 0,
      'Divine Grace': 17,
      'Amrita Shower': 18,
      Diarahan: 21,
      'Repel Phys': 22
    },
    stats: {
      st: 11,
      ma: 15,
      en: 12,
      ag: 11,
      lu: 6
    },
    trait: 'Inviolable Beauty',
    dlc: true,
    alarmItem: {
      name: 'Moonlight Robe R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Kaguya'
  },
  'Kaguya Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Diarahan',
      type: 'Skill Card'
    },
    level: 25,
    arcana: 'Moon',
    skills: {
      'Shining Arrows': 0,
      Mediarama: 0,
      'High Counter': 0,
      'Divine Grace': 26,
      'Amrita Shower': 27,
      Diarahan: 30,
      'Repel Phys': 31
    },
    stats: {
      st: 17,
      ma: 20,
      en: 19,
      ag: 15,
      lu: 11
    },
    trait: 'Inviolable Beauty',
    dlc: true,
    alarmItem: {
      name: 'Mediarahan',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Kaguya Picaro'
  },
  'Magatsu-Izanagi': {
    inherits: 'Almighty',
    item: {
      name: 'Black Headband',
      type: 'Item'
    },
    level: 44,
    arcana: 'Tower',
    skills: {
      'Magatsu Mandala': 0,
      Megidola: 0,
      'Ghastly Wail': 0,
      Maziodyne: 45,
      Bloodbath: 46,
      'Attack Master': 48,
      'Heat Riser': 50
    },
    stats: {
      st: 37,
      ma: 35,
      en: 32,
      ag: 25,
      lu: 10
    },
    trait: 'Hollow Jester',
    dlc: true,
    alarmItem: {
      name: 'Black Headband R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Magatsu-Izanagi'
  },
  'Magatsu-Izanagi Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Heat Riser',
      type: 'Skill Card'
    },
    level: 48,
    arcana: 'Tower',
    skills: {
      'Magatsu Mandala': 0,
      Megidola: 0,
      'Ghastly Wail': 0,
      Magarudyne: 49,
      Bloodbath: 50,
      'Speed Master': 52,
      'Heat Riser': 54
    },
    stats: {
      st: 40,
      ma: 38,
      en: 35,
      ag: 27,
      lu: 11
    },
    trait: 'Hollow Jester',
    dlc: true,
    alarmItem: {
      name: 'Debilitate',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'nu',
      curse: 'nu'
    },
    name: 'Magatsu-Izanagi Picaro'
  },
  Messiah: {
    inherits: 'Almighty',
    item: {
      name: 'Sirius Armor',
      type: 'Item'
    },
    level: 81,
    arcana: 'Judgement',
    skills: {
      Oratorio: 0,
      Megidolaon: 0,
      'God\'s Hand': 0,
      'Regenerate 3': 82,
      'Enduring Soul': 83,
      'Invigorate 3': 84,
      'Absorb Phys': 85,
      'Almighty Boost': 87
    },
    stats: {
      st: 50,
      ma: 50,
      en: 50,
      ag: 50,
      lu: 50
    },
    trait: 'Hallowed Spirit',
    dlc: true,
    alarmItem: {
      name: 'Sirius Armor EX',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: 'rs',
      bless: 'rp',
      curse: 'wk'
    },
    name: 'Messiah'
  },
  'Messiah Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Insta-Heal',
      type: 'Skill Card'
    },
    level: 90,
    arcana: 'Judgement',
    skills: {
      Oratorio: 0,
      Megidolaon: 0,
      Agneyastra: 0,
      'Insta-Heal': 91,
      'Enduring Soul': 92,
      'Life Aid': 93,
      'Firm Stance': 94,
      'Almighty Boost': 96
    },
    stats: {
      st: 56,
      ma: 56,
      en: 55,
      ag: 55,
      lu: 55
    },
    trait: 'Hallowed Spirit',
    dlc: true,
    alarmItem: {
      name: 'Firm Stance',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: 'rs',
      bless: 'rp',
      curse: 'wk'
    },
    name: 'Messiah Picaro'
  },
  Orpheus: {
    inherits: 'Almighty',
    item: {
      name: 'Hades Harp',
      type: 'Item'
    },
    level: 26,
    arcana: 'Fool',
    skills: {
      Cadenza: 0,
      Agilao: 0,
      Tarunda: 0,
      Endure: 27,
      Maragion: 29,
      Marakukaja: 30,
      'Fire Boost': 32
    },
    stats: {
      st: 17,
      ma: 17,
      en: 17,
      ag: 17,
      lu: 17
    },
    trait: 'Circle of Sadness',
    dlc: true,
    alarmItem: {
      name: 'Hades Harp R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Orpheus'
  },
  'Orpheus F': {
    inherits: 'Almighty',
    item: {
      name: 'Graceful Harp',
      type: 'Item'
    },
    level: 11,
    arcana: 'Fool',
    skills: {
      'Neo Cadenza': 0,
      Agi: 0,
      Tarunda: 0,
      Endure: 0,
      Maragion: 12,
      Marakukaja: 14,
      'Dodge Curse': 15
    },
    stats: {
      st: 8,
      ma: 9,
      en: 8,
      ag: 9,
      lu: 6
    },
    trait: 'Circle of Sadness',
    dlc: true,
    alarmItem: {
      name: 'Graceful Harp R',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Orpheus F'
  },
  'Orpheus F Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Endure',
      type: 'Skill Card'
    },
    level: 13,
    arcana: 'Fool',
    skills: {
      'Neo Cadenza': 0,
      Maragi: 0,
      Rakunda: 0,
      Endure: 0,
      Agilao: 14,
      Marakukaja: 16,
      'Dodge Curse': 17
    },
    stats: {
      st: 9,
      ma: 11,
      en: 9,
      ag: 10,
      lu: 7
    },
    trait: 'Circle of Sadness',
    dlc: true,
    alarmItem: {
      name: 'Enduring Soul',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Orpheus F Picaro'
  },
  'Orpheus Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Agidyne',
      type: 'Skill Card'
    },
    level: 29,
    arcana: 'Fool',
    skills: {
      Cadenza: 0,
      Maragion: 0,
      Matarunda: 0,
      Endure: 30,
      Agidyne: 32,
      Matarukaja: 33,
      'Fire Boost': 35
    },
    stats: {
      st: 19,
      ma: 19,
      en: 19,
      ag: 19,
      lu: 18
    },
    trait: 'Circle of Sadness',
    dlc: true,
    alarmItem: {
      name: 'Maragidyne',
      type: 'Skill Card'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'wk'
    },
    name: 'Orpheus Picaro'
  },
  Raoul: {
    inherits: 'Almighty',
    item: {
      name: 'Picaresque Hat',
      type: 'Item'
    },
    level: 76,
    arcana: 'Fool',
    skills: {
      'Phantom Show': 0,
      Eigaon: 0,
      'Ali Dance': 0,
      Maeigaon: 78,
      'Heat Riser': 79,
      'Curse Amp': 80,
      Concentrate: 81,
      'Life Aid': 82
    },
    stats: {
      st: 47,
      ma: 49,
      en: 43,
      ag: 54,
      lu: 42
    },
    trait: 'Hazy Presence',
    dlc: true,
    alarmItem: {
      name: 'Picaresque Crown',
      type: 'Item'
    },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    },
    name: 'Raoul'
  },
  Thanatos: {
    inherits: 'Almighty',
    item: {
      name: 'Darkness Ring',
      type: 'Item'
    },
    level: 65,
    arcana: 'Death',
    skills: {
      'Door of Hades': 0,
      Maeigaon: 0,
      Mamudoon: 0,
      'Curse Amp': 66,
      'One-shot Kill': 68,
      'Fortified Moxy': 69,
      'Enduring Soul': 70
    },
    stats: {
      st: 43,
      ma: 49,
      en: 41,
      ag: 38,
      lu: 31
    },
    trait: 'Iron Heart',
    dlc: true,
    alarmItem: {
      name: 'Darkness Ring R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rp'
    },
    name: 'Thanatos'
  },
  'Thanatos Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Maeigaon',
      type: 'Skill Card'
    },
    level: 69,
    arcana: 'Death',
    skills: {
      'Door of Hades': 0,
      Maeigaon: 0,
      Mamudoon: 0,
      'Mudo Boost': 70,
      'One-shot Kill': 72,
      'Adverse Resolve': 73,
      'Enduring Soul': 74
    },
    stats: {
      st: 45,
      ma: 51,
      en: 43,
      ag: 40,
      lu: 35
    },
    trait: 'Iron Heart',
    dlc: true,
    alarmItem: {
      name: 'Demonic Decree',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rp'
    },
    name: 'Thanatos Picaro'
  },
  Tsukiyomi: {
    inherits: 'Almighty',
    item: {
      name: 'Black Moon',
      type: 'Item'
    },
    level: 50,
    arcana: 'Moon',
    skills: {
      'Abyssal Wings': 0,
      'Absorb Curse': 0,
      'Myriad Slashes': 0,
      'Life Drain': 0,
      'Curse Amp': 53,
      'Vorpal Blade': 55,
      'Arms Master': 56
    },
    stats: {
      st: 38,
      ma: 32,
      en: 33,
      ag: 37,
      lu: 17
    },
    trait: 'Bolstering Force',
    dlc: true,
    alarmItem: {
      name: 'Black Moon R',
      type: 'Item'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'rs',
      curse: 'rp'
    },
    name: 'Tsukiyomi'
  },
  'Tsukiyomi Picaro': {
    inherits: 'Almighty',
    item: {
      name: 'Spell Master',
      type: 'Skill Card'
    },
    level: 55,
    arcana: 'Moon',
    skills: {
      'Abyssal Wings': 0,
      'Absorb Curse': 0,
      'Myriad Slashes': 0,
      'Spirit Drain': 0,
      'Curse Amp': 58,
      'Vorpal Blade': 60,
      'Spell Master': 61
    },
    stats: {
      st: 41,
      ma: 35,
      en: 36,
      ag: 40,
      lu: 20
    },
    trait: 'Bolstering Force',
    dlc: true,
    alarmItem: {
      name: 'Arms Master',
      type: 'Skill Card'
    },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'rs',
      curse: 'rp'
    },
    name: 'Tsukiyomi Picaro'
  }
};
module.exports = { compendium };
