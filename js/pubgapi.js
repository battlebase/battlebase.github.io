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
	current_season: "division.bro.official.pc-2018-04",
	pubg_seasons: []
}

var seasons = {
	"division.bro.official.pc-2018-01": "Season 01",
  "division.bro.official.pc-2018-02": "Season 02",
  "division.bro.official.pc-2018-03": "Season 03",
	"division.bro.official.pc-2018-04": "Season 04",
}

var BBplayerIds = {
	//RogerHN: 'account.e26d57d7d74a44eab13ed46bb0ef0494'
};
var BBplayermatches = {};

var BBplayerdata = {};


function JS(val) {
	return JSON.stringify(val);
}
function JP(val) {
	return JSON.parse(val);
}

function get_settings() {

	if (localStorage.BBapiSettings) {
		// Update Season Stats
		if(BBapiSettings.current_season === "division.bro.official.pc-2018-04"){
			BBapiSettings.current_season = "division.bro.official.pc-2018-04";
			localStorage.BBapiSettings = JS(BBapiSettings);
		}
		BBapiSettings = JP(localStorage.BBapiSettings);
		console.log("loaded settings");
	} else {
		localStorage.BBapiSettings = JS(BBapiSettings);
	}
	if (localStorage.BBplayerdata) {
		BBplayerdata = JP(localStorage.BBplayerdata);
		console.log("loaded playerdata");
	} else {
		localStorage.BBplayerdata = JS(BBplayerdata);
	}
	if (localStorage.BBplayermatches) {
		BBplayermatches = JP(localStorage.BBplayermatches);
		console.log("loaded playermatches");
	} else {
		localStorage.BBplayermatches = JS(BBplayermatches);
	}
	if (localStorage.BBplayerIds) {
		BBplayerIds = JP(localStorage.BBplayerIds);
		console.log("loaded player ids");
	} else {
		localStorage.BBplayerIds = JS(BBplayerIds);
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
    if (BBplayerIds[playerName]) {
        player_id = BBplayerIds.playerName;
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
	BBapiSettings = JP(localStorage.BBapiSettings);
	BBDB = JP(localStorage.BBDB);
	BBDB.counter['getSeasonStats'] += 1;
	localStorage.BBDB = JS(BBDB);
	var playerName = BBapiSettings.playerName;

	BBplayerdata = JP(localStorage.BBplayerdata);
	var current_season = BBapiSettings.current_season;
	var request = 'https://6qmvh4u3fh.execute-api.us-east-1.amazonaws.com/pubg/players/' + player_id + '/seasons/' + current_season;
	var request_season_stats = request + '/shards/steam/players/' + player_id + '/seasons/' + current_season;
	console.error("Requesting season stats for " + playerName);

	function requestSeasonStat() {
		var updatingblock = `
        <div class="updatingstats">
            <div class="text">Updating stats...</div>
        </div>
        `
		$('.playerStatsMain').html(updatingblock);
		var updatebuttontext = `<span class="updatetext">Update Now</span>`
		console.warn("Requesting Season Stats for " + playerName);

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
				BBplayerdata[playerName] = {};
				BBplayerdata[playerName].dateCache = dateNow;
				BBplayerdata[playerName].data = playerSeasonsData;
				console.log("BBplayerdata:")
				console.log(BBplayerdata)
				localStorage.BBplayerdata = JS(BBplayerdata);
				/*
				if (BBplayerdata[playerName]) {
					BBplayerdata[playerName].dateCache = dateNow;
					BBplayerdata[playerName].data = playerSeasonsData;
					localStorage.BBplayerdata = JS(BBplayerdata);
				}
				else {

				}
				
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
				*/
				displayStats(playerName);
				$('.updatestats').html(updatebuttontext);
			})
			.fail(function (data) {
				showError(error.seasonstats)
				displayStats();
			})
	}

	var timeNow = new Date();
	BBplayerdata = JP(localStorage.BBplayerdata);
	if (BBplayerdata[playerName]) {
		var pubgapiQuery = convertDate(BBplayerdata[playerName].dateCache);
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
	var hrs = ~~(time / 3600);
	var mins = ~~((time % 3600) / 60);
	var secs = ~~time % 60;
	var letter;
	// Output like "1:01" or "4:03:59" or "123:03:59"
	var ret = "";
	if (hrs > 0) {
		ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		letter = " h";
	}
	else {
		letter = " m";
	}
	ret += "" + mins + letter;
	return ret;
}

function commaNumber(number) {
	number = number.toString().split("").reverse().join("")
		.replace(/(\d{3}\B)/g, "$1,")
		.split("").reverse().join("");
	return number;
}


var ranks = {
	rank_0: {
		name: "unknown",
	},
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
	0: "",
	1: "I",
	2: "II",
	3: "III",
	4: "IV",
	5: "V"
}

function displayStats(player) {
	var BBplayerdata = JP(localStorage.BBplayerdata);
	var BBapiSettings = JP(localStorage.BBapiSettings);
	if (!player) { player = BBapiSettings.playerName };
	console.log("player data:")
	console.log(BBplayerdata)
	var dateCache = BBplayerdata[player].dateCache;
	var dateCachesplit = dateCache.split('.');
	var lastupdated = dateCachesplit[0] + '/' + dateCachesplit[1] + '/' + dateCachesplit[2] + ' ' + dateCachesplit[3] + ':' + dateCachesplit[4];
	var playerName = BBapiSettings.playerName;
	var gamemodes = BBplayerdata[player].data.attributes.gameModeStats;
	console.log("player data:")
	console.log(gamemodes);
	var totalMatches = 0;
	var totalWins = 0;
	var totalTop10 = 0;
	var totalKills = 0;
	var totalHeadshots = 0;
	var alltimesurvived = 0;

	var statblocksmain = [];
	var showgamemodetitletpp = 0;
	var showgamemodetitlefpp = 0;
	var gamemodetitletpp = '';
	var gamemodetitlefpp = '';
			
	$.each(gamemodes, function (mode, gamemode) {
		if (gamemode.roundsPlayed > 0) {
			console.warn(" ==== " + mode + " ====");
			totalMatches = totalMatches + gamemode.roundsPlayed;
			totalWins = totalWins + gamemode.wins
			totalTop10 = totalTop10 + gamemode.top10s;
			totalKills = totalKills + gamemode.kills;
			totalHeadshots = totalHeadshots + gamemode.headshotKills;
			alltimesurvived = alltimesurvived + gamemode.timeSurvived;

			var rank = gamemode.rankPointsTitle;
			if (rank === "") {
				rank = "0-0"
			}
			rank = rank.split('-');
			var mainrank = rank[0];
			console.log("Mainrank " + mainrank);
			var subrank = rank[1];
			console.log("Subrank " + subrank);
			var nextrank = "";
			var nextrankName = "";
			var subRankNumber = "";
			var nextsubrank = "";
			var nextsubrankname;
			var rankName;
			var ribbonImg;

			if (mainrank === "0") {
				rankName = ranks['rank_' + mainrank].name;
				console.log("Next rank is beginner");
				nextrank = Number(mainrank) + 1;
				nextrankName = ranks['rank_' + nextrank].name;
				nextsubrankname = nextrankName;
				subRankNumber = romanNum[subrank];
				nextsubrank = Number(subrank) - 1;
			}
			if (mainrank === "6") {
				rankName = ranks['rank_' + mainrank].name;
				console.log("Next rank is survivor");
				nextrank = Number(mainrank) + 1;
				nextrankName = ranks['rank_' + nextrank].name;
				nextsubrankname = nextrankName;
				subRankNumber = romanNum[subrank];
				nextsubrank = Number(subrank) - 1;
			}
			if (mainrank === "7") {
				rankName = ranks['rank_' + mainrank].name;
				nextsubrankname = "";
				nextrank = "";
				nextrankName = "";
				subRankNumber = "";
				nextsubrank = "";
			}
			else {
				rankName = ranks['rank_' + mainrank].name;
				nextrank = Number(mainrank) + 1;
				nextrankName = ranks['rank_' + nextrank].name;
				subRankNumber = romanNum[subrank];
				nextsubrank = Number(subrank) - 1;
				if (nextsubrank <= 0) {
					nextsubrank = 0;
					nextsubrankname = nextrankName + " " + romanNum[5];
					console.log("Next rank is lower than 0 " + nextsubrankname)
				} else {
					nextsubrankname = rankName + " " + romanNum[nextsubrank];
				}
			}

			console.log(nextsubrankname)


			var rankxp = mainrank * 1000;
			console.log("Rank XP " + rankxp)
			var subrankxp = (5 - subrank) * 200;
			console.log("Subrank XP " + subrankxp)
			var remainingxp = (1000 - subrankxp);
			console.log("Remaining XP " + remainingxp)
			var subtractxp = rankxp - 1000 + subrankxp;
			console.log("Subtract XP " + subtractxp)


			console.log("Rank xp : " + mode + " rankxp " + rankxp + " subxp " + subrankxp + " remaining xp: " + remainingxp);
			console.log("NEXT RANK: " + nextrankName)

			var rankImage;
			var rankPoints = (gamemode.rankPoints).toString();
			var ranksplit = rankPoints.split('.');
			var rankPointstoSum = ranksplit[0];
			rankPoints = commaNumber(ranksplit[0]);

			var xptonextlevel = rankxp - ranksplit[0];
			var levelxp = ranksplit[0] - subtractxp;
			console.log("Level XP " + levelxp)

			var xptonextsublevel;
			var xptonextlevelcolor;
			var xptonextleveltextblock = '';
			var xptonextlevelbar;
			var unknownemblem = "";
			var nextlevelxp = "";

			if (mainrank === "0") {
				console.log("Using unknown image")
				rankImage = 'emblem-' + ranks['rank_' + mainrank].name;
				ribbonImg = "";
				unknownemblem = 'class="unknownemblem"';
				xptonextsublevel = 1;
				xptonextlevelcolor = 1
				xptonextlevelbar = 1
				nextlevelxp = '1';
				xptonextleveltextblock = `
					<span class="xptonextleveltext">SP to next Level:</span>
					<span class="xptonextlevelvalue">${xptonextsublevel}</span>
					`
			}
			else if (mainrank === "6") {
				rankImage = 'emblem-' + ranks['rank_' + mainrank].name + '-' + subrank;
				rankName = ranks['rank_' + mainrank].name;
				ribbonImg = `<img class="ribbon" src="https://battlebase.github.io/assets/ribbons/${rankName}.png"/>`;
				xptonextsublevel = Math.abs(levelxp);
				nextlevelxp = Number(xptonextsublevel) + Number(rankPointstoSum);
				nextlevelxp = commaNumber(nextlevelxp);
				xptonextlevelcolor = (xptonextsublevel / 10);
				xptonextlevelbar = (xptonextsublevel / 10);
				xptonextleveltextblock = `
					<span class="xptonextleveltext">SP to next Level:</span>
					<span class="xptonextlevelvalue">${xptonextsublevel}</span>
					`
			}
			else if (mainrank === "7") {
				rankImage = 'emblem-' + ranks['rank_' + mainrank].name;
				rankName = ranks['rank_' + mainrank].name;
				ribbonImg = `<img class="ribbon" src="https://battlebase.github.io/assets/ribbons/${rankName}.png"/>`;
				xptonextsublevel = Math.abs(levelxp);
				xptonextlevelcolor = 100;
				xptonextlevelbar = 100;
				xptonextleveltextblock = `
					<span class="xptonextleveltext yellow">Maximum level reached!</span>
					`
			}
			else {
				console.log("falling into else statement")
				rankImage = 'emblem-' + ranks['rank_' + mainrank].name + '-' + subrank;
				rankName = ranks['rank_' + mainrank].name;
				ribbonImg = `<img class="ribbon" src="https://battlebase.github.io/assets/ribbons/${rankName}.png"/>`;
				xptonextsublevel = 200 - levelxp;
				nextlevelxp = Number(xptonextsublevel) + Number(rankPointstoSum);
				nextlevelxp = commaNumber(nextlevelxp);
				xptonextlevelcolor = 100 - (xptonextsublevel / 2);
				xptonextlevelbar = 100 - (xptonextsublevel / 2);
				xptonextleveltextblock = `
					<span class="xptonextleveltext">SP to next Level:</span>
					<span class="xptonextlevelvalue">${xptonextsublevel}</span>
					`
			}

			console.log("XP to next rank " + xptonextlevel);

			var longestKill = (gamemode.longestKill).toString();
			var longestKillsplit = longestKill.split('.');
			longestKill = longestKillsplit[0];
			var totaltraveled = gamemode.walkDistance + gamemode.swimDistance + gamemode.rideDistance;
			console.log(totaltraveled)
			totaltraveled = (totaltraveled / 1000).toFixed(2);
			var walkDistance = (gamemode.walkDistance / 1000).toFixed(2);
			var swimDistance = (gamemode.swimDistance / 1000).toFixed(2);
			var rideDistance = (gamemode.rideDistance / 1000).toFixed(2);
			var timeSurvived = fancyTimeFormat(gamemode.timeSurvived);
			var mostSurvivalTime = fancyTimeFormat(gamemode.mostSurvivalTime);
			var deaths = gamemode.roundsPlayed - gamemode.wins;
			var kd = (gamemode.kills / deaths).toFixed(2);
			console.log("KD " + kd)
			var winPercent = (gamemode.wins / gamemode.roundsPlayed * 100).toFixed(2);
			console.log("WinPercent " + winPercent)
			var avgDamage = (gamemode.damageDealt / gamemode.roundsPlayed).toFixed(1);
			console.log("AvgDamage " + avgDamage)
			gamemode.damageDealt = gamemode.damageDealt.toFixed(0);

			console.warn(" XXXX " + mode + " XXXX");
			var xpinnerglow = xptonextlevelcolor - 16;
			var xpbarflatstyle = `background-color: hsl(${xptonextlevelcolor}, 100%, 50%);` // Default color only
			var xpbarstyles = `background-color: rgb(255, 255, 255);
			box-shadow: inset 0px 0px 10px 2px hsla(${xpinnerglow}, 100%, 50%, 1), 
			0 0px 6px 2px hsla(${xptonextlevelcolor}, 100%, 50%, 1);`
			// inset = -16 diferença de cor
			// outset =  valor padrão
			var xpdotglow = `background-color: hsl(${xptonextlevelcolor}, 100%, 50%);
			box-shadow: inset 0px 0px 10px 2px hsl(${xptonextlevelcolor}, 100%, 50%), 
			0 0px 6px 2px hsl(${xptonextlevelcolor}, 100%, 50%);`

			statblocksmain[mode] = `
			<div class="playerStatsblock ${mode}">
  <div class="gamemode ${mode}">
    <span class="gamemodeName">${mode}</span>
    <span class="roundsPlayed">${gamemode.roundsPlayed}</span>
    <span class="roundsPlayedText">Matches</span>
  </div>
  <div class="rankinfo">
    <div class="rankimage">
      ${ribbonImg}
      <img ${unknownemblem} src="https://battlebase.github.io/assets/ranks/${rankImage}.png"/>
    </div>
    <div class="rankblock">
      <div class="rankpointsblock">
        <span class="rankPoints">${rankPoints}</span>
        <span class="nextrankPoints">/ ${nextlevelxp}</span>
      </div>
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
        <span class="text">Top 10:</span>
        <span class="value">${gamemode.top10s}</span>
      </div>
      <div class="playerstat kills">
        <span class="text">Kills:</span>
        <span class="value">${gamemode.kills}</span>
      </div>
      <div class="playerstat kd">
        <span class="text">K/D:</span>
        <span class="value">${kd}</span>
      </div>
    </div>
  </div>
  <div class="rankxpbarblock">
    <div class="xptonextlevel">
      ${xptonextleveltextblock}
    </div>
    <div class="xpbar">
      <div class="xpbarinner" style="width: ${xptonextlevelbar}%; ${xpbarflatstyle}">
        <div class="xpbarglow" style="${xpdotglow}"></div>
      </div>
      <span class="nextsubrankname">${nextsubrankname}</span>
    </div>
  </div>
  <div class="statsdetails">
    <div class="mainstatsblocks">
      <div class="mainstats combat">
        <div class="playerstatcol">
          <div class="playerstat kills">
            <span class="text">Kills:</span>
            <span class="value">${gamemode.kills}</span>
          </div>
          <div class="playerstat headshots">
            <span class="text">Headshots:</span>
            <span class="value">${gamemode.headshotKills}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat roundMostKills">
            <span class="text">Round Most Kills:</span>
            <span class="value">${gamemode.roundMostKills}</span>
          </div>
          <div class="playerstat maxKillStreaks">
            <span class="text">Kill Streaks:</span>
            <span class="value">${gamemode.maxKillStreaks}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat dailyKills">
            <span class="text">Daily Kills:</span>
            <span class="value">${gamemode.dailyKills}</span>
          </div>
          <div class="playerstat weeklyKills">
            <span class="text">Weekly Kills:</span>
            <span class="value">${gamemode.weeklyKills}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat damageDealt">
            <span class="text">Damage Dealt:</span>
            <span class="value">${gamemode.damageDealt}</span>
          </div>
          <div class="playerstat longestKill">
            <span class="text">Longest Kill:</span>
            <span class="value">${longestKill} m</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat knockouts">
            <span class="text">Knockouts:</span>
            <span class="value">${gamemode.dBNOs}</span>
          </div>
          <div class="playerstat assists">
            <span class="text">Assists:</span>
            <span class="value">${gamemode.assists}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat roadKills">
            <span class="text">Roadkills:</span>
            <span class="value">${gamemode.roadKills}</span>
          </div>
          <div class="playerstat vehicleDestroys">
            <span class="text">Vehicles Destroyed:</span>
            <span class="value">${gamemode.vehicleDestroys}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat suicides">
            <span class="text">Suicides:</span>
            <span class="value">${gamemode.suicides}</span>
          </div>
          <div class="playerstat teamKills">
            <span class="text">Team Kills:</span>
            <span class="value">${gamemode.teamKills}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat suicides">
            <span class="text">Daily Wins:</span>
            <span class="value">${gamemode.dailyWins}</span>
          </div>
          <div class="playerstat teamKills">
            <span class="text">Weekly Wins:</span>
            <span class="value">${gamemode.weeklyWins}</span>
          </div>
        </div>
      </div>
      <div class="mainstats medic">
        <div class="playerstatcol">
          <div class="playerstat heals">
            <span class="text">Heals:</span>
            <span class="value">${gamemode.heals}</span>
          </div>
          <div class="playerstat boosts">
            <span class="text">Boosts:</span>
            <span class="value">${gamemode.boosts}</span>
          </div>
        </div>
      </div>
      <div class="mainstats traveled">
        <div class="playerstatcol">
          <div class="playerstat totaldistance">
            <span class="text">Total Distance:</span>
            <span class="value">${totaltraveled} Km</span>
					</div>
				</div>
				<div class="playerstatcol">
          <div class="playerstat walkDistance">
            <span class="text">Walked Distance</span>
            <span class="value">${walkDistance} Km</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat swimDistance">
            <span class="text">Swim Distance:</span>
            <span class="value">${swimDistance} Km</span>
					</div>
				</div>
				<div class="playerstatcol">
          <div class="playerstat rideDistance">
            <span class="text">Ride Distance:</span>
            <span class="value">${rideDistance} Km</span>
          </div>
        </div>
      </div>

			<div class="mainstats survival">
			<div class="playerstatcol">
          <div class="playerstat mostSurvivalTime">
            <span class="text">Longest Time Survived:</span>
            <span class="value">${mostSurvivalTime}</span>
          </div>
        </div>
        <div class="playerstatcol">
          <div class="playerstat mostSurvivalTime">
            <span class="text">Total Time Survived:</span>
            <span class="value">${timeSurvived}</span>
					</div>
				</div>
      </div>

      <div class="mainstats looter">
        <div class="playerstatcol">
          <div class="playerstat weaponsAcquired">
            <span class="text">Weapons Acquired:</span>
            <span class="value">${gamemode.weaponsAcquired}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
		showgamemodetitletpp = showgamemodetitletpp + 1;
		showgamemodetitlefpp = showgamemodetitlefpp + 1;
		}
		else {
			statblocksmain[mode] = `
        <div class="playerStatsblock ${mode}">
				</div>`
				showgamemodetitletpp = showgamemodetitletpp - 1;
				showgamemodetitlefpp = showgamemodetitlefpp - 1;
		}
	});
	if(showgamemodetitletpp > 0){
		gamemodetitletpp = `
			<div class="playerstattitle tpp">
				<span class="gamemodename">TPP</span>
			</div>
			`;
	}
	if(showgamemodetitlefpp > 0){
		gamemodetitlefpp = `
			<div class="playerstattitle fpp">
				<span class="gamemodename">FPP</span>
			</div>
			`;
	}
	var soloBlock = statblocksmain.solo;
	var duoBlock = statblocksmain.duo;
	var squadBlock = statblocksmain.squad;
	var solofppBlock = statblocksmain['solo-fpp'];
	var duofppBlock = statblocksmain['duo-fpp'];
	var squadfppBlock = statblocksmain['squad-fpp'];
	console.log("alltimesurvived "+alltimesurvived)
	alltimesurvived = fancyTimeFormat(alltimesurvived);
	console.log("All time survived: "+alltimesurvived)
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
		<div class="seasontitle">
			<div class="seasonname">Current Season</div>
		</div>
		<div class="playerstattotals">
			<div class="totalblock">
				<div class="totalstats alltimesurvived">
					<span class="text">Total Time Survived:</span>
					<span class="value">${alltimesurvived}</span>
				</div>
				<div class="totalstats matches">
					<span class="text">Total Matches Played:</span>
					<span class="value">${totalMatches}</span>
				</div>
			</div>
			<div class="totalblock">
				<div class="totalstats totalwins">
					<span class="text">Total Wins:</span>
					<span class="value">${totalWins}</span>
				</div>
				<div class="totalstats totalTop10">
					<span class="text">Total Top 10:</span>
					<span class="value">${totalTop10}</span>
				</div>
			</div>
			<div class="totalblock">
				<div class="totalstats totalkills">
					<span class="text">Total Kills:</span>
					<span class="value">${totalKills}</span>
				</div>
				<div class="totalstats totalheadshots">
					<span class="text">Total Headshots:</span>
					<span class="value">${totalHeadshots}</span>
				</div>
			</div>
			
		</div>
	<div class="playerstatgamemodes">
		${gamemodetitletpp}
		<div class="gamemodesblock tpp">
    ${soloBlock}
    ${duoBlock}
    ${squadBlock}
		</div>
		${gamemodetitlefpp}
		<div class="gamemodesblock fpp">
    ${solofppBlock}
    ${duofppBlock}
    ${squadfppBlock}
    </div>
  </div>
	`
	$('.playerStatsMain').html(playerstatsblock);
	$('.playerStatsMain').css("display", "none");
	$('.playerStatsMain').fadeIn();

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

