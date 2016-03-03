/* I'm going to rewrite this whole damned thing with document fragments and stuff. jQuery will not be required. */

;var CM = function(settings){
	/* Stuff we want in the closure. First, setup for the settings object. */	
	console.log('equalHeights()');

	settings.text = settings.text || 'default';


	var exposed = {
		equalHeights : function() {
			console.log('equalHeights(): ' + settings.text);
		}
	}
	return exposed;
};
