// Initialize your app
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
});

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
$("#splash").delay(1000).fadeOut(500);