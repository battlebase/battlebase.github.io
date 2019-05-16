// var playerData = https://codepen.io/RogerHN/pen/WmoLVb.js
// var playerSeasonData = https://codepen.io/RogerHN/pen/xBRMxp.js

var rankNames = {
    "UNKNOWN": {
        "title": 0,
        "levels": [
            {
                "level": 0,
                "survivalPoints": "1",
                "demotion": false
            }
        ]
    },
    "BEGINNER": {
        "title": 1,
        "levels": [
            {
                "level": 5,
                "survivalPoints": "1-199",
                "demotion": false
            },
            {
                "level": 4,
                "survivalPoints": "200-399",
                "demotion": false
            },
            {
                "level": 3,
                "survivalPoints": "400-599",
                "demotion": false
            },
            {
                "level": 2,
                "survivalPoints": "600-799",
                "demotion": false
            },
            {
                "level": 1,
                "survivalPoints": "800-999",
                "demotion": false
            }
        ]
    },
    "NOVICE": {
        "title": 2,
        "levels": [
            {
                "level": 5,
                "survivalPoints": "1000-1199",
                "demotion": false
            },
            {
                "level": 4,
                "survivalPoints": "1200-1399",
                "demotion": false
            },
            {
                "level": 3,
                "survivalPoints": "1400-1599",
                "demotion": false
            },
            {
                "level": 2,
                "survivalPoints": "1600-1799",
                "demotion": false
            },
            {
                "level": 1,
                "survivalPoints": "1800-1999",
                "demotion": false
            }
        ]
    },
    "EXPERIENCED": {
        "title": 3,
        "levels": [
            {
                "level": 5,
                "survivalPoints": "2000-2199",
                "demotion": false
            },
            {
                "level": 4,
                "survivalPoints": "2200-2399",
                "demotion": false
            },
            {
                "level": 3,
                "survivalPoints": "2400-2599",
                "demotion": false
            },
            {
                "level": 2,
                "survivalPoints": "2600-2799",
                "demotion": false
            },
            {
                "level": 1,
                "survivalPoints": "2800-2999",
                "demotion": false
            }
        ]
    },
    "SKILLED": {
        "title": 4,
        "levels": [
            {
                "level": 5,
                "survivalPoints": "3000-3199",
                "demotion": false
            },
            {
                "level": 4,
                "survivalPoints": "3200-3399",
                "demotion": false
            },
            {
                "level": 3,
                "survivalPoints": "3400-3599",
                "demotion": false
            },
            {
                "level": 2,
                "survivalPoints": "3600-3799",
                "demotion": false
            },
            {
                "level": 1,
                "survivalPoints": "3800-3999",
                "demotion": false
            }
        ]
    },
    "SPECIALIST": {
        "title": 5,
        "levels": [
            {
                "level": 5,
                "survivalPoints": "4000-4199",
                "demotion": false
            },
            {
                "level": 4,
                "survivalPoints": "4200-4399",
                "demotion": false
            },
            {
                "level": 3,
                "survivalPoints": "4400-4599",
                "demotion": false
            },
            {
                "level": 2,
                "survivalPoints": "4600-4799",
                "demotion": false
            },
            {
                "level": 1,
                "survivalPoints": "4800-4999",
                "demotion": false
            }
        ]
    },
    "EXPERT": {
        "title": 6,
        "levels": [
            {
                "level": 0,
                "survivalPoints": "5000-5999",
                "demotion": false
            }
        ]
    },
    "SURVIVOR": {
        "title": 7,
        "levels": [
            {
                "level": 0,
                "survivalPoints": "6000+",
                "demotion": false
            }
        ]
    },
    "LONE SURVIVOR": {
        "title": 7,
        "levels": [
            {
                "level": 0,
                "survivalPoints": "6000+",
                "demotion": true
            }
        ]
    }
}
//console.log(rankNames);

