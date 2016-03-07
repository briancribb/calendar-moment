/* I'm going to rewrite this whole damned thing with document fragments and stuff. jQuery will not be required. */

;var CalendarMoment = function(settings){
	/* Stuff we want in the closure. First, setup for the settings object. */	
	//settings.text = settings.text || 'default';
	var cmCalendar = document.getElementById(settings.id);

	var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


	var methods = {
		build : function() {
			/* Our master container element. */
			cmCalendar.classList.add('cm');


			/* Making our primary document fragment. */
			var cmFragment = document.createDocumentFragment();


			/* Making the header and its basic structure. */
			var cmHeader = document.createElement('header'),
				cmTitle = document.createElement('div'),
				cmNav = document.createElement('nav'),
				cmNavPrev = document.createElement('button'),
				cmNavNow = document.createElement('button'),
				cmNavNext = document.createElement('button');


			/* Setting classes for header elements. */
			cmHeader.classList.add('cm_header');
				cmTitle.classList.add('cm_title');
					cmTitle.innerHTML = 'March';


				cmNav.setAttribute('id', 'cm_nav');
				cmNav.classList.add('cm_nav');
					cmNavPrev.classList.add('cm_prev','button','alt');
					cmNavNow.classList.add('cm_now','button','alt');
					cmNavNext.classList.add('cm_next','button');

						cmNavPrev.innerHTML = 'Prev';
						cmNavNow.innerHTML = 'Now';
						cmNavNext.innerHTML = 'Next';


			/* Building the header. */
			cmNav.appendChild(cmNavPrev)
			cmNav.appendChild(cmNavNow)
			cmNav.appendChild(cmNavNext);
			cmHeader.appendChild(cmTitle);
			cmHeader.appendChild(cmNav);



			/* Now for the body. */
			var cmBody = document.createElement('section'),
				cmWeekdays = document.createElement('ul');

			/* Setting classes for body elements. */
			cmBody.classList.add('cm_body');
			cmWeekdays.classList.add('cm_weekdays');




			/* Adding the days of the week to the weekdays list. */
			cmBody.appendChild(cmWeekdays);


			for (var i = 0; i < daysOfWeek.length; i++) {
				var tempLI = document.createElement('li');
				tempLI.innerHTML = daysOfWeek[i];
				cmWeekdays.appendChild(tempLI);
			};


			/* Add the header to the calendar. */
			cmFragment.appendChild(cmHeader);
			cmFragment.appendChild(cmBody);



			/* Add the completed fragment to the DOM. */
			cmCalendar.appendChild(cmFragment);
		},
		empty : function(container) {

			/* Using a named function so we can call it recursively. Stops when the original element has zero children. */
			function removeChildren(el){
				/* Only go forward if the current element has children. */
				if (el.children.length > 0) {
					/* Counting down instead of up so we take out the last child first. */
					for (var i = el.children.length - 1; i >= 0; i--) {
						/* Run on children recursively, starting with the last one. */
						removeChildren(el.children[i]);

						/* Now that we're past that, do stuff to the current element's target child. For now, adding a class. */
						console.log('Removing child of ' + el.classList + ' at index ' + i);
						el.children[i].classList.add('badass');
					};
					/* Just a temporary log for testing. */
					console.log(el);
					console.log(' --- ');
				}
			};

			removeChildren(container);
		},
		expose : {
			equalHeights : function() {
				console.log('equalHeights(): ' + settings.text);
			}
		}
	};



	methods.build();
	methods.empty(cmCalendar);

	return methods.expose;
};
