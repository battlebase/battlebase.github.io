$$(document).on('pageInit', function(e) {
  
var dbversion = "1.0";
$('.dbversion').html(dbversion);

var gameversion = "2.5.26.0";
$('.gameversion').html(gameversion);

function sortOn (arr, prop) {
  arr.sort (
    function (a, b) {
      if (a[prop] < b[prop]){
          return -1;
      } else if (a[prop] > b[prop]){
          return 1;
      } else {
          return 0;   
      }
    }
  );
}

var carepackageitems = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.carepackage === "yes") {
  carepackageitems.push(PUBGITEMS[i]);
}
}
$('.carepackageitems').empty()
//sortOn(carepackageitems, "item");
$(carepackageitems).each(function displayResults (i, pubg){
var crateitems = ('<div class="listcard '+pubg.item+'"></div>')
$('.carepackageitems').append(crateitems);
})

var pioneercrateitems = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.crate === "pioneercrate") {
  pioneercrateitems.push(PUBGITEMS[i]);
}
}
$('.pioneercrateitems').empty();
$(pioneercrateitems).each(function displayResults (i, pubg){
var crateitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.pioneercrateitems').append(crateitems);
})

var pioneercrateitems = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.crate === "pioneercrate") {
  pioneercrateitems.push(PUBGITEMS[i]);
}
}
$('.pioneercrateitems').empty();
$(pioneercrateitems).each(function displayResults (i, pubg){
var crateitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.pioneercrateitems').append(crateitems);
})

var survivorcrateitems = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.crate === "survivorcrate") {
  survivorcrateitems.push(PUBGITEMS[i]);
}
}
$('.survivorcrateitems').empty();
$(survivorcrateitems).each(function displayResults (i, pubg){
var crateitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.survivorcrateitems').append(crateitems);
})


var wanderercrateitems = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.crate === "wanderercrate") {
  wanderercrateitems.push(PUBGITEMS[i]);
}
}
$('.wanderercrateitems').empty();
$(wanderercrateitems).each(function displayResults (i, pubg){
var crateitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.wanderercrateitems').append(crateitems);
})

var gamescomcrateitems = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.crate === "gamescomcrate") {
  gamescomcrateitems.push(PUBGITEMS[i]);
}
}
$('.gamescomcrateitems').empty()
$(gamescomcrateitems).each(function displayResults (i, pubg){
var crateitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.gamescomcrateitems').append(crateitems);
})

var clotheshead = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "head") {
    clotheshead.push(PUBGITEMS[i]);
  }
}
$('.clotheshead').empty();
sortOn(clotheshead, "item");
$(clotheshead).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clotheshead').append(clotheitems);
});

var clotheseyes = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "eyes") {
    clotheseyes.push(PUBGITEMS[i]);
  }
}
$('.clotheseyes').empty();
sortOn(clotheseyes, "item");
$(clotheseyes).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clotheseyes').append(clotheitems);
});

var clothesface = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "face") {
    clothesface.push(PUBGITEMS[i]);
  }
}
$('.clothesface').empty();
sortOn(clothesface, "item");
$(clothesface).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clothesface').append(clotheitems);
});

var clothestorso = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "torso") {
    clothestorso.push(PUBGITEMS[i]);
  }
}
$('.clothestorso').empty();
sortOn(clothestorso, "item");
$(clothestorso).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clothestorso').append(clotheitems);
});

var clothesouter = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "outer") {
    clothesouter.push(PUBGITEMS[i]);
  }
}
$('.clothesouter').empty();
sortOn(clothesouter, "item");
$(clothesouter).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clothesouter').append(clotheitems);
});

var clotheshands = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "hands") {
    clotheshands.push(PUBGITEMS[i]);
  }
}
$('.clotheshands').empty();
sortOn(clotheshands, "item");
$(clotheshands).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clotheshands').append(clotheitems);
});

var clotheslegs = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "legs") {
    clotheslegs.push(PUBGITEMS[i]);
  }
}
$('.clotheslegs').empty();
sortOn(clotheslegs, "item");
$(clotheslegs).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clotheslegs').append(clotheitems);
});

var clothesfeet = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "feet") {
    clothesfeet.push(PUBGITEMS[i]);
  }
}
$('.clothesfeet').empty();
sortOn(clothesfeet, "item");
$(clothesfeet).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-clothes '+pubg.item+'"></div>')
$('.clothesfeet').append(clotheitems);
});

var clothesset = [];
for (var i = 0; i < PUBGITEMS.length; i++){
  var pubg = PUBGITEMS[i];
  if (pubg.clothetype === "set") {
    clothesset.push(PUBGITEMS[i]);
  }
}
$('.clothesset').empty();
sortOn(clothesset, "item");
$(clothesset).each(function displayResults (i, pubg){
var clotheitems = ('<div class="listcard-set '+pubg.item+'"></div>');
$('.clothesset').append(clotheitems);
});

var circles = [];
for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
if (pubg.type === "circle") {
  circles.push(PUBGITEMS[i]);
}
}
$('.circles').empty()
//sortOn(carepackageitems, "item");
$(circles).each(function displayResults (i, pubg){
var circlesinfo = ('<div class="circleinfo '+pubg.item+'"></div>');
$('.circles').append(circlesinfo);
});

/*
clotheshead.sort(function(a, b){
  if(a.item < b.item) return -1;
  if(a.item > b.item) return 1;
  return 0;
})
*/

