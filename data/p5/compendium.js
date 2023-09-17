// derived from https://github.com/chinhodado/persona5_calculator/blob/master/data/PersonaDataRoyal.js
export const compendium = {
  Abaddon: {
    personaType: 'Curse',
    arcana: 'Judgement',
    level: 74,
    stats: { st: 51, ma: 38, en: 58, ag: 43, lu: 39 },
    skills: {
      'Absorb Phys': 79,
      Deathbound: 0,
      Gigantomachia: 80,
      Makarakarn: 0,
      'Spirit Drain': 0,
      'Survival Trick': 77
    },
    item: { name: 'Makarakarn', type: 'Skill Card' },
    affinities: {
      physical: 'ab',
      gun: 'ab',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'wk',
      bless: '-',
      curse: 'ab'
    }
  },
  Agathion: {
    personaType: 'Electric',
    arcana: 'Chariot',
    level: 3,
    stats: { st: 3, ma: 4, en: 5, ag: 7, lu: 3 },
    skills: {
      Baisudi: 0,
      Dia: 0,
      'Dodge Elec': 8,
      Lunge: 4,
      Rakukaja: 6,
      Zio: 0
    },
    personality: 'Timid',
    area: 'Aiyatsbus',
    floor: 'L1',
    item: { name: 'Zio', type: 'Skill Card' },
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
    }
  },
  Alice: {
    personaType: 'Curse',
    arcana: 'Death',
    level: 79,
    stats: { st: 43, ma: 59, en: 40, ag: 57, lu: 45 },
    skills: {
      Dekunda: 0,
      'Die For Me!': 81,
      Mamudoon: 0,
      Megidolaon: 82,
      Concentrate: 83,
      'Mudo Boost': 0,
      'Survival Trick': 84
    },
    special: true,
    max: true,
    item: { name: 'Mamudoon', type: 'Skill Card' },
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
    }
  },
  'Ame-no-Uzume': {
    personaType: 'Almighty',
    arcana: 'Lovers',
    level: 29,
    stats: { st: 15, ma: 22, en: 19, ag: 20, lu: 18 },
    skills: {
      Bufula: 0,
      Diarama: 0,
      'Divine Grace': 32,
      Mazio: 0,
      'Shock Boost': 34,
      Tentarafoo: 31
    },
    area: 'Chemdah',
    floor: 'L6 & 7',
    item: { name: 'Senryou Yakusha', type: 'Item' },
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
    }
  },
  Ananta: {
    personaType: 'Nuclear',
    arcana: 'Star',
    level: 43,
    stats: { st: 24, ma: 30, en: 31, ag: 26, lu: 25 },
    skills: {
      'Abysmal Surge': 45,
      'Defense Master': 0,
      'Elec Wall': 0,
      Freidyne: 48,
      'Growth 2': 46,
      Mafreila: 0,
      Marakukaja: 47,
      'Nuke Boost': 49
    },
    item: { name: 'Hua Khon', type: 'Item' },
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
    }
  },
  Andras: {
    personaType: 'Ice',
    arcana: 'Devil',
    level: 10,
    stats: { st: 5, ma: 9, en: 7, ag: 10, lu: 6 },
    skills: {
      'Apt Pupil': 13,
      Bufu: 0,
      'Ice Break': 15,
      Mabufu: 14,
      Rakunda: 0,
      Tarukaja: 11
    },
    personality: 'Timid',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    item: { name: 'Ice Break', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Angel: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 12,
    stats: { st: 7, ma: 9, en: 9, ag: 9, lu: 9 },
    skills: {
      Baisudi: 14,
      Dazzler: 0,
      Dekunda: 17,
      Dia: 0,
      'Dodge Curse': 15,
      Hama: 0,
      Kouha: 13
    },
    personality: 'Irritable',
    area: 'Aiyatsbus / Kaitul',
    floor: 'L5 & 6 / L1-4',
    item: { name: 'Baisudi', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    }
  },
  Anubis: {
    personaType: 'Almighty',
    arcana: 'Judgement',
    level: 37,
    stats: { st: 23, ma: 26, en: 24, ag: 22, lu: 23 },
    skills: {
      Dekunda: 40,
      Eiga: 43,
      Hamaon: 0,
      Makouha: 0,
      Mudoon: 0,
      'Null Fear': 39,
      'Resist Bless': 41
    },
    personality: 'Gloomy',
    area: 'Akzeriyyuth',
    floor: 'L10 & 11',
    item: { name: 'Makouha', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    }
  },
  Anzu: {
    personaType: 'Wind',
    arcana: 'Hierophant',
    level: 25,
    stats: { st: 14, ma: 18, en: 15, ag: 21, lu: 14 },
    skills: {
      'Assault Dive': 27,
      Dekaja: 28,
      Garula: 0,
      Masukukaja: 0,
      'Null Forget': 29,
      'Wind Break': 0
    },
    personality: 'Irritable',
    area: 'Akzeriyyuth',
    floor: 'L1-3, 5-7, 9-11',
    item: { name: 'Dekaja', type: 'Skill Card' },
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
    }
  },
  Apsaras: {
    personaType: 'Ice',
    arcana: 'Priestess',
    level: 11,
    stats: { st: 7, ma: 11, en: 6, ag: 10, lu: 6 },
    skills: {
      Bufu: 0,
      'Elec Wall': 14,
      'Ice Wall': 0,
      Media: 13,
      Rebellion: 0,
      'Wind Wall': 16
    },
    personality: 'Upbeat',
    area: 'Chemdah',
    floor: 'L1-4',
    item: { name: 'Freeze Boost', type: 'Skill Card' },
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
    }
  },
  'Ara Mitama': {
    personaType: 'Nuclear',
    arcana: 'Chariot',
    level: 31,
    stats: { st: 20, ma: 19, en: 20, ag: 20, lu: 21 },
    skills: {
      Freila: 0,
      Marakunda: 33,
      'Miracle Punch': 0,
      Taunt: 0,
      'Rage Boost': 35,
      Rebellion: 32
    },
    item: { name: 'Freila', type: 'Skill Card' },
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
    }
  },
  Arahabaki: {
    personaType: 'Ailment',
    arcana: 'Hermit',
    level: 35,
    stats: { st: 21, ma: 23, en: 22, ag: 24, lu: 22 },
    skills: {
      'Abysmal Surge': 0,
      'Defense Master': 39,
      Maeiga: 38,
      Makarakarn: 0,
      'Null Brainwash': 0,
      'Spirit Drain': 37
    },
    personality: 'Gloomy',
    area: 'Adyeshach',
    floor: 'L1-4, 6-8, 10',
    item: { name: 'Tapsuan', type: 'Item' },
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
    }
  },
  Archangel: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 16,
    stats: { st: 13, ma: 10, en: 13, ag: 12, lu: 7 },
    skills: {
      Dazzler: 0,
      Hama: 0,
      'Vajra Blast': 21,
      Makouha: 19,
      Psi: 0,
      Rebellion: 18
    },
    personality: 'Irritable',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    item: { name: 'Dazzler', type: 'Skill Card' },
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
    }
  },
  Ardha: {
    personaType: 'Almighty',
    arcana: 'Temperance',
    level: 84,
    stats: { st: 54, ma: 56, en: 55, ag: 54, lu: 40 },
    skills: {
      Agneyastra: 87,
      'Auto-Masuku': 88,
      'Cosmic Flare': 0,
      'God\'s Hand': 0,
      'Fortified Moxy': 89,
      'Invigorate 3': 0,
      Salvation: 90
    },
    special: true,
    max: true,
    item: { name: 'Agneyastra', type: 'Skill Card' },
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
    }
  },
  Ariadne: {
    personaType: 'Almighty',
    arcana: 'Fortune',
    level: 30,
    stats: { st: 23, ma: 19, en: 20, ag: 17, lu: 18 },
    skills: {
      'Apt Pupil': 0,
      'Attack Master': 31,
      'Evade Physical': 34,
      'Fortified Moxy': 32,
      'Miracle Punch': 0,
      Charge: 36,
      'Beast Weaver': 0
    },
    dlc: true,
    item: { name: 'Red Yarn Ball', type: 'Item' },
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
    }
  },
  'Ariadne Picaro': {
    personaType: 'Almighty',
    arcana: 'Fortune',
    level: 42,
    stats: { st: 36, ma: 23, en: 29, ag: 24, lu: 21 },
    skills: {
      'Apt Pupil': 0,
      'Auto-Mataru': 43,
      'Evade Physical': 46,
      'Heat Up': 44,
      'Miracle Punch': 0,
      Charge: 48,
      'Beast Weaver': 0
    },
    dlc: true,
    item: { name: 'Auto-Mataru', type: 'Skill Card' },
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
    }
  },
  Arsene: {
    personaType: 'Curse',
    arcana: 'Fool',
    level: 1,
    stats: { st: 2, ma: 2, en: 2, ag: 3, lu: 1 },
    skills: {
      Cleave: 2,
      'Adverse Resolve': 7,
      'Dream Needle': 5,
      Eiha: 1,
      Sukunda: 4
    },
    item: { name: 'Arsene\'s Cane', type: 'Item' },
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
    }
  },
  Asterius: {
    personaType: 'Almighty',
    arcana: 'Fortune',
    level: 56,
    stats: { st: 43, ma: 43, en: 32, ag: 32, lu: 25 },
    skills: {
      'Auto-Mataru': 57,
      'Burn Boost': 0,
      'Fire Amp': 59,
      Gigantomachia: 62,
      Maragidyne: 0,
      Tetrakarn: 60,
      Titanomachia: 0
    },
    dlc: true,
    item: { name: 'Thunder Horns', type: 'Item' },
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
    }
  },
  'Asterius Picaro': {
    personaType: 'Almighty',
    arcana: 'Fortune',
    level: 62,
    stats: { st: 46, ma: 46, en: 36, ag: 36, lu: 29 },
    skills: {
      'Auto-Masuku': 63,
      'Burn Boost': 0,
      'Fire Amp': 65,
      Gigantomachia: 68,
      Makarakarn: 66,
      Maragidyne: 0,
      Titanomachia: 0
    },
    dlc: true,
    item: { name: 'Gigantomachia', type: 'Skill Card' },
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
    }
  },
  'Asura-Ou': {
    personaType: 'Nuclear',
    arcana: 'Sun',
    level: 76,
    stats: { st: 52, ma: 48, en: 51, ag: 49, lu: 35 },
    skills: {
      'Atomic Flare': 0,
      'Auto-Mataru': 78,
      'High Counter': 80,
      Mafreidyne: 79,
      Mahamaon: 0,
      Marakukaja: 0,
      'Unshaken Will': 81
    },
    special: true,
    max: true,
    item: { name: 'Vajra', type: 'Item' },
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
    }
  },
  Atropos: {
    personaType: 'Electric',
    arcana: 'Fortune',
    level: 39,
    stats: { st: 23, ma: 30, en: 22, ag: 27, lu: 22 },
    skills: {
      'Dodge Fire': 44,
      'Elec Boost': 43,
      'Elec Break': 0,
      'Fire Wall': 0,
      Mazionga: 0,
      Mediarama: 41,
      Concentrate: 45
    },
    item: { name: 'Mazionga', type: 'Skill Card' },
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
    }
  },
  Attis: {
    personaType: 'Fire',
    arcana: 'Hanged Man',
    level: 82,
    stats: { st: 56, ma: 50, en: 48, ag: 51, lu: 48 },
    skills: {
      'Absorb Curse': 86,
      'Enduring Soul': 84,
      'Blazing Hell': 88,
      Maragidyne: 0,
      Salvation: 0,
      Samarecarm: 85,
      Thermopylae: 0
    },
    max: true,
    item: { name: 'Enduring Soul', type: 'Skill Card' },
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
    }
  },
  Baal: {
    personaType: 'Wind',
    arcana: 'Emperor',
    level: 75,
    stats: { st: 48, ma: 50, en: 47, ag: 47, lu: 40 },
    skills: {
      Magarudyne: 0,
      Matarukaja: 0,
      'Panta Rhei': 77,
      Charge: 79,
      Revolution: 0,
      Tetraja: 78,
      Ayamur: 80
    },
    item: { name: 'Yagrush', type: 'Item' },
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
      curse: 'rs'
    }
  },
  Baphomet: {
    personaType: 'Almighty',
    arcana: 'Devil',
    level: 58,
    stats: { st: 34, ma: 42, en: 36, ag: 38, lu: 31 },
    skills: {
      Agidyne: 0,
      Bufudyne: 59,
      'Burn Boost': 0,
      'Evade Fire': 0,
      'Freeze Boost': 63,
      'Shock Boost': 62,
      Ziodyne: 61
    },
    area: 'Sheriruth',
    floor: 'L13 (after Palace 7)',
    item: { name: 'Shock Boost', type: 'Skill Card' },
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
    }
  },
  Barong: {
    personaType: 'Electric',
    arcana: 'Emperor',
    level: 52,
    stats: { st: 33, ma: 35, en: 33, ag: 37, lu: 25 },
    skills: {
      'Elec Break': 0,
      'Invigorate 2': 54,
      Maziodyne: 57,
      'Null Elec': 55,
      'Wage War': 0,
      Ziodyne: 0
    },
    area: 'Sheriruth',
    floor: 'L11 & 12 (after Palace 7)',
    item: { name: 'Invigorate 2', type: 'Skill Card' },
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
    }
  },
  Beelzebub: {
    personaType: 'Curse',
    arcana: 'Devil',
    level: 84,
    stats: { st: 55, ma: 60, en: 54, ag: 56, lu: 34 },
    skills: {
      'Curse Amp': 85,
      'Devil Smile': 0,
      'Demonic Decree': 87,
      Maeigaon: 0,
      Mamudoon: 0,
      Megidolaon: 89,
      Concentrate: 86,
      'Repel Ice': 88
    },
    max: true,
    item: { name: 'Fleur du Mal', type: 'Item' },
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
    }
  },
  Belial: {
    personaType: 'Curse',
    arcana: 'Devil',
    level: 68,
    stats: { st: 45, ma: 41, en: 46, ag: 43, lu: 36 },
    skills: {
      Agidyne: 0,
      'Heat Up': 72,
      Mamudoon: 0,
      Maragidyne: 71,
      Matarunda: 0,
      'Myriad Slashes': 74,
      'Survival Trick': 70
    },
    item: { name: 'Maragion', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    }
  },
  Belphegor: {
    personaType: 'Ice',
    arcana: 'Tower',
    level: 37,
    stats: { st: 25, ma: 27, en: 24, ag: 23, lu: 19 },
    skills: {
      Bufula: 0,
      'Dodge Fire': 0,
      'Ice Break': 39,
      Mabufula: 41,
      Concentrate: 44,
      'Null Rage': 38
    },
    personality: 'Irritable',
    area: 'Adyeshach',
    floor: 'L6-8, 10',
    item: { name: 'Mabufula', type: 'Skill Card' },
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
    }
  },
  Berith: {
    personaType: 'Physical',
    arcana: 'Hierophant',
    level: 9,
    stats: { st: 8, ma: 6, en: 7, ag: 8, lu: 5 },
    skills: {
      Cleave: 0,
      'Dodge Fire': 11,
      'Double Fangs': 10,
      Rakukaja: 0,
      Sledgehammer: 13
    },
    personality: 'Irritable',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    item: { name: 'Cleave', type: 'Skill Card' },
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
    }
  },
  Bicorn: {
    personaType: 'Wind',
    arcana: 'Hermit',
    level: 4,
    stats: { st: 5, ma: 3, en: 3, ag: 5, lu: 3 },
    skills: { 'Apt Pupil': 8, Garu: 6, 'Ice Wall': 7, Lunge: 0, Tarunda: 0 },
    personality: 'Irritable',
    area: 'Aiyatsbus',
    floor: 'L1 & 2',
    item: { name: 'Garu', type: 'Skill Card' },
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
    }
  },
  Bishamonten: {
    personaType: 'Nuclear',
    arcana: 'Hierophant',
    level: 67,
    stats: { st: 49, ma: 37, en: 42, ag: 45, lu: 35 },
    skills: {
      'Deadly Fury': 68,
      Diarahan: 0,
      Freidyne: 0,
      'God\'s Hand': 73,
      Mafreidyne: 69,
      'Nuke Amp': 71,
      Tetrakarn: 72
    },
    item: { name: 'Mafreidyne', type: 'Skill Card' },
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
    }
  },
  'Black Frost': {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 67,
    stats: { st: 44, ma: 46, en: 41, ag: 42, lu: 35 },
    skills: {
      'Diamond Dust': 72,
      'Ice Amp': 70,
      Mabufudyne: 0,
      'Miracle Punch': 0,
      'One-shot Kill': 0,
      'Repel Fire': 71
    },
    special: true,
    note: 'Request "One Who Bullies Bullies" must be cleared',
    item: { name: 'Naraka Whip', type: 'Item' },
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
    }
  },
  'Black Ooze': {
    personaType: 'Curse',
    arcana: 'Moon',
    level: 29,
    stats: { st: 19, ma: 18, en: 20, ag: 16, lu: 21 },
    skills: {
      'Brain Jack': 34,
      'Ambient Aid': 31,
      'Evil Touch': 0,
      'Flash Bomb': 35,
      Headbutt: 32,
      Matarunda: 0,
      'Stagnant Air': 0
    },
    personality: 'Irritable',
    area: 'Adyeshach',
    floor: 'L1-4, 6',
    item: { name: 'Stagnant Air', type: 'Skill Card' },
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
    }
  },
  'Black Rider': {
    personaType: 'Curse',
    arcana: 'Tower',
    level: 59,
    stats: { st: 38, ma: 43, en: 37, ag: 45, lu: 30 },
    skills: {
      Bloodbath: 61,
      'Ambient Aid': 60,
      'Flash Bomb': 0,
      'Ghastly Wail': 63,
      Maeigaon: 0,
      Mamudoon: 0,
      Megidola: 64
    },
    item: { name: 'Bad Beat', type: 'Skill Card' },
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
    }
  },
  Bugs: {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 49,
    stats: { st: 35, ma: 33, en: 30, ag: 32, lu: 24 },
    skills: {
      'Auto-Mataru': 51,
      'Evade Physical': 54,
      'Fast Heal': 55,
      Masukunda: 0,
      'Miracle Punch': 0,
      Psiodyne: 0,
      'Triple Down': 52
    },
    special: true,
    note: 'Request "The Lovesick Cyberstalking Girl" must be cleared',
    item: { name: 'Bear Gloves', type: 'Item' },
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
    }
  },
  Byakko: {
    personaType: 'Ice',
    arcana: 'Temperance',
    level: 49,
    stats: { st: 32, ma: 32, en: 31, ag: 32, lu: 27 },
    skills: {
      Bufudyne: 55,
      Counterstrike: 0,
      'Evade Fire': 52,
      'Ice Boost': 51,
      Mabufula: 0,
      'Null Rage': 54,
      'Swift Strike': 0
    },
    item: { name: 'Swift Strike', type: 'Skill Card' },
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
    }
  },
  Cerberus: {
    personaType: 'Fire',
    arcana: 'Chariot',
    level: 55,
    stats: { st: 39, ma: 35, en: 32, ag: 39, lu: 27 },
    skills: {
      Agidyne: 0,
      'Enduring Soul': 60,
      'High Counter': 57,
      'Megaton Raid': 0,
      Rebellion: 56,
      'Regenerate 2': 58
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L7-9 (after Palace 7)',
    item: { name: 'Agidyne', type: 'Skill Card' },
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
    }
  },
  Chernobog: {
    personaType: 'Ailment',
    arcana: 'Death',
    level: 62,
    stats: { st: 40, ma: 37, en: 39, ag: 38, lu: 39 },
    skills: {
      Bloodbath: 0,
      'Deadly Fury': 0,
      Deathbound: 64,
      'Fear Boost': 66,
      Mudoon: 0,
      'Myriad Slashes': 67,
      'Stagnant Air': 63
    },
    item: { name: 'Deadly Fury', type: 'Skill Card' },
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
      curse: 'rp'
    }
  },
  'Chi You': {
    personaType: 'Psy',
    arcana: 'Chariot',
    level: 86,
    stats: { st: 54, ma: 56, en: 53, ag: 52, lu: 50 },
    skills: {
      'Absorb Psy': 90,
      Gigantomachia: 0,
      Concentrate: 92,
      'Psycho Blast': 89,
      'Psycho Force': 0,
      'Repel Phys': 0,
      'Fortify Spirit': 88
    },
    special: true,
    max: true,
    item: { name: 'Arms Master', type: 'Skill Card' },
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
    }
  },
  Choronzon: {
    personaType: 'Curse',
    arcana: 'Magician',
    level: 28,
    stats: { st: 16, ma: 19, en: 19, ag: 18, lu: 19 },
    skills: {
      'Life Drain': 0,
      'Curse Boost': 32,
      'Dodge Elec': 30,
      Eiga: 31,
      Maeiha: 29,
      Pulinpa: 0,
      'Rainy Play': 33,
      Rampage: 0
    },
    personality: 'Timid',
    area: 'Kaitul',
    floor: 'L1-4',
    item: { name: 'Maeiha', type: 'Skill Card' },
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
      curse: '-'
    }
  },
  Clotho: {
    personaType: 'Healing',
    arcana: 'Fortune',
    level: 26,
    stats: { st: 14, ma: 19, en: 17, ag: 20, lu: 15 },
    skills: {
      'Energy Shower': 30,
      'Invigorate 1': 32,
      Mahama: 0,
      Makajam: 0,
      Makajamon: 29,
      'Me Patra': 0,
      Tetraja: 27
    },
    item: { name: 'Invigorate 1', type: 'Skill Card' },
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
    }
  },
  'Crystal Skull': {
    arcana: 'Fool',
    level: 50,
    stats: { st: 50, ma: 50, en: 50, ag: 50, lu: 50 },
    skills: {
      Mabufudyne: 0,
      Maeigaon: 0,
      Mafreidyne: 0,
      Magarudyne: 0,
      Makougaon: 0,
      Mapsiodyne: 0,
      Maragidyne: 0,
      Maziodyne: 0
    },
    rare: true,
    area: 'Sheriruth',
    floor: 'L7-9. 11-13 (after Palace 7)',
    item: { name: 'Crystal Skull', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: 'rp',
      ice: 'rp',
      electric: 'rp',
      wind: 'rp',
      psychic: 'rp',
      nuclear: 'rp',
      bless: '-',
      curse: 'rp'
    }
  },
  'Cu Chulainn': {
    personaType: 'Almighty',
    arcana: 'Star',
    level: 67,
    stats: { st: 47, ma: 36, en: 44, ag: 47, lu: 34 },
    skills: {
      'Deadly Fury': 0,
      Dekunda: 70,
      'Enduring Soul': 72,
      'Ice Wall': 0,
      Matarukaja: 69,
      'Oni Kagura': 0,
      Charge: 71
    },
    item: { name: 'Charge', type: 'Skill Card' },
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
    }
  },
  Cybele: {
    personaType: 'Healing',
    arcana: 'Priestess',
    level: 73,
    stats: { st: 44, ma: 48, en: 45, ag: 51, lu: 38 },
    skills: {
      'Absorb Bless': 77,
      'Auto-Maraku': 76,
      'Bless Amp': 74,
      Makougaon: 0,
      Mediarahan: 0,
      Salvation: 79,
      Samarecarm: 0
    },
    max: true,
    item: { name: 'Sabazios', type: 'Item' },
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
    }
  },
  Daisoujou: {
    personaType: 'Bless',
    arcana: 'Hierophant',
    level: 42,
    stats: { st: 22, ma: 33, en: 24, ag: 25, lu: 29 },
    skills: {
      Diarahan: 45,
      'Bless Boost': 44,
      Makouga: 0,
      'Me Patra': 46,
      'Null Rage': 47,
      Samsara: 43,
      'Spirit Drain': 0
    },
    item: { name: 'Makouga', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    }
  },
  Dakini: {
    personaType: 'Physical',
    arcana: 'Empress',
    level: 50,
    stats: { st: 34, ma: 32, en: 34, ag: 28, lu: 29 },
    skills: {
      'Bad Beat': 0,
      Deathbound: 53,
      'Giant Slice': 0,
      'High Counter': 52,
      Charge: 55,
      'Rising Slash': 0,
      Rebellion: 54
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L7-9 (after Palace 7)',
    item: { name: 'Deathbound', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Decarabia: {
    personaType: 'Fire',
    arcana: 'Fool',
    level: 32,
    stats: { st: 21, ma: 23, en: 19, ag: 22, lu: 18 },
    skills: {
      Agilao: 0,
      'Devil Smile': 37,
      'Fire Boost': 35,
      Maragion: 33,
      'Null Fire': 36,
      Tetrakarn: 38,
      'Ominous Words': 0
    },
    personality: 'Gloomy',
    area: 'Adyeshach',
    floor: 'L3, 4, 6-8',
    item: { name: 'Fire Boost', type: 'Skill Card' },
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
    }
  },
  Dionysus: {
    personaType: 'Psy',
    arcana: 'Fool',
    level: 61,
    stats: { st: 35, ma: 41, en: 38, ag: 40, lu: 36 },
    skills: {
      'Ailment Boost': 63,
      'Amrita Shower': 66,
      'Abysmal Surge': 0,
      'Heat Wave': 0,
      Maragidyne: 65,
      Psiodyne: 0,
      Thermopylae: 62
    },
    item: { name: 'Thermopylae', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    }
  },
  Dominion: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 68,
    stats: { st: 46, ma: 47, en: 45, ag: 48, lu: 40 },
    skills: {
      'Nocturnal Flash': 0,
      'Evade Curse': 73,
      'Hama Boost': 71,
      Hamaon: 0,
      Kougaon: 0,
      Mahamaon: 72,
      Makougaon: 70
    },
    personality: 'Unknown',
    item: { name: 'Makougaon', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rp',
      bless: 'nu',
      curse: 'rs'
    }
  },
  Eligor: {
    personaType: 'Fire',
    arcana: 'Emperor',
    level: 16,
    stats: { st: 12, ma: 10, en: 13, ag: 10, lu: 10 },
    skills: {
      'Memory Blow': 20,
      'Sharp Student': 0,
      'Double Fangs': 18,
      Maragi: 0,
      Sukunda: 19,
      Tarukaja: 0
    },
    personality: 'Unknown',
    area: 'Chemdah',
    floor: 'L3 & 4',
    item: { name: 'Tarukaja', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: 'rs',
      ice: '-',
      electric: 'wk',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  'Emperor\'s Amulet': {
    arcana: 'Hanged Man',
    level: 35,
    stats: { st: 35, ma: 35, en: 35, ag: 35, lu: 35 },
    skills: {
      Agidyne: 0,
      Bufudyne: 0,
      Eigaon: 0,
      Freidyne: 0,
      Garudyne: 0,
      Kougaon: 0,
      Psiodyne: 0,
      Ziodyne: 0
    },
    rare: true,
    area: 'Sheriruth',
    floor: 'L7-9, 11-13 (after Palace 7)',
    item: { name: 'Emperor\'s Amulet', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: '-',
      ice: 'ab',
      electric: 'ab',
      wind: 'ab',
      psychic: 'ab',
      nuclear: 'ab',
      bless: 'nu',
      curse: 'nu'
    }
  },
  Phoenix: {
    personaType: 'Nuclear',
    arcana: 'Hierophant',
    level: 22,
    stats: { st: 14, ma: 15, en: 15, ag: 18, lu: 11 },
    skills: {
      Diarama: 23,
      'Dream Needle': 0,
      Freila: 0,
      'Nuke Boost': 27,
      Recarm: 25
    },
    item: { name: 'Nuke Boost', type: 'Skill Card' },
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
    }
  },
  Flauros: {
    personaType: 'Ailment',
    arcana: 'Devil',
    level: 25,
    stats: { st: 19, ma: 14, en: 18, ag: 18, lu: 13 },
    skills: {
      'Assault Dive': 29,
      Dekaja: 0,
      'Dodge Physical': 26,
      'Apt Pupil': 28,
      'Dormin Rush': 0,
      'Giant Slice': 0,
      'Heat Up': 30
    },
    special: true,
    note: 'Needs Strength cooperation rank 1 to be fused',
    item: { name: 'Shackles', type: 'Item' },
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
    }
  },
  Forneus: {
    personaType: 'Psy',
    arcana: 'Hierophant',
    level: 63,
    stats: { st: 41, ma: 39, en: 40, ag: 42, lu: 34 },
    skills: {
      'Evade Psy': 68,
      Mapsiodyne: 67,
      'Marin Karin': 0,
      Masukunda: 0,
      Psiodyne: 0,
      'Stagnant Air': 66,
      'Survival Trick': 65
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L12 & 13 (after Palace 7)',
    item: { name: 'Masukunda', type: 'Skill Card' },
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
    }
  },
  Fortuna: {
    personaType: 'Wind',
    arcana: 'Fortune',
    level: 46,
    stats: { st: 23, ma: 32, en: 29, ag: 34, lu: 27 },
    skills: {
      'Amrita Drop': 50,
      'Evade Elec': 51,
      Garudyne: 47,
      Magarula: 0,
      Masukukaja: 0,
      Tetraja: 0,
      'Touch n\' Go': 49
    },
    item: { name: 'Fast Heal', type: 'Skill Card' },
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
    }
  },
  Futsunushi: {
    personaType: 'Physical',
    arcana: 'Magician',
    level: 76,
    stats: { st: 54, ma: 48, en: 47, ag: 49, lu: 37 },
    skills: {
      'Ali Dance': 0,
      'Apt Pupil': 80,
      'Brave Blade': 82,
      'Firm Stance': 81,
      Matarukaja: 0,
      Charge: 78,
      'Myriad Slashes': 0,
      'Regenerate 3': 79
    },
    max: true,
    item: { name: 'Brave Blade', type: 'Skill Card' },
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
    }
  },
  'Fuu-Ki': {
    personaType: 'Wind',
    arcana: 'Star',
    level: 23,
    stats: { st: 14, ma: 17, en: 16, ag: 15, lu: 14 },
    skills: {
      'Dodge Wind': 26,
      Garula: 0,
      'Resist Psy': 27,
      Tarukaja: 0,
      'Tetra Break': 0,
      'Wind Boost': 25
    },
    personality: 'Unknown',
    area: 'Kaitul',
    floor: 'L8 & 9',
    item: { name: 'Wind Boost', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'ab',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Gabriel: {
    personaType: 'Almighty',
    arcana: 'Temperance',
    level: 77,
    stats: { st: 43, ma: 51, en: 48, ag: 54, lu: 42 },
    skills: {
      'Ali Dance': 79,
      'Divine Judgement': 78,
      'Evade Curse': 80,
      'Ice Amp': 82,
      Mabufudyne: 0,
      Maziodyne: 0,
      Salvation: 83,
      'Touch n\' Go': 81
    },
    item: { name: 'Mabufudyne', type: 'Skill Card' },
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
    }
  },
  Ganesha: {
    personaType: 'Ailment',
    arcana: 'Sun',
    level: 53,
    stats: { st: 39, ma: 31, en: 37, ag: 33, lu: 26 },
    skills: {
      Endure: 56,
      'Giant Slice': 0,
      Masukunda: 57,
      'Miracle Punch': 0,
      Charge: 60,
      Rebellion: 0,
      Tetraja: 55
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)',
    item: { name: 'Miracle Punch', type: 'Skill Card' },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'ab',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Garuda: {
    personaType: 'Wind',
    arcana: 'Star',
    level: 52,
    stats: { st: 30, ma: 36, en: 29, ag: 39, lu: 29 },
    skills: {
      'Amrita Shower': 0,
      'Evade Elec': 55,
      Garudyne: 0,
      'Heat Wave': 0,
      Magarudyne: 57,
      Masukukaja: 54,
      'Wind Amp': 59
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L12 (after Palace 7)',
    item: { name: 'Wind Amp', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: '-'
    }
  },
  Genbu: {
    personaType: 'Ice',
    arcana: 'Temperance',
    level: 7,
    stats: { st: 5, ma: 6, en: 7, ag: 6, lu: 4 },
    skills: {
      Bufu: 0,
      'Defense Master': 12,
      Mabufu: 10,
      Patra: 8,
      Rakunda: 0,
      'Resist Forget': 11
    },
    item: { name: 'Patra', type: 'Skill Card' },
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
    }
  },
  Girimehkala: {
    personaType: 'Ailment',
    arcana: 'Moon',
    level: 44,
    stats: { st: 36, ma: 24, en: 32, ag: 32, lu: 15 },
    skills: {
      'Foul Breath': 46,
      Marakunda: 0,
      Mudoon: 0,
      'Repel Phys': 51,
      'Swift Strike': 0,
      'Wage War': 48
    },
    personality: 'Gloomy',
    area: 'Adyeshach',
    floor: 'L4, 6-8, 10',
    item: { name: 'Marakunda', type: 'Skill Card' },
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
    }
  },
  Hanuman: {
    personaType: 'Physical',
    arcana: 'Star',
    level: 64,
    stats: { st: 43, ma: 38, en: 40, ag: 40, lu: 38 },
    skills: {
      Deathbound: 65,
      Matarunda: 0,
      'Regenerate 3': 69,
      Revolution: 0,
      'Tempest Slash': 0,
      'Tetra Break': 67
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L12 & 13 (after Palace 7)',
    item: { name: 'Ruyi Jingu Bang', type: 'Item' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'rs',
      curse: '-'
    }
  },
  Hariti: {
    personaType: 'Electric',
    arcana: 'Empress',
    level: 40,
    stats: { st: 24, ma: 29, en: 25, ag: 26, lu: 23 },
    skills: {
      'Nocturnal Flash': 42,
      'Dizzy Boost': 45,
      'Energy Shower': 0,
      Mabaisudi: 0,
      Mediarama: 44,
      Samarecarm: 41,
      'Spirit Drain': 46,
      Zionga: 0
    },
    personality: 'Unknown',
    item: { name: 'Spirit Drain', type: 'Skill Card' },
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
    }
  },
  Hecatoncheires: {
    personaType: 'Psy',
    arcana: 'Hanged Man',
    level: 42,
    stats: { st: 29, ma: 25, en: 30, ag: 25, lu: 24 },
    skills: {
      Endure: 43,
      'Foul Breath': 45,
      'Fortified Moxy': 46,
      Charge: 48,
      'Regenerate 2': 0,
      'Swift Strike': 0,
      Tarukaja: 0
    },
    item: { name: 'Endure', type: 'Skill Card' },
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
    }
  },
  'Hell Biker': {
    personaType: 'Fire',
    arcana: 'Death',
    level: 39,
    stats: { st: 26, ma: 27, en: 24, ag: 30, lu: 17 },
    skills: {
      Agilao: 0,
      'Fire Boost': 40,
      Mamudoon: 44,
      Maragion: 42,
      Mudoon: 0,
      'Speed Master': 0,
      Tentarafoo: 41,
      'Trigger Happy': 43
    },
    item: { name: 'Black Jacket', type: 'Item' },
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
    }
  },
  'High Pixie': {
    personaType: 'Healing',
    arcana: 'Fool',
    level: 16,
    stats: { st: 8, ma: 14, en: 10, ag: 13, lu: 10 },
    skills: {
      Diarama: 18,
      Dormina: 0,
      Garu: 0,
      Magaru: 20,
      Media: 0,
      Taunt: 19
    },
    personality: 'Irritable',
    area: 'Kaitul',
    floor: 'L1-3',
    item: { name: 'Diarama', type: 'Skill Card' },
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
    }
  },
  'Hope Diamond': {
    arcana: 'Death',
    level: 40,
    stats: { st: 40, ma: 40, en: 40, ag: 40, lu: 40 },
    skills: {
      'Auto-Maraku': 0,
      'Auto-Masuku': 0,
      'Auto-Mataru': 0,
      Endure: 0,
      'Fast Heal': 0,
      'High Counter': 0,
      'Invigorate 2': 0,
      'Regenerate 2': 0
    },
    rare: true,
    area: 'Sheriruth',
    floor: 'L7-9. 11-13 (after Palace 7)',
    item: { name: 'Hope Diamond', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: 'rp',
      ice: 'rp',
      electric: 'rp',
      wind: '-',
      psychic: 'rp',
      nuclear: 'rp',
      bless: 'nu',
      curse: 'nu'
    }
  },
  Horus: {
    personaType: 'Almighty',
    arcana: 'Sun',
    level: 49,
    stats: { st: 30, ma: 32, en: 32, ag: 35, lu: 25 },
    skills: {
      Diarama: 0,
      'Hama Boost': 54,
      Hamaon: 53,
      Kougaon: 0,
      Masukukaja: 52,
      Megido: 0,
      'Touch n\' Go': 51
    },
    item: { name: 'Kougaon', type: 'Skill Card' },
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
    }
  },
  'Hua Po': {
    personaType: 'Fire',
    arcana: 'Hanged Man',
    level: 9,
    stats: { st: 4, ma: 10, en: 4, ag: 8, lu: 8 },
    skills: {
      Agi: 0,
      'Burn Boost': 15,
      Dormina: 0,
      Maragi: 13,
      'Resist Forget': 12,
      Tarunda: 11
    },
    personality: 'Upbeat',
    area: 'Chemdah',
    floor: 'L1-3',
    item: { name: 'Agilao', type: 'Skill Card' },
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
    }
  },
  Incubus: {
    personaType: 'Ailment',
    arcana: 'Devil',
    level: 5,
    stats: { st: 4, ma: 6, en: 4, ag: 5, lu: 3 },
    skills: {
      'Life Drain': 0,
      'Evil Touch': 0,
      'Dodge Curse': 9,
      Eiha: 7,
      Tarunda: 8
    },
    personality: 'Timid',
    area: 'Aiyatsbus',
    floor: 'L2, 3 & 6',
    item: { name: 'Dream Needle', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: '-'
    }
  },
  Inugami: {
    personaType: 'Fire',
    arcana: 'Hanged Man',
    level: 14,
    stats: { st: 11, ma: 9, en: 9, ag: 12, lu: 8 },
    skills: {
      'Brain Shake': 18,
      'Dream Needle': 15,
      'Giant Slice': 0,
      'Lucky Punch': 17,
      'Confuse Boost': 19,
      Pulinpa: 0,
      Tarukaja: 0
    },
    personality: 'Timid',
    area: 'Chemdah',
    floor: 'L4, 6 & 7',
    item: { name: 'Brain Shake', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    }
  },
  'Ippon-Datara': {
    personaType: 'Physical',
    arcana: 'Hermit',
    level: 13,
    stats: { st: 11, ma: 7, en: 14, ag: 6, lu: 8 },
    skills: {
      'Sharp Student': 16,
      Counter: 18,
      Rampage: 15,
      'Resist Dizzy': 0,
      Sledgehammer: 0,
      Tarukaja: 0
    },
    personality: 'Unknown',
    area: 'Chemdah',
    floor: 'L1-4',
    item: { name: 'Sledgehammer', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rs',
      ice: 'wk',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    }
  },
  Ishtar: {
    personaType: 'Healing',
    arcana: 'Lovers',
    level: 85,
    stats: { st: 48, ma: 59, en: 49, ag: 58, lu: 48 },
    skills: {
      'Absorb Wind': 0,
      'Insta-Heal': 87,
      Maziodyne: 88,
      Mediarahan: 0,
      Salvation: 90,
      Samarecarm: 0,
      'Spell Master': 89
    },
    max: true,
    item: { name: 'Salvation', type: 'Skill Card' },
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
    }
  },
  Isis: {
    personaType: 'Healing',
    arcana: 'Priestess',
    level: 26,
    stats: { st: 15, ma: 21, en: 16, ag: 18, lu: 15 },
    skills: {
      Agilao: 0,
      Diarama: 0,
      Garula: 30,
      Makarakarn: 32,
      'Resist Forget': 27,
      Sukukaja: 0,
      Zionga: 29
    },
    personality: 'Timid',
    area: 'Akzeriyyuth',
    floor: 'L5-7, 9-11',
    item: { name: 'Zionga', type: 'Skill Card' },
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
      curse: 'nu'
    }
  },
  Izanagi: {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 20,
    stats: { st: 14, ma: 13, en: 13, ag: 14, lu: 13 },
    skills: {
      'Cross Slash': 0,
      'Dodge Physical': 22,
      'Growth 3': 25,
      Mazionga: 24,
      'Rising Slash': 21,
      Tarukaja: 0,
      Zionga: 0
    },
    dlc: true,
    item: { name: 'White Headband', type: 'Item' },
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
    }
  },
  'Izanagi Picaro': {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 23,
    stats: { st: 16, ma: 15, en: 15, ag: 16, lu: 14 },
    skills: {
      'Cross Slash': 0,
      'Growth 3': 28,
      Mazionga: 27,
      'Null Phys': 25,
      'Rising Slash': 24,
      Rakukaja: 0,
      Zionga: 0
    },
    dlc: true,
    item: { name: 'Growth 3', type: 'Skill Card' },
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
    }
  },
  'Jack Frost': {
    personaType: 'Ice',
    arcana: 'Magician',
    level: 11,
    stats: { st: 8, ma: 9, en: 7, ag: 9, lu: 7 },
    skills: {
      Baisudi: 0,
      Bufu: 0,
      'Freeze Boost': 15,
      'Ice Break': 0,
      Mabufu: 12,
      Rakunda: 13
    },
    personality: 'Timid',
    area: 'Chemdah',
    floor: 'L4 & 6',
    item: { name: 'Frost Hood', type: 'Item' },
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
    }
  },
  'Jack-o\'-Lantern': {
    personaType: 'Fire',
    arcana: 'Magician',
    level: 2,
    stats: { st: 2, ma: 3, en: 3, ag: 3, lu: 2 },
    skills: {
      Agi: 0,
      Dazzler: 5,
      'Sharp Student': 4,
      Rakunda: 0,
      'Resist Sleep': 7
    },
    personality: 'Gloomy',
    area: 'Qimranut / Aiyatsbus',
    floor: 'All / L1',
    item: { name: 'Pumpkin Bomb', type: 'Item' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Jatayu: {
    personaType: 'Wind',
    arcana: 'Tower',
    level: 32,
    stats: { st: 18, ma: 21, en: 20, ag: 27, lu: 17 },
    skills: {
      'Dodge Psy': 33,
      'Flash Bomb': 0,
      Garula: 0,
      Masukukaja: 0,
      'Rainy Play': 36,
      Snipe: 35,
      'Speed Master': 38
    },
    item: { name: 'Flash Bomb', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: 'ab',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Jikokuten: {
    personaType: 'Physical',
    arcana: 'Temperance',
    level: 25,
    stats: { st: 19, ma: 12, en: 19, ag: 17, lu: 15 },
    skills: {
      'Memory Blow': 0,
      Counter: 28,
      'Adverse Resolve': 31,
      'Defense Master': 0,
      Dekunda: 27,
      Matarukaja: 30,
      Rakunda: 0
    },
    item: { name: 'Memory Blow', type: 'Skill Card' },
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
    }
  },
  Kaguya: {
    personaType: 'Almighty',
    arcana: 'Moon',
    level: 16,
    stats: { st: 11, ma: 15, en: 12, ag: 11, lu: 6 },
    skills: {
      'Amrita Shower': 18,
      Counterstrike: 0,
      Diarahan: 21,
      'Divine Grace': 17,
      Mediarama: 0,
      'Shining Arrows': 0,
      'Repel Phys': 22
    },
    dlc: true,
    item: { name: 'Moonlight Robe', type: 'Item' },
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
    }
  },
  'Kaguya Picaro': {
    personaType: 'Almighty',
    arcana: 'Moon',
    level: 25,
    stats: { st: 17, ma: 20, en: 19, ag: 15, lu: 11 },
    skills: {
      'Amrita Shower': 27,
      Diarahan: 30,
      'Divine Grace': 26,
      'High Counter': 0,
      Mediarama: 0,
      'Shining Arrows': 0,
      'Repel Phys': 31
    },
    dlc: true,
    item: { name: 'Diarahan', type: 'Skill Card' },
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
    }
  },
  Kaiwan: {
    personaType: 'Almighty',
    arcana: 'Star',
    level: 36,
    stats: { st: 23, ma: 26, en: 24, ag: 22, lu: 20 },
    skills: {
      'Forget Boost': 37,
      Makajam: 0,
      Makajamon: 39,
      Mapsio: 40,
      Marakunda: 41,
      Psio: 0,
      'Speed Master': 38
    },
    personality: 'Timid',
    area: 'Adyeshach',
    floor: 'L10-12',
    item: { name: 'Mapsio', type: 'Skill Card' },
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
    }
  },
  Kali: {
    personaType: 'Fire',
    arcana: 'Empress',
    level: 77,
    stats: { st: 53, ma: 45, en: 46, ag: 53, lu: 41 },
    skills: {
      'Absorb Nuke': 82,
      'Evade Ice': 79,
      'High Counter': 80,
      Mapsiodyne: 81,
      Psiodyne: 0,
      Tentarafoo: 0,
      'Vorpal Blade': 0
    },
    item: { name: 'Khamrai Tao', type: 'Item' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rp',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    }
  },
  Kelpie: {
    personaType: 'Wind',
    arcana: 'Strength',
    level: 6,
    stats: { st: 5, ma: 5, en: 5, ag: 6, lu: 4 },
    skills: {
      Garu: 0,
      Lunge: 0,
      'Resist Brainwash': 8,
      Sukukaja: 9,
      'Terror Claw': 10
    },
    personality: 'Upbeat',
    area: 'Aiyatsbus',
    floor: 'L3',
    item: { name: 'Terror Claw', type: 'Skill Card' },
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
    }
  },
  'Kikuri-Hime': {
    personaType: 'Healing',
    arcana: 'Priestess',
    level: 40,
    stats: { st: 22, ma: 31, en: 24, ag: 28, lu: 22 },
    skills: {
      'Divine Grace': 45,
      'Energy Drop': 0,
      Lullaby: 0,
      Marakukaja: 0,
      Mediarama: 41,
      Tetraja: 43
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L3-5 (before Palace 7) / L2 & 3 (after Palace 7)',
    item: { name: 'Divine Grace', type: 'Skill Card' },
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
    }
  },
  'Kin-Ki': {
    personaType: 'Physical',
    arcana: 'Chariot',
    level: 25,
    stats: { st: 21, ma: 13, en: 21, ag: 15, lu: 12 },
    skills: {
      'Bad Beat': 30,
      Counterstrike: 31,
      'Dodge Psy': 27,
      'Vajra Blast': 0,
      Rakukaja: 0,
      'Regenerate 1': 0,
      Sledgehammer: 28
    },
    personality: 'Gloomy',
    area: 'Kaitul',
    floor: 'L4, 5, 7-9',
    item: { name: 'Regenerate 1', type: 'Skill Card' },
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
    }
  },
  'King Frost': {
    personaType: 'Ice',
    arcana: 'Emperor',
    level: 61,
    stats: { st: 38, ma: 39, en: 45, ag: 33, lu: 35 },
    skills: {
      'Auto-Mataru': 64,
      Bufudyne: 0,
      'Freeze Boost': 62,
      'Ice Amp': 67,
      'Ice Break': 0,
      'Megaton Raid': 0,
      'Null Despair': 65
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L8, 11, 12, 13 (after Palace 7)',
    item: { name: 'King Frost Cape', type: 'Item' },
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
    }
  },
  Kodama: {
    personaType: 'Ailment',
    arcana: 'Star',
    level: 11,
    stats: { st: 7, ma: 11, en: 8, ag: 10, lu: 4 },
    skills: {
      'Evil Touch': 13,
      'Fear Boost': 15,
      Garu: 0,
      Psi: 12,
      Rakunda: 0,
      'Resist Fear': 17,
      Tarukaja: 14
    },
    personality: 'Upbeat',
    area: 'Aiyatsbus',
    floor: 'L1-3',
    item: { name: 'Fear Boost', type: 'Skill Card' },
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
    }
  },
  'Koh-i-Noor': {
    arcana: 'Priestess',
    level: 25,
    stats: { st: 25, ma: 25, en: 25, ag: 25, lu: 25 },
    skills: {
      'Dodge Curse': 0,
      'Dodge Elec': 0,
      'Dodge Fire': 0,
      'Dodge Ice': 0,
      'Dodge Bless': 0,
      'Dodge Nuke': 0,
      'Dodge Psy': 0,
      'Dodge Wind': 0
    },
    rare: true,
    area: 'Adyeshach',
    floor: 'L1-4, 6-8, 10-12',
    item: { name: 'Koh-i-Noor', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: '-',
      bless: 'nu',
      curse: 'nu'
    }
  },
  Kohryu: {
    personaType: 'Psy',
    arcana: 'Hierophant',
    level: 76,
    stats: { st: 43, ma: 51, en: 50, ag: 53, lu: 38 },
    skills: {
      'Life Aid': 78,
      Mapsiodyne: 0,
      Mediarahan: 0,
      Concentrate: 79,
      'Psy Amp': 80,
      'Psycho Force': 0,
      'Spell Master': 82
    },
    special: true,
    max: true,
    item: { name: 'Sudarshana', type: 'Item' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: 'wk',
      nuclear: 'nu',
      bless: 'nu',
      curse: '-'
    }
  },
  'Koppa Tengu': {
    personaType: 'Wind',
    arcana: 'Temperance',
    level: 11,
    stats: { st: 7, ma: 8, en: 8, ag: 11, lu: 6 },
    skills: {
      Snap: 0,
      Garu: 0,
      'Growth 1': 12,
      Taunt: 13,
      'Rage Boost': 14,
      'Wage War': 15
    },
    personality: 'Upbeat',
    area: 'Chemdah',
    floor: 'L6 & 7',
    item: { name: 'Growth 1', type: 'Skill Card' },
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
    }
  },
  Koropokguru: {
    personaType: 'Ice',
    arcana: 'Hermit',
    level: 9,
    stats: { st: 5, ma: 8, en: 6, ag: 9, lu: 6 },
    skills: {
      Bufu: 0,
      'Dodge Ice': 11,
      'Fire Wall': 13,
      Mabufu: 14,
      Makajam: 0,
      Rakunda: 12
    },
    personality: 'Timid',
    area: 'Chemdah',
    floor: 'L2 & 3',
    item: { name: 'Bufu', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: 'wk',
      ice: 'rs',
      electric: '-',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Koumokuten: {
    personaType: 'Physical',
    arcana: 'Hermit',
    level: 49,
    stats: { st: 37, ma: 32, en: 34, ag: 31, lu: 25 },
    skills: {
      'Assault Dive': 0,
      'Attack Master': 51,
      'Deadly Fury': 55,
      'Enduring Soul': 54,
      Matarukaja: 52,
      'Nuke Wall': 53,
      'Regenerate 2': 0,
      Revolution: 0
    },
    item: { name: 'Regenerate 2', type: 'Skill Card' },
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
    }
  },
  Kumbhanda: {
    personaType: 'Ailment',
    arcana: 'Hermit',
    level: 42,
    stats: { st: 29, ma: 25, en: 27, ag: 26, lu: 26 },
    skills: {
      Dekaja: 45,
      'Hysterical Slap': 0,
      'Rage Boost': 46,
      Revolution: 47,
      'Stagnant Air': 0,
      'Tempest Slash': 43,
      'Wage War': 0
    },
    area: 'Sheriruth',
    floor: 'L8, 9, 11-13 (before Palace 7) / L4 & 5 (after Palace 7)',
    item: { name: 'Rage Boost', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'nu',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    }
  },
  'Kurama Tengu': {
    personaType: 'Wind',
    arcana: 'Hermit',
    level: 56,
    stats: { st: 34, ma: 38, en: 34, ag: 42, lu: 27 },
    skills: {
      'Brain Buster': 0,
      Garudyne: 57,
      'Growth 3': 58,
      'Heat Wave': 0,
      Magarudyne: 60,
      Masukunda: 0
    },
    area: 'Sheriruth',
    floor: 'L11 (after Palace 7)',
    item: { name: 'Garudyne', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'wk',
      electric: '-',
      wind: 'rp',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    }
  },
  Kushinada: {
    personaType: 'Healing',
    arcana: 'Lovers',
    level: 42,
    stats: { st: 24, ma: 30, en: 26, ag: 28, lu: 25 },
    skills: {
      'Amrita Shower': 47,
      'Hysterical Slap': 0,
      Mabufula: 0,
      Matarukaja: 44,
      Mediarama: 0,
      'Null Sleep': 45,
      'Wind Wall': 46
    },
    area: 'Sheriruth',
    floor: 'L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)',
    item: { name: 'Wind Wall', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: 'rp',
      curse: '-'
    }
  },
  'Kushi Mitama': {
    personaType: 'Healing',
    arcana: 'Strength',
    level: 14,
    stats: { st: 8, ma: 12, en: 11, ag: 9, lu: 9 },
    skills: {
      Bufu: 0,
      'Forget Boost': 18,
      Garu: 0,
      Makajam: 0,
      Media: 0,
      'Regenerate 1': 15,
      'Wind Wall': 16
    },
    item: { name: 'Forget Boost', type: 'Skill Card' },
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
    }
  },
  Lachesis: {
    personaType: 'Ice',
    arcana: 'Fortune',
    level: 34,
    stats: { st: 18, ma: 25, en: 22, ag: 25, lu: 19 },
    skills: {
      Bufula: 0,
      'Elec Wall': 36,
      'Growth 2': 0,
      'Ice Boost': 40,
      Mabaisudi: 0,
      Mabufula: 38,
      Marakukaja: 35
    },
    item: { name: 'Ice Boost', type: 'Skill Card' },
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
    }
  },
  Lakshmi: {
    personaType: 'Healing',
    arcana: 'Fortune',
    level: 69,
    stats: { st: 40, ma: 47, en: 43, ag: 46, lu: 38 },
    skills: {
      'Amrita Shower': 72,
      Bufudyne: 0,
      'Life Aid': 74,
      Diarahan: 0,
      Lullaby: 0,
      Mediarahan: 70,
      'Rainy Play': 71
    },
    max: true,
    item: { name: 'Life Aid', type: 'Skill Card' },
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
    }
  },
  Lamia: {
    personaType: 'Fire',
    arcana: 'Empress',
    level: 26,
    stats: { st: 21, ma: 15, en: 18, ag: 19, lu: 12 },
    skills: {
      Agilao: 0,
      'Despair Boost': 31,
      'Foul Breath': 28,
      Maragion: 30,
      'Rising Slash': 0,
      Rakukaja: 0,
      'Ominous Words': 27
    },
    personality: 'Gloomy',
    area: 'Akzeriyyuth',
    floor: 'L3, 5-7, 9-11',
    item: { name: 'Despair Boost', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: 'wk',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    }
  },
  'Leanan Sidhe': {
    personaType: 'Almighty',
    arcana: 'Lovers',
    level: 19,
    stats: { st: 9, ma: 17, en: 12, ag: 16, lu: 10 },
    skills: {
      Eiga: 23,
      Mamudo: 21,
      Mapsi: 22,
      'Marin Karin': 20,
      Psio: 0,
      Rakunda: 0
    },
    personality: 'Irritable',
    area: 'Kaitul',
    floor: 'L3-5',
    item: { name: 'Recarm', type: 'Skill Card' },
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
    }
  },
  Legion: {
    personaType: 'Psy',
    arcana: 'Fool',
    level: 38,
    stats: { st: 24, ma: 24, en: 30, ag: 23, lu: 20 },
    skills: {
      'Life Drain': 0,
      'Negative Pile': 0,
      'Null Dizzy': 42,
      Psio: 39,
      Rampage: 0,
      'Tetra Break': 40
    },
    personality: 'Unknown',
    area: 'Adyeshach',
    floor: 'L1-4',
    item: { name: 'Legion\'s Jail', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    }
  },
  Lilim: {
    personaType: 'Ice',
    arcana: 'Devil',
    level: 32,
    stats: { st: 17, ma: 23, en: 18, ag: 25, lu: 20 },
    skills: {
      Bufula: 0,
      'Devil Smile': 0,
      'Dodge Bless': 35,
      'Freeze Boost': 34,
      Mabufula: 37,
      Masukunda: 0,
      'Spirit Drain': 36
    },
    personality: 'Gloomy',
    area: 'Adyeshach',
    floor: 'L6-8, 10-12',
    item: { name: 'Lullaby', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    }
  },
  Lilith: {
    personaType: 'Almighty',
    arcana: 'Moon',
    level: 60,
    stats: { st: 33, ma: 43, en: 37, ag: 39, lu: 35 },
    skills: {
      Mabufudyne: 0,
      Magarudyne: 62,
      'Makara Break': 0,
      Mamudoon: 64,
      Maragidyne: 65,
      Mudoon: 0,
      'Spirit Drain': 63
    },
    item: { name: 'Mabufudyne', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'wk',
      ice: 'rp',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    }
  },
  Lucifer: {
    personaType: 'Almighty',
    arcana: 'Star',
    level: 93,
    stats: { st: 61, ma: 59, en: 59, ag: 56, lu: 51 },
    skills: {
      'Absorb Phys': 99,
      Gigantomachia: 0,
      'Heat Riser': 96,
      'Fortified Moxy': 97,
      'Blazing Hell': 0,
      'Insta-Heal': 98,
      'Morning Star': 94,
      'Spell Master': 95
    },
    special: true,
    max: true,
    item: { name: 'Tyrant Pistol', type: 'Item' },
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
      curse: '-'
    }
  },
  Mada: {
    personaType: 'Fire',
    arcana: 'Tower',
    level: 85,
    stats: { st: 52, ma: 51, en: 58, ag: 56, lu: 45 },
    skills: {
      Agidyne: 0,
      'Amrita Shower': 88,
      'Burn Boost': 0,
      'Enduring Soul': 90,
      'Fire Amp': 0,
      'Blazing Hell': 87,
      'Spell Master': 91,
      'Unshaken Will': 86
    },
    max: true,
    item: { name: 'Unshaken Will', type: 'Skill Card' },
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
    }
  },
  'Magatsu-Izanagi': {
    personaType: 'Almighty',
    arcana: 'Tower',
    level: 44,
    stats: { st: 37, ma: 35, en: 32, ag: 25, lu: 10 },
    skills: {
      'Attack Master': 48,
      Bloodbath: 46,
      'Ghastly Wail': 0,
      'Heat Riser': 50,
      'Magatsu Mandala': 0,
      Maziodyne: 45,
      Megidola: 0
    },
    dlc: true,
    item: { name: 'Black Headband', type: 'Item' },
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
    }
  },
  'Magatsu-Izanagi Picaro': {
    personaType: 'Almighty',
    arcana: 'Tower',
    level: 48,
    stats: { st: 40, ma: 38, en: 35, ag: 27, lu: 11 },
    skills: {
      Bloodbath: 50,
      'Ghastly Wail': 0,
      'Heat Riser': 54,
      Magarudyne: 49,
      'Magatsu Mandala': 0,
      Megidola: 0,
      'Speed Master': 52
    },
    dlc: true,
    item: { name: 'Heat Riser', type: 'Skill Card' },
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
    }
  },
  Makami: {
    personaType: 'Nuclear',
    arcana: 'Temperance',
    level: 15,
    stats: { st: 13, ma: 12, en: 8, ag: 11, lu: 8 },
    skills: {
      'Dodge Elec': 20,
      'Double Fangs': 0,
      'Energy Drop': 0,
      Frei: 0,
      Mafrei: 17,
      Makajam: 18,
      'Resist Despair': 19
    },
    personality: 'Upbeat',
    area: 'Chemdah',
    floor: 'L6 & 7',
    item: { name: 'Makajam', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'rs',
      psychic: '-',
      nuclear: 'rs',
      bless: 'nu',
      curse: '-'
    }
  },
  Mandrake: {
    personaType: 'Electric',
    arcana: 'Death',
    level: 3,
    stats: { st: 2, ma: 3, en: 3, ag: 4, lu: 4 },
    skills: {
      'Energy Drop': 0,
      Lunge: 4,
      Pulinpa: 0,
      'Skull Cracker': 7,
      Sukunda: 5
    },
    personality: 'Upbeat',
    area: 'Qimranut / Aiyatsbus',
    floor: 'All / L1',
    item: { name: 'Energy Drop', type: 'Skill Card' },
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
    }
  },
  Mara: {
    personaType: 'Fire',
    arcana: 'Tower',
    level: 73,
    stats: { st: 47, ma: 46, en: 49, ag: 45, lu: 39 },
    skills: {
      'Firm Stance': 78,
      'Heat Up': 77,
      Maeigaon: 76,
      Maragidyne: 0,
      'One-shot Kill': 0,
      Charge: 74,
      'Tetra Break': 0
    },
    item: { name: 'Maragidyne', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'nu',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rs',
      curse: 'rp'
    }
  },
  Matador: {
    personaType: 'Psy',
    arcana: 'Death',
    level: 19,
    stats: { st: 12, ma: 13, en: 12, ag: 16, lu: 11 },
    skills: {
      Garula: 23,
      'Null Dizzy': 0,
      Psi: 0,
      Sukukaja: 0,
      'Swift Strike': 20,
      'Trigger Happy': 22
    },
    item: { name: 'Garula', type: 'Skill Card' },
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
    }
  },
  Melchizedek: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 60,
    stats: { st: 37, ma: 38, en: 41, ag: 39, lu: 32 },
    skills: {
      'Amrita Drop': 65,
      'God\'s Hand': 67,
      'Hama Boost': 61,
      Hamaon: 0,
      Mahamaon: 64,
      'Megaton Raid': 0,
      Revolution: 62
    },
    item: { name: 'Mahamaon', type: 'Skill Card' },
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
    }
  },
  Messiah: {
    personaType: 'Almighty',
    arcana: 'Judgement',
    level: 81,
    stats: { st: 50, ma: 50, en: 50, ag: 50, lu: 50 },
    skills: {
      'Absorb Phys': 85,
      'Almighty Boost': 87,
      'Enduring Soul': 83,
      'God\'s Hand': 0,
      'Invigorate 3': 84,
      Megidolaon: 0,
      Oratorio: 0,
      'Regenerate 3': 82
    },
    dlc: true,
    item: { name: 'Lucifer Guard', type: 'Item' },
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
    }
  },
  'Messiah Picaro': {
    personaType: 'Almighty',
    arcana: 'Judgement',
    level: 90,
    stats: { st: 56, ma: 56, en: 55, ag: 55, lu: 55 },
    skills: {
      Agneyastra: 0,
      'Almighty Boost': 96,
      'Life Aid': 93,
      'Enduring Soul': 92,
      'Firm Stance': 94,
      'Insta-Heal': 91,
      Megidolaon: 0,
      Oratorio: 0
    },
    dlc: true,
    item: { name: 'Insta-Heal', type: 'Skill Card' },
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
    }
  },
  Metatron: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 89,
    stats: { st: 54, ma: 61, en: 60, ag: 57, lu: 42 },
    skills: {
      'Sword Dance': 0,
      'Divine Judgement': 95,
      'Hama Boost': 92,
      'Bless Amp': 94,
      Mahamaon: 0,
      Makougaon: 0,
      Megidolaon: 91,
      Concentrate: 93
    },
    special: true,
    max: true,
    item: { name: 'Nataraja', type: 'Item' },
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
    }
  },
  Michael: {
    personaType: 'Almighty',
    arcana: 'Judgement',
    level: 87,
    stats: { st: 57, ma: 54, en: 55, ag: 56, lu: 46 },
    skills: {
      'Cosmic Flare': 92,
      'Sword Dance': 89,
      Debilitate: 0,
      'Divine Judgement': 0,
      Mabufudyne: 0,
      Mahamaon: 90,
      Megidolaon: 91
    },
    special: true,
    note: 'Needs Strength cooperation rank 5 to be fused',
    item: { name: 'Judge of the Dead', type: 'Item' },
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
    }
  },
  Mitra: {
    personaType: 'Bless',
    arcana: 'Temperance',
    level: 33,
    stats: { st: 19, ma: 26, en: 19, ag: 24, lu: 18 },
    skills: {
      Dekunda: 35,
      Diarama: 0,
      Kouga: 0,
      'Bless Boost': 36,
      Mahama: 0,
      Makouga: 34,
      Thermopylae: 38
    },
    item: { name: 'Death Contract', type: 'Item' },
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
    }
  },
  Mithras: {
    personaType: 'Nuclear',
    arcana: 'Sun',
    level: 39,
    stats: { st: 27, ma: 25, en: 27, ag: 25, lu: 20 },
    skills: {
      Freidyne: 45,
      Mafreila: 0,
      'Nuke Break': 42,
      'Vicious Strike': 0,
      Tentarafoo: 0,
      'Tetra Break': 41
    },
    personality: 'Gloomy',
    area: 'Adyeshach',
    floor: 'L11 & 12',
    item: { name: 'Petra Genetrix', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'nu',
      bless: '-',
      curse: '-'
    }
  },
  Mokoi: {
    personaType: 'Ailment',
    arcana: 'Death',
    level: 9,
    stats: { st: 9, ma: 5, en: 6, ag: 10, lu: 4 },
    skills: {
      Dazzler: 0,
      Dekunda: 14,
      'Dodge Elec': 13,
      'Marin Karin': 11,
      'Skull Cracker': 0,
      Tarukaja: 0
    },
    personality: 'Gloomy',
    area: 'Chemdah',
    floor: 'L1-4',
    item: { name: 'Dekunda', type: 'Skill Card' },
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
    }
  },
  Moloch: {
    personaType: 'Psy',
    arcana: 'Hanged Man',
    level: 60,
    stats: { st: 32, ma: 45, en: 42, ag: 31, lu: 37 },
    skills: {
      'Absorb Fire': 64,
      Agidyne: 62,
      'Devil Smile': 0,
      'Ghastly Wail': 63,
      'Nuke Amp': 65,
      Psiodyne: 0,
      'Stagnant Air': 0
    },
    item: { name: 'Nuke Amp', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'rp',
      ice: 'wk',
      electric: 'rs',
      wind: 'rs',
      psychic: 'ab',
      nuclear: '-',
      bless: '-',
      curse: 'nu'
    }
  },
  Mot: {
    personaType: 'Ailment',
    arcana: 'Death',
    level: 72,
    stats: { st: 43, ma: 51, en: 48, ag: 42, lu: 39 },
    skills: {
      Matarukaja: 0,
      Maziodyne: 0,
      Megidola: 0,
      Megidolaon: 76,
      Concentrate: 74,
      'Repel Elec': 77
    },
    item: { name: 'Concentrate', type: 'Skill Card' },
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
    }
  },
  'Mother Harlot': {
    personaType: 'Ice',
    arcana: 'Empress',
    level: 80,
    stats: { st: 55, ma: 48, en: 46, ag: 49, lu: 49 },
    skills: {
      Debilitate: 85,
      'Ice Age': 81,
      'Ice Amp': 82,
      Mabufudyne: 0,
      Mamudoon: 0,
      'Mudo Boost': 0,
      'Null Bless': 83
    },
    max: true,
    item: { name: 'Claiomh Solais - Sable', type: 'Item' },
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
    }
  },
  Mothman: {
    personaType: 'Electric',
    arcana: 'Moon',
    level: 33,
    stats: { st: 21, ma: 24, en: 16, ag: 24, lu: 21 },
    skills: {
      'Ambient Aid': 36,
      Makajamon: 37,
      Mazionga: 0,
      'Shock Boost': 0,
      'Skull Cracker': 0,
      Tentarafoo: 35
    },
    personality: 'Timid',
    area: 'Adyeshach',
    floor: 'L3, 4, 7, 8, 10',
    item: { name: 'Foul Breath', type: 'Skill Card' },
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
    }
  },
  Naga: {
    personaType: 'Electric',
    arcana: 'Hermit',
    level: 24,
    stats: { st: 15, ma: 17, en: 15, ag: 17, lu: 15 },
    skills: {
      'Memory Blow': 0,
      Dazzler: 27,
      'Double Fangs': 0,
      'Elec Boost': 26,
      Marakukaja: 29,
      Mazionga: 28,
      Zionga: 0
    },
    personality: 'Gloomy',
    area: 'Akzeriyyuth',
    floor: 'L2, 3, 5-7, 9',
    item: { name: 'Elec Boost', type: 'Skill Card' },
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
    }
  },
  Narcissus: {
    personaType: 'Ailment',
    arcana: 'Lovers',
    level: 50,
    stats: { st: 27, ma: 36, en: 29, ag: 35, lu: 30 },
    skills: {
      'Nocturnal Flash': 0,
      'Ambient Aid': 55,
      'Dizzy Boost': 53,
      'Energy Drop': 0,
      'Growth 3': 52,
      Magarula: 0,
      Mediarama: 54
    },
    area: 'Sheriruth',
    floor: 'L7 & 8 (after Palace 7)',
    item: { name: 'Daffodils', type: 'Item' },
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
    }
  },
  Nebiros: {
    personaType: 'Curse',
    arcana: 'Devil',
    level: 62,
    stats: { st: 39, ma: 40, en: 42, ag: 36, lu: 36 },
    skills: {
      'Curse Amp': 65,
      Eigaon: 0,
      'Evade Bless': 66,
      Maeigaon: 64,
      Mamudoon: 0,
      'Marin Karin': 0,
      Megidolaon: 68
    },
    item: { name: 'Eigaon', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'rs',
      nuclear: '-',
      bless: 'wk',
      curse: 'rp'
    }
  },
  'Neko Shogun': {
    personaType: 'Almighty',
    arcana: 'Star',
    level: 30,
    stats: { st: 19, ma: 20, en: 19, ag: 21, lu: 18 },
    skills: {
      'Defense Master': 34,
      Diarama: 0,
      'Fortified Moxy': 36,
      'Invigorate 1': 31,
      Masukukaja: 0,
      Psio: 0,
      'Rat Fang': 33
    },
    special: true,
    note: 'Needs Strength cooperation rank 1 to be fused',
    item: { name: 'Catnap', type: 'Item' },
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
    }
  },
  Nekomata: {
    personaType: 'Ailment',
    arcana: 'Magician',
    level: 17,
    stats: { st: 13, ma: 10, en: 12, ag: 15, lu: 8 },
    skills: {
      'Evil Touch': 0,
      'Dodge Elec': 22,
      'Elec Wall': 21,
      'Hysterical Slap': 18,
      Magaru: 0,
      'Terror Claw': 0,
      'Wind Break': 20
    },
    personality: 'Upbeat',
    area: 'Kaitul',
    floor: 'L2-4',
    item: { name: 'Pawzooka', type: 'Item' },
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
    }
  },
  'Nigi Mitama': {
    personaType: 'Healing',
    arcana: 'Temperance',
    level: 20,
    stats: { st: 12, ma: 14, en: 14, ag: 15, lu: 12 },
    skills: {
      Baisudi: 0,
      'Divine Grace': 22,
      Makouha: 0,
      'Me Patra': 23,
      Media: 0,
      'Rainy Play': 24
    },
    item: { name: 'Me Patra', type: 'Skill Card' },
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
    }
  },
  Norn: {
    personaType: 'Almighty',
    arcana: 'Fortune',
    level: 52,
    stats: { st: 30, ma: 38, en: 33, ag: 34, lu: 28 },
    skills: {
      'Amrita Drop': 55,
      'Nocturnal Flash': 0,
      Diarahan: 54,
      Garudyne: 0,
      Samarecarm: 57,
      Tetraja: 56,
      Ziodyne: 0
    },
    area: 'Sheriruth',
    floor: 'L11-13 (before Palace 7) / L5 (after Palace 7)',
    item: { name: 'Diarahan', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: 'ab',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Nue: {
    personaType: 'Curse',
    arcana: 'Moon',
    level: 20,
    stats: { st: 16, ma: 10, en: 17, ag: 14, lu: 10 },
    skills: {
      'Assault Dive': 25,
      'Curse Boost': 26,
      Maeiha: 0,
      Mamudo: 24,
      Mudo: 21,
      Pulinpa: 22,
      'Skull Cracker': 0
    },
    personality: 'Irritable',
    area: 'Chemdah',
    floor: 'L4',
    item: { name: 'Skull Cracker', type: 'Skill Card' },
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
    }
  },
  Obariyon: {
    personaType: 'Physical',
    arcana: 'Fool',
    level: 8,
    stats: { st: 7, ma: 3, en: 9, ag: 8, lu: 4 },
    skills: {
      Dekaja: 12,
      Snap: 0,
      'Lucky Punch': 9,
      'Resist Fear': 10,
      Sukunda: 0
    },
    personality: 'Unknown',
    area: 'Aiyatsbus',
    floor: 'L3, 5 & 6',
    item: { name: 'Lucky Punch', type: 'Skill Card' },
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
    }
  },
  Oberon: {
    personaType: 'Electric',
    arcana: 'Emperor',
    level: 66,
    stats: { st: 40, ma: 44, en: 43, ag: 43, lu: 35 },
    skills: {
      'Brain Jack': 0,
      'Elec Amp': 72,
      'Heat Wave': 0,
      Matarukaja: 68,
      Maziodyne: 69,
      'Psy Wall': 70,
      Samarecarm: 71,
      Ziodyne: 0
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L13 (after Palace 7)',
    item: { name: 'Elec Amp', type: 'Skill Card' },
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
    }
  },
  Odin: {
    personaType: 'Electric',
    arcana: 'Emperor',
    level: 82,
    stats: { st: 53, ma: 52, en: 54, ag: 52, lu: 42 },
    skills: {
      'Wild Thunder': 84,
      'Elec Amp': 87,
      'Fast Heal': 86,
      Marakukaja: 0,
      Concentrate: 85,
      'Myriad Slashes': 0,
      'Thunder Reign': 0
    },
    max: true,
    item: { name: 'Wild Hunt', type: 'Item' },
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
    }
  },
  Okuninushi: {
    personaType: 'Psy',
    arcana: 'Emperor',
    level: 44,
    stats: { st: 30, ma: 28, en: 29, ag: 28, lu: 24 },
    skills: {
      'Evade Nuke': 47,
      'Heat Wave': 49,
      Mapsio: 0,
      Matarukaja: 0,
      'Psy Boost': 45,
      'Psy Break': 46,
      'Tempest Slash': 0
    },
    item: { name: 'Official\'s Robe', type: 'Item' },
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
    }
  },
  'Ongyo-Ki': {
    personaType: 'Physical',
    arcana: 'Hermit',
    level: 75,
    stats: { st: 56, ma: 42, en: 47, ag: 48, lu: 39 },
    skills: {
      Agneyastra: 81,
      'Arms Master': 77,
      'Firm Stance': 79,
      Makajamon: 0,
      'Pressing Stance': 0,
      'Myriad Slashes': 0,
      'Regenerate 3': 78
    },
    special: true,
    max: true,
    item: { name: 'Myriad Slashes', type: 'Skill Card' },
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
      curse: 'rp'
    }
  },
  Oni: {
    personaType: 'Physical',
    arcana: 'Strength',
    level: 19,
    stats: { st: 17, ma: 8, en: 16, ag: 13, lu: 10 },
    skills: {
      'Memory Blow': 23,
      'Sharp Student': 22,
      Counter: 0,
      Snap: 0,
      'Giant Slice': 21,
      Rampage: 0
    },
    personality: 'Upbeat',
    area: 'Kaitul',
    floor: 'L3-5, 8, 9',
    item: { name: 'Rampage', type: 'Skill Card' },
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
    }
  },
  Onmoraki: {
    personaType: 'Curse',
    arcana: 'Moon',
    level: 12,
    stats: { st: 9, ma: 12, en: 7, ag: 10, lu: 5 },
    skills: {
      Agi: 13,
      'Ice Wall': 0,
      Mudo: 0,
      'Confuse Boost': 15,
      Pulinpa: 14,
      'Resist Fear': 17
    },
    personality: 'Gloomy',
    area: 'Chemdah',
    floor: 'L3 & 4',
    item: { name: 'Confuse Boost', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    }
  },
  Orlov: {
    arcana: 'Strength',
    level: 30,
    stats: { st: 30, ma: 30, en: 30, ag: 30, lu: 30 },
    skills: {
      Mabufula: 0,
      Maeiga: 0,
      Mafreila: 0,
      Magarula: 0,
      Makouga: 0,
      Mapsio: 0,
      Maragion: 0,
      Mazionga: 0
    },
    rare: true,
    area: 'Sheriruth',
    floor: 'All (before Palace 7) / L1-5 (after Palace 7)',
    item: { name: 'Orlov', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'nu',
      fire: 'nu',
      ice: 'nu',
      electric: '-',
      wind: 'nu',
      psychic: 'nu',
      nuclear: 'nu',
      bless: 'nu',
      curse: 'nu'
    }
  },
  Orobas: {
    personaType: 'Fire',
    arcana: 'Hierophant',
    level: 17,
    stats: { st: 11, ma: 14, en: 15, ag: 12, lu: 6 },
    skills: {
      Dekaja: 0,
      'Fire Break': 20,
      Makajamon: 21,
      Maragi: 0,
      Marakunda: 19,
      Sukukaja: 0
    },
    personality: 'Timid',
    area: 'Kaitul',
    floor: 'L1-3',
    item: { name: 'Maragi', type: 'Skill Card' },
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
      curse: 'rs'
    }
  },
  Orpheus: {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 26,
    stats: { st: 17, ma: 17, en: 17, ag: 17, lu: 17 },
    skills: {
      Agilao: 0,
      Cadenza: 0,
      Endure: 27,
      'Fire Boost': 32,
      Maragion: 29,
      Marakukaja: 30,
      Tarunda: 0
    },
    dlc: true,
    item: { name: 'Hades Harp', type: 'Item' },
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
    }
  },
  'Orpheus Picaro': {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 29,
    stats: { st: 19, ma: 19, en: 19, ag: 19, lu: 18 },
    skills: {
      Agidyne: 32,
      Cadenza: 0,
      Endure: 30,
      'Fire Boost': 35,
      Maragion: 0,
      Matarukaja: 33,
      Matarunda: 0
    },
    dlc: true,
    item: { name: 'Agidyne', type: 'Skill Card' },
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
    }
  },
  Orthrus: {
    personaType: 'Fire',
    arcana: 'Hanged Man',
    level: 21,
    stats: { st: 16, ma: 14, en: 14, ag: 19, lu: 7 },
    skills: {
      Agilao: 0,
      'Burn Boost': 22,
      'Dodge Ice': 0,
      'Double Fangs': 0,
      Matarukaja: 26,
      'Rat Fang': 24
    },
    personality: 'Irritable',
    area: 'Kaitul',
    floor: 'L4, 5, 7-9',
    item: { name: 'Burn Boost', type: 'Skill Card' },
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
    }
  },
  Ose: {
    personaType: 'Ailment',
    arcana: 'Fool',
    level: 42,
    stats: { st: 32, ma: 24, en: 25, ag: 31, lu: 21 },
    skills: {
      Counterstrike: 0,
      'Heat Wave': 47,
      Matarukaja: 45,
      'Oni Kagura': 0,
      'Tempest Slash': 43
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L1-5, 9 (before Palace 7) / L1-4 (after Palace 7)',
    item: { name: 'Matarukaja', type: 'Skill Card' },
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
    }
  },
  'Pale Rider': {
    personaType: 'Curse',
    arcana: 'Death',
    level: 53,
    stats: { st: 34, ma: 34, en: 33, ag: 39, lu: 26 },
    skills: {
      'Abysmal Surge': 0,
      'Brain Shake': 0,
      'Curse Boost': 55,
      Deathbound: 58,
      Eigaon: 0,
      'Evade Bless': 57,
      Megidola: 54
    },
    item: { name: 'Megidola', type: 'Skill Card' },
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
    }
  },
  Parvati: {
    personaType: 'Psy',
    arcana: 'Lovers',
    level: 56,
    stats: { st: 33, ma: 39, en: 33, ag: 39, lu: 31 },
    skills: {
      Diarahan: 58,
      Diarama: 0,
      'Energy Shower': 57,
      'Hama Boost': 61,
      Hamaon: 0,
      Mapsiodyne: 59,
      Psiodyne: 0
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L9, 11, 12 (after Palace 7)',
    item: { name: 'Psiodyne', type: 'Skill Card' },
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
    }
  },
  Pazuzu: {
    personaType: 'Curse',
    arcana: 'Devil',
    level: 43,
    stats: { st: 29, ma: 30, en: 27, ag: 26, lu: 24 },
    skills: {
      'Bad Beat': 47,
      'Ambient Aid': 45,
      'Devil Smile': 46,
      Eigaon: 48,
      Maeiga: 0,
      Mudoon: 0,
      Tentarafoo: 0
    },
    item: { name: 'Maeiga', type: 'Skill Card' },
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
    }
  },
  Pisaca: {
    personaType: 'Curse',
    arcana: 'Death',
    level: 29,
    stats: { st: 19, ma: 21, en: 21, ag: 17, lu: 16 },
    skills: {
      'Abysmal Surge': 32,
      'Despair Boost': 33,
      'Dream Needle': 0,
      Mamudo: 30,
      Mudoon: 34,
      Rampage: 0,
      'Stagnant Air': 0
    },
    personality: 'Unknown',
    area: 'Akzeriyyuth',
    floor: 'L5-7, 9-11',
    item: { name: 'Headhunter Ladle', type: 'Item' },
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
    }
  },
  Pixie: {
    personaType: 'Electric',
    arcana: 'Lovers',
    level: 2,
    stats: { st: 1, ma: 3, en: 3, ag: 4, lu: 2 },
    skills: { Dia: 0, Patra: 3, 'Resist Confuse': 6, Tarukaja: 5, Zio: 0 },
    personality: 'Timid',
    area: 'Qimranut / Aiyatsbus',
    floor: 'All / L1 & 3',
    item: { name: 'Dia', type: 'Skill Card' },
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
    }
  },
  Power: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 41,
    stats: { st: 30, ma: 26, en: 28, ag: 25, lu: 21 },
    skills: {
      Diarama: 44,
      Hamaon: 0,
      Makouga: 43,
      Masukukaja: 45,
      'Null Curse': 46,
      Sukukaja: 0,
      'Swift Strike': 42
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L1-5, 7 (before Palace 7) / L1-3 (after Palace 7)',
    item: { name: 'Masukukaja', type: 'Skill Card' },
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
    }
  },
  Principality: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 29,
    stats: { st: 17, ma: 19, en: 18, ag: 21, lu: 19 },
    skills: {
      'Bless Boost': 34,
      Mabaisudi: 32,
      Makajamon: 0,
      Makouga: 0,
      Mediarama: 31,
      Tetraja: 0
    },
    item: { name: 'Tetraja', type: 'Skill Card' },
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
    }
  },
  'Queen Mab': {
    personaType: 'Almighty',
    arcana: 'Magician',
    level: 43,
    stats: { st: 23, ma: 35, en: 26, ag: 30, lu: 22 },
    skills: {
      Agidyne: 48,
      Makajamon: 0,
      'Makara Break': 46,
      Matarunda: 44,
      Mazionga: 0,
      'Wind Wall': 0
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L5, 7-9 (before Palace 7) / L3 & 4 (after Palace 7)',
    item: { name: 'Masquerade Ribbon', type: 'Item' },
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
    }
  },
  Quetzalcoatl: {
    personaType: 'Wind',
    arcana: 'Sun',
    level: 63,
    stats: { st: 38, ma: 42, en: 41, ag: 41, lu: 34 },
    skills: {
      'Memory Blow': 0,
      Garudyne: 0,
      'Growth 3': 65,
      Magarudyne: 67,
      Magarula: 0,
      'Regenerate 3': 66,
      'Wind Amp': 68
    },
    item: { name: 'Regenerate 3', type: 'Skill Card' },
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
    }
  },
  'Raja Naga': {
    personaType: 'Electric',
    arcana: 'Temperance',
    level: 55,
    stats: { st: 33, ma: 37, en: 36, ag: 35, lu: 31 },
    skills: {
      'Elec Break': 0,
      'Evade Wind': 60,
      Makarakarn: 58,
      Maziodyne: 59,
      'Shock Boost': 57,
      Tentarafoo: 0,
      Ziodyne: 0
    },
    item: { name: 'Ziodyne', type: 'Skill Card' },
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
    }
  },
  Rakshasa: {
    personaType: 'Physical',
    arcana: 'Strength',
    level: 24,
    stats: { st: 20, ma: 15, en: 18, ag: 17, lu: 9 },
    skills: {
      Counterstrike: 28,
      'Adverse Resolve': 30,
      'Giant Slice': 0,
      'Mind Slice': 27,
      'Regenerate 1': 26,
      Tarukaja: 0,
      'Wind Wall': 0
    },
    personality: 'Irritable',
    area: 'Kaitul',
    floor: 'L5, 7-9',
    item: { name: 'Mind Slice', type: 'Skill Card' },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'rs'
    }
  },
  Rangda: {
    personaType: 'Curse',
    arcana: 'Magician',
    level: 48,
    stats: { st: 28, ma: 34, en: 30, ag: 33, lu: 26 },
    skills: {
      Bloodbath: 0,
      Counterstrike: 0,
      Eigaon: 49,
      Matarunda: 51,
      Mudoon: 53,
      'Swift Strike': 0
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L11-13 (before Palace 7) / L5 (after Palace 7)',
    item: { name: 'Bloodbath', type: 'Skill Card' },
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
    }
  },
  Raphael: {
    personaType: 'Almighty',
    arcana: 'Lovers',
    level: 78,
    stats: { st: 57, ma: 45, en: 49, ag: 55, lu: 35 },
    skills: {
      'Arms Master': 83,
      'Adverse Resolve': 82,
      'Sword Dance': 0,
      Dekaja: 0,
      'Growth 3': 81,
      'Heat Riser': 80,
      Charge: 0
    },
    item: { name: 'Heat Riser', type: 'Skill Card' },
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
    }
  },
  'Red Rider': {
    personaType: 'Psy',
    arcana: 'Tower',
    level: 41,
    stats: { st: 26, ma: 27, en: 25, ag: 29, lu: 23 },
    skills: {
      Mapsio: 0,
      'Negative Pile': 42,
      'Pressing Stance': 45,
      'Psy Break': 0,
      'Rage Boost': 46,
      'Rising Slash': 0,
      'Resist Confuse': 44
    },
    item: { name: 'Psy Break', type: 'Skill Card' },
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
    }
  },
  Regent: {
    arcana: 'Emperor',
    level: 10,
    stats: { st: 10, ma: 10, en: 10, ag: 10, lu: 10 },
    skills: {
      Mabufu: 0,
      Maeiha: 0,
      Mafrei: 0,
      Magaru: 0,
      Makouha: 0,
      Mapsi: 0,
      Maragi: 0,
      Mazio: 0
    },
    rare: true,
    area: 'Qimranut / Aiyatsbus / Chemdah',
    floor: 'All / L1-3, 5 & 6 / L1-4, 6 & 7',
    item: { name: 'Regent', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'wk',
      nuclear: 'wk',
      bless: 'nu',
      curse: 'nu'
    }
  },
  'Saki Mitama': {
    personaType: 'Healing',
    arcana: 'Lovers',
    level: 6,
    stats: { st: 4, ma: 6, en: 5, ag: 6, lu: 4 },
    skills: {
      Bufu: 0,
      'Energy Drop': 0,
      'Growth 1': 7,
      Rakukaja: 8,
      'Resist Dizzy': 10,
      'Wind Wall': 0
    },
    item: { name: 'Rakukaja', type: 'Skill Card' },
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
    }
  },
  Sandalphon: {
    personaType: 'Bless',
    arcana: 'Moon',
    level: 75,
    stats: { st: 46, ma: 51, en: 49, ag: 48, lu: 38 },
    skills: {
      'Amrita Shower': 0,
      'Angelic Grace': 77,
      'Sword Dance': 79,
      Mahamaon: 0,
      'Repel Curse': 78,
      Samarecarm: 0
    },
    max: true,
    item: { name: 'Angelic Grace', type: 'Skill Card' },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'rp',
      curse: 'nu'
    }
  },
  Sandman: {
    personaType: 'Wind',
    arcana: 'Magician',
    level: 24,
    stats: { st: 11, ma: 13, en: 14, ag: 20, lu: 21 },
    skills: {
      'Dormin Rush': 0,
      Dormina: 0,
      Garula: 0,
      Magarula: 28,
      'Null Sleep': 27,
      'Sleep Boost': 29,
      Sukunda: 25
    },
    personality: 'Irritable',
    area: 'Akzeriyyuth',
    floor: 'L1-3',
    item: { name: 'Sleep Boost', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'wk',
      wind: 'rs',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Sarasvati: {
    personaType: 'Healing',
    arcana: 'Priestess',
    level: 50,
    stats: { st: 30, ma: 35, en: 32, ag: 33, lu: 27 },
    skills: {
      Dekaja: 52,
      Diarahan: 54,
      Matarunda: 53,
      'Me Patra': 0,
      Mediarama: 0,
      'Null Sleep': 51,
      Tentarafoo: 0
    },
    area: 'Sheriruth',
    floor: 'L7-9. 12 (after Palace 7)',
    item: { name: 'Mediarama', type: 'Skill Card' },
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
    }
  },
  Satan: {
    personaType: 'Ice',
    arcana: 'Judgement',
    level: 92,
    stats: { st: 62, ma: 59, en: 55, ag: 52, lu: 55 },
    skills: {
      'Absorb Ice': 98,
      'Black Viper': 94,
      'Diamond Dust': 0,
      'Ice Age': 0,
      'Invigorate 3': 95,
      Concentrate: 97,
      'Regenerate 3': 0,
      'Fortify Spirit': 96
    },
    max: true,
    item: { name: 'Tantric Oath', type: 'Item' },
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
    }
  },
  Satanael: {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 95,
    stats: { st: 63, ma: 60, en: 57, ag: 56, lu: 56 },
    skills: {
      'Cosmic Flare': 96,
      'Heat Riser': 97,
      Maeigaon: 0,
      Megidolaon: 0,
      'Riot Gun': 0,
      'Survival Trick': 0,
      'Unshaken Will': 98,
      'Victory Cry': 99
    },
    special: true,
    note: 'Only available on NG+',
    item: { name: 'Paradise Lost', type: 'Item' },
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
    }
  },
  Scathach: {
    personaType: 'Wind',
    arcana: 'Priestess',
    level: 45,
    stats: { st: 29, ma: 30, en: 28, ag: 30, lu: 25 },
    skills: {
      'Attack Master': 49,
      'Sharp Student': 0,
      Endure: 50,
      Magarula: 0,
      Maragion: 46,
      Matarukaja: 48,
      'Tempest Slash': 0
    },
    personality: 'Upbeat',
    area: 'Adyeshach',
    floor: 'L10-12',
    item: { name: 'Tempest Slash', type: 'Skill Card' },
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
    }
  },
  Seiryu: {
    personaType: 'Ice',
    arcana: 'Temperance',
    level: 62,
    stats: { st: 38, ma: 41, en: 43, ag: 37, lu: 34 },
    skills: {
      'Amrita Drop': 66,
      Bufudyne: 0,
      Diarahan: 0,
      Mabufudyne: 65,
      Makarakarn: 67,
      Marakukaja: 0,
      'Repel Nuke': 63
    },
    item: { name: 'Amrita Drop', type: 'Skill Card' },
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
    }
  },
  Setanta: {
    personaType: 'Physical',
    arcana: 'Emperor',
    level: 28,
    stats: { st: 20, ma: 17, en: 19, ag: 18, lu: 17 },
    skills: {
      Counter: 0,
      'Dormin Rush': 0,
      'Giant Slice': 0,
      Charge: 34,
      'Rising Slash': 31,
      Rebellion: 32
    },
    item: { name: 'Counter', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: 'wk',
      nuclear: 'rs',
      bless: '-',
      curse: '-'
    }
  },
  Seth: {
    personaType: 'Fire',
    arcana: 'Tower',
    level: 51,
    stats: { st: 32, ma: 35, en: 30, ag: 35, lu: 28 },
    skills: {
      Agidyne: 0,
      'Fire Break': 54,
      Masukukaja: 0,
      'One-shot Kill': 0,
      'Fortify Spirit': 56,
      Cripple: 53
    },
    special: true,
    note: 'Needs Strength cooperation rank 1 to be fused',
    item: { name: 'One-shot Kill', type: 'Skill Card' },
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
    }
  },
  Shiisaa: {
    personaType: 'Electric',
    arcana: 'Chariot',
    level: 16,
    stats: { st: 13, ma: 9, en: 12, ag: 13, lu: 8 },
    skills: {
      'Dodge Curse': 20,
      'Dodge Elec': 21,
      'Double Fangs': 0,
      Rampage: 18,
      'Skull Cracker': 0,
      Zio: 0
    },
    item: { name: 'Mazio', type: 'Skill Card' },
    affinities: {
      physical: 'rs',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: 'wk'
    }
  },
  'Shiki-Ouji': {
    personaType: 'Psy',
    arcana: 'Chariot',
    level: 21,
    stats: { st: 16, ma: 14, en: 15, ag: 14, lu: 11 },
    skills: {
      Dekaja: 24,
      Snap: 0,
      Mapsi: 22,
      'Oni Kagura': 27,
      Taunt: 0,
      Psio: 26,
      Tarukaja: 0
    },
    personality: 'Irritable',
    area: 'Chemdah',
    floor: 'L6 & 7',
    item: { name: 'Dormin Rush', type: 'Skill Card' },
    affinities: {
      physical: 'nu',
      gun: 'nu',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: 'nu'
    }
  },
  Shiva: {
    personaType: 'Psy',
    arcana: 'Judgement',
    level: 82,
    stats: { st: 55, ma: 54, en: 53, ag: 53, lu: 38 },
    skills: {
      'Auto-Mataru': 87,
      'Enduring Soul': 0,
      Maziodyne: 0,
      Megidolaon: 86,
      'Psycho Blast': 88,
      'Psycho Force': 0,
      'Riot Gun': 85
    },
    special: true,
    item: { name: 'Megido Fire', type: 'Item' },
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
    }
  },
  Siegfried: {
    personaType: 'Physical',
    arcana: 'Strength',
    level: 69,
    stats: { st: 51, ma: 37, en: 47, ag: 48, lu: 31 },
    skills: {
      'Auto-Mataru': 72,
      'High Counter': 0,
      Masukukaja: 0,
      'Megaton Raid': 0,
      Charge: 70,
      'Vorpal Blade': 74
    },
    item: { name: 'Vorpal Blade', type: 'Skill Card' },
    affinities: {
      physical: 'nu',
      gun: '-',
      fire: '-',
      ice: 'rs',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    }
  },
  Silky: {
    personaType: 'Healing',
    arcana: 'Priestess',
    level: 6,
    stats: { st: 4, ma: 7, en: 4, ag: 5, lu: 5 },
    skills: { Bufu: 0, 'Sharp Student': 10, Dia: 7, Dormina: 0, Patra: 9 },
    personality: 'Gloomy',
    area: 'Aiyatsbus',
    floor: 'L2, 3, 5 & 6',
    item: { name: 'Silk Dress', type: 'Item' },
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
    }
  },
  Skadi: {
    personaType: 'Ice',
    arcana: 'Priestess',
    level: 55,
    stats: { st: 35, ma: 39, en: 34, ag: 34, lu: 30 },
    skills: {
      Bufudyne: 58,
      'Evil Touch': 0,
      'Ghastly Wail': 56,
      Mabufula: 0,
      'Null Despair': 0,
      'Repel Ice': 60,
      'Spirit Drain': 59
    },
    area: 'Sheriruth',
    floor: 'L12 & 13 (before Palace 7) / L5 (after Palace 7)',
    item: { name: 'Snow Queen\'s Whip', type: 'Item' },
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
    }
  },
  Slime: {
    personaType: 'Curse',
    arcana: 'Chariot',
    level: 10,
    stats: { st: 9, ma: 6, en: 11, ag: 6, lu: 5 },
    skills: {
      'Evil Touch': 0,
      Eiha: 11,
      'Fire Wall': 13,
      Headbutt: 14,
      Lunge: 0
    },
    personality: 'Timid',
    area: 'Qimranut / Aiyatsbus',
    floor: 'All / L1, 2, 3, 6',
    item: { name: 'Headbutt', type: 'Skill Card' },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: 'wk',
      ice: '-',
      electric: '-',
      wind: 'wk',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Sraosha: {
    personaType: 'Bless',
    arcana: 'Star',
    level: 80,
    stats: { st: 47, ma: 56, en: 45, ag: 56, lu: 43 },
    skills: {
      'Amrita Shower': 84,
      'Angelic Grace': 83,
      Debilitate: 85,
      'Hama Boost': 0,
      Kougaon: 0,
      Mahamaon: 0,
      Makougaon: 81
    },
    special: true,
    note: 'Needs Strength cooperation rank 5 to be fused',
    item: { name: 'Archangel Bra', type: 'Item' },
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
    }
  },
  'Stone of Scone': {
    arcana: 'Fortune',
    level: 20,
    stats: { st: 20, ma: 20, en: 20, ag: 20, lu: 20 },
    skills: {
      Agilao: 0,
      Bufula: 0,
      Eiga: 0,
      Freila: 0,
      Garula: 0,
      Kouga: 0,
      Psio: 0,
      Zionga: 0
    },
    rare: true,
    area: 'Akzeriyyuth',
    floor: 'L1-3, 5-7, 9-11',
    item: { name: 'Stone of Scone', type: 'Item' },
    affinities: {
      physical: 'nu',
      gun: 'nu',
      fire: 'nu',
      ice: 'nu',
      electric: 'nu',
      wind: 'nu',
      psychic: 'nu',
      nuclear: 'nu',
      bless: 'nu',
      curse: 'wk'
    }
  },
  Succubus: {
    personaType: 'Curse',
    arcana: 'Moon',
    level: 7,
    stats: { st: 4, ma: 7, en: 5, ag: 8, lu: 4 },
    skills: {
      Agi: 8,
      'Brainwash Boost': 11,
      Dekaja: 10,
      'Marin Karin': 0,
      Mudo: 12,
      Rebellion: 0
    },
    personality: 'Irritable',
    area: 'Aiyatsbus',
    floor: 'L5 & 6',
    item: { name: 'Brain Shot', type: 'Item' },
    affinities: {
      physical: '-',
      gun: 'wk',
      fire: 'rs',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'wk',
      curse: 'nu'
    }
  },
  Sudama: {
    personaType: 'Wind',
    arcana: 'Hermit',
    level: 17,
    stats: { st: 9, ma: 14, en: 12, ag: 13, lu: 10 },
    skills: {
      'Apt Pupil': 22,
      'Ambient Aid': 20,
      'Sharp Student': 0,
      Garula: 23,
      'Lucky Punch': 0,
      Magaru: 0,
      'Wind Wall': 21
    },
    area: 'Chemdah',
    floor: 'L6 & 7',
    item: { name: 'Magaru', type: 'Skill Card' },
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
    }
  },
  'Sui-Ki': {
    personaType: 'Ice',
    arcana: 'Moon',
    level: 24,
    stats: { st: 16, ma: 15, en: 15, ag: 18, lu: 15 },
    skills: {
      Bufula: 0,
      'Dodge Fire': 29,
      Headbutt: 0,
      Mabufu: 0,
      Mabufula: 28,
      'Null Nuke': 26,
      'Wage War': 27
    },
    personality: 'Unknown',
    area: 'Kaitul',
    floor: 'L7-9',
    item: { name: 'Mabufu', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'ab',
      electric: 'rs',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: '-'
    }
  },
  Surt: {
    personaType: 'Fire',
    arcana: 'Magician',
    level: 59,
    stats: { st: 37, ma: 40, en: 39, ag: 35, lu: 33 },
    skills: {
      Agidyne: 0,
      'Fire Break': 0,
      'High Counter': 61,
      Inferno: 64,
      Maragidyne: 60,
      'Megaton Raid': 0
    },
    item: { name: 'Fire Amp', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: 'wk',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: '-',
      curse: '-'
    }
  },
  Suzaku: {
    personaType: 'Nuclear',
    arcana: 'Sun',
    level: 19,
    stats: { st: 11, ma: 14, en: 10, ag: 18, lu: 11 },
    skills: {
      Frei: 0,
      Mafrei: 22,
      'Marin Karin': 0,
      Matarunda: 24,
      'Speed Master': 23,
      Tarunda: 0,
      'Ominous Words': 21
    },
    item: { name: 'Mafrei', type: 'Skill Card' },
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
    }
  },
  'Take-Minakata': {
    personaType: 'Electric',
    arcana: 'Hanged Man',
    level: 29,
    stats: { st: 20, ma: 22, en: 21, ag: 18, lu: 13 },
    skills: {
      'Assault Dive': 0,
      'Defense Master': 32,
      'Elec Boost': 34,
      'Elec Break': 0,
      Mazionga: 30,
      Zionga: 0
    },
    personality: 'Gloomy',
    area: 'Kaitul',
    floor: 'L7-9',
    item: { name: 'Thunder Band', type: 'Item' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'rp',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: '-',
      curse: 'rs'
    }
  },
  Thanatos: {
    personaType: 'Almighty',
    arcana: 'Death',
    level: 65,
    stats: { st: 43, ma: 49, en: 41, ag: 38, lu: 31 },
    skills: {
      'Curse Amp': 66,
      'Door of Hades': 0,
      'Enduring Soul': 70,
      'Fortified Moxy': 69,
      Maeigaon: 0,
      Mamudoon: 0,
      'One-shot Kill': 68
    },
    dlc: true,
    item: { name: 'Darkness Ring', type: 'Item' },
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
    }
  },
  'Thanatos Picaro': {
    personaType: 'Almighty',
    arcana: 'Death',
    level: 69,
    stats: { st: 45, ma: 51, en: 43, ag: 40, lu: 35 },
    skills: {
      'Adverse Resolve': 73,
      'Door of Hades': 0,
      'Enduring Soul': 74,
      Maeigaon: 0,
      Mamudoon: 0,
      'Mudo Boost': 70,
      'One-shot Kill': 72
    },
    dlc: true,
    item: { name: 'Maeigaon', type: 'Skill Card' },
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
    }
  },
  'Queen\'s Necklace': {
    arcana: 'Empress',
    level: 15,
    stats: { st: 15, ma: 15, en: 15, ag: 15, lu: 15 },
    skills: {
      Media: 0,
      Rakukaja: 0,
      Rakunda: 0,
      Recarm: 0,
      Sukukaja: 0,
      Sukunda: 0,
      Tarukaja: 0,
      Tarunda: 0
    },
    rare: true,
    area: 'Kaitul',
    floor: 'L1-5, 7-9',
    item: { name: 'Queen\'s Necklace', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: 'wk',
      fire: 'rs',
      ice: 'rs',
      electric: 'rs',
      wind: 'rs',
      psychic: 'rs',
      nuclear: 'rs',
      bless: 'rs',
      curse: 'rs'
    }
  },
  Thor: {
    personaType: 'Electric',
    arcana: 'Chariot',
    level: 64,
    stats: { st: 44, ma: 39, en: 43, ag: 38, lu: 35 },
    skills: {
      'Attack Master': 70,
      'Elec Amp': 66,
      'Heat Up': 68,
      'High Counter': 0,
      Maziodyne: 67,
      'Megaton Raid': 0,
      Ziodyne: 0
    },
    item: { name: 'Mjolnir', type: 'Item' },
    affinities: {
      physical: 'rs',
      gun: '-',
      fire: '-',
      ice: '-',
      electric: 'ab',
      wind: '-',
      psychic: 'wk',
      nuclear: '-',
      bless: 'rs',
      curse: 'rs'
    }
  },
  Thoth: {
    personaType: 'Nuclear',
    arcana: 'Emperor',
    level: 36,
    stats: { st: 21, ma: 28, en: 21, ag: 24, lu: 21 },
    skills: {
      Freila: 0,
      'Growth 2': 42,
      Mafreila: 40,
      Masukunda: 0,
      Megido: 37,
      Taunt: 0,
      'Psy Wall': 39
    },
    personality: 'Gloomy',
    area: 'Akzeriyyuth',
    floor: 'L6, 7, 9-11',
    item: { name: 'Growth 2', type: 'Skill Card' },
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
      curse: '-'
    }
  },
  Throne: {
    personaType: 'Bless',
    arcana: 'Justice',
    level: 71,
    stats: { st: 42, ma: 49, en: 47, ag: 46, lu: 36 },
    skills: {
      'Auto-Maraku': 76,
      'Evade Curse': 75,
      'Hama Boost': 0,
      'Invigorate 3': 0,
      'Bless Amp': 74,
      Mahamaon: 0,
      Makougaon: 73
    },
    special: true,
    note: 'Needs Strength cooperation rank 5 to be fused',
    item: { name: 'Invigorate 3', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: 'ab',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'rs',
      bless: 'nu',
      curse: 'wk'
    }
  },
  Titania: {
    personaType: 'Nuclear',
    arcana: 'Empress',
    level: 56,
    stats: { st: 32, ma: 40, en: 35, ag: 38, lu: 30 },
    skills: {
      Freidyne: 0,
      Lullaby: 0,
      Mafreidyne: 58,
      'Makara Break': 0,
      Mediarahan: 61,
      'Nuke Amp': 60
    },
    area: 'Sheriruth',
    floor: 'L8, 9, 11-13 (after Palace 7)',
    item: { name: 'Mediarahan', type: 'Skill Card' },
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
    }
  },
  Trumpeter: {
    personaType: 'Almighty',
    arcana: 'Judgement',
    level: 59,
    stats: { st: 33, ma: 42, en: 40, ag: 38, lu: 31 },
    skills: {
      'Abysmal Surge': 0,
      'Brain Buster': 0,
      'Life Aid': 64,
      Debilitate: 65,
      Mafreidyne: 0,
      'Fortify Spirit': 61,
      Cripple: 62
    },
    special: true,
    note: 'Needs Strength cooperation rank 5 to be fused',
    item: { name: 'Debilitate', type: 'Skill Card' },
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
    }
  },
  Tsukiyomi: {
    personaType: 'Almighty',
    arcana: 'Moon',
    level: 50,
    stats: { st: 38, ma: 32, en: 33, ag: 37, lu: 17 },
    skills: {
      'Absorb Curse': 0,
      'Arms Master': 56,
      'Life Drain': 0,
      'Curse Amp': 53,
      'Abyssal Wings': 0,
      'Myriad Slashes': 0,
      'Vorpal Blade': 55
    },
    dlc: true,
    item: { name: 'Black Moon', type: 'Item' },
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
    }
  },
  'Tsukiyomi Picaro': {
    personaType: 'Almighty',
    arcana: 'Moon',
    level: 55,
    stats: { st: 41, ma: 35, en: 36, ag: 40, lu: 20 },
    skills: {
      'Absorb Curse': 0,
      'Curse Amp': 58,
      'Abyssal Wings': 0,
      'Myriad Slashes': 0,
      'Spell Master': 61,
      'Spirit Drain': 0,
      'Vorpal Blade': 60
    },
    dlc: true,
    item: { name: 'Spell Master', type: 'Skill Card' },
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
    }
  },
  Unicorn: {
    personaType: 'Bless',
    arcana: 'Hierophant',
    level: 39,
    stats: { st: 20, ma: 27, en: 25, ag: 28, lu: 24 },
    skills: {
      'Assault Dive': 0,
      Dekunda: 0,
      Hamaon: 44,
      Kouga: 43,
      Mahama: 0,
      Samarecarm: 41,
      'Swift Strike': 42
    },
    personality: 'Unknown',
    area: 'Sheriruth',
    floor: 'L1-4 (before Palace 7) / L1 & 2 (after Palace 7)',
    item: { name: 'Samarecarm', type: 'Skill Card' },
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
    }
  },
  Uriel: {
    personaType: 'Almighty',
    arcana: 'Justice',
    level: 81,
    stats: { st: 50, ma: 54, en: 49, ag: 55, lu: 42 },
    skills: {
      'Angelic Grace': 85,
      Bloodbath: 0,
      Deathbound: 0,
      Megidolaon: 84,
      'Myriad Slashes': 0,
      'Repel Nuke': 83,
      'Spell Master': 86
    },
    item: { name: 'Heaven\'s Gate', type: 'Item' },
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
    }
  },
  Valkyrie: {
    personaType: 'Physical',
    arcana: 'Strength',
    level: 44,
    stats: { st: 33, ma: 24, en: 28, ag: 29, lu: 25 },
    skills: {
      'Attack Master': 45,
      Counterstrike: 0,
      Deathbound: 46,
      'Dodge Physical': 49,
      Matarukaja: 47,
      'Rising Slash': 0
    },
    area: 'Sheriruth',
    floor: 'L3-5, 7-9 (before Palace 7) / L2-4 (after Palace 7)',
    item: { name: 'Giant Slice', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: 'rs',
      fire: '-',
      ice: '-',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: '-',
      bless: 'nu',
      curse: '-'
    }
  },
  Vasuki: {
    personaType: 'Ailment',
    arcana: 'Hanged Man',
    level: 68,
    stats: { st: 41, ma: 46, en: 45, ag: 42, lu: 37 },
    skills: {
      'Brain Jack': 0,
      'Brainwash Boost': 72,
      'Evade Wind': 70,
      Mahamaon: 0,
      Makarakarn: 73,
      'Trigger Happy': 71,
      'Triple Down': 0
    },
    special: true,
    note: 'Needs Strength cooperation rank 1 to be fused',
    item: { name: 'Kuzuryu Gouhou', type: 'Item' },
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
    }
  },
  Vishnu: {
    personaType: 'Almighty',
    arcana: 'Fool',
    level: 83,
    stats: { st: 56, ma: 51, en: 49, ag: 57, lu: 43 },
    skills: {
      'Ali Dance': 0,
      Magarudyne: 0,
      Megidolaon: 0,
      Charge: 86,
      'Repel Fire': 87,
      'Riot Gun': 90,
      'Vacuum Wave': 85,
      'Wind Amp': 88
    },
    max: true,
    item: { name: 'Riot Gun', type: 'Skill Card' },
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
    }
  },
  'White Rider': {
    personaType: 'Curse',
    arcana: 'Chariot',
    level: 39,
    stats: { st: 24, ma: 24, en: 25, ag: 26, lu: 25 },
    skills: {
      'Ailment Boost': 45,
      'Evil Touch': 0,
      'Foul Breath': 44,
      Maeiga: 42,
      Masukukaja: 43,
      'Oni Kagura': 0,
      Snipe: 41,
      'Triple Down': 0
    },
    item: { name: 'Triple Down', type: 'Skill Card' },
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
    }
  },
  Yaksini: {
    personaType: 'Ice',
    arcana: 'Empress',
    level: 20,
    stats: { st: 14, ma: 11, en: 13, ag: 16, lu: 13 },
    skills: {
      'Attack Master': 23,
      Counter: 0,
      'Hysterical Slap': 0,
      'Oni Kagura': 22,
      'Vicious Strike': 24,
      'Wage War': 0
    },
    personality: 'Irritable',
    area: 'Kaitul',
    floor: 'L3-5, 7',
    item: { name: 'Vicious Strike', type: 'Skill Card' },
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
    }
  },
  'Yamata-no-Orochi': {
    personaType: 'Ice',
    arcana: 'Judgement',
    level: 64,
    stats: { st: 44, ma: 38, en: 48, ag: 36, lu: 33 },
    skills: {
      'Adverse Resolve': 67,
      Deathbound: 0,
      Mabufudyne: 0,
      'Oni Kagura': 0,
      'Repel Fire': 66,
      'Unshaken Will': 69
    },
    item: { name: 'Oni Kagura', type: 'Skill Card' },
    affinities: {
      physical: '-',
      gun: '-',
      fire: '-',
      ice: 'nu',
      electric: '-',
      wind: '-',
      psychic: '-',
      nuclear: 'wk',
      bless: '-',
      curse: 'rs'
    }
  },
  Yatagarasu: {
    personaType: 'Fire',
    arcana: 'Sun',
    level: 57,
    stats: { st: 35, ma: 41, en: 30, ag: 40, lu: 32 },
    skills: {
      Agidyne: 0,
      Dekunda: 0,
      'Makara Break': 0,
      Mediarahan: 59,
      'Null Wind': 62,
      'Pressing Stance': 60,
      'Wind Break': 61
    },
    item: { name: 'Black Wing Robe', type: 'Item' },
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
    }
  },
  Yoshitsune: {
    personaType: 'Physical',
    arcana: 'Tower',
    level: 79,
    stats: { st: 58, ma: 47, en: 45, ag: 53, lu: 41 },
    skills: {
      'Brave Blade': 0,
      'Elec Amp': 84,
      'Fast Heal': 82,
      'Hassou Tobi': 86,
      Charge: 0,
      'Pressing Stance': 81,
      Ziodyne: 0
    },
    special: true,
    note: 'Needs Strength cooperation rank 5 to be fused',
    item: { name: 'Usumidori', type: 'Item' },
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
    }
  },
  Yurlungur: {
    personaType: 'Electric',
    arcana: 'Sun',
    level: 42,
    stats: { st: 26, ma: 29, en: 28, ag: 27, lu: 23 },
    skills: {
      'Brain Jack': 0,
      'Elec Boost': 48,
      'Elec Break': 45,
      Mazionga: 0,
      Megido: 0,
      Revolution: 44,
      'Tetra Break': 47
    },
    item: { name: 'Mirrirmina', type: 'Item' },
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
    }
  },
  'Zaou-Gongen': {
    personaType: 'Fire',
    arcana: 'Strength',
    level: 80,
    stats: { st: 57, ma: 45, en: 50, ag: 56, lu: 39 },
    skills: {
      'Abysmal Surge': 0,
      'Enduring Soul': 83,
      'Evade Physical': 82,
      'God\'s Hand': 0,
      'Blazing Hell': 86,
      Maragidyne: 0,
      Cripple: 84
    },
    max: true,
    item: { name: 'God\'s Hand', type: 'Skill Card' },
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
    }
  },
  Zouchouten: {
    personaType: 'Electric',
    arcana: 'Strength',
    level: 31,
    stats: { st: 22, ma: 19, en: 24, ag: 18, lu: 17 },
    skills: {
      'Attack Master': 36,
      'Sharp Student': 33,
      'Giant Slice': 0,
      'Resist Fear': 34,
      'Swift Strike': 35,
      'Terror Claw': 32,
      Zionga: 0
    },
    item: { name: 'Sharp Student', type: 'Skill Card' },
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
    }
  }
};
