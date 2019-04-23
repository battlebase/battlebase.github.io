var mapUrl = 'https://battlebase.github.io/map/';
mapUrl = '../'
var maps = {
  "Desert_Main": "Miramar",
  "DihorOtok_Main": "Vikendi",
  "Erangel_Main": "Erangel",
  "Range_Main": "Camp Jackal",
  "Savage_Main": "Sanhok" 
};
var maps_sizes = {
  Desert_Main: 8000,
  DihorOtok_Main: 6000,
  Erangel_Main: 8000,
  Range_Main: 4000,
  Savage_Main: 4000
}
var parachutePath = [
  {
    "x": 2468,
    "y": 1358,
    "z": 2869
  },
  {
    "x": 2454,
    "y": 1372,
    "z": 2830
  },
  {
    "x": 2446,
    "y": 1372,
    "z": 2778
  },
  {
    "x": 2442,
    "y": 1373,
    "z": 2729
  },
  {
    "x": 2440,
    "y": 1373,
    "z": 2684
  },
  {
    "x": 2438,
    "y": 1373,
    "z": 2603
  },
  {
    "x": 2438,
    "y": 1373,
    "z": 2533
  },
  {
    "x": 2439,
    "y": 1373,
    "z": 2394
  },
  {
    "x": 2439,
    "y": 1376,
    "z": 2332
  },
  {
    "x": 2440,
    "y": 1377,
    "z": 2259
  },
  {
    "x": 2440,
    "y": 1379,
    "z": 2168
  },
  {
    "x": 2440,
    "y": 1378,
    "z": 1861
  },
  {
    "x": 2439,
    "y": 1375,
    "z": 1802
  },
  {
    "x": 2441,
    "y": 1382,
    "z": 1783
  },
  {
    "x": 2444,
    "y": 1396,
    "z": 1773
  },
  {
    "x": 2448,
    "y": 1410,
    "z": 1765
  },
  {
    "x": 2452,
    "y": 1423,
    "z": 1757
  },
  {
    "x": 2455,
    "y": 1437,
    "z": 1752
  },
  {
    "x": 2460,
    "y": 1455,
    "z": 1747
  },
  {
    "x": 2463,
    "y": 1468,
    "z": 1738
  },
  {
    "x": 2466,
    "y": 1479,
    "z": 1727
  },
  {
    "x": 2469,
    "y": 1490,
    "z": 1715
  },
  {
    "x": 2472,
    "y": 1502,
    "z": 1701
  },
  {
    "x": 2475,
    "y": 1514,
    "z": 1689
  },
  {
    "x": 2480,
    "y": 1529,
    "z": 1683
  },
  {
    "x": 2483,
    "y": 1541,
    "z": 1679
  },
  {
    "x": 2486,
    "y": 1554,
    "z": 1672
  },
  {
    "x": 2489,
    "y": 1566,
    "z": 1662
  },
  {
    "x": 2492,
    "y": 1577,
    "z": 1650
  },
  {
    "x": 2495,
    "y": 1589,
    "z": 1637
  },
  {
    "x": 2499,
    "y": 1601,
    "z": 1624
  },
  {
    "x": 2502,
    "y": 1614,
    "z": 1614
  },
  {
    "x": 2505,
    "y": 1627,
    "z": 1604
  },
  {
    "x": 2509,
    "y": 1640,
    "z": 1594
  },
  {
    "x": 2512,
    "y": 1653,
    "z": 1585
  },
  {
    "x": 2515,
    "y": 1665,
    "z": 1573
  },
  {
    "x": 2519,
    "y": 1678,
    "z": 1564
  },
  {
    "x": 2522,
    "y": 1690,
    "z": 1554
  },
  {
    "x": 2525,
    "y": 1703,
    "z": 1544
  },
  {
    "x": 2529,
    "y": 1716,
    "z": 1536
  },
  {
    "x": 2532,
    "y": 1729,
    "z": 1527
  },
  {
    "x": 2536,
    "y": 1742,
    "z": 1518
  },
  {
    "x": 2539,
    "y": 1756,
    "z": 1512
  },
  {
    "x": 2545,
    "y": 1774,
    "z": 1508
  },
  {
    "x": 2547,
    "y": 1781,
    "z": 1499
  },
  {
    "x": 2549,
    "y": 1791,
    "z": 1487
  },
  {
    "x": 2553,
    "y": 1806,
    "z": 1486
  },
  {
    "x": 2557,
    "y": 1820,
    "z": 1480
  },
  {
    "x": 2560,
    "y": 1832,
    "z": 1470
  },
  {
    "x": 2563,
    "y": 1845,
    "z": 1458
  },
  {
    "x": 2567,
    "y": 1859,
    "z": 1451
  },
  {
    "x": 2573,
    "y": 1871,
    "z": 1444
  },
  {
    "x": 2577,
    "y": 1884,
    "z": 1440
  },
  {
    "x": 2583,
    "y": 1898,
    "z": 1436
  },
  {
    "x": 2586,
    "y": 1911,
    "z": 1431
  },
  {
    "x": 2590,
    "y": 1925,
    "z": 1427
  },
  {
    "x": 2594,
    "y": 1939,
    "z": 1422
  },
  {
    "x": 2597,
    "y": 1952,
    "z": 1420
  },
  {
    "x": 2600,
    "y": 1962,
    "z": 1418
  },
  {
    "x": 2602,
    "y": 1972,
    "z": 1415
  },
  {
    "x": 2600,
    "y": 1986,
    "z": 1408
  },
  {
    "x": 2602,
    "y": 1984,
    "z": 1408
  },
  {
    "x": 2605,
    "y": 1988,
    "z": 1410
  },
  {
    "x": 2609,
    "y": 1993,
    "z": 1412
  }
];
var plotParachutePath = [];
for(var p = 0;p < parachutePath.length;p++){
  var path = parachutePath[p];
  var x = path.x;
  var y = path.y;
  var plotpath = [y,x];
  plotParachutePath.push(plotpath)
}
console.log(plotParachutePath)

