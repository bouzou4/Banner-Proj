// protect the namespace!
var scriptsJS = (function($){

function helloWorld() {
	$('body').html("Hello World");
}


//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		helloWorld();
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);

scriptsJS.init();