/* I'm going to rewrite this whole damned thing with document fragments and stuff. jQuery will not be required. */

;var CalendarMoment = function(settings){
	/* Stuff we want in the closure. First, setup for the settings object. */	
	console.log('equalHeights()');

	settings.text = settings.text || 'default';




	var methods = {
		build : function() {
			/* Our master container element. */
			var calendar = document.getElementById(settings.id);


			/* Making our primary document fragment. */
			var cmFragment = document.createDocumentFragment();


			/* Making the header and its basic structure. */
			var cmHeader = document.createElement('header'),
				cmTitle = document.createElement('div'),
				cmNav = document.createElement('nav'),
				cmNavPrev = document.createElement('button'),
				cmNavNow = document.createElement('button'),
				cmNavNext = document.createElement('button');

			/* Now for the body. */
			var cmBody = document.createElement('div'),
				cmWeekdays = document.createElement('div');



			/* Setting classes for header elements. */
			cmHeader.classList.add('cm_header');
				cmTitle.classList.add('cm_title');
				cmNav.setAttribute('id', 'cm_nav');
				cmNav.classList.add('cm_nav');
					cmNavPrev.classList.add('cm_prev','button','alt');
					cmNavNow.classList.add('cm_now','button','alt');
					cmNavNext.classList.add('cm_next','button');


			/* Building the header. */
			cmNav.appendChild(cmNavPrev)
			cmNav.appendChild(cmNavNow)
			cmNav.appendChild(cmNavNext);
			cmHeader.appendChild(cmTitle);
			cmHeader.appendChild(cmNav);














			/* Add the header to the calendar. */
			cmFragment.appendChild(cmHeader);



			/* Add the completed fragment to the DOM. */
			calendar.appendChild(cmFragment);
		},
		empty : function() {
		},
		expose : {
			equalHeights : function() {
				console.log('equalHeights(): ' + settings.text);
			}
		}
	};



	methods.build();

	return methods.expose;
};