var liveMap = 'Savage_Main_8';

var iconsUrl = 'https://kingdomcomemap.github.io/assets/images/';
var tilesUrl = mapUrl+liveMap+"/{z}_{x}_{y}.jpg";
var maxNativeZoom = 5;
var mapMinZoom = 0;
var mapMaxZoom = 5;

var mapSize = maps_sizes[liveMap];
console.log(mapSize);
var tileSize = 256;
var mapScale = mapSize / tileSize; // 6144 / 192 = 32.
var mapOffset = mapSize / mapScale / 2; //6144 / 192 / 2 = 96
var halfTile = tileSize / 2; // 192 / 2 = 96
var mapBounds = mapSize;

function mapCRS(mapSize){
  L.CRS.MySimple = L.extend({}, L.CRS.Simple, {
    // At zoom 0, tile 256px x 256px should represent the entire "world" of size 8192 x 8192.
    // Scale is therefore 8192 / 256 = 32 (use the reverse in transformation, i.e. 1 / 32).
    // We want the center of tile 0/0/0 to be coordinates [0, 0], so offset is 8912 * 1 / 32 / 2 = 128.
    transformation: new L.Transformation(1 / mapScale, 0, 1 / mapScale, 0)
  });
}
mapCRS(mapSize)

var myBounds = [[0,3999],[3999, 0]];

var map = L.map('map', {
  maxNativeZoom: maxNativeZoom,
  minZoom: mapMinZoom,
  maxZoom: mapMaxZoom,
  zoomControl: false,
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topright'
  },
  crs: L.CRS.MySimple,

}).setView([mapSize/2,mapSize/2], 2);

L.tileLayer(tilesUrl, {
  maxNativeZoom: maxNativeZoom,
  minZoom: mapMinZoom,
  maxZoom: mapMaxZoom,
  tileSize: tileSize,
  noWrap: true,
  tms: false,
  bounds: myBounds,
  continuousWorld: true
}).addTo(map);

map.setMaxBounds([[-4000, 8000], [8000, -4000]]);

window.latLngToPixels = function(latlng) {
  return window.map.project([latlng.lat, latlng.lng], window.map.getMaxZoom());
};

window.pixelsToLatLng = function(x, y) {
  return window.map.unproject([x, y], window.map.getMaxZoom());
};

var popup = L.popup();

new L.Control.Zoom({position: 'topright'}).addTo(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

//sidebar.open('home');

var hash = new L.Hash(map);


// Using Leaflet.Coordinates plugin at https://github.com/MrMufflon/Leaflet.Coordinates
	// Patch first to avoid longitude wrapping
	L.Control.Coordinates.include({
		_update: function(evt) {
			var pos = evt.latlng,
			opts = this.options;
			if (pos) {
				//pos = pos.wrap(); // Remove that instruction
				this._currentPos = pos;
				this._inputY.value = L.NumberFormatter.round(pos.lat, opts.decimals, opts.decimalSeperator);
				this._inputX.value = L.NumberFormatter.round(pos.lng, opts.decimals, opts.decimalSeperator);
				this._label.innerHTML = this._createCoordinateLabel(pos);
			}
		}
	});

	L.control.coordinates({
		position: "bottomright",
		decimals: 0, //optional default 4
		decimalSeperator: ".", //optional default "."
		labelTemplateLat: "Y: {y}", //optional default "Lat: {y}"
		labelTemplateLng: "X: {x}", //optional default "Lng: {x}"
		enableUserInput: true, //optional default true
		useDMS: false, //optional default false
		useLatLngOrder: false, //ordering of labels, default false -> lng-lat
		markerType: L.marker, //optional default L.marker
		markerProps: {} //optional default {}
	}).addTo(map);

var layerGroups = [];

function getIcon(index) {
  var icon = markers[index].icon;
  var markerIcon = L.icon({
    iconUrl: iconsUrl+icon+'.png',//iconsUrl+"nest.png" 'leaf-green.png',
    iconSize: [36,36], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -18],
    // point from which the popup should open relative to the iconAnchor
  });

  return markerIcon;
}

var polylinePoints = [
        [37.781814, -122.404740],
        [37.781719, -122.404637],
        [37.781489, -122.404949],
        [37.780704, -122.403945],
        [37.780012, -122.404827]
      ];            
var polyline = new L.Polyline(plotParachutePath, {className: 'parachutePath'}).addTo(map);
/*
for (var i = 0; i < regions.length; i++) {
  // Se o grupo não existir em layerGroups...
  if (layerGroups[regions[i].group] == undefined) {
    // Cria o grupo
    layerGroups[regions[i].group] = new L.LayerGroup();
  }
  // Adiciona a marcação
  L.polygon(regions[i].coords, {color: '#aa861e',opacity: 1,weight: 3,fillColor: '#aa861e',fillOpacity: 0.1,}).bindPopup(regions[i].group + "<br>").addTo(layerGroups[regions[i].group]);
}
*/

//var polygon = L.polygon([[51.509, -0.08],[51.503, -0.06],[51.51, -0.047]]).addTo(mymap);

var textLayer = [];

var transparentMarker = L.icon({
        iconUrl: iconsUrl+'alpha_marker.png',
        iconSize: [1, 1],
        iconAnchor: [iWidth, iHeight],
        popupAnchor: [0, -iHeight]
      });