for (var i = 0; i < PUBGITEMS.length; i++){
var pubg = PUBGITEMS[i];
pubg['icon2'] = (pubg['icon2'] == undefined) ? "none" : pubg['icon2'];
pubg['icontext'] = (pubg['icontext'] == undefined) ? "" : pubg['icontext'];
pubg['icontext2'] = (pubg['icontext2'] == undefined) ? "" : pubg['icontext2'];
pubg['icontexti18'] = (pubg['icontexti18'] == undefined) ? "" : pubg['icontexti18'];
pubg['icontext2i18'] = (pubg['icontext2i18'] == undefined) ? "" : pubg['icontext2i18'];
pubg['capacity'] = (pubg['capacity'] == undefined) ? "" : pubg['capacity'];
pubg['type'] = (pubg['type'] == undefined) ? "" : pubg['type'];
pubg['amount'] = (pubg['amount'] == undefined) ? "" : pubg['amount'];
pubg['quantity'] = (pubg['quantity'] == undefined) ? "" : pubg['quantity'];
pubg['desc'] = (pubg['desc'] == undefined) ? "" : pubg['desc'];
pubg['bonusbar'] = (pubg['bonusbar'] == undefined) ? "none" : pubg['bonusbar'];
pubg['bartype'] = (pubg['bartype'] == undefined) ? "" : pubg['bartype'];
pubg['bonus1'] = (pubg['bonus1'] == undefined) ? "" : pubg['bonus1'];
pubg['bonustype1'] = (pubg['bonustype1'] == undefined) ? "" : pubg['bonustype1'];
pubg['bonustype1i18'] = (pubg['bonustype1i18'] == undefined) ? "" : pubg['bonustype1i18'];
pubg['bonus2'] = (pubg['bonus2'] == undefined) ? "" : pubg['bonus2'];
pubg['bonustype2'] = (pubg['bonustype2'] == undefined) ? "" : pubg['bonustype2'];
pubg['bonustype2i18'] = (pubg['bonustype2i18'] == undefined) ? "" : pubg['bonustype2i18'];
pubg['bonus3'] = (pubg['bonus2'] == undefined) ? "" : pubg['bonus2'];
pubg['bonustype3'] = (pubg['bonustype3'] == undefined) ? "" : pubg['bonustype3'];
pubg['bonustype3i18'] = (pubg['bonustype3i18'] == undefined) ? "" : pubg['bonustype3i18'];
pubg['bonus4'] = (pubg['bonus4'] == undefined) ? "" : pubg['bonus4'];
pubg['bonustype4'] = (pubg['bonustype4'] == undefined) ? "" : pubg['bonustype4'];
pubg['bonustype4i18'] = (pubg['bonustype4i18'] == undefined) ? "" : pubg['bonustype4i18'];
pubg['setitems'] = (pubg['setitems'] == undefined) ? "" : pubg['setitems'];
//pubg['set'] = (pubg['set'] == undefined) ? "" : pubg['set'];
pubg['setname'] = (pubg['setname'] == undefined) ? "" : pubg['setname'];
pubg['rarity'] = (pubg['rarity'] == undefined) ? "none" : pubg['rarity'];
pubg['bp'] = (pubg['bp'] == undefined) ? "" : pubg['bp'];
pubg['promolink'] = (pubg['promolink'] == undefined) ? "" : pubg['promolink'];
pubg['promoinfo'] = (pubg['promoinfo'] == undefined) ? "" : pubg['promoinfo'];
pubg['iteminfo'] = (pubg['iteminfo'] == undefined) ? "" : pubg['iteminfo'];
pubg['itemtype'] = (pubg['itemtype'] == "promo") ? "none" : pubg['itemtype'];
pubg['probability'] = (pubg['probability'] == undefined) ? "" : pubg['probability'];

$(".circleinfo." + pubg.item).html
('<p class="circle" data-i18n="'+ pubg.item +'">'+ pubg.name +'</p>'+
'<p class="info">'+
'<span class="diameter" data-i18n="Diameter">Diameter:</span>'+
'<span class="val">'+ pubg.diameter +'</span>'+
'</p>'+
'<p class="info">'+
'<span class="damage" data-i18n="Damage">Damage:</span>'+
'<span class="val">'+ pubg.damage +'</span>'+
'</p>'+
'<p class="info">'+
'<span class="survivetime" data-i18n="SurviveFor">Survive for:</span>'+
'<span class="val">'+ pubg.survivefor +'</span>'+
'</p>'+
'<p class="info">'+
'<span class="traveltime" data-i18n="TravelTime">Travel time:</span>'+
'<span class="val">'+ pubg.traveltime +'</span>'+
'</p>');


$(".listcard-backpacks." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="Capacity">Capacity:</span>'+
'<span class="val">'+pubg.capacity+'</span>'+
'</p>' +
'</div>'+
'</a>');

$(".listcards-backpacks." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="Capacity">Capacity:</span>'+
'<span class="val">'+pubg.capacity+'</span>'+
'</p>' +
'</div>'+
'</a>');

$(".backpacks." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="cap" data-i18n="Capacity">Capacity:</span>'+
'<span class="ivalue">'+pubg.capacity+'</span>'+
'</p>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'<i class="'+pubg.icon2+'"></i>'+
'</div>'+
'</div>');

$(".listcard-helmets." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="val">'+pubg.amount+'</span>'+
'</p>' +
'</div>'+
'</a>');

$(".helmets." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="cap" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="ivalue">'+pubg.amount+'</span>'+
'</p>'+
'<p>'+
'<span class="cap" data-i18n="'+pubg.dmgtexti18+'">'+pubg.dmgtext+':</span>'+
'<span class="ivalue">'+pubg.dmgreduction+'</span>'+
'</p>'+
'</div>'+
'<div class="r-details">'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<div class="icon1">'+
'<i class="'+pubg.icon+'"></i>'+
'<p class="icontext" data-i18n="'+ pubg.icontexti18 +'">'+ pubg.icontext +'</p>' +
'</div>'+
'<div class="icon2">'+
'<i class="'+pubg.icon2+'"></i>'+
'<p class="icontext" data-i18n="'+ pubg.icontext2i18 +'">'+ pubg.icontext2 +'</p>' +
'</div>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
'</div>'+
'</div>');

$(".listcard-vests." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="val">'+pubg.amount+'</span>'+
'</p>' +
'</div>'+
'</a>');

$(".vests." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="cap" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="ivalue">'+pubg.amount+'</span>'+
'</p>'+
'<p>'+
'<span class="cap" data-i18n="'+pubg.dmgtexti18+'">'+pubg.dmgtext+':</span>'+
'<span class="ivalue">'+pubg.dmgreduction+'</span>'+
'<p>'+
'</p>'+
'<span class="cap" data-i18n="Capacity">Capacity:</span>'+
'<span class="ivalue">'+pubg.capacity+'</span>'+
'</p>'+
'</div>'+
'<div class="r-details">'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'<i class="'+pubg.icon2+'"></i>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
'</div>'+
'</div>');

$(".listcard-health." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="val">'+pubg.amount+'</span>'+
'</p>' +
'</div>'+
'</a>');

$(".health." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="type" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="ivalue">'+pubg.amount+'</span>'+
'</p>'+
'</div>'+
'<div class="r-details">'+
'<p>'+
'<span class="usagetime" data-i18n="UsageTime">Usage time:</span>'+
'<span class="ivalue">'+pubg.usetime+'</span>'+
'</p>'+
'</div>'+
'<div class="'+pubg.bonusbar+'">'+
'<div class="'+pubg.bartype[0]+'"></div>'+
'<div class="bar '+pubg.bartype[1]+'"></div>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
'</div>'+
'</div>'
);

$(".listcard-booster." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="val">'+pubg.amount+'</span>'+
'</p>' +
'</div>'+
'</a>');

$(".booster." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="type" data-i18n="'+pubg.i18type+'">'+pubg.type+':</span>'+
'<span class="ivalue">'+pubg.amount+'</span>'+
'</p>'+
'<p>'+
'<span class="totalheal" data-i18n="TotalHeal">Total Heal:</span>'+
'<span class="ivalue">'+pubg.totalHeal+'</span>'+
'</p>'+
'</div>'+
'<div class="r-details">'+
'<p>'+
'<span class="usagetime" data-i18n="UsageTime">Usage time:</span>'+
'<span class="ivalue">'+pubg.usetime+'</span>'+
'</p>'+
'<p>'+
'<span class="duration" data-i18n="Duration">Duration:</span>'+
'<span class="ivalue">'+pubg.duration+'</span>'+
'</p>'+
'</div>'+
'<div class="booster-bonus">'+
'<div class="'+pubg.bartype[0]+'"></div>'+
'</div>'+
'<div class="'+pubg.bonusbar+'">'+
'<div class="bar '+pubg.bartype[1]+'"></div>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.i18n+'Desc">'+pubg.desc+'</span>'+
'</div>'+
'</div>'
);

$(".listcard-set." + pubg['item']).html
('<div class="list">'+
  '<a href="set-'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['item'] +'"></i>' +
'<p class="name" data-i18n="'+ pubg['item'] +'">'+ pubg['name'] +'</p>' +
'</a>'+
'<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+pubg.name+'" class="steamlink steambox external">'+
'<i class="steamicon"></i>'+
'</a>'+
'</div>');

var itemset = "";
if (pubg.set != undefined) {
for (var j in PUBGITEMS[i].set) {
itemset += '<div class="listcard-set '+ PUBGITEMS[i].set[j]+'"></div>';
}
} else {itemset = "";}


var clotheinfo = "";
if (pubg.itemtype != undefined) {
clotheinfo +=  '<div class="content-block blackbb1px">'+
            '<p class="text">'+
            '<span data-i18n="'+ pubg.item +'promotext">'+ pubg.promoinfo +'</span>'+
            '</p>'+
            '<a class="promolink external" href="'+ pubg.promolink +'">'+
            '<i class="link-icon"></i>'+
            '<span class="promolinktext" data-i18n="StorePage">Store Page</span>'+
            '</a>'+
            '</div>'
} else {clotheinfo = "";}

var rarityinfo = "";
if (pubg.rarity != undefined) {
rarityinfo +=   '<div class="rpblock">'+
                '<p class="rarityblock '+ pubg.rarity +'">'+
                '<span class="rarity-text" data-i18n="Rarity">Rarity:</span>'+
                '<span class="rarity-value '+ pubg.rarity +'" data-i18n="'+pubg.raritytext+'">'+ pubg.raritytext +'</span>'+
                '</p>'+
                '</div>'
} else {rarityinfo = "";}






$(".listcard-clothes." + pubg.item).html
('<div class="list">'+
'<a href="#set-'+ pubg.item+'" class="item-list">' +
'<div class="rarity '+ pubg.rarity +'"></div>'+
'<i class="'+ pubg.item +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg.item +'">'+ pubg.name +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="Probability">Probability:</span>'+
'<span class="val">'+pubg.probability+'%</span>'+
'</p>' +
'</div>'+
'</a>'+
'<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+pubg.name+'" class="steamlink steambox external">'+
'<i class="steamicon"></i>'+
'</a>'+
'</div>'+
'<div class="hiddenpage">'+
'<div class="navbar-inner cached" data-page="set-'+ pubg.item+'">'+
'<div class="center">'+ pubg.name +'</div>'+
'<div class="right"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>'+
'</div>'+
'<div class="page cached" data-page="set-'+ pubg.item+'">'+
'<div class="navbar">'+
'<div class="navbar-inner">'+
'<div class="left"><a href="index.html" class="back link icon-only"><i class="icon icon-back"></i></a></div>'+
'<div class="center">'+
'<span class="pagetitle" data-i18n="set-'+ pubg.item+'">'+ pubg.name +'</span>'+
'</div>'+
'<div class="right"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>'+
'</div>'+
'</div>'+
'<div class="page-content">'+
'<div class="single-item '+ pubg.item+' menu">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.item+'">'+pubg.name+'</p>'+
'</div>'+
'<div class="l-details">'+
'<p>'+
'<span class="bp">'+pubg.bp+'</span>'+
'</p>'+
'<p class="probability '+ pubg.rarity +'">'+
'<span class="probability-text" data-i18n="Probability">Probability:</span>'+
'<span class="probability-value">'+ pubg.probability +' %</span>'+
'</p>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.item+'"></i>'+
'</div>'+
rarityinfo+
'<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+pubg.name+'" class="steamlink item-list external">'+
'<i class="steamicon"></i>'+
'<span class="name steamlinktext" data-i18n="ViewOnSteamMarket">View on Steam Market</span>'+
'</a>'+
'<div class="titleblock" data-i18n="FoundIn">Found In:</div>'+
'<div class="list">'+
'<a href="'+pubg.crate+'.html" class="item-list">'+
'<i class="'+pubg.crate+'"></i>'+
'<p class="name" data-i18n="'+pubg.crate+'">'+pubg.cratename+'</p>'+
'</a>'+
'<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+pubg.name+'" class="steamlink steambox external">'+
'<i class="steamicon"></i>'+
'</a>'+
'</div>'+
itemset+
clotheinfo+
'</div>'+
'</div>'+
'</div>'+
'</div>'
);

$(".clothes." + pubg.item).html
('<div class="backdrop"></div>'+
'<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.item+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="bp">'+pubg.bp+'</span>'+
'</p>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.item+'"></i>'+
'</div>'+
'</div>');


$(".listcard-crates." + pubg.item).html
('<div class="item-list">' +
'<i class="'+ pubg.icon +'"></i>' +
'<p class="name" data-i18n="'+ pubg.item +'">'+ pubg.name +' '+ pubg.number +'</p>' +
'</div>'
);

$(".listcard-cratescost." + pubg.item).each(function(e){
  var cost = $(this).data('cost');
  var number = $(this).data('number');
$(this).html
('<div class="item-list">' +
'<i class="'+ pubg.icon +'"></i>' +
'<p class="name">'+
'<span data-i18n="'+ pubg.item +'">'+ pubg.name +'</span>'+
'<span class="number ml5px"># '+number+'</span>'+
'</p>' +
'<div class="list-info">'+
'<p class="info" data-i18n="BattlePoints">Battle Points</p>'+
'<p class="info-value">'+cost+ ' BP</p>'+
'</div>'+
'</div>'
);
});


$(".set." +pubg.item).html
(
'<div class="content-block blackbb1px">'+
'<div class="item-image">'+
'<i class="'+pubg.item+'"></i>'+
'</div>'+
'<p class="text" data-i18n="set-text">'+
'A set of Battle Royale movie inspired/related clothing.'+
'</p>'+
'<p class="text" data-i18n="set-text2">'+
'You can receive this set randomly when opening a GAMESCOM INVITATIONAL CRATE.'+
'</p>'+
'<p class="text" data-i18n="set-text3">This set can\'t be obtained in-game with Battle Points (BP).'+
'</p>'+
'<p class="text" data-i18n="set-text4">'+
'This set is marketable/tradable.'+
'</p>'+
'<p class="text" data-i18n="set-text5">'+
'You don\'t need a key to open this set.'+
'</p>'+
'</div>'+
'<div class="steampage '+pubg.item+'"></div>'+
'<div class="titleblock" data-i18n="FoundIn">Found In:</div>'+
'<div class="listcardcrate gamescomcrate"></div>'+
'<div class="titleblock" data-i18n="Items">Items:</div>'+
'<div class="crateitems '+pubg.item+'"></div>'
);

var crateitems = "";
for (var j in PUBGITEMS[i].crateitems) {
crateitems += '<div class="listcard-clothes '+ PUBGITEMS[i].crateitems[j]+'"></div>';
}
$(".crateitems." + pubg.item).html
(crateitems);

$(".steampage." + pubg.item).html
('<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+pubg.name.toUpperCase()+'" class="item-list external">'+
'<i class="steamicon"></i>'+
'<span class="name steamlinktext" data-i18n="ViewOnSteamMarket">View on Steam Market</span>'+
'</a>'
);

$(".listcard-attachment." + pubg['item']).html
('<a href="attachment-'+ pubg['item'] +'.html" class="item-list attachment">' +
'<i class="'+ pubg['item'] +'"></i>' +
'<p class="name" data-i18n="'+ pubg['item'] +'">'+ pubg['name'] +'</p>' +
'</a>');


var attweapons = "";
for (var w in PUBGITEMS[i].attweapons) {
attweapons += '<div class="listcard-wpns '+ PUBGITEMS[i].attweapons[w]+'"></div>';
}

$(".single-attachment."+pubg.item).html
('<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.item+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="type" data-i18n="'+pubg.unique+'">'+pubg.unique+'</span>'+
'</p>'+
'<p>'+
'<span class="weight" data-i18n="Weight">Weight:</span><span class="weight-value">'+pubg.weight+'</span>'+
'</p>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.item+'"></i>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.item+'-desc">'+pubg.desc+'</span>'+
'</div>'+
'<div class="attachableto" data-i18n="AttachableTo">Attachable to:</div>'+
'<div class="items-list">' +
attweapons +
'</div>');

$(".trowables." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="cap" data-i18n="Capacity">Capacity:</span>'+
'<span class="ivalue">'+pubg.weight+'</span>'+
'</p>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
'</div>'+
'</div>');

$(".melee." + pubg.item).html
('<div class="single-item">'+
'<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="cap" data-i18n="Damage">Damage:</span>'+
'<span class="ivalue">'+pubg.damage+'</span>'+
'</p>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'</div>'+
'<div class="item-desc">'+
'<span class="description" data-i18n="'+pubg.i18desc+'">'+pubg.desc+'</span>'+
'</div>'+
'</div>');

$(".card-vehicles." + pubg.item).html
('<a href="vehicles-'+ pubg.item +'.html" class="item-vehicle">' +
'<p class="name" data-i18n="'+ pubg.item +'">'+ pubg.name +'</p>' +
'<i class="'+ pubg.item +'"></i>' +
'</a>'+
'</div>'
);

$(".vehicles." + pubg.item).html
('<div class="single-item">'+
'<div class="item-image vehicle">'+
'<img src="img/vehicles/'+pubg.item+'2.png"></i>'+
'</div>'+
'<div class="vehicle-details">'+
'<p class="name" data-i18n="'+pubg.item+'">'+pubg.name+'</p>'+
'<p>'+
'<span class="cap" data-i18n="Seats">Seats:</span>'+
'<span class="ivalue" >'+pubg.seats+'</span>'+
'</p>'+
'<p>'+
'<span class="cap" data-i18n="Health">Health:</span>'+
'<span class="ivalue" >'+pubg.health+'</span>'+
'</p>'+
'<p>'+
'<span class="cap" data-i18n="MaxSpeed">Max Speed:</span>'+
'<span class="ivalue" >'+pubg.maxspeed+'</span>'+
'</p>'+
'</div>');

$(".listcardsights." + pubg['item']).html
('<a href="sights-'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['item'] +'"></i>' +
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>' +
'</a>'
);
var attachableto = "";
for (var j in PUBGITEMS[i].attachableto) {
attachableto += '<div class="listcard-wpns '+ PUBGITEMS[i].attachableto[j]+'"></div>';
}
$(".single-sight."+pubg.item).html
('<div class="item-details">'+
'<p class="name" data-i18n="'+pubg.i18n+'">'+pubg.name+'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="weight" data-i18n="Weight">Weight:</span><span class="weight-value">'+pubg.weight+'</span>'+
'</p>'+
'</div>'+
'</div>'+
'<div class="item-image">'+
'<i class="'+pubg.icon+'"></i>'+
'</div>'+
'<div class="attachableto" data-i18n="AttachableTo">Attachable to:</div>'+
'<div class="items-list">' +
attachableto +
'</div>');

// AMMO CARDS
var ammofor = "";
for (var j in PUBGITEMS[i].ammofor) {
ammofor += '<div class="listcard-wpns '+ PUBGITEMS[i].ammofor[j]+'"></div>';
}
pubg.desc = (pubg.desc == undefined) ? "" : pubg.desc;
pubg.ammofor = (pubg.ammofor == undefined) ? "" : pubg.ammofor;
$(".ammocard." + pubg.item).html
('<div class="single-item">' +
'<div class="item-details">' +
'<p class="name" data-i18n="'+ pubg.i18n +'">'+ pubg.name +'</p>' +
'<div class="l-details">'+
'<p>'+
'<span class="weight" data-i18n="Weight">Weight:</span><span class="weight-value">'+pubg.weight+'</span>'+
'</p>'+
'</div>'+
'</div>' +
'<div class="item-image">' +
'<i class="'+ pubg.icon +'"></i>' +
'</div>' +
'<div class="item-desc">' +
'<span class="description">'+ pubg.desc +'</span>' +
'<p class="ammo" data-i18n="AmmoFor">Ammo for:</p>' +
'</div>' +
'<div class="items-list">' +
ammofor +
'</div>'
);

$(".carepackage-ammo." + pubg['item']).html
('<a href="'+ pubg['item'] +'.html" class="item-list">' +
'<i class="'+ pubg['icon'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="Quantity">Quantity:</span>'+
'<span class="val ammoqnt"></span>'+
'</p>' +
'</div>'+
'</a>');


$(".carepackage-ammo").each(function(e){
  var ammoqnt = $(this).data('ammoqnt');
  $(this).find('.ammoqnt').html(ammoqnt);

});

}



for (var i = 0; i < PUBGITEMS.length; i++){
var pubgitems = PUBGITEMS[i];
pubgitems.verified = (pubgitems.verified === undefined) ? "" : pubgitems.verified;
pubgitems.slots = (pubgitems.slots === undefined) ? "none" : pubgitems.slots;
var muzzle = "";
for (var m in PUBGITEMS[i].muzzle) {
muzzle += '<div class="attselector '+ PUBGITEMS[i].muzzle[m]+'"></div>';
}
var grip = "";
for (var g in PUBGITEMS[i].grip) {
grip += '<div class="attselector '+ PUBGITEMS[i].grip[g]+'"></div>';
}
var mag = "";
for (var n in PUBGITEMS[i].mag) {
mag += '<div class="attselector '+ PUBGITEMS[i].mag[n]+'"></div>';
}
var stock = "";
for (var s in PUBGITEMS[i].stock) {
stock += '<div class="attselector '+ PUBGITEMS[i].stock[s]+'"></div>';
}
var attachs = "";
for (var j in PUBGITEMS[i].attachs) {
attachs += '<div class="attach '+ PUBGITEMS[i].attachs[j]+'"></div>';
}
var sights = "";
for (var k in PUBGITEMS[i].attsights) { 
sights += '<div class="sight '+ PUBGITEMS[i].attsights[k]+'"></div>';
}
var carepackage = "";
if (pubgitems.carepackage === "yes") {
  carepackage = ('<a href="carepackage.html" class=" carepkginfo item-list"><i class="carepackage"></i><p class="name package" data-i18n="CarePackageItem">Care package item</p></a>');
} else {carepackage = "";}

var dmghead = pubgitems.damage * (2.5).toFixed(2);
var dmgbody = pubgitems.damage;
var dmghelmet1 = dmghead - (dmghead * 0.3).toFixed(2);
var dmghelmet2 = dmghead - (dmghead * 0.4).toFixed(2);
var dmghelmet3 = dmghead - (dmghead * 0.55);
dmghelmet3 = (Math.round(dmghelmet3*100)/100).toFixed(2).replace(/[.,]00$/, "");
var dmgvest1 = dmgbody - (dmgbody * 0.3).toFixed(2);
var dmgvest2 = dmgbody - (dmgbody * 0.4).toFixed(2);
var dmgvest3 = dmgbody - (dmgbody * 0.55);
dmgvest3 = (Math.round(dmgvest3*100)/100).toFixed(2).replace(/[.,]00$/, "");
var dmgarmslegs = dmgbody - (dmgbody * 0.5).toFixed(2);

$(".listcard-wpns." + pubgitems['item']).html
('<a href="wpns-'+ pubgitems['item'] +'.html" class="item-list">' +
'<i class="'+ pubgitems['item'] +'"></i>' +
'<div class="item-text">'+
'<p class="name" data-i18n="'+ pubgitems['item'] +'">'+ pubgitems['name'] +'</p>'+
'<p class="infotext">'+
'<span class="info" data-i18n="Damage">Damage:</span>'+
'<span class="val">'+pubgitems.damage+'</span>'+
'</p>' +
'</div>'+
'</a>');


$(".card." + pubgitems.item).html
('<div class="single-item '+ pubgitems.typei18 +' '+ pubgitems.item +'">'+
'<div class="item-details blackbb1px">'+
'<p class="name" data-i18n="'+ pubgitems.item +'">'+ pubgitems.name +'</p>'+
'<div class="l-details">'+
'<p>'+
'<span class="type" data-i18n="'+ pubgitems.typei18 +'">'+ pubgitems.type +'</span>'+
'</p>'+
'</div>'+
'<div class="r-details">'+
'<p>'+
'<a href="'+ pubgitems.ammoIcon +'.html" class="ammo">'+
'<i class="ammo'+ pubgitems.ammoIcon +'"></i>'+
'<span class="ivalue" data-i18n="'+ pubgitems.ammoIcon +'">'+ pubgitems.ammo +'</span>'+
'<span class="capacity" data-capacity="'+ pubgitems.capacity +'">'+ pubgitems.capacity +'</span>'+
'</a>'+
'</p>'+
'</div>'+
'<div class="wpn-image">'+
'<div class="sights">'+
'<div class="slotchooserbg"></div>'+
'<i class="slot sight nothing"></i>'+
'<div class="slotchooser">'+
sights +
'</div>'+
'</div>'+
'<i class="icon-small '+ pubgitems.item +'"></i>'+
'<i class="icon-large '+ pubgitems.item +'-large"></i>'+
'<div class="slots">'+
'<div class="muzzle-slot">'+
'<div class="slotchooserbg"></div>'+
'<i class="slot '+ pubgitems.slots[0] +' nothing"></i>'+
'<div class="slotchooser">'+
muzzle +
'</div>'+
'</div>'+
'<div class="grip-slot">'+
'<div class="slotchooserbg"></div>'+
'<i class="slot '+ pubgitems.slots[1] +' nothing"></i>'+
'<div class="slotchooser">'+
grip +
'</div>'+
'</div>'+
'<div class="mag-slot">'+
'<div class="slotchooserbg"></div>'+
'<i class="slot '+ pubgitems.slots[2] +' nothing"></i>'+
'<div class="slotchooser">'+
mag +
'</div>'+
'</div>'+
'<div class="stock-slot">'+
'<div class="slotchooserbg"></div>'+
'<i class="slot '+ pubgitems.slots[3] +' nothing"></i>'+
'<div class="slotchooser">'+
stock +
'</div>'+
'</div>'+
'</div>'+
'<a id="'+ pubgitems.item +'" class="compare">'+
'<i class="c-icon"></i>'+
'<span class="c-text" data-i18n="Compare">Compare</span>'+
'</a>'+
'</div>'+
'<div class="wpn-desc">'+
'<span class="description" data-i18n="'+ pubgitems.i18desc +'">'+ pubgitems.desc +'</span>'+
'</div>'+
'</div>'+
carepackage+
'<div class="item-stats">'+
'<p class="stats" data-i18n="Damage">Damage</p>'+
'<div class="outer-bar damage" data-value="'+ pubgitems.damage +'">'+
'<span class="value damage">'+ pubgitems.damage +'</span>'+
'<div class="bonus-bar damage"></div>'+
'<div class="inner-bar damage"></div>'+
'</div>'+
'<p class="stats" data-i18n="BulletSpeed">Bullet Speed</p>'+
'<div class="outer-bar bulletspeed" data-value="'+ pubgitems.bulletspeed +'">'+
'<span class="value bulletspeed">'+ pubgitems.bulletspeed +'</span>'+
'<div class="bonus-bar bulletspeed"></div>'+
'<div class="inner-bar bulletspeed"></div>'+
'</div>'+
'<p class="stats" data-i18n="Range">Range</p>'+
'<div class="outer-bar range" data-value="'+ pubgitems.range +'">'+
'<span class="value range">'+ pubgitems.range +'</span>'+
'<div class="bonus-bar range"></div>'+
'<div class="inner-bar range"></div>'+
'</div>'+
'<p class="stats" data-i18n="Stability">Stability</p>'+
'<div class="outer-bar stability" data-value="'+ pubgitems.stability +'">'+
'<span class="value stability">'+ pubgitems.stability +'</span>'+
'<div class="bonus-bar stability"></div>'+
'<div class="inner-bar stability"></div>'+
'</div>'+
'<p class="stats" data-i18n="FiringRate">Firing Rate</p>'+
'<div class="outer-bar rate" data-value="'+ pubgitems.rate +'">'+
'<span class="value rate">'+ pubgitems.rate +'</span>'+
'<div class="bonus-bar rate"></div>'+
'<div class="inner-bar rate"></div>'+
'</div>'+
'</div>'+

'<div class="toggle-content">'+
'<span class="toggle-title more-stats" data-i18n="DamageDetails">Damage Details</span><i class="show"></i>'+
'<div class="hidden-content">'+

'<p class="dmgtitle">'+
'<span data-i18n="HeadDamage">Head Damage</span>'+
'<span class="percent">(250%)</span>'+
'</p>'+
'<div class="item-stats">'+
'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="NoHelmet">No Helmet</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmghead +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmghead" data-value="'+ dmghead +'">'+
'<span class="value dmghead">'+ dmghead +'</span>'+
'<div class="bonus-bar dmghead"></div>'+
'<div class="inner-bar dmghead"></div>'+
'</div>'+
'</div>'+

'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="HelmetLv1">Helmet Lv 1</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmghelmet1 +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmghelmet1" data-value="'+ dmghelmet1 +'">'+
'<span class="value dmghelmet1">'+ dmghelmet1 +'</span>'+
'<div class="bonus-bar dmghelmet1"></div>'+
'<div class="inner-bar dmghelmet1"></div>'+
'</div>'+
'</div>'+

'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="HelmetLv2">Helmet Lv 2</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmghelmet2 +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmghelmet2" data-value="'+ dmghelmet2 +'">'+
'<span class="value dmghelmet2">'+ dmghelmet2 +'</span>'+
'<div class="bonus-bar dmghelmet2"></div>'+
'<div class="inner-bar dmghelmet2"></div>'+
'</div>'+
'</div>'+

'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="HelmetLv3">Helmet Lv 3</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmghelmet3 +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmghelmet3" data-value="'+ dmghelmet3 +'">'+
'<span class="value dmghelmet3">'+ dmghelmet2 +'</span>'+
'<div class="bonus-bar dmghelmet3"></div>'+
'<div class="inner-bar dmghelmet3"></div>'+
'</div>'+
'</div>'+
'</div>'+

'<p class="dmgtitle">'+
'<span data-i18n="BodyDamage">Body Damage</span>'+
'<span class="percent">(100%)</span>'+
'</p>'+
'<div class="item-stats">'+
'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="NoVest">No Vest</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmgbody +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmgbody" data-value="'+ dmgbody +'">'+
'<span class="value dmgbody">'+ dmgbody +'</span>'+
'<div class="bonus-bar dmgbody"></div>'+
'<div class="inner-bar dmgbody"></div>'+
'</div>'+
'</div>'+

'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="VestLv1">Vest Lv 1</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmgvest1 +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmgvest1" data-value="'+ dmgvest1 +'">'+
'<span class="value dmgvest1">'+ dmgvest1 +'</span>'+
'<div class="bonus-bar dmgvest1"></div>'+
'<div class="inner-bar dmgvest1"></div>'+
'</div>'+
'</div>'+

'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="VestLv2">Vest Lv 2</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmgvest2 +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmgvest2" data-value="'+ dmgvest2 +'">'+
'<span class="value dmgvest2">'+ dmgvest2 +'</span>'+
'<div class="bonus-bar dmgvest2"></div>'+
'<div class="inner-bar dmgvest2"></div>'+
'</div>'+
'</div>'+

'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="VestLv3">Vest Lv 3</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="shots" data-value="'+ dmgvest3 +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmgvest3" data-value="'+ dmgvest3 +'">'+
'<span class="value dmgvest3">'+ dmgvest3 +'</span>'+
'<div class="bonus-bar dmgvest3"></div>'+
'<div class="inner-bar dmgvest3"></div>'+
'</div>'+
'</div>'+
'</div>'+

'<p class="dmgtitle">'+
'<span data-i18n="ArmsandLegsDamage">Arms and Legs Damage</span>'+
'<span class="percent">(50%)</span>'+
'</p>'+
'<div class="item-stats">'+
'<div class="statsblock">'+
'<p class="stats">'+
'<span data-i18n="ArmsandLegs">Arms and Legs</span>'+
'</p>'+
'<div class="stk">'+
'<span class="prts">(</span>'+
'<span class="shotstext" data-i18n="ShotstoKill">Shots to Kill:</span>'+
'<span class="dmgarmslegs shots" data-value="'+ dmgarmslegs +'"></span>'+
'<span class="prts">)</span>'+
'</div>'+
'<div class="outer-bar dmgarmslegs" data-value="'+ dmgarmslegs +'">'+
'<span class="value dmgarmslegs">'+ dmgarmslegs +'</span>'+
'<div class="bonus-bar dmgarmslegs"></div>'+
'<div class="inner-bar dmgarmslegs"></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+


'</div>'+
'</div>'+
'</div>');

$(".statsblock").each(function(e){
  var shots = $(this).find('.shots').data('value');
  if (shots >= 100) {
    shots = 1;
  }
  else if (shots >= 50 && shots <= 99) {
    shots = 2;
  }
  else if (shots >= 34 && shots < 50) {
    shots = 3;
  }
  else if (shots >= 25 && shots < 34) {
    shots = 4;
  }
  else if (shots >= 20 && shots < 25) {
    shots = 5;
  }
  else if (shots >= 17 && shots <= 19) {
    shots = 6;
  }
  else if (shots >= 15 && shots <= 16) {
    shots = 7;
  }
  else if (shots >= 13 && shots <= 14) {
    shots = 8;
  }
  else if (shots == 12) {
    shots = 9;
  }
  else if (shots == 11) {
    shots = 10;
  }
  else if (shots == 10) {
    shots = 10;
  }
  else {
    shots = "+10";
  }
$(this).find('.shots').html(shots);
});

$(".listcard." + pubgitems['item']).html
('<a href="'+ pubgitems['item'] +'.html" class="item-list">' +
'<i class="'+ pubgitems['item'] +'"></i>' +
'<p class="name" data-i18n="'+ pubgitems['i18n'] +'">'+ pubgitems['name'] +'</p>' +
'</a>'
);

$(".listcardcrate." + pubgitems['item']).html
('<div class="list">'+
'<a href="'+ pubgitems['item'] +'.html" class="item-list">' +
'<i class="'+ pubgitems['item'] +'"></i>' +
'<p class="name" data-i18n="'+ pubgitems['i18n'] +'">'+ pubgitems['name'] +'</p>' +
'</a>'+
'<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+pubgitems.name.toUpperCase()+'" class="steamlink steambox external">'+
'<i class="steamicon"></i>'+
'</a>'+
'</div>'
);

$(".sight." + pubgitems.item).html
  ('<div class="item-list attsight">' +
   '<i class="'+ pubgitems.item +'"></i>' +
   '<p class="name" data-i18n="'+ pubgitems.i18n +'">'+ pubgitems.name +'</p>' +
   '</div>'
  );

}


for (var i = 0; i < ATTACHMENTS.length; i++){
var attachitems = ATTACHMENTS[i];
attachitems.verified = (attachitems.verified === undefined) ? "" : attachitems.verified;
var capacity = $(".attselector." + attachitems.attachment).parents('.single-item').find('.capacity').data("capacity");
attachitems.unique = (attachitems.unique === undefined) ? "" : attachitems.unique;
//attachitems.capacity = (attachitems.capacity === undefined) ? capacity : attachitems.capacity;
$(".attach." + attachitems.attachment).html
('<div class="attachment-details">'+
'<i class="'+ attachitems.icon +'"></i>'+
'<a href="attachments-'+ attachitems.attachment +'.html" data-i18n="'+ attachitems.i18n +'" class="name">'+ attachitems.name +'</a>' +
'<span class="verified">'+ attachitems.verified +'</span>' +
'<input type="checkbox" class="att '+ attachitems.unique +'" data-bonus="'+ attachitems.bonus +'" data-value="'+ attachitems.value +'" data-capacity="'+ attachitems.capacity +'" />' +
'<label></label>'+
'</div>');

$(".attselector." + attachitems.attachment).html
('<div class="item-list att '+ attachitems.unique +'" data-bonus="'+ attachitems.bonus +'" data-value="'+ attachitems.value +'" data-capacity="'+ attachitems.capacity +'"">' +
'<i class="'+ attachitems.icon +'"></i>' +
'<p class="name" data-i18n="'+ attachitems.i18n +'">'+ attachitems.name +'</p>' +
'</div>'
);
}



$(".bar").html
('<div class="bar1">'+
'<div class="ibar1"></div>'+
'</div>'+
'<div class="bar2">'+
'<div class="ibar2"></div>'+
'</div>'+
'<div class="bar3">'+
'<div class="ibar3"></div>'+
'</div>'+
'<div class="bar4">'+
'<div class="ibar4"></div>'+
'</div>');

$('.att').click(function(){
  var id = $(this).parents('.card').attr('class').split(' ')[1];
  var quickdrawId = ("quickdraw"+id);
  var classes = $(this).attr('class').split(' ')[2];
  var removeClass = $(this).parents('.single-item').find('.slot.'+classes).attr('class').split(' ')[2];
  var bonus = $(this).data("bonus");
  var value = $(this).data("value");
  $(this).parents('.single-item').find('.slot.'+classes).attr(bonus, value);
  var vMuzzle = $(this).parents('.slots').find('.slot.muzzle').attr(bonus);
  var vGrip = $(this).parents('.slots').find('.slot.grip').attr(bonus);
  var vMag = $(this).parents('.slots').find('.slot.mag').attr(bonus);
  var vStock = $(this).parents('.slots').find('.slot.stock').attr(bonus);
  vMuzzle = (vMuzzle === undefined) ? "0" : vMuzzle;
  vGrip = (vGrip === undefined) ? "0" : vGrip;
  vMag = (vMag === undefined) ? "0" : vMag;
  vStock = (vStock === undefined) ? "0" : vStock;
  var capacity = $(this).parents('.single-item').find('.capacity').data("capacity");
  var newCapacity = $(this).data("capacity");
  newCapacity = (newCapacity === undefined) ? "" : newCapacity;
  var oldValue = $(this).parents('.single-item').find('.outer-bar.'+bonus).attr('data-value');
  var newValue = +oldValue + +vMuzzle + +vGrip + +vMag + +vStock;
  var attIcon = $(this).parent().find("i").attr('class');
  var attachment = $(this).parent().attr('class').split(' ')[1];
  $(this).parents('.single-item').find('.slot.'+classes).removeClass(removeClass);
  $(this).parents('.single-item').find('.slot.'+classes).addClass(attIcon);
  $(this).parents('.single-item').find('.value.'+bonus).html(newValue);
  $(this).parents('.single-item').find('.bonus-bar.'+bonus).width((newValue)+'%');
  if (newCapacity == "undefined") {
	  if (attIcon == "emptymag") {
		$(this).parents('.single-item').find('.capacity').html(capacity);
	  }
	  else if (attachment == quickdrawId) {
		$(this).parents('.single-item').find('.capacity').html(capacity);
	  }
  }
  else {
	$(this).parents('.single-item').find('.capacity').html(newCapacity);
  }
  if (classes == "mag") {
    if (newCapacity > capacity) {
    $(this).parents('.single-item').find('.capacity').addClass("yellow");
    } else {
    $(this).parents('.single-item').find('.capacity').removeClass("yellow");
    }
  }
  if (newValue > oldValue) {
    $(this).parents('.single-item').find('.value.'+bonus).addClass("yellow");
  } else {
    $(this).parents('.single-item').find('.value.'+bonus).removeClass("yellow");
  }
  $(this).parent().parent().slideToggle(500);
  $(this).parent().parent().parent().find('.slotchooserbg').fadeToggle(300);
  $(this).parent().parent().parent().find('.slotchooserbg').toggleClass('ontop');
  $(this).parent().parent().parent().find('.slot').toggleClass('ontop');
  $(this).parent().parent().parent().find('.slotchooser').toggleClass('ontop');
});


///////////////////////////////
$('.slot').click(function(){
$(this).parent().find('.slotchooser').slideToggle(300);
$(this).parent().find('.slotchooserbg').fadeToggle(500);
$(this).parent().find('.slotchooser').toggleClass('ontop');
$(this).toggleClass('ontop');
//$(this).parent().find('.storagename').toggleClass('ontop');
});

$('.slotchooserbg').click(function(){
$(this).parent().find('.slotchooser').slideToggle(300);
$(this).parent().find('.slotchooser').toggleClass('ontop');
$(this).parent().find('.slot').toggleClass('ontop');
$(this).fadeToggle(300);
});

$('.attsight').click(function(){
  var removeClass = $(this).parents('.sights').find('.slot').attr('class').split(' ')[2];
  var attIcon = $(this).parent().find("i").attr('class');
  $(this).parents('.sights').find('.slot').removeClass(removeClass);
  $(this).parents('.sights').find('.slot').addClass(attIcon);
  $(this).parent().parent().slideToggle(500);
  $(this).parent().parent().parent().find('.slotchooserbg').fadeToggle(300);
  $(this).parent().parent().parent().find('.slotchooserbg').toggleClass('ontop');
  $(this).parent().parent().parent().find('.slot').toggleClass('ontop');
  $(this).parent().parent().parent().find('.slotchooser').toggleClass('ontop');
});

$(".inner-bar").each(function(e){
  var bulletspd = $(this).attr('class').split(' ')[1];
  var value = $(this).parent().data('value');
  
  if (bulletspd == "bulletspeed") {
    $(this).width((value/10)+'%');
  }
  else {
    if (value > 100) {
      $(this).width((100)+'%');
    }
    else {
    $(this).width((value)+'%');
    }
  }
$(this).parent().find('.value').html(value);
});

function damageCheck() {
var damageOne = $(".item-one .value.damage").html();
var damageTwo = $(".item-two .value.damage").html();
if (+damageOne == +damageTwo) {
$(".item-one .value.damage").addClass("default");
$(".item-two .value.damage").addClass("default");
$(".item-one .outer-bar.damage .inner-bar").addClass("default");
$(".item-two .outer-bar.damage .inner-bar").addClass("default");
}
else if (+damageOne > +damageTwo) {
$(".item-one .value.damage").addClass("green");
$(".item-two .value.damage").addClass("red");
$(".item-one .outer-bar.damage .inner-bar").addClass("green");
$(".item-two .outer-bar.damage .inner-bar").addClass("red");
}
else {
$(".item-one .value.damage").addClass("red");
$(".item-two .value.damage").addClass("green");
$(".item-one .outer-bar.damage .inner-bar").addClass("red");
$(".item-two .outer-bar.damage .inner-bar").addClass("green");
}
}
function bulletSpeedCheck() {
var bulletspeedOne = $(".item-one .value.bulletspeed").html();
var bulletspeedTwo = $(".item-two .value.bulletspeed").html();
if (+bulletspeedOne == +bulletspeedTwo) {
$(".item-one .value.bulletspeed").addClass("default");
$(".item-two .value.bulletspeed").addClass("default");
$(".item-one .outer-bar.bulletspeed .inner-bar").addClass("default");
$(".item-two .outer-bar.bulletspeed .inner-bar").addClass("default");
}
else if (+bulletspeedOne > +bulletspeedTwo) {
$(".item-one .value.bulletspeed").addClass("green");
$(".item-two .value.bulletspeed").addClass("red");
$(".item-one .outer-bar.bulletspeed .inner-bar").addClass("green");
$(".item-two .outer-bar.bulletspeed .inner-bar").addClass("red");
}
else {
$(".item-one .value.bulletspeed").addClass("red");
$(".item-two .value.bulletspeed").addClass("green");
$(".item-one .outer-bar.bulletspeed .inner-bar").addClass("red");
$(".item-two .outer-bar.bulletspeed .inner-bar").addClass("green");
}
}
function rangeCheck() {
var rangeOne = $(".item-one .value.range").html();
var rangeTwo = $(".item-two .value.range").html();
if (+rangeOne == +rangeTwo) {
$(".item-one .value.range").addClass("default");
$(".item-two .value.range").addClass("default");
$(".item-one .outer-bar.range .inner-bar").addClass("default");
$(".item-two .outer-bar.range .inner-bar").addClass("default");
}
else if (+rangeOne > +rangeTwo) {
$(".item-one .value.range").addClass("green");
$(".item-two .value.range").addClass("red");
$(".item-one .outer-bar.range .inner-bar").addClass("green");
$(".item-two .outer-bar.range .inner-bar").addClass("red");
}
else {
$(".item-one .value.range").addClass("red");
$(".item-two .value.range").addClass("green");
$(".item-one .outer-bar.range .inner-bar").addClass("red");
$(".item-two .outer-bar.range .inner-bar").addClass("green");
}
}
function stabilityCheck() {
var stabilityOne = $(".item-one .value.stability").html();
var stabilityTwo = $(".item-two .value.stability").html();
if (+stabilityOne == +stabilityTwo) {
$(".item-one .value.stability").addClass("default");
$(".item-two .value.stability").addClass("default");
$(".item-one .outer-bar.stability .inner-bar").addClass("default");
$(".item-two .outer-bar.stability .inner-bar").addClass("default");
}
else if (+stabilityOne > +stabilityTwo) {
$(".item-one .value.stability").addClass("green");
$(".item-two .value.stability").addClass("red");
$(".item-one .outer-bar.stability .inner-bar").addClass("green");
$(".item-two .outer-bar.stability .inner-bar").addClass("red");
}
else {
$(".item-one .value.stability").addClass("red");
$(".item-two .value.stability").addClass("green");
$(".item-one .outer-bar.stability .inner-bar").addClass("red");
$(".item-two .outer-bar.stability .inner-bar").addClass("green");
}
}
function rateCheck() {
var rateOne = $(".item-one .value.rate").html();
var rateTwo = $(".item-two .value.rate").html();
if (+rateOne == +rateTwo) {
$(".item-one .value.rate").addClass("default");
$(".item-two .value.rate").addClass("default");
$(".item-one .outer-bar.rate .inner-bar").addClass("default");
$(".item-two .outer-bar.rate .inner-bar").addClass("default");
}
else if (+rateOne > +rateTwo) {
$(".item-one .value.rate").addClass("green");
$(".item-two .value.rate").addClass("red");
$(".item-one .outer-bar.rate .inner-bar").addClass("green");
$(".item-two .outer-bar.rate .inner-bar").addClass("red");
}
else {
$(".item-one .value.rate").addClass("red");
$(".item-two .value.rate").addClass("green");
$(".item-one .outer-bar.rate .inner-bar").addClass("red");
$(".item-two .outer-bar.rate .inner-bar").addClass("green");
}
}

function dmgheadCheck() {
var dmgheadOne = $(".item-one .value.dmghead").html();
var dmgheadTwo = $(".item-two .value.dmghead").html();
if (+dmgheadOne == +dmgheadTwo) {
$(".item-one .value.dmghead").addClass("default");
$(".item-two .value.dmghead").addClass("default");
$(".item-one .outer-bar.dmghead .inner-bar").addClass("default");
$(".item-two .outer-bar.dmghead .inner-bar").addClass("default");
}
else if (+dmgheadOne > +dmgheadTwo) {
$(".item-one .value.dmghead").addClass("green");
$(".item-two .value.dmghead").addClass("red");
$(".item-one .outer-bar.dmghead .inner-bar").addClass("green");
$(".item-two .outer-bar.dmghead .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmghead").addClass("red");
$(".item-two .value.dmghead").addClass("green");
$(".item-one .outer-bar.dmghead .inner-bar").addClass("red");
$(".item-two .outer-bar.dmghead .inner-bar").addClass("green");
}
}
function dmghelmet1Check() {
var dmghelmet1One = $(".item-one .value.dmghelmet1").html();
var dmghelmet1Two = $(".item-two .value.dmghelmet1").html();
if (+dmghelmet1One == +dmghelmet1Two) {
$(".item-one .value.dmghelmet1").addClass("default");
$(".item-two .value.dmghelmet1").addClass("default");
$(".item-one .outer-bar.dmghelmet1 .inner-bar").addClass("default");
$(".item-two .outer-bar.dmghelmet1 .inner-bar").addClass("default");
}
else if (+dmghelmet1One > +dmghelmet1Two) {
$(".item-one .value.dmghelmet1").addClass("green");
$(".item-two .value.dmghelmet1").addClass("red");
$(".item-one .outer-bar.dmghelmet1 .inner-bar").addClass("green");
$(".item-two .outer-bar.dmghelmet1 .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmghelmet1").addClass("red");
$(".item-two .value.dmghelmet1").addClass("green");
$(".item-one .outer-bar.dmghelmet1 .inner-bar").addClass("red");
$(".item-two .outer-bar.dmghelmet1 .inner-bar").addClass("green");
}
}
function dmghelmet2Check() {
var dmghelmet2One = $(".item-one .value.dmghelmet2").html();
var dmghelmet2Two = $(".item-two .value.dmghelmet2").html();
if (+dmghelmet2One == +dmghelmet2Two) {
$(".item-one .value.dmghelmet2").addClass("default");
$(".item-two .value.dmghelmet2").addClass("default");
$(".item-one .outer-bar.dmghelmet2 .inner-bar").addClass("default");
$(".item-two .outer-bar.dmghelmet2 .inner-bar").addClass("default");
}
else if (+dmghelmet2One > +dmghelmet2Two) {
$(".item-one .value.dmghelmet2").addClass("green");
$(".item-two .value.dmghelmet2").addClass("red");
$(".item-one .outer-bar.dmghelmet2 .inner-bar").addClass("green");
$(".item-two .outer-bar.dmghelmet2 .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmghelmet2").addClass("red");
$(".item-two .value.dmghelmet2").addClass("green");
$(".item-one .outer-bar.dmghelmet2 .inner-bar").addClass("red");
$(".item-two .outer-bar.dmghelmet2 .inner-bar").addClass("green");
}
}
function dmghelmet3Check() {
var dmghelmet3One = $(".item-one .value.dmghelmet3").html();
var dmghelmet3Two = $(".item-two .value.dmghelmet3").html();
if (+dmghelmet3One == +dmghelmet3Two) {
$(".item-one .value.dmghelmet3").addClass("default");
$(".item-two .value.dmghelmet3").addClass("default");
$(".item-one .outer-bar.dmghelmet3 .inner-bar").addClass("default");
$(".item-two .outer-bar.dmghelmet3 .inner-bar").addClass("default");
}
else if (+dmghelmet3One > +dmghelmet3Two) {
$(".item-one .value.dmghelmet3").addClass("green");
$(".item-two .value.dmghelmet3").addClass("red");
$(".item-one .outer-bar.dmghelmet3 .inner-bar").addClass("green");
$(".item-two .outer-bar.dmghelmet3 .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmghelmet3").addClass("red");
$(".item-two .value.dmghelmet3").addClass("green");
$(".item-one .outer-bar.dmghelmet3 .inner-bar").addClass("red");
$(".item-two .outer-bar.dmghelmet3 .inner-bar").addClass("green");
}
}
function dmgbodyCheck() {
var dmgbodyOne = $(".item-one .value.dmgbody").html();
var dmgbodyTwo = $(".item-two .value.dmgbody").html();
if (+dmgbodyOne == +dmgbodyTwo) {
$(".item-one .value.dmgbody").addClass("default");
$(".item-two .value.dmgbody").addClass("default");
$(".item-one .outer-bar.dmgbody .inner-bar").addClass("default");
$(".item-two .outer-bar.dmgbody .inner-bar").addClass("default");
}
else if (+dmgbodyOne > +dmgbodyTwo) {
$(".item-one .value.dmgbody").addClass("green");
$(".item-two .value.dmgbody").addClass("red");
$(".item-one .outer-bar.dmgbody .inner-bar").addClass("green");
$(".item-two .outer-bar.dmgbody .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmgbody").addClass("red");
$(".item-two .value.dmgbody").addClass("green");
$(".item-one .outer-bar.dmgbody .inner-bar").addClass("red");
$(".item-two .outer-bar.dmgbody .inner-bar").addClass("green");
}
}
function dmgvest1Check() {
var dmgvest1One = $(".item-one .value.dmgvest1").html();
var dmgvest1Two = $(".item-two .value.dmgvest1").html();
if (+dmgvest1One == +dmgvest1Two) {
$(".item-one .value.dmgvest1").addClass("default");
$(".item-two .value.dmgvest1").addClass("default");
$(".item-one .outer-bar.dmgvest1 .inner-bar").addClass("default");
$(".item-two .outer-bar.dmgvest1 .inner-bar").addClass("default");
}
else if (+dmgvest1One > +dmgvest1Two) {
$(".item-one .value.dmgvest1").addClass("green");
$(".item-two .value.dmgvest1").addClass("red");
$(".item-one .outer-bar.dmgvest1 .inner-bar").addClass("green");
$(".item-two .outer-bar.dmgvest1 .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmgvest1").addClass("red");
$(".item-two .value.dmgvest1").addClass("green");
$(".item-one .outer-bar.dmgvest1 .inner-bar").addClass("red");
$(".item-two .outer-bar.dmgvest1 .inner-bar").addClass("green");
}
}
function dmgvest2Check() {
var dmgvest2One = $(".item-one .value.dmgvest2").html();
var dmgvest2Two = $(".item-two .value.dmgvest2").html();
if (+dmgvest2One == +dmgvest2Two) {
$(".item-one .value.dmgvest2").addClass("default");
$(".item-two .value.dmgvest2").addClass("default");
$(".item-one .outer-bar.dmgvest2 .inner-bar").addClass("default");
$(".item-two .outer-bar.dmgvest2 .inner-bar").addClass("default");
}
else if (+dmgvest2One > +dmgvest2Two) {
$(".item-one .value.dmgvest2").addClass("green");
$(".item-two .value.dmgvest2").addClass("red");
$(".item-one .outer-bar.dmgvest2 .inner-bar").addClass("green");
$(".item-two .outer-bar.dmgvest2 .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmgvest2").addClass("red");
$(".item-two .value.dmgvest2").addClass("green");
$(".item-one .outer-bar.dmgvest2 .inner-bar").addClass("red");
$(".item-two .outer-bar.dmgvest2 .inner-bar").addClass("green");
}
}
function dmgvest3Check() {
var dmgvest3One = $(".item-one .value.dmgvest3").html();
var dmgvest3Two = $(".item-two .value.dmgvest3").html();
if (+dmgvest3One == +dmgvest3Two) {
$(".item-one .value.dmgvest3").addClass("default");
$(".item-two .value.dmgvest3").addClass("default");
$(".item-one .outer-bar.dmgvest3 .inner-bar").addClass("default");
$(".item-two .outer-bar.dmgvest3 .inner-bar").addClass("default");
}
else if (+dmgvest3One > +dmgvest3Two) {
$(".item-one .value.dmgvest3").addClass("green");
$(".item-two .value.dmgvest3").addClass("red");
$(".item-one .outer-bar.dmgvest3 .inner-bar").addClass("green");
$(".item-two .outer-bar.dmgvest3 .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmgvest3").addClass("red");
$(".item-two .value.dmgvest3").addClass("green");
$(".item-one .outer-bar.dmgvest3 .inner-bar").addClass("red");
$(".item-two .outer-bar.dmgvest3 .inner-bar").addClass("green");
}
}
function dmgarmslegsCheck() {
var dmgarmslegsOne = $(".item-one .value.dmgarmslegs").html();
var dmgarmslegsTwo = $(".item-two .value.dmgarmslegs").html();
if (+dmgarmslegsOne == +dmgarmslegsTwo) {
$(".item-one .value.dmgarmslegs").addClass("default");
$(".item-two .value.dmgarmslegs").addClass("default");
$(".item-one .dmgarmslegs.shots").addClass("default");
$(".item-two .dmgarmslegs.shots").addClass("default");
$(".item-one .outer-bar.dmgarmslegs .inner-bar").addClass("default");
$(".item-two .outer-bar.dmgarmslegs .inner-bar").addClass("default");
}
else if (+dmgarmslegsOne > +dmgarmslegsTwo) {
$(".item-one .value.dmgarmslegs").addClass("green");
$(".item-two .value.dmgarmslegs").addClass("red");
$(".item-one .dmgarmslegs.shots").addClass("green");
$(".item-two .dmgarmslegs.shots").addClass("red");
$(".item-one .outer-bar.dmgarmslegs .inner-bar").addClass("green");
$(".item-two .outer-bar.dmgarmslegs .inner-bar").addClass("red");
}
else {
$(".item-one .value.dmgarmslegs").addClass("red");
$(".item-two .value.dmgarmslegs").addClass("green");
$(".item-one .dmgarmslegs.shots").addClass("red");
$(".item-two .dmgarmslegs.shots").addClass("green");
$(".item-one .outer-bar.dmgarmslegs .inner-bar").addClass("red");
$(".item-two .outer-bar.dmgarmslegs .inner-bar").addClass("green");
}
}


window.onhashchange = function() {
 if ($('.wpns-box').hasClass("active")) {
	$(".item-one").html("");
	$(".item-two").html("");
	$(".wpns-box").removeClass("active");
	$(".wpns-bg").removeClass("active");
	$("body").removeClass("no-scroll");
	$(".compare").removeClass("clicked-once");
	localStorage.removeItem('clonedWpn');
	localStorage.removeItem('wpn-selected');
	$(".comparebox").removeClass("collapsed");
	$(".comparebox").removeClass("active");
	$(".showbox").removeClass("active");
 }
};

var match = [];
$(".close").click(function(clear){
var $this = $(".compare");
$(".item-one").html("");
$(".item-two").html("");
$(".wpns-box").removeClass("active");
$(".wpns-bg").removeClass("active");
$("body").removeClass("no-scroll");
$(".compare").removeClass("clicked-once");
localStorage.removeItem('clonedWpn');
localStorage.removeItem('wpn-selected');
$(".comparebox").removeClass("collapsed");
$(".comparebox").removeClass("active");
$(".showbox").removeClass("active");
});
$(".cancel").click(function(clear){
$(".compare").removeClass("clicked-once");
localStorage.removeItem('clonedWpn');
localStorage.removeItem('wpn-selected');
$(".selected-wpn i").attr('class', '');
$(".selected-wpn .name").attr('data-i18n', '');
$(".selected-wpn .name").html('');
$(".comparebox").removeClass("active");
});

$('.toggle-title').click(function(){
$(this).toggleClass('active');
$(this).parent().find('.show').toggleClass('active');
$(this).parent().find('.hidden-content').slideToggle(500);
});

$('.show').click(function(){
$(this).toggleClass('active');
$(this).parent().find('.hidden-content').slideToggle(500);
});

var removeClass = true;
$('.slots i').click(function(){
$(this).parent().find('.att-names').toggleClass('active');
removeClass = false;
});

$("html").click(function () {
if (removeClass) {
$(".att-names").removeClass('active');
}
removeClass = true;
});

/*
var wpnSelected;
if (localStorage.getItem['wpn-selected'] !== null) {
wpnSelected = localStorage['wpn-selected'];
$("#"+wpnSelected).addClass("hide");
}
*/	

$(".compare").click(function(){
//$(this).addClass( "hide" );
if (match.length == 2) {
match = [];
}

var $this = $(".compare");

if ($this.hasClass("clicked-once")) {
$this.on( "click" );
$this.removeClass("clicked-once");
$this.removeClass("hide");
//$(this).addClass("hide");
$(".wpns-box").addClass("active");
$("body").addClass("no-scroll");
$(".wpns-bg").addClass("active");
$(".comparebox").removeClass("active");
if ($(".item-two").html().length > 0) {
$(".item-two").html("");
} 
match.push(this.id);
//localStorage.removeItem('wpn-selected');
// already been clicked once
var clone = $(".card." + (this.id)).clone();
// this image only
// var cloneimg = $(".card." + (this.id) + " .item-icon").clone();
clonedWeapon = localStorage['clonedWpn'];
$(".item-one").append(clonedWeapon);
$(".item-two").append(clone);
$(document).i18n();
//$('html,body').animate({scrollTop: $(".wpns-box").offset().top},'slow');
damageCheck();
bulletSpeedCheck();
rangeCheck();
stabilityCheck();
rateCheck();
dmgheadCheck();
dmghelmet1Check();
dmghelmet2Check();
dmghelmet3Check();
dmgbodyCheck();
dmgvest1Check();
dmgvest2Check();
dmgvest3Check();
dmgvest1Check();
dmgarmslegsCheck();
}
else {
if ($(".item-one").html().length > 0) {
$(".item-one").html("");
} 
match.push(this.id);
localStorage.setItem('wpn-selected', this.id);
var clone = $(".card." + (this.id)).clone();
var clonedWeapon = clone.get(0).outerHTML;
localStorage.setItem('clonedWpn', clonedWeapon);
clonedWeapon = localStorage['clonedWpn'];
var cloneIcon = $(this).parents('.wpn-image').find('.icon-small').attr("class");
var cloneNamei18n = $(this).parents('.item-details').find('.name').attr("data-i18n=");
var cloneName = $(this).parents('.item-details').find('.name').html();
$(".selected-wpn i").attr('class', cloneIcon);
$(".selected-wpn .name").attr('data-i18n', cloneNamei18n);
$(".selected-wpn .name").html(cloneName);
$(".comparebox").addClass("active");
//$(".selectedWpn").addClass("active");
//$(".item-one").append(clonedWeapon);
$this.addClass("clicked-once");
$(".item-two").html("");
//$('.att').prop("checked", false);
//console.log(clone);
//console.log(clonedWeapon);
//var clonedWpn = clone.get(0).outerHTML;
//localStorage.setItem('clonedWpn', clonedWpn);
//wpn.push(clone.outerHTML);
//localStorage["wpn"] = JSON.stringify(wpn);
}

});
$('.popuplink').click(function(){
$(this).parent().find('.single-popup, .backdrop').fadeIn({queue: false, duration: '150'});
$(this).parent().find('.single-popup').animate({top:'56px'},150);
$(".page-content").addClass("noscroll");
$('body').addClass("no-scroll");
});

$('.backdrop').click(function(){
$(this).parent().find('.single-popup, .backdrop').fadeOut({queue: false, duration: '150'});
$(this).parent().find('.single-popup').animate({top:'80px'},100);
$(".page-content").addClass("noscroll");
$('body').removeClass("no-scroll");
});
$('.closepopuplink').click(function(){
$(this).parent().parent().parent().find('.single-popup, .backdrop').fadeOut({queue: false, duration: '150'});
$(this).parent().parent().parent().find('.single-popup').animate({top:'80px'},100);
$(".page-content").removeClass("noscroll");
$('body').removeClass("no-scroll");
});

// PRESETS FOR WEAPONS

$("sksfullload").click(function(){
$(".compensatorsks .att").click();
$(".extendedquickdrawsks .att").click();
$(".cheekpadsks .att").click();
});
//Clear all attachments checked
/*
$(".clearattachs").click(function(){
if ($(".att").is(":checked")) {
$(".att").prop('checked',true).click();
}
});
*/

// BACKPACK MANAGER JS

var dataPage = $$('#bpmanager').attr('data-page');
  if (dataPage != null) {

for (var l = 0; l < PUBGITEMS.length; l++){
  var pubg = PUBGITEMS[l];
  pubg['quantity'] = (pubg['quantity'] == undefined) ? "" : pubg['quantity'];
  pubg['i18n'] = (pubg['i18n'] == undefined) ? pubg['item'] : pubg['i18n'];
  $(".listcard." + pubg['item']).html
  ('<a href="#" class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>' +
   '<p class="addtobackpack'+ pubg['quantity'] +'" data-id="'+ pubg['weight'] +'">Add to Backpack</p>'+
   '</a>'
  );
  $(".itemstoadd." + pubg['item']).html
  ('<div class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>' +
   '<p class="weighttext">'+ pubg['weight'] +'</p>' +
   '<i class="addtobackpack'+ pubg['quantity'] +'" data-id="'+ pubg['weight'] +'" data-order="'+ pubg['order'] +'"></i>'+
   '</div>'
  );
  $(".chooser." + pubg['item']).html
  ('<div class="item-list">' +
   '<i class="'+ pubg['icon'] +'"></i>' +
   '<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>' +
   '<div class="list-info">'+
   '<p class="info-value">'+pubg['capacity']+'</p>'+
   '</div>'+
   '</div>'
  );
}

 var inventory = localStorage.getItem('pubginv');
  if (inventory === null) {
    var inventory = {slot1: "nothing", slot1value: "0",slot2: "nothing", slot2value: "0", slot3: "nothing", slot3value: "0"};
    var inventory = JSON.stringify(inventory);
    localStorage.setItem('pubginv', inventory);
  }
  else {
    var newinventory = JSON.parse(inventory);
    var backpack = $('.inventory .inv .slot1 .storage');
    var vest = $('.inventory .inv .slot2 .storage');
    var belt = $('.inventory .inv .slot3 .storage');
    var removeBackpackClass = $(backpack).attr('class').split(' ')[1];
    var removeVestClass = $(vest).attr('class').split(' ')[1];
    var removeBeltClass = $(belt).attr('class').split(' ')[1];
    $(backpack).removeClass(removeBackpackClass);
    $(vest).removeClass(removeVestClass);
    $(belt).removeClass(removeBeltClass);
    $(backpack).addClass(newinventory.slot1);
    $(vest).addClass(newinventory.slot2);
    $(belt).addClass(newinventory.slot3);

    $('.inventory .inv .slot1 i').attr('data-id',newinventory.slot1value);
    $('.inventory .inv .slot2 i').attr('data-id',newinventory.slot2value);
    $('.inventory .inv .slot3 i').attr('data-id',newinventory.slot3value);

    var backpackWeight = $(".slot1 .storage").attr('data-id');
    var vestWeight = $(".slot2 .storage").attr('data-id');
    var beltWeight = $(".slot3 .storage").attr('data-id');
    var totalWeight = +backpackWeight + +vestWeight + +beltWeight + 20;
    var baseWeight = totalWeight/100;
    var value = $('.invbarinner').attr('data-id');
    $('.weightvalue').html(totalWeight);
    $(".invbarinner").height(value/baseWeight+'%');
    // Change color based on percentage of bar
    var invbarcolor = (value/baseWeight)-100;
    invbarcolor = Math.abs(invbarcolor);
    $('.weightvalueused').css('color', 'hsl('+invbarcolor+', 100%, 50%)');
    $('.invbarinner').css('background-color', 'hsl('+invbarcolor+', 100%, 50%)');
    $(document).i18n();
  }
  var inventoryItems = localStorage.getItem('pubginvitems');
  if (inventoryItems === null) {
    var inventoryItems = [];
    localStorage.setItem('pubginvitems', inventoryItems);
  }
  else {
    $('.inventory-items').html(inventoryItems)
  }
  var inventoryWeight = localStorage.getItem('pubginvweight');
  if (inventoryWeight === null) {
    var inventoryWeight = 0;
    localStorage.setItem('pubginvweight', inventoryWeight);
    $('.weightvalueused').html('0');
    $('.weightvalueused').css('color', 'rgb(85, 255, 0)');
  }
  else {
    $('.weightvalueused').html(inventoryWeight);
    var weight = $('.inventory').find('.weightvalue').attr('data-id')/100;
    var backpackWeight = $(".slot1 .storage").attr('data-id')/100;
    var vestWeight = $(".slot2 .storage").attr('data-id')/100;
    var beltWeight = $(".slot3 .storage").attr('data-id')/100;
    var baseWeight = +backpackWeight + +vestWeight + +beltWeight + +weight;
    $('.invbarinner').attr('data-id',inventoryWeight);
    $('.weightvalueused').html(inventoryWeight);
    $(".invbarinner").height(inventoryWeight/baseWeight+'%');
    // Change color based on percentage of bar
    var invbarcolor = (inventoryWeight/baseWeight)-100;
    invbarcolor = Math.abs(invbarcolor);
    $('.weightvalueused').css('color', 'hsl('+invbarcolor+', 100%, 50%)');
    $('.invbarinner').css('background-color', 'hsl('+invbarcolor+', 100%, 50%)');
  }
  emptyinvdisplaycheck ();

for (var l = 0; l < PUBGITEMS.length; l++){
  var pubg = PUBGITEMS[l];
  $(".stash." + pubg['item']).html
  ('<a href="'+ pubg['item'] +'.html" class="item-list">' +
   '<i class="'+ pubg['item'] +'"></i>' +
   '<p class="name" data-i18n="'+ pubg['i18n'] +'">'+ pubg['name'] +'</p>' +
   '</a>'
  )}
  
  
$('.additemstoinv').click(function(){
  $('body').addClass('no-scroll');
  $('.itemswindowbg').fadeIn({queue: false, duration: '150'});
  $('.itemswindow').fadeIn({queue: false, duration: '150'});
  $('.itemswindow').animate({top:'56px'},150);
  //$('body').addClass('no-scroll');
});

$('.closeitemswindow' ).click(function(){
  $('.itemswindowbg').fadeOut({queue: false, duration: '150'});
  $(this).parent().fadeOut({queue: false, duration: '150'});
  $(this).parent().animate({top:'112px'},100);
  $('body').removeClass('no-scroll');
});

function emptyinvdisplaycheck (){
  if ($(".inventory-items").html() === '') {
    $(".emptyinv").css('display', 'none');
  }
  else {
    $(".emptyinv").css('display', 'inline-block');
  }
}

$('.emptyinv' ).click(function(){
  $('.invbarinner').attr('data-id','0');
  $(".invbarinner").height('0%');
  $('.weightvalueused').html('0');
  $('.weightvalueused').css('color', 'rgb(85, 255, 0)');
  $('.invbarinner').css('background-color', '');
  $('.inventory-items').html('');
  var inventoryItems = $(".inventory-items").html();
  localStorage.setItem('pubginvitems', inventoryItems);
  localStorage.setItem('pubginvweight', '0');
  emptyinvdisplaycheck ();
});

$(".addtobackpack").on("click",function(e) {
  var itemtype = $(this).parents('.tab-content').attr('class').split(' ')[1];
  e.preventDefault();
  var additembox = '<div class="itemboxbg">\
<div class="bpfullmsg">\
<span data-i18n="Notenoughspaceonbackpack">Not enough space on backpack!</span>\
</div>\
<div class="additembox">\
<div class="inputbox">\
<input type="number" name="quant[1]" class="qntNumber input-number" pattern="[0-9]*" step="1" value="" min="1" max="500">\
<div class="btn-number minusone" data-type="minus" data-field="quant[1]">-</div>\
<div class="btn-number plusone" data-type="plus" data-field="quant[1]">+</div>\
<div class="btn-number minusten" data-type="minusten" data-field="quant[1]">-10</div>\
<div class="btn-number plusten" data-type="plusten" data-field="quant[1]">+10</div>\
</div>\
<div class="addremovebtn">\
<div class="additem" data-i18n="Add">Add</div>\
<div class="removeitem" data-i18n="Cancel">Cancel</div>\
</div>\
</div></div>';
  $(this).parent().append(additembox);
  $(document).i18n();
  if (itemtype == "items") {
    $('.minusten').css('display','none');
    $('.plusten').css('display','none');
    $(this).parent().find('.input-number').val('1');
  }
  else if (itemtype == "grenades") {
    $('.minusten').css('display','none');
    $('.plusten').css('display','none');
    $(this).parent().find('.input-number').val('1');
  }
  else {
    $('.minusone').css('display','none');
    $('.plusone').css('display','none');
    $(this).parent().find('.input-number').val('10');
  }
  $(this).parent().find('.additembox,.itemboxbg').css('display', 'block');
  //$(this).parent().find('.input-number').focus();
  //$('body').addClass('no-scroll');
  return false;
  $(document).i18n();
});

$(document).on("click", ".additem", function(addamount) {
  var weight = $('.inventory').find('.weightvalue').attr('data-id')/100;
  var backpackWeight = $(".slot1 .storage").attr('data-id')/100;
  var vestWeight = $(".slot2 .storage").attr('data-id')/100;
  var beltWeight = $(".slot3 .storage").attr('data-id')/100;
  var baseWeight = +backpackWeight + +vestWeight + +beltWeight + +weight;
  var itemAdded = $(this).parents('.itemstoadd').attr('class').split(' ')[1];
  var inputValue = $(this).parents('.itemstoadd').find('.input-number').val();
  var itemWeight = $(this).parents('.item-list').find('.addtobackpack').attr('data-id');
  var itemOrder = $(this).parents('.item-list').find('.addtobackpack').attr('data-order');
  var itemWeightResult = inputValue*itemWeight;
  var itemIcon = $(this).parents('.item-list').find('i').attr('class');
  var itemName = $(this).parents('.item-list').find('.name').html();
  var itemNamei18 = $(this).parents('.item-list').find('.name').attr('data-i18n');
  var stash = ('<div class="itemstoadd '+itemAdded+'"><div class="item-list" data-id="'+itemWeightResult+'" data-order="'+itemOrder+'"><i class="'+itemIcon+'"></i><div class="item-text"><p class="name" data-i18n="'+itemNamei18+'">'+itemName+'</p><p class="weightinfo"><span class="captext" data-i18n="Capacity">Capacity:</span><span class="itemwr">'+itemWeightResult+' ('+inputValue+'x'+itemWeight+')</span></p></div><p class="qnt">'+inputValue+'</p><i class="removefrombackpack" data-id="'+itemWeightResult+'"></i></div></div>');

  var value = $('.invbarinner').attr('data-id');
  var newValue;
  var totalWeight = $('.weightvalue').html();
  newValue = +itemWeightResult + +value;
  if (+newValue > +totalWeight ) {
    $('.bpfullmsg').fadeIn(450);
    $('.bpfullmsg').delay(1500).fadeOut(300);
  }
  else {
    // Check if the inventory have the same item to add
    if ($(".inventory-items").find("."+itemAdded).length) {
      var currentItem = $(".inventory-items").find("."+itemAdded+" .item-list");
      var currentItemQnt = $(".inventory-items").find("."+itemAdded+" .item-list").find('.qnt').html();
      var newItemWeight = $(".inventory-items").find("."+itemAdded+" .item-list").find('.itemwr').html();
      var newItemQnt = +currentItemQnt + +inputValue;
      currentItem.find('.qnt').html(newItemQnt);
      var itemaddedWeight = currentItem.attr('data-id');
      var newItemAddedWeight = +itemWeightResult + +itemaddedWeight;
      currentItem.attr('data-id',newItemAddedWeight);
      currentItem.find('.removefrombackpack').attr('data-id',newItemAddedWeight);
      currentItem.find('.itemwr').html(newItemAddedWeight+' ('+newItemQnt+'x'+itemWeight+')');
      // save the inventory to storage
      var inventoryItems = $(".inventory-items").html();
      localStorage.setItem('pubginvitems', inventoryItems);
      localStorage.setItem('pubginvweight', newValue);
      var newBar = +itemWeightResult + +value;
      $('.invbarinner').attr('data-id',newBar);
      $('.weightvalueused').html(newBar);
      $(".invbarinner").height(newBar/baseWeight+'%');
    }
    else {
      $('.invbarinner').attr('data-id',newValue);
      $('.weightvalueused').html(newValue);
      $(".invbarinner").height(newValue/baseWeight+'%');
      $(".inventory-items").append(stash);
      $(document).i18n();
      // call sort function and get sorted list
      var sortedList =  $(".inventory-items").find(".itemstoadd").sort(
        function(a,b){
          var first  = $(a).find('.item-list').data('order');
          var second  = $(b).find('.item-list').data('order');
          return parseInt(first) - parseInt(second);
        });
      // empty the current list and add sorted list
      $(".inventory-items").empty().append(sortedList);
      // save the inventory to storage
      var inventoryItems = $(".inventory-items").html();
      localStorage.setItem('pubginvitems', inventoryItems);
      localStorage.setItem('pubginvweight', newValue);
      // Change color based on percentage of bar
      var invbarcolor = (newValue/baseWeight)-100;
      invbarcolor = Math.abs(invbarcolor);
      $('.weightvalueused').css('color', 'hsl('+invbarcolor+', 100%, 50%)');
      $('.invbarinner').css('background-color', 'hsl('+invbarcolor+', 100%, 50%)');
    }
    $(this).parents('.itemboxbg').remove();
    $('.itemswindowbg').fadeOut({queue: false, duration: '150'});
    $('.itemswindow').fadeOut({queue: false, duration: '150'});
    $('.itemswindow').animate({top:'56px'},100);
    $('body').removeClass('no-scroll');
  }
  emptyinvdisplaycheck();
  return false;
  $(document).i18n();
});

$(document).on("click", ".removeitem", function() {
  $(this).parents('.itemboxbg').remove();
  return false;
});


$(".addtobackpacksingle").on("click",function() {
  var weight = $('.inventory').find('.weightvalue').attr('data-id')/100;
  var backpackWeight = $(".slot1 .storage").attr('data-id')/100;
  var vestWeight = $(".slot2 .storage").attr('data-id')/100;
  var beltWeight = $(".slot3 .storage").attr('data-id')/100;
  var baseWeight = +backpackWeight + +vestWeight + +beltWeight + +weight;
  var itemAdded = $(this).parents('.itemstoadd').attr('class').split(' ')[1];
  var itemWeight = $(this).attr('data-id');
  var itemOrder = $(this).attr('data-order');
  var itemIcon = $(this).parent().find('i').attr('class');
  var itemName = $(this).parent().find('.name').html();
  var itemNamei18 = $(this).parent().find('.name').attr('data-i18n');
  var clone = $(this).parent().parent().clone();
  var clonedItem = clone.get(0).outerHTML;
  var stash = ('<div class="itemstoadd '+itemAdded+'"><div class="item-list" data-id="'+itemWeight+'" data-order="'+itemOrder+'"><i class="'+itemIcon+'"></i><div class="item-text"><p class="name" data-i18n="'+itemNamei18+'">'+itemName+'</p><p class="weightinfo"><span class="captext" data-i18n="Capacity">Capacity:</span><span>'+itemWeight+'</span></p></div><p class="qnt"></p><i class="removefrombackpack" data-id="'+itemWeight+'"></i></div></div>');
  var value = $('.invbarinner').attr('data-id');
  var curValue = $(this).attr('data-id');
  var newValue;
  var totalWeight = $('.weightvalue').html();
  newValue = +curValue + +value;
  if (+newValue > +totalWeight ) {
    var bpfullmsg = '<div class="bpfullmsgitem"><span data-i18n="Notenoughspaceonbackpack">Not enough space on backpack!</span></div>';
    $(this).parent().append(bpfullmsg);
    $(document).i18n();
    $('.bpfullmsgitem').fadeIn({queue: false, duration: '300'});
    $('.bpfullmsgitem').delay(1500).fadeOut(300);
    $('.bpfullmsgitem').delay(300).queue(function() {
      $(this).remove();
    });
  }
  else {
    $('.invbarinner').attr('data-id',newValue);
    $('.weightvalueused').html(newValue);
    $(".invbarinner").height(newValue/baseWeight+'%');
    // Change color based on percentage of bar
    var invbarcolor = (newValue/baseWeight)-100;
    invbarcolor = Math.abs(invbarcolor);
    $('.weightvalueused').css('color', 'hsl('+invbarcolor+', 100%, 50%)');
    $('.invbarinner').css('background-color', 'hsl('+invbarcolor+', 100%, 50%)');
    $(".inventory-items").append(stash);
    $(document).i18n();
    // call sort function and get sorted list
    var sortedList =  $(".inventory-items").find(".itemstoadd").sort(
      function(a,b){
        var first  = $(a).find('.item-list').data('order');
        var second  = $(b).find('.item-list').data('order');
        return parseInt(first) - parseInt(second);
      });
    // empty the current list and add sorted list
    $(".inventory-items").empty().append(sortedList);
    // save the inventory to storage
    var inventoryItems = $(".inventory-items").html();
    localStorage.setItem('pubginvitems', inventoryItems);
    localStorage.setItem('pubginvweight', newValue);
    $('body').removeClass('no-scroll');
    $('.itemswindowbg').fadeOut({queue: false, duration: '150'});
    $('.itemswindow').fadeOut({queue: false, duration: '150'});
    $('.itemswindow').animate({top:'56px'},100);
  }
  emptyinvdisplaycheck ();
  return false;
});

$(document).on("click", ".removefrombackpack", function() {
  var weight = $('.inventory').find('.weightvalue').attr('data-id')/100;
  var backpackWeight = $(".slot1 .storage").attr('data-id')/100;
  var vestWeight = $(".slot2 .storage").attr('data-id')/100;
  var beltWeight = $(".slot3 .storage").attr('data-id')/100;
  var baseWeight = +backpackWeight + +vestWeight + +beltWeight + +weight;
  var value = $('.invbarinner').attr('data-id');
  var curValue = $(this).attr('data-id');
  var newValue;
  newValue = value - curValue;
  $('.invbarinner').attr('data-id',newValue);
  $(".invbarinner").height(newValue/baseWeight+'%');
  $('.weightvalueused').html(newValue);
  // Change color based on percentage of bar
  var invbarcolor = (newValue/baseWeight)-100;
  invbarcolor = Math.abs(invbarcolor);
  $('.weightvalueused').css('color', 'hsl('+invbarcolor+', 100%, 50%)');
  $('.invbarinner').css('background-color', 'hsl('+invbarcolor+', 100%, 50%)');
  $(this).parents('.itemstoadd').remove();
  // save the inventory to storage
  var inventoryItems = $(".inventory-items").html();
  localStorage.setItem('pubginvitems', inventoryItems);
  localStorage.setItem('pubginvweight', newValue);
  emptyinvdisplaycheck ();

});

$('.st i').click(function(){
  $(this).parent().find('.itemstorage').slideToggle(500);
  $(this).parent().find('.storagebg').fadeToggle(300);
  //$(this).toggleClass('ontop');
  $(this).parent().find('.storage').toggleClass('ontop');
  $(this).parent().find('.storagename').toggleClass('ontop');
});

$('.storagebg').click(function(){
  $(this).parent().find('.itemstorage').slideToggle(500);
  $(this).fadeToggle(300);
  $(this).parent().find('.storage').toggleClass('ontop');
  $(this).parent().find('.storagename').toggleClass('ontop');
});

$('.chooser').click(function(){
  var newinventory = localStorage.getItem('pubginv');
  newinventory = JSON.parse(newinventory);
  var slot = $(this).parent().parent().attr('class').split(' ')[1];
  var value = $('.invbarinner').attr('data-id');
  var weight = $(this).parents('.inventory').find('.weightvalue').attr('data-id');
  var currentWeight = $(this).parent().parent().find('.storage').attr('data-id');
  var thisWeight = $(this).attr('data-id');
  $(this).parent().parent().find('.storage').attr('data-id',thisWeight);
  var backpackWeight = $(".slot1 .storage").attr('data-id');
  var vestWeight = $(".slot2 .storage").attr('data-id');
  var beltWeight = $(".slot3 .storage").attr('data-id');
  var totalWeight = +backpackWeight + +vestWeight + +beltWeight + +weight;
  if (+value > +totalWeight ) {
    $(this).parent().parent().find('.storage').attr('data-id',currentWeight);
    var bpfullmsg = '<div class="bpfullmsgitem"><span data-i18n="InventoryisFull">Inventory is Full!</span></div>';
    $(this).append(bpfullmsg);
    $(document).i18n();
    $('.bpfullmsgitem').fadeIn({queue: false, duration: '300'});
    $('.bpfullmsgitem').delay(1500).fadeOut(300);
    $('.bpfullmsgitem').delay(300).queue(function() {
      $(this).remove();
    });
  }
  else {
    var thisClass = $(this).find('i').attr('class');
    var thisWeight = $(this).attr('data-id');
    var removeClass = $(this).parent().parent().find('.storage').attr('class').split(' ')[1];
    newinventory[slot] = thisClass;
    newinventory[slot+'value'] = thisWeight;
    newinventory = JSON.stringify(newinventory);
    localStorage.setItem('pubginv', newinventory);
    $(this).parent().parent().find('.storage').removeClass(removeClass);
    $(this).parent().parent().find('.storage').addClass(thisClass);
    $(this).parent().parent().find('.storage').attr('data-id',thisWeight);
    var backpackWeight = $(".slot1 .storage").attr('data-id');
    var vestWeight = $(".slot2 .storage").attr('data-id');
    var beltWeight = $(".slot3 .storage").attr('data-id');
    var totalWeight = +backpackWeight + +vestWeight + +beltWeight + 20;
    var baseWeight = totalWeight/100;
    var value = $('.invbarinner').attr('data-id');
    $('.weightvalue').html(totalWeight);
    $(".invbarinner").height(value/baseWeight+'%');
    // Change color based on percentage of bar
    var invbarcolor = (value/baseWeight)-100;
    invbarcolor = Math.abs(invbarcolor);
    $('.weightvalueused').css('color', 'hsl('+invbarcolor+', 100%, 50%)');
    $('.invbarinner').css('background-color', 'hsl('+invbarcolor+', 100%, 50%)');
    $(this).parents('.st').find('.storage').toggleClass('ontop');
    $(this).parents('.st').find('.storagename').toggleClass('ontop');
    $(this).parents('.st').find('.storagebg').fadeToggle(300);
    $(this).parent().slideToggle(500);
  }


});


$(document).on("keydown", ".qntNumber",(function(e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    $(this).parent().parent().find('.additem').click();
  }
}));

$(document).on("keyup", ".qntNumber",(function(e) {
  if (e.keyCode === 13) {
    $(this).parent().parent().find('.additem').click();
  }
}));


$(document).on("click", ".btn-number", function(e) {
  e.preventDefault();

  fieldName = $(this).attr('data-field');
  type      = $(this).attr('data-type');
  var input = $("input[name='"+fieldName+"']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if(type == 'minus') {

      if(currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
      } 
      if(parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }

    } else if(type == 'plus') {

      if(currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
      }
      if(parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);
      }

    } else if(type == 'plusten') {

      if(currentVal < input.attr('max')) {
        input.val(currentVal + 10).change();
      }
      if(parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);
      }

    } if(type == 'minusten') {

      if(currentVal > input.attr('min')) {
        input.val(currentVal - 10).change();
      } 
      if(parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }

    }
  } else {
    input.val(0);
  }
});
$(document).on("focusin", ".input-number", function() {
  $(this).data('oldValue', $(this).val());
});


