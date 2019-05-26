var PUBGITEMS = {
  equipment: {
    utilitybelt: {
      item: "utilitybelt",
      name: "Utility Belt",
      i18n: "UtilityBelt",
      type: "Storage",
      icon: "Item_equipment_Belt_D_01",
      bonus: "Capacity",
      bonusValue: "+50",
      desc: "The Utility Belt is a belt inventory item that increases inventory space.",
      i18desc: "UtilityBeltDesc",
      skins: ["battlebelt","utilitybeltbrown"]
    },
    backpack1: {
      item: "backpack1",
      name: "Backpack (Level 1)",
      i18n: "Backpack1",
      type: "Storage",
      icon: "Item_equipment_Back_E_01",
      icon2: "Item_equipment_Back_E_02",
      bonus: "Capacity",
      bonusValue: "+150",
      desc: "The Backpack (Lv.1) is a storage piece of equipment that allows for a light amount of item storage, increasing your inventory.",
      i18desc: "BackpackLv1Desc",
      skins: ["marksmanbackpacklevel1"]
    },
    backpack2: {
      item: "backpack2",
      name: "Backpack (Level 2)",
      i18n: "Backpack2",
      type: "Storage",
      icon: "Item_equipment_Back_F_01",
      icon2: "Item_equipment_Back_F_02",
      bonus: "Capacity",
      bonusValue: "+200",
      desc: "The Backpack (Lv.2) is a storage piece of equipment that allows for a medium amount of item storage, increasing your inventory.",
      i18desc: "BackpackLv2Desc",
      skins: ["leatherrucksacklevel2"]
    },
    backpack3: {
      item: "backpack3",
      name: "Backpack (Level 3)",
      i18n: "Backpack3",
      type: "Storage",
      icon: "Item_equipment_Back_C_01",
      icon2: "Item_equipment_Back_C_02",
      carepackage: true,
      bonus: "Capacity",
      bonusValue: "+250",
      desc: "The Backpack (Lv.3) is a storage piece of equipment that allows for a significant amount of item storage, increasing your inventory by +250 capacity.",
      i18desc: "BackpackLv3Desc",
      skins: ["survivalistbackpacklevel3"]
    },
    helmet1: {
      item: "helmet1",
      name: "Motorcycle Helmet (Level 1)",
      i18n: "Helmet1",
      type: "Helmet",
      icon: "Item_Head_E_01_Lv1_C",
      icon2: "Item_Head_E_02_Lv1_C",
      icontext: "green",
      icontexti18: "green",
      icontext2: "grey",
      icontext2i18: "grey",
      bonus: "Damage Reduction",
      bonusValue: "30%",
      bonus2: "Durability",
      bonus2Value: "80",
      desc: ""
    },
    helmet2: {
      item: "helmet2",
      name: "Military Helmet (Level 2)",
      i18n: "Helmet2",
      type: "Helmet",
      icon: "Item_Head_F_01_Lv2_C",
      icon2: "Item_Head_F_02_Lv2_C",
      icontext: "Desert Camo",
      icontexti18: "DesertCamo",
      icontext2: "Woodland Camo",
      icontext2i18: "WoodlandCamo",
      bonus: "Damage Reduction",
      bonusValue: "40%",
      bonus2: "Durability",
      bonus2Value: "150",
      desc: ""
    },
    helmet3: {
      item: "helmet3",
      name: "Spetsnaz Helmet (Level 3)",
      i18n: "Helmet3",
      type: "Helmet",
      icon: "Item_Head_G_01_Lv3_C",
      carepackage: true,
      bonus: "Damage Reduction",
      bonusValue: "55%",
      bonus2: "Durability",
      bonus2Value: "230",
      desc: ""
    },
    vest1: {
      item: "vest1",
      name: "Police Vest (Level 1)",
      i18n: "PoliceVest1",
      type: "Armor",
      icon: "Item_Armor_E_01_Lv1_C",
      bonus: "Damage Reduction",
      bonusValue: "30%",
      bonus2: "Durability",
      bonus2Value: "200",
      desc: ""
    },
    vest2: {
      item: "vest2",
      name: "Police Vest (Level 2)",
      i18n: "PoliceVest1",
      type: "Armor",
      icon: "Item_Armor_D_01_Lv2_C",
      bonus: "Damage Reduction",
      bonusValue: "40%",
      bonus2: "Durability",
      bonus2Value: "220",
      capacity: "+50",
      desc: ""
    },
    vest3: {
      item: "vest3",
      name: "Military Vest (Level 3)",
      i18n: "MilitaryVest",
      type: "Armor",
      icon: "Item_Armor_C_01_Lv3_C",
      bonus: "Damage Reduction",
      bonusValue: "55%",
      bonus2: "Durability",
      bonus2Value: "250",
      capacity: "+50",
      desc: ""
    },
    ghilliesuitwoodland: {
      item: "ghilliesuitwoodland",
      name: "Ghillie Suit",
      i18n: "GhillieSuit",
      icon: "Item_Ghillie_01_C",
      skintype: "outer",
      carepackage: true,
      cratename: "Air Drop",
      maps: ["erangel", "miramar", "sahnok"],
      desc: "Ghillie Suit (Woodland)",
      desc2: "The Ghillie suit is a one piece suit that can only be found in air drops. It has the appearance of grass, shrubs, etc. so it is excellent in concealing oneself from enemies"
    },
    ghilliesuitdesert: {
      item: "ghilliesuitdesert",
      name: "Ghillie Suit",
      i18n: "GhillieSuit",
      icon: "Item_Ghillie_02_C",
      skintype: "outer",
      carepackage: true,
      cratename: "Air Drop",
      maps: ["erangel", "miramar", "sahnok"],
      desc: "Ghillie Suit (Desert)",
      desc2: "The Ghillie suit is a one piece suit that can only be found in air drops. It has the appearance of grass, shrubs, etc. so it is excellent in concealing oneself from enemies"
    },
    ghilliesuitautumnleaf: {
      item: "ghilliesuitautumnleaf",
      name: "Ghillie Suit",
      i18n: "GhillieSuit",
      icon: "Item_Ghillie_03_C",
      skintype: "outer",
      carepackage: true,
      cratename: "Air Drop",
      maps: ["erangel", "miramar", "sahnok","vikendi"],
      desc: "Ghillie Suit (Autumn Leaf)",
      desc2: "The Ghillie suit is a one piece suit that can only be found in air drops. It has the appearance of grass, shrubs, etc. so it is excellent in concealing oneself from enemies"
    },
    ghilliesuitsnow: {
      item: "ghilliesuitsnow",
      name: "Ghillie Suit",
      i18n: "GhillieSuit",
      icon: "Item_Ghillie_04_C",
      skintype: "outer",
      carepackage: true,
      cratename: "Air Drop",
      maps: ["erangel", "miramar", "sahnok","vikendi"],
      desc: "Ghillie Suit (Snow)",
      desc2: "The Ghillie suit is a one piece suit that can only be found in air drops. It has the appearance of grass, shrubs, etc. so it is excellent in concealing oneself from enemies"
    },
  },
  consumables: {
    // RUN FASTER WHEN GAUGE ABOVE 60%
    medkit: {
      item: "medkit",
      name: "MedKit",
      i18n: "MedKit",
      icon: "Item_Heal_MedKit_C",
      type: "Heal",
      bonus: "Heal",
      bonusValue: "100",
      quantity: "single",
      usetime: "8",
      weight: "20",
      order: "999",
      desc: "Heals a player's health to 100 instantly. Performing certain actions while using this item will cancel it.",
      i18desc: "MedKitDesc"
    },
    firstaidkit: {
      item: "firstaidkit",
      name: "First Aid Kit",
      i18n: "FirstAidKit",
      icon: "Item_Heal_FirstAid_C",
      type: "Heal",
      bonus: "Heal",
      bonusValue: "75",
      usetime: "6",
      weight: "10",
      order: "998",
      desc: "Heals a player's health by 10 over time. Performing certain actions while using this item will cancel it. This item cannot be used when a player's health is over 75.",
      i18desc: "FirstAidKitDesc"
    },
    bandage: {
      item: "bandage",
      name: "Bandage",
      i18n: "Bandage",
      icon: "Item_Heal_Bandage_C",
      type: "Heal",
      bonus: "Heal",
      bonusValue: "10",
      usetime: "4",
      weight: "2",
      order: "997",
      desc: "After certain amount of time, Bandage heals character's health up to 10 overtime. performing certain actions whil casting this item can cancel the effect. Cannot heal character's health over 75.",
      i18desc: "BandageDesc"
    },
    adrenalinesyringe: {
      item: "adrenalinesyringe",
      name: "Adrenaline Syringe",
      i18n: "AdrenalineSyringe",
      icon: "Item_Boost_AdrenalineSyringe_C",
      type: "Boost",
      bonus: "Boost",
      carepackage: true,
      bonusValue: "100%",
      usetime: "6",
      duration: "5 min",
      totalHeal: "86%",
      bonusSpeed: "+ 6.2%",
      weight: "20",
      order: "989",
      bonusbar: "booster-bar",
      bartype: ["heal boost", "b100"],
      desc: "Increases a player's boost by 100 instantly. Performing certain actions while using this item will cancel it. Boosted players can run faster and fully heal over time."
    },
    painkiller: {
      item: "painkiller",
      name: "Painkiller",
      i18n: "Painkiller",
      icon: "Item_Boost_PainKiller_C",
      type: "Boost",
      bonus: "Boost",
      bonusValue: "60%",
      usetime: "6",
      duration: "3 min",
      totalHeal: "40%",
      weight: "10",
      order: "988",
      bonusbar: "booster-bar",
      bartype: ["heal", "b60"],
      desc: "Increases a player's boost by 60 instantly. Performing certain actions while using this item will cancel it. Boosted players can run faster and fully heal over time.",
      i18desc: "PainkillerDesc"
    },
    energydrink: {
      item: "energydrink",
      name: "Energy Drink",
      i18n: "EnergyDrink",
      icon: "Item_Boost_EnergyDrink_C",
      type: "Boost",
      bonus: "Boost",
      bonusValue: "40%",
      usetime: "4",
      duration: "2 min",
      totalHeal: "23%",
      weight: "4",
      order: "987",
      bonusbar: "booster-bar",
      bartype: ["heal", "b40"],
      desc: "Increases a player's boost by 40 instantly. Performing certain actions while using this item will cancel it. Boosted players can run faster and fully heal over time."
    },
    gascan: {
      item: "gascan",
      name: "Gas Can",
      i18n: "GasCan",
      icon: "Item_JerryCan_C",
      type: "Fuel",
      bonus: "Fuel",
      bonusValue: "40%",
      usetime: "3",
      quantity: "single",
      weight: "20",
      order: "979",
      desc: "Fills up a vehicle's gas tank instantly.",
      i18desc: "GasCanDesc"
    }
  },
  sights: {
    scope15x: {
      item: "scope15x",
      name: "15x Scope",
      icon: "Item_Attach_Weapon_Upper_PM2_01_C",
      weight: "20",
      order: "888",
      desc: "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      attweapons: ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    scope6x: {
      item: "scope6x",
      name: "6x Scope",
      icon: "Item_Attach_Weapon_Upper_Scope6x_C",
      weight: "20",
      order: "887",
      desc: "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      attweapons: ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    scope8x: {
      item: "scope8x",
      name: "8x Scope",
      icon: "Item_Attach_Weapon_Upper_CQBSS_C",
      weight: "20",
      order: "887",
      desc: "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      attweapons: ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    scope2x: {
      item: "scope2x",
      name: "2x Scope",
      icon: "Item_Attach_Weapon_Upper_Aimpoint_C",
      weight: "15",
      order: "886",
      desc: "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14 QBU, SKS, SLR, Crossbow",
      attweapons: ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14 QBU", "SKS", "SLR", "Crossbow"]
    },
    scope3x: {
      item: "scope3x",
      name: "3x Scope",
      icon: "Item_Attach_Weapon_Upper_Scope3x_C",
      weight: "15",
      order: "886",
      desc: "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      attweapons: ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    scope4x: {
      item: "scope4x",
      name: "4x Scope",
      icon: "Item_Attach_Weapon_Upper_ACOG_01_C",
      weight: "15",
      order: "886",
      desc: "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      attweapons: ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    reddot: {
      item: "reddot",
      name: "Red Dot sight",
      icon: "Item_Attach_Weapon_Upper_DotSight_01_C",
      weight: "10",
      order: "885",
      desc: "Attachable weapons: MP5K, P18C, P1911, P92, R45, Skorpion, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      attweapons: ["MP5K", "P18C", "P1911", "P92", "R45", "Skorpion", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    holographic: {
      item: "holographic",
      name: "Holographic Sight",
      icon: "Item_Attach_Weapon_Upper_Holosight_C",
      weight: "10",
      order: "885",
      desc: "Attachable weapons: MP5K, P18C, P1911, P92, R45, Skorpion, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      attweapons: ["MP5K", "P18C", "P1911", "P92", "R45", "Skorpion", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    cantedsight: {
      item: "cantedsight",
      name: "Canted sight",
      icon: "Item_Attach_Weapon_SideRail_DotSight_RMR_C",
      weight: "10",
      order: "885",
      desc: "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      attweapons: ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "Beryl", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    emptysight: {
      sight: "emptysight",
      name: "Empty",
      icon: "empty",
      desc: "Empty",
      attweapons: []
    },
  },
  attachments: {
    ammoloops: {
      item: "ammoloops",
      name: "Bullet Loops (SG, Win94, Kar98k)",
      icon: "Item_Attach_Weapon_Stock_SniperRifle_BulletLoops_C",
      weight: "8",
      order: "880",
      quantity: "single",
      bonuses: ["+ Reload Speed"],
      desc: "+ Reload speed",
      unique: "stock",
      attweapons: ["S1897", "S686", "Kar98k", "Win94"]
    },
    cheekpad: {
      item: "cheekpad",
      name: "Cheek Pad (DMR, SR)",
      icon: "Item_Attach_Weapon_Stock_SniperRifle_CheekPad_C",
      weight: "17",
      order: "880",
      quantity: "single",
      bonuses: ["++ Vertical recoil control", "++ Weapon stability after shot", "+ Weapon steadiness"],
      desc: "Attachable weapons: AWM, Kar98k, M24, Mk14, SKS, SLR, VSS",
      unique: "stock",
      attweapons: ["AWM", "Kar98k", "M24", "Mk14", "SKS", "SLR", "VSS"]
    },
    stockmicrouzi: {
      item: "stockmicrouzi",
      name: "Folding Stock (Skorpion, Micro UZI)",
      icon: "Item_Attach_Weapon_Stock_UZI_C",
      weight: "10",
      order: "820",
      quantity: "single",
      bonuses: ["+ Recoil recovery", "+ Weapon steadiness"],
      desc: "Attachable weapon: Skorpion, Micro UZI",
      unique: "stock",
      attweapons: ["Skorpion", "MicroUZI"]
    },
    tacticalstock: {
      item: "tacticalstock",
      name: "Tactical Stock (SMG, AR)",
      icon: "Item_Attach_Weapon_Stock_AR_Composite_C",
      weight: "12",
      order: "870",
      quantity: "single",
      bonuses: ["+ Recoil recovery", "+ Weapon stability after shot", "+ ADS speed", "+ Weapon steadiness"],
      desc: "Attachable weapons: MP5K, Vector, M16A4, M416, Mk47 Mutant",
      unique: "stock",
      attweapons: ["MP5K", "Vector", "M16A4", "M416", "Mk47Mutant"]
    },
    extquickdrawmagmedium: {
      item: "extquickdrawmagmedium",
      name: "Ext.Quickdraw Mag (Handgun, SMG)",
      icon: "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Medium_C",
      weight: "17",
      order: "860",
      quantity: "single",
      bonuses: ["+ Reload speed", "+ Magazine capacity"],
      desc: "Attachable weapons: P18C, P1911, P92, Micro UZI, MP5K, Tommy Gun, UMP45, Vector",
      unique: "mag",
      attweapons: ["P18C", "P1911", "P92", "MicroUZI", "MP5K", "TommyGun", "UMP45", "Vector"]
    },
    extmagmedium: {
      item: "extmagmedium",
      name: "Extended Mag (Handgun, SMG)",
      icon: "Item_Attach_Weapon_Magazine_Extended_Medium_C",
      weight: "13",
      order: "860",
      quantity: "single",
      bonuses: ["+ Magazine capacity"],
      desc: "Attachable weapons: P18C, P1911, P92, Skorpion, Micro UZI, MP5K, Tommy Gun, UMP45, Vector",
      unique: "mag",
      attweapons: ["P18C", "P1911", "P92", "Skorpion", "MicroUZI", "MP5K", "Tommy Gun", "UMP45", "Vector"]
    },
    quickdrawmedium: {
      item: "quickdrawmedium",
      name: "QuickDraw Mag (Handgun, SMG)",
      icon: "Item_Attach_Weapon_Magazine_QuickDraw_Medium_C",
      weight: "12",
      order: "860",
      quantity: "single",
      bonuses: ["+ Reload speed"],
      desc: "Attachable weapons: P18C, P1911, P92, Micro UZI, MP5K, Tommy Gun, UMP45, Vector",
      unique: "mag",
      attweapons: ["P18C", "P1911", "P92", "MicroUZI", "MP5K", "Tommy Gun", "UMP45", "Vector"]
    },
    extquickdrawmaglarge: {
      item: "extquickdrawmaglarge",
      name: "Ext.QuickDraw Mag (AR, DMR, S12K)",
      icon: "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Large_C",
      weight: "20",
      order: "870",
      quantity: "single",
      bonuses: ["+ Reload speed", "+ Magazine capacity"],
      desc: "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR, VSS",
      unique: "mag",
      attweapons: ["S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    extmaglarge: {
      item: "extmaglarge",
      name: "Extended Mag (AR, DMR, S12K)",
      icon: "Item_Attach_Weapon_Magazine_Extended_Large_C",
      weight: "15",
      order: "870",
      quantity: "single",
      bonuses: ["+ Magazine capacity"],
      desc: "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR, VSS",
      unique: "mag",
      attweapons: ["S12K", "AKM", "AUG", "Beryl", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    quickdrawlarge: {
      item: "quickdrawlarge",
      name: "QuickDraw Mag (AR, DMR, S12K)",
      icon: "Item_Attach_Weapon_Magazine_QuickDraw_Large_C",
      weight: "14",
      order: "870",
      quantity: "single",
      bonuses: ["+ Reload speed"],
      desc: "Attachable weapons: S12K, AKM, AUG, Beryl M762, Groza, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR, VSS",
      unique: "mag",
      attweapons: ["S12K", "AKM", "AUG", "Beryl", "Groza", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    extquickdrawmagsniper: {
      item: "extquickdrawmagsniper",
      name: "Ext.QuickDraw Mag (DMR, SR)",
      icon: "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C",
      weight: "23",
      order: "880",
      quantity: "single",
      bonuses: ["+ Reload speed", "+ Magazine capacity"],
      desc: "Attachable weapons: AWM, M24, Mini14, Mk14, QBU, SKS, SLR, VSS",
      unique: "mag",
      attweapons: ["AWM", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    extmagsniper: {
      item: "extmagsniper",
      name: "Extended Mag (DMR, SR)",
      icon: "Item_Attach_Weapon_Magazine_Extended_SniperRifle_C",
      weight: "17",
      order: "880",
      quantity: "single",
      bonuses: ["+ Magazine capacity"],
      desc: "Attachable weapons: AWM, M24, Mini14, Mk14, QBU, SKS, SLR, VSS",
      unique: "mag",
      attweapons: ["AWM", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    quickdrawsniper: {
      item: "quickdrawsniper",
      name: "QuickDraw Mag (DMR, SR)",
      icon: "Item_Attach_Weapon_Magazine_QuickDraw_SniperRifle_C",
      weight: "16",
      order: "880",
      quantity: "single",
      bonuses: ["+ Reload speed"],
      desc: "Attachable weapons: AWM, M24, Mini14, Mk14, QBU, SKS, SLR, VSS",
      unique: "mag",
      attweapons: ["AWM", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    quiver: {
      item: "quiver",
      name: "Quiver (Crossbow)",
      icon: "Item_Attach_Weapon_Lower_QuickDraw_Large_Crossbow_C",
      weight: "12",
      order: "0",
      quantity: "single",
      bonuses: ["+ Reload speed"],
      desc: "Attachable weapon: Crossbow",
      unique: "grip",
      attweapons: ["Crossbow"]
    },
    angledforegrip: {
      item: "angledforegrip",
      name: "Angled Foregrip",
      icon: "Item_Attach_Weapon_Lower_AngledForeGrip_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["++ Horizontal recoil control", "+ ADS speed", "- Weapon steadiness"],
      desc: "Attachable weapons: MP5K, UMP45, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      unique: "grip",
      attweapons: ["MP5K", "UMP45", "AUG", "Beryl", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    verticalforegrip: {
      item: "verticalforegrip",
      name: "Vertical Foregrip",
      icon: "Item_Attach_Weapon_Lower_Foregrip_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["++ Vertical recoil control", "Weapon stability after shot"],
      desc: "Attachable weapons: Skorpion, MP5K, Tommy Gun, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      unique: "grip",
      attweapons: ["Skorpion", "MP5K", "UMP45", "Vector", "AUG", "Beryl", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    halfgrip: {
      item: "halfgrip",
      name: "Halfgrip",
      icon: "Item_Attach_Weapon_Lower_HalfGrip_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["+ Recoil control", "+ Recoil recovery", "- Weapon steadiness"],
      desc: "Attachable weapons: Skorpion, MP5K, Tommy Gun, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      unique: "grip",
      attweapons: ["Skorpion", "MP5K", "UMP45", "Vector", "AUG", "Beryl", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    lightweightgrip: {
      item: "lightweightgrip",
      name: "Lightweight Grip",
      icon: "Item_Attach_Weapon_Lower_LightweightForeGrip_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["++ Weapon stability after shot", "+ Weapon steadiness"],
      desc: "Attachable weapons: Skorpion, MP5K, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      unique: "grip",
      attweapons: ["Skorpion", "MP5K", "UMP45", "Vector", "AUG", "Beryl", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    thumbgrip: {
      item: "thumbgrip",
      name: "Thumbgrip",
      icon: "Item_Attach_Weapon_Lower_ThumbGrip_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["++ ADS speed", "+ Vertical recoil control", "+ Weapon steadiness"],
      desc: "Attachable weapons: MP5K, UMP45, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      unique: "grip",
      attweapons: ["MP5K", "UMP45", "AUG", "Beryl", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    lasersight: {
      item: "lasersight",
      name: "Thumbgrip",
      icon: "Item_Attach_Weapon_Lower_LaserPointer_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["++ Hip fire accuracy"],
      desc: "Attachable weapons: P18C, P1911, P92, R45, Skorpion, MP5K, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      unique: "grip",
      attweapons: ["P18C", "P1911", "P92", "R45", "Skorpion", "MP5K", "UMP45", "Vector", "AUG", "Beryl", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    choke: {
      item: "choke",
      name: "Choke (SG)",
      icon: "Item_Attach_Weapon_Muzzle_Choke_C",
      weight: "5",
      order: "850",
      quantity: "single",
      bonuses: ["+ Shotgun pellets spread tightness"],
      desc: "Attachable weapon: Sawed-Off, S1897, S686",
      unique: "muzzle",
      attweapons: ["SawedOff", "S1897", "S686"]
    },
    duckbill: {
      item: "duckbill",
      name: "Duckbill (SG)",
      icon: "Item_Attach_Weapon_Muzzle_Duckbill_C",
      weight: "5",
      order: "850",
      quantity: "single",
      bonuses: ["++ Shotgun pellets vertical spread tightness", "- Shotgun pellets horizontal spread tightness"],
      desc: "Attachable weapon: S1897, S12K",
      unique: "muzzle",
      attweapons: ["S1897", "S12K"]
    },
    compensatorsniper: {
      item: "compensatorsniper",
      name: "Compensator (DMR, SR)",
      icon: "Item_Attach_Weapon_Muzzle_Compensator_SniperRifle_C",
      weight: "12",
      order: "880",
      quantity: "single",
      bonuses: ["++ Recoil control"],
      desc: "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      unique: "muzzle",
      attweapons: ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    compensatorlarge: {
      item: "compensatorlarge",
      name: "Compensator (AR, DMR, S12K)",
      icon: "Item_Attach_Weapon_Muzzle_Compensator_Large_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["++ Recoil control"],
      desc: "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR",
      unique: "muzzle",
      attweapons: ["S12K", "AKM", "AUG", "Beryl", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    compensatormedium: {
      item: "compensatormedium",
      name: "Compensator (SMG)",
      icon: "Item_Attach_Weapon_Muzzle_Compensator_Medium_C",
      weight: "8",
      order: "860",
      quantity: "single",
      bonuses: ["++ Recoil control"],
      desc: "Attachable weapons: Micro UZI, MP5K, PP-19 Bizon, UMP45, Vector",
      unique: "muzzle",
      attweapons: ["MicroUZI", "MP5K", "Bizon", "UMP45", "Vector"]
    },
    flashhidersniper: {
      item: "flashhidersniper",
      name: "Flash Hider (DMR, SR)",
      icon: "Item_Attach_Weapon_Muzzle_FlashHider_SniperRifle_C",
      weight: "12",
      order: "880",
      quantity: "single",
      bonuses: ["Eliminates muzzle flash", "+ Recoil control"],
      desc: "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      unique: "muzzle",
      attweapons: ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    flashhiderlarge: {
      item: "flashhiderlarge",
      name: "Flash Hider (AR, DMR, S12K)",
      icon: "Item_Attach_Weapon_Muzzle_FlashHider_Large_C",
      weight: "10",
      order: "870",
      quantity: "single",
      bonuses: ["Eliminates muzzle flash", "+ Recoil control"],
      desc: "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR",
      unique: "muzzle",
      attweapons: ["S12K", "AKM", "AUG", "Beryl", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    flashhidermedium: {
      item: "flashhidermedium",
      name: "Flash Hider (SMG)",
      icon: "Item_Attach_Weapon_Muzzle_FlashHider_Medium_C",
      weight: "8",
      order: "860",
      quantity: "single",
      bonuses: ["Eliminates muzzle flash", "+ Recoil control"],
      desc: "Attachable weapons: Micro UZI, MP5K, PP-19 Bizon, UMP45, Vector",
      unique: "muzzle",
      attweapons: ["MicroUZI", "MP5K", "Bizon", "UMP45", "Vector"]
    },
    suppressorsniper: {
      item: "suppressorsniper",
      name: "Suppressor (DMR, SR)",
      icon: "Item_Attach_Weapon_Muzzle_Suppressor_SniperRifle_C",
      weight: "23",
      order: "880",
      quantity: "single",
      bonuses: ["Reduces weapon sound"],
      desc: "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      unique: "muzzle",
      attweapons: ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    suppressorlarge: {
      item: "suppressorlarge",
      name: "Suppressor (AR, DMR, S12K)",
      icon: "Item_Attach_Weapon_Muzzle_Suppressor_Large_C",
      weight: "20",
      order: "870",
      quantity: "single",
      bonuses: ["Reduces weapon sound"],
      desc: "Attachable weapons: S12K, AKM, AUG, Beryl M762, Groza, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR",
      unique: "muzzle",
      attweapons: ["S12K", "AKM", "AUG", "Beryl", "Groza", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    suppressormedium: {
      item: "suppressormedium",
      name: "Suppressor (Handgun, SMG)",
      icon: "Item_Attach_Weapon_Muzzle_Suppressor_Medium_C",
      weight: "15",
      order: "860",
      quantity: "single",
      bonuses: ["Reduces weapon sound"],
      desc: "Attachable weapons: P18C, P1911, P92, R1895, Skorpion, Micro UZI, MP5K, PP-19 Bizon, Tommy Gun, UMP45, Vector",
      unique: "muzzle",
      attweapons: ["P18C", "P1911", "P92", "R1895", "Skorpion", "MicroUZI", "MP5K", "Bizon", "Tommy Gun", "UMP45", "Vector"]
    },
  },
  ammo: {
    ammoBolt: {
      item: "ammoBolt",
      name: "Bolt",
      i18n: "Bolt",
      icon: "Item_Ammo_Bolt_C",
      weight: "2",
      order: "119",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["Crossbow"]
    },
    ammo45ACP: {
      item: "ammo45ACP",
      name: ".45 ACP",
      i18n: "45acpammo",
      icon: "Item_Ammo_45ACP_C",
      weight: "0.4",
      order: "118",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["P1911", "R45", "TommyGun", "UMP45", "Win94"]
    },
    ammo12Gauge: {
      item: "ammo12Gauge",
      name: "12 Gauge",
      i18n: "12Gauge",
      icon: "Item_Ammo_12Guage_C",
      weight: "1.25",
      order: "117",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["S12K", "S1897", "S686", "SawedOff"]
    },
    ammo9mm: {
      item: "ammo9mm",
      name: "9mm",
      i18n: "9mm",
      icon: "Item_Ammo_9mm_C",
      weight: "0.375",
      order: "116",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["P18C", "P92", "Skorpion", "MicroUZI", "MP5K", "Bizon", "Vector", "VSS"]
    },
    ammo556mm: {
      item: "ammo556mm",
      name: "5.56mm",
      i18n: "556mm",
      icon: "Item_Ammo_556mm_C",
      weight: "0.5",
      order: "115",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["AUG", "G36C", "M16A4", "M416", "QBZ", "SCARL", "M249", "Mini14", "QBU"]
    },
    ammo762mm: {
      item: "ammo762mm",
      name: "7.62mm",
      i18n: "762mm",
      icon: "Item_Ammo_762mm_C",
      weight: "0.7",
      order: "114",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["R1895", "AKM", "Beryl", "Groza", "Mk47Mutant", "DP28", "M24", "Mk14", "Kar98k", "SKS", "SLR"]
    },
    ammo300Magnum: {
      item: "ammo300Magnum",
      name: ".300 Magnum",
      i18n: "300Magnum",
      icon: "Item_Ammo_300Magnum_C",
      weight: "1",
      order: "113",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["AWM"]
    },
    ammoFlare: {
      item: "ammoFlare",
      name: "Flare Gun Ammo",
      i18n: "FlareGunAmmo",
      icon: "Item_Ammo_Flare_C",
      weight: "0.5",
      order: "115",
      ammo: "Ammo for",
      i18ammo: "Ammofor",
      ammofor: ["FlareGun"]
    },
  },
  weapons: {
    AWM: {
      item: "AWM",
      name: "AWM",
      icon: "Item_Weapon_AWM_C",
      type: "Sniper Rifle",
      typei18n: "SniperRifle",
      carepackage: true,
      maps: ["Erangel", "Miramar", "Sanhok", "Vikendi"],
      ammo: ".300 Magnum",
      ammoIcon: "Item_Ammo_300Magnum_C",
      desc: "Monster sniper rifle.",
      i18desc: "AWM-desc",
      skins: ["jungledigital_awm","goldplate_awm"],
      skinsofevents: [],
      slots: ["muzzle", "none", "mag", "stock"],
      stats: {
        capacity: "5",
        capacityExt: "7",
        damage: "120",
        rateoffire: "1.85",
        bulletspeed: "945",
        range: "650",
        reload: "4.6",
        bodyimpact: "40.000",
        stability: "40",
        rate: "4",
        soundrange: "1000",
        supressed: "700",
      },
      firingMode: ["Single"],
      muzzle: ["compensatorsniper", "flashhidersniper", "suppressorsniper"],
      grip: [],
      mag: ["extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: ["cheekpad"],
      canted: ["cantedsight"],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    M24: {
      item: "M24",
      name: "M24",
      icon: "Item_Weapon_M24_C",
      type: "Sniper Rifle",
      typei18n: "SniperRifle",
      carepackage: true,
      maps: ["Erangel", "Miramar", "Sanhok", "Vikendi"],
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Serviceable sniper rifle.",
      i18desc: "M24-desc",
      slots: ["muzzle", "none", "mag", "stock"],
      skins: [],
      stats: {
        capacity: "5",
        capacityExt: "7",
        damage: "79",
        rateoffire: "1.8",
        bulletspeed: "790",
        range: "600",
        reload: "4.2",
        bodyimpact: "20.000",
        stability: "32",
        rate: "6",
        soundrange: "1000",
        supressed: "700"
      },
      firingMode: ["Single"],
      muzzle: ["compensatorsniper", "flashhidersniper", "suppressorsniper"],
      grip: [],
      mag: ["extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: ["cheekpad"],
      canted: ["cantedsight"],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Kar98k: {
      item: "Kar98k",
      name: "Kar 98K",
      icon: "Item_Weapon_Kar98k_C",
      type: "Sniper Rifle",
      typei18n: "SniperRifle",
      carepackage: true,
      maps: ["Erangel", "Miramar", "Sanhok", "Vikendi"],
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Vintage sniper rifle.",
      i18desc: "kar98k-desc",
      skins: ["desertdigital_kar98k", "ruggedbeige_kar98k", "ruggedorange_kar98k", "sharkbite_kar98k", "turquoisedelight_kar98k"],
      slots: ["muzzle", "none", "none", "stock"],
      stats: {
        capacity: "5",
        damage: "75",
        rateoffire: "1.9",
        bulletspeed: "760",
        range: "500",
        reload: "4",
        bodyimpact: "16.000",
        stability: "34",
        rate: "4",
        soundrange: "1000",
        supressed: "700"
      },
      firingMode: ["Single"],
      muzzle: ["compensatorsniper", "flashhidersniper", "suppressorsniper"],
      grip: [],
      mag: [],
      stock: ["ammoloops", "cheekpad"],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    SKS: {
      item: "SKS",
      name: "SKS",
      icon: "Item_Weapon_SKS_C",
      type: "DMR",
      typei18n: "DMR",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Semi-auto Russian DMRrifle.",
      i18desc: "SKS-desc",
      skins: ["goldplate", "jungledigital"],
      slots: ["muzzle", "grip", "mag", "stock"],
      skins: [],
      stats: {
        capacity: "10",
        capacityExt: "20",
        damage: "53",
        rateoffire: "0.1",
        bulletspeed: "800",
        range: "400",
        reload: "2.9",
        bodyimpact: "20.000",
        stability: "45",
        rate: "31",
        reload: "2.9",
        soundrange: "1000",
        supressed: "700"
      },
      firingMode: ["Single"],
      muzzle: ["compensatorsniper", "compensatorlarge", "flashhidersniper", "flashhiderlarge", "suppressorsniper", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge", "extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: ["cheekpad"],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    SLR: {
      item: "SLR",
      name: "SLR",
      icon: "Item_Weapon_FNFal_C",
      type: "DMR",
      typei18n: "DMR",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Classic semi-automatic long rifle.",
      i18desc: "SLR-desc",
      skins: [],
      slots: ["muzzle", "none", "mag", "stock"],
      skins: [],
      stats: {
        capacity: "10",
        capacityExt: "20",
        damage: "58",
        rateoffire: "0.1",
        bulletspeed: "840",
        range: "500",
        reload: "3.683",
        bodyimpact: "20.000",
        stability: "39",
        rate: "26",
        reload: "3.68",
        soundrange: "700",
        supressed: "320"
      },
      firingMode: ["Single"],
      muzzle: ["compensatorsniper", "compensatorlarge", "flashhidersniper", "flashhiderlarge", "suppressorsniper", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge", "extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: ["cheekpad"],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    VSS: {
      item: "VSS",
      name: "VSS",
      icon: "Item_Weapon_VSS_C",
      type: "DMR",
      typei18n: "DMR",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "The VSS is a supressed sniper rifle that uses a heavy subsonic 9mm cartridge.",
      i18desc: "VSS-desc",
      slots: ["none", "none", "mag", "stock"],
      skins: [],
      stats: {
        capacity: "20",
        capacityExt: "30",
        damage: "41",
        rateoffire: "0.086",
        bulletspeed: "330",
        range: "250",
        reload: "2.9",
        bodyimpact: "20.000",
        stability: "16",
        rate: "22",
        soundrange: "125",
        supressed: "125"
      },
      firingMode: ["Single","Auto"],
      muzzle: [],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge", "extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: ["cheekpad"],
      attsights: []
    },
    Mini14: {
      item: "Mini14",
      name: "Mini14",
      icon: "Item_Weapon_Mini14_C",
      type: "DMR",
      typei18n: "DMR",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Semi-auto carbine.",
      i18desc: "Mini14-desc",
      skins: ["desertdigital_mini14"],
      slots: ["muzzle", "none", "mag", "none"],
      skins: [],
      stats: {
        capacity: "20",
        capacityExt: "30",
        damage: "46",
        rateoffire: "0.1",
        bulletspeed: "990",
        range: "400",
        reload: "3.6",
        bodyimpact: "10.000",
        stability: "35",
        rate: "43",
        soundrange: "1000",
        supressed: "700"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorsniper", "compensatorlarge", "flashhidersniper", "flashhiderlarge", "suppressorsniper", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge", "extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: [],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    QBU: {
      item: "QBU",
      name: "QBU",
      icon: "Item_Weapon_QBU88_C",
      type: "DMR",
      typei18n: "DMR",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Semi-auto bullpup designated marksman rifle.",
      i18desc: "qbu-desc",
      skins: [""],
      slots: ["muzzle", "none", "mag", "none"],
      skins: [],
      stats: {
        capacity: "20",
        capacityExt: "30",
        damage: "48",
        rateoffire: "0.1",
        bulletspeed: "945",
        range: "400",
        reload: "3",
        bodyimpact: "10.000",
        stability: "48",
        rate: "30",
        reload: "3",
        soundrange: "1000",
        supressed: "700"
      },
      firingMode: ["Single"],
      muzzle: ["compensatorsniper", "compensatorlarge", "flashhidersniper", "flashhiderlarge", "suppressorsniper", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge", "extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: [],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Mk14: {
      item: "Mk14",
      name: "Mk14 EBR",
      icon: "Item_Weapon_Mk14_C",
      type: "DMR",
      typei18n: "DMR",
      carepackage: true,
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Selective fire Designated Marksman Rifle originally built for use with units of USSOC such as Navy Seals and Delta Force.",
      i18desc: "mk14-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      slots: ["muzzle", "none", "mag", "stock"],
      skins: [],
      stats: {
        capacity: "20",
        capacityExt: "30",
        damage: "61",
        rateoffire: "0.09",
        bulletspeed: "853",
        range: "500",
        reload: "3.683",
        bodyimpact: "20.000",
        stability: "57",
        rate: "26",
        reload: "3.68",
        soundrange: "1000",
        supressed: "700"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorsniper", "compensatorlarge", "flashhidersniper", "flashhiderlarge", "suppressorsniper", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge", "extquickdrawmagsniper", "extmagsniper", "quickdrawsniper"],
      stock: ["cheekpad"],
      attsights: ["scope15x", "scope6x", "scope8x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Win94: {
      item: "Win94",
      name: "Win94",
      icon: "Item_Weapon_Win1894_C",
      type: "Sniper Rifle",
      typei18n: "SniperRifle",
      ammo: ".45 ACP",
      ammoIcon: "Item_Ammo_45ACP_C",
      desc: "Lever-action rifle.",
      i18desc: "win94-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["desertdigital_win94", "goldplate_win94"],
      slots: ["none", "none", "none", "stock"],
      stats: {
        capacity: "8",
        capacityExt: "",
        damage: "66",
        rateoffire: "0.6",
        bulletspeed: "760",
        range: "500",
        reload: "4",
        bodyimpact: "16.000",
        stability: "42",
        rate: "9",
        reload: "4",
        soundrange: "1000",
      },
      firingMode: ["Single"],
      muzzle: [],
      mag: [],
      stock: ["ammoloops"],
      attsights: []
    },
    AKM: {
      item: "AKM",
      name: "AKM",
      icon: "Item_Weapon_AK47_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "For comrades-in-arms.",
      i18desc: "akm-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["goldplate_akm", "glory_akm", "ruggedorange_akm"],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "49",
        rateoffire: "0.1",
        bulletspeed: "715",
        range: "380",
        reload: "2.9",
        bodyimpact: "10.000",
        stability: "34",
        rate: "61",
        reload: "3.22",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Beryl: {
      item: "Beryl",
      name: "Beryl",
      icon: "Item_Weapon_BerylM762_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Modern Polish assault rifle.",
      i18desc: "Beryl-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: [],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "47",
        rateoffire: "0.086",
        bulletspeed: "715",
        range: "380",
        reload: "2.9",
        bodyimpact: "10.000",
        stability: "34",
        rate: "61",
        reload: "3.22",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Mk47Mutant: {
      item: "Mk47Mutant",
      name: "Mk47 Mutant",
      icon: "Item_Weapon_Mk47Mutant_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Modern assault rifle capable of single and two-round burst fire modes.",
      i18desc: "Mk47Mutant-desc",
      maps: ["Erangel","Miramar", "Sanhok"],
      skins: [],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "49",
        rateoffire: "0.1",
        bulletspeed: "380",
        range: "380",
        reload: "3.35",
        bodyimpact: "10.000",
        stability: "34",
        rate: "61",
        reload: "3.22",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    SCARL: {
      item: "SCARL",
      name: "SCAR-L",
      icon: "Item_Weapon_SCAR-L_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Modern assault rifle.",
      i18desc: "scarl-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["ruggedorange_scarl", "silverplate_scarl", "trifecta_scarl"],
      slots: ["muzzle", "grip", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "43",
        rateoffire: "0.096",
        bulletspeed: "870",
        range: "350",
        reload: "2.2",
        bodyimpact: "9.000",
        stability: "31",
        rate: "71",
        reload: "2.86",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    M16A4: {
      item: "M16A4",
      name: "M16A4",
      icon: "Item_Weapon_M16A4_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Burstfire assault rifle.",
      i18desc: "m16a4-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["ruggedbeige_m16a4", "sharkbite_m16a4", "turquoisedelight_m16a4"],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "43",
        rateoffire: "0.1",
        bulletspeed: "900",
        range: "400",
        reload: "2.2",
        bodyimpact: "8.000",
        stability: "28",
        rate: "81",
        reload: "2.86",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Burst"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: ["tacticalstock"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    M416: {
      item: "M416",
      name: "M416",
      icon: "Item_Weapon_HK416_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "German do things properly.",
      i18desc: "m416-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["desertdigital_m416", "ruggedorange_m416"],
      slots: ["muzzle", "grip", "mag", "stock"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "43",
        rateoffire: "0.086",
        bulletspeed: "880",
        range: "360",
        reload: "2.1",
        bodyimpact: "3.500",
        stability: "36",
        rate: "68",
        reload: "2.86",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: ["tacticalstock"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    G36C: {
      item: "G36C",
      name: "G36C",
      icon: "Item_Weapon_G36C_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Compact subcarbine variant of the German G36.",
      i18desc: "m416-desc",
      maps: ["Vikendi"],
      skins: [],
      slots: ["muzzle", "grip", "mag", "stock"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "43",
        rateoffire: "0.086",
        bulletspeed: "870",
        range: "350",
        reload: "3.8",
        bodyimpact: "3.500",
        stability: "36",
        rate: "68",
        reload: "2.86",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    AUG: {
      item: "AUG",
      name: "AUG",
      icon: "Item_Weapon_AUG_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Modern assault rifle.",
      i18desc: "aug-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: [],
      slots: ["muzzle", "grip", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "43",
        rateoffire: "0.086",
        bulletspeed: "940",
        range: "350",
        reload: "3.667",
        bodyimpact: "9.000",
        stability: "31",
        rate: "58",
        reload: "3.67",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    QBZ: {
      item: "QBZ",
      name: "QBZ 95",
      icon: "Item_Weapon_QBZ95_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Modern bullpup assault rifle.",
      i18desc: "qbz-desc",
      maps: ["Sanhok"],
      skins: [],
      slots: ["muzzle", "grip", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "43",
        rateoffire: "0.092",
        bulletspeed: "870",
        range: "350",
        reload: "3.66",
        bodyimpact: "9.000",
        stability: "36",
        rate: "68",
        reload: "2.86",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Groza: {
      item: "Groza",
      name: "Groza",
      icon: "Item_Weapon_Groza_C",
      type: "Assault Rifle",
      typei18n: "AssaultRifle",
      carepackage: true,
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "A selective fire Russian bullpup assault rifle chambered for a 7.62mm round.",
      i18desc: "groza-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["goldplate_groza"],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "49",
        rateoffire: "0.08",
        bulletspeed: "715",
        range: "380",
        reload: "3",
        bodyimpact: "10.000",
        stability: "22",
        rate: "67",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    M249: {
      item: "M249",
      name: "M249",
      icon: "Item_Weapon_M249_C",
      type: "Light Machinegun",
      typei18n: "LightMachinegun",
      carepackage: true,
      ammo: "5.56mm",
      ammoIcon: "Item_Ammo_556mm_C",
      desc: "Lighter than it looks.",
      i18desc: "m249-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      slots: ["none", "none", "none", "none"],
      skins: [],
      stats: {
        capacity: "100",
        capacityExt: "",
        damage: "45",
        rateoffire: "0.075",
        bulletspeed: "915",
        range: "450",
        reload: "8.2",
        bodyimpact: "10.000",
        stability: "44",
        rate: "77",
        soundrange: "700",
      },
      firingMode: ["Auto"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    DP28: {
      item: "DP28",
      name: "DP-28",
      icon: "Item_Weapon_DP28_C",
      type: "Light Machinegun",
      typei18n: "LightMachinegun",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "A Russian made, inter-war era light machine gun chambered for 7.62mm.",
      i18desc: "dp28-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: [],
      slots: ["none", "none", "none", "none"],
      stats: {
        capacity: "47",
        capacityExt: "",
        damage: "51",
        rateoffire: "0.109",
        bulletspeed: "715",
        range: "380",
        reload: "5.5",
        bodyimpact: "10.000",
        stability: "34",
        rate: "53",
        reload: "5.5",
        soundrange: "700",
        supressed: "350"
      },
      firingMode: ["Auto"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"]
    },
    TommyGun: {
      item: "TommyGun",
      name: "Tommy Gun",
      icon: "Item_Weapon_Thompson_C",
      type: "Sub Machinegun",
      typei18n: "SubMachinegun",
      ammo: ".45 ACP",
      ammoIcon: "Item_Ammo_45ACP_C",
      desc: "Infinite ammo with trech coat on.",
      i18desc: "tommygun-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["silverplate_tommygun", "turquoisedelight_tommygun"],
      slots: ["muzzle", "grip", "mag", "none"],
      stats: {
        capacity: "30",
        capacityExt: "50",
        damage: "40",
        rateoffire: "0.086",
        bulletspeed: "280",
        range: "250",
        reload: "5.5",
        bodyimpact: "7.000",
        stability: "31",
        rate: "100",
        reload: "3.45",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Auto"],
      muzzle: ["suppressormedium"],
      grip: [],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      stock: [],
      attsights: []
    },
    UMP45: {
      item: "UMP45",
      name: "UMP45",
      icon: "Item_Weapon_UMP_C",
      type: "Sub Machinegun",
      typei18n: "SubMachinegun",
      ammo: ".45 ACP",
      ammoIcon: "Item_Ammo_45ACP_C",
      desc: "Modern submachine gun using 9mm ammonition.",
      i18desc: "ump9-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["glory_ump45", "ruggedorange_ump45", "silverplate_ump45"],
      slots: ["muzzle", "grip", "mag", "none"],
      stats: {
        capacity: "25",
        capacityExt: "35",
        damage: "39",
        rateoffire: "0.0923",
        bulletspeed: "300",
        range: "150",
        reload: "3.1",
        bodyimpact: "7.000",
        stability: "36",
        rate: "61",
        reload: "3.1",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single", "Burst", "Auto"],
      muzzle: ["compensatormedium", "flashhidermedium", "suppressormedium"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    MicroUZI: {
      item: "MicroUZI",
      name: "Micro UZI",
      icon: "Item_Weapon_UZI_C",
      type: "Sub Machinegun",
      typei18n: "SubMachinegun",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "Spray your ammo but beware to not shoot yourself in the foot.",
      i18desc: "microuzi-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["desertdigital_microuzi", "trifecta_microuzi"],
      slots: ["muzzle", "none", "mag", "stock"],
      stats: {
        capacity: "25",
        capacityExt: "35",
        damage: "26",
        rateoffire: "0.048",
        bulletspeed: "350",
        range: "150",
        reload: "3.1",
        bodyimpact: "5.000",
        stability: "31",
        rate: "70",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["compensatormedium", "flashhidermedium", "suppressormedium"],
      grip: [],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      stock: ["stockmicrouzi"],
      attsights: []
    },
    Vector: {
      item: "Vector",
      name: "Vector",
      icon: "Item_Weapon_Vector_C",
      type: "Sub Machinegun",
      typei18n: "SubMachinegun",
      ammo: ".45 ACP",
      ammoIcon: "Item_Ammo_45ACP_C",
      desc: "Modern submachine gun using delayed blowback system.",
      i18desc: "vector-desc",
      maps: ["Erangel","Miramar", "Sanhok"],
      skins: ["silverplate_vector"],
      slots: ["muzzle", "grip", "mag", "stock"],
      stats: {
        capacity: "19",
        capacityExt: "33",
        damage: "31",
        rateoffire: "0.054",
        bulletspeed: "380",
        range: "150",
        reload: "2.2",
        bodyimpact: "7.000",
        stability: "29",
        rate: "54",
        reload: "3.1",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single","Burst","Auto"],
      muzzle: ["compensatormedium", "flashhidermedium", "suppressormedium"],
      grip: ["halfgrip", "lightweightgrip", "lasersight"],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      stock: ["tacticalstock"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    Bizon: {
      item: "Bizon",
      name: "Bizon",
      icon: "Item_Weapon_BizonPP19_C",
      type: "Sub Machinegun",
      typei18n: "SubMachinegun",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "Russian submachine gun fitted with a large capacity helical magazine.",
      i18desc: "Bizon-desc",
      maps: ["Erangel","Miramar", "Sanhok"],
      skins: [],
      slots: ["muzzle", "none", "none", "none"],
      stats: {
        capacity: "50",
        capacityExt: "",
        damage: "35",
        rateoffire: "0.086",
        bulletspeed: "350",
        range: "200",
        reload: "3.8",
        bodyimpact: "7.000",
        stability: "29",
        rate: "54",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single","Burst","Auto"],
      muzzle: ["compensatormedium", "flashhidermedium", "suppressormedium"],
      grip: [],
      mag: [],
      stock: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    MP5K: {
      item: "MP5K",
      name: "MP5K",
      icon: "Item_Weapon_MP5K_C",
      type: "Sub Machinegun",
      typei18n: "SubMachinegun",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "Shor variant of the German submachine gun MP5, designed for close quarters battle use.",
      i18desc: "mp5k-desc",
      maps: ["Vikendi"],
      skins: [],
      slots: ["muzzle", "grip", "mag", "stock"],
      stats: {
        capacity: "30",
        capacityExt: "40",
        damage: "33",
        rateoffire: "0.067",
        bulletspeed: "400",
        range: "200",
        reload: "3.40",
        reloadExt: "2.20",
        bodyimpact: "7.000",
        stability: "29",
        rate: "54",
        reload: "3.1",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single","Burst","Auto"],
      muzzle: ["compensatormedium", "flashhidermedium", "suppressormedium"],
      grip: ["angledforegrip", "halfgrip", "lightweightgrip", "thumbgrip", "lasersight"],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      stock: ["tacticalstock"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    S686: {
      item: "S686",
      name: "S686",
      icon: "Item_Weapon_Berreta686_C",
      type: "Shotgun",
      typei18n: "Shotgun",
      ammo: "12 Gauge",
      ammoIcon: "Item_Ammo_12Guage_C",
      desc: "Double barrel shotgun.",
      i18desc: "s686-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["goldplate_s686", "ruggedbeige_s686"],
      slots: ["muzzle", "none", "none", "stock"],
      stats: {
        capacity: "2",
        capacityExt: "",
        damage: "24",
        pellets: "9",
        rateoffire: "0.2",
        bulletspeed: "370",
        range: "100",
        reload: "3",
        bodyimpact: "5.000",
        stability: "77",
        rate: "7",
        reload: "3",
        soundrange: "370",
      },
      firingMode: ["Single"],
      muzzle: ["choke"],
      grip: [],
      mag: [],
      stock: ["ammoloops"],
      attsights: []
    },
    S1897: {
      item: "S1897",
      name: "S1897",
      icon: "Item_Weapon_Winchester_C",
      type: "Shotgun",
      typei18n: "Shotgun",
      ammo: "12 Gauge",
      ammoIcon: "Item_Ammo_12Guage_C",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      desc: "Modest shotgun.",
      i18desc: "s1897-desc",
      skins: ["silverplate_s1897"],
      slots: ["muzzle", "none", "none", "stock"],
      stats: {
        capacity: "5",
        capacityExt: "",
        damage: "24",
        pellets: "9",
        rateoffire: "0.75",
        bulletspeed: "360",
        range: "60",
        reload: "4.8",
        bodyimpact: "5.000",
        stability: "77",
        rate: "8",
        reload: "5.8",
        soundrange: "360",
      },
      firingMode: ["Single"],
      muzzle: ["choke", "duckbill"],
      grip: [],
      mag: [],
      stock: ["ammoloops"],
      attsights: []
    },
    S12K: {
      item: "S12K",
      name: "S12K",
      icon: "Item_Weapon_Saiga12_C",
      type: "Shotgun",
      typei18n: "Shotgun",
      ammo: "12 Gauge",
      ammoIcon: "Item_Ammo_12Guage_C",
      desc: "Kinda foul in this world.",
      i18desc: "s12k-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["goldplate_s12k", "ruggedbeige_s12k", "silverplate_s12k"],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "5",
        capacityExt: "10",
        damage: "22",
        pellets: "9",
        rateoffire: "0.25",
        bulletspeed: "350",
        range: "65",
        reload: "3",
        bodyimpact: "5.000",
        stability: "86",
        rate: "15",
        reload: "3",
        soundrange: "350",
        supressed: "100"
      },
      firingMode: ["Single"],
      muzzle: ["duckbill", "compensatorlarge", "flashhiderlarge", "suppressorlarge"],
      grip: [],
      mag: ["extquickdrawmaglarge", "extmaglarge", "quickdrawlarge"],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"],
      cantedsight: "cantedsight"
    },
    R1895: {
      item: "R1895",
      name: "R1895",
      icon: "Item_Weapon_NagantM1895_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: "7.62mm",
      ammoIcon: "Item_Ammo_762mm_C",
      desc: "Damageful revolver using 7.62mm ammunition.",
      i18desc: "r1895-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["silverplate_r1895"],
      slots: ["muzzle", "none", "none", "none"],
      stats: {
        capacity: "7",
        capacityExt: "",
        damage: "55",
        rateoffire: "0.4",
        bulletspeed: "330",
        range: "200",
        reload: "3",
        stability: "29",
        rate: "11",
        bodyimpact: "8.000",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single"],
      muzzle: ["suppressormedium"],
      attsights: []
    },
    P1911: {
      item: "P1911",
      name: "P1911",
      icon: "Item_Weapon_M1911_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: ".45 ACP",
      ammoIcon: "Item_Ammo_45ACP_C",
      desc: "Your grandpa loved it.",
      i18desc: "p1911-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["turquoisedelight_p1911"],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "7",
        capacityExt: "15",
        damage: "41",
        rateoffire: "0.11",
        bulletspeed: "250",
        range: "100",
        reload: "2.1",
        bodyimpact: "6.000",
        stability: "25",
        rate: "53",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single"],
      muzzle: ["suppressormedium"],
      grip: ["lasersight"],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      attsights: ["reddot", "holographic"]
    },
    P92: {
      item: "P92",
      name: "P92",
      icon: "Item_Weapon_M9_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "Modest handgun.",
      i18desc: "p92-desc",
      maps: ["Erangel","Miramar", "Sanhok", "Vikendi"],
      skins: ["desertdigital_p92", "trifecta_p92"],
      slots: ["muzzle", "grip", "mag", "none"],
      stats: {
        capacity: "15",
        capacityExt: "20",
        damage: "35",
        rateoffire: "0.135",
        bulletspeed: "380",
        range: "100",
        reload: "2",
        bodyimpact: "7.000",
        stability: "25",
        rate: "53",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single"],
      muzzle: ["suppressormedium"],
      grip: ["lasersight"],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      attsights: ["reddot", "holographic"]
    },
    P18C: {
      item: "p18c",
      name: "P18C",
      icon: "Item_Weapon_G18_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "An Austrian pistol with a full-auto mode and chambered for a 9mm round.",
      i18desc: "p18c-desc",
      maps: ["Erangel","Miramar", "Sanhok"],
      skins: ["desertdigital_p18c", "jungledigital_p18c"],
      slots: ["muzzle", "none", "mag", "none"],
      stats: {
        capacity: "17",
        capacityExt: "25",
        damage: "23",
        rateoffire: "0.06",
        bulletspeed: "375",
        range: "75",
        reload: "2",
        bodyimpact: "7.000",
        stability: "24",
        rate: "68",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single","Auto"],
      muzzle: ["suppressormedium"],
      grip: ["lasersight"],
      mag: ["extquickdrawmagmedium", "extmagmedium", "quickdrawmedium"],
      attsights: ["reddot", "holographic"]
    },
    R45: {
      item: "R45",
      name: "R45",
      icon: "Item_Weapon_Rhino_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: ".45 ACP",
      ammoIcon: "Item_Ammo_45ACP_C",
      desc: "An italian-made modern 6-shot revolver chambered for .45 cal.",
      i18desc: "r45-desc",
      maps: ["Miramar", "Sanhok", "Vikendi"],
      skins: ["desertdigital_r45"],
      slots: ["none", "grip", "none", "none"],
      stats: {
        capacity: "6",
        capacityExt: "",
        damage: "55",
        rateoffire: "0.25",
        bulletspeed: "330",
        range: "200",
        reload: "3.2",
        bodyimpact: "8.000",
        stability: "25",
        rate: "53",
        soundrange: "400",
      },
      firingMode: ["Single"],
      attsights: ["reddot", "holographic"]
    },
    Skorpion: {
      item: "Skorpion",
      name: "vz. 61 Skorpion  ",
      icon: "Item_Weapon_vz61Skorpion_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: "9mm",
      ammoIcon: "Item_Ammo_9mm_C",
      desc: "Modest handgun.",
      i18desc: "p92-desc",
      maps: ["Erangel", "Miramar", "Sanhok", "Vikendi"],
      skins: [],
      slots: ["muzzle", "grip", "mag", "stock"],
      stats: {
        capacity: "15",
        capacityExt: "20",
        damage: "35",
        rateoffire: "0.135",
        bulletspeed: "380",
        range: "100",
        reload: "2",
        bodyimpact: "5.000",
        stability: "25",
        rate: "53",
        soundrange: "400",
        supressed: "100"
      },
      firingMode: ["Single","Burst","Auto"],
      muzzle: ["suppressormedium"],
      grip: ["halfgrip", "lightweightgrip", "lasersight"],
      mag: ["extmagmedium"],
      stock: ["stockmicrouzi"],
      attsights: ["reddot", "holographic"]
    },
    SawedOff: {
      item: "SawedOff",
      name: "Sawed-Off",
      icon: "Item_Weapon_Sawnoff_C",
      type: "Handgun",
      typei18n: "Handgun",
      ammo: "12 Gauge",
      ammoIcon: "Item_Ammo_12Guage_C",
      desc: "A break open shotgun with shortened barrel capable of firing two consecutive shots.",
      i18desc: "Sawedoff-desc",
      maps: ["Miramar", "Sanhok"],
      skins: ["goldplate_sawed_off","desertdigital_sawed_off"],
      slots: ["muzzle", "none", "none", "none"],
      stats: {
        capacity: "2",
        capacityExt: "",
        damage: "20",
        pellets: "8",
        rateoffire: "0.25",
        bulletspeed: "330",
        range: "200",
        reload: "4",
        bodyimpact: "8.000",
        stability: "25",
        rate: "53",
        soundrange: "400",
      },
      firingMode: ["Single"],
      muzzle: ["choke"],
      attsights: []
    },
    Crossbow: {
      item: "Crossbow",
      name: "Crossbow",
      icon: "Item_Weapon_Crossbow_C",
      type: "Crossbow",
      typei18n: "Crossbow",
      ammo: "Bolt",
      ammoIcon: "Item_Ammo_Bolt_C",
      desc: "Hard to use, good to assassinate.",
      i18desc: "crossbow-desc",
      maps: ["Erangel", "Miramar", "Sanhok", "Vikendi"],
      skins: ["ruggedbeige_Crossbow"],
      slots: ["none", "none", "mag", "none"],
      stats: {
        capacity: "5",
        capacityExt: "",
        damage: "105",
        rateoffire: "0.25",
        bulletspeed: "330",
        range: "100",
        reload: "3.55",
        bodyimpact: "8.000",
        stability: "0",
        rate: "2",
        soundrange: "100",
      },
      firingMode: ["Single"],
      grip: ["quiver"],
      mag: [],
      attsights: ["scope6x", "scope2x", "scope3x", "scope4x", "reddot", "holographic"]
    },
    FlareGun: {
      item: "FlareGun",
      name: "FlareGun",
      icon: "Item_Weapon_FlareGun_C",
      type: "Flaregun",
      typei18n: "Flaregun",
      ammo: "Flare",
      ammoIcon: "flare",
      desc: "Flares as a usable weapon or supply signal.",
      i18desc: "flaregun-desc",
      skins: [""],
      slots: ["none", "none", "none", "none"],
      capacity: "1",
      damage: "",
      bulletspeed: "",
      range: "",
      stability: "",
      rate: "",
      reload: "",
      soundrange: "",
      firingMode: ["Single"],
      attsights: []
    }
  },
  melee: {
    Crowbar: {
      item: "Crowbar",
      icon: "Item_Weapon_Cowbar_C",
      name: "Crowbar",
      i18n: "Crowbar",
      damage: "60",
      desc: "A faithful shooter for every situation.",
      i18desc: "CrowbarDesc"
    },
    Machete: {
      item: "Machete",
      icon: "Item_Weapon_Machete_C",
      name: "Machete",
      i18n: "Machete",
      damage: "60",
      desc: "Typical weapon for slaughter.",
      i18desc: "MacheteDesc"
    },
    Pan: {
      item: "Pan",
      icon: "Item_Weapon_Pan_C",
      name: "Pan",
      i18n: "Pan",
      skins: ["theolivebranch_Pan", "targetpractice_Pan"],
      damage: "80",
      desc: "Not for cooking",
      i18desc: "PanDesc"
    },
    Sickle: {
      item: "Sickle",
      icon: "Item_Weapon_Sickle_C",
      name: "Sickle",
      i18n: "Sickle",
      damage: "60",
      desc: "Good for shaving.",
      i18desc: "SickleDesc"
    }
  },
  trowables: {
    frag: {
      item: "frag",
      icon: "Item_Weapon_Grenade_C",
      weight: "18",
      order: "16",
      name: "Frag Grenade",
      i18n: "FragGrenade",
      desc: "Fire in the hole.",
      i18desc: "FragGrenadeDesc"
    },
    molotov: {
      item: "molotov",
      icon: "Item_Weapon_Molotov_C",
      weight: "16",
      order: "17",
      name: "Cocktail Molotov",
      i18n: "Molotov",
      desc: "Highly explosive. Do not drink.",
      i18desc: "MolotovDesc"
    },
    smoke: {
      item: "smoke",
      icon: "Item_Weapon_SmokeBomb_C",
      weight: "14",
      order: "18",
      name: "Smoke Bomb",
      i18n: "SmokeBomb",
      desc: "Smokin' useful.",
      i18desc: "SmokeBombDesc"
    },
    stun: {
      item: "stun",
      icon: "Item_Weapon_FlashBang_C",
      weight: "12",
      order: "15",
      name: "Stun Grenade",
      i18n: "StunGrenade",
      desc: "Disorient a player for 10 seconds",
      i18desc: "StunGrenadeDesc"
    },
  },
  crates: {
    // not in game anymore:
    pioneercrate: {
      item: "pioneercrate",
      name: "PIONEER CRATE",
      icon: "Item_Box_CBT_01_C",
      type: "marketcrate",
      ingame: false,
      marketable: true,
      crateItems: ["shirtblack", "paddedjacketgray", "bloodyshirt", "fingerlessglovesleather", "bloodytanktopwhite", "dirtytanktopgray", "camocombatpantsgray", "sunglasses", "rimlesssunglasses"]
    },
    gamescominvitationalcrate: {
      item: "gamescominvitationalcrate",
      name: "GAMESCOM INVITATIONAL CRATE",
      icon: "Item_Box_L_GC_C",
      type: "marketcrate",
      rkey: "earlybirdkey",
      ingame: false,
      marketable: true,
      crateItems: ["schoolskirt", "camohotpants", "pleatedminiskirtblack", "sneakerswhite", "tracksuittop", "schooljacket", "camocap", "tracksuittopyellow", "mandarinjacketblack", "tracksuitpantsyellow", "schoolshirtwithnecktie", "orangeshirt", "schoolshirt", "bloodysneakers", "velcrotrainers", "tracksuitpants", "schoolpants", "slacksblack"],
      crateSets: ["tracksuitset","ivoryschooluniformsetmale","ivoryschooluniformsetfemale","instructorset","tuxedosetfemale","tuxedosetmale","tracksuitsetyellow","blueschooluniformsetfemale","blueschooluniformsetmale","blackschooluniformsetfemale","blackschooluniformsetmale"]
    },
    // In game crates
    wanderercrate: {
      item: "wanderercrate",
      name: "WANDERER CRATE",
      icon: "Item_Box_EA_01_C",
      type: "crate",
      probability: "10",
      ingame: true,
      marketable: true,
      crateItems: ["pleatedminiskirtblue", "protectiveglasses", "hotpantsblue", "mandarinjacketblue", "schoolshirtopen", "ballisticmask", "slacksblue", "urbanpaddedjacket", "floralshirt", "punkglasses", "punkboots", "hitoptrainersblue", "gasmaskfull", "shirtwhite","bloodycombatpants", "cargopantskhaki", "cargopantsbeige", "cargopantsblue", "dirtytanktopwhite", "tanktopcharcoal", "longsleevedtshirtblack", "longsleevedtshirtlightblue", "longsleevedtshirtstriped", "tshirtred", "tshirtstriped", "workingboots"]
    },
    survivorcrate: {
      item: "survivorcrate",
      name: "SURVIVOR CRATE",
      icon: "Item_Box_EA_02_C",
      type: "crate",
      probability: "10",
      ingame: true,
      marketable: true,
      crateItems: ["miniskirtpurple", "coatblack", "coatred", "femaletuxedojacketpurple", "coatgray", "coatcamel", "slackspurple", "camopaddedjacket", "checkedshirtred", "checkedshirtwhite", "paddedjacketkhaki", "paddedjacketbeige", "matchedshirtgray", "fingerlessglovestan", "fingerlessglovescamo", "vintagebaseballcapredblack", "beanieblack", "bootsgray", "hitoptrainersbrown", "vintagebaseballcapredwhite", "vintagebaseballcapwhite", "combatpantswhite", "combatpantsblue", "combatpantscamo", "combatpantsblack"]
    },
    bikercrate: {
      item: "bikercrate",
      name: "BIKER CRATE",
      icon: "Item_Box_1712_C",
      type: "crate",
      probability: "10",
      ingame: true,
      marketable: true,
      crateItems: ["clothmaskcheckered", "sleevelessbikerjacketblack", "sleevelessbikerjacketbrown", "floralshirtblack", "aviatorgoggles", "bikerpantsgray", "paddedjacketpurple", "princesspowertanktop", "sneakersblack", "floralshirtwhite", "bikerpantsblack", "patrolcapgray", "patrolcapbrown", "sleevelessturtleneckgraystriped", "skinnyjeanspink", "gasmaskhalf", "beaniegray", "sleevelessturtleneckred", "dressshoesblack", "skinnyjeanskhaki", "raglantshirtbluewhite", "stripedtshirtpink", "polkadottshirt", "dirtylongsleevedtshirt", "longsleevedtshirtred"]
  
    },
    desperadocrate: {
      item: "desperadocrate",
      name: "DESPERADO CRATE",
      icon: "Item_Box_L_1712_C",
      type: "crate",
      rkey: "earlybirdkey",
      probability: "5",
      ingame: true,
      marketable: true,
      needKey: false,
      crateItems: ["clothmaskleopard", "leatherhoodiewhite", "leatherhoodieblack", "longsleevedleathershirt", "aviatorsunglasses", "checkeredjacket", "hornrimmedglassesblack", "hornrimmedglassesbrown", "tracksuitpantslightblue", "sleevelessturtleneckgray", "longleatherbootsbrown", "baggypantsblack", "baggypantsbrown", "punkknuckleglovesblack", "punkknuckleglovesred", "sleevelessturtleneckblack", "leatherbootsblack", "stripedshirtgray", "widepantsred", "leatherbootsbrown", "beaniebrown", "stripedtanktop"]
    },
    militiacrate: {
      item: "militiacrate",
      name: "MILITIA CRATE",
      icon: "Item_Box_1802_C",
      type: "crate",
      probability: "10",
      ingame: true,
      marketable: true,
      needKey: false,
      crateItems: ["militaryskirtblack", "fauxleatherjacket", "cowboyhatwhite", "militaryjacketblack", "militarycapblack", "cowboyhatbrown", "leatherbootcutpants", "vintagegasmask", "battlebelt", "militarybootsblack", "utilitybeltbrown", "camotanktopred", "longsleevedturtleneckblack", "militaryshirtgray", "militarytrousersblack", "vintagepoloshirt", "poloshirtpink", "tanktopgray", "raglantshirtredwhite"]
    },
    fevercrate: {
      item: "fevercrate",
      name: "FEVER CRATE",
      icon: "Item_Box_L_1802_C",
      type: "crate",
      rkey: "earlybirdkey",
      probability: "5",
      ingame: true,
      marketable: true,
      needKey: true,
      crateItems: ["zestcheckeredskirt", "zestdenimjacket", "croppedcorset", "zestsilkscarf", "zestretrojacket", "floralretrojacket", "denimbootcutpants", "zestsunglasses", "zestbootcutpants", "zestloaferswithsocks", "hitopcanvassneakerspink", "combatpantscoral", "combatgloveskhaki", "zestturtleneckwhite", "checkeredshirtcoral", "retropoloshirt", "meshpoloshirt", "schoolshoesbeige"],
      crateSets: ["zestsetfemale","militaryuniformsetfemale","militaryuniformsetmale","zestsetmale","brownhatrangersset","whitehatrangersset"]
    },
    triumphcrate: {
      item: "triumphcrate",
      name: "TRIUMPH CRATE",
      icon: "Item_Box_L_1803_C",
      type: "crate",
      rkey: "weaponskinkey",
      probability: "5",
      ingame: true,
      marketable: true,
      crateItems: ["glory_akm", "glory_ump45", "goldplate_s12k", "desertdigital_m416", "trifecta_scarl", "goldplate_sks", "desertdigital_kar98k", "trifecta_microuzi", "desertdigital_mini14", "goldplate_sawed_off", "ruggedorange_m416", "ruggedorange_kar98k", "ruggedorange_akm", "ruggedorange_scarl", "goldplate_win94", "ruggedorange_ump45", "trifecta_p92", "desertdigital_r45"],
      crateSets: ["goldrushset","vanhelsingset"]
    },
    equinoxcrate: {
      item: "equinoxcrate",
      name: "EQUINOX CRATE",
      icon: "Item_Box_L_1804_C",
      type: "crate",
      rkey: "weaponskinkey",
      probability: "5",
      ingame: true,
      marketable: true,
      crateItems: ["theolivebranch_Pan", "sharkbite_kar98k", "sharkbite_m16a4", "goldplate_akm", "goldplate_awm", "silverplate_s12k", "goldplate_groza", "silverplate_ump45", "silverplate_tommygun", "desertdigital_p92", "desertdigital_win94", "desertdigital_p18c", "desertdigital_sawed_off", "desertdigital_microuzi"]
    },
    aviatorcrate: {
      item: "aviatorcrate",
      name: "AVIATOR CRATE",
      icon: "Item_Box_L_1805_C",
      type: "crate",
      rkey: "aviatorkey",
      probability: "5",
      ingame: true,
      marketable: true,
      crateItems: ["leatherskyrocketjacket", "fringedhotpants", "violentvioletjacket", "desertshemagh", "pilotpantsblack", "vintageaviatorgoggles", "lazysundaysweatpants", "lightbringershirt", "featheredshirt", "denimshirtwithnecktie", "tacticalgloves", "paddycap", "suedeaviatorcap", "countrysidesneakers", "snakeskinsneakers"],
      crateSets: ["aviatorset","fireintheholeset"]
    },
    raidercrate: {
      item: "raidercrate",
      name: "RAIDER CRATE",
      icon: "Item_Box_1803_C",
      type: "crate",
      probability: "20",
      ingame: true,
      marketable: true,
      crateItems: ["goldplate_s686", "turquoisedelight_kar98k", "turquoisedelight_m16a4", "silverplate_scarl", "turquoisedelight_tommygun", "jungledigital_awm", "jungledigital_sks", "turquoisedelight_p1911", "silverplate_vector", "silverplate_s1897", "silverplate_dp_28", "jungledigital_p18c", "ruggedbeige_kar98k", "silverplate_r1895", "ruggedbeige_s12k", "ruggedbeige_m16a4", "ruggedbeige_s686", "ruggedbeige_Crossbow", "ruggedbeige_sks"]
    },
    fall2018crate: {
      item: "fall2018crate",
      name: "Fall 2018 Crate",
      icon: "Item_Box_1810_C",
      type: "crate",
      probability: "15",
      ingame: true,
      marketable: true,
      crateItems: ["bomberjacketmustard", "suitcoatgray", "jungleleggings", "wovensunhat", "borntosurviveshorts", "pochinkifellasjersey", "tweedvestgray", "stripedslipperspink", "kicksred", "suitpantsgray", "longsleevedturtleneckburgundy", "loafersbrown", "slippersblack"]
    },
    easterangelpolicecrate: {
      item: "easterangelpolicecrate",
      name: "EAST ERANGEL POLICE CRATE",
      icon: "Item_Box_L_1806_C",
      type: "crate",
      rkey: "easterangelpolicekey",
      probability: "??",
      ingame: true,
      marketable: true,
      crateItems: ["battlestatindustrialsecurity_AKM", "vikendieliteattendantuniform", "constablescoat", "constableshat", "babybearfacemask", "vikendieliteattendanthat", "constablespants", "easterangelpoliceshirt", "sweateranddressshirtneige", "constablesgloves", "babybearfaceshirt", "vikendieliteattendantshoes", "pilotpantsbeige", "fancyshoes"],
      crateSets: ["constableset","vikendieliteattendantset"]
    },
  },
  keys: {
    earlybirdkey: {
      item: "earlybirdkey",
      name: "EARLY BIRD KEY",
      icon: "Item_Key_GC_C",
      unlocks: ["gamescominvitationalcrate", "desperadocrate", "fevercrate"]
    },
    weaponskinkey: {
      item: "weaponskinkey",
      name: "WEAPON SKIN KEY",
      icon: "Item_Key_1803_C",
      unlocks: ["triumphcrate", "equinoxcrate"]
    },
    aviatorkey: {
      item: "aviatorkey",
      name: "AVIATOR KEY",
      icon: "Item_Key_1805_C",
      unlocks: ["aviatorcrate"]
    },
    easterangelpolicekey: {
      item: "easterangelpolicekey",
      name: "EAST ERANGEL POLICE KEY",
      icon: "Item_Key_1806_C",
      unlocks: ["easterangelpolicecrate"]
    }
  },
  parachuteskins: {
    bengaltiger: {
      item: "bengaltiger",
      name: "BENGAL TIGER",
      icon: "Item_Skin_Parachute_Skin_001_C"
    },
  },
  sets: {
    playerunknownset: {
      item: "playerunknownset",
      name: "Player Unkown Set",
      icon: "Item_Set_1807_08_C",
      skintype: "set",
      crateItems: ["shirtgray","hitoptrainersred","playerunknownstrenchcoat","jeanstan",]
    },
    targetpractice: {
      item: "targetpractice",
      name: "TARGET PRACTICE",
      icon: "Item_Set_Pan_Target_01_C",
      skintype: "weaponskin",
      crateItems: ["targetpractice_Pan"]
    },
    twitchprimeset: {
      item: "twitchprimeset",
      name: "TWITCH PRIME SET",
      icon: "Item_Set_TW_C",
      skintype: "set",
      crateItems: ["twitchprimeshirt","twitchprimeboots","twitchprimecombatpants","twitchprimebalaclava"]
    },
    tracksuitset: {
      item: "tracksuitset",
      name: "Tracksuit Set",
      icon: "Item_Set_BR01_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["tracksuittop", "tracksuitpants", "bloodysneakers"],
    },
    ivoryschooluniformsetfemale: {
      item: "ivoryschooluniformsetfemale",
      name: "Ivory School Uniform Set (Female)",
      icon: "Item_Set_BR02_F_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["schoolskirt", "schooljacket", "sneakerswhite","schoolshirtwithnecktie"],
    },
    ivoryschooluniformsetmale: {
      item: "ivoryschooluniformsetmale",
      name: "Black School Uniform Set (Male)",
      icon: "Item_Set_BR02_M_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["schooljacket", "sneakerswhite", "schoolshirtwithnecktie", "schoolpants"],
    },
    instructorset: {
      item: "instructorset",
      name: "Instructor Set",
      icon: "Item_Set_BR03_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["orangeshirt", "camocap", "camohotpants"],
    },
    tuxedosetfemale: {
      item: "tuxedosetfemale",
      name: "Tuxedo Set (Female)",
      icon: "Item_Set_BR04_F_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["femaletuxedojacketpurple","miniskirtpurple"],
    },
    tuxedosetmale: {
      item: "tuxedosetmale",
      name: "Tuxedo Set (Male)",
      icon: "Item_Set_BR04_M_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["femaletuxedojacketpurple","slackspurple"],
    },
    tracksuitsetyellow: {
      item: "tracksuitsetyellow",
      name: "Tracksuit Set (Yellow)",
      icon: "Item_Set_BR05_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["tracksuittopyellow", "tracksuitpantsyellow"],
    },
    blueschooluniformsetfemale: {
      item: "blueschooluniformsetfemale",
      name: "Blue School Uniform Set (Female)",
      icon: "Item_Set_BR06_F_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["schoolshirtopen","mandarinjacketblue","pleatedminiskirtblue","schoolshoesbeige"]
    },
    blueschooluniformsetmale: {
      item: "blueschooluniformsetmale",
      name: "Blue School Uniform Set (Male)",
      icon: "Item_Set_BR06_M_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["schoolshirtopen","mandarinjacketblue","slacksblue","schoolshoesbeige"]
    },
    blackschooluniformsetfemale: {
      item: "blackschooluniformsetfemale",
      name: "Black School Uniform Set (Female)",
      icon: "Item_Set_BR07_F_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["pleatedminiskirtblack","mandarinjacketblack","schoolshirt","velcrotrainers"]
    },
    blackschooluniformsetmale: {
      item: "blackschooluniformsetmale",
      name: "Black School Uniform Set (Male)",
      icon: "Item_Set_BR07_M_C",
      skintype: "set",
      crate: "gamescominvitationalcrate",
      cratename: "GAMESCOM INVITATIONAL CRATE",
      probability: "0.00599604246",
      crateItems: ["mandarinjacketblack","schoolshirt","slacksblack","velcrotrainers"]
    },
    zestsetfemale: {
      item: "zestsetfemale",
      name: "ZEST SET (FEMALE)",
      icon: "Item_Set_J_01_C",
      skintype: "set",
      crate: "fevercrate",
      cratename: "FEVER CRATE",
      probability: "0.00099994",
      crateItems: ["zestcheckeredskirt", "zestdenimjacket", "zestsunglasses", "zestloaferswithsocks", "zestturtleneckwhite"]
    },
    militaryuniformsetfemale: {
      item: "militaryuniformsetfemale",
      name: "MILITARY UNIFORM SET(FEMALE)",
      icon: "Item_Set_OU_01_F_C",
      skintype: "set",
      crate: "fevercrate",
      cratename: "FEVER CRATE",
      probability: "0.00099994",
      crateItems: ["militaryskirtblack", "militarycapblack", "militaryjacketblack", "militarybootsblack", "militaryshirtgray"]
    },
    militaryuniformsetmale: {
      item: "militaryuniformsetmale",
      name: "MILITARY UNIFORM SET(MALE)",
      icon: "Item_Set_OU_01_M_C",
      skintype: "set",
      crate: "fevercrate",
      cratename: "FEVER CRATE",
      probability: "0.00099994",
      crateItems: ["militarycapblack", "militaryjacketblack", "militarybootsblack", "militaryshirtgray", "militarytrousersblack"]
    },
    zestsetmale: {
      item: "zestsetmale",
      name: "ZEST SET (MALE)",
      icon: "Item_Set_P_01_C",
      skintype: "set",
      crate: "fevercrate",
      cratename: "FEVER CRATE",
      probability: "0.00099994",
      crateItems: ["zestsilkscarf", "zestretrojacket", "zestbootcutpants", "zestturtleneckwhite"]
    },
    brownhatrangersset: {
      item: "brownhatrangersset",
      name: "BROWN HAT RANGERS SET",
      icon: "Item_Set_Cow_01_C",
      skintype: "set",
      crate: "fevercrate",
      cratename: "FEVER CRATE",
      probability: "0.00099994",
      crateItems: ["fauxleatherjacket", "cowboyhatbrown", "battlebelt", "leatherbootcutpants", "longsleevedturtleneckblack"]
    },
    whitehatrangersset: {
      item: "whitehatrangersset",
      name: "WHITE HAT RANGERS SET",
      icon: "Item_Set_Cow_02_C",
      skintype: "set",
      crate: "fevercrate",
      cratename: "FEVER CRATE",
      probability: "0.00099994",
      crateItems: ["cowboyhatwhite", "fauxleatherjacket", "battlebelt", "leatherbootcutpants", "longsleevedturtleneckblack"]
    },
    goldrushset: {
      item: "goldrushset",
      name: "GOLD RUSH SET",
      icon: "Item_Set_RoseWood_01_C",
      skintype: "set",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      probability: "0.00099998",
      crateItems: ["goldplate_s686", "goldplate_s12k", "goldplate_sks", "goldplate_sawed_off", "goldplate_win94"]
    },
    vanhelsingset: {
      item: "vanhelsingset",
      name: "VAN HELSING SET",
      icon: "Item_Set_Silver_01_C",
      skintype: "set",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      probability: "0.00099998",
      crateItems: ["silverplate_scarl", "silverplate_vector", "silverplate_dp_28", "silverplate_s1897", "silverplate_r1895"]
    },
    aviatorset: {
      item: "aviatorset",
      name: "AVIATOR SET",
      icon: "Item_Set_1805_01_C",
      skintype: "set",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      probability: "0.000499995",
      crateItems: ["leatherskyrocketjacket", "pilotpantsblack", "vintageaviatorgoggles", "featheredshirt", "suedeaviatorcap"]
    },
    fireintheholeset: {
      item: "fireintheholeset",
      name: "FIRE IN THE HOLE SET",
      icon: "Item_Set_1805_02_C",
      skintype: "set",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      probability: "0.000499995",
      crateItems: ["fringedhotpants", "violentvioletjacket", "desertshemagh", "lightbringershirt", "snakeskinsneakers"]
    },
    constableset: {
      item: "constableset",
      name: "CONSTABLE SET",
      icon: "CONSTABLE_SET",
      skintype: "set",
      crate: "easterangelpolicecrate",
      crateItems: ["constableshat", "constablescoat", "constablespants", "constablesgloves"]
    },
    vikendieliteattendantset: {
      item: "vikendieliteattendantset",
      name: "VIKENDI ELITE ATTENDANT SET",
      icon: "VIKENDI_ELITE_ATTENDANT_SET",
      skintype: "set",
      crate: "easterangelpolicecrate",
      crateItems: ["vikendieliteattendantuniform", "vikendieliteattendanthat", "vikendieliteattendantshoes"]
    },
  },
  skins: {
    marksmanbackpacklevel1: {
      item: "marksmanbackpacklevel1",
      name: "Marksman Backpack (Level 1)",
      icon: "Item_Skin_BackLv1_A_01_C",
      skintype: "backpack1",
      rarity: "Dark Gray",
      raritytext: "Common",
      bp: "30",
      nomarket: true,
      rewardedby: {
        rewardpass: "wildcard",
        rewardtype: "free",
        rewardlevel: "21",
      }
    },
    leatherrucksacklevel2: {
      item: "leatherrucksacklevel2",
      name: "Leather Rucksack (Level 2)",
      icon: "Item_Skin_BackLv2_A_01_C",
      skintype: "backpack2",
      rarity: "Dark Gray",
      raritytext: "Common",
      bp: "30",
      nomarket: true,
      rewardedby: {
        rewardpass: "wildcard",
        rewardtype: "premium",
        rewardlevel: "22",
      }
    },
    survivalistbackpacklevel3: {
      item: "survivalistbackpacklevel3",
      name: "Survivalist Backpack (Level 3)",
      icon: "Item_Skin_BackLV3_B_01_C",
      skintype: "backpack3",
      rarity: "Dark Gray",
      raritytext: "Common",
      bp: "30",
      nomarket: true,
      rewardedby: {
        rewardpass: "wildcard",
        rewardtype: "premium",
        rewardmission: "440006",
      }
    },

    
    // TWITCH PRIME SET
    twitchprimebalaclava: {
      item: "twitchprimebalaclava",
      name: "Twitch Prime Balaclava",
      icon: "Item_Mask_TW_01_C",
      skintype: "masks",
      rarity: "Event",
      raritytext: "Event",
    },
    twitchprimeshirt: {
      item: "twitchprimeshirt",
      name: "Twitch Prime Shirt",
      icon: "Item_Body_TW_01_C",
      skintype: "torso",
      rarity: "Event",
      raritytext: "Event",
    },
    twitchprimecombatpants: {
      item: "twitchprimecombatpants",
      name: "Twitch Prime Combat Pants",
      icon: "Item_Legs_TW_01_C",
      skintype: "legs",
      rarity: "Event",
      raritytext: "Event",
    },
    twitchprimeboots: {
      item: "twitchprimeboots",
      name: "Twitch Prime Boots",
      icon: "Item_Feet_TW_01_C",
      skintype: "feet",
      rarity: "Event",
      raritytext: "Event",
    },
    // EVENT
    telnyashka: {
      item: "telnyashka",
      name: "Telnyashka",
      icon: "Item_Body_Mailru_01_C",
      itemtype: "promo",
      promoinfo: "Promotional item that you receive when purchasing the game from Mail.ru Store (Russia).",
      promolink: "https://pubg.mail.ru/",
      skintype: "torso",
      rarity: "Event",
      raritytext: "Event",
    },
    dmmtshirt: {
      item: "dmmtshirt",
      name: "DMM T-Shirt",
      icon: "Item_Body_DMM_01_C",
      itemtype: "promo",
      promoinfo: "Promotional item that you receive when purchasing the game from DMM Store (Japan).",
      promolink: "http://pubg.dmm.com/",
      skintype: "torso",
      rarity: "Event",
      raritytext: "Event",
      crate: "",
      cratename: "",
      bp: ""
    },
    dmmtshirtv2: {
      item: "dmmtshirtv2",
      name: "DMM T-Shirt v2",
      icon: "Item_Body_DMM_02_C",
      itemtype: "promo",
      promoinfo: "Promotional item that you receive when purchasing the game from DMM Store (Japan).",
      promolink: "http://pubg.dmm.com/",
      rarity: "Event",
      raritytext: "Event",
      crate: "",
      cratename: "",
      bp: ""
    },
    pandatvtshirt: {
      item: "pandatvtshirt",
      name: "PandaTV T-Shirt",
      icon: "Item_Body_Panda_01_C",
      itemtype: "promo",
      promoinfo: "Promotional item that was given to some streamers from PandaTV (China).",
      skintype: "torso",
      rarity: "Event",
      raritytext: "Event",
      crate: "",
      cratename: "",
      bp: ""
    },
    laogongtshirt: {
      item: "laogongtshirt",
      name: "Laogong T-Shirt",
      icon: "Item_Body_Panda_02_C",
      itemtype: "promo",
      promoinfo: "Promotional item that was given to some streamers from PandaTV (China).",
      skintype: "torso",
      rarity: "Event",
      raritytext: "Event",
      crate: "",
      cratename: "",
      bp: ""
    },
    targetpractice_Pan: {
      item: "targetpractice_Pan",
      name: "Target Practice",
      icon: "Item_Skin_Pan_Target_01_C",
      skintype: "weaponskin",
      skinfor: "Pan",
      set: ["targetpractice"],
      setname: "TARGET PRACTICE",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "100",
      bp: "30"
    },

    // WANDERER CRATE
    pleatedminiskirtblue: {
      item: "pleatedminiskirtblue",
      name: "Pleated Mini-skirt (Blue)",
      icon: "Item_Legs_BR06_02_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.0064",
      bp: "960"
    },
    protectiveglasses: {
      item: "protectiveglasses",
      name: "Protective Glasses",
      icon: "Item_Eyes_D_03_C",
      skintype: "eyes",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    hotpantsblue: {
      item: "hotpantsblue",
      name: "Hotpants (Blue)",
      icon: "Item_Legs_BR03_02_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    mandarinjacketblue: {
      item: "mandarinjacketblue",
      name: "Mandarin Jacket (Blue)",
      icon: "Item_Jacket_BR06_01_C",
      skintype: "outer",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.028",
      bp: "480"
    },
    schoolshirtopen: {
      item: "schoolshirtopen",
      name: "School Shirt (Open)",
      icon: "Item_Body_BR06_01_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    ballisticmask: {
      item: "ballisticmask",
      name: "Ballistic Mask",
      icon: "Item_Mask_D_01_C",
      skintype: "masks",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    slacksblue: {
      item: "slacksblue",
      name: "Slacks (Blue)",
      icon: "Item_Legs_BR06_01_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.06",
      bp: "240"
    },
    urbanpaddedjacket: {
      item: "urbanpaddedjacket",
      name: "Urban Padded Jacket",
      icon: "Item_Jacket_C_01_C",
      skintype: "outer",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.26",
      bp: "240"
    },
    floralshirt: {
      item: "floralshirt",
      name: "Floral Shirt",
      icon: "Item_Body_D_04_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.26",
      bp: "240"
    },
    punkglasses: {
      item: "punkglasses",
      name: "Punk Glasses",
      icon: "Item_Eyes_A_01_C",
      skintype: "eyes",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    punkboots: {
      item: "punkboots",
      name: "Punk Boots",
      icon: "Item_Feet_A_01_C",
      skintype: "feet",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    hitoptrainersblue: {
      item: "hitoptrainersblue",
      name: "Hi-Top Trainers (Blue)",
      icon: "Item_Feet_E_02_C",
      skintype: "feet",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.2",
      bp: "120"
    },
    gasmaskfull: {
      item: "gasmaskfull",
      name: "Gas Mask (Full)",
      icon: "Item_Mask_C_01_C",
      skintype: "masks",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.2",
      bp: "120"
    },
    bloodycombatpants: {
      item: "bloodycombatpants",
      name: "Bloody Combat Pants",
      icon: "Item_Legs_C_07_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "2.5",
      bp: "60"
    },
    cargopantskhaki: {
      item: "cargopantskhaki",
      name: "Cargo Pants (Khaki)",
      icon: "Item_Legs_K_01_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    cargopantsbeige: {
      item: "cargopantsbeige",
      name: "Cargo Pants (Beige)",
      icon: "Item_Legs_K_02_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    cargopantsblue: {
      item: "cargopantsblue",
      name: "Cargo Pants (Blue)",
      icon: "Item_Legs_K_03_C",
      skintype: "legs",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    dirtytanktopwhite: {
      item: "dirtytanktopwhite",
      name: "Dirty Tank top (White)",
      icon: "Item_Body_C_01_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "5",
      bp: "30"
    },
    tanktopcharcoal: {
      item: "tanktopcharcoal",
      name: "Tank top (Charcoal)",
      icon: "Item_Body_C_02_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "5",
      bp: "30"
    },
    longsleevedtshirtblack: {
      item: "longsleevedtshirtblack",
      name: "Long Sleeved T-shirt (Black)",
      icon: "Item_Body_G_01_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    longsleevedtshirtlightblue: {
      item: "longsleevedtshirtlightblue",
      name: "Long Sleeved T-shirt (Light Blue)",
      icon: "Item_Body_G_02_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    longsleevedtshirtstriped: {
      item: "longsleevedtshirtstriped",
      name: "Long Sleeved T-shirt (Striped)",
      icon: "Item_Body_G_03_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    tshirtred: {
      item: "tshirtred",
      name: "T-shirt (Red)",
      icon: "Item_Body_F_02_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    tshirtstriped: {
      item: "tshirtstriped",
      name: "T-shirt (Striped)",
      icon: "Item_Body_F_03_C",
      skintype: "torso",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "15",
      bp: "30"
    },
    workingboots: {
      item: "workingboots",
      name: "Working Boots",
      icon: "Item_Feet_D_01_C",
      skintype: "feet",
      crate: "wanderercrate",
      cratename: "Wanderer Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "15",
      bp: "30"
    },

    // SURVIVOR CRATE
    miniskirtpurple: {
      item: "miniskirtpurple",
      name: "Mini-skirt (Purple)",
      icon: "Item_Legs_BR04_02_C",
      skintype: "legs",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.0064",
      bp: "960"
    },
    coatblack: {
      item: "coatblack",
      name: "Coat (Black)",
      icon: "Item_Jacket_D_01_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    coatred: {
      item: "coatred",
      name: "Coat(Red)",
      icon: "Item_Jacket_D_04_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    femaletuxedojacketpurple: {
      item: "femaletuxedojacketpurple",
      name: "Female Tuxedo Jacket (Purple)",
      icon: "Item_Jacket_BR04_01_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.028",
      bp: "480"
    },
    coatgray: {
      item: "coatgray",
      name: "Coat (Gray)",
      icon: "Item_Jacket_D_02_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    coatcamel: {
      item: "coatcamel",
      name: "Coat (Camel)",
      icon: "Item_Jacket_D_03_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    slackspurple: {
      item: "slackspurple",
      name: "Slacks (Purple)",
      icon: "Item_Legs_BR04_01_C",
      skintype: "legs",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.06",
      bp: "240"
    },
    camopaddedjacket: {
      item: "camopaddedjacket",
      name: "Camo Padded Jacket",
      icon: "Item_Jacket_C_04_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.06",
      bp: "240"
    },
    checkedshirtred: {
      item: "checkedshirtred",
      name: "Checked Shirt (Red)",
      icon: "Item_Body_PU_02_C",
      skintype: "torso",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.26",
      bp: "240"
    },
    checkedshirtwhite: {
      item: "checkedshirtwhite",
      name: "checked shirt (white)",
      icon: "Item_Body_PU_03_C",
      skintype: "torso",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.26",
      bp: "240"
    },
    paddedjacketkhaki: {
      item: "paddedjacketkhaki",
      name: "Padded Jacket (khaki)",
      icon: "Item_Jacket_C_05_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.2",
      bp: "120"
    },
    shirtwhite: {
      item: "shirtwhite",
      name: "Shirt (White)",
      icon: "Item_Body_D_01_C",
      skintype: "torso",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    paddedjacketbeige: {
      item: "paddedjacketbeige",
      name: "Padded Jacket (Beige)",
      icon: "Item_Jacket_C_03_C",
      skintype: "outer",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    matchedshirtgray: {
      item: "matchedshirtgray",
      name: "Matched Shirt (Gray)",
      icon: "Item_Body_PU_04_C",
      skintype: "torso",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.2",
      bp: "120"
    },
    fingerlessglovestan: {
      item: "fingerlessglovestan",
      name: "Fingerless Gloves (Tan)",
      icon: "Item_Hands_D_02_C",
      skintype: "hands",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "2.5",
      bp: "60"
    },
    fingerlessglovescamo: {
      item: "fingerlessglovescamo",
      name: "Fingerless Gloves (Camo)",
      icon: "Item_Hands_D_03_C",
      skintype: "hands",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    vintagebaseballcapredblack: {
      item: "vintagebaseballcapredblack",
      name: "Vintage Baseball Cap (Red/Black)",
      icon: "Item_Head_C_03_C",
      skintype: "head",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    beanieblack: {
      item: "beanieblack",
      name: "Beanie (Black)",
      icon: "Item_Head_D_01_C",
      skintype: "head",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    bootsgray: {
      item: "bootsgray",
      name: "Boots Grey",
      icon: "Item_Feet_D_02_C",
      skintype: "feet",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "5",
      bp: "30"
    },
    hitoptrainersbrown: {
      item: "hitoptrainersbrown",
      name: "Hi-top Trainers (Brown)",
      icon: "Item_Feet_E_03_C",
      skintype: "feet",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "5",
      bp: "30"
    },
    vintagebaseballcapredwhite: {
      item: "vintagebaseballcapredwhite",
      name: "Vintage Baseball Cap (Red/White)",
      icon: "Item_Head_C_01_C",
      skintype: "head",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    vintagebaseballcapwhite: {
      item: "vintagebaseballcapwhite",
      name: "Vintage Baseball Cap (White)",
      icon: "Item_Head_C_02_C",
      skintype: "head",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    combatpantswhite: {
      item: "combatpantswhite",
      name: "Combat Pants (White)",
      icon: "Item_Legs_C_01_C",
      skintype: "legs",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    combatpantsblue: {
      item: "combatpantsblue",
      name: "Combat Pants (Blue)",
      icon: "Item_Legs_C_04_C",
      skintype: "legs",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    combatpantscamo: {
      item: "combatpantscamo",
      name: "Combat Pants (camo)",
      icon: "Item_UE_Legs_C_05_C",
      skintype: "legs",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "15",
      bp: "30"
    },
    combatpantsblack: {
      item: "combatpantsblack",
      name: "Combat Pants (Black)",
      icon: "Item_Legs_D_01_C",
      skintype: "legs",
      crate: "survivorcrate",
      cratename: "Survivor Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "15",
      bp: "30"
    },

    clothmaskcheckered: {
      item: "clothmaskcheckered",
      name: "Cloth Mask (Checkered)",
      icon: "Item_Mask_PU_03_C",
      skintype: "masks",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.01",
      bp: "1920"
    },
    sleevelessbikerjacketblack: {
      item: "sleevelessbikerjacketblack",
      name: "Sleeveless Biker Jacket (Black)",
      icon: "Item_Jacket_H_01_C",
      skintype: "outer",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.01",
      bp: "960"
    },
    sleevelessbikerjacketbrown: {
      item: "sleevelessbikerjacketbrown",
      name: "Sleeveless Biker Jacket (Brown)",
      icon: "Item_Jacket_H_02_C",
      skintype: "outer",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.01",
      bp: "960"
    },
    floralshirtblack: {
      item: "floralshirtblack",
      name: "Floral Shirt (Black)",
      icon: "Item_Body_PU_06_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    aviatorgoggles: {
      item: "aviatorgoggles",
      name: "Aviator Goggles",
      icon: "Item_Eyes_H_01_C",
      skintype: "masks",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.03",
      bp: "480"
    },
    bikerpantsgray: {
      item: "bikerpantsgray",
      name: "Biker Pants (Gray)",
      icon: "Item_Legs_H_02_C",
      skintype: "legs",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    paddedjacketpurple: {
      item: "paddedjacketpurple",
      name: "Padded Jacket (Purple)",
      icon: "Item_Jacket_C_02_C",
      skintype: "outer",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.06",
      bp: "240"
    },
    princesspowertanktop: {
      item: "princesspowertanktop",
      name: "Princess Power Tank top",
      icon: "Item_Body_C_05_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.06",
      bp: "240"
    },
    sneakersblack: {
      item: "sneakersblack",
      name: "Sneakers (Black)",
      icon: "Item_Feet_BR02_02_C",
      skintype: "feet",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.26",
      bp: "240"
    },
    floralshirtwhite: {
      item: "floralshirtwhite",
      name: "Floral Shirt (White)",
      icon: "Item_Body_PU_05_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.26",
      bp: "120"
    },
    bikerpantsblack: {
      item: "bikerpantsblack",
      name: "Biker Pants (Black)",
      icon: "Item_Legs_H_01_C",
      skintype: "legs",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    patrolcapgray: {
      item: "patrolcapgray",
      name: "Patrol Cap (Gray)",
      icon: "Item_Head_H_01_C",
      skintype: "head",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    patrolcapbrown: {
      item: "patrolcapbrown",
      name: "Patrol Cap (Brown)",
      icon: "Item_Head_H_02_C",
      skintype: "head",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.2",
      bp: "120"
    },
    sleevelessturtleneckgraystriped: {
      item: "sleevelessturtleneckgraystriped",
      name: "Sleeveless Turtleneck (Gray Striped)",
      icon: "Item_Body_I_03_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.2",
      bp: "120"
    },
    skinnyjeanspink: {
      item: "skinnyjeanspink",
      name: "Skinny Jeans (Pink)",
      icon: "Item_Legs_PU_02_C",
      skintype: "legs",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "2.5",
      bp: "60"
    },
    gasmaskhalf: {
      item: "gasmaskhalf",
      name: "Gas Mask (Half)",
      icon: "Item_Mask_B_01_C",
      skintype: "masks",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    beaniegray: {
      item: "beaniegray",
      name: "Beanie (Gray)",
      icon: "Item_Head_D_03_C",
      skintype: "head",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    sleevelessturtleneckred: {
      item: "sleevelessturtleneckred",
      name: "Sleeveless Turtleneck (Red)",
      icon: "Item_Body_I_04_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.5",
      bp: "60"
    },
    dressshoesblack: {
      item: "dressshoesblack",
      name: "Dress Shoes (Black)",
      icon: "Item_Feet_H_01_C",
      skintype: "feet",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "5",
      bp: "30"
    },
    skinnyjeanskhaki: {
      item: "skinnyjeanskhaki",
      name: "Sleeveless Turtleneck (Khaki)",
      icon: "Item_Legs_PU_03_C",
      skintype: "legs",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "5",
      bp: "30"
    },
    raglantshirtbluewhite: {
      item: "raglantshirtbluewhite",
      name: "Raglan T-Shirt (Blue/White)",
      icon: "Item_Body_Camo_01_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    stripedtshirtpink: {
      item: "stripedtshirtpink",
      name: "Striped T-shirt (Pink)",
      icon: "Item_Body_F_05_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    polkadottshirt: {
      item: "polkadottshirt",
      name: "Polka Dot T-shirt",
      icon: "Item_Body_F_06_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    dirtylongsleevedtshirt: {
      item: "dirtylongsleevedtshirt",
      name: "Dirty Long Sleeved T-shirt",
      icon: "Item_Body_G_04_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "10",
      bp: "30"
    },
    longsleevedtshirtred: {
      item: "longsleevedtshirtred",
      name: "Long Sleeved T-shirt (Red)",
      icon: "Item_Body_G_05_C",
      skintype: "torso",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "15",
      bp: "30"
    },
    dressshoesblack: {
      item: "dressshoesblack",
      name: "Dress Shoes (Black)",
      icon: "Item_Feet_H_01_C",
      skintype: "feet",
      crate: "bikercrate",
      cratename: "Biker Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "515",
      bp: "30"
    },

    // MILITIA CRATE
    militaryskirtblack: {
      item: "militaryskirtblack",
      name: "Military Skirt (Black)",
      icon: "Item_Legs_OUskirt_01_C",
      skintype: "legs",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.00064",
      bp: "1920"
    },
    fauxleatherjacket: {
      item: "fauxleatherjacket",
      name: "Faux Leather Jacket",
      icon: "Item_Jacket_J_02_C",
      skintype: "outer",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    cowboyhatwhite: {
      item: "cowboyhatwhite",
      name: "Cowboy Hat (White)",
      icon: "Item_Head_Cow_02_C",
      skintype: "head",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    militaryjacketblack: {
      item: "militaryjacketblack",
      name: "Military Jacket (Black)",
      icon: "Item_Jacket_OU_01_C",
      skintype: "outer",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    militarycapblack: {
      item: "militarycapblack",
      name: "Military Cap (Black)",
      icon: "Item_Head_OU_01_C",
      skintype: "head",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    cowboyhatbrown: {
      item: "cowboyhatbrown",
      name: "Cowboy Hat (Brown)",
      icon: "Item_Head_Cow_01_C",
      skintype: "head",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.028",
      bp: "480"
    },
    leatherbootcutpants: {
      item: "leatherbootcutpants",
      name: "Leather Bootcut Pants",
      icon: "Item_Legs_P_02_C",
      skintype: "legs",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.08",
      bp: "240"
    },
    vintagegasmask: {
      item: "vintagegasmask",
      name: "Vintage Gas Mask",
      icon: "Item_Mask_E_01_C",
      skintype: "masks",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.28",
      bp: "240"
    },
    battlebelt: {
      item: "battlebelt",
      name: "Battle Belt",
      icon: "Item_Belt_C_01_C",
      skintype: "utilitybelt",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.28",
      bp: "240"
    },
    militarybootsblack: {
      item: "militarybootsblack",
      name: "Military Boots (Black)",
      icon: "Item_Feet_OU_01_C",
      skintype: "feet",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    utilitybeltbrown: {
      item: "utilitybeltbrown",
      name: "Utility Belt (Brown)",
      icon: "Item_Belt_D_02_C",
      skintype: "utilitybelt",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.4",
      bp: "120"
    },
    camotanktopred: {
      item: "camotanktopred",
      name: "Camo Tank Top (Red)",
      icon: "Item_Body_C_08_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.4",
      bp: "120"
    },
    longsleevedturtleneckblack: {
      item: "longsleevedturtleneckblack",
      name: "Long Sleeved Turtleneck (Black)",
      icon: "Item_Body_J_02_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "3",
      bp: "60"
    },
    militaryshirtgray: {
      item: "militaryshirtgray",
      name: "Military Shirt (Gray)",
      icon: "Item_Body_OU_01_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "6.5",
      bp: "60"
    },
    militarytrousersblack: {
      item: "militarytrousersblack",
      name: "Military Trousers (Black)",
      icon: "Item_Legs_OU_01_C",
      skintype: "legs",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "6.5",
      bp: "60"
    },
    vintagepoloshirt: {
      item: "vintagepoloshirt",
      name: "Vintage Polo Shirt",
      icon: "Item_Body_M_02_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    poloshirtpink: {
      item: "poloshirtpink",
      name: "Polo Shirt (Pink)",
      icon: "Item_Body_M_03_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    tanktopgray: {
      item: "tanktopgray",
      name: "Tank Top (Gray)",
      icon: "Item_Body_C_07_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    raglantshirtredwhite: {
      item: "raglantshirtredwhite",
      name: "Raglan T-shirt (Red/White)",
      icon: "Item_Body_Raglan_01_C",
      skintype: "torso",
      crate: "militiacrate",
      cratename: "Militia Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },

    // RAIDER CRATE
    goldplate_s686: {
      item: "goldplate_s686",
      name: "Gold Plate - S686",
      icon: "Item_Skin_Berreta686_RoseWood_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.0064",
      bp: "1920"
    },
    turquoisedelight_kar98k: {
      item: "turquoisedelight_kar98k",
      name: "Turquoise Delight - Kar98k",
      icon: "Item_Skin_Kar98k_Delight_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    turquoisedelight_m16a4: {
      item: "turquoisedelight_m16a4",
      name: "Turquoise Delight - M16a4",
      icon: "Item_Skin_M16A4_Delight_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.0128",
      bp: "960"
    },
    silverplate_scarl: {
      item: "silverplate_scarl",
      name: "Silver Plate - SCAR_L",
      icon: "Item_Skin_Scar-L_Silver_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    turquoisedelight_tommygun: {
      item: "turquoisedelight_tommygun",
      name: "Turquoise Delight - Tommy Gun",
      icon: "Item_Skin_Thompson_Delight_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.028",
      bp: "480"
    },
    jungledigital_awm: {
      item: "jungledigital_awm",
      name: "Jungle Digital - AWM",
      icon: "Item_Skin_AWM_JCamo_01_C",
      skintype: "weaponskin",
      skinfor: "AWM",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.05",
      bp: "480"
    },
    jungledigital_sks: {
      item: "jungledigital_sks",
      name: "Jungle Digital - SKS",
      icon: "Item_Skin_SKS_JCamo_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.28",
      bp: "240"
    },
    turquoisedelight_p1911: {
      item: "turquoisedelight_p1911",
      name: "Turquoise Delight - P1911",
      icon: "Item_Skin_M1911_Delight_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.08",
      bp: "240"
    },
    silverplate_vector: {
      item: "silverplate_vector",
      name: "Silver Plate - Vector",
      icon: "Item_Skin_Vector_Silver_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.28",
      bp: "240"
    },
    silverplate_s1897: {
      item: "silverplate_s1897",
      name: "Silver Plate - S1897",
      icon: "Item_Skin_Winchester_Silver_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    silverplate_dp_28: {
      item: "silverplate_dp_28",
      name: "Silver Plate - DP-28",
      icon: "Item_Skin_DP28_Silver_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.4",
      bp: "120"
    },
    jungledigital_p18c: {
      item: "jungledigital_p18c",
      name: "Jungle Digital - P18C",
      icon: "Item_Skin_G18_JCamo_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.4",
      bp: "120"
    },
    ruggedbeige_kar98k: {
      item: "ruggedbeige_kar98k",
      name: "Rugged (Beige) - Kar98k",
      icon: "Item_Skin_Kar98k_Beige_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "6.5",
      bp: "60"
    },
    silverplate_r1895: {
      item: "silverplate_r1895",
      name: "Silver Plate - R1895",
      icon: "Item_Skin_NagantM1895_Silver_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "3",
      bp: "60"
    },
    ruggedbeige_s12k: {
      item: "ruggedbeige_s12k",
      name: "Rugged (Beige) - S12K",
      icon: "Item_Skin_Saiga12_Beige_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "6.5",
      bp: "60"
    },
    ruggedbeige_m16a4: {
      item: "ruggedbeige_m16a4",
      name: "Rugged (Beige) - M16A4",
      icon: "Item_Skin_M16A4_Beige_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    ruggedbeige_s686: {
      item: "ruggedbeige_s686",
      name: "Rugged (Beige) - S686",
      icon: "Item_Skin_Berreta686_Beige_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    ruggedbeige_Crossbow: {
      item: "ruggedbeige_Crossbow",
      name: "Rugged (Beige) - Crossbow",
      icon: "Item_Skin_Crossbow_Beige_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    ruggedbeige_sks: {
      item: "ruggedbeige_sks",
      name: "Rugged (Beige) - SKS",
      icon: "Item_Skin_SKS_Beige_01_C",
      skintype: "weaponskin",
      crate: "raidercrate",
      cratename: "RAIDER CRATE",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },

    bomberjacketmustard: {
      item: "bomberjacketmustard",
      name: "Bomber Jacket (Mustard)",
      icon: "Item_Jacket_Bomber_03_C",
      skintype: "outer",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.08",
      bp: "480"
    },
    suitcoatgray: {
      item: "suitcoatgray",
      name: "Suit Coat (Gray)",
      icon: "Item_Jacket_BR02_05_C",
      skintype: "outer",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.08",
      bp: "480"
    },
    jungleleggings: {
      item: "jungleleggings",
      name: "Jungle Leggings",
      icon: "Item_Legs_Leggings_04_C",
      skintype: "legs",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.32",
      bp: "240"
    },
    wovensunhat: {
      item: "wovensunhat",
      name: "Woven Sun Hat",
      icon: "Item_Head_M_01_C",
      skintype: "head",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.32",
      bp: "240"
    },
    borntosurviveshorts: {
      item: "borntosurviveshorts",
      name: "Born to Survive Shorts",
      icon: "Item_Legs_U_01_C",
      skintype: "legs",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.6",
      bp: "120"
    },
    pochinkifellasjersey: {
      item: "pochinkifellasjersey",
      name: "Pochinki Fellas Jersey",
      icon: "Item_Body_SL_03_C",
      skintype: "torso",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "1.3",
      bp: "120"
    },
    tweedvestgray: {
      item: "tweedvestgray",
      name: "Tweed Vest (Gray)",
      icon: "Item_Body_Vest_01_C",
      skintype: "torso",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "0.4",
      bp: "120"
    },
    stripedslipperspink: {
      item: "stripedslipperspink",
      name: "Striped Slippers (Pink)",
      icon: "Item_Feet_Slipper_02_C",
      skintype: "feet",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "24",
      bp: "60"
    },
    kicksred: {
      item: "kicksred",
      name: "Kicks (Red)",
      icon: "Item_Feet_PU_05_C",
      skintype: "feet",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "6",
      bp: "60"
    },
    suitpantsgray: {
      item: "suitpantsgray",
      name: "Suit Pants (Gray)",
      icon: "Item_Legs_BR02_05_C",
      skintype: "legs",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "46",
      bp: "60"
    },
    longsleevedturtleneckburgundy: {
      item: "longsleevedturtleneckburgundy",
      name: "Long Sleeved Turtleneck (Burgundy)",
      icon: "Item_Body_J_03_C",
      skintype: "torso",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    loafersbrown: {
      item: "loafersbrown",
      name: "Loafers (Brown)",
      icon: "Item_Feet_H_03_C",
      skintype: "feet",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    sliponsgray: {
      item: "sliponsgray",
      name: "Slip-ons (Gray)",
      icon: "Item_Feet_I_04_C",
      skintype: "feet",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },
    slippersblack: {
      item: "slippersblack",
      name: "Slippers (Black)",
      icon: "Item_Feet_Slipper_01_C",
      skintype: "feet",
      crate: "fall2018crate",
      cratename: "Fall 2018 Crate",
      rarity: "Dark Gray",
      raritytext: "Common",
      probability: "20",
      bp: "30"
    },

    // DESPERADO CRATE
    clothmaskleopard: {
      item: "clothmaskleopard",
      name: "Cloth Mask (Leopard)",
      icon: "Item_Mask_PU_02_C",
      skintype: "masks",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "1920"
    },
    leatherhoodiewhite: {
      item: "leatherhoodiewhite",
      name: "Leather Hoodie (White)",
      icon: "Item_Jacket_L_02_C",
      skintype: "outer",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    leatherhoodieblack: {
      item: "leatherhoodieblack",
      name: "Leather Hoodie (Black)",
      icon: "Item_Jacket_L_01_C",
      skintype: "outer",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    longsleevedleathershirt: {
      item: "longsleevedleathershirt",
      name: "Long Sleeved Leather Shirt",
      icon: "Item_Body_L_01_C",
      skintype: "torso",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    aviatorsunglasses: {
      item: "aviatorsunglasses",
      name: "Aviator Sunglasses",
      icon: "Item_Eyes_I_01_C",
      skintype: "eyes",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    checkeredjacket: {
      item: "checkeredjacket",
      name: "Checkered Jacket",
      icon: "Item_Jacket_BR02_03_C",
      skintype: "outer",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    hornrimmedglassesblack: {
      item: "hornrimmedglassesblack",
      name: "Horn-rimmed Glasses (Black)",
      icon: "Item_Eyes_L_01_C",
      skintype: "eyes",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    hornrimmedglassesbrown: {
      item: "hornrimmedglassesbrown",
      name: "Horn-rimmed Glasses (Brown)",
      icon: "Item_Eyes_L_02_C",
      skintype: "eyes",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "2.5",
      bp: "240"
    },
    tracksuitpantslightblue: {
      item: "tracksuitpantslightblue",
      name: "Tracksuit Pants (Light Blue)",
      icon: "Item_Legs_BR01_02_C",
      skintype: "legs",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    sleevelessturtleneckgray: {
      item: "sleevelessturtleneckgray",
      name: "Sleeveless Turtleneck (Gray)",
      icon: "Item_Body_I_05_C",
      skintype: "torso",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "8",
      bp: "240"
    },
    longleatherbootsbrown: {
      item: "longleatherbootsbrown",
      name: "Long Leather Boots (Brown)",
      icon: "Item_Feet_A_02_C",
      skintype: "feet",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "5",
      bp: "240"
    },
    baggypantsblack: {
      item: "baggypantsblack",
      name: "Baggy Pants (Black)",
      icon: "Item_Legs_L_02_C",
      skintype: "legs",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "7.5",
      bp: "120"
    },
    baggypantsbrown: {
      item: "baggypantsbrown",
      name: "Baggy Pants (Brown)",
      icon: "Item_Legs_L_01_C",
      skintype: "legs",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    punkknuckleglovesblack: {
      item: "punkknuckleglovesblack",
      name: "Punk Knuckle Gloves (Black)",
      icon: "Item_Hands_L_02_C",
      skintype: "hand",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "7.5",
      bp: "120"
    },
    punkknuckleglovesred: {
      item: "punkknuckleglovesred",
      name: "Punk Knuckle Gloves (Red)",
      icon: "Item_Hands_L_01_C",
      skintype: "hand",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "7",
      bp: "120"
    },
    sleevelessturtleneckblack: {
      item: "sleevelessturtleneckblack",
      name: "Sleeveless Turtleneck (Black)",
      icon: "Item_Body_I_02_C",
      skintype: "torso",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "7",
      bp: "120"
    },
    leatherbootsblack: {
      item: "leatherbootsblack",
      name: "Leather Boots (Black)",
      icon: "Item_Feet_L_02_C",
      skintype: "feet",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "8",
      bp: "120"
    },
    stripedshirtgray: {
      item: "stripedshirtgray",
      name: "Striped Shirt (Gray)",
      icon: "Item_Body_PU_08_C",
      skintype: "torso",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    widepantsred: {
      item: "widepantsred",
      name: "Wide Pants (Red)",
      icon: "Item_Legs_BR02_03_C",
      skintype: "legs",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "7.5",
      bp: "120"
    },
    leatherbootsbrown: {
      item: "leatherbootsbrown",
      name: "Leather Boots (Brown)",
      icon: "Item_Feet_L_01_C",
      skintype: "feet",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "4.5",
      bp: "120"
    },
    beaniebrown: {
      item: "beaniebrown",
      name: "Beanie (Brown)",
      icon: "Item_Head_D_02_C",
      skintype: "head",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    stripedtanktop: {
      item: "stripedtanktop",
      name: "Striped Tank Top",
      icon: "Item_Body_C_06_C",
      skintype: "torso",
      crate: "desperadocrate",
      cratename: "Desperado Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "7.5",
      bp: "120"
    },

    // FEVER CRATE
    zestcheckeredskirt: {
      item: "zestcheckeredskirt",
      name: "Zest Checkered Skirt",
      icon: "Item_Legs_J_01_C",
      skintype: "legs",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "1920"
    },
    zestdenimjacket: {
      item: "zestdenimjacket",
      name: "Zest Denim Jacket",
      icon: "Item_Jacket_J_01_C",
      skintype: "outer",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    croppedcorset: {
      item: "croppedcorset",
      name: "Cropped Corset",
      icon: "Item_Body_P_01_C",
      skintype: "torso",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    zestsilkscarf: {
      item: "zestsilkscarf",
      name: "Zest Silk Scarf",
      icon: "Item_Mask_P_01_C",
      skintype: "masks",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    zestretrojacket: {
      item: "zestretrojacket",
      name: "Zest Retro Jacket",
      icon: "Item_Jacket_P_02_C",
      skintype: "outer",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    floralretrojacket: {
      item: "floralretrojacket",
      name: "Floral Retro Jacket",
      icon: "Item_Jacket_P_01_C",
      skintype: "outer",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    denimbootcutpants: {
      item: "denimbootcutpants",
      name: "Denim Bootcut Pants",
      icon: "Item_Legs_P_03_C",
      skintype: "legs",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    zestsunglasses: {
      item: "zestsunglasses",
      name: "Zest Sunglasses",
      icon: "Item_Eyes_P_01_C",
      skintype: "eyes",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    zestbootcutpants: {
      item: "zestbootcutpants",
      name: "Zest Bootcut Pants",
      icon: "Item_Legs_P_01_C",
      skintype: "legs",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "2.5",
      bp: "240"
    },
    zestloaferswithsocks: {
      item: "zestloaferswithsocks",
      name: "Zest Loafers With Socks",
      icon: "Item_Feet_J_01_C",
      skintype: "feet",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    hitopcanvassneakerspink: {
      item: "hitopcanvassneakerspink",
      name: "Hi-Top Canvas Sneakers (Pink)",
      icon: "Item_Feet_BR02_04_C",
      skintype: "feet",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    combatpantscoral: {
      item: "combatpantscoral",
      name: "Combat Pants (Coral)",
      icon: "Item_Legs_C_08_C",
      skintype: "legs",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    combatgloveskhaki: {
      item: "combatgloveskhaki",
      name: "Combat Gloves (Khaki)",
      icon: "Item_Hands_E_01_C",
      skintype: "hands",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    zestturtleneckwhite: {
      item: "zestturtleneckwhite",
      name: "Zest Turtleneck (White)",
      icon: "Item_Body_J_01_C",
      skintype: "torso",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "15",
      bp: "120"
    },
    checkeredshirtcoral: {
      item: "checkeredshirtcoral",
      name: "Checkered Shirt (Coral)",
      icon: "Item_Body_PU_07_C",
      skintype: "torso",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    retropoloshirt: {
      item: "retropoloshirt",
      name: "Retro Polo Shirt",
      icon: "Item_Body_M_01_C",
      skintype: "torso",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    meshpoloshirt: {
      item: "meshpoloshirt",
      name: "Mesh Polo Shirt",
      icon: "Item_Body_M_04_C",
      skintype: "torso",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    schoolshoesbeige: {
      item: "schoolshoesbeige",
      name: "School Shoes (Beige)",
      icon: "Item_Feet_BR06_02_C",
      skintype: "feet",
      crate: "fevercrate",
      cratename: "Fever Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "15",
      bp: "120"
    },

    // TRIUMPH CRATE
    glory_akm: {
      item: "glory_akm",
      name: "Glory - AKM",
      icon: "Item_Skin_AK47_Glory_01_C",
      skintype: "weaponskin",
      skinfor: "AKM",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "1920"
    },
    glory_ump45: {
      item: "glory_ump45",
      name: "Glory - UMP45",
      icon: "Item_Skin_UMP_Glory_01_C",
      skintype: "weaponskin",
      skinfor: "UMP45",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    goldplate_s12k: {
      item: "goldplate_s12k",
      name: "Gold Plate - S12K",
      icon: "Item_Skin_Saiga12_Rosewood_01_C",
      skintype: "weaponskin",
      skinfor: "S12K",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    desertdigital_m416: {
      item: "desertdigital_m416",
      name: "Desert Digital - M416",
      icon: "Item_Skin_HK416_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "M416",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    trifecta_scarl: {
      item: "trifecta_scarl",
      name: "Trifecta - SCAR_L",
      icon: "Item_Skin_Scar-L_Tri_01_C",
      skintype: "weaponskin",
      skinfor: "SCARL",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    goldplate_sks: {
      item: "goldplate_sks",
      name: "Gold Plate - SKS",
      icon: "Item_Skin_SKS_RoseWood_01_C",
      skintype: "weaponskin",
      skinfor: "SKS",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    desertdigital_kar98k: {
      item: "desertdigital_kar98k",
      name: "Desert Digital - Kar98k",
      icon: "Item_Skin_Kar98k_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "Kar98k",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "2.5",
      bp: "240"
    },
    trifecta_microuzi: {
      item: "trifecta_microuzi",
      name: "Trifecta - Micro UZI",
      icon: "Item_Skin_UZI_Tri_01_C",
      skintype: "weaponskin",
      skinfor: "MicroUZI",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    desertdigital_mini14: {
      item: "desertdigital_mini14",
      name: "Desert Digital - Mini14",
      icon: "Item_Skin_Mini14_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "Mini14",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    goldplate_sawed_off: {
      item: "goldplate_sawed_off",
      name: "Gold Plate - Sawed_Off",
      icon: "Item_Skin_Sawnoff_RoseWood_01_C",
      skintype: "weaponskin",
      skinfor: "SawedOff",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    ruggedorange_m416: {
      item: "ruggedorange_m416",
      name: "Rugged (Orange) - M416",
      icon: "Item_Skin_HK416_Orange_01_C",
      skintype: "weaponskin",
      skinfor: "M416",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    ruggedorange_kar98k: {
      item: "ruggedorange_kar98k",
      name: "Rugged (Orange) - Kar98k",
      icon: "Item_Skin_Kar98k_Orange_01_C",
      skintype: "weaponskin",
      skinfor: "Kar98k",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    ruggedorange_akm: {
      item: "ruggedorange_akm",
      name: "Rugged (Orange) - AKM",
      icon: "Item_Skin_AKM_Orange_01_C",
      skintype: "weaponskin",
      skinfor: "AKM",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    ruggedorange_scarl: {
      item: "ruggedorange_scarl",
      name: "Rugged (Orange) - SCAR_L",
      icon: "Item_Skin_Scar-L_Orange_01_C",
      skintype: "weaponskin",
      skinfor: "SCARL",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    goldplate_win94: {
      item: "goldplate_win94",
      name: "Gold Plate - Win94",
      icon: "Item_Skin_Win94_RoseWood_01_C",
      skintype: "weaponskin",
      skinfor: "Win94",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    ruggedorange_ump45: {
      item: "ruggedorange_ump45",
      name: "Rugged (Orange) - UMP45",
      icon: "Item_Skin_UMP_Orange_01_C",
      skintype: "weaponskin",
      skinfor: "UMP45",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "15",
      bp: "120"
    },
    trifecta_p92: {
      item: "trifecta_p92",
      name: "Trifecta - P92",
      icon: "Item_Skin_M9_Tri_01_C",
      skintype: "weaponskin",
      skinfor: "P92",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    desertdigital_r45: {
      item: "desertdigital_r45",
      name: "Desert Digital - R45",
      icon: "Item_Skin_Rhino_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "R45",
      crate: "triumphcrate",
      cratename: "TRIUMPH CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "15",
      bp: "120"
    },

    // EQUINOX CRATE
    theolivebranch_Pan: {
      item: "theolivebranch_Pan",
      name: "The Olive Branch - Pan",
      icon: "Item_Skin_Pan_King_01_C",
      skintype: "weaponskin",
      skinfor: "Pan",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Gold",
      raritytext: "Ultimate",
      probability: "0.0009",
      bp: "3840"
    },
    sharkbite_kar98k: {
      item: "sharkbite_kar98k",
      name: "Shark Bite - Kar98k",
      icon: "Item_Skin_Kar98k_Shark_01_C",
      skintype: "weaponskin",
      skinfor: "Kar98k",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "1920"
    },
    sharkbite_m16a4: {
      item: "sharkbite_m16a4",
      name: "Shark Bite - M16A4",
      icon: "Item_Skin_M16A4_Shark_01_C",
      skintype: "weaponskin",
      skinfor: "M16A4",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    goldplate_akm: {
      item: "goldplate_akm",
      name: "Gold Plate - AKM",
      icon: "Item_Skin_AKM_Rosewood_01_C",
      skintype: "weaponskin",
      skinfor: "AKM",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    goldplate_awm: {
      item: "goldplate_awm",
      name: "Gold Plate - AWM",
      icon: "Item_Skin_AWM_Rosewood_01_C",
      skintype: "weaponskin",
      skinfor: "AWM",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    silverplate_s12k: {
      item: "silverplate_s12k",
      name: "Silver Plate - S12K",
      icon: "Item_Skin_Saiga12_Silver_01_C",
      skintype: "weaponskin",
      skinfor: "S12K",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    goldplate_groza: {
      item: "goldplate_groza",
      name: "Gold Plate - Groza",
      icon: "Item_Skin_Groza_RoseWood_01_C",
      skintype: "weaponskin",
      skinfor: "Groza",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    silverplate_ump45: {
      item: "silverplate_ump45",
      name: "Silver Plate - UMP45",
      icon: "Item_Skin_UMP_Silver_01_C",
      skintype: "weaponskin",
      skinfor: "UMP45",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "3",
      bp: "240"
    },
    silverplate_tommygun: {
      item: "silverplate_tommygun",
      name: "Silver Plate - Tommy Gun",
      icon: "Item_Skin_Thompson_Silver_01_C",
      skintype: "weaponskin",
      skinfor: "TommyGun",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "6.5",
      bp: "240"
    },
    desertdigital_p92: {
      item: "desertdigital_p92",
      name: "Desert Digital - P92",
      icon: "Item_Skin_M9_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "P92",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "6.5",
      bp: "240"
    },
    desertdigital_win94: {
      item: "desertdigital_win94",
      name: "Desert Digital - Win94",
      icon: "Item_Skin_Win94_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "Win94",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    desertdigital_p18c: {
      item: "desertdigital_p18c",
      name: "Desert Digital - P18C",
      icon: "Item_Skin_G18_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "P18C",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    desertdigital_sawed_off: {
      item: "desertdigital_sawed_off",
      name: "Desert Digital - Sawed_Off",
      icon: "Item_Skin_Sawedoff_DCamo_01_C",
      skintype: "weaponskin",
      skinfor: "SawedOff",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    desertdigital_microuzi: {
      item: "desertdigital_microuzi",
      name: "Desert Digital - Micro Uzi",
      icon: "Item_Skin_Uzi_Dcamo_01_C",
      skintype: "weaponskin",
      skinfor: "MicroUZI",
      crate: "equinoxcrate",
      cratename: "EQUINOX CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },

    // AVIATOR CRATE
    fringedhotpants: {
      item: "fringedhotpants",
      name: "Fringed Hotpants",
      icon: "Item_Legs_P_06_C",
      skintype: "legs",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "1920"
    },
    leatherskyrocketjacket: {
      item: "leatherskyrocketjacket",
      name: "Leather \"Skyrocket\" Jacket",
      icon: "Item_Jacket_Bomber_01_C",
      skintype: "outer",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    violentvioletjacket: {
      item: "violentvioletjacket",
      name: "Violent Violet Jacket",
      icon: "Item_Jacket_Bomber_02_C",
      skintype: "outer",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    desertshemagh: {
      item: "desertshemagh",
      name: "Desert Shemagh",
      icon: "Item_Mask_K_01_C",
      skintype: "mask",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    pilotpantsblack: {
      item: "pilotpantsblack",
      name: "Pilot Pants (Black)",
      icon: "Item_Legs_Hunter_02_C",
      skintype: "pants",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    vintageaviatorgoggles: {
      item: "vintageaviatorgoggles",
      name: "Vintage Aviator Goggles",
      icon: "Item_Eyes_K_01_C",
      skintype: "eyes",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    lazysundaysweatpants: {
      item: "lazysundaysweatpants",
      name: "Lazy Sunday Sweatpants",
      icon: "Item_Legs_BR05_02_C",
      skintype: "pants",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "2.5",
      bp: "240"
    },
    lightbringershirt: {
      item: "lightbringershirt",
      name: "Lightbringer Shirt",
      icon: "Item_Body_Half_02_C",
      skintype: "torso",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    featheredshirt: {
      item: "featheredshirt",
      name: "Feathered Shirt",
      icon: "Item_Body_Half_01_C",
      skintype: "torso",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    denimshirtwithnecktie: {
      item: "denimshirtwithnecktie",
      name: "Denim Shirt with Necktie",
      icon: "Item_Body_D_05_C",
      skintype: "torso",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    tacticalgloves: {
      item: "tacticalgloves",
      name: "Tactical Gloves",
      icon: "Item_Hands_E_02_C",
      skintype: "hands",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    paddycap: {
      item: "paddycap",
      name: "Paddy Cap",
      icon: "Item_Head_J_01_C",
      skintype: "head",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    suedeaviatorcap: {
      item: "suedeaviatorcap",
      name: "Suede Aviator Cap",
      icon: "Item_Head_K_02_C",
      skintype: "head",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    countrysidesneakers: {
      item: "countrysidesneakers",
      name: "Contryside Sneakers",
      icon: "Item_Feet_BR02_03_C",
      skintype: "Feet",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    snakeskinsneakers: {
      item: "snakeskinsneakers",
      name: "Snake Skin Sneakers",
      icon: "Item_Feet_BR02_06_C",
      skintype: "feet",
      crate: "aviatorcrate",
      cratename: "AVIATOR CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },

    battlestatindustrialsecurity_AKM: {
      item: "battlestatindustrialsecurity_AKM",
      name: "\[BATTLESTAT\] Industrial Security - AKM",
      icon: "Item_Skin_AK47_BattleStat_01_C",
      skintype: "weaponskin",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "1920"
    },
    vikendieliteattendantuniform: {
      item: "vikendieliteattendantuniform",
      name: "Vikendi Elite Attendant Uniform",
      icon: "Item_Jacket_FA_01_C",
      skintype: "outer",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    constablescoat: {
      item: "constablescoat",
      name: "Constable\'s Coat",
      icon: "Item_Jacket_Bobby_01_C",
      skintype: "outer",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.32",
      bp: "480"
    },
    constableshat: {
      item: "constableshat",
      name: "Constable\'s Hat",
      icon: "Item_Head_Bobby_01_C",
      skintype: "head",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.30",
      bp: "480"
    },
    babybearfacemask: {
      item: "babybearfacemask",
      name: "\"Baby Bear\" Face Mask",
      icon: "Item_Mask_F_03_C",
      skintype: "mask",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.30",
      bp: "480"
    },
    vikendieliteattendanthat: {
      item: "vikendieliteattendanthat",
      name: "Vikendi Elite Attendant Hat",
      icon: "Item_Head_FA_01_C",
      skintype: "head",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    constablespants: {
      item: "constablespants",
      name: "Constable\'s Pants",
      icon: "Item_Legs_TG_02_C",
      skintype: "legs",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.50",
      bp: "240"
    },
    easterangelpoliceshirt: {
      item: "easterangelpoliceshirt",
      name: "East Erangel Police Shirt",
      icon: "Item_Body_D_06_C",
      skintype: "torso",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.50",
      bp: "240"
    },
    sweateranddressshirtneige: {
      item: "sweateranddressshirtneige",
      name: "Sweater and Dress Shirt (Beige)",
      icon: "Item_Body_S_02_C",
      skintype: "torso",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "20",
      bp: "240"
    },
    constablesgloves: {
      item: "constablesgloves",
      name: "Constable\'s Gloves",
      icon: "Item_Hands_Bobby_01_C",
      skintype: "hand",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "2.50",
      bp: "120"
    },
    babybearfaceshirt: {
      item: "babybearfaceshirt",
      name: "\"Baby Bear\" Face Shirt",
      icon: "Item_Body_F_09_C",
      skintype: "torso",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "4.50",
      bp: "120"
    },
    vikendieliteattendantshoes: {
      item: "vikendieliteattendantshoes",
      name: "Vikendi Elite Attendant Shoes",
      icon: "Item_Feet_FA_01_C",
      skintype: "feet",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    pilotpantsbeige: {
      item: "pilotpantsbeige",
      name: "Pilot Pants (Beige)",
      icon: "Item_Legs_Hunter_03_C",
      skintype: "legs",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },
    fancyshoes: {
      item: "fancyshoes",
      name: "Fancy Shoes",
      icon: "Item_Feet_H_04_C",
      skintype: "feet",
      crate: "easterangelpolicecrate",
      cratename: "EAST ERANGEL POLICE CRATE",
      rarity: "Green",
      raritytext: "Special",
      probability: "20",
      bp: "120"
    },

    // Pioneer Crate
    shirtblack: {
      item: "shirtblack",
      name: "Shirt (Black)",
      icon: "Item_Body_D_02_C",
      skintype: "torso",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "3.5088",
      bp: "240"
    },
    paddedjacketgray: {
      item: "paddedjacketgray",
      name: "Padded Jacket (GRAY)",
      icon: "Item_Jacket_C_06_C",
      skintype: "outer",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "0.7576",
      bp: "240"
    },
    bloodyshirt: {
      item: "bloodyshirt",
      name: "Bloody Shirt",
      icon: "Item_Body_D_03_C",
      skintype: "torso",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "1.7544",
      bp: "60"
    },
    fingerlessglovesleather: {
      item: "fingerlessglovesleather",
      name: "Fingerless Gloves (Leather)",
      icon: "Item_Hands_D_01_C",
      skintype: "hands",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "4.0909",
      bp: "60"
    },
    bloodytanktopwhite: {
      item: "bloodytanktopwhite",
      name: "Bloody Tank top (White)",
      icon: "Item_Body_C_04_C",
      skintype: "torso",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "1.4474",
      bp: "60"
    },
    dirtytanktopgray: {
      item: "dirtytanktopgray",
      name: "Dirty Tank top (Gray)",
      icon: "Item_Body_C_03_C",
      skintype: "torso",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "2.8947",
      bp: "60"
    },
    camocombatpantsgray: {
      item: "camocombatpantsgray",
      name: "Camo Combat Pants (Gray)",
      icon: "Item_Legs_C_06_C",
      skintype: "legs",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "3.6364",
      bp: "60"
    },
    sunglasses: {
      item: "sunglasses",
      name: "Sunglasses",
      icon: "Item_Eyes_D_01_C",
      skintype: "eyes",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "1.9091",
      bp: ""
    },
    rimlesssunglasses: {
      item: "rimlesssunglasses",
      name: "Rimless Sunglasses",
      icon: "Item_Eyes_D_02_C",
      skintype: "eyes",
      crate: "pioneercrate",
      cratename: "Pioneer Crate",
      rarity: "Light Gray",
      raritytext: "Classic",
      probability: "1.2727",
      bp: ""
    },

    // GAMESCOM INVITATIONAL CRATE
    schoolskirt: {
      item: "schoolskirt",
      name: "School Skirt",
      icon: "Item_Legs_BR02_02_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Red",
      raritytext: "Legendary",
      probability: "0.16",
      bp: "960"
    },
    camohotpants: {
      item: "camohotpants",
      name: "Camo Hotpants",
      icon: "Item_Legs_BR03_01_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    pleatedminiskirtblack: {
      item: "pleatedminiskirtblack",
      name: "Pleated Mini-skirt (Black)",
      icon: "Item_Legs_BR07_02_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Pink",
      raritytext: "Epic",
      probability: "0.32",
      bp: "960"
    },
    sneakerswhite: {
      item: "sneakerswhite",
      name: "Sneakers (WHITE)",
      icon: "Item_Feet_BR02_01_C",
      skintype: "feet",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "0.6",
      bp: "480"
    },
    tracksuittop: {
      item: "tracksuittop",
      name: "Tracksuit Top",
      icon: "Item_Jacket_BR01_01_C",
      skintype: "outer",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    schooljacket: {
      item: "schooljacket",
      name: "School Jacket",
      icon: "Item_Jacket_BR02_01_C",
      skintype: "outer",
      crate: "gamescominvitationalcrate",
      set: ["ivoryschooluniformsetfemale", "ivoryschooluniformsetmale"],
      cratename: "Gamescom Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "1.3",
      bp: "480"
    },
    camocap: {
      item: "camocap",
      name: "Camo Cap",
      icon: "Item_Head_BR03_01_C",
      skintype: "head",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "2.5",
      bp: "240"
    },
    tracksuittopyellow: {
      item: "tracksuittopyellow",
      name: "Tracksuit Top (Yellow)",
      icon: "Item_Jacket_BR05_01_C",
      skintype: "outer",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Blue",
      raritytext: "Rare",
      probability: "4.5",
      bp: "240"
    },
    mandarinjacketblack: {
      item: "mandarinjacketblack",
      name: "Mandarin Jacket (Black)",
      icon: "Item_Jacket_BR07_01_C",
      skintype: "outer",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "4.5",
      bp: "240"
    },
    tracksuitpantsyellow: {
      item: "tracksuitpantsyellow",
      name: "Tracksuit Pants (Yellow)",
      icon: "Item_Legs_BR05_01_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Purple",
      raritytext: "Elite",
      probability: "4.5",
      bp: "240"
    },
    schoolshirtwithnecktie: {
      item: "schoolshirtwithnecktie",
      name: "School Shirt with Necktie",
      icon: "Item_Body_BR02_01_C",
      skintype: "torso",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    orangeshirt: {
      item: "orangeshirt",
      name: "Orange Shirt",
      icon: "Item_Body_BR03_01_C",
      skintype: "torso",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      set: ["instructorset"],
      rarity: "Green",
      raritytext: "Special",
      probability: "5",
      bp: "120"
    },
    schoolshirt: {
      item: "schoolshirt",
      name: "School Shirt",
      icon: "Item_Body_BR07_01_C",
      skintype: "torso",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    bloodysneakers: {
      item: "bloodysneakers",
      name: "Bloody Sneakers",
      icon: "Item_Feet_BR01_01_C",
      skintype: "feet",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    velcrotrainers: {
      item: "velcrotrainers",
      name: "Velcro Trainers",
      icon: "Item_Feet_BR07_01_C",
      skintype: "feet",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    tracksuitpants: {
      item: "tracksuitpants",
      name: "Tracksuit Pants",
      icon: "Item_Legs_BR01_01_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "10",
      bp: "120"
    },
    schoolpants: {
      item: "schoolpants",
      name: "School Pants",
      icon: "Item_Legs_BR02_01_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "15",
      bp: "120"
    },
    slacksblack: {
      item: "slacksblack",
      name: "Slacks (Black)",
      icon: "Item_Legs_BR07_01_C",
      skintype: "legs",
      crate: "gamescominvitationalcrate",
      cratename: "Gamescom Crate",
      rarity: "Green",
      raritytext: "Special",
      probability: "15",
      bp: "120"
    },
    // PLAYERUNKNOWN SET
    shirtgray: {
      item: "shirtgray",
      name: "Shirt (Gray)",
      icon: "Item_Body_KAPU_01_C",
      skintype: "torso",
      set: ["playerunknownset"],
      rarity: "Event",
      raritytext: "Event",
      bp: ""
    },
    jeanstan: {
      item: "jeanstan",
      name: "Jeans (Tan)",
      icon: "Item_Legs_PU_04_C",
      skintype: "legs",
      set: ["playerunknownset"],
      rarity: "Event",
      raritytext: "Event",
      bp: ""
    },
    hitoptrainersred: {
      item: "hitoptrainersred",
      name: "Hi-top Trainers (Red)",
      icon: "Item_Feet_PU_03_C",
      skintype: "feet",
      set: ["playerunknownset"],
      rarity: "Event",
      raritytext: "Event",
      bp: ""
    },
    playerunknownsbandana: {
      item: "playerunknownsbandana",
      name: "PLAYERUNKNOWN's Bandana",
      icon: "Item_Mask_PU_04_C",
      skintype: "masks",
      set: ["playerunknownset"],
      rarity: "Event",
      raritytext: "Event",
      bp: ""
    },
    playerunknownstrenchcoat: {
      item: "playerunknownstrenchcoat",
      name: "PLAYERUNKNOWN'S Trenchcoat",
      icon: "Item_Jacket_PU_02_C",
      skintype: "outer",
      set: ["playerunknownset"],
      rarity: "Event",
      raritytext: "Event",
      bp: ""
    },
  },
  charms: {
    fragged: {
      item: "fragged",
      item_id: 18010001,
      name: "FRAGGED",
      description: "MAYBE THIS WASN'T THE SAFEST WAY TO ATTACH IT",
      level: "5"
    },
    metalhead: {
      item: "metalhead",
      item_id: 18010002,
      name: "METAL HEAD",
			description: "IT'S ONLY WEAKNESS IS AN AWM CHARM",
      level: 10
    },
    luckycharm :{
      item: "luckycharm",
      item_id: 18010003,
      name: "LUCKY CHARM",
      description: "BETTER LUCK NEXT TIME",
      level: 15
    },
    dinopark :{
      item: "dinopark",
      item_id: 18010019,
      name: "DINO PARK",
			description: "I WENT TO DINO PARK AND ALL I GOT WAS THIS CHARM",
      level: 20
    },
    playerpugnown :{
      item: "playerpugnown",
      item_id: 18010004,
			name: "PLAYERPUGKNOWN",
			description: "MORE LOYAL THAN YOUR AVERAGE TEAMMATE",
      level: 25
    },
    level4armor :{
      item: "level4armor",
      item_id: 18010005,
			name: "LEVEL 4 ARMOR",
			description: "WHAT IS THIS EVEN MADE OUT OF?",
      level: 30
    },
    thekey :{
      item: "thekey",
      item_id: 18010006,
			name: "THE KEY",
			description: "WHAT COULD IT BE FOR?",
      level: 35
    },
    bestbuds :{
      item: "bestbuds",
      item_id: 18010007,
			name: "BEST BUDS",
			description: "GIVE HALF TO YOUR DUO PARTNER <3",
      level: 40
    },
    strongman :{
      item: "strongman",
      item_id: 18010009,
			name: "STRONGMAN",
			description: "RUN FROM THE PAIN",
      level: 45
    },
    aviator :{
      item: "aviator",
      item_id: 18010008,
			name: "AVIATOR",
			description: "SHE HAS A MICROPHONE - SHE JUST DOESN'T WANT TO TALK TO YOU",
      level: 50
    },
    vikendisword :{
      item: "vikendisword",
      item_id: 18010010,
			name: "VIKENDI SWORD",
			description: "FORGED FROM THE FINEST PANS",
      level: 55
    },
    carepackage :{
      item: "carepackage",
      item_id: 18010011,
			name: "CARE PACKAGE",
			description: "IT'S FINE. JUST GO FOR IT",
      level: 60
    },
    boxingglove :{
      item: "boxingglove",
      item_id: 18010016,
			name: "BOXING GLOVE",
			description: "IT'S BETTER THAN NOTHIN'",
      level: 65
    },
    paradiseresort :{
      item: "paradiseresort",
      item_id: 18010020,
			name: "PARADISE RESORT",
			description: "IT'S A ONE WAY TICKET",
      level: 70
    },
    lonesurvivor :{
      item: "lonesurvivor",
      item_id: 18010013,
			name: "LONE SURVIVOR",
			description: "DRESS FOR THE JOB YOU WANT, NOT THE ONE YOU HAVE",
      level: 75
    },
    kneesplitter: {
      item: "kneesplitter",
      item_id: 18010014,
			name: "KNEE SPLITTER",
      description: "FOR THOSE WHO USED TO BE ADVENTUROUS",
      level: 80
    },
    deadweight: {
      item: "deadweight",
      item_id: 18010015,
			name: "DEAD WEIGHT",
			description: "GONE BUT ALSO FORGOTTEN",
      level: 85
    },
    wingit: {
      item: "wingit",
      item_id: 18010012,
			name: "WING IT",
			description: "JUST A TASTE OF VICTORY",
      level: 90
    },
    fanboy: {
      item: "fanboy",
      item_id: 18010018,
			name: "FANBOY",
			description: "REPRESENT",
      level: 95
    },
    miniunknown: {
      item: "miniunknown",
      item_id: 18010017,
			name: "MINIUNKNOWN",
			description: "HE'S A LITTLE UNKNOWN...",
      level: 100
    },
  },
  passName: {
    sahnokfree: "Survivor Pass 3: Sahnok (Free)",
    vikendifree: "Survivor Pass 3: Vikendi (Free)",        
    wildcardfree: "Survivor Pass 3: Wildcard (Free)",
    sahnokpremium: "Survivor Pass 3: Sahnok (Premium)",
    vikendipremium: "Survivor Pass 3: Vikendi (Premium)",        
    wildcardpremium: "Survivor Pass 3: Wildcard (Premium)",
  },
  survivorPass: {
    wildcard: {
      eventDate: ['2019.26.03', '2019.04.06'],
      prices: [
        { item: 'pass', value: '$9.99' },
        { item: '5 levels', value: '$4.99' },
        { item: '20 levels', value: '$19.99' },
        { item: '50 levels', value: '$49.99' },
      ],
      rewards: {
        free: {
          3: 'BP 300',
          7: 'maleface7',
          10: 'couponblue',
          11: 'BP 300',
          14: 'hairstyle10',
          17: 'BP 300',
          20: 'couponblue',
          21: 'marksman_ackpacklevel1',
          23: 'sweatertan',
          25: 'BP 300',
          28: 'hairstyle11',
          30: 'couponblue',
          33: 'BP 300',
          35: 'femaleface7',
          40: 'couponblue',
          50: 'couponblue',
          60: 'couponblue',
          70: 'couponblue',
        },
        premium: {
          1: 'floralprintbomberjacket',
          2: 'wildcard-QBU',
          3: 'XP 5.000',
          4: 'BP Boost 2%',
          5: 'BP 700',
          6: 'wildcard-R45',
          7: 'easterangelpolicekey',
          8: 'BP 1.000',
          9: 'llstshirt',
          10: 'emote-gunshow',
          11: 'BP Boost 2%',
          12: 'elegant-S12K',
          13: 'XP 6.000',
          14: 'snowleopard-R1895',
          15: 'bomberjacketgray',
          16: 'BP Boost 2%',
          17: 'poloshirtwhite',
          18: 'distressedcap',
          19: 'divaglasseswhite',
          20: 'XP 4.000',
          21: 'BP 1.000',
          22: 'leatherrucksacklevel2',
          23: 'BP Boost 2%',
          24: 'elegant-P18C',
          25: 'XP 5.000',
          26: 'shirtplaid',
          27: 'emote-seduction',
          28: 'toxic-VSS',
          29: 'BP 700',
          30: 'distressedjeans',
          31: 'emote-yessir',
          32: 'XP 6.000',
          33: 'leopard-SawedOff',
          34: 'BP 500',
          35: 'floralprintskirt',
          36: 'emote-victorydance7',
          37: 'loaferswithsocksbrown',
          38: 'BP Boost 2%',
          39: 'BP 1.200',
          40: 'suittopwhite',
          41: 'leopard-Crossbow',
          42: 'XP 4.000',
          43: 'emote-spacerangerpose2',
          44: 'BP Boost 2%',
          45: 'fancyshoeswhite',
          46: 'BP 700',
          47: 'floralprintbackpacklevel2',
          48: 'dresspantsblack',
          49: 'XP 5.000',
          50: 'elegant-G36C',
          51: 'BP 1.000',
          52: 'emote-graciousbow',
          53: 'BP Boost 2%',
          54: 'XP 4.000',
          55: 'dressshoeswithstockingsblack',
          56: 'BP Boost 2%',
          57: 'toxic-P1911',
          58: 'emote-rockstar',
          59: 'BP 500',
          60: 'longsleevedturtlenecknavy',
          61: 'XP 5.000',
          62: 'easterangelpolicekey',
          63: 'BP Boost 2%',
          64: 'BP 700',
          65: 'floralprintcorset',
          66: 'emote-victorydance6',
          67: 'XP 6.000',
          68: 'sophisticatedglasses',
          69: 'BP Boost 2%',
          70: 'formfittingdressgray'
        },
      },
      couponShop: [
        'parachute-mountaincamo',
        'woolscarfbrown',
        'uglyholidayhat',
        'uglyholidaysweater',
        'uglyholidaygloves',
        'snowmobileracerboots',
        'maddog-M16A4',
        'articdigital-SawedOff',
        'articdigital-M249',
        'articdigital-SCARL'
      ],
      levelxp: 10000,
      levelrewards: {
        2: 'whitecoupon',
        3: '2 yellowcoupon',
        4: 'whitecoupon',
      },
      // MISSIONS:
      // 41 daily
      // 42 weekly
      // 44 premium
      // 45 challenges
      // 46 beginner
  
      // MISSIONS:
      // 41 daily 1000,1500,2000 xp
      // 42 weekly
      // 4200 weekly free 3000 xp
      // 4210 weekly premium 5000 xp
      // 44 premium 3000 xp + items
      // 45 challenges 1000 xp
      // 4500 tommygun
      // 4510 berylm762
      // 4520 s686
      // 4530 ump45
      // 4540 m16a4
      // 46 beginner 3000 xp
  
      missions: {
        daily: [
          // 41 daily
        ],
        weekly: {
          week_1: {
            // 42 weekly
          }
        },
        beginner: {
          // 46 beginner
          xp: 3000,
          ids: [
            460001, // Play a Solo match using the Quick Join option
            460003, // Enter the Training Mode
            460004, // Purchase an item from the Store
            460005, // Purchase a random crate from the Store
            460006, // Equip a weapon skin under the Customize > Weapons tab
            460007, // Read the Patch Notes by clicking the note icon at the top right of the lobby
            460008, // Customize the emote wheel from the Customize > Emotes tab
            460009, // Replace a daily mission
            460010, // Equip a new outfit under the Customize > Wardrobe tab
            460011, // Use DROP IN SUPPLY from the Survivor Pass screen to claim a coupon
          ]
        },
        premium: {
          // 44 premium
          xp: 3000,
          ids: [
            {mission: 440001, reward: 'xp'},
            {mission: 440002, reward: 'floralprintshirt'},
            {mission: 440003, reward: 'xp'},
            {mission: 440004, reward: 'beachshortstextured'},
            {mission: 440005, reward: 'xp'},
            {mission: 440006, reward: 'survivalistbackpacklevel3'},
            {mission: 440007, reward: 'xp'},
            {mission: 440008, reward: 'emote-spacerangerpose1'},
            {mission: 440009, reward: 'xp'},
            {mission: 440010, reward: 'formfittingdressred'},
          ]
        },
        challenges: {
          // 45 challenges
          xp: 1000,
          tommygun: [
            450001,
            450002,
            450003,
            450004,
            450005
          ],
          berylm762: [
            451001,
            451002,
            451003,
            451004,
            451005,
            451006
          ],
          s686: [
            452001,
            452002,
            452003,
            452004,
            452005,
            452006,
            452007
          ],
          ump45: [
            453001,
            453002,
            453003,
            453004,
            453005,
            453006,
            453007,
            453008
          ],
          m16a4: [
            454001,
            454002,
            454003,
            454004,
            454005,
            454006,
            454007,
            454008,
            454009,
            454010
          ]
        }
      }
    },
  
    vikendi: {
      eventDate: ['2018.12.19', '2019.02.26'],
      prices: [
        { item: 'pass', value: '$9.99' },
        { item: '5 levels', value: '$4.99' },
        { item: '20 levels', value: '$19.99', discount: '$17.99' },
        { item: '50 levels', value: '$49.99', discount: '$34.99' },
      ],
      premiumLevelRewards: {
        1: 'XP 10.000',
        2: 'velocity-SKS',
        3: 'emote-quiet',
        4: 'XP 5.000',
        5: 'BP 500',
        6: 'emote-victory_dance_3',
        7: 'stell-toed_boots',
        8: 'artic_digital-MicroUZI',
        9: 'BP 1.000',
        10: 'crimson_snowflake-QBZ',
        11: 'BP Boost 2%',
        12: 'heavy_fur_coat_black',
        13: 'XP 5.000',
        14: 'artic_digital-UMP9',
        15: 'emote-bow',
        16: 'frostbite-R1895',
        17: 'BP 500',
        18: 'skinny_jeans_blue',
        19: 'artic_digital-AWM',
        20: 'the_leopard_sweater',
        21: 'XP 5.000',
        22: 'emote-go_go_go',
        23: 'BP Boost 2%',
        24: 'velocity-p92',
        25: 'BP 500',
        26: 'snow_jacket_red',
        27: 'emote-victory_dance_4',
        28: 'windowpane_check_pants_blue',
        29: 'BP 700',
        30: 'artic_digital-M16A4',
        31: 'gas_mask_military',
        32: 'BP Boost 2%',
        33: 'emote-get_down',
        34: 'artic_digital-Kar98k',
        35: 'XP 4.000',
        36: 'pinstripe_slacks_black',
        37: 'emote-plead',
        38: 'houndstooth_cloth_mask_tan',
        39: 'BP 1.200',
        40: 'artic_digital-p92',
        41: 'XP 3.000',
        42: 'felt_winter_boots_brown',
        43: 'emote-embarassed',
        44: 'stitched_leather_gloves_ash',
        45: 'BP Boost 2%',
        46: 'kubanka_black',
        47: 'emote-victory_dance_5',
        48: 'artic_digital-Win94',
        49: 'XP 5.000',
        50: 'leather_racer-helmet_level_1',
        51: 'BP 1.000',
        52: 'velocity-AKM',
        53: 'plaid_pleated_skirt',
        54: 'BP 700',
        55: 'wool_earflap_cap_black',
        56: 'BP Boost 2%',
        57: 'frostbite-VSS',
        58: 'winter_windbreaker',
        59: 'military_medic-helmet_level_2',
        60: 'BP 500',
        61: 'XP 5.000',
        62: 'artic_digital-R45',
        63: 'BP Boost 2%',
        64: 'snowmobile_racer_jacket',
        65: 'BP 500',
        66: 'camo_snow_pants_red',
        67: 'artic_digital-SKS',
        68: 'tricolor_snow_jacket',
        69: 'BP Boost 2%',
        70: 'dark_flame_racer-helmet_level_1',
        71: 'BP 500',
        72: 'XP 7.000',
        73: 'BP Boost 2%',
        74: 'tricolor_snow_pants',
        75: 'artic_digital-TommyGun',
        76: 'XP 4.000',
        77: 'emote-victory_dance',
        78: 'maddog-S12K',
        79: 'BP 800',
        80: 'frostbite-Kar98k',
        81: 'artic_digital-M24',
        82: 'BP Boost 2%',
        83: 'artic_face_camo',
        84: 'XP 5.000',
        85: 'emote-flex',
        86: 'artic_digital-Vector',
        87: 'survivalist_parka',
        88: 'BP 700',
        89: 'emote-dance',
        90: 'leather_military-helmet_level_2',
        91: 'crimson_snowflake-P18C',
        92: 'snowdevils_biker_jacket',
        93: 'XP 5.000',
        94: 'BP Boost 2%',
        95: 'maddog-UMP9',
        96: 'BP 1.000',
        97: 'emote-victory_dance_2',
        98: 'crimson_snowflake-M416',
        99: 'emote-bring_it',
        100: 'snow_leopard_skirt'
      },
      couponShop: [
        'random_key',
        'blue_coupon',
        'blue_coupon',
      ],
      premiumRewards: [
        'military_hotpants',
        'heavy_fur_coat_striped',
        'kubanka_striped',
        'artic_digital-M416',
        'medieval-helmet_level_3'
      ]
    },
    
    sahnok: {
      eventDate: ['2018.06.22', '2018.07.21'],
      prices: [
        { item: 'pass', value: '$9.99' },
        { item: '5 levels', value: '$4.99' },
      ],
      premiumLevelRewards: {
        1: 'XP 400',
        2: 'BP Boost (5%)',
        3: 'BP 500',
        4: 'jailbird_tshirt',
        5: ['escapee_pants', 'earloop_mask'],
        6: 'XP 200',
        7: 'escapee_shoes',
        8: 'BP Boost (5%)',
        9: 'silver_plate-Mini14',
        10: 'BP 700',
        11: 'beach_shorts_beige',
        12: 'XP 200',
        13: 'jailbird_joggers',
        14: 'BP Boost (5%)',
        15: 'escapee_jacket',
        16: ['BP 500', 'Free in-game name change'],
        17: 'guard_pants',
        18: 'BP 700',
        19: ['guard_cap', 'worker_jacket'],
        20: ['XP 200', 'parachute-sunflower'],
        21: 'gold_plate-P92',
        22: 'guard_jacket',
        23: 'rash_vest',
        24: 'rose_tinted_glasses',
        25: 'BP Boost (5%)',
        26: 'beach_shirt_coral',
        27: 'BP 2000',
        28: 'twisty_top_beige',
        29: 'guard_skirt',
        30: 'paradise_bottom'
      },
      premiumRewards: [
        'twisty_top_sky',
        'cat_eyes',
        'jungle_digital-M416',
        'beach_shirt_yellow',
        'beach_shorts_green'
      ]
    }
  },

  missions:{
    "MISSION:410001": {
      description: "Survive for 20 minutes",
      action: "general"
    },
    "MISSION:410002": {
      description: "Survive for 15 minutes in Solo",
      action: "general"
    },
    "MISSION:410003": {
      description: "Survive for 15 minutes in Duos",
      action: "general"
    },
    "MISSION:410004": {
      description: "Survive for 15 minutes in Squads",
      action: "general"
    },
    "MISSION:410005": {
      description: "Reach top 60 in Solo",
      action: "goodskill"
    },
    "MISSION:410006": {
      description: "Reach top 30 in Duos",
      action: "goodskill"
    },
    "MISSION:410007": {
      description: "Reach top 15 in Squads",
      action: "goodskill"
    },
    "MISSION:410008": {
      description: "Deal 30 damage to enemies",
      action: "damage"
    },
    "MISSION:410009": {
      description: "Travel 200 m in any vehicle",
      action: "move"
    },
    "MISSION:410010": {
      description: "Revive a teammate",
      action: "revive"
    },
    "MISSION:410011": {
      description: "Destroy 1 vest of enemy",
      action: "destroy"
    },
    "MISSION:410012": {
      description: "Destroy 1 helmet of enemy",
      action: "destroy"
    },
    "MISSION:410013": {
      description: "Drink 1 Energy Drink",
      action: "item_use"
    },
    "MISSION:410014": {
      description: "Use 1 Painkiller",
      action: "item_use"
    },
    "MISSION:410015": {
      description: "Use 1 Bandage",
      action: "item_use"
    },
    "MISSION:410016": {
      description: "Use 1 First Aid Kit",
      action: "item_use"
    },
    "MISSION:410017": {
      description: "Use 1 Gas Can to refuel a vehicle",
      action: "item_use"
    },
    "MISSION:410018": {
      description: "Get 1 kill",
      action: "kill"
    },
    "MISSION:410019": {
      description: "Get 1 kill using an AR",
      action: "kill"
    },
    "MISSION:410020": {
      description: "Get 1 kill using a DMR",
      action: "kill"
    },
    "MISSION:410021": {
      description: "Get 1 kill using a shotgun",
      action: "kill"
    },
    "MISSION:410022": {
      description: "Get 1 kill using an SMG",
      action: "kill"
    },
    "MISSION:410023": {
      description: "Get 1 kill using an SR/DMR",
      action: "kill"
    },
    "MISSION:410024": {
      description: "Kill 1 enemy with headshots",
      action: "kill"
    },
    "MISSION:410025": {
      description: "Loot 1 item from player deathboxes",
      action: "item_pick"
    },
    "MISSION:410026": {
      description: "Kill 1 enemy within 50 meters of you",
      action: "kill"
    },
    "MISSION:410027": {
      description: "Drop into Yasnaya Polyana on Erangel",
      action: "visit"
    },
    "MISSION:410028": {
      description: "Drop into El Pozo on Miramar",
      action: "visit"
    },
    "MISSION:410029": {
      description: "Drop into Paradise Resort on Sanhok",
      action: "visit"
    },
    "MISSION:410030": {
      description: "Drop into Goroka on Vikendi",
      action: "visit"
    },
    "MISSION:410031": {
      description: "Fire 30 rounds of an M16A4 in a single match",
      action: "gun_use"
    },
    "MISSION:410032": {
      description: "Fire 25 rounds of a Micro UZI in a single match",
      action: "gun_use"
    },
    "MISSION:410033": {
      description: "Fire 19 rounds of a Vector in a single match",
      action: "gun_use"
    },
    "MISSION:410034": {
      description: "Fire 2 shells of an S686 in a single match",
      action: "gun_use"
    },
    "MISSION:410035": {
      description: "Fire 15 rounds of a P92 in a single match",
      action: "gun_use"
    },
    "MISSION:410036": {
      description: "Fire 20 rounds of a Skorpion in a single match",
      action: "gun_use"
    },
    "MISSION:411001": {
      description: "Survive for 40 minutes",
      action: "general"
    },
    "MISSION:411002": {
      description: "Survive for 20 minutes in Solo",
      action: "general"
    },
    "MISSION:411003": {
      description: "Survive for 30 minutes in Duos",
      action: "general"
    },
    "MISSION:411004": {
      description: "Survive for 30 minutes in Squads",
      action: "general"
    },
    "MISSION:411005": {
      description: "Reach top 40 in Solo",
      action: "goodskill"
    },
    "MISSION:411006": {
      description: "Reach top 15 in Duos",
      action: "goodskill"
    },
    "MISSION:411007": {
      description: "Reach top 8 in Squads",
      action: "goodskill"
    },
    "MISSION:411008": {
      description: "Deal 150 damage to enemies",
      action: "damage"
    },
    "MISSION:411009": {
      description: "Travel 400 m in any vehicle",
      action: "move"
    },
    "MISSION:411010": {
      description: "Revive teammates 2 times",
      action: "revive"
    },
    "MISSION:411011": {
      description: "Destroy 2 vests of enemies",
      action: "destroy"
    },
    "MISSION:411012": {
      description: "Destroy 2 helmets of enemies",
      action: "destroy"
    },
    "MISSION:411013": {
      description: "Drink 3 Energy Drinks",
      action: "item_use"
    },
    "MISSION:411014": {
      description: "Use 2 Painkillers",
      action: "item_use"
    },
    "MISSION:411015": {
      description: "Use 1 Adrenaline Syringe",
      action: "item_use"
    },
    "MISSION:411016": {
      description: "Use 7 Bandages",
      action: "item_use"
    },
    "MISSION:411017": {
      description: "Use 3 First Aid Kits",
      action: "item_use"
    },
    "MISSION:411018": {
      description: "Use 1 Med Kit",
      action: "item_use"
    },
    "MISSION:411019": {
      description: "Use 2 Gas Cans to refuel a vehicle",
      action: "item_use"
    },
    "MISSION:411020": {
      description: "Get 3 kills",
      action: "kill"
    },
    "MISSION:411021": {
      description: "Get 2 kills in a single match",
      action: "kill"
    },
    "MISSION:411022": {
      description: "Get 2 kills using an AR ",
      action: "kill"
    },
    "MISSION:411023": {
      description: "Get 2 kills using a DMR",
      action: "kill"
    },
    "MISSION:411024": {
      description: "Get 1 kill using Molotovs Cocktails",
      action: "kill"
    },
    "MISSION:411025": {
      description: "Get 1 kill using a handgun",
      action: "kill"
    },
    "MISSION:411026": {
      description: "Get 2 kills using a shotgun",
      action: "kill"
    },
    "MISSION:411027": {
      description: "Get 2 kills using an SMG",
      action: "kill"
    },
    "MISSION:411028": {
      description: "Get 2 kills using an SR/DMR",
      action: "kill"
    },
    "MISSION:411029": {
      description: "Kill 2 enemies with headshots",
      action: "kill"
    },
    "MISSION:411030": {
      description: "Loot 12 items from player deathboxes",
      action: "item_pick"
    },
    "MISSION:411031": {
      description: "Loot 3 items from carepackages",
      action: "item_pick"
    },
    "MISSION:411032": {
      description: "Kill 2 enemies within 50 meters of you",
      action: "kill"
    },
    "MISSION:411033": {
      description: "Kill 1 enemy from over 100 meters away",
      action: "kill"
    },
    "MISSION:411034": {
      description: "Pick up 20 items in a single match",
      action: "item_pick"
    },
    "MISSION:412001": {
      description: "Survive for 80 minutes",
      action: "general"
    },
    "MISSION:412002": {
      description: "Survive for 30 minutes in Solo",
      action: "general"
    },
    "MISSION:412003": {
      description: "Survive for 60 minutes in Duos",
      action: "general"
    },
    "MISSION:412004": {
      description: "Survive for 60 minutes in Squads",
      action: "general"
    },
    "MISSION:412005": {
      description: "Reach top 20 in Solo",
      action: "goodskill"
    },
    "MISSION:412006": {
      description: "Reach top 5 in Duos",
      action: "goodskill"
    },
    "MISSION:412007": {
      description: "Reach top 4 in Squads",
      action: "goodskill"
    },
    "MISSION:412008": {
      description: "Deal 500 damage to enemies",
      action: "damage"
    },
    "MISSION:412009": {
      description: "Travel 1000 m in any vehicle",
      action: "move"
    },
    "MISSION:412010": {
      description: "Revive teammates 4 times",
      action: "revive"
    },
    "MISSION:412011": {
      description: "Destroy 5 vests of enemies",
      action: "destroy"
    },
    "MISSION:412012": {
      description: "Destroy 4 helmets of enemies",
      action: "destroy"
    },
    "MISSION:412013": {
      description: "Drink 7 Energy Drinks",
      action: "item_use"
    },
    "MISSION:412014": {
      description: "Use 5 Painkillers",
      action: "item_use"
    },
    "MISSION:412015": {
      description: "Use 2 Adrenaline Syringes",
      action: "item_use"
    },
    "MISSION:412016": {
      description: "Use 15 Bandages",
      action: "item_use"
    },
    "MISSION:412017": {
      description: "Use 7 First Aid Kits",
      action: "item_use"
    },
    "MISSION:412018": {
      description: "Use 2 Med Kits",
      action: "item_use"
    },
    "MISSION:412019": {
      description: "Use 3 Gas Cans to refuel a vehicle",
      action: "item_use"
    },
    "MISSION:412020": {
      description: "Get 8 kills",
      action: "kill"
    },
    "MISSION:412021": {
      description: "Get 2 kills in a single match",
      action: "kill"
    },
    "MISSION:412022": {
      description: "Get 3 kills in a single match ",
      action: "kill"
    },
    "MISSION:412023": {
      description: "Get 4 kills in a single match ",
      action: "kill"
    },
    "MISSION:412024": {
      description: "Get 6 kills using an AR ",
      action: "kill"
    },
    "MISSION:412025": {
      description: "Get 1 kill using a Crossbow",
      action: "kill"
    },
    "MISSION:412026": {
      description: "Get 3 kills using a DMR",
      action: "kill"
    },
    "MISSION:412027": {
      description: "Get 1 kill using a melee weapon",
      action: "kill"
    },
    "MISSION:412028": {
      description: "Get 1 kill using Molotov Cocktails",
      action: "kill"
    },
    "MISSION:412029": {
      description: "Get 1 kill using a handgun",
      action: "kill"
    },
    "MISSION:412030": {
      description: "Get 3 kills using a shotgun",
      action: "kill"
    },
    "MISSION:412031": {
      description: "Get 3 kills using an SMG",
      action: "kill"
    },
    "MISSION:412032": {
      description: "Get 2 kills using an SR",
      action: "kill"
    },
    "MISSION:412033": {
      description: "Get 3 kills using an SR/DMR",
      action: "kill"
    },
    "MISSION:412034": {
      description: "Kill 3 enemies with headshots",
      action: "kill"
    },
    "MISSION:412035": {
      description: "Loot 30 items from player deathboxes",
      action: "item_pick"
    },
    "MISSION:412036": {
      description: "Loot 3 items from carepackages",
      action: "item_pick"
    },
    "MISSION:412037": {
      description: "Kill an enemy from over 200 meters away using an SR",
      action: "kill"
    },
    "MISSION:412038": {
      description: "Kill 5 enemies from within 50 meters of you",
      action: "kill"
    },
    "MISSION:412039": {
      description: "Kill 2 enemies from over 100 meters away",
      action: "kill"
    },
    "MISSION:412040": {
      description: "Pick up 50 items in a single match",
      action: "item_pick"
    },
    "MISSION:420001": {
      description: "Loot 150 items from player deathboxes",
      action: "item_pick"
    },
    "MISSION:420002": {
      description: "Travel 5000 m in any vehicle",
      action: "move"
    },
    "MISSION:420003": {
      description: "Get 30 kills",
      action: "kill"
    },
    "MISSION:420004": {
      description: "Get 15 kills using an SMG",
      action: "kill"
    },
    "MISSION:420005": {
      description: "Get 3 kills using a melee weapon",
      action: "kill"
    },
    "MISSION:420006": {
      description: "Kill 8 enemies from over 100 meters away",
      action: "kill"
    },
    "MISSION:420007": {
      description: "Get 3 kills using Molotov Cocktails",
      action: "kill"
    },
    "MISSION:420008": {
      description: "Get 5 kills using a weapon equipped with a 2x Scope",
      action: "kill"
    },
    "MISSION:420009": {
      description: "Get at least 1 kill in a single match",
      action: "kill"
    },
    "MISSION:420010": {
      description: "Get 5 kills in a single match",
      action: "kill"
    },
    "MISSION:420011": {
      description: "Get 1 kill using a Crossbow",
      action: "kill"
    },
    "MISSION:420012": {
      description: "Destroy 15 vests of enemies",
      action: "destroy"
    },
    "MISSION:420013": {
      description: "Use 3 Med Kits",
      action: "item_use"
    },
    "MISSION:420014": {
      description: "Use 50 Bandages",
      action: "item_use"
    },
    "MISSION:420015": {
      description: "Use 20 First Aid Kits",
      action: "item_use"
    },
    "MISSION:420016": {
      description: "Heal 200 health in a single match",
      action: "item_use"
    },
    "MISSION:420017": {
      description: "Use a Bandage, First Aid Kit, and Med Kit in a single match",
      action: "item_use"
    },
    "MISSION:420018": {
      description: "Revive teammates 3 times in a single match",
      action: "revive"
    },
    "MISSION:420019": {
      description: "Survive for at least 15 minutes",
      action: "general"
    },
    "MISSION:420020": {
      description: "Complete a match without using any healing/boost items and survive at least 7 minutes",
      action: "general"
    },
    "MISSION:420021": {
      description: "Complete a match without taking any damage from the blue zone and survive at least 10 minutes",
      action: "general"
    },
    "MISSION:420022": {
      description: "Reach top 10 in Solo",
      action: "goodskill"
    },
    "MISSION:420023": {
      description: "Reach top 25 in Solo",
      action: "goodskill"
    },
    "MISSION:420024": {
      description: "Reach top 15 in Duos",
      action: "goodskill"
    },
    "MISSION:420025": {
      description: "Win a chicken dinner in Squads",
      action: "goodskill"
    },
    "MISSION:420026": {
      description: "Reach top 7 in Squads",
      action: "goodskill"
    },
    "MISSION:421001": {
      description: "Loot 10 items from carepackages",
      action: "item_pick"
    },
    "MISSION:421002": {
      description: "Pick up 50 items in a single match",
      action: "item_pick"
    },
    "MISSION:421003": {
      description: "Jump in the water and swim 300 meters",
      action: "move"
    },
    "MISSION:421004": {
      description: "Travel at least 500 meters by parachute in a single match",
      action: "move"
    },
    "MISSION:421005": {
      description: "Kill 10 enemies with headshots",
      action: "kill"
    },
    "MISSION:421006": {
      description: "Kill 20 enemies within 50 meters of you",
      action: "kill"
    },
    "MISSION:421007": {
      description: "Get 20 kills using an AR ",
      action: "kill"
    },
    "MISSION:421008": {
      description: "Get 4 kills with Frag Grenades",
      action: "kill"
    },
    "MISSION:421009": {
      description: "Get 3 kills using a handgun",
      action: "kill"
    },
    "MISSION:421010": {
      description: "Get 2 kills using a Pan",
      action: "kill"
    },
    "MISSION:421011": {
      description: "Get 7 kills with a weapon equipped with a 4x Scope",
      action: "kill"
    },
    "MISSION:421012": {
      description: "Kill an enemy with a headshot at least once per match",
      action: "kill"
    },
    "MISSION:421013": {
      description: "Get 3 kills in a single match",
      action: "kill"
    },
    "MISSION:421014": {
      description: "Headshot an enemy and use an Adrenaline Syringe in the same match",
      action: "item_use"
    },
    "MISSION:421015": {
      description: "Kill 2 enemies from over 200 meters away using an SR",
      action: "kill"
    },
    "MISSION:421016": {
      description: "Get 1 roadkill using a vehicle",
      action: "kill"
    },
    "MISSION:421017": {
      description: "Destroy 10 helmets of enemies",
      action: "destroy"
    },
    "MISSION:421018": {
      description: "Deal 500 damage to enemies in a single match",
      action: "damage"
    },
    "MISSION:421019": {
      description: "Heal 2500 health",
      action: "item_use"
    },
    "MISSION:421020": {
      description: "Use 4 Gas Cans to refuel a vehicle",
      action: "item_use"
    },
    "MISSION:421021": {
      description: "Drink 30 Energy Drinks",
      action: "item_use"
    },
    "MISSION:421022": {
      description: "Use 50 healing or boost items",
      action: "item_use"
    },
    "MISSION:421023": {
      description: "Use 30 Painkillers",
      action: "item_use"
    },
    "MISSION:421024": {
      description: "Throw 7 Frag Grenades in a single match",
      action: "item_use"
    },
    "MISSION:421025": {
      description: "Use an Energy drink, Painkiller and Adrenaline Syringe in a single match",
      action: "item_use"
    },
    "MISSION:421026": {
      description: "Revive teammates 10 times",
      action: "revive"
    },
    "MISSION:421027": {
      description: "Revive a teammate and be revived once in a single match",
      action: "revive"
    },
    "MISSION:421028": {
      description: "Survive for at least 10 minutes",
      action: "general"
    },
    "MISSION:421029": {
      description: "Complete a match without killing anyone with an SR/DMRand survive at least 10 minutes",
      action: "general"
    },
    "MISSION:421030": {
      description: "Complete a match without dealing damage to enemies and survive at least 10 minutes",
      action: "general"
    },
    "MISSION:421031": {
      description: "Complete a match without using any first aid kits and survive at least 5 minutes",
      action: "general"
    },
    "MISSION:421032": {
      description: "Win a chicken dinner in Solo",
      action: "goodskill"
    },
    "MISSION:421033": {
      description: "Reach top 5 in Solo",
      action: "goodskill"
    },
    "MISSION:421034": {
      description: "Win a chicken dinner in Duos",
      action: "goodskill"
    },
    "MISSION:421035": {
      description: "Reach top 2 in Duos",
      action: "goodskill"
    },
    "MISSION:421036": {
      description: "Reach top 2 in Squads",
      action: "goodskill"
    },
    "MISSION:421037": {
      description: "Reach top 4 in Squads",
      action: "goodskill"
    },
    "MISSION:421038": {
      description: "Reach top 5 in Squads",
      action: "goodskill"
    },
    "MISSION:440001": {
      description: "Complete a match without using any healing/boost items and reach top 15",
      action: "goodskill"
    },
    "MISSION:440002": {
      description: "Complete a match without using any healing/boost items, get at least 1 kill and reach top 10",
      action: "goodskill"
    },
    "MISSION:440003": {
      description: "Get 2 kills in a single match using a weapon equipped with a 2x Scope",
      action: "kill"
    },
    "MISSION:440004": {
      description: "Get 3 kills in a single match using a weapon equipped with a 4x Scope",
      action: "kill"
    },
    "MISSION:440005": {
      description: "Kill 5 enemies from over 200 meters away",
      action: "kill"
    },
    "MISSION:440006": {
      description: "Kill 2 enemies with headshots from over 200 meters away in a single match",
      action: "kill"
    },
    "MISSION:440007": {
      description: "Play 45 matches",
      action: "general"
    },
    "MISSION:440008": {
      description: "Survive for 600 minutes",
      action: "general"
    },
    "MISSION:440009": {
      description: "Kill 10 enemies within 10 meters of you",
      action: "kill"
    },
    "MISSION:440010": {
      description: "Get 10 kills using a handgun",
      action: "kill"
    },
    "MISSION:450001": {
      description: "Prove yourself ready for the Tommy Gun Challenges by reaching top 10 and getting a kill with a Tommy Gun",
      action: "goodskill"
    },
    "MISSION:450002": {
      description: "Deal 500 damage to enemies with a Tommy Gun",
      action: "damage"
    },
    "MISSION:450003": {
      description: "Get 2 kills with a Tommy Gun in a single match",
      action: "kill"
    },
    "MISSION:450004": {
      description: "Get 20 kills with a Tommy Gun",
      action: "kill"
    },
    "MISSION:450005": {
      description: "Get 5 kills with a Tommy Gun in a single match",
      action: "kill"
    },
    "MISSION:451001": {
      description: "Prove yourself ready for the Beryl M762 Challenges by reaching top 8 and getting a kill with a Beryl M762",
      action: "goodskill"
    },
    "MISSION:451002": {
      description: "Deal 800 damage to enemies with a Beryl M762",
      action: "damage"
    },
    "MISSION:451003": {
      description: "Reach top 5 and get a kill with a Beryl M762",
      action: "goodskill"
    },
    "MISSION:451004": {
      description: "Get 20 kills with a Beryl M762",
      action: "kill"
    },
    "MISSION:451005": {
      description: "Win a chicken dinner and get a kill with a Beryl M762",
      action: "goodskill"
    },
    "MISSION:451006": {
      description: "Get 5 kills with a Beryl M762 in a single match",
      action: "kill"
    },
    "MISSION:452001": {
      description: "Prove yourself ready for the S686 Challenges by reaching top 7 and getting a kill with an S686",
      action: "goodskill"
    },
    "MISSION:452002": {
      description: "Deal 1000 damage to enemies with an S686",
      action: "damage"
    },
    "MISSION:452003": {
      description: "Reach top 5 and get a kill with an S686",
      action: "goodskill"
    },
    "MISSION:452004": {
      description: "Get 2 kills with an S686 in a single match",
      action: "kill"
    },
    "MISSION:452005": {
      description: "Win a chicken dinner and get a kill with a S686",
      action: "goodskill"
    },
    "MISSION:452006": {
      description: "Get 25 kills with an S686",
      action: "kill"
    },
    "MISSION:452007": {
      description: "Get 4 kills with an S686 in a single match",
      action: "kill"
    },
    "MISSION:453001": {
      description: "Prove yourself ready for the UMP45 Challenges by reaching top 5 and getting a kill with a UMP45",
      action: "goodskill"
    },
    "MISSION:453002": {
      description: "Deal 1000 damage to enemies with a UMP45",
      action: "damage"
    },
    "MISSION:453003": {
      description: "Get 3 kills with a UMP45 in a single match",
      action: "kill"
    },
    "MISSION:453004": {
      description: "Win a chicken dinner and get a kill with a UMP45",
      action: "goodskill"
    },
    "MISSION:453005": {
      description: "Get 30 kills with a UMP45",
      action: "kill"
    },
    "MISSION:453006": {
      description: "Get 4 kills with a UMP45 in a single match",
      action: "kill"
    },
    "MISSION:453007": {
      description: "Deal 2000 damage to enemies with a UMP45",
      action: "damage"
    },
    "MISSION:453008": {
      description: "Get 5 kills with a UMP45 in a single match",
      action: "kill"
    },
    "MISSION:454001": {
      description: "Prove yourself ready for the M16A4 Challenges by reaching top 5 and getting a kill with an M16A4",
      action: "goodskill"
    },
    "MISSION:454002": {
      description: "Deal 1500 damage to enemies with an M16A4",
      action: "damage"
    },
    "MISSION:454003": {
      description: "Get 3 kills with an M16A4 in a single match",
      action: "kill"
    },
    "MISSION:454004": {
      description: "Reach top 3 and get a kill with an M16A4",
      action: "goodskill"
    },
    "MISSION:454005": {
      description: "Win a chicken dinner and get a kill with an M16A4",
      action: "goodskill"
    },
    "MISSION:454006": {
      description: "Get 50 kills with an M16A4",
      action: "kill"
    },
    "MISSION:454007": {
      description: "Get 4 kills with an M16A4 in a single match",
      action: "kill"
    },
    "MISSION:454008": {
      description: "Deal 3000 damage to enemies with an M16A4",
      action: "damage"
    },
    "MISSION:454009": {
      description: "Reach top 2 and get a kill with an M16A4",
      action: "goodskill"
    },
    "MISSION:454010": {
      description: "Get 6 kills with an M16A4 in a single match",
      action: "kill"
    },
    "MISSION:460001": {
      description: "Play a Solo match using the Quick Join option",
      action: "outgame"
    },
    "MISSION:460003": {
      description: "Enter the Training Mode",
      action: "outgame"
    },
    "MISSION:460004": {
      description: "Purchase an item from the Store",
      action: "outgame"
    },
    "MISSION:460005": {
      description: "Purchase a random crate from the Store",
      action: "outgame"
    },
    "MISSION:460006": {
      description: "Equip a weapon skin under the Customize > Weapons tab",
      action: "outgame"
    },
    "MISSION:460007": {
      description: "Read the Patch Notes by clicking the note icon at the top right of the lobby",
      action: "outgame"
    },
    "MISSION:460008": {
      description: "Customize the emote wheel from the Customize > Emotes tab",
      action: "outgame"
    },
    "MISSION:460009": {
      description: "Replace a daily mission",
      action: "outgame"
    },
    "MISSION:460010": {
      description: "Equip a new outfit under the Customize > Wardrobe tab",
      action: "outgame"
    },
    "MISSION:460011": {
      description: "Use DROP IN SUPPLY from the Survivor Pass screen to claim a coupon",
      action: "outgame"
    }
  },
  damagestats: {
    Melee: {
      head: 150,
      body: 100,
      armsandlegs: 120
    },
    Handgun: {
      head: 200,
      body: 100,
      armsandlegs: 100
    },
    Shotgun: {
      head: 150,
      body: 100,
      armsandlegs: 90
    },
    SubMachinegun: {
      head: 180,
      body: 100,
      armsandlegs: 125
    },
    LightMachinegun: {
      head: 230,
      body: 100,
      armsandlegs: 90
    },
    AssaultRifle: {
      head: 235,
      body: 100,
      armsandlegs: 90
    },
    DMR: {
      head: 235,
      body: 105,
      armsandlegs: 95
    },
    SniperRifle: {
      head: 250,
      body: 110,
      armsandlegs: 95
    },
    Crossbow: {
      head: 230,
      body: 100,
      armsandlegs: 100
    },
  },
  mapName: {
    "Desert_Main": "Miramar",
    "DihorOtok_Main": "Vikendi",
    "Erangel_Main": "Erangel",
    "Range_Main": "Training",
    "Savage_Main": "Sanhok" 
  }
  
}