for (var i = 0; i < textMarkers.length; i++) {
  // Se o grupo não existir em layerGroups...
  if (layerGroups.textmarkers == undefined) {
    // Cria o grupo
    layerGroups.textmarkers = new L.LayerGroup();
  }
  // Adiciona a marcação
  var textMarker = new L.marker(textMarkers[i].coords, { opacity: 0.0, icon: transparentMarker }); //opacity may be set to zero
  textMarker.bindTooltip(textMarkers[i].name, {permanent: true, direction: "top", className: "text-label", offset: [0, 0] });
  textMarker.addTo(layerGroups.textmarkers); // Adds the text markers to map.
  //layerGroups.textmarkers.addTo(map);
  //console.log(layerGroups.textmarkers);
}

map.on('zoomend', function(e) {
  var size = map.getZoom();
  switch (size){  // zoom level

    case 0:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '12px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 1:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '14px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 2:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '16px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 3:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '18px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 4:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '20px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 5:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '20px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
  }
  //console.log(size);
});
// CUSTOM MARKERS

for (var i = 0; i < markers.length; i++) {
  // Se o grupo não existir em layerGroups...
  if (layerGroups[markers[i].group] == undefined) {
    // Cria o grupo
    layerGroups[markers[i].group] = new L.LayerGroup();
  }
  if (markers[i].desc == undefined) {
    markers[i].desc = "";
  }
  var x = (markers[i].coords[1].toFixed(0)/4096*5862).toFixed(0);
  var y = (markers[i].coords[0].toFixed(0)/4096*5862).toFixed(0);
  
  var origin_x = (markers[i].coords[1]);
  var origin_y = (markers[i].coords[0]);
  
  var conv_x = (markers[i].coords[1]*(5862/4096)-136);
  var conv_y = (markers[i].coords[0]*(5862/4096)-272);
  
  // 1330, 4935
  // 1209 Y: 4493
  // Adiciona a marcação  x/4096 *5862 -2931, y/4096 *5862 -2931 
  var marker = L.marker([x, y], {icon: getIcon(i)}).bindPopup(markers[i].name + "<br>"+ markers[i].desc + "<p class='original_coords'>Original:"+origin_y+","+origin_x+"</p>" + "<p class='original_coords'>Converted:"+y+","+x+"</p>").addTo(layerGroups[markers[i].group]);
  var info = layerGroups[markers[i].group].getLayerId(marker);
  //marker._leaflet_id
  //console.log(this);
}

var cities = document.getElementById('cities');

function toggle(element, layer) {
  if (element.checked) {
    map.addLayer(layerGroups[layer]);
  } else {
    $('#allmarkers').prop('checked', false);
    map.removeLayer(layerGroups[layer]);
  }
}

	// TOGGLE ALL LAYERS
	
	var allmarkers = document.getElementById('allmarkers');
	
	function toggleAll(element) {
			if (element.checked) {
				$('.markers-list input').prop('checked', true);
				for (var key in layerGroups) {
					map.addLayer(layerGroups[key]);
				}
			} else {
				$('.markers-list input').prop('checked', false);
				for (var keys in layerGroups) {
					map.removeLayer(layerGroups[keys]);
				}
			}
		}

	allmarkers.onchange = function() {toggleAll(this)};


/*
$('.remove').on('click', function(e) {
  //console.log(group);
  map.removeLayer(publicGroup);
});

$('.add').on('click', function(e) {
  //console.log(publicLayer.groupOne);
  map.addLayer(publicGroup);
});
*/
/*
// Dynamically create inputs based on marker groups
function createInputs() {
  var previousGroup = null;
  
  for (var i = 0; i < markers.length; i++) {
    if (previousGroup != markers[i].group) {
      previousGroup = markers[i].group;
      
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.className = "cc";
      input.id = markers[i].group;
      input.onchange = function() {
        toggle(this, this.id);
      };

      var label = document.createElement('label');
      label.for = markers[i].group;
      label.className = "cl";
      label.setAttribute('data-i18n', markers[i].group);
      label.innerHTML = markers[i].name;
      

      var text = document.createTextNode(markers[i].group);

      label.appendChild(text);

      var br = document.createElement('br');

      var inner = document.getElementsByClassName('inputlist');
      inner[0].appendChild(input);
      inner[0].appendChild(label);
      inner[0].appendChild(br);
    }
  }
}
createInputs();
*/

//cities.onchange = function() {toggle(this, 'textmarkers')};

$('.markers-list input').each(function() {
  this.onchange = function() {
    toggle(this, this.id);
    if (this.id == "textmarkers") {
      if ($(this.id).is(':checked')) {
        $('.text-label').css('visibility', 'hidden');
        $('.text-label.secondary').css('visibility', 'hidden');
      } else {
        $('.text-label').css('visibility', 'visible');
        $('.text-label').css('font-size', '24px');
        $('.text-label.secondary').css('visibility', 'hidden');
      }
    }
  };
});

// URL Function
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
// Example link https://web.com?id=123&page=home&link=none

var first = getUrlVars()["id"];
var second = getUrlVars()["page"];
var third = getUrlVars()["link"];

