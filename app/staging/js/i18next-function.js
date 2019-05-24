/*$(document).ready(function() {
	var language = "en";
	if (localStorage.getItem("language") != null) language = localStorage.getItem("language");
	
    i18n.init({
        lng: language,
        resStore: itemslang,
        fallbackLng: "en"
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
        })
    })
});
*/
$(document).ready(function() {
    
    var language = "en";
    
    var userLang = navigator.language || navigator.userLanguage;
    
    if (localStorage.getItem("language") == null) {

        if (userLang.length > 2) {
            userLang = userLang.split('-')[0];
        }
        if (userLang == "pt") {
            language = "br";
        }
        else if (userLang == "en") {
            language = "en";
        }
        else if (userLang == "es") {
            language = "es";
        }
        else {
            language = "en";
        }
        localStorage.setItem("language", language);
        localStorage.setItem("langactive", language);
    
    }
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
        })
    })
});