var ranks = [
    {
        rank: "Unknown",
        levels: 0,
        start: 1,
        end: 1
    },
    {
        rank: "Beginner",
        levels: 5,
        start: 1,
        end: 999
    },
    {
        rank: "Novice",
        levels: 5,
        start: 1000,
        end: 1999
    },
    {
        rank: "Experienced",
        levels: 5,
        start: 2000,
        end: 2999
    },
    {
        rank: "Skilled",
        levels: 5,
        start: 3000,
        end: 3999
    },
    {
        rank: "Specialist",
        levels: 5,
        start: 4000,
        end: 4999
    },
    {
        rank: "Expert",
        levels: 0,
        start: 5000,
        end: 5999
    },
    {
        rank: "Survivor",
        levels: 0,
        start: 6000,
        end: 99999
    }
]
//console.log(ranks)

var playerName = "";
//var player_id = 'account.e26d57d7d74a44eab13ed46bb0ef0494';

var BBapiSettings = {
    playerName: "",
    platform: "steam",
    player_id: "",
    current_season: "division.bro.official.pc-2018-03",
    pubg_seasons: []
}

var pubgdb = {

}

var pubgdb_playerIds = {
    //RogerHN: 'account.e26d57d7d74a44eab13ed46bb0ef0494'
};

var BBplayerdata = [];


function JS(val) {
    return JSON.stringify(val);
}
function JP(val) {
    return JSON.parse(val);
}

function get_settings() {

    if (localStorage.BBapiSettings) {
        BBapiSettings = JP(localStorage.BBapiSettings);
        console.log("loaded settings");
    } else {
        localStorage.BBapiSettings = JS(BBapiSettings);
    }
    if (localStorage.BBplayerdata) {
        BBplayerdata = JP(localStorage.BBplayerdata);
        console.log("loaded playerdata");
    } else {
        localStorage.BBplayerdata = "[]";
    }
    if (localStorage.pubgdb_playerIds) {
        pubgdb_playerIds = JP(localStorage.pubgdb_playerIds);
        console.log("loaded player ids");
    } else {
        localStorage.pubgdb_playerIds = JS(pubgdb_playerIds);
    }
};






var apk = "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnFkR2tpT2lJMk1XVTBOalU1TUMweU1EZGpMVEF4TXpZdE1EZG1OaTAyWkRNMVpqYzRZekpsT0RraUxDSnBjM01pT2lKbllXMWxiRzlqYTJWeUlpd2lhV0YwSWpveE5USXpOVE0yTnpNekxDSndkV0lpT2lKaWJIVmxhRzlzWlNJc0luUnBkR3hsSWpvaWNIVmlaeUlzSW1Gd2NDSTZJbkIxWW1ka1lpMDRNVFU1T0dReU55MDBNVGhrTFRRM01qUXRZak00WlMwM1l6WmxOakUyWVdJd1pqWWlmUS5wMV9ldWpkZjlETG5CMUFGZzJHVjM1Z1g5YjJSZlo0SGhjSzNIQkhYZTBn";