/*
$(function () {
           var hash = window.location.hash.substr(1);// "90aab585-1641-43e9-9979-1b53d6118faa";
           
           if (!hash) return false;
          
           //show loading
           $(".loadingOverlay").show();


           $.ajax({
               type: "GET",
               url: appUrl + "/Home/GetAlert/"+hash, 
               dataType: 'json',
               contentType: 'application/x-www-form-urlencoded',
               success: function (data) {
                   if (!data.status)
                   {
                       $('#msg').html(data.message).attr("class","alert alert-warning");
                       $(".loadingOverlay").hide();
                       return false;
                   }
                   $.each(data.message, function (i, item) {
                      
                       var popupLoc = new L.LatLng(item.Latitude, item.Longitude);
                       var popupContent = "<div class='infoDiv'><h3><img src='" + appUrl + img + "' width='24' />" + item.Name + "</h3><p>" + item.Title + "</p><a href='#' data-value='" + item.AlertId + "' class='btn btn-success btn-sm alertInfo' data-toggle='modal' data-target='#alertDetails'>Details</a></div>";

                       //initialize the popup;
                     var popup = new L.Popup();
                       //set latlng
                       popup.setLatLng(popupLoc);
                       //set content
                       popup.setContent(popupContent);
                       map.setView(new L.LatLng(item.Latitude, item.Longitude), 8);
                      //display popup
                       map.addLayer(popup);
                      
                   });

               }

           })
       .done(function () {
           $(".loadingOverlay").hide();        
           map.invalidateSize(true);
       });
          
       });
       
       function addMarker(e){
// Add marker to map at click location; add popup window
var newMarker = new L.marker(e.latlng).addTo(map);
}
});
*/

var locatedGroup = L.layerGroup();
markers.forEach(function (items) {
  var marker = L.marker(items.latLng, {
    title: items.name,
    riseOnHover: true
  }).bindPopup(items.name);

  // Add each marker to the group
  locatedGroup.addLayer(marker);

  // Save the ID of the marker with it's data
  items.marker_id = locatedGroup.getLayerId(marker);
  //console.log(items.marker_id);
});

//var url = location.hash;
//var type = url.split('#');


markers.forEach(function (items) {
  $('.locate').on('click', function(){
    var locateMarker = $(this).attr('data-marker');
    if(locateMarker == items.title){
      var locatedMarkerIcon = L.icon({
        iconUrl: iconsUrl+'alpha_marker.png',
        iconSize: [iWidth, iHeight],
        iconAnchor: [iWidth / 2, iHeight],
        popupAnchor: [0, -iHeight]
      });

      $('#'+items.group).prop('checked', true);
      map.addLayer(layerGroups[items.group]);

      var locatedMarker = L.marker(items.coords, {icon: locatedMarkerIcon}).bindPopup(items.name + "<br>"+ items.desc).addTo(map);
      map.panTo(locatedMarker.getLatLng());
      locatedMarker.openPopup();
      locatedMarker.on('popupclose', function() {
        map.removeLayer(locatedMarker);
      });
    };
  });
});

// Limit input of coordinates range
function numonly(e){
  $("#mlat,#mlon").keyup(function() {
    var val = $(this).val().replace(/-?\d+[^0-9]+/,"");
    if (val => 2934){
      !/^\s*$/.test(val);
      if (val > 0) {
        val = (parseInt(val) > 2934) ? 2934 : val;
      }else{
        val = (parseInt(val) > -2394) ? val : -2394;
      }

    }
    else {
      (!/^\s*$/.test(val));
      if (val > 0) {
        val = (parseInt(val) > 2934) ? 2934 : val;
      }else{
        val = (parseInt(val) > -2394) ? val : -2394;
      }
    }
    $(this).val(val);
  });
}
// End limit input of coordinates range



function getAObj(obj,name) {
  for (e in obj) {
    if (obj[e].name == name)
      return obj[e].value;
  };
  return 0;
};

// Available markers to add on click
var mapMarkers=["arrow","accident","alchemy_bench","apothecary","archery_range","armourer","baker","bandit_camp","baths","beehive","blacksmith","boar_hunting_spot","butcher","camp","cave","charcoal_burner","cobbler","combat_arena","conciliation_cross","deer_hunting_spot","fast_travel","fish_trap","fishing_spot","grave","grindstone","grocer","herbalist","home","horse_trader","huntsman","interesting_site","lodgings","miller","mine","nest","scribe","shrine","tailor","tanner","tavern","trader","treasure_chest","treasure_map","treasure_map_alt","vegetable_shop","weaponsmith","woodland_garden","amanita","belladonna","chamomile","comfrey","dandelion","eyebright","herb_paris","marigold","mint","nettle","poppy","sage","st_johns_wort","thistle","valerian","wormwood","marker_a","marker_b","marker_c","star","exclamation", "unknown"];

/*
function getIconNew(index) {
  var icon = mapMarkersNew[index];
  var markerIcon = L.icon({
    iconUrl: iconsUrl+icon+'.png',//iconsUrl+"nest.png" 'leaf-green.png',
    iconSize: [36,36], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -18],
    // point from which the popup should open relative to the iconAnchor
  });

  return markerIcon;
}
*/

var markerIconTypes = [];
for (var i in mapMarkers) {
  var icon = mapMarkers[i];
  var iWidth = 32;
  var iHeight = 32;
  // make the icon while we are here
  markerIconTypes[i] = L.icon({
    className: "",
    iconUrl: iconsUrl + icon.replace(/ /g, "") + '.png',
    iconSize: [iWidth, iHeight],
    iconAnchor: [iWidth / 2, iHeight / 2,],
    popupAnchor: [0, -iHeight / 2]
  });
};
// End available markers to add on click

