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

function render(type, category, item) {
  var imglink = '/assets/' + category + '/';
  var name = PUBGITEMS[category][item].name;
  var i18n = PUBGITEMS[category][item].i18n;
  var icon = PUBGITEMS[category][item].icon;
  var renderblock;
  // RENDER LISTS
  if (type === "list" && category === "equipment") {
    console.log("rendering list")
    var icon2 = PUBGITEMS[category][item].icon2;
    var bonus = PUBGITEMS[category][item].bonus;
    var bonusi18 = bonus.replace(/ /gi, "_");
    var bonusValue = PUBGITEMS[category][item].bonusValue;
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
      `<a href="${item}.html" class="itemlist">
        <img class="itemimg" src="${imglink + icon}.png"/>
        <div class="iteminfo">
        <p class="name" data-i18n="${i18n}">${name}</p>
        <p class="infotext">
        <span class="info" data-i18n="${bonusi18}">${bonus}:</span>
        <span class="val">${bonusValue}</span>
        </p>
        </div>`;
  }
  // RENDER SINGLE ITEM
  if (type === "singleItem") {
    renderblock =
      `<div class="singleitem">
<div class="itemdetails">
<p class="name" data-i18n="${i18n}">${name}</p>
<div class="ldetails">
<p>
<span class="bonustext" data-i18n="${bonus}">${bonus}:</span>
<span class="value">${bonusValue}</span>
</p>
<p>
${bonus2block}
</p>
</div>
<div class="rdetails"></div>
</div>
<div class="itemimage">
<img class="itemimg" src="${imglink + icon}.png"/>
${img2}
</div>
</div>`
  }
  return renderblock;
}


$('.list').each(function () {
  console.log('found list')
  if (this.childNodes.length === 0) {
    var classes = $(this).attr('class').split(' ');
    var type = classes[0];
    var category = classes[1];
    var item = classes[2];
    console.log("Rendering list for "+category+' '+item)
    $(this).html(render(type, category, item));
  }
});

$('.singleItem').each(function () {
  if (this.childNodes.length === 0) {
    var classes = $(this).attr('class').split(' ');
    var type = classes[0];
    var category = classes[1];
    var item = classes[2];
    $(this).html(render(type, category, item));
  }
});