/*
function getCurrentSeason(){
  var apiKey = decodeURIComponent(escape(window.atob(apk)));
  var pubg_seasons = ["division.bro.official.pc-2018-01"];
  var current_season = "division.bro.official.pc-2018-02";
  var request_seasons = "https://api.pubg.com/shards/steam/seasons";
  $.ajax({
    type: "GET",
    url: request_seasons,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
      xhr.setRequestHeader("accept", "application/vnd.api+json");
    },
    dataType: "json"
  }).done(
    function (data) {
      var seasons = data.data;
      //console.log(seasons)
      var seasons_len = seasons.length;
      for(var i = 0; i < seasons_len; i++){
        var season = seasons[i];
        pubg_seasons.push(season.id);
        if(season.attributes.isCurrentSeason === true){
          current_season = season.id;
          BBapiSettings.current_season = season.id;
          localStorage.BBapiSettings = BBapiSettings;
        }
      }
      console.log("Current season is")
      console.log(current_season)
      console.log("Available Seasons")
      console.log(pubg_seasons)
    })
    .fail(function() {
    alert( "error" );
  })
}
function getplayer(){
  $.ajax({
    type: "GET",
    url: 'https://api.pubg.com/shards/' + platform + '/players?filter[playerNames]=' + playerName,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
      xhr.setRequestHeader("accept", "application/vnd.api+json");
    },
    dataType: "json"
  }).done(
    function (data) {
      console.log(data)
      //https://api.pubg.com/shards/pc-na/matches/
      var playeridunsplited = data.data[0].id;
      var playeridsplited = playeridunsplited.split(".")[1];
      var playerid = playeridsplited.substring(0, 8) + "-" + playeridsplited.substring(8, 12) + "-" + playeridsplited.substring(12, 16) + "-" + playeridsplited.substring(16, 20) + "-" + playeridsplited.substring(20, 12);
      var lastmatchid = data.data[0].relationships.matches.data[0].id;
    });
};
function getSeasonStats(){
  var request_season_stats =  'https://api.pubg.com/shards/'+ platform +'/players/'+ player_id +'/seasons/'+ current_season;
  $.ajax({
    type: "GET",
    url: request_season_stats,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
      xhr.setRequestHeader("accept", "application/vnd.api+json");
    },
    dataType: "json"
  }).done(
    function (data) {
      //var seasons = data.data;
      console.log(data)
    })
 
}
*/