// User added markers
var groupUser = [];
initUserLayerGroup();
function initUserLayerGroup() {
	var markersUser = [];
  if (localStorage.mapUserMarkers !== undefined) {
    var storageMarkers = [];

    storageMarkers = JSON.parse(localStorage.mapUserMarkers);

    for (var i = 0; i < storageMarkers.length; i++) {
      var x = storageMarkers[i].coords.x;
      var y = storageMarkers[i].coords.y;
      var name = storageMarkers[i].name;
      var icon = storageMarkers[i].icn_saved;
      var title = storageMarkers[i].title;
      var desc = storageMarkers[i].desc;

      var customIcon = L.icon({
        iconUrl: iconsUrl + icon + '.png',
        iconSize: [36,36],
        iconAnchor: [18,18], //storageMarkers[i].icon.options.iconAnchor,
        popupAnchor:  [0,-18], //storageMarkers[i].icon.options.popupAnchor
				className: "",
      });
      
      var iconSelection = "";
      for (var k = 0; k < mapMarkers.length; k++) {
        //var css = '.'+mapMarkers[k].icon+' {background-image:url(https://kingdomcomemap.github.io/assets/images/'+mapMarkers[k].icon+'.png);}';
        //console.log(css);
        iconSelection += '<div class="icn_selection"><i class="'+mapMarkers[k]+'"></i><p class="icn_name">'+mapMarkers[k].replace(/_/gi, " ")+'</p></div>';
      };
      //console.log(iconSelection);

			var popupcontent = '<div class="popcontent">\
			<span class="mtitle">'+name+'</span><br>\
			<span class="mdesc">'+desc+'</span><br>\
			<span class="mcoords">X: '+y+' Y: '+x+'</span></div>\
			<button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
			<div id="edit-dialog" class="hide">\
      <div class="icn_menu hide">\
      <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
      <div class="icn_list">'+iconSelection+'</div>\
      <button class="icn_menu_cancel" data-i18n="cancel">Cancel</button></div>\
      <div class="edited_content">\
      <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
      <div class="icn_selected"><i name="slt_icon" class="'+icon+'"></i></div>\
      <input type="hidden" id="icn_saved" name="icn_saved" value="'+icon+'">\
      <input type="text" id="editedtitle" name="title" value="'+title+'">\
      <textarea id="editeddesc" name="desc">'+desc+'</textarea>\
      <button class="cancel" data-i18n="cancel">Cancel</button>\
      <button class="save-marker" data-i18n="Save">Save</button>\
      </div>\
      </div>\
			<button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
			<div id="remove-dialog" class="hide">\
			<span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
			<button class="yes" data-i18n="yes">Yes</button>\
			<button class="no" data-i18n="no">No</button>\
      </div>';
      var marker = L.marker([x, y], {draggable: false,icon: customIcon}).bindPopup(popupcontent);

      marker.on("popupopen", onPopupOpen);
      markersUser.push(marker);
    }
  } else {
		localStorage.mapUserMarkers = "[]";
	}
	groupUser = L.layerGroup(markersUser);
  map.addLayer(groupUser);
}
// End user added markers

// Change marker background image on select marker
function iconpref(value) {
  document.getElementById('iconprev').style.backgroundImage = "url("+markerIconTypes[value].options.iconUrl+")";
};
// Change marker name image on select marker
function titlepref(value) {
  document.getElementById('titleprev').value = value.replace(/_/gi, " ");
};

