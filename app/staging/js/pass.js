var survivorPass= {
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
        7: 'male_face_7',
        10: 'coupon-blue',
        11: 'BP 300',
        14: 'hairstyle_10',
        17: 'BP 300',
        20: 'coupon-blue',
        21: 'marksman_backpack_level_1',
        23: 'sweater_tan',
        25: 'BP 300',
        28: 'hairstyle_11',
        30: 'coupon-blue',
        33: 'BP 300',
        35: 'female_face_7',
        40: 'coupon-blue',
        50: 'coupon-blue',
        60: 'coupon-blue',
        70: 'coupon-blue',
      },
      premium: {
        1: 'floral_print_bomber_jacket',
        2: 'wild_card-QBU',
        3: 'XP 5.000',
        4: 'BP Boost 2%',
        5: 'BP 700',
        6: 'wild_card-R45',
        7: 'east_erangel_police_key',
        8: 'BP 1.000',
        9: 'lls_tshirt',
        10: 'emote-gun_show',
        11: 'BP Boost 2%',
        12: 'elegant-S12K',
        13: 'XP 6.000',
        14: 'snow_leopard-R1895',
        15: 'bomber_jacket_gray',
        16: 'BP Boost 2%',
        17: 'polo_shirt_white',
        18: 'distressed_cap',
        19: 'diva_glasses_white',
        20: 'XP 4.000',
        21: 'BP 1.000',
        22: 'leather_rucksack_level_2',
        23: 'BP Boost 2%',
        24: 'elegant-P18C',
        25: 'XP 5.000',
        26: 'shirt_plaid',
        27: 'emote-seduction',
        28: 'toxic-VSS',
        29: 'BP 700',
        30: 'distressed_jeans',
        31: 'emote-yes_sir',
        32: 'XP 6.000',
        33: 'leopard-SawedOff',
        34: 'BP 500',
        35: 'floral_print_skirt',
        36: 'emote-victory_dance_7',
        37: 'loafers_with_socks_brown',
        38: 'BP Boost 2%',
        39: 'BP 1.200',
        40: 'suit_top_white',
        41: 'leopard-Crossbow',
        42: 'XP 4.000',
        43: 'emote-space_ranger_pose_2',
        44: 'BP Boost 2%',
        45: 'fancy_shoes_white',
        46: 'BP 700',
        47: 'floral_print_backpack_level_2',
        48: 'dress_pants_black',
        49: 'XP 5.000',
        50: 'elegant-G36C',
        51: 'BP 1.000',
        52: 'emote-gracious_bow',
        53: 'BP Boost 2%',
        54: 'XP 4.000',
        55: 'dress_shoes_with_stockings_black',
        56: 'BP Boost 2%',
        57: 'toxic-P1911',
        58: 'emote-rock_star',
        59: 'BP 500',
        60: 'long_sleeved_turtleneck_navy',
        61: 'XP 5.000',
        62: 'east_erangel_police_key',
        63: 'BP Boost 2%',
        64: 'BP 700',
        65: 'floral_print_corset',
        66: 'emote-victory_dance_6',
        67: 'XP 6.000',
        68: 'sophisticated_glasses',
        69: 'BP Boost 2%',
        70: 'formfitting_dress_gray'
      },
    },
    couponShop: [
      'parachute-mountain_camo',
      'wool_scarf_brown',
      'ugly_holiday_hat',
      'ugly_holiday_sweater',
      'ugly_holiday_gloves',
      'snowmobile_racer_boots',
      'maddog-M16A4',
      'artic_digital-SawedOff',
      'artic_digital-M249',
      'artic_digital-SCARL'
    ],
    levelxp: 10000,
    levelrewards: {
      2: 'white_coupon',
      3: '2 yellow_coupon',
      4: 'white_coupon',
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
        {
          action: 'destroy',
          objective: 'Destroy 1 helmet of enemy',
          reward: 1000
        },
        {
          action: 'kill',
          objective: 'Get 2 kills using a shotgun',
          reward: 1500
        },
        {
          action: 'survive',
          objective: 'Survive for 60 minutes in solo',
          reward: 2000
        },
      ],
      weekly: {
        week_1: {
          free: {
            xp: 3000,
            missions: 4,
            ids: [
              420009, // Get at least 1 kill in a single match
              420015, // Use 20 First Aid Kits
              420023, // Reach top 25 in Solo
              420024, // Reach top 15 in Duos
              420025, // Win a chicken dinner in Squads
              420010, //
            ],
          },
          premium: {
            xp: 5000,
            missions: 6,
            ids: [
              421001, // Loot 10 items from carepackages
              421002, // Pick up 50 items in a single match
              421021, // Drink 30 Energy Drinks
              421023, // Use 30 Painkillers
              421027, // Revive teammates 2 times and be revived 2 times in a single match
              421034, // Win a chicken dinner in Duos
              421012, // Kill an enemy with a headshot at least once per match
            ]
          }
        }
      },
      beginner: {
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
}