$('.get_stats').on('click', function () {
    var player = $('.player_name_input').val();
    playerName = player;
    var platform = $('.platform_select').val();
    requestPlayer(player, platform)
});
var apk = "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnFkR2tpT2lJMk1XVTBOalU1TUMweU1EZGpMVEF4TXpZdE1EZG1OaTAyWkRNMVpqYzRZekpsT0RraUxDSnBjM01pT2lKbllXMWxiRzlqYTJWeUlpd2lhV0YwSWpveE5USXpOVE0yTnpNekxDSndkV0lpT2lKaWJIVmxhRzlzWlNJc0luUnBkR3hsSWpvaWNIVmlaeUlzSW1Gd2NDSTZJbkIxWW1ka1lpMDRNVFU1T0dReU55MDBNVGhrTFRRM01qUXRZak00WlMwM1l6WmxOakUyWVdJd1pqWWlmUS5wMV9ldWpkZjlETG5CMUFGZzJHVjM1Z1g5YjJSZlo0SGhjSzNIQkhYZTBn";
/*
function requestPlayer(player, platform) {
    var player_id;
    var current_season = BBapiSettings.current_season;
    var dateNow;
    var matches;
    var apiKey = decodeURIComponent(escape(window.atob(apk)));

    // Check if player name is stored in DB
    if (pubgdb_playerIds[playerName]) {
        player_id = pubgdb_playerIds.playerName;
        console.log("player found on database, getting stats...")
        getSeasonStats(player_id, platform);
    }
    else {
        console.log("Requesting player data...")
        $.ajax({
            type: "GET",
            url: 'https://api.pubg.com/shards/' + platform + '/players?filter[playerNames]=' + player,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
                xhr.setRequestHeader("accept", "application/vnd.api+json");
            },
            dataType: "json"
        }).done(
            function (data) {
                console.log("Player Data:")
                console.log(data);
                //console.log(JSON.stringify(data,null,2));
                player_id = data.data[0].id;
                var playeridsplited = player_id.split(".")[1];
                var player_id_split = playeridsplited.substring(0, 8) + "-" + playeridsplited.substring(8, 12) + "-" + playeridsplited.substring(12, 16) + "-" + playeridsplited.substring(16, 20) + "-" + playeridsplited.substring(20, 12);
                console.log(player_id_split);
                BBapiSettings.player_id = player_id;
                matches = data.data[0].relationships.matches.data;
                var lastmatch = matches[0].id;
                console.log("lastmatch: " + lastmatch);
                console.log("player id: " + player_id);
                console.log("Matches:");
                console.log(matches);
                getSeasonStats(player_id);
            })
            .fail(function (data) {
                alert("User not found!");
            })
    }
}
*/
function getSeasonStats(player_id) {
    var current_season = BBapiSettings.current_season;
    var request = 'https://6qmvh4u3fh.execute-api.us-east-1.amazonaws.com/pubg/players/'+player_id+'/seasons/'+current_season;
    var request_season_stats = request+'/shards/steam/players/' + player_id + '/seasons/' + current_season;
    console.log("Requesting season stats...");

    function requestSeasonStat() {
        var updatingblock = `
        <div class="updatingstats">
            <div class="text">Updating stats...</div>
        </div>
        `
    $('.playerStatsMain').html(updatingblock);
    var updatebuttontext = `<span class="updatetext">Update Now</span>`

        $.ajax({
            type: "GET",
            async: false,
            url: request,
            dataType: "json"
        }).done(
            function (data) {
                console.log("season stats:");
                console.log(data);
                //console.log(JSON.stringify(data,null,2))
                dateNow = new Date();
                steamQueryCache = new Date();
                dateNow = formatDate(dateNow);
                var playerSeasonsData = data.data;
                var found = 0;

                

                BBplayerdata = JP(localStorage.BBplayerdata);
                if (BBplayerdata.length > 0) {
                    for (var i = 0; i < BBplayerdata.length; i++) {
                        var stored_player = BBplayerdata[i];
                        if (playerName === stored_player.player) {
                            BBplayerdata[i].dateCache = dateNow;
                            BBplayerdata[i].data = playerSeasonsData;
                            localStorage.BBplayerdata = JS(BBplayerdata);
                            found = 1;
                            console.log("Found " + playerName);
                            break;
                        }
                    }
                }



                if (found === 0) {
                    BBplayerdata.push({ dateCache: dateNow, player: playerName, data: playerSeasonsData })
                    console.log("pushing new data");
                    localStorage.BBplayerdata = JS(BBplayerdata);
                }
                displayStats();
                $('.updatestats').html(updatebuttontext);
            })
            .fail(function (data) {
                showError(error.seasonstats)
            })
    }

    var timeNow = new Date();
    BBplayerdata = JP(localStorage.BBplayerdata);
    if (BBplayerdata.length > 0) {
        var pubgapiQuery = convertDate(BBplayerdata[0].dateCache);
        var queryTimeDiff = timeDiff(pubgapiQuery, timeNow);
        console.warn("Time difference api: " + queryTimeDiff);

        if (queryTimeDiff > config.pubgapiQueryLimit) {
            requestSeasonStat()
            console.warn("getting new Season Stats");
        }
        else {
            console.log("Using Season Stats stored values");
            displayStats();
        }
    } else {
        console.warn("getting first time Season Stats");
        requestSeasonStat();
    }
    

    
}