function addMarkerText(lat,long) {
  //console.log(markerIconTypes);
  
  var iconSelection = "";
  for (var k = 0; k < mapMarkers.length; k++) {
    //var css = '.'+mapMarkers[k].icon+' {background-image:url(https://kingdomcomemap.github.io/assets/images/'+mapMarkers[k].icon+'.png);}';
    //console.log(css);
    iconSelection += '<div class="icn_selection"><i class="'+mapMarkers[k]+'"></i><p class="icn_name">'+mapMarkers[k].replace(/_/gi, " ")+'</p></div>';
  };
  //console.log(iconSelection);
  
  var message = '<div class="icn_menu hide">\
  <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
  <div class="icn_list">'+iconSelection+'</div>\
  <button class="icn_menu_cancel" data-i18n="cancel">Cancel</button></div>\
  <div class="popcontent">\
  <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
  <form id="addmark" method="post" action="#">\
  <div class="icn_selected"><i name="slt_icon" class="arrow"></i></div>\
  <input type="hidden" id="icn_saved" name="icn_saved" value="arrow">\
  <div class="markertitle" data-i18n="marker_title">Marker Title:</div>\
  <input type="text" id="titleprev" name="title" value="Arrow">\
  <div class="markerdesc" data-i18n="marker_desc">Marker Description:</div>\
  <textarea name="desc" onclick="this.value=\'\'; this.onclick = function(){}"></textarea>\
  <table class="coordsinputs">\
  <tr>\
  <td>X:<input type="text" readonly="readonly" name="mlon" id="mlon" maxlength="5" value="'+long+'" onKeyPress="return numonly(this,event)"></td>\
  <td>Y:<input id="mlat" type="text" readonly="readonly" name="mlat" maxlength="5" value="'+lat+'" onKeyPress="return numonly(this,event)"></td>\
  </tr>\
  </table>\
  <input type="hidden" name="submit" value="true">\
  <button type="submit" class="send" data-i18n="add">Add</button>\
  </form>\
  </div>';
  // 
  var ltn = {};
  ltn.lat = lat;
  ltn.lng = long;
  popup.setLatLng(ltn).setContent(message).openOn(map);
  
  $('.icn_selected i').click(function(){
    $(this).parents('.leaflet-popup-content').find('.icn_menu').removeClass('hide');
    $(this).parents('.leaflet-popup-content').find('.popcontent').addClass('hide');
  });
  $('.icn_menu_cancel').click(function(){
    $(this).parents('.leaflet-popup-content').find('.icn_menu').addClass('hide');
    $(this).parents('.leaflet-popup-content').find('.popcontent').removeClass('hide');
  })
  $('.icn_selection').click(function(){
    var icn_selected = $(this).find('i').attr('class');
    var icn_prev = $(this).parents('.leaflet-popup-content').find('.icn_selected i');
    icn_prev.attr('class', '').addClass(icn_selected);
    var icn_name = $(this).find('.icn_name').html();
    var icn_name_prev = $(this).parents('.leaflet-popup-content').find('#titleprev');
    icn_name_prev.val(icn_name);
    var icn_saved = $(this).parents('.leaflet-popup-content').find('#icn_saved');
    icn_saved.val(icn_selected);
    $(this).parents('.leaflet-popup-content').find('.icn_menu').addClass('hide');
    $(this).parents('.leaflet-popup-content').find('.popcontent').removeClass('hide');
  })
  
  // Add the mark
  $('#addmark').submit(function(e){
    var postData = $(this).serializeArray();
    var lat = Math.round(getAObj(postData,"mlat"));
    var lon = Math.round(getAObj(postData,"mlon"));
    postData.push({"name": "lat","value":lat});
    postData.push({"name": "lon","value":lon});

    var storageMarkers = [];
    var markersUser = [];

    if (localStorage.mapUserMarkers !== undefined) {
      storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    }
    storageMarkers.push({
      "coords": {
        "x": lat,
        "y": lon
      },
      "name": getAObj(postData,"title"),
      "title": getAObj(postData,"title"),
      "desc": getAObj(postData,"desc"),
      "icn_saved": getAObj(postData,"icn_saved")
    });
    popup._close();

    var popupcontent = '<div class="popcontent">\
    <span class="mtitle">'+getAObj(postData,'title')+'</span><br>\
    <span class="mtitle">'+getAObj(postData,'desc')+'</span><br>\
    <span class="mcoords">[ '+getAObj(postData,'mlon')+' , '+getAObj(postData,'mlat')+']</span></div>\
    <button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
    <div id="edit-dialog" class="hide">\
    <div class="icn_menu hide">\
    <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
    <div class="icn_list">'+iconSelection+'</div>\
    <button class="icn_menu_cancel" data-i18n="cancel">Cancel</button></div>\
    <div class="edited_content">\
    <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
    <div class="icn_selected"><i name="slt_icon" class="'+getAObj(postData,"icn_saved")+'"></i></div>\
    <input type="hidden" id="icn_saved" name="icn_saved" value="'+getAObj(postData,"icn_saved")+'">\
    <input type="text" id="editedtitle" name="title" value="'+getAObj(postData,'title')+'">\
    <textarea id="editeddesc" name="desc">'+getAObj(postData,'desc')+'</textarea>\
    <button class="cancel" data-i18n="cancel">Cancel</button>\
    <button class="save-marker" data-i18n="Save">Save</button>\
    </div>\
    </div>\
    <button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
    <div id="remove-dialog" class="hide">\
    <span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
    <button class="yes" data-i18n="yes">Yes</button>\
    <button class="no" data-i18n="no">No</button></div>'
    //
    
    var iconsaved = getAObj(postData,"icn_saved");

    var newIcon = L.icon({
        iconUrl: iconsUrl + iconsaved + '.png',
        iconSize: [36,36],
        iconAnchor: [18,18], //storageMarkers[i].icon.options.iconAnchor,
        popupAnchor:  [0,-18], //storageMarkers[i].icon.options.popupAnchor
				className: "",
      });
    
    var newMarker = L.marker({lat: lat, lng: lon},{icon: newIcon});
    newMarker.bindPopup(popupcontent);
    newMarker.addTo(map);
    newMarker.on("popupopen", onPopupOpen);
    markersUser.push(newMarker);
    groupUser.addLayer(newMarker);
    localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
    map.addLayer(groupUser);
    e.preventDefault(); 
  });
}

