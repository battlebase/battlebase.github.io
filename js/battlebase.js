// Currency converter:
// https://fixer.io/documentation

// Overwolf functions:

function dragResize(edge){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.dragResize(result.window.id, edge);
    }
  });
};

function dragMove(){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success" && result.window.state !== "Maximized"){
      overwolf.windows.dragMove(result.window.id);
    }
  });
};

function closeWindow(){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.close(result.window.id);
    }
  });
};

function minimize(){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.minimize(result.window.id);
    }
  });
};

function toggleMaximize(){
  let element = document.querySelector('.maximize-restore-selector'),
      root = document.documentElement;

  overwolf.windows.getCurrentWindow(function(result){
    if (result.status !== "success") {
      return;
    }

    if (element.checked) {
      overwolf.windows.restore(result.window.id);
      root.classList.remove('maximized');
    } else {
      overwolf.windows.maximize(result.window.id);
      root.classList.add('maximized');
    }
  });
};

function showSupport() {
  window.location.href = "overwolf://settings/support";
};

function openSubWindow(){
  alert("the subwindow will only be visible inside a game");
  overwolf.windows.obtainDeclaredWindow("SubWindow", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

function takeScreenshot(){
  overwolf.media.takeScreenshot(function(result){
    if (result.status == "success"){
      var img = document.getElementById("screenshot");
      img.src = result.url;
      img.onload = function() {
        overwolf.media.shareImage(img, "Screen Shot");
      };
    }
  });
}

$('header').on('mousedown',function(){
  dragMove();
});
$('.minimize').on('click',function(){
  minimize();
});
$('.toggleMaximize').on('click',function(){
  toggleMaximize();
});
$('.window-control-close').on('click',function(){
  closeWindow();
});


function genDivs() {
  for (var key in PUBGITEMS.crates) {
    var item = PUBGITEMS.crates[key];
    var icon = item.icon;
    var div = `<div class="list crates ${key}"></div>`
    console.log(div)
  }
}
//genDivs() 
// DEBUG FUNCTIONS //
function assignItems() {
  // Assign Sights
  for (var key in PUBGITEMS.attachments) {
    var attach = PUBGITEMS.attachments[key];
    var attachName = attach.name;
    var item = attach.item;
    var type = attach.unique;
    var attweapon = attach.attweapons;
    for (var weapon in PUBGITEMS.weapons) {
      var wep = PUBGITEMS.weapons[weapon]
      if (attweapon.includes(weapon)) {
        console.log(weapon + " uses " + type + " with " + attachName);
        wep[type].push(item);
        console.log(wep[type])
      };
    }
  }
  // Assign Sights
  for (var sig in PUBGITEMS.sights) {
    var sights = PUBGITEMS.sights[sig];
    var sightsName = sights.name;
    var item = sights.item;
    var attweapon = sights.attweapons;
    for (var weapon in PUBGITEMS.weapons) {
      var wep = PUBGITEMS.weapons[weapon]
      if (attweapon.includes(weapon)) {
        console.log(weapon + " uses " + sightsName);
        if (item === "cantedsight") {
          wep["canted"].push(item);
        }
        else {
          wep["attsights"].push(item);
          console.log(wep["attsights"])
        }
      };
    }
  }

  console.log(PUBGITEMS)
}
//assignItems();
// END DEBUG FUNCTIONS //

// MAIN FUNCTIONS //
// Sort Acendent type
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

function dotnumber(number){
  number = number.toString().split("").reverse().join("")
      .replace(/(\d{3}\B)/g, "$1.")
      .split("").reverse().join("");
  return number;
}


function renderCarepackageammo(item,quantity){
  var imglink = 'https://battlebase.github.io/assets/ammo/';
  var name = PUBGITEMS['ammo'][item].name;
  var icon = PUBGITEMS['ammo'][item].icon;
  var i18n = PUBGITEMS['ammo'][item].i18n;
  return `
  <a href=https://battlebase.github.io/pages/ammo-${item}.html class=itemlist> 
    <img class="itemimg" src="${imglink + icon}.png"/>
    <div class=iteminfo>
      <p class=name data-i18n="${i18n}">${name}</p>
      <p class=infotext>
        <span class=info data-i18n=Quantity>Quantity:</span>
        <span class=val>${quantity}</span>
      </p> 
    </div>
  </a>`
}


function renderLeftMenu(){
  var assetslink = 'https://battlebase.github.io/assets/';
  var leftMenuBlock = "";
  var homelink = "";
  for (i = 0; i < leftMenu.length; i++) {
    var menuItem = leftMenu[i];
    var menuItemName = menuItem.name;
    var menuItemNamei18 = menuItemName.replace(/ /gi,"");
    var menuItemImg = assetslink + menuItem.image +'.png';
    var menuItemLink = menuItem.link;
		if(menuItemLink === "index"){
			homelink = 'back link';
		}
		

    leftMenuBlock+= `
    <a href="${menuItemLink}.html" data-view=".view-main" class="#{homelink} item-list">
      <img src="${menuItemImg}"/>
      <span class="name" data-i18n="${menuItemNamei18}">${menuItemName}</span>
    </a>
    `
    
  }
  $('.left-menu').html(leftMenuBlock)
}


function render(type, category, item) {
  var assetslink = 'https://battlebase.github.io/assets/';
  var imglink = 'https://battlebase.github.io/assets/' + category + '/';
  var name = PUBGITEMS[category][item].name;
  if (!name) {
    console.log(item);
  }
  var icon = PUBGITEMS[category][item].icon;
  var i18n = PUBGITEMS[category][item].item;
  var renderblock;
  var simpleList = `<a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemlist">
<img class="itemimg" src="${imglink + icon}.png"/>
<div class="iteminfo">
<p class="name" data-i18n="${i18n}">${name}</p>
</div>`;

    
  
  // RENDER LISTS EQUIPMENT
  if (type === "list" && category === "equipments") {
    var i18n = PUBGITEMS[category][item].i18n;
    var icon2 = PUBGITEMS[category][item].icon2;
    var bonus = PUBGITEMS[category][item].bonus;
    var bonusblock = '';
    if(bonus){
      var bonusi18 = bonus.replace(/ /gi, "_");
      var bonusValue = PUBGITEMS[category][item].bonusValue;
      bonusblock = `<p class="infotext">
      <span class="info" data-i18n="${bonusi18}">${bonus}:</span>
      <span class="val">${bonusValue}</span>
      </p>`
    }
    var img2 = "";
    if (icon2) img2 = `<img class="itemimg" src="${imglink + icon2}.png"/>`;
    var bonus2 = PUBGITEMS[category][item].bonus2;
    var bonus2block = "";
    if (bonus2) {
      var bonus2i18 = PUBGITEMS[category][item].bonus2i18;
      var bonus2Value = PUBGITEMS[category][item].bonus2Value;
      bonus2block = `<span class="bonustext" data-i18n="${bonus2i18}">${bonus2}:</span>
<span class="value">${bonus2Value}</span>`
    }
    renderblock =
      `<a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemlist">
<img class="itemimg" src="${imglink + icon}.png"/>
<div class="iteminfo">
<p class="name" data-i18n="${i18n}">${name}</p>
${bonusblock}
</div>
</a>`;

  };
  // RENDER LISTS CONSUMABLES
  if (type === "list" && category === "consumables") {
    var i18n = PUBGITEMS[category][item].i18n;
    var bonus = PUBGITEMS[category][item].bonus;
    var bonusi18 = bonus.replace(/ /gi, "");
    var bonusValue = PUBGITEMS[category][item].bonusValue;
    renderblock =
      `<a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemlist">
        <img class="itemimg" src="${imglink + icon}.png"/>
        <div class="iteminfo">
          <p class="name" data-i18n="${i18n}">${name}</p>
            <p class="infotext">
            <span class="info" data-i18n="${bonusi18}">${bonus}:</span>
            <span class="val">${bonusValue}</span>
            </p>
        </div>
      </a>`;
  };
  // RENDER LISTS SIGHTS ATTACHMENTS AMMO WEAPONS TROWABLES
  if (type === "list" && (category === "sights" || category === "attachments" || category === "ammo" || category === "weapons" || category === "melee" || category === "trowables")) {
    renderblock = simpleList;
  }
  // RENDER LISTS CRATES AND KEYS
  if (type === "list" && (category === "crates" || category === "keys" || category === "sets")) {
    var i18n = PUBGITEMS[category][item].i18n;
    var probability = PUBGITEMS[category][item].probability;
    var marketName = PUBGITEMS[category][item].name.toString().replace(/\s/g, '');
    var marketLink = encodeURI(PUBGITEMS[category][item].name.replace(/\//g, '-'));
    var probabilityBlock = '';
    if (probability) {
      probabilityBlock = `<p class="infotext">
<span class="info" data-i18n="Probability">Probability:</span>
<span class="val">${probability}</span>
</p>`
    }
    renderblock =
      `<a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemlist">
<img class="itemimg" src="${imglink + icon}.png"/>
<div class="iteminfo">
<p class="name" data-i18n="${i18n}">${name}</p>
${probabilityBlock}
</div>
<a target="_blank" href="https://steamcommunity.com/market/listings/578080/${marketLink}" class="steamlink steambox external">
<p class="pricebox">
<span class="pricesymbol"></span>
<span class="priceval" data-item=${marketName}></span>
</p>
<i class="steamicon"></i>
</a>`
  };
  // RENDER LISTS SKINS
  if (type === "list" && category === "skins") {
    var itemtype = PUBGITEMS[category][item].itemtype;
    var rarity = PUBGITEMS[category][item].rarity;
    var probability = PUBGITEMS[category][item].probability;
    var probabilityBlock = "";
    if (probability) {
      probabilityBlock = `
<p class="infotext">
<span class="info" data-i18n="Probability">Probability:</span>
<span class="val">${probability}%</span>
</p>
`;
    };
    var nomarket = PUBGITEMS[category][item].nomarket;
    var marketblock;
    if(nomarket){
      marketblock = "";
    } else {
      var marketLink = encodeURI(PUBGITEMS[category][item].name.replace(/\//g, "-"));
    marketblock = `</a>
    <a target="_blank" href="https://steamcommunity.com/market/listings/578080/${marketLink}" class="steamlink steambox external">
    <p class="pricebox">
    <span class="pricesymbol"></span>
    <span class="priceval" data-item=${marketName}></span>
    </p>
    <i class="steamicon"></i>
    </a>`;
    }
    renderblock = `
<a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemlist">
  <div class="rarity ${rarity}"></div>
  <img class="itemimg" src="${imglink + icon}.png"/>
  <div class="iteminfo">
  <p class="name" data-i18n="${i18n}">${name}</p>
  ${probabilityBlock}
  </div>
  ${marketblock}
`
  }
  // RENDER LISTS CHARMS
  if (type === "list" && category === "charms") {
    var charmIcon = name.replace(/ /gi, '_');
    var level = PUBGITEMS[category][item].level;
    renderblock =
      `<a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemlist">
  <img class="itemimg" src="${imglink + charmIcon}.png"/>
  <div class="iteminfo">
  <p class="name" data-i18n="${item}">${name}</p>
  <p class="infotext">
      <span class="info" data-i18n="Level">Level:</span>
      <span class="val">${level}</span>
      </p>
  </div>
  </a>`;
  };

  // RENDER SINGLE ITEM SKIN
  if (type === "singleItem" && category === "skins") {
    var itemtype = PUBGITEMS[category][item].itemtype;
    var rarity = PUBGITEMS[category][item].rarity;
    var probability = PUBGITEMS[category][item].probability;
    var skintype = PUBGITEMS[category][item].skintype;
    var set = PUBGITEMS[category][item].set;
    var probabilityBlock = "";
    if (probability) {
      probabilityBlock = `<p>
<span class="bonustext" data-i18n="Probability">Probability:</span>
<span class="val">${probability} %</span>
</p>`;
    };
    var itemset = "";
    if (set) {
      for (var j in set) {
        var setItem = set[j];
        var setName = PUBGITEMS['sets'][setItem].name;
        var marketName = PUBGITEMS['sets'][setItem].name.toString().replace(/\s/g, '');
        var setImage = PUBGITEMS['sets'][setItem].icon;
        var marketLink = encodeURI(setName.replace(/\//g, "-"));
        itemset = `<div class="list">
  <a href="https://battlebase.github.io/pages/set-${set[j]}.html" class="itemlist">
  <img class="itemimg" src="${assetslink + 'sets/' + setImage}.png"/>
  <div class="iteminfo">
<p class="name" data-i18n="${setItem}">${setName}</p>
</div>
</a>
<a target="_blank" href="https://steamcommunity.com/market/listings/578080/'+marketLink+'" class="steamlink steambox external">
<p class="pricebox">
<span class="pricesymbol"></span>
<span class="priceval" data-item='${marketName}'></span>
</p>
<i class="steamicon"></i>
</a>
</div>`
      }
    } else { itemset = ""; }
    var skininfo = "";
    if (itemtype != undefined) {
      var promoinfo = PUBGITEMS[category][item].promoinfo;
      var promolink = PUBGITEMS[category][item].promolink;
      var promolinkblock = "";
      if(promolink){
        promolinkblock = `<a class="promolink external" href="${promolink}">
        <i class="link-icon"></i>
        <span class="promolinktext" data-i18n="MoreInfo">More Info</span>
      </a>`
      }
      skininfo += `<div class="skininfoblock">
                  <p class="text">
                    <span data-i18n="${i18n}_promotext">${promoinfo}</span>
                  </p>
                  ${promolinkblock}
                </div>`
    }
    else {
      skininfo = "";
    }
    var rarityinfo = "";
    if (rarity) {
        var raritytext = PUBGITEMS[category][item].raritytext;
        rarityinfo += `<div class="rpblock">
                  <p class="rarityblock">
                    <span class="rarity-value ${rarity}" data-i18n="${raritytext}">${raritytext}</span>
                  </p>
                </div>`;
    }
    else {
      rarityinfo = "";
    }
    var bp = PUBGITEMS[category][item].bp;
    var bpblock = '';
    if(bp){
      bpblock = `<p>
      <span class="bptext">BP</span>
      <span class="bp">${bp}</span>
      </p>`
    }
    var crate = PUBGITEMS[category][item].crate;
    var cratename = PUBGITEMS[category][item].cratename;
    var marketLink = encodeURI(PUBGITEMS[category][item].name.replace(/\//g, "-"));
    var foundinBlock = "";
    if(crate){
      var crateImage = PUBGITEMS['crates'][crate].icon
      foundinBlock = `
      <div class="titleblock" data-i18n="FoundIn">Found In:</div>
  <div class="list">
  <a href="https://battlebase.github.io/pages/crates-${crate}.html" class="itemlist">
  <img class="itemimg" src="${assetslink + 'crates/' + crateImage}.png"/>
  <div class="iteminfo">
  <p class="name" data-i18n="${crate}">${cratename}</p>
  </div>
  </a>
  <a target="_blank" href="https://steamcommunity.com/market/listings/578080/${marketLink}" class="steamlink steambox external">
  <p class="pricebox">
  <span class="pricesymbol"></span>
  <span class="priceval" data-item=${marketName}></span>
  </p>
  <i class="steamicon"></i>
  </a>
  </div>
  `
    }
    var nomarket = PUBGITEMS[category][item].nomarket;
    var steamlink = `<a target="_blank" href="https://steamcommunity.com/market/listings/578080/${marketLink}" class="steamsimplelink external">
    <i class="steamicon"></i>
    <span class="steamlinktext" data-i18n="ViewOnSteamMarket">View on Steam Market</span>
    </a>`;
    if(nomarket){
      steamlink = '';
    }
    var rewardedby = PUBGITEMS[category][item].rewardedby;
    var rewardedbyblock = '';
    var rewardedbytext = '';
    if(rewardedby){
      var rewardpass = PUBGITEMS[category][item].rewardedby.rewardpass;
      var rewardtype = PUBGITEMS[category][item].rewardedby.rewardtype;
      var rewardlevel = PUBGITEMS[category][item].rewardedby.rewardlevel;
      rewardedbytext = `<div class="titleblock" data-i18n="RewardedBy">Rewarded By:</div>`
      rewardedbyblock = `
      <div class="list">
        <a href="https://battlebase.github.io/pages/pass-${rewardpass}-${rewardtype}.html" class="itemlist">
          <img class="itemimg" src="https://battlebase.github.io/assets/pass/${rewardpass}_${rewardtype}.png">
          <div class="iteminfo">
          <p class="name" data-i18n="${rewardpass}_${rewardtype}">${PUBGITEMS.passName[rewardpass+rewardtype]}</p>
          <p class="infotext">
            <span class="info" data-i18n="Level">Level:</span>
            <span class="val">${rewardlevel}</span>
          </p>
          </div>
        </a>
      </div>
      `
    }
    var skinfor = '';
    var skinforblock = '';
    console.log(skintype)
    if(skintype != "head" &&
    skintype != "eyes" &&
    skintype != "face" &&
    skintype != "torso" &&
    skintype != "outer" &&
    skintype != "hands" &&
    skintype != "legs" &&
    skintype != "feet"){
      skinforblock = `
      <div class="titleblock" data-i18n="SkinFor">Skin For:</div>
      <div class="list equipments ${skintype}"></div>
      `
    }
    if(skintype === "weaponskin"){
      var weaponskin = PUBGITEMS[category][item].skinfor;
      var weaponcategory = 'weapons';
      if((weaponskin === "Crowbar") ||
      (weaponskin === "Machete") ||
      (weaponskin === "Pan") ||
      (weaponskin === "Sickle")) {
        weaponcategory = 'melee';
      }
      skinforblock = `<div class="titleblock" data-i18n="SkinFor">Skin For:</div>
      <div class="list ${weaponcategory} ${weaponskin}"></div>`
    }
    renderblock = `
<div class="itemDetails">
<div class="leftInfo">
${bpblock}
${probabilityBlock}
</div>
<div class="rightInfo">
${steamlink}
</div>
</div>
<div class="itemImage ${rarity}">
<img class="itemimg" src="${imglink + icon}.png"/>
</div>
${rarityinfo}
<div class="listblock">
${foundinBlock}
${itemset}
${rewardedbytext}
${rewardedbyblock}
${skinforblock}
${skininfo}
</div>

`
  }
  // RENDER SINGLE ITEM EQUIPMENTS AND CONSUMABLES
  if (type === "singleItem" && (category === "equipments" || category === "consumables")) {
    var i18n = PUBGITEMS[category][item].i18n;
    var icon2 = PUBGITEMS[category][item].icon2;
    var icontext = PUBGITEMS[category][item].icontext;
    var icontextblock = "";
    if(icontext){
      var icontexti18n = PUBGITEMS[category][item].icontexti18n;
      icontextblock = `<p class="icontext" data-i18n="${icontexti18n}">${icontext}</p>`;
    }
    var icontext2 = PUBGITEMS[category][item].icontext2;
    var icontext2block = "";
    if(icontext2){
      var icontext2i18n = PUBGITEMS[category][item].icontext2i18n;
      icontext2block = `<p class="icontext" data-i18n="${icontext2i18n}">${icontext2}</p>`
    }
    var bonus = PUBGITEMS[category][item].bonus;
    var bonusblock = '';
    if(bonus){
    var bonusi18 = bonus.replace(/ /gi, "_");
    var bonusValue = PUBGITEMS[category][item].bonusValue;
    bonusblock = `<p>
      <span class="bonustext" data-i18n="${bonusi18}">${bonus}:</span>
      <span class="val">${bonusValue}</span>
    </p>`
    
    }
    var img2 = "";
    if (icon2) img2 = `<div class="icon2">
    <img class="itemimg" src="${imglink + icon2}.png"/>
    ${icontext2block}
    </div>
    `;
    var bonus2 = PUBGITEMS[category][item].bonus2;
    var bonus2block = "";
    if (bonus2) {
      var bonus2i18 = PUBGITEMS[category][item].bonus2i18;
      var bonus2Value = PUBGITEMS[category][item].bonus2Value;
      bonus2block = `<p><span class="bonustext" data-i18n="${bonus2i18}">${bonus2}:</span>
<span class="val">${bonus2Value}</span></p>`
    };

    var carepackage = PUBGITEMS[category][item].carepackage;
    var carepackageblock = ``;
    if(carepackage){
      carepackageblock = `
      <div class="list"><a href="https://battlebase.github.io/pages/carepackage.html" class="itemlist">
<img class="itemimg" src="https://battlebase.github.io/assets/icons/carepackage_default240.png">
<div class="iteminfo">
<p class="name" data-i18n="Carepackage">Police Vest (Level 1)</p>
<p class="infotext">
      <span class="info" data-i18n="Damage_Reduction">Damage Reduction:</span>
      <span class="val">30%</span>
      </p>
</div>
</a></div>
      `
    }

    var descBlock = '';
    var desc = PUBGITEMS[category][item].desc;
    if (desc) {
      var i18desc = PUBGITEMS[category][item].i18desc;
      descBlock = `<div class="itemDesc"><span class="desc" data-i18n="${i18desc}">${desc}</span></div>`
    };

    var skins = PUBGITEMS[category][item].skins;
    var skinsblock = "";
    var skinblock = "";
    if(skins){
      for(var s in skins){
        skinsblock += `<div class="list skins ${skins[s]}"></div>`;
      }
      skinblock = `
      <div class="listblock">
      <div class="titleblock" data-i18n="Skins">Skins:</div>
      ${skinsblock}
      </div>
      `
    }
    

    var usetimeBlock = '';
    var usetime = PUBGITEMS[category][item].usetime;
    if (usetime) {
      usetimeBlock = `<p><span class="bonustext" data-i18n="usetime">Usage time:</span>
<span class="val">${usetime}s</span></p>`
    };

    var durationBlock = '';
    var duration = PUBGITEMS[category][item].duration;
    if (duration) {
      durationBlock = `<p><span class="bonustext" data-i18n="Duration">Duration:</span>
<span class="val">${duration}</span></p>`
    };
    var totalHealBlock = '';
    var totalHeal = PUBGITEMS[category][item].totalHeal;
    if (totalHeal) {
      totalHealBlock = `<p><span class="bonustext" data-i18n="usetime">Usage time:</span>
<span class="val">${totalHeal}s</span></p>`
    };

    var weightBlock = '';
    var weight = PUBGITEMS[category][item].weight;
    if (weight) {
      weightBlock = `<p><span class="bonustext" data-i18n="Capacity">Capacity:</span>
<span class="val">${weight}</span></p>`
    };
    var boosterBlock = '';
    var boosterBar = PUBGITEMS[category][item].bartype;
    if (boosterBar) {
      var barType = boosterBar[0];
      var barSize = boosterBar[1];
      boosterBlock = `
<div class="booster-bonus">
	<div class="${barType}"></div>
</div>
<div class="booster-bar">
	<div class="bar ${barSize}">
    <div class="bar1">
      <div class="ibar1"></div>
    </div>
    <div class="bar2">
      <div class="ibar2"></div>
    </div>
    <div class="bar3">
      <div class="ibar3"></div>
    </div>
    <div class="bar4">
      <div class="ibar4"></div>
    </div>
  </div>
</div>`
    };


    renderblock = `
<div class="itemDetails">
  <div class="leftInfo">
      ${bonusblock}
      ${bonus2block}
      ${totalHealBlock}
      ${weightBlock}
  </div>
  <div class="rightInfo">
    ${usetimeBlock}
    ${durationBlock}
  </div>
</div>
${boosterBlock}
<div class="itemImage">
  <div class="icon1">
  <img class="itemimg" src="${imglink + icon}.png"/>
  ${icontextblock}
  </div>
${img2}
</div>
${descBlock}
${skinblock}
`;
  };
  // RENDER SINGLE ITEM CRATES AND SETS
  if (type === "singleItem" && (category === "crates" || category === "sets")) {
    var ingame = PUBGITEMS[category][item].ingame;
    var marketable = PUBGITEMS[category][item].marketable;
    var key = PUBGITEMS[category][item].rkey;
    var crateItems = PUBGITEMS[category][item].crateItems;
    var probability = PUBGITEMS[category][item].probability;
    var probabilityBlock = '';
    if (probability) {
      probabilityBlock = `<p>
<span class="bonustext" data-i18n="Probability">Probability:</span>
<span class="val">${probability} %</span>
</p>`;
    };
    var crateskins = "";
      for (var s in crateItems) { 
        crateskins += `<div class="list skins ${crateItems[s]}"></div>`;
      }
    var crateblock = "";
    var crate = PUBGITEMS[category][item].crate;
    if(crate){
      var crateImage = PUBGITEMS['crates'][crate].icon;
      var cratename = PUBGITEMS['crates'][crate].name;
      crateblock = `
      <div class="titleblock" data-i18n="FoundIn">Found In:</div>
  <div class="list">
  <a href="https://battlebase.github.io/pages/crates-${crate}.html" class="itemlist">
  <img class="itemimg" src="${assetslink + 'crates/' + crateImage}.png"/>
  <div class="iteminfo">
  <p class="name" data-i18n="${crate}">${cratename}</p>
  </div>
  </a>
  <a target="_blank" href="https://steamcommunity.com/market/listings/578080/${marketLink}" class="steamlink steambox external">
  <p class="pricebox">
  <span class="pricesymbol"></span>
  <span class="priceval" data-item=${marketName}></span>
  </p>
  <i class="steamicon"></i>
  </a>
  </div>
  `
    }
    var cratesetsblock = "";
    var crateSets = PUBGITEMS[category][item].crateSets;
    if(crateSets){
      var setblock = "";
      for (var s in crateSets) { 
        setblock += `<div class="list sets ${crateSets[s]}"></div>`;
      }
      cratesetsblock = `
      <div class="titleblock" data-i18n="Sets">Sets:</div>
      ${setblock}
  `
    }
    var ingametext = '';
    var marketabletext = '';
    var keytext = '';
    if(ingame){
      if(category === "sets"){
        ingametext = `<p class="text">
        <span data-i18n="Thisset">This set</span>
        <span class="greentxt" data-i18n="canbeobtainedingame">can be obtained in-game</span>
        <span data-i18n="withbp">with Battle Points (BP).</span>
        </p>`;
      }
      else {
        ingametext = `<p class="text">
        <span data-i18n="Thiscrate">This crate</span>
        <span class="greentxt" data-i18n="canbeobtainedingame">can be obtained in-game</span>
        <span data-i18n="withbp">with Battle Points (BP).</span>
        </p>`;
      }
    } else {
      if(category === "sets"){
        ingametext = `<p class="text">
        <span data-i18n="Thisset">This set</span>
        <span class="redtxt" data-i18n="cantbeobtainedingame">can't be obtained in-game</span>
        <span data-i18n="withbp">with Battle Points (BP).</span>
        </p>`;
      }
      else {
        ingametext = `<p class="text">
      <span data-i18n="Thiscrate">This crate</span>
      <span class="redtxt" data-i18n="cantbeobtainedingame">can't be obtained in-game</span>
      <span data-i18n="withbp">with Battle Points (BP).</span>
      </p>`;
      }
      
    }

    if(marketable){
      marketabletext = `<p class="text">
      <span data-i18n="Thiscrate">This crate</span>
      <span class="yellowtxt" data-i18n="ismarketabletradable">is marketable/tradable</span>
      </p>`
    } else {
      marketabletext = ``
    }
    var keyblock = '';
    if(key){
      keyblock = `
      <div class="titleblock" data-i18n="Unlockswith">Unlocks with:</div>
      <div class="list keys ${key}"></div>
      `
      keytext = `<p class="text">
      <span data-i18n="You">You</span>
      <span class="redtxt" data-i18n="needakey">need a key</span>
      <span data-i18n="toopenthiscrate">to open this crate</span>
      </p>`
    } else {
      keytext = `<p class="text"><span data-i18n="You">You</span>
      <span class="greentxt" data-i18n="dontneedakey">don't need a key</span>
      <span data-i18n="toopenthiscrate">to open this crate.</span>
      </p>`
    }
    var opentext = `<p class="text">
      <span data-i18n="Byopeningthiscrateyouwillreceive">By opening this crate you will receive</span>
      <span class="redtxt" data-i18n="onlyone">only one</span>
      <span data-i18n="ofthefollowingitems">of the following items.</span>  
      </p>`;
    if(category === "sets"){
      keytext = "";
      opentext = `<p class="text">
      <span data-i18n="Byopeningthissetyouwillreceive">By opening this set you will receive</span>
      <span data-i18n="thefollowingitems">the following items:</span>  
      </p>`;
    }
    

    renderblock = `
      <div class="itemDetails">
        <div class="leftInfo">
        ${probabilityBlock}
        </div>
        <div class="rightInfo">
        </div>
      </div>
      <div class="itemImage">
        <img class="itemimg" src="${imglink + icon}.png"/>
      </div>
      <div class="content-block">
        <div class="cratetext">
          ${ingametext}
          ${marketabletext}
          ${keytext}
          ${opentext}
        </div>
      </div>
      <div class="listblock">
      ${keyblock}
      ${cratesetsblock}
      ${crateblock}
      <div class="titleblock" data-i18n="Items">Items:</div>
      ${crateskins}
      </div>
    `;
  }
  // RENDER SINGLE ITEM KEYS
  if (type === "singleItem" && category === "keys") {
    var unlocks = PUBGITEMS[category][item].unlocks;
    var unlocksBlock = "";
      for (var u in unlocks) { 
        unlocksBlock += `<div class="list crates ${unlocks[u]}"></div>`;
      }
      renderblock = `
    <div class="content-block">
      <div class="itemDetails">
        <div class="leftInfo">
        </div>
        <div class="rightInfo">
        </div>
      </div>
      <div class="itemImage">
        <img class="itemimg" src="${imglink + icon}.png"/>
      </div>
    </div>
    <div class="listblock">
      <div class="titleblock" data-i18n="Openthesecrates">Open these crates:</div>
      ${unlocksBlock}
    </div>
    `;

  }
  // RENDER SINGLE ITEM ATTACHMENTS & SIGHTS
  if(type === "singleItem" && (category === "attachments" || category === "sights" || category === "ammo")){
    var weight = PUBGITEMS[category][item].weight;
    var weightBlock = '';
    if (weight) {
      weightBlock = `<p><span class="bonustext" data-i18n="Capacity">Capacity:</span>
<span class="val">${weight}</span></p>`
    };
    var unique = PUBGITEMS[category][item].unique;
    var uniqueBlock = '';
    if (unique) {
      uniqueBlock = `<p><span class="bonustext" data-i18n="AttachTo">Attach to:</span>
<span class="val">${unique}</span></p>`
    };
    var bonusesBlock = '';
    var bonuses = PUBGITEMS[category][item].bonuses;
    if (bonuses) {
      for(var b in bonuses){
        var bonusDesc = bonuses[b];
        var bonusNumber = 0;
        bonusesBlock += `<p class="desc" data-i18n="${i18n}_bonus${bonusNumber}">${bonusDesc}</p>`
        bonusNumber++;
      }
    };
    var titleBlock = '';
    var attweaponsBlock = '';
    var attweapons = PUBGITEMS[category][item].attweapons;
    if (attweapons) {
      titleBlock = `<div class="titleblock" data-i18n="AttachableTo">Attachable to:</div>`;
      for(var a in attweapons){
        var weapon = attweapons[a];
        attweaponsBlock += `<div class="list weapons ${weapon}"></div>`
      }
    };
    var ammoforBlock = '';
    var ammofor = PUBGITEMS[category][item].ammofor;
    if (ammofor) {
      titleBlock = `<div class="titleblock" data-i18n="AmmoFor">Ammo for:</div>`;
      for(var a in ammofor){
        var weapon = ammofor[a];
        ammoforBlock += `<div class="list weapons ${weapon}"></div>`
      }
    };

    renderblock = `
<div class="itemDetails">
  <div class="leftInfo">
      ${weightBlock}
      ${uniqueBlock}
  </div>
  <div class="rightInfo">
  </div>
</div>
<div class="itemImage">
  <img class="itemimg" src="${imglink + icon}.png"/>
</div>
<div class="itemDesc">
  ${bonusesBlock}
</div>
<div class="listblock">
${titleBlock}
${attweaponsBlock}
${ammoforBlock}
</div>
`
;
  }
  // RENDER SINGLE ITEM WEAPONS
  if(type === "singleItem" && category === "weapons"){
    var weapontype = PUBGITEMS[category][item].type;
    var typei18n = PUBGITEMS[category][item].typei18n;
    var ammo = PUBGITEMS[category][item].ammo;
    ammo = ammo.replace(/\./gi,'').replace(/ /gi,'');
    ammo = 'ammo'+ammo;
    var ammoImg = PUBGITEMS['ammo'][ammo].icon;
    var ammoImglink = assetslink + 'ammo/' + ammoImg;
    var ammoName = PUBGITEMS['ammo'][ammo].name;
    var ammoi18n = PUBGITEMS['ammo'][ammo].i18n;
    var hdicon = assetslink + 'weaponshd/' +icon;
    var stats = PUBGITEMS[category][item].stats;
    var desc = PUBGITEMS[category][item].desc;
    var i18desc = PUBGITEMS[category][item].i18desc;
    var firingMode = PUBGITEMS[category][item].firingMode;
    var firingModes = '';
    for(var f in firingMode){
      firingModes += `<span class="val ${firingMode[f]}">${firingMode[f]}</span>`
    }

    var maps = PUBGITEMS[category][item].maps;
    var mapblock = '';
    for(var m in maps){
      mapblock += `<span class="val bIcon ${maps[m]}">${maps[m]}</span>`
    }
    
    var capacity;
    var pellets;
    if(stats){
      capacity = PUBGITEMS[category][item].stats.capacity;
      pellets = PUBGITEMS[category][item].stats.pellets;
    }
    if(item === "FlareGun"){capacity = 1;}
    var statsblock = `<div class="itemStats">`;

    var comparewpn = '';
    if(item != "FlareGun"){
      comparewpn = `
      <a class="compare ${item}">
      <i class="c-icon"></i><span class="c-text" data-i18n="Compare">Compare</span>
      </a>
      `
      //Attachments Muzzle
      var attachmuzzle = PUBGITEMS[category][item].muzzle;
      var attachmuzzleblock = '';
      if (attachmuzzle) {
        if (attachmuzzle.length > 0) {
          attachmuzzleblock += `<div class="titleblock" data-i18n="Muzzle">Muzzle</div>`
          for (var a in attachmuzzle) {
            attachmuzzleblock += `<div class="list attachments ${attachmuzzle[a]}"></div>`
          }
        }
      }
      //Attachments Grip
      var attachgrip = PUBGITEMS[category][item].grip;
      var attachgripblock = '';
      if (attachgrip) {
        if (attachgrip.length > 0) {
          attachmuzzleblock += `<div class="titleblock" data-i18n="Grip">Grip</div>`
          for (var a in attachgrip) {
            attachgripblock += `<div class="list attachments ${attachgrip[a]}"></div>`
          }
        }
      }
      //Attachments Mag
      var attachmag = PUBGITEMS[category][item].mag;
      var attachmagblock = '';
      if (attachmag) {
        if (attachmag.length > 0) {
          attachmagblock += `<div class="titleblock" data-i18n="Mag">Mag</div>`
          for (var a in attachmag) {
            attachmagblock += `<div class="list attachments ${attachmag[a]}"></div>`
          }
        }
      }
      //Attachments Stock
      var attachstock = PUBGITEMS[category][item].stock;
      var attachstockblock = '';
      if (attachstock) {
        if (attachstock.length > 0) {
          attachstockblock += `<div class="titleblock" data-i18n="Stock">Stock</div>`
          for (var a in attachstock) {
            attachstockblock += `<div class="list attachments ${attachstock[a]}"></div>`
          }
        }
      }
    //Attachments Sights
    var attsights = PUBGITEMS[category][item].attsights;
    var cantedsight = PUBGITEMS[category][item].cantedsight;
    var attsightsblock = '';
    var cantedsightblock = '';
    if(cantedsight){cantedsightblock = `<div class="list sights cantedsight"></div>`};
    if(attsights){
      if(attsights.length > 0){
        attsightsblock += `<div class="titleblock" data-i18n="Sights">Sights</div>
        ${cantedsightblock}`
        for(var a in attsights){
          attsightsblock += `<div class="list sights ${attsights[a]}"></div>`
        }
      }
    }
    

    //Skins
    var skins = PUBGITEMS[category][item].skins;
    var skinsblock = '';
    if(skins.length > 0){
      skinsblock +=`
      <div class=listblock">
      <div class="titleblock" data-i18n="Skins">Skins:</div>
      `
      for(var s in skins){
        skinsblock += `<div class="list skins ${skins[s]}"></div>`
      }
      skinsblock +=`</div>`;
    }
      
      
      $.each( stats, function( key, value ) {
        var width = value;
        var keytext = key;
        var tip = '';
        var valueExt = '';
        var pelletsval = '';
        if(key === "damage"){
          var barWidth = Math.round(value * 100 / 120);
          width = Math.abs(barWidth);
          if(pellets){
            pelletsval = " ("+pellets + "x" + value + " = "+ pellets * value +")"
          }
        }
        if(key === "rateoffire"){
          keytext = 'Rate of Fire';
          valueExt = 's';
          var barWidth = Math.round(value * 100 / 1.9) - 100;
        width = Math.abs(barWidth);
          tip = "Less is better";
        }
        if(key === "reload"){
          valueExt = 's';
          var barWidth = Math.round(value * 100 / 8.2) - 100;
        width = Math.abs(barWidth);
          tip = "Less is better";
        }
        if(key === "soundrange"){
          valueExt = 'm';
          keytext = 'Sound Range';
          var barWidth = Math.round(value * 100 / 1000) - 100;
        width = Math.abs(barWidth);
          tip = "Less is better";
        }
        if(key === "supressed"){
          valueExt = 'm';
          var barWidth = Math.round(value * 100 / 1000) - 100;
        width = Math.abs(barWidth);
        }
        if(key === "range" || key === "bulletspeed"){
          if(key === "bulletspeed"){keytext = 'Bullet Speed';valueExt = 'm/s';}
          if(key === "range"){valueExt = 'm';}
          var barWidth = Math.round(value / 10);
        width = Math.abs(barWidth);
        }
        if(key === "bodyimpact"){
          keytext = 'Body Impact';
          value = value.replace(/\./gi,'');
          value = Number(value);
          var barWidth = Math.round(value * 100 / 40000);
          width = Math.abs(barWidth);
          value = dotnumber(value);
        }
        if(width === 0){width = 1;}
        var stat = '';
        if((key != "capacity")
          && (key != "capacityExt")
          && (key != "stability")
          && (key != "rate")
          && (key != "pellets")){
              stat = `<div class="statBlock ${key}">
              <p class="stats" data-i18n="${key}">${keytext}</p>
              <div class="outer-bar ${value}" data-value="${value}">
                <span class="tip">${tip}</span>
                <span class="value ${value}">${value}${valueExt}${pelletsval}</span>
                <div class="bonus-bar ${key}"></div>
                <div class="inner-bar ${key}" style="width: ${width}%;background-color: hsl(${width}, 100%, 50%);"></div>
              </div>
            </div>`
        }
        statsblock += stat;
        
      });

    var weaponDamage = pellets = PUBGITEMS[category][item].stats.damage;
    var damageClass = PUBGITEMS.damagestats[typei18n];
    var dmghead = (weaponDamage * (damageClass.head / 100)).toFixed(2);
    var dmgbody = (weaponDamage * (damageClass.body / 100)).toFixed(2);
    //var dmgarmslegs = weaponDamage * (damageClass.armsandlegs) / 50;
    var dmgarmslegs = weaponDamage - (weaponDamage * 0.5).toFixed(2);
    dmgarmslegs = (dmgarmslegs * (damageClass.armsandlegs / 100)).toFixed(2);

    var dmghelmet1 = dmghead - (dmghead * 0.3);
    dmghelmet1 = dmghelmet1.toFixed(2);
    var dmghelmet2 = dmghead - (dmghead * 0.4);
    dmghelmet2 = dmghelmet2.toFixed(2);
    var dmghelmet3 = dmghead - (dmghead * 0.55);
    dmghelmet3 = (Math.round(dmghelmet3*100)/100).toFixed(2).replace(/[.,]00$/, "");

    var dmgvest1 = dmgbody - (dmgbody * 0.3).toFixed(2);
    var dmgvest2 = dmgbody - (dmgbody * 0.4).toFixed(2);
    var dmgvest3 = dmgbody - (dmgbody * 0.55);
    dmgvest3 = (Math.round(dmgvest3*100)/100).toFixed(2).replace(/[.,]00$/, "");

    var damagestatsblock = `
    <div class="titleblock" data-i18n="HeadDamage">Head Damage</div>
    <div class="damagestatsblock">
      <div class="statsblock">
        <img src="${assetslink}equipments/NoHelmet.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="NoHelmet">No Helmet</span>
        <span class="damagevalue">${dmghead}</span>
        <span class="shots" data-value="${dmghead}"></span>
        </p>
      </div>
      <div class="statsblock">
        <img src="${assetslink}equipments/Item_Head_E_01_Lv1_C.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="HelmetLv1">Helmet Lv 1</span>
        <span class="damagevalue">${dmghelmet1}</span>
        <span class="shots" data-value="${dmghelmet1}"></span>
        </p>
      </div>
      <div class="statsblock">
        <img src="${assetslink}equipments/Item_Head_F_01_Lv2_C.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="HelmetLv2">Helmet Lv 2</span>
        <span class="damagevalue">${dmghelmet2}</span>
        <span class="shots" data-value="${dmghelmet2}"></span>
        </p>
      </div>
      <div class="statsblock">
        <img src="${assetslink}equipments/Item_Head_G_01_Lv3_C.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="HelmetLv3">Helmet Lv 3</span>
        <span class="damagevalue">${dmghelmet3}</span>
        <span class="shots" data-value="${dmghelmet3}"></span>
        </p>
      </div>
    </div>
    <div class="titleblock" data-i18n="BodyDamage">Body Damage</div>
    <div class="damagestatsblock">
      <div class="statsblock">
        <img src="${assetslink}equipments/NoVest.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="NoVest">No Vest</span>
        <span class="damagevalue">${dmghead}</span>
        <span class="shots" data-value="${dmghead}"></span>
        </p>
      </div>
      <div class="statsblock">
        <img src="${assetslink}equipments/Item_Armor_E_01_Lv1_C.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="VestLv1">Vest Lv 1</span>
        <span class="damagevalue">${dmgvest1}</span>
        <span class="shots" data-value="${dmgvest1}"></span>
        </p>
      </div>
      <div class="statsblock">
        <img src="${assetslink}equipments/Item_Armor_D_01_Lv2_C.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="VestLv2">Vest Lv 2</span>
        <span class="damagevalue">${dmgvest2}</span>
        <span class="shots" data-value="${dmgvest2}"></span>
        </p>
      </div>
      <div class="statsblock">
        <img src="${assetslink}equipments/Item_Armor_C_01_Lv3_C.png"/>
        <p class="damagestat">
        <span class="damagetext" data-i18n="VestLv3">Vest Lv 3</span>
        <span class="damagevalue">${dmgvest3}</span>
        <span class="shots" data-value="${dmgvest3}"></span>
        </p>
      </div>
    </div>
    `
    
    statsblock += `</div>`;
    var stats_tab = '';
    
       stats_tab = `
    <div class="statgroup">
      <div class="statinfoblock">
        <div class="titleblock">Stats</div>
        ${statsblock}
      </div>
      <div class="statinfoblock">
        ${damagestatsblock}
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-item-toggle">
        <span class="toggle-title" data-i18n="Attachments">Attachments</span><i class="show"></i>
      </div>
      <div class="accordion-item-content">
      <div class="listblock">
      ${attsightsblock}
      ${attachmuzzleblock}
      ${attachgripblock}
      ${attachmagblock}
      ${attachstockblock}
      </div>
      </div>
    </div>
    `
    }

    renderblock = `
    <div class="itemDetails">
        <div class="leftInfo">
        <p>
          <span class="bonustext" data-i18n="Type">Type:</span>
          <span class="val" data-i18n="${typei18n}">${weapontype}</span>
        </p>
        <p>
          <span class="bonustext" data-i18n="FiringModes">Firing Modes:</span>
          ${firingModes}
        </p>
        <p class="mapsblock">
          <span class="bonustext" data-i18n="Maps">Maps:</span>
          ${mapblock}
        </p>
        </div>
        <div class="rightInfo">
        <a href="https://battlebase.github.io/pages/ammo-${ammo}.html" class="ammo">
          <img class="itemimg" src="${ammoImglink}.png"/>
          <span class="bonustext" data-i18n="${ammoi18n}">${ammoName}</span>
          <span class="capacity" data-capacity="${capacity}">${capacity}</span>
        </a>
        </div>
      </div>
      <div class="itemImage">
        <img class="itemimg" src="${hdicon}.png"/>
      </div>
      ${comparewpn}
      <div class="itemDesc">
        <span class="desc" data-i18n="${i18desc}">${desc}</span>
      </div>
      ${stats_tab}
      ${skinsblock}
      `
  }
  // RENDER SINGLE ITEM WEAPONS COMPARE
  if(type === "compare" && category === "weapons"){
    var weapontype = PUBGITEMS[category][item].type;
    var typei18n = PUBGITEMS[category][item].typei18n;
    var ammo = PUBGITEMS[category][item].ammo;
    ammo = ammo.replace(/\./gi,'').replace(/ /gi,'');
    ammo = 'ammo'+ammo;
    console.log(ammo)
    var ammoImg = PUBGITEMS['ammo'][ammo].icon;
    var ammoImglink = assetslink + 'ammo/' + ammoImg;
    var ammoName = PUBGITEMS['ammo'][ammo].name;
    var ammoi18n = PUBGITEMS['ammo'][ammo].i18n;
    var hdicon = assetslink + 'weaponshd/' +icon;
    var stats = PUBGITEMS[category][item].stats;
    var desc = PUBGITEMS[category][item].desc;
    var i18desc = PUBGITEMS[category][item].i18desc;
    var firingMode = PUBGITEMS[category][item].firingMode;
    var firingModes = '';
    for(var f in firingMode){
      firingModes += `<span class="val ${firingMode[f]}">${firingMode[f]}</span>`
    }
    var capacity;
    var pellets;
    if(stats){
      capacity = PUBGITEMS[category][item].stats.capacity;
      pellets = PUBGITEMS[category][item].stats.pellets;
    }
    if(item === "FlareGun"){capacity = 1;}
    var statsblock = `<div class="itemStats">`;
      if(item != "FlareGun"){
        
        $.each( stats, function( key, value ) {
          var width = value;
          var keytext = key;
          var tip = '';
          var valueExt = '';
          var pelletsval = '';
          if(key === "damage"){
            var barWidth = Math.round(value * 100 / 120);
            width = Math.abs(barWidth);
            if(pellets){
              pelletsval = " ("+pellets + "x" + value + " = "+ pellets * value +")"
            }
          }
          if(key === "rateoffire"){
            keytext = 'Rate of Fire';
            valueExt = 's';
            var barWidth = Math.round(value * 100 / 1.9) - 100;
          width = Math.abs(barWidth);
            tip = "Less is better";
          }
          if(key === "reload"){
            valueExt = 's';
            var barWidth = Math.round(value * 100 / 8.2) - 100;
          width = Math.abs(barWidth);
            tip = "Less is better";
          }
          if(key === "soundrange"){
            valueExt = 'm';
            keytext = 'Sound Range';
            var barWidth = Math.round(value * 100 / 1000) - 100;
          width = Math.abs(barWidth);
            tip = "Less is better";
          }
          if(key === "supressed"){
            valueExt = 'm';
            var barWidth = Math.round(value * 100 / 1000) - 100;
          width = Math.abs(barWidth);
          }
          if(key === "range" || key === "bulletspeed"){
            if(key === "bulletspeed"){keytext = 'Bullet Speed';valueExt = 'm/s';}
            if(key === "range"){valueExt = 'm';}
            var barWidth = Math.round(value / 10);
          width = Math.abs(barWidth);
          }
          if(key === "bodyimpact"){
            keytext = 'Body Impact';
            value = value.replace(/\./gi,'');
            value = Number(value);
            var barWidth = Math.round(value * 100 / 40000);
            width = Math.abs(barWidth);
            value = dotnumber(value);
          }
          if(width === 0){width = 1;}
          var stat = '';
          if((key != "capacity")
            && (key != "capacityExt")
            && (key != "stability")
            && (key != "rate")
            && (key != "pellets")){
                stat = `<div class="statBlock ${key}">
                <p class="stats" data-i18n="${key}">${keytext}</p>
                <div class="outer-bar ${value}" data-value="${value}">
                  <span class="tip">${tip}</span>
                  <span class="value ${value}">${value}${valueExt}${pelletsval}</span>
                  <div class="bonus-bar ${key}"></div>
                  <div class="inner-bar ${key}" style="width: ${width}%;background-color: hsl(${width}, 100%, 50%);"></div>
                </div>
              </div>`
          }
          statsblock += stat;
          
        });
      }


    statsblock += `</div>`;

    renderblock = `
    <div class="name" data-i18n="${item}">${name}</div>
    <div class="itemDetails">
        <div class="leftInfo">
        <p>
          <span class="bonustext" data-i18n="Type">Type:</span>
          <span class="val" data-i18n="${typei18n}">${weapontype}</span>
        </p>
        <p>
          <span class="bonustext" data-i18n="FiringModes">Firing Modes:</span>
          ${firingModes}
        </p>
        </div>
        <div class="rightInfo">
        <a href="https://battlebase.github.io/pages/ammo-${ammo}.html" class="ammo">
          <img class="itemimg" src="${ammoImglink}.png"/>
          <span class="bonustext" data-i18n="${ammoi18n}">${ammoName}</span>
          <span class="capacity" data-capacity="${capacity}">${capacity}</span>
        </a>
        </div>
      </div>
      <div class="itemImage">
        <img class="itemimg" src="${hdicon}.png"/>
      </div>
      <div class="itemDesc">
        <span class="desc" data-i18n="${i18desc}">${desc}</span>
      </div>
      ${statsblock}
      `
  }
  // RENDER SINGLE ITEM MELEE
  if (type === "singleItem" && (category === "melee" || category === "trowables")) {
    var damage = PUBGITEMS[category][item].damage;
    var desc = PUBGITEMS[category][item].desc;
    var i18desc = PUBGITEMS[category][item].i18desc;
    var damageblock = '';
    if(damage){
      damageblock = `<p><span class="bonustext" data-i18n="Damage">Damage:</span>
<span class="val">${damage}</span></p>`
    }
    var skins = PUBGITEMS[category][item].skins;
    var skinsblock = "";
    var skinblock = "";
    if(skins){
      for(var s in skins){
        skinsblock += `<div class="list skins ${skins[s]}"></div>`;
      }
      skinblock = `
      <div class="listblock">
      <div class="titleblock" data-i18n="Skins">Skins:</div>
      ${skinsblock}
      </div>
      `
    }

    renderblock = `
      <div class="itemDetails">
        <div class="leftInfo">
        ${damageblock}
        </div>
        <div class="rightInfo">
        </div>
      </div>
      <div class="itemImage">
        <img class="itemimg" src="${imglink + icon}.png"/>
      </div>
      <div class="itemDesc">
        <span class="desc" data-i18n="${i18desc}">${desc}</span>
      </div>
      ${skinblock}
    `;
  }
  // RENDER SINGLE ITEM CHARMS
  if (type === "singleItem" && category === "charms") {
    var description = PUBGITEMS[category][item].description;
    var charmIcon = name.replace(/ /gi, '_');
    var level = PUBGITEMS[category][item].level;
    var charmdesc = charmIcon + '_desc';
      renderblock = `
      <div class="itemDetails">
        <div class="leftInfo">
        <p>
          <span class="bonustext" data-i18n="Level">Level:</span>
          <span class="val">${level}</span>
        </p>
        </div>
        <div class="rightInfo">
        </div>
      </div>
      <div class="itemImage">
        <img class="itemimg" src="${imglink + charmIcon}.png"/>
      </div>
      <div class="itemDesc">
        <span class="desc" data-i18n="${charmdesc}">${description}</span>
      </div>
    `;

  }
  // RENDER CARDS CHARMS
  if (type === "cards" && category === "charms") {
    var charmIcon = name.replace(/ /gi, '_');
    var level = PUBGITEMS[category][item].level;
    var charmdesc = charmIcon + '_desc';
      renderblock = `
      <a href="https://battlebase.github.io/pages/${category}-${item}.html" class="itemcard">
        <img class="itemimg" src="${imglink + charmIcon}.png"/>
        <div class="cardtext">
          <p class="name" data-i18n="${item}">${name}</p>
          <p class="iteminfo">
            <span class="info" data-i18n="Level">Level:</span>
            <span class="val">${level}</span>
          </p>
        </div>
      </a>
    `;

  }
  return renderblock;
}
function renderLists(){
  $('.list').each(function () {
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
      var type = classes[0];
      var category = classes[1];
      var item = classes[2];
      $(this).html(render(type, category, item));
    }
  });
}

function filtercards(type, property, value) {
  var obj = [];
  var entries = PUBGITEMS[type];
  var carditems = "";

  if (property && value) {
    $.each(entries, function (keys, entry) {
      if (entry[property] === value) {
        obj.push(entry);
      }
    })
  }
  else if (property) {
    $.each(entries, function (keys, entry) {
      if (entry[property] === true) {
        obj.push(entry);
      }
    })
  }
  else {
    $.each(entries, function (keys, entry) {
        obj.push(entry);
    })
  }
  if(type != 'charms'){
    sortOn(obj, "item");
  }
  console.log(obj)
  $(obj).each(function displayResults(i, pubg) {
    carditems += (`<div class="cards ${type} ${pubg.item}"></div>`);
  });
  return carditems;
}

function renderCards(){
  $('.cards').each(function () {
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
      var type = classes[0];
      var category = classes[1];
      var item = classes[2];
      $(this).html(render(type, category, item));
    }
  });
}



function renderSingleItems(){
  $('.singleItem').each(function () {
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
      var type = classes[0];
      var category = classes[1];
      var item = classes[2];
      $(this).html(render(type, category, item));
    }
  });
  renderLists();
}
renderLists();
renderSingleItems();

function renderPass(pass, type, level){
  var imglink = 'https://battlebase.github.io/assets/ammo/';
  var name = PUBGITEMS['ammo'][item].name;
  var icon = PUBGITEMS['ammo'][item].icon;
  var i18n = PUBGITEMS['ammo'][item].i18n;
  return `
  <a href="https://battlebase.github.io/pages/ammo-${item}.html" class=itemlist> 
    <img class="itemimg" src="${imglink + icon}.png"/>
    <div class=iteminfo>
      <p class=name data-i18n="${i18n}">${name}</p>
      <p class=infotext>
        <span class=info data-i18n=Quantity>Quantity:</span>
        <span class=val>${quantity}</span>
      </p> 
    </div>
  </a>`
}

function renderSurvivorPass(){
  // survivorpass ${rewardpass} ${rewardtype} ${rewardlevel}
    $('.survivorpass').each(function () {
      if (this.childNodes.length === 0) {
        var classes = $(this).attr('class').split(' ');
        var pass = classes[1];
        var type = classes[2];
        var level = classes[2];
        $(this).html(renderPass(pass, type, level));
      }
    });
}

function filterskin(type){
  var obj = [];
  var entries = PUBGITEMS.skins;
  var menuitems = "";
  $.each( entries, function( keyentry, entry ) {
    if(entry['skintype'] === type){
      console.log("found "+entry.item)
      obj.push(entry);
    }
  });
  sortOn(obj, "item");
  $(obj).each(function displayResults (i, pubg){
    menuitems += (`<div class="list skins ${pubg.item}"></div>`);
  });
  return menuitems;
}

function renderMenuSkins() {
  $('.menuskins').each(function () {
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
      var type = classes[1];
      $(this).html(filterskin(type));
    }
  });
  renderLists();
}
renderMenuSkins();

function renderMenuCards() {
  $('.menucards').each(function () {
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
      var type = classes[1];
      $(this).html(filtercards(type));
    }
  });
  renderCards()
}

function menulist(type, property, value) {
  var obj = [];
  var entries = PUBGITEMS[type];
  var menuitems = "";

  if (property && value) {
    $.each(entries, function (keys, entry) {
      if (entry[property] === value) {
        obj.push(entry);
      }
    })
  }
  else if (property) {
    $.each(entries, function (keys, entry) {
      if (entry[property] === true) {
        obj.push(entry);
      }
    })
  }
  else {
    $.each(entries, function (keys, entry) {
        obj.push(entry);
    })
  }
  if(type != 'charms'){
    sortOn(obj, "item");
  }
  $(obj).each(function displayResults(i, pubg) {
    menuitems += (`<div class="list ${type} ${pubg.item}"></div>`);
  });
  return menuitems;
}

function renderMenulist() {
  $('.menulist').each(function () {
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
      var type = classes[1];
      var property = classes[2];
      var value = classes[3];
      $(this).html(menulist(type,property,value));
    }
  });
  renderLists();
}
renderMenulist();

function carepackageammo(){
  $(".carepackageammo").each(function(){
    if (this.childNodes.length === 0) {
      var classes = $(this).attr('class').split(' ');
        var item = classes[1];
        var quantity = classes[2];
      $(this).html(renderCarepackageammo(item, quantity));
    }
  });
}
carepackageammo();

function filterCarepackage(){
  var obj = [];
  var menuitems = "";
  $.each( PUBGITEMS, function( entry, values ) {
    var entries = values
    console.log(values)
    $.each( values, function( keyentry, keyvalues ) {
      if(keyvalues.carepackage){
        console.log("found "+keyvalues.item)
        obj.push(keyvalues);
      }
    });
  });
  console.log("OBJ")
  console.log(obj)
  //sortOn(obj, "item");
  $(obj).each(function displayResults (i, pubg){
    menuitems += (`<div class="list skins ${pubg.item}"></div>`);
  });
  return menuitems;
}
function compareWpnsInit(){
  var compareWeapons = [];
  $(document).on('click', '.compare', function() {
    var $this = this;
    var classes = $(this).attr('class').split(' ');
    var wpn = classes[1];
    var wpnIcon = PUBGITEMS.weapons[wpn].icon;
    var wpnName = PUBGITEMS.weapons[wpn].name;
    console.log(wpnIcon);
    compareWeapons.push(wpn);
    console.log(compareWeapons.length);
    if(compareWeapons.length === 1){
      $(this).addClass("hide");
      $('.comparebox').addClass("active");
      var firstwpn = `
  <img src="https://battlebase.github.io/assets/weapons/${wpnIcon}.png"/><span class="selectedwpnName">${wpnName}</span>
  `;
      $('.selectedwpn').html(firstwpn);
    }
    if(compareWeapons.length === 2){
      // Initiate compare
      var firstwpn = compareWeapons[0];
      var secondwpn = compareWeapons[1];
      
      var comparedwpns = '<div class="comparedWpn first">'+
          render("compare","weapons",firstwpn) +
          '</div>'+
      '<div class="comparedWpn second">'+
          render("compare","weapons",secondwpn) +
          '</div>';

      $(".wpns-box").addClass("active");
      $("body").addClass("no-scroll");
      $(".wpns-bg").addClass("active");
      $(".comparebox").removeClass("active");
      
      console.log(firstwpn);
      console.log(secondwpn);
      $('.selectedwpn').html("");
      $('.wpnsCompare').html(comparedwpns);
      compareWpns(firstwpn,secondwpn);
    }
  
  });
  $(document).on('click', '.showbox', function() {
    $(this).toggleClass("active");
    $(this).parent().toggleClass("collapsed");
  });
  $(document).on('click', '.cancelcompare', function() {
    compareWeapons = [];
    $('.selectedwpn').html("");
    $('.compare').removeClass("hide");
    $('.comparebox').removeClass("active");
    $('.comparebox').removeClass("collapsed");
  });
  $('.wpns-box').on('click', '.closecomparison', function () {
    compareWeapons = [];
    $(".wpns-box").removeClass("active");
    $(".wpns-bg").removeClass("active");
    $("body").removeClass("no-scroll");
    $(".compare").removeClass("hide");
    $(".comparebox").removeClass("collapsed");
    $(".comparebox").removeClass("active");
    $(".showbox").removeClass("active");
    $('.selectedwpn').html("");
    $('.wpnsCompare').html("");
  })
}


function compareWpns(first,second){
  var A = PUBGITEMS.weapons[first].stats;
  var B = PUBGITEMS.weapons[second].stats;
  for(var key in A) {
    var prop = key;
    var val = A[key];
    var val2 = B[prop];

    if(val > val2){
      $('.comparedWpn.first .inner-bar.'+prop).addClass("green");
      $('.comparedWpn.first .statBlock.'+prop+ ' .value').addClass("green");
      $('.comparedWpn.second .inner-bar.'+prop).addClass("red");
      $('.comparedWpn.second .statBlock.'+prop+ ' .value').addClass("red");
      console.log("valueA "+val+" is Greater than valueB "+val2+ " valueA is GREEN and VALUEB is RED")
    }
    if(val < val2){
      $('.comparedWpn.first .inner-bar.'+prop).addClass("red");
      $('.comparedWpn.first .statBlock.'+prop+ ' .value').addClass("red");
      $('.comparedWpn.second .inner-bar.'+prop).addClass("green");
      $('.comparedWpn.second .statBlock.'+prop+ ' .value').addClass("green");
      console.log("valueA "+val+" is Minor than valueB "+val2+ " valueB is GREEN and VALUEA is RED")
    }
    if(val === val2){
      $('.comparedWpn.first .inner-bar.'+prop).addClass("yellow");
      $('.comparedWpn.first .statBlock.'+prop+ ' .value').addClass("yellow");
      $('.comparedWpn.second .inner-bar.'+prop).addClass("yellow");
      $('.comparedWpn.second .statBlock.'+prop+ ' .value').addClass("yellow");
      console.log("valueA "+val+" is Equal than ValueB "+val2+ " Values are Yellow")
    }
    
    

  } 
}


var theme = 'default';
function getTheme() {
  if (localStorage.theme) {
    theme = localStorage.theme;
    var root = document.documentElement;
    if (theme = 'default') {
      root.style.setProperty('--listbgcolor', '#292929');
    }
    if (theme = 'purple') {
      root.style.setProperty('--listbgcolor', '#161326');
    }
  }
  else {
    localstorage.theme = theme;
  }

}

var themes = {
  default: {
    pagebgcolor: '#131313',
    listbgcolor: '#292929',
    listbordertopcolor: '#535353',
    listnamecolor: '#f9f9f9',
    listinfocolor: '#ccc',
    listvalcolor: '#ffd200',
    scrollbarcolor: '#373737'
  },
  purple: {
    pagebgcolor: '#0d0a1a',
    listbgcolor: '#201c33',
    listbordertopcolor: '#332e4d',
    listnamecolor: '#f4f2ff',
    listinfocolor: '#d1cde3',
    listvalcolor: '#e6004c',
    scrollbarcolor: '#484266',
    purplecheck: '#7565c5'
  }
}

function themeChange(theme) {
  var root = document.documentElement;
  $.each(themes[theme], function (key, value) {
    var cssVar = '--' + key;
    root.style.setProperty(cssVar, value);
  });
};
function themechange(){
  $(".themeSelection a").click(function () {
    var theme = $(this).data("theme");
    console.log("changed theme to " + theme)
    themeChange(theme);
    localStorage.setItem('theme', theme);
    $(this).parent().find(".themeSelect").removeClass("active");
    $(this).addClass("active");
    $(this).parent().find(".checkmark").removeClass("active");
    $(this).find(".checkmark").addClass("active");
  });
}
function JS(val){
  return JSON.stringify(val);
}
function JP(val){
  return JSON.parse(val);
}

function tabs(){
  $(".tabsmenu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tabcontent").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
}
function toggleContent(){
  $(document).on('click', '.toggle-title', function() {
    $(this).toggleClass('active');
    $(this).parent().find('.show').toggleClass('active');
    $(this).parent().find('.hidden-content').slideToggle(500);
  });
}


function version(){
  $('.appversion').html(appversion);
  $('.gameversion').html(gameversion);
}

function timeSurvived(matchTime,timeAlive){
  var matchTime = new Date(matchTime);
  var timeAlive = new Date(timeAlive);
  var duration = (timeAlive - matchTime);
  var seconds = Math.floor((duration / 1000) % 60);
  var minutes = Math.floor((duration / (1000 * 60)) % 60);
  var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  var timesurvived = minutes+ ":" +seconds;
  return timesurvived;
}
function dotnumber(number){
  number = number.toString().split("").reverse().join("")
    .replace(/(\d{3}\B)/g, "$1.")
    .split("").reverse().join("");
  return number;
}
function formatDate(date) {
  var dateFormat = new Date(date);
  var month = dateFormat.getMonth() + 1;
  month = (month < 10 ? "0"+month : month);
  var day = dateFormat.getDate();
  day = (day < 10 ? "0"+day : day);
  var year = dateFormat .getFullYear();
  var hours = dateFormat.getHours();
  hours = (hours < 10 ? "0"+hours : hours);
  var minutes = dateFormat.getMinutes();
  minutes = (minutes < 10 ? "0"+minutes : minutes);
  return year + "." + month + "." + day + "." + hours + "." +minutes;
}
function formatDateforStats(date) {
  var dateFormat = new Date(date);
  var month = dateFormat.getMonth() + 1;
  month = (month < 10 ? "0"+month : month);
  var day = dateFormat.getDate();
  day = (day < 10 ? "0"+day : day);
  var year = dateFormat .getFullYear();
  var hours = dateFormat.getHours();
  hours = (hours < 10 ? "0"+hours : hours);
  var minutes = dateFormat.getMinutes();
  minutes = (minutes < 10 ? "0"+minutes : minutes);
  return year + "/" + month + "/" + day + " " + hours + ":" +minutes;
}
function convertDate(date){
  var dateIn = date.split(".");
  dateIn[1] = dateIn[1] -1;
  if(dateIn[1] < 10){dateIn[1] = "0"+dateIn[1]}; // Month
  if(dateIn[2] < 10){dateIn[2] = "0"+dateIn[2]}; // Day
  if(dateIn[3] < 10){dateIn[3] = "0"+dateIn[3]}; // Hours
  if(dateIn[4] < 10){dateIn[4] = "0"+dateIn[4]}; // Minutes
  var dateOutput = new Date(dateIn[0],dateIn[1],dateIn[2],dateIn[3],dateIn[4]);
  return dateOutput;
}
function timeDiff(date1, date2){
  var diff = (date1.getTime() - date2.getTime()) / 1000;
  diff = diff/60;
  diff = Math.abs(Math.round(diff))
  return diff;
}
function aws(val){
  return atob(val)
}
function showError(error){
  var errorblock = `
  <span class="errormsg" data-i18n="${error.i18n}">${error.message}</span>`
  $('.errorWindowBg').show();
  $('.errorWindow').find('.content').html(errorblock);
}

function dismissError(){
  $('.dismiss').on('click',function(){
    $(this).parent().parent().fadeOut();
  })
}

function steamPlayersNow(){
  var lksaws = 'aHR0cHM6Ly82cW12aDR1M2ZoLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3B1Ymcvc3RlYW0v';
  var steamRequest = aws(lksaws);
  console.log(steamRequest);
  var pubgPlayers = BBDB.data.steamPlayers
  var steamQueryCache = BBDB.data.steamQueryCache;
  
   function getSteamPlayers(){
    $.ajax({
      type: "GET",
      url: steamRequest + '578080',
      dataType: "json"
    }).done(
      function (data) {
        steamQueryCache = new Date();
        BBDB.data.steamQueryCache = formatDate(steamQueryCache);
        console.log("New Query Date: "+formatDate(steamQueryCache));
        console.log(data)
        pubgPlayers = data.response.player_count;
        pubgPlayers = dotnumber(pubgPlayers);
        BBDB.data.steamPlayers = pubgPlayers;
        localStorage.BBDB = JSON.stringify(BBDB);
        $('.totalpubgplayers').html(pubgPlayers)
        $('.pubgplayerstext').html('players on the Battlegrounds');
      })
      .fail(function(data){
        showError(error.steamrequest);
    })
  };
  // FIRST TIME CHECK
  if(pubgPlayers === "" && steamQueryCache === ""){
    getSteamPlayers();
    console.log("No data yet")
  }
  else {
    // CHECK IF DATA IS OLDER THAN QUERY LIMIT
    var timeNow = new Date();
    var queryConverted = convertDate(steamQueryCache);
    var queryTimeDiff = timeDiff(queryConverted,timeNow);
    console.warn("Time difference: "+queryTimeDiff);

    if(queryTimeDiff > config.steamQueryLimit){
      getSteamPlayers();
      console.warn("getting steam player count");
    }
    else {
      console.log("Using steam stored values");
      var pubgPlayers = BBDB.data.steamPlayers;
      $('.totalpubgplayers').html(pubgPlayers)
      $('.pubgplayerstext').html('players on Battlegrounds');
    }
  }
}

function firstLoad() {
  var BBDB = JP(localStorage.BBDB);
  var firstTime = BBDB.app.firstTime;
  if (firstTime === true) {
    console.log("First time!")
    $('.welcomeScreenBG').show();

    $(".player_name_input").on('keyup', function (e) {
      if (e.keyCode == 13) {
        var player = $(this).val();
        console.log(player);
        requestPlayer(player);
      }
    });
    $('.done').on('click', function () {
      var player = $(this).parent().find('.player_name_input').val();
      console.log(player);
      requestPlayer(player);
    })
  }
  else {
    console.log("Showing Stats")
    displayStats();
  }
  $(document).on('click', '.updatestats', function() {
    $(this).html('<span class="updatetext">Updating...</span>');
    var BBapiSettings = JP(localStorage.BBapiSettings);
    var player_id = BBapiSettings.player_id;
    getSeasonStats(player_id);
  });
}

function changeplayer(){
  $(document).on('click', '.changeplayer', function() {
    var BBDB = JP(localStorage.BBDB);
    BBDB.app.firstTime = true;
    localStorage.BBDB = JS(BBDB);
    BBapiSettings = JP(localStorage.BBapiSettings);
    BBapiSettings.playerName = "";
    BBapiSettings.player_id = "";
    localStorage.BBapiSettings = JS(BBapiSettings);
    BBplayerdata = JP(localStorage.BBplayerdata);
    BBplayerdata = [];
    localStorage.BBplayerdata = JS(BBplayerdata);
    firstLoad();
  });
}

function requestPlayer(player) {
    var player_id;
    var current_season = BBapiSettings.current_season;
    var dateNow;
    var matches;

    var url = 'https://api.pubg.com/shards/steam/'
    var request = 'https://6qmvh4u3fh.execute-api.us-east-1.amazonaws.com/pubg'
    // Check if player name is stored in DB
    if (pubgdb_playerIds[playerName]) {
        player_id = pubgdb_playerIds.playerName;
        console.log("player found on database, getting stats...")
        //getSeasonStats(player_id, platform);
    }
    else {
        console.log("Requesting player data...")
        $.ajax({
            type: "GET",
            url: request+'/players?filter[playerNames]=' + player,
            dataType: "json"
        }).done(
            function (data) {
                BBDB.app.firstTime = false;
                localStorage.BBDB = JS(BBDB);
                $('.welcomeScreenBG').fadeOut();
                console.log("Player Data:")
                console.log(data);
                //console.log(JSON.stringify(data,null,2));
                player_id = data.data[0].id;
                var playeridsplited = player_id.split(".")[1];
                var player_id_split = playeridsplited.substring(0, 8) + "-" + playeridsplited.substring(8, 12) + "-" + playeridsplited.substring(12, 16) + "-" + playeridsplited.substring(16, 20) + "-" + playeridsplited.substring(20, 12);
                console.log(player_id_split);
                console.log("BBapiSettings")
                console.log(BBapiSettings)
                BBapiSettings.playerName = player;
                localStorage.BBapiSettings = JS(BBapiSettings);
                console.log("added player");
                console.log(BBapiSettings)
                BBapiSettings.player_id = player_id;
                matches = data.data[0].relationships.matches.data;
                var lastmatch = matches[0].id;
                console.log("lastmatch: " + lastmatch);
                console.log("player id: " + player_id);
                console.log("Matches:");
                console.log(matches);
                localStorage.BBapiSettings = JS(BBapiSettings);
                getSeasonStats(player_id);
            })
            .fail(function (data) {
              showError(error.requestplayer)
            })
    }
}

function hidelogin(){
  $('.welcomeScreenBG').fadeOut();
}

$$(document).on('pageInit', function (e) {
  var fromPage = e.detail.page.fromPage.name;
  var targetPage = e.detail.page.name;
  console.log("%c Going from: "+fromPage+"  to: "+targetPage+ "", 'background: #222; color: #bada55');
  version();
  renderLeftMenu();
  renderMenulist();
  renderMenuSkins();
	renderLists();
  renderSingleItems();
  renderMenuCards();
  themechange();
  compareWpnsInit();

  if(targetPage === 'carepackage'){
    carepackageammo();
  }

});
$$(document).on('pageBack', function(e) {
  version();
  renderMenulist();
  renderMenuSkins();
  renderLists();
  renderSingleItems();
  renderMenuCards();
  compareWpnsInit();
});

$(document).ready(function() {
  get_settings();
  firstLoad();
  changeplayer();
  version();
  dismissError();
  renderLeftMenu()
  steamPlayersNow();
  themechange();
  renderMenulist();
  renderMenuSkins();
  renderLists();
  renderSingleItems();
  renderMenuCards();
  compareWpnsInit();
});