function timeDiff() {
    var dateNow = new Date();
    var Christmas = new Date("12-25-2019");
    var diffMs = (Christmas - dateNow); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2009 =)");
}
//timeDiff()
function fancyTimeFormat(time) {
    // Hours, minutes and seconds
    var hours = ~~(time / 3600);
    var minutes = ~~((time % 3600) / 60);
    var seconds = time % 60;
    seconds = seconds.toFixed(2);
    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

function commaNumber(number){
    number = number.toString().split("").reverse().join("")
      .replace(/(\d{3}\B)/g, "$1,")
      .split("").reverse().join("");
    return number;
  }
  

  var ranks = {
    rank_1: {
      name: "beginner",
    },
    rank_2: {
      name: "novice",
    },
    rank_3: {
      name: "experienced",
    },
    rank_4: {
      name: "skilled",
    },
    rank_5: {
      name: "specialist",
    },
    rank_6: {
      name: "expert",
    },
    rank_7: {
      name: "survivor",
    },
  }

  var romanNum = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V"
  }
  
  function displayStats(){
    var BBplayerdata = JP(localStorage.BBplayerdata);
    var BBapiSettings = JP(localStorage.BBapiSettings);
    console.log("player data:")
    console.log(BBplayerdata)
    var dateCache = BBplayerdata[0].dateCache;
    var dateCachesplit = dateCache.split('.');
    var lastupdated = dateCachesplit[0]+'/'+dateCachesplit[1]+'/'+dateCachesplit[2]+' '+dateCachesplit[3]+':'+dateCachesplit[4];
    var playerName = BBapiSettings.playerName;
    var gamemodes = BBplayerdata[0].data.attributes.gameModeStats;
    console.log("player data:")
    console.log(gamemodes);
    var statblockSolo = "";
    var statblockDuo = "";
    var statblockSquad = "";

    var statblocksmain = [];
    $.each( gamemodes, function( mode, gamemode ) {
        if(gamemode.roundsPlayed > 0){
        var rank = gamemode.rankPointsTitle;
        rank = rank.split('-');
        var mainrank = rank[0];
        var subrank = rank[1];
        var rankName = ranks['rank_'+mainrank].name;
        var subRankNumber = romanNum[subrank];
        var rankImage = 'emblem-'+ranks['rank_'+mainrank].name+'-'+subrank;
        var rankPoints = (gamemode.rankPoints).toString();
        var ranksplit = rankPoints.split('.');
        rankPoints = commaNumber(ranksplit[0]);
        var longestKill = (gamemode.longestKill).toString();
        var longestKillsplit = longestKill.split('.');
        longestKill = longestKillsplit[0];
        var walkDistance = (gamemode.walkDistance / 1000).toFixed(2);
        var swimDistance = (gamemode.swimDistance / 1000).toFixed(2);
        var rideDistance = (gamemode.rideDistance / 1000).toFixed(2);
        var timeSurvived = fancyTimeFormat(gamemode.timeSurvived);
        var mostSurvivalTime = fancyTimeFormat(gamemode.mostSurvivalTime);
        var deaths = gamemode.roundsPlayed - gamemode.wins;
        var kd = (gamemode.kills / deaths).toFixed(2);
        var winPercent = (gamemode.wins / gamemode.roundsPlayed * 100).toFixed(2);
        var avgDamage = (gamemode.damageDealt / gamemode.roundsPlayed).toFixed(1);
        statblocksmain[mode] = `
        <div class="playerStatsblock ${mode}">
        <div class="gamemode ${mode}">
          <span class="gamemodeName">${mode}</span>
          <span class="roundsPlayed">${gamemode.roundsPlayed}</span>
          <span class="roundsPlayedText">Matches</span>
        </div>
            <div class="rankinfo">
                <div class="rankimage">
                    <img src="https://battlebase.github.io/assets/ranks/${rankImage}.png"/>
                </div>
                <div class="rankpointsblock">
                    <div class="rankPoints">${rankPoints}</div>
                    <div class="rankName">
                        <span class="rankName">${rankName} ${subRankNumber}</span>
                    </div>
                </div>
                <div class="winstoptens">
                    <div class="playerstat wins">
                        <span class="text">Wins:</span>
                        <span class="value">${gamemode.wins}</span>
                    </div>
                    <div class="playerstat topten">
                        <span class="text">Top Ten:</span>
                        <span class="value">${gamemode.top10s}</span>
                    </div>
                </div>
            </div>
            <div class="mainstatsblocks">
            <div class="mainstats kills">
                <div class="playerstat kills">
                <span class="text">Kills:</span>
                <span class="value">${gamemode.kills}</span>
                </div>
                <div class="playerstat headshots">
                <span class="text">Headshots:</span>
                <span class="value">${gamemode.kills}</span>
                </div>
                <div class="playerstat assists">
                <span class="text">Assists:</span>
                <span class="value">${gamemode.assists}</span>
                </div>
                <div class="playerstat knockouts">
                <span class="text">Knockouts:</span>
                <span class="value">${gamemode.dBNOs}</span>
                </div>
            </div>
            <div class="mainstats combat">
                <div class="playerstat maxKillStreaks">
                <span class="text">Kill Streaks:</span>
                <span class="value">${gamemode.maxKillStreaks}</span>
                </div>
                <div class="playerstat roundMostKills">
                <span class="text">Round Most Kills:</span>
                <span class="value">${gamemode.roundMostKills}</span>
                </div>
                <div class="playerstat teamKills">
                <span class="text">Team Kills:</span>
                <span class="value">${gamemode.teamKills}</span>
                </div>
                <div class="playerstat suicides">
                <span class="text">Suicides:</span>
                <span class="value">${gamemode.suicides}</span>
                </div>
            </div>
            <div class="mainstats action">
                <div class="playerstat damageDealt">
                <span class="text">Damage Dealt:</span>
                <span class="value">${gamemode.damageDealt}</span>
                </div>
                <div class="playerstat longestKill">
                <span class="text">Longest Kill:</span>
                <span class="value">${longestKill} m</span>
                </div>
                <div class="playerstat roadKills">
                <span class="text">Roadkills:</span>
                <span class="value">${gamemode.roadKills}</span>
                </div>
                <div class="playerstat vehicleDestroys">
                <span class="text">Vehicles Destroyed:</span>
                <span class="value">${gamemode.vehicleDestroys}</span>
                </div>
            </div>
        
            <div class="mainstats scavenge">
                <div class="playerstat weaponsAcquired">
                <span class="text">Weapons Acquired:</span>
                <span class="value">${gamemode.weaponsAcquired}</span>
                </div>
                <div class="playerstat walkDistance">
                <span class="text">Walked Distance</span>
                <span class="value">${walkDistance} m</span>
                </div>
                <div class="playerstat swimDistance">
                <span class="text">Swim Distance:</span>
                <span class="value">${swimDistance}</span>
                </div>
                <div class="playerstat rideDistance">
                <span class="text">Ride Distance:</span>
                <span class="value">${rideDistance}</span>
                </div>
            </div>
        
            <div class="mainstats survival">
                <div class="playerstat mostSurvivalTime">
                <span class="text">Total Time Survived:</span>
                <span class="value">${timeSurvived}</span>
                </div>
                <div class="playerstat mostSurvivalTime">
                <span class="text">Longest Time Survived:</span>
                <span class="value">${mostSurvivalTime} m</span>
                </div>
            </div>
        
            <div class="mainstats medic">
                <div class="playerstat heals">
                <span class="text">Total Heals:</span>
                <span class="value">${gamemode.heals}</span>
                </div>
                <div class="playerstat mostSurvivalTime">
                <span class="text">Total Boosts:</span>
                <span class="value">${gamemode.boosts} m</span>
                </div>
            </div>
          </div>
        </div>`
        }
        else {
            statblocksmain[mode] = `
        <div class="playerStatsblock ${mode}">
        <div class="gamemode ${mode}">
          <span class="gamemodeName">${mode}</span>
          <span class="roundsPlayed">${gamemode.roundsPlayed}</span>
          <span class="roundsPlayedText">Matches</span>
        </div>
        <div class="nostatsyet">No stats for this mode</div>
        </div>`
        }
    });
    var soloBlock = statblocksmain.solo;
    var duoBlock = statblocksmain.duo;
    var squadBlock = statblocksmain.squad;
    var solofppBlock = statblocksmain['solo-fpp'];
    var duofppBlock = statblocksmain['duo-fpp'];
    var squadfppBlock = statblocksmain['squad-fpp'];
    var playerstatsblock = `
    <div class="playerstatmainblock">
        <div class="playernameblock">
            <span class="playername">${playerName}</span>
        </div>
        <div class="lastupdatedblock">
            <span class="lastupdatedtext">Last Updated:</span>
            <span class="lastupdated">${lastupdated}</span>
        </div>
        <div class="updatenowblock">
            <button class="updatestats"><span class="updatetext">Update Now</span></button>
            <button class="changeplayer"><span class="changeplayertext">Change Player</span></button>
        </div>
    </div>
  <div class="playerstatgamemodes">
    <div class="gamemodesblock tpp">
    ${soloBlock}
    ${duoBlock}
    ${squadBlock}
    </div>
    <div class="gamemodesblock fpp">
    ${solofppBlock}
    ${duofppBlock}
    ${squadfppBlock}
    </div>
  </div>
  `
    $('.playerStatsMain').html(playerstatsblock)
  
  }