/*
$(document).on("change", ".input-number", function() {

  minValue =  parseInt($(this).attr('min'));
  maxValue =  parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr('name');
  if(valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val($(this).data('oldValue'));
  }
  if(valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
    alert('Sorry, the maximum value was reached');
    $(this).val($(this).data('oldValue'));
  }
});
*/

$(document).on("keyup", ".input-number", function(e) {
  var val = $(this).val().replace(/[^0-9]+/,"");
  !/^\s*$/.test(val);
  // Allow: backspace, delete, tab, escape, enter and .
  if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) || 
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
    $(this).val(val);
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    $(this).val(val);
    e.preventDefault();
  }
});
// Save the current Inventory
$('.saveInv').click(function(){
  var inventory = $('.inventory').clone();
  var clonedInventory = inventory.get(0).outerHTML;

  localStorage.setItem('inventory', clonedInventory);
  var inventoryLog = localStorage.getItem('inventory');
});
};
// END BACKPACK MANAGER JS


$(".tabs-menu a").click(function(event) {
event.preventDefault();
$(this).parent().addClass("current");
$(this).parent().siblings().removeClass("current");
var tab = $(this).attr("href");
$(".tab-content").not(tab).css("display", "none");
$(tab).fadeIn();
});

$(".radio").change(function() {
var checked = $(this).is(':checked');
$(".radio").prop('checked',false);
if(checked) {
$(this).prop('checked',true);
}
});

	language = localStorage.getItem("language");
	
    i18n.init({
        lng: language,
        resGetPath: '/js/languages/__lng__.json',
        fallbackLng: "en",
        debug: true
    }, function(o) {
        $(document).i18n()
    }); 
	$(".lang").click(function() {
        var o = $(this).attr("data-lang");
		
		localStorage.setItem("language", o);
		
        i18n.init({
            lng: o
        }, function(o) {
            $(document).i18n()
        });
    });

  var langactive = localStorage.getItem('langactive');
  if (langactive === null) {
    localStorage.setItem('langactive', "en");
    $(".langswitch").find(".lang[data-lang='en']").addClass("active");
    $(".langswitch").find(".lang[data-lang='en']").find(".checkmark").addClass("active");
  }
  else {
    $(".langswitch").find(".lang[data-lang="+langactive+"]").addClass("active");
    $(".langswitch").find(".lang[data-lang="+langactive+"]").find(".checkmark").addClass("active");
  }
    
$(".langswitch a").click(function(){
  localStorage.setItem('langactive', $(this).data("lang"));
  $(this).parent().find(".lang-text").removeClass("active");
  $(this).find(".lang-text").addClass("active");
  $(this).parent().find(".lang").removeClass("active");
  $(this).addClass("active");
  $(this).parent().find(".checkmark").removeClass("active");
  $(this).find(".checkmark").addClass("active");
  });
$(document).i18n();
});