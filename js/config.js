var appversion = '1.0.0';
var gameversion = '5.5.6';
$("#splash").delay(1000).fadeOut(500);

var compareWeapons = [];

var BBDB = {
  app: {
    firstTime: true,
  },
  data: {
    steamPlayers: "",
    steamQueryCache: "",
  },
  counter: "",
}

function getSettings() {
  if (localStorage.BBDB) {
    BBDB = JSON.parse(localStorage.BBDB);
    console.warn("== Loaded Settings ==");
  } else {
    localStorage.BBDB = JSON.stringify(BBDB);
    console.warn("== Saved settings ==");
  }
}
getSettings();

var leftMenu = [
  {
    name: "Equipments",
    image: "equipments/Item_equipment_Back_C_01",
    link: "https://battlebase.github.io/pages/menu-equipments"
  },
  {
    name: "Customization",
    image: "skins/Item_Body_D_01_C",
    link: "https://battlebase.github.io/pages/menu-customization"
  },
  {
    name: "Crates",
    image: "crates/randomcrate",
    link: "https://battlebase.github.io/pages/menu-crates"
  },
  {
    name: "Consumables",
    image: "consumables/Item_Heal_FirstAid_C",
    link: "https://battlebase.github.io/pages/menu-consumables"
  },
  {
    name: "Attachments",
    image: "attachments/Item_Attach_Weapon_Stock_Shotgun_BulletLoops_C",
    link: "https://battlebase.github.io/pages/menu-attachments"
  },
  {
    name: "Sights",
    image: "sights/Item_Attach_Weapon_Upper_DotSight_01_C",
    link: "https://battlebase.github.io/pages/menu-sights"
  },
  {
    name: "Weapons",
    image: "weapons/Item_Weapon_AK47_C",
    link: "https://battlebase.github.io/pages/menu-weapons"
  },
  {
    name: "Ammos",
    image: "ammo/Item_Ammo_556mm_C",
    link: "https://battlebase.github.io/pages/menu-ammunition"
  },
  {
    name: "Care Package",
    image: "icons/carepackage_default240",
    link: "https://battlebase.github.io/pages/menu-carepackage"
  }
]



var config = {
  steamQueryLimit: 60,
  pubgapiQueryLimit: 2,
}
var error = {
  steamrequest: {
    message: "Couldn't get steam players, try again later.",
    i18n: "error_steamrequest"
  },
  requestplayer:{
    message: "Coudn't find a player with this nickname, try again.",
    i18n: "error_requestplayer"
  },
  seasonstats:{
    message: "Coudn't fetch stats, try again please.",
    i18n: "error_seasonstats"
  }
}