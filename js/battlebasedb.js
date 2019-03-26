var PUBGITEMS = {
  equipment: {
    utilitybelt: {
      "item": "utilitybelt",
      "name": "Utility Belt",
      "i18n": "UtilityBelt",
      "type": "Storage",
      "icon": "Item_equipment_Belt_D_01",
      "bonus": "Capacity",
      "bonusValue": "+50",
      "desc": "The Utility Belt is a belt inventory item that increases inventory space.",
      "i18desc": "UtilityBeltDesc"
    },
    backpack1: {
      "item": "backpack1",
      "name": "Backpack (Level 1)",
      "i18n": "Backpack1",
      "type": "Storage",
      "icon": "Item_equipment_Back_E_01",
      "icon2": "Item_equipment_Back_E_02",
      "bonus": "Capacity",
      "bonusValue": "+150",
      "desc": "The Backpack (Lv.1) is a storage piece of equipment that allows for a light amount of item storage, increasing your inventory.",
      "i18desc": "BackpackLv1Desc",
    },
    backpack2: {
      "item": "backpack2",
      "name": "Backpack (Level 2)",
      "i18n": "Backpack2",
      "type": "Storage",
      "icon": "Item_equipment_Back_F_01",
      "icon2": "Item_equipment_Back_F_02",
      "bonus": "Capacity",
      "bonusValue": "+200",
      "desc": "The Backpack (Lv.2) is a storage piece of equipment that allows for a medium amount of item storage, increasing your inventory.",
      "i18desc": "BackpackLv2Desc",
    },
    backpack3: {
      "item": "backpack3",
      "name": "Backpack (Level 3)",
      "i18n": "Backpack3",
      "type": "Storage",
      "icon": "Item_equipment_Back_C_01",
      "icon2": "Item_equipment_Back_C_02",
      "carepackage": "yes",
      "bonus": "Capacity",
      "bonusValue": "+250",
      "desc": "The Backpack (Lv.3) is a storage piece of equipment that allows for a significant amount of item storage, increasing your inventory by +250 capacity.",
      "i18desc": "BackpackLv3Desc",
    },
    helmet1: {
      "item": "helmet1",
      "name": "Motorcycle Helmet (Level 1)",
      "i18n": "Helmet1",
      "type": "Helmet",
      "icon": "Item_Head_E_01_Lv1_C",
      "icon2": "Item_Head_E_02_Lv1_C",
      "icontext": "green",
      "icontexti18": "green",
      "icontext2": "grey",
      "icontext2i18": "grey",
      "bonus": "Damage Reduction",
      "bonusValue": "30%",
      "bonus2": "Durability",
      "bonus2Value": "80",
      "desc": ""
    },
    helmet2: {
      "item": "helmet2",
      "name": "Military Helmet (Level 2)",
      "i18n": "Helmet1",
      "type": "Helmet",
      "icon": "Item_Head_F_01_Lv2_C",
      "icon2": "Item_Head_F_02_Lv2_C",
      "icontext": "desert camo",
      "icontexti18": "DesertCamo",
      "icontext2": "Woodland Camo",
      "icontext2i18": "WoodlandCamo",
      "bonus": "Damage Reduction",
      "bonusValue": "40%",
      "bonus2": "Durability",
      "bonus2Value": "150",
      "desc": ""
    },
    helmet3: {
      "item": "helmet2",
      "name": "Spetsnaz Helmet (Level 3)",
      "i18n": "Helmet1",
      "type": "Helmet",
      "icon": "Item_Head_G_01_Lv3_C",
      "icontext": "desert camo",
      "icontexti18": "DesertCamo",
      "icontext2": "Woodland Camo",
      "icontext2i18": "WoodlandCamo",
      "carepackage": "yes",
      "bonus": "Damage Reduction",
      "bonusValue": "55%",
      "bonus2": "Durability",
      "bonus2Value": "230",
      "desc": ""
    },
    vest1: {
      "item": "vest1",
      "name": "Police Vest (Level 2)",
      "i18n": "PoliceVest1",
      "type": "Armor",
      "icon": "Item_Armor_E_01_Lv1_C",
      "bonus": "Damage Reduction",
      "bonusValue": "30%",
      "bonus2": "Durability",
      "bonus2Value": "200",
      "desc": ""
    },
    vest2: {
      "item": "vest2",
      "name": "Police Vest (Level 2)",
      "i18n": "PoliceVest1",
      "type": "Armor",
      "icon": "Item_Armor_D_01_Lv2_C",
      "bonus": "Damage Reduction",
      "bonusValue": "40%",
      "bonus2": "Durability",
      "bonus2Value": "220",
      "capacity": "+50",
      "desc": ""
    },
    vest3: {
      "item": "vest3",
      "name": "Military Vest (Level 3)",
      "i18n": "MilitaryVest",
      "type": "Armor",
      "icon": "Item_Armor_D_01_Lv2_C",
      "bonus": "Damage Reduction",
      "bonusValue": "55%",
      "bonus2": "Durability",
      "bonus2Value": "250",
      "capacity": "+50",
      "desc": ""
    },
  },
  consumables: {
    medkit: {
      "item": "medkit",
      "name": "MedKit",
      "i18n": "MedKit",
      "icon": "Item_Heal_MedKit_C",
      "type": "Heal",
      "bonus": "Heal",
      "bonusValue": "100",
      "quantity": "single",
      "usetime": "8",
      "weight": "20",
      "order": "999",
      "desc": "Heals a player's health to 100 instantly. Performing certain actions while using this item will cancel it.",
      "i18desc": "MedKitDesc"
    },
    firstaidkit: {
      "item": "firstaidkit",
      "name": "First Aid Kit",
      "i18n": "FirstAidKit",
      "icon": "Item_Heal_FirstAid_C",
      "type": "Heal",
      "bonus": "Heal",
      "bonusValue": "75",
      "usetime": "6",
      "weight": "10",
      "order": "998",
      "desc": "Heals a player's health by 10 over time. Performing certain actions while using this item will cancel it. This item cannot be used when a player's health is over 75.",
      "i18desc": "FirstAidKitDesc"
    },
    bandage: {
      "item": "bandage",
      "name": "Bandage",
      "i18n": "Bandage",
      "icon": "Item_Heal_Bandage_C",
      "type": "Heal",
      "bonus": "Heal",
      "bonusValue": "10",
      "usetime": "4",
      "weight": "2",
      "order": "997",
      "desc": "After certain amount of time, Bandage heals character's health up to 10 overtime. performing certain actions whil casting this item can cancel the effect. Cannot heal character's health over 75.",
      "i18desc": "BandageDesc"
    },
    adrenalinesyringe: {
      "item": "adrenaline",
      "name": "Adrenaline Syringe",
      "i18n": "AdrenalineSyringe",
      "icon": "Item_Boost_AdrenalineSyringe_C",
      "type": "Boost",
      "bonus": "Boost",
      "carepackage": "yes",
      "bonusValue": "100%",
      "usetime": "6",
      "duration": "5 min",
      "totalHeal": "86%",
      "bonusSpeed": "+ 6.2%",
      "weight": "20",
      "order": "989",
      "bonusbar": "booster-bar",
      "bartype": ["heal boost", "b100"],
      "desc": "Increases a player's boost by 100 instantly. Performing certain actions while using this item will cancel it. Boosted players can run faster and fully heal over time."
    },
    painkiller: {
      "item": "painkiller",
      "name": "Painkiller",
      "i18n": "Painkiller",
      "icon": "Item_Boost_PainKiller_C",
      "type": "Boost",
      "bonus": "Boost",
      "bonusValue": "60%",
      "usetime": "6",
      "duration": "3 min",
      "totalHeal": "40%",
      "weight": "10",
      "order": "988",
      "bonusbar": "booster-bar",
      "bartype": ["heal", "b60"],
      "desc": "Increases a player's boost by 60 instantly. Performing certain actions while using this item will cancel it. Boosted players can run faster and fully heal over time.",
      "i18desc": "PainkillerDesc"
    },
    energydrink: {
      "item": "energydrink",
      "name": "Energy Drink",
      "i18n": "EnergyDrink",
      "icon": "Item_Boost_EnergyDrink_C",
      "type": "Boost",
      "bonus": "Boost",
      "bonusValue": "40%",
      "usetime": "4",
      "duration": "2 min",
      "totalHeal": "23%",
      "weight": "4",
      "order": "987",
      "bonusbar": "booster-bar",
      "bartype": ["heal", "b40"],
      "desc": "Increases a player's boost by 40 instantly. Performing certain actions while using this item will cancel it. Boosted players can run faster and fully heal over time."
    },
    gascan: {
      "item": "gascan",
      "name": "Gas Can",
      "i18n": "GasCan",
      "icon": "Item_JerryCan_C",
      "type": "Fuel",
      "bonus": "Fuel",
      "bonusValue": "40%",
      "usetime": "3",
      "quantity": "single",
      "weight": "20",
      "order": "979",
      "desc": "Fills up a vehicle's gas tank instantly.",
      "i18desc": "GasCanDesc"
    }
  },
  sights: {
    scope15x: {
      "item": "scope15x",
      "name": "15x Scope",
      "icon": "Item_Attach_Weapon_Upper_PM2_01_C",
      "weight": "20",
      "order": "888",
      "desc": "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      "attweapons": ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    scope6x: {
      "item": "scope6x",
      "name": "6x Scope",
      "icon": "Item_Attach_Weapon_Upper_Scope6x_C",
      "weight": "20",
      "order": "887",
      "desc": "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      "attweapons": ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    scope8x: {
      "item": "scope8x",
      "name": "8x Scope",
      "icon": "Item_Attach_Weapon_Upper_CQBSS_C",
      "weight": "20",
      "order": "887",
      "desc": "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      "attweapons": ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    scope2x: {
      "item": "scope2x",
      "name": "2x Scope",
      "icon": "Item_Attach_Weapon_Upper_Aimpoint_C",
      "weight": "15",
      "order": "886",
      "desc": "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14 QBU, SKS, SLR, Crossbow",
      "attweapons": ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14 QBU", "SKS", "SLR", "Crossbow"]
    },
    scope3x: {
      "item": "scope3x",
      "name": "3x Scope",
      "icon": "Item_Attach_Weapon_Upper_Scope3x_C",
      "weight": "15",
      "order": "886",
      "desc": "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      "attweapons": ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    scope4x: {
      "item": "scope4x",
      "name": "4x Scope",
      "icon": "Item_Attach_Weapon_Upper_ACOG_01_C",
      "weight": "15",
      "order": "886",
      "desc": "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      "attweapons": ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    reddot: {
      "item": "reddot",
      "name": "Red Dot sight",
      "icon": "Item_Attach_Weapon_Upper_DotSight_01_C",
      "weight": "10",
      "order": "885",
      "desc": "Attachable weapons: MP5K, P18C, P1911, P92, R45, Skorpion, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      "attweapons": ["MP5K", "P18C", "P1911", "P92", "R45", "Skorpion", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    holographic: {
      "item": "holographic",
      "name": "Red Dot sight",
      "icon": "Item_Attach_Weapon_Upper_DotSight_01_C",
      "weight": "10",
      "order": "885",
      "desc": "Attachable weapons: MP5K, P18C, P1911, P92, R45, Skorpion, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, DP-28, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR, Crossbow",
      "attweapons": ["MP5K", "P18C", "P1911", "P92", "R45", "Skorpion", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "DP28", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "Crossbow"]
    },
    cantedsight: {
      "item": "cantedsight",
      "name": "Red Dot sight",
      "icon": "Item_Attach_Weapon_SideRail_DotSight_RMR_C",
      "weight": "10",
      "order": "885",
      "desc": "Attachable weapons: MP5K, PP-19 Bizon, UMP45, Vector, S12K, AKM, AUG, Beryl M762, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, M249, AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      "attweapons": ["MP5K", "Bizon", "UMP45", "Vector", "S12K", "AKM", "AUG", "BerylM762", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "M249", "AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    emptysight: {
      "sight": "emptysight",
      "name": "Empty",
      "icon": "empty",
      "desc": "Empty",
      "attweapons": []
    },
  },
  attachments: {
    ammoloops: {
      "item": "bulletloops",
      "name": "Bullet Loops (SG, Win94, Kar98k)",
      "icon": "Item_Attach_Weapon_Stock_SniperRifle_BulletLoops_C",
      "weight": "880",
      "order": "8",
      "quantity": "single",
      "bonuses": ["+ Reload Speed"],
      "desc": "+ Reload speed",
      "unique": "stock",
      "attweapons": ["S1897", "S686", "Kar98k", "Win94"]
    },
    cheekpad: {
      "item": "cheekpad",
      "name": "Cheek Pad (DMR, SR)",
      "icon": "Item_Attach_Weapon_Stock_SniperRifle_CheekPad_C",
      "weight": "17",
      "order": "880",
      "quantity": "single",
      "bonuses": ["++ Vertical recoil control", "++ Weapon stability after shot", "+ Weapon steadiness"],
      "desc": "Attachable weapons: AWM, Kar98k, M24, Mk14, SKS, SLR, VSS",
      "unique": "stock",
      "attweapons": ["AWM", "Kar98k", "M24", "Mk14", "SKS", "SLR", "VSS"]
    },
    stockmicrouzi: {
      "item": "stockmicrouzi",
      "name": "Folding Stock (Skorpion, Micro UZI)",
      "icon": "Item_Attach_Weapon_Stock_UZI_C",
      "weight": "10",
      "order": "820",
      "quantity": "single",
      "bonuses": ["+ Recoil recovery", "+ Weapon steadiness"],
      "desc": "Attachable weapon: Skorpion, Micro UZI",
      "unique": "stock",
      "attweapons": ["Skorpion", "MicroUZI"]
    },
    tacticalstock: {
      "item": "tacticalstock",
      "name": "Tactical Stock (SMG, AR)",
      "icon": "Item_Attach_Weapon_Stock_AR_Composite_C",
      "weight": "12",
      "order": "870",
      "quantity": "single",
      "bonuses": ["+ Recoil recovery", "+ Weapon stability after shot", "+ ADS speed", "+ Weapon steadiness"],
      "desc": "Attachable weapons: MP5K, Vector, M16A4, M416, Mk47 Mutant",
      "unique": "stock",
      "attweapons": ["MP5K", "Vector", "M16A4", "M416", "Mk47Mutant"]
    },
    extquickdrawmagmedium: {
      "item": "extquickdrawmagmedium",
      "name": "Ext.Quickdraw Mag (Handgun, SMG)",
      "icon": "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Medium_C",
      "weight": "17",
      "order": "860",
      "quantity": "single",
      "bonuses": ["+ Reload speed", "+ Magazine capacity"],
      "desc": "Attachable weapons: P18C, P1911, P92, Micro UZI, MP5K, Tommy Gun, UMP45, Vector",
      "unique": "mag",
      "attweapons": ["P18C", "P1911", "P92", "MicroUZI", "MP5K", "TommyGun", "UMP45", "Vector"]
    },
    extmagmedium: {
      "item": "extmagmedium",
      "name": "Extended Mag (Handgun, SMG)",
      "icon": "Item_Attach_Weapon_Magazine_Extended_Medium_C",
      "weight": "13",
      "order": "860",
      "quantity": "single",
      "bonuses": ["+ Magazine capacity"],
      "desc": "Attachable weapons: P18C, P1911, P92, Skorpion, Micro UZI, MP5K, Tommy Gun, UMP45, Vector",
      "unique": "mag",
      "attweapons": ["P18C", "P1911", "P92", "Skorpion", "MicroUZI", "MP5K", "Tommy Gun", "UMP45", "Vector"]
    },
    quickdrawmedium: {
      "item": "quickdrawmedium",
      "name": "QuickDraw Mag (Handgun, SMG)",
      "icon": "Item_Attach_Weapon_Magazine_QuickDraw_Medium_C",
      "weight": "12",
      "order": "860",
      "quantity": "single",
      "bonuses": ["+ Reload speed"],
      "desc": "Attachable weapons: P18C, P1911, P92, Micro UZI, MP5K, Tommy Gun, UMP45, Vector",
      "unique": "mag",
      "attweapons": ["P18C", "P1911", "P92", "MicroUZI", "MP5K", "Tommy Gun", "UMP45", "Vector"]
    },
    extquickdrawmaglarge: {
      "item": "extquickdrawmaglarge",
      "name": "Ext.QuickDraw Mag (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Magazine_QuickDraw_Large_C",
      "weight": "20",
      "order": "870",
      "quantity": "single",
      "bonuses": ["+ Reload speed", "+ Magazine capacity"],
      "desc": "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR, VSS",
      "unique": "mag",
      "attweapons": ["S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    extmaglarge: {
      "item": "extmaglarge",
      "name": "Extended Mag (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Magazine_Extended_Large_C",
      "weight": "15",
      "order": "870",
      "quantity": "single",
      "bonuses": ["+ Magazine capacity"],
      "desc": "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, Groza, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR, VSS",
      "unique": "mag",
      "attweapons": ["S12K", "AKM", "AUG", "BerylM762", "G36C", "Groza", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    quickdrawlarge: {
      "item": "quickdrawlarge",
      "name": "QuickDraw Mag (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Magazine_QuickDraw_Large_C",
      "weight": "14",
      "order": "870",
      "quantity": "single",
      "bonuses": ["+ Reload speed"],
      "desc": "Attachable weapons: S12K, AKM, AUG, Beryl M762, Groza, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR, VSS",
      "unique": "mag",
      "attweapons": ["S12K", "AKM", "AUG", "BerylM762", "Groza", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    extquickdrawmagsniper: {
      "item": "extquickdrawmagsniper",
      "name": "Ext.QuickDraw Mag (DMR, SR)",
      "icon": "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C",
      "weight": "23",
      "order": "880",
      "quantity": "single",
      "bonuses": ["+ Reload speed", "+ Magazine capacity"],
      "desc": "Attachable weapons: AWM, M24, Mini14, Mk14, QBU, SKS, SLR, VSS",
      "unique": "mag",
      "attweapons": ["AWM", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    extmagsniper: {
      "item": "extmagsniper",
      "name": "Extended Mag (DMR, SR)",
      "icon": "Item_Attach_Weapon_Magazine_Extended_SniperRifle_C",
      "weight": "17",
      "order": "880",
      "quantity": "single",
      "bonuses": ["+ Magazine capacity"],
      "desc": "Attachable weapons: AWM, M24, Mini14, Mk14, QBU, SKS, SLR, VSS",
      "unique": "mag",
      "attweapons": ["AWM", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    quickdrawsniper: {
      "item": "quickdrawsniper",
      "name": "QuickDraw Mag (DMR, SR)",
      "icon": "Item_Attach_Weapon_Magazine_QuickDraw_SniperRifle_C",
      "weight": "16",
      "order": "880",
      "quantity": "single",
      "bonuses": ["+ Reload speed"],
      "desc": "Attachable weapons: AWM, M24, Mini14, Mk14, QBU, SKS, SLR, VSS",
      "unique": "mag",
      "attweapons": ["AWM", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR", "VSS"]
    },
    quiver: {
      "item": "quiver",
      "name": "Quiver (Crossbow)",
      "icon": "Item_Attach_Weapon_Lower_QuickDraw_Large_Crossbow_C",
      "weight": "12",
      "order": "0",
      "quantity": "single",
      "bonuses": ["+ Reload speed"],
      "desc": "Attachable weapon: Crossbow",
      "unique": "grip",
      "attweapons": ["Crossbow"]
    },
    angledforegrip: {
      "item": "angledforegrip",
      "name": "Angled Foregrip",
      "icon": "Item_Attach_Weapon_Lower_AngledForeGrip_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["++ Horizontal recoil control", "+ ADS speed", "- Weapon steadiness"],
      "desc": "Attachable weapons: MP5K, UMP45, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      "unique": "grip",
      "attweapons": ["MP5K", "UMP45", "AUG", "BerylM762", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    halfgrip: {
      "item": "halfgrip",
      "name": "Halfgrip",
      "icon": "Item_Attach_Weapon_Lower_HalfGrip_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["+ Recoil control", "+ Recoil recovery", "- Weapon steadiness"],
      "desc": "Attachable weapons: Skorpion, MP5K, Tommy Gun, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      "unique": "grip",
      "attweapons": ["Skorpion", "MP5K", "UMP45", "Vector", "AUG", "BerylM762", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    lightweightgrip: {
      "item": "lightweightgrip",
      "name": "Lightweight Grip",
      "icon": "Item_Attach_Weapon_Lower_LightweightForeGrip_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["++ Weapon stability after shot", "+ Weapon steadiness"],
      "desc": "Attachable weapons: Skorpion, MP5K, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      "unique": "grip",
      "attweapons": ["Skorpion", "MP5K", "UMP45", "Vector", "AUG", "BerylM762", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    thumbgrip: {
      "item": "thumbgrip",
      "name": "Thumbgrip",
      "icon": "Item_Attach_Weapon_Lower_ThumbGrip_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["++ ADS speed", "+ Vertical recoil control", "+ Weapon steadiness"],
      "desc": "Attachable weapons: MP5K, UMP45, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      "unique": "grip",
      "attweapons": ["MP5K", "UMP45", "AUG", "BerylM762", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    lasersight: {
      "item": "lasersight",
      "name": "Thumbgrip",
      "icon": "Item_Attach_Weapon_Lower_LaserPointer_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["++ Hip fire accuracy"],
      "desc": "Attachable weapons: P18C, P1911, P92, R45, Skorpion, MP5K, UMP45, Vector, AUG, Beryl M762, G36C, M416, Mk47 Mutant, QBZ, SCAR-L, SKS",
      "unique": "grip",
      "attweapons": ["P18C", "P1911", "P92", "R45", "Skorpion", "MP5K", "UMP45", "Vector", "AUG", "BerylM762", "G36C", "M416", "Mk47Mutant", "QBZ", "SCARL", "SKS"]
    },
    choke: {
      "item": "choke",
      "name": "Choke (SG)",
      "icon": "Item_Attach_Weapon_Muzzle_Choke_C",
      "weight": "5",
      "order": "850",
      "quantity": "single",
      "bonuses": ["+ Shotgun pellets spread tightness"],
      "desc": "Attachable weapon: Sawed-Off, S1897, S686",
      "unique": "muzzle",
      "attweapons": ["SawedOff", "S1897", "S686"]
    },
    duckbill: {
      "item": "duckbill",
      "name": "Duckbill (SG)",
      "icon": "Item_Attach_Weapon_Muzzle_Duckbill_C",
      "weight": "5",
      "order": "850",
      "quantity": "single",
      "bonuses": ["++ Shotgun pellets vertical spread tightness", "- Shotgun pellets horizontal spread tightness"],
      "desc": "Attachable weapon: S1897, S12K",
      "unique": "muzzle",
      "attweapons": ["S1897", "S12K"]
    },
    compensatorsniper: {
      "item": "compensatorsniper",
      "name": "Compensator (DMR, SR)",
      "icon": "Item_Attach_Weapon_Muzzle_Compensator_SniperRifle_C",
      "weight": "12",
      "order": "880",
      "quantity": "single",
      "bonuses": ["++ Recoil control"],
      "desc": "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      "unique": "muzzle",
      "attweapons": ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    compensatorlarge: {
      "item": "compensatorlarge",
      "name": "Compensator (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Muzzle_Compensator_Large_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["++ Recoil control"],
      "desc": "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR",
      "unique": "muzzle",
      "attweapons": ["S12K", "AKM", "AUG", "BerylM762", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    compensatormedium: {
      "item": "compensatormedium",
      "name": "Compensator (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Muzzle_Compensator_Medium_C",
      "weight": "8",
      "order": "860",
      "quantity": "single",
      "bonuses": ["++ Recoil control"],
      "desc": "Attachable weapons: Micro UZI, MP5K, PP-19 Bizon, UMP45, Vector",
      "unique": "muzzle",
      "attweapons": ["MicroUZI", "MP5K", "Bizon", "UMP45", "Vector"]
    },
    flashhidersniper: {
      "item": "flashhidersniper",
      "name": "Flash Hider (DMR, SR)",
      "icon": "Item_Attach_Weapon_Muzzle_FlashHider_SniperRifle_C",
      "weight": "12",
      "order": "880",
      "quantity": "single",
      "bonuses": ["Eliminates muzzle flash", "+ Recoil control"],
      "desc": "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      "unique": "muzzle",
      "attweapons": ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    flashhiderlarge: {
      "item": "flashhiderlarge",
      "name": "Flash Hider (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Muzzle_FlashHider_Large_C",
      "weight": "10",
      "order": "870",
      "quantity": "single",
      "bonuses": ["Eliminates muzzle flash", "+ Recoil control"],
      "desc": "Attachable weapons: S12K, AKM, AUG, Beryl M762, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR",
      "unique": "muzzle",
      "attweapons": ["S12K", "AKM", "AUG", "BerylM762", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    flashhidermedium: {
      "item": "flashhidermedium",
      "name": "Flash Hider (SMG)",
      "icon": "Item_Attach_Weapon_Muzzle_FlashHider_Medium_C",
      "weight": "8",
      "order": "860",
      "quantity": "single",
      "bonuses": ["Eliminates muzzle flash", "+ Recoil control"],
      "desc": "Attachable weapons: Micro UZI, MP5K, PP-19 Bizon, UMP45, Vector",
      "unique": "muzzle",
      "attweapons": ["MicroUZI", "MP5K", "Bizon", "UMP45", "Vector"]
    },
    suppressorsniper: {
      "item": "suppressorsniper",
      "name": "Suppressor (DMR, SR)",
      "icon": "Item_Attach_Weapon_Muzzle_Suppressor_SniperRifle_C",
      "weight": "23",
      "order": "880",
      "quantity": "single",
      "bonuses": ["Reduces weapon sound"],
      "desc": "Attachable weapons: AWM, Kar98k, M24, Mini14, Mk14, QBU, SKS, SLR",
      "unique": "muzzle",
      "attweapons": ["AWM", "Kar98k", "M24", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    suppressorlarge: {
      "item": "suppressorlarge",
      "name": "Suppressor (AR, DMR, S12K)",
      "icon": "Item_Attach_Weapon_Muzzle_Suppressor_Large_C",
      "weight": "20",
      "order": "870",
      "quantity": "single",
      "bonuses": ["Reduces weapon sound"],
      "desc": "Attachable weapons: S12K, AKM, AUG, Beryl M762, Groza, G36C, M16A4, M416, Mk47 Mutant, QBZ, SCAR-L, Mini14, Mk14, QBU, SKS, SLR",
      "unique": "muzzle",
      "attweapons": ["S12K", "AKM", "AUG", "BerylM762", "Groza", "G36C", "M16A4", "M416", "Mk47Mutant", "QBZ", "SCARL", "Mini14", "Mk14", "QBU", "SKS", "SLR"]
    },
    suppressormedium: {
      "item": "suppressormedium",
      "name": "Suppressor (Handgun, SMG)",
      "icon": "Item_Attach_Weapon_Muzzle_Suppressor_Medium_C",
      "weight": "15",
      "order": "860",
      "quantity": "single",
      "bonuses": ["Reduces weapon sound"],
      "desc": "Attachable weapons: P18C, P1911, P92, R1895, Skorpion, Micro UZI, MP5K, PP-19 Bizon, Tommy Gun, UMP45, Vector",
      "unique": "muzzle",
      "attweapons": ["P18C", "P1911", "P92", "R1895", "Skorpion", "MicroUZI", "MP5K", "Bizon", "Tommy Gun", "UMP45", "Vector"]
    },
  },
  ammo: {
    ammobolt: {
      "item": "ammobolt",
      "name": "Bolt",
      "i18n": "Bolt",
      "icon": "Item_Ammo_Bolt_C",
      "weight": "2",
      "order": "119",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["Crossbow"]
    },
    ammo45acp: {
      "item": "ammo45acp",
      "name": "Bolt",
      "i18n": "Bolt",
      "icon": "Item_Ammo_45ACP_C",
      "weight": "0.4",
      "order": "118",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["P1911", "R45", "TommyGun", "UMP45", "Win94"]
    },
    ammo12gauge: {
      "item": "12Gauge",
      "name": "12 Gauge",
      "i18n": "12Gauge",
      "icon": "Item_Ammo_12Guage_C",
      "weight": "1.25",
      "order": "117",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["S12K", "S1897", "S686", "SawedOff"]
    },
    ammo9mm: {
      "item": "ammo9mm",
      "name": "9mm",
      "i18n": "9mm",
      "icon": "Item_Ammo_9mm_C",
      "weight": "0.375",
      "order": "116",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["P18C", "P92", "Skorpion", "MicroUZI", "MP5K", "Bizon", "Vector", "VSS"]
    },
    ammo556mm: {
      "item": "ammo556mm",
      "name": "5.56mm",
      "i18n": "556mm",
      "icon": "Item_Ammo_556mm_C",
      "weight": "0.5",
      "order": "115",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["AUG", "G36C", "M16A4", "M416", "QBZ", "SCARL", "M249", "Mini14", "QBU"]
    },
    ammo762mm: {
      "item": "ammo762mm",
      "name": "7.62mm",
      "i18n": "762mm",
      "icon": "Item_Ammo_762mm_C",
      "weight": "0.7",
      "order": "114",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["R1895", "AKM", "BerylM762", "Groza", "Mk47Mutant", "DP28", "M24", "Mk14", "Kar98k", "SKS", "SLR"]
    },
    ammo300magnum: {
      "item": "ammo300magnum",
      "name": "300 Magnum",
      "i18n": "300Magnum",
      "icon": "Item_Ammo_300Magnum_C",
      "weight": "1",
      "order": "113",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["AWM"]
    },
    ammoflare: {
      "item": "ammoflare",
      "name": "Flare Gun Ammo",
      "i18n": "FlareGunAmmo",
      "icon": "Item_Ammo_Flare_C",
      "weight": "0.5",
      "order": "115",
      "ammo": "Ammo for",
      "i18ammo": "Ammofor",
      "ammofor": ["FlareGun"]
    },
  },
  weapons: {
    AWM: {
      "item": "awm",
      "name": "AWM",
      "type": "Sniper Rifle",
      "typei18": "SniperRifle",
      "carepackage": "yes",
      "maps": ["all"],
      "ammo": ".300 Magnum",
      "ammoIcon": "Item_Ammo_300Magnum_C",
      "desc": "Monster sniper rifle.",
      "i18desc": "awm-desc",
      "skins": ["goldplate", "jungledigital"],
      "skinsofevents": [],
      "slots": ["muzzle", "none", "mag", "stock"],
      "capacity": "5",
      "damage": "120",
      "rateoffire": "1,85",
      "bulletspeed": "945",
      "reload": "4.6",
      "range": "650",
      "bodyimpact": "40,000",
      "stability": "40",
      "rate": "4",
      "soundrange": "1000",
      "supressed": "700",
      "muzzle": ["emptymuzzle"],
      "grip": [],
      "mag": ["emptymag"],
      "stock": ["emptystock"],
      "angled": [],
      "canted": ["emptysight"],
      "attsights": ["emptysight"]
    }
  },
  crates: {
    // not in game anymore:
    pioneer: {
      "item": "pioneer",
      "name": "PIONEER CRATE",
      "icon": "Item_Box_CBT_01_C",
      "type": "marketcrate"
    },
    gamescom: {
      "item": "gamescom",
      "name": "GAMESCOM INVITATIONAL CRATE",
      "icon": "Item_Box_L_GC_C",
      "type": "marketcrate",
      "rkey": "earlybirdkey",
    },
    // In game crates
    wanderer: {
      "item": "wanderer",
      "name": "WANDERER CRATE",
      "icon": "Item_Box_EA_01_C",
      "type": "crate",
      "probability": "10"
    },
    survivor: {
      "item": "survivor",
      "name": "SURVIVOR CRATE",
      "icon": "Item_Box_EA_02_C",
      "type": "crate",
      "probability": "10"
    },
    biker: {
      "item": "biker",
      "name": "BIKER CRATE",
      "icon": "Item_Box_1712_C",
      "type": "crate",
      "probability": "10",
    },
    desperado: {
      "item": "desperado",
      "icon": "Item_Box_L_1712_C",
      "type": "crate",
      "rkey": "earlybirdkey",
      "probability": "5",
      "name": "DESPERADO CRATE"
    },
    militia: {
      "item": "militia",
      "name": "MILITIA CRATE",
      "icon": "Item_Box_1802_C",
      "type": "crate",
      "probability": "10",
    },
    fever: {
      "item": "fever",
      "type": "crate",
      "rkey": "earlybirdkey",
      "probability": "5",
      "name": "FEVER CRATE"
    },
    triumph: {
      "item": "triumph",
      "icon": "Item_Box_L_1803_C",
      "name": "TRIUMPH CRATE",
      "type": "crate",
      "rkey": "weaponskinkey",
      "probability": "5",
    },
    equinox: {
      "item": "equinox",
      "name": "EQUINOX CRATE",
      "icon": "Item_Box_L_1804_C",
      "type": "crate",
      "rkey": "weaponskinkey",
      "probability": "5",
    },
    aviator: {
      "item": "aviator",
      "name": "AVIATOR CRATE",
      "icon": "Item_Box_L_1805_C",
      "type": "crate",
      "rkey": "aviatorkey",
      "probability": "5",
    },
    raidercrate: {
      "item": "raider",
      "name": "RAIDER CRATE",
      "icon": "Item_Box_1803_C",
      "type": "crate",
      "probability": "20",
    },
    fall2018: {
      "item": "fall2018",
      "name": "Fall 2018 Crate",
      "icon": "Item_Box_1810_C",
      "type": "crate",
      "probability": "15",
    },
    easterangelpolicecrate: {
      "item": "easterangelpolicecrate",
      "name": "EAST ERANGEL POLICE CRATE",
      "icon": "Item_Box_L_1806_C",
      "type": "crate",
      "rkey": "easterangelpolicekey",
    },
  }
}