var current_match;
function get_match() {
    var apk = "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnFkR2tpT2lJMk1XVTBOalU1TUMweU1EZGpMVEF4TXpZdE1EZG1OaTAyWkRNMVpqYzRZekpsT0RraUxDSnBjM01pT2lKbllXMWxiRzlqYTJWeUlpd2lhV0YwSWpveE5USXpOVE0yTnpNekxDSndkV0lpT2lKaWJIVmxhRzlzWlNJc0luUnBkR3hsSWpvaWNIVmlaeUlzSW1Gd2NDSTZJbkIxWW1ka1lpMDRNVFU1T0dReU55MDBNVGhrTFRRM01qUXRZak00WlMwM1l6WmxOakUyWVdJd1pqWWlmUS5wMV9ldWpkZjlETG5CMUFGZzJHVjM1Z1g5YjJSZlo0SGhjSzNIQkhYZTBn";
    var apiKey = decodeURIComponent(escape(window.atob(apk)));

    var match_data = '0243c273-dc13-4295-b3fb-967ebf059f59';
    //match_data = '18ac369b-4444-46b2-8487-66d8174c7226';
    var request_match = 'https://api.pubg.com/shards/steam/matches/' + match_data;

    //var player_data = JSON.parse(localStorage.BBplayerdata);
    //var playerID = player_data.player_id;
    var playerID = 'account.e26d57d7d74a44eab13ed46bb0ef0494';
    //playerID = 'account.816aad8f4a7d41388760dbe06d280c4b';
    var platform = 'steam';

    $.ajax({
        type: "GET",
        url: request_match,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
            xhr.setRequestHeader("accept", "application/vnd.api+json");
        },
        dataType: "json"
    }).done(
        function (data) {
            console.log("MATCH DATA");
            console.log(data)
            current_match = data;
            leaderboards_update(current_match)
            //console.log(JSON.stringify(current_match,null, 2))
        })
        .fail(function (data) {
            alert("Match not found!");
        })

}
//get_match();
//leaderboards_kills()

function leaderboards_update(match_data) {
    console.log("function match")
    console.log(match_data);
    var playerID = 'account.e26d57d7d74a44eab13ed46bb0ef0494';
    var playeridsplited = playerID.split(".")[1];
    var player_id_split = playeridsplited.substring(0, 8) + "-" + playeridsplited.substring(8, 12) + "-" + playeridsplited.substring(12, 16) + "-" + playeridsplited.substring(16, 20) + "-" + playeridsplited.substring(20, 12);
    console.log(player_id_split);
    var map_name = match_data.data.attributes.mapName;
    var gamemode = match_data.data.attributes.gameMode;
    $.each(match_data.included, function (index, value) {
        if (this.type == "participant") {
            if (this.attributes.stats.playerId == player_id_split) {
                var killcount = this.attributes.stats.kills;
                var name = this.attributes.stats.name;
                console.log(killcount + " " + name);
            }
        }
    })
}

