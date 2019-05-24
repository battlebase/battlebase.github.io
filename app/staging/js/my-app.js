var myApp = new Framework7({
  material: true,
  //swipePanel: 'left',
  panelLeftBreakpoint: 1024,
  fastClicks: false,
  //preloader:true,
  //preloaderColor:'white',
  materialRipple: true,
  materialRippleElements: '.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, .floating-button',
  cache: true,
  pushState: true,
  pushStateSeparator: '?/',
  //pushStateRoot: 'http://atlas-rogerhnn996730.codeanyapp.com/',
  /*onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },*/
});

// Export selectors engine
var $$ = Dom7

var leftView = myApp.addView('.view-left', {
  // Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
  // Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: true,
  domCache: true //enable inline pages
});





var theme;
if (localStorage['theme'] !== undefined) {
  theme = localStorage['theme'];
  $('#theme').addClass(theme);
}



$(document).ready(function() {

	var pageURL = window.location.href;
	var params = pageURL.split("#");
	var newpage = params[1];
	if (newpage != undefined) {
		mainView.router.load({pageName: newpage});
	}


  function cycleBG() {
    var classCycle = ['bg1', 'bg2'];
    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var headerimg = classCycle[randomNumber];
    var headerbg = $('.headerimg');
    if (headerbg) {
      var headerbgclass = headerbg.attr('class').split(' ')[1];
      headerbg.removeClass(headerbgclass);
      headerbg.addClass(headerimg);
    }
  }
  //cycleBG()

  $('.showbox').click(function(){
  $(this).toggleClass("active");
  $(this).parent().toggleClass("collapsed");
});

  $(document).i18n();

});
$$(document).on('pageBack', function(e) {
  //cycleBG()
});
$$(document).on('pageInit', function(e) {

//  $(document).i18n();

});