function onPopupOpen() {
  var _this = this;
  var clickedMarkerCoords = _this.getLatLng();
  var popup = _this.getPopup();
  
  var iconSelection = "";
  for (var k = 0; k < mapMarkers.length; k++) {
    //var css = '.'+mapMarkers[k].icon+' {background-image:url(https://kingdomcomemap.github.io/assets/images/'+mapMarkers[k].icon+'.png);}';
    //console.log(css);
    iconSelection += '<div class="icn_selection"><i class="'+mapMarkers[k]+'"></i><p class="icn_name">'+mapMarkers[k].replace(/_/gi, " ")+'</p></div>';
  };
  
  $(document).off('click', '.remove-marker')
  $(document).on('click', '.remove-marker', function() {
    $(this).addClass('hide');
    $(this).next('#remove-dialog').removeClass('hide');
    $(this).parent().parent().find('.popcontent').addClass('hide');
    $(this).parent().parent().find('.edit-marker').addClass('hide');
  });
  $(document).on('click', '.no', function() {
    $(this).parent('#remove-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
  });

  $(document).on('click', '.yes', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    for(i = storageMarkers.length; i > -1; i--) {
      if (typeof storageMarkers[i] != 'undefined' && 
          (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
           clickedMarkerCoords.lng == storageMarkers[i].coords.y)
         ) {
        storageMarkers.splice(i, 1);
        localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
      }
    }  
    //localStorage.removeItem('userMarkers');
    map.removeLayer(_this);
  });
  
   //Edit Marker
  $(document).on('click', '.edit-marker', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    for(i = storageMarkers.length; i > -1; i--) {
      if (typeof storageMarkers[i] != 'undefined' && 
          (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
           clickedMarkerCoords.lng == storageMarkers[i].coords.y)
         ) {
        $(this).parent().find('.icn_selected i').attr('class', '').addClass(storageMarkers[i].icn_saved);
      }
    }

    $(this).addClass('hide');
    $(this).next('#edit-dialog').removeClass('hide');
    $(this).parent().parent().find('.popcontent').addClass('hide');
    $(this).parent().parent().find('.remove-marker').addClass('hide');
  });
  $('.icn_selected i').click(function(){
    $(this).parents('.leaflet-popup-content').find('.icn_menu').removeClass('hide');
    $(this).parents('.leaflet-popup-content').find('.edited_content').addClass('hide');
  });
  $('.icn_menu_cancel').click(function(){
    $(this).parents('.leaflet-popup-content').find('.icn_menu').addClass('hide');
    $(this).parents('.leaflet-popup-content').find('.edited_content').removeClass('hide');
  })
  $('.icn_selection').click(function(){
    var icn_selected = $(this).find('i').attr('class');
    var icn_prev = $(this).parents('.leaflet-popup-content').find('.icn_selected i');
    icn_prev.attr('class', '').addClass(icn_selected);
    var icn_name = $(this).find('.icn_name').html();
    var icn_name_prev = $(this).parents('.leaflet-popup-content').find('#titleprev');
    icn_name_prev.val(icn_name);
    var icn_saved = $(this).parents('.leaflet-popup-content').find('#icn_saved');
    icn_saved.val(icn_selected);

    $(this).parents('.leaflet-popup-content').find('.icn_menu').addClass('hide');
    $(this).parents('.leaflet-popup-content').find('.edited_content').removeClass('hide');
  })
  
  $(document).on('click', '.cancel', function() {
    $(this).parents('.leaflet-popup-content').find('#edit-dialog').addClass('hide');
    $(this).parents('.leaflet-popup-content').find('.popcontent').removeClass('hide');
    $(this).parents('.leaflet-popup-content').find('.edit-marker').removeClass('hide');
    $(this).parents('.leaflet-popup-content').find('.remove-marker').removeClass('hide');
  });
  $(document).on('click', '.save-marker', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    for(i = storageMarkers.length; i > -1; i--) {
      if (typeof storageMarkers[i] != 'undefined' && 
          (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
           clickedMarkerCoords.lng == storageMarkers[i].coords.y)
         ) {
        var icn_saved = $(this).parent().find('.icn_selected i').attr('class');
        var editedtitle = $(this).parent().find('#editedtitle').val();
        var editeddesc = $(this).parent().find('#editeddesc').val();

        var editedpopup ='<div class="popcontent">\
<span class="mtitle">'+editedtitle+'</span><br>\
<span class="mtitle">'+editeddesc+'</span><br>\
<span class="mcoords">[ '+clickedMarkerCoords.lng+' , '+clickedMarkerCoords.lat+']</span></div>\
<button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
<div id="edit-dialog" class="hide">\
<div class="icn_menu hide">\
<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
<div class="icn_list">'+iconSelection+'</div>\
<button class="icn_menu_cancel" data-i18n="cancel">Cancel</button></div>\
<div class="edited_content">\
<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
<div class="icn_selected"><i name="slt_icon" class="'+icn_saved+'"></i></div>\
<input type="hidden" id="icn_saved" name="icn_saved" value="'+icn_saved+'">\
<input type="text" id="editedtitle" name="title" value="'+editedtitle+'">\
<textarea id="editeddesc" name="desc">'+editeddesc+'</textarea>\
<button class="cancel" data-i18n="cancel">Cancel</button>\
<button class="save-marker" data-i18n="Save">Save</button>\
</div>\
</div>\
<button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
<div id="remove-dialog" class="hide">\
<span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
<button class="yes" data-i18n="yes">Yes</button><button class="no" data-i18n="no">No</button></div>';
        popup.setContent(editedpopup);

        var newIcon = L.icon({
          iconUrl: iconsUrl + icn_saved + '.png',
          iconSize: [36,36],
          iconAnchor: [18,18], //storageMarkers[i].icon.options.iconAnchor,
          popupAnchor:  [0,-18], //storageMarkers[i].icon.options.popupAnchor
          className: "",
        });

        _this.setIcon(newIcon);
        storageMarkers[i].name = editedtitle;
        storageMarkers[i].title = editedtitle;
        storageMarkers[i].desc = editeddesc;
        storageMarkers[i].icn_saved = icn_saved;
        localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
      }
    } 
    popup._close();
  });
}

map.on('click', function (e) {
  var lat = Math.round(e.latlng.lat);
  var long = Math.round(e.latlng.lng);

  message = '<span class="coordsinfo">X: ' +long+ '' + 'Y: ' +lat+ '</span><br><button class="add-marker" data-i18n="add_marker" onclick="addMarkerText('+lat+','+long+')">Add marker</button>';
  popup.setLatLng(e.latlng).setContent(message).openOn(map);

});

$('#usermarkers').click(function(){
  if($(this).prop("checked") == true){
    map.addLayer(groupUser);
  }
  else if($(this).prop("checked") == false){
    map.removeLayer(groupUser);
  }
});
// End toggle user markers */


// Get markers from google sheet
function getGoogleData() {
  // SpreadSheet: https://docs.google.com/spreadsheets/d/1sSSCPQxDVBAmaB_5RXHFQo_fkpjjYR1SmSMxIl7wCbM/edit#gid=0
  var publicMarkers = [];
  var publicLayer = [];
  var spreadsheetID = '1sSSCPQxDVBAmaB_5RXHFQo_fkpjjYR1SmSMxIl7wCbM';
  var worksheetID = 'od6';
  var url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/' + worksheetID + '/public/values?alt=json';

  $.getJSON(url, function(data) {

    $.each(data.feed.entry, function(i, val) {
      //console.log(data);
      //console.log(data.feed.entry.length);

      if (publicLayer[val.gsx$layer.$t] == undefined) {
        // Cria o grupo
        publicLayer[val.gsx$layer.$t] = new L.LayerGroup();
      }

      // This sets the markers and the content of the pop ups
      var markerX = L.marker([val.gsx$lat.$t, val.gsx$lng.$t], {
        title: "marker_" + i
      }).addTo(publicLayer[val.gsx$layer.$t])
      .bindPopup('<h2>' + val.gsx$markertitle.$t + '</h2>' + val.gsx$markercontent.$t + '<img src="' + val.gsx$markerimage.$t + '" />');
      //console.log(publicLayer[val.gsx$layer.$t]);
      // push marker into an array
      publicMarkers.push(markerX);

      //on marker click corresponding list item highlights
      markerX.on('click', function(e) {
        $('li#marker_' + i).css('background-color', 'gray');
      });
      //on marker mouseout corresponding list item returns to normal  
      markerX.on('mouseout', function(e) {
        $('li#marker_' + i).css('background-color', '');
      });

      // This sets the list items 
      $(".list").append('<li id=\"marker_' + i + '\" data-zoom=\"6\" data-position=\"' + val.gsx$lat.$t + ', ' + val.gsx$lng.$t + '\">' + val.gsx$markertitle.$t + '</li>'); 
    });

    $("li").click(function() {
      var id = $(this).attr("id");
      for (var i in publicMarkers) {
        var markerID = publicMarkers[i].options.title;
        if (markerID == id) {
          publicMarkers[i].openPopup();
        };
      }
    });

    // put markers into a group to 
    var publicGroup = L.featureGroup(publicMarkers);//.addTo(map);
    //map.fitBounds(publicGroup.getBounds());
    $('.remove').on('click', function(e) {
      //console.log(group);
      map.removeLayer(publicGroup);
    });

    $('.add').on('click', function(e) {
      //console.log(publicLayer.groupOne);
      map.addLayer(publicGroup);
    });
  })
  
};

getGoogleData();




/*
var markers = new Array();
var newMarker;
newMarker = L.marker({lat: 0.07628231292517007, lng: 0.10161224489795918},{icon: markerIconTypes[10]});
newMarker.bindPopup("<b>Ironstone</b><br><span style='font-size:8px'>lat: "+0+" - lng: "+1+"</span><br>");
newMarker.addTo(map);
markers.push(newMarker);
*/
/*
Circle Shape
var redcircle = L.circle([0, 0], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.2,
  weight: 1,
  radius: 1000
}).addTo(map);
*/

$(document).on('click', '.clearls', function() {
  $(this).addClass('hide');
  $(this).next('.clearprompt').removeClass('hide');
});
$(document).on('click', '.clearyes', function() {
  $(this).parent('.clearprompt').addClass('hide');
  localStorage.setItem('mapUserMarkers', '[]');
  map.removeLayer(groupUser);
  initUserLayerGroup();
});
$(document).on('click', '.clearno', function() {
  $(this).parent('.clearprompt').addClass('hide');
});


$('.backupls').on('click', function(e) {
  var backup = {};
  var mapUserMarkers = localStorage.mapUserMarkers;
  var langactive = localStorage.langactive;
  backup.markers = mapUserMarkers;
  backup.langactive = langactive;

  var json = JSON.stringify(backup);
  var base = btoa(json);
  var href = 'data:text/javascript;charset=utf-8;base64,' + base;
  var link = document.createElement('a');
    link.setAttribute('download', 'backup_kcdmap.json');
  link.setAttribute('href', href);
  document.querySelector('body').appendChild(link);
  link.click();
  link.remove();
});

$('.restorels').on('click', function(e) {
  var t = document.createElement('div');
  t.className = "restoreWindow";
  var a = document.createElement('a');
  a.className = "restoreWindowX";
  a.appendChild(document.createTextNode('×'));
  a.setAttribute('href', '#');
  t.appendChild(a);
  a.onclick = function() {
      t.remove();
  };

  var l = document.createElement('input');
  l.setAttribute('type', 'file');
  l.setAttribute('id', 'fileinput');
  l.onchange = function(e) {
      t.remove();
      var f = e.target.files[0];
      if (f) {
          var reader = new FileReader();
          reader.onload = function(e) {
              var text = e.target.result;
            text = JSON.parse(text);
            localStorage.setItem('mapUserMarkers', text.markers);
            localStorage.setItem('langactive', text.langactive);
            initUserLayerGroup();
              alert('Imported markers from backup.')
          };
          reader.readAsText(f);
      } else {
        alert('Failed to load file');
      }
  };
  var a = document.createElement('h3');
  a.className = "restoreTitle";
  a.appendChild(document.createTextNode('Select file with backup'));
  t.appendChild(a);
  t.appendChild(l);
  document.querySelector('body').appendChild(t);
});

var localStorageClear = function() {
  if(window.confirm('Do you really want to delete all ' + localStorage.length + ' localStorage items of this website?')) {
    localStorage.clear();
  }
}




$('.toggle-title').click(function(){
		$(this).toggleClass('active');
		$(this).next('.hidden-content').slideToggle(500);
	});
	
	$('.toggle-content').click(function(){
		$(this).toggleClass('active');
		$(this).next('.hidden-content').slideToggle(500);
	});
	
	// Language visual toggle
	var langactive = localStorage.getItem('langactive');
  if (langactive === null) {
    localStorage.setItem('langactive', 'en');
    $('.langswitch').find('.lang[data-lang="en"]').addClass('active');
    $('.langswitch').find('.lang[data-lang="en"]').find('.checkmark').addClass('active');
  }
  else {
    $('.langswitch').find('.lang[data-lang="+langactive+"]').addClass('active');
    $('.langswitch').find('.lang[data-lang="+langactive+"]').find('.checkmark').addClass('active');
  }
  $('.lang').click(function(){
    localStorage.setItem('langactive', $(this).data('lang'));
    $(this).parent().find('.lang-text').removeClass('active');
    $(this).find('.lang-text').addClass('active');
    $(this).parent().find('.lang').removeClass('active');
    $(this).addClass('active');
    $(this).parent().find('.checkmark').removeClass('active');
    $(this).find('.checkmark').addClass('active');
  });