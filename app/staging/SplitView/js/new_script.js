var PUBGITEMS = {
  equipment: {
    utilitybelt: {
      "item": "utilitybelt",
      "name": "Utility Belt",
      "i18n": "UtilityBelt",
      "icon": "Item_equipment_Belt_D_01",
      "bonus": "Capacity",
      "bonusValue": "+50",
      "desc": "The Utility Belt is a belt inventory item that increases inventory space.",
      "i18desc": "UtilityBeltDesc",
      "id": "Item_equipment_Belt_D_01",
      "img_id": "21090001",
    },
    backpack1: {
      "item": "backpack1",
      "name": "Backpack (Level 1)",
      "i18n": "Backpack1",
      "icon": "Item_equipment_Back_E_01",
      "icon2": "Item_equipment_Back_E_02",
      "bonus": "Capacity",
      "bonusValue": "+150",
      "desc": "The Backpack (Lv.1) is a storage piece of equipment that allows for a light amount of item storage, increasing your inventory.",
      "i18desc": "BackpackLv1Desc",
    },
    backpack2: {
      "item": "backpack2",
      "name": "Backpack (Level 2)",
      "i18n": "Backpack2",
      "icon": "Item_equipment_Back_F_01",
      "icon2": "Item_equipment_Back_F_02",
      "bonus": "Capacity",
      "bonusValue": "+200",
      "desc": "The Backpack (Lv.2) is a storage piece of equipment that allows for a medium amount of item storage, increasing your inventory.",
      "i18desc": "BackpackLv2Desc",
    },
    backpack3: {
      "item": "backpack3",
      "name": "Backpack (Level 3)",
      "i18n": "Backpack3",
      "icon": "Item_equipment_Back_C_01",
      "icon2": "Item_equipment_Back_C_02",
      "carepackage": "yes",
      "bonus": "Capacity",
      "bonusValue": "+250",
      "desc": "The Backpack (Lv.3) is a storage piece of equipment that allows for a significant amount of item storage, increasing your inventory by +250 capacity.",
      "i18desc": "BackpackLv3Desc",
    },
    helmet1: {
      "item": "helmet1",
      "name": "Motorcycle Helmet (Level 1)",
      "i18n": "Helmet1",
      "icon": "Item_Head_E_01_Lv1_C",
      "icon2": "Item_Head_E_02_Lv1_C",
      "icontext": "green",
      "icontexti18": "green",
      "icontext2": "grey",
      "icontext2i18": "grey",
      "bonus": "Durability",
      "bonusValue": "80",
      "bonus2": "Damage Reduction",
      "bonus2i18": "DamageReduction",
      "bonus2Value": "30%",
      "desc": ""
    },
    helmet2: {
      "item": "helmet2",
      "name": "Military Helmet (Level 2)",
      "i18n": "Helmet1",
      "icon": "Item_Head_F_01_Lv2_C",
      "icon2": "Item_Head_F_02_Lv2_C",
      "icontext": "desert camo",
      "icontexti18": "DesertCamo",
      "icontext2": "Woodland Camo",
      "icontext2i18": "WoodlandCamo",
      "bonus": "Durability",
      "bonusValue": "150",
      "bonus2": "Damage Reduction",
      "bonus2i18": "DamageReduction",
      "bonus2Value": "40%",
      "desc": ""
    },
    helmet3: {
      "item": "helmet2",
      "name": "Spetsnaz Helmet (Level 3)",
      "i18n": "Helmet1",
      "icon": "Item_Head_G_01_Lv3_C",
      "icontext": "desert camo",
      "icontexti18": "DesertCamo",
      "icontext2": "Woodland Camo",
      "icontext2i18": "WoodlandCamo",
      "carepackage": "yes",
      "bonus": "Durability",
      "bonusValue": "230",
      "bonus2": "Damage Reduction",
      "bonus2i18": "DamageReduction",
      "bonus2Value": "55%",
      "desc": ""
    },
  }
}

function renderList(type,category,item){
  var imglinks = 'https://rogerhn.github.io/pubg/images/';
  var name = PUBGITEMS[category][item].name;
  var i18n = PUBGITEMS[category][item].i18n;
  var desc = PUBGITEMS[category][item].desc;
  var i18desc = PUBGITEMS[category][item].i18desc;
  var icon = PUBGITEMS[category][item].icon;
  var icon2 = PUBGITEMS[category][item].icon2;
  var bonus = PUBGITEMS[category][item].bonus;
  var bonusValue = PUBGITEMS[category][item].bonusValue;
  var img2 = "";
  if(icon2) img2 = `<img class="itemimg" src="${imglinks+icon2}.png"/>`;
  var bonus2 = PUBGITEMS[category][item].bonus2;
  var bonus2block = "";
  if(bonus2){
    var bonus2i18 = PUBGITEMS[category][item].bonus2i18;
    var bonus2Value = PUBGITEMS[category][item].bonus2Value;
    bonus2block = `<span class="bonustext" data-i18n="${bonus2i18}">${bonus2}:</span>
<span class="value">${bonus2Value}</span>`}
  var renderblock;
  if(type === "list"){
    renderblock =
      `<a href="${item}.html" class="itemlist">
<img class="itemimg" src="${imglinks+icon}.png"/>
<div class="itemtext">
<p class="name" data-i18n="${i18n}">${name}</p>
<p class="infotext">
<span class="info" data-i18n="${bonus}">${bonus}:</span>
<span class="val">${bonusValue}</span>
</p>
</div>
</a>`;
  }
  if(type === "singleItem"){
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
<img class="itemimg" src="${imglinks+icon}.png"/>
${img2}
</div>
</div>`
  }
  return renderblock;
}


$('.list').each(function() {
  if (this.childNodes.length === 0){
    var classes = $(this).attr('class').split(' ');
    var type = classes[0];
    var category = classes[1];
    var item = classes[2];
    $(this).html(renderList(type,category,item));
  }
});

$('.singleItem').each(function() {
  if (this.childNodes.length === 0){
    var classes = $(this).attr('class').split(' ');
    var type = classes[0];
    var category = classes[1];
    var item = classes[2];
    $(this).html(renderList(type,category,item));
  }
});




