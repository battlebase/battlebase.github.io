var appversion = '0.1.0';
$("#splash").delay(1000).fadeOut(500);

var BBDB = {
  app: {
    firstTime: true,
  },
  data: {
    steamPlayers: "",
    steamQueryCache: "",
  }
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