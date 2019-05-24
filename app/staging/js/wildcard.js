var wildcard = {
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
    

    missions: {
      daily: "41",
      weekly: "42",
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