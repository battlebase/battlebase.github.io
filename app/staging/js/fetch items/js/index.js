var item = {"ITEM:11090002": {
  item_id: 11090002,
  game_item_short_id: "Item_Belt_C_01_C",
  name: "Battle Belt"
}
           }

//console.log(items);
// https://pctest-live-front.playbattlegrounds.com/app/pc-1.18-2019.01.23-6463/images/item_176/12011001.png
$('.get_items').on('click',function(){
  $.each( items, function( key, value ) {
    var name = value.name;
    var desc = value.description;
    var link = '<p class="lk">https://pctest-live-front.playbattlegrounds.com/app/pc-1.18-2019.01.23-6463/images/item_176/'+value.item_id+'.png</p>';
    var linkcontent = (value.item_id == undefined) ? "" : link;
    var namedesc = (name == undefined) ? desc : name;
    desc = (desc == undefined) ? "" : desc;
    var item = '<div class="block">\
<div class="imgblock">\
<img src="https://pctest-live-front.playbattlegrounds.com/app/pc-1.18-2019.01.23-6463/images/item_176/'+value.item_id+'.png">\
</div>\
<div class="infoblock">\
<p class="name">'+namedesc+'</p>\
<p class="name">'+desc+'</p>\
'+linkcontent+'\
</div>';
    $(".content").append(item);
  });
  $('img').on('error', function (e) {
    //$(this).attr('src', 'https://via.placeholder.com/100');
    $(this).css('display','none');
  });
})