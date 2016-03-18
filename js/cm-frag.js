/* I'm going to rewrite this whole damned thing with document fragments and stuff. jQuery will not be required. */

;var CalendarMoment = function(settings){

	/* Stuff we want in the closure. First, setup for the settings object. */	










	/* Creating a parent settings object so we can console log a bunch of stuff at once during testing. */
	var CM = {
		targetMoment	: settings.targetMoment || moment(),
		calendar		: document.getElementById(settings.id),
		daysOfWeek		: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	}





	var methods = {
		empty0   : function(container) {
		},
		build : function(targetMoment) {

			/*
			Some of the methods used to find things will set the moment object to the date we found. Making a copy 
			called "CM.currentMoment" so we don't alter the original targetMoment.
			*/ 
			CM.currentMoment	= CM.targetMoment.clone();

			CM.month = {
				id				: CM.currentMoment.month(),
				daysInMonth		: CM.currentMoment.daysInMonth(),
				lastWeekday		: CM.currentMoment.date( CM.currentMoment.daysInMonth() ).weekday(), // Careful, this sets the current month to it's last day.
				firstWeekday	: CM.currentMoment.date(1).weekday() // Careful. Sets the current month to first day. Important to do this second!
			};

			CM.month.counter	= 1 - CM.month.firstWeekday; // Starting current Day as the first day on the calendar, not the first day of the month.
			CM.month.lastDay	= (6 - CM.month.lastWeekday) + CM.month.daysInMonth; // 6 instead of 7 because calendar starts at 1, not zero.

			CM.month.totalDays	= CM.month.lastDay + CM.month.firstWeekday; // Total days on the calendar, not in the month.


			CM.currentMoment.date(CM.month.counter); // Sets the first calendar cell to the appropriate day.

			console.log(CM);





			/* Our master container element. */
			CM.calendar.classList.add('cm');


			/* Making our primary document fragment. */
			var cmFragment = document.createDocumentFragment();


			/* Making the header and its basic structure. */
			/* --------------------------------------------------------------- */
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
			/* --------------------------------------------------------------- */
			var cmBody = document.createElement('section'),
				cmWeekdays = document.createElement('ul');

			/* Setting classes for body elements. */
			cmBody.classList.add('cm_body');
			cmWeekdays.classList.add('cm_weekdays');


			/* Building the days of the week. */
			for (var i = 0; i < CM.daysOfWeek.length; i++) {
				var tempLI = document.createElement('li');
				tempLI.innerHTML = CM.daysOfWeek[i];
				cmWeekdays.appendChild(tempLI);
			};
			/* Adding the days of the week to the weekdays list. */
			cmBody.appendChild(cmWeekdays);


			/* Building the days of the month. */

			/* Setting "i" as a counter for weeks, and tempWeek as the current week. */
			var i = 0,
				tempDay;
			var tempWeek = buildWeekNode();

			/* Loop through all of the days on the calendar, including the ones from next and/or previous months. */
			for (var j = 0; j < CM.month.totalDays; j++) {

				/* Create a new node in the tempDay variable. */
				tempDay = document.createElement('li');
				tempDay.innerHTML = 'Day ' + CM.month.counter;


				/* If the current day is outside of the month (next or previous month) then add a class to show it. */
				if ( CM.month.counter < 1 || CM.month.counter > CM.month.daysInMonth ) {
					tempDay.classList.add('out_of_range');
				}

				/* Add the current day node to the current week node. */
				tempWeek.appendChild(tempDay);

				/* If we're at the end of a week, append the current week to the body and make a new one. Don't forget to increment "i". */
				if ( (j +1) % 7 === 0 && CM.month.counter < CM.month.daysInMonth) {
					cmBody.appendChild(tempWeek);
					tempWeek = buildWeekNode();
					i ++;
				}

				/* Increment the month counter. Remember that it's different because it's tracking the actual day of the month rather than the index of the loop. */
				CM.month.counter ++;
			};

			/* After the loops are done, we'll have one leftover week that we need to append to the calendar body. */
			cmBody.appendChild(tempWeek);

			/* Simple function to build a week node and add the appropriate class. */
			function buildWeekNode() {
				node = document.createElement('ul');
				node.classList.add('cm_week');
				return node;
			}



			/* Add the header to the calendar. */
			cmFragment.appendChild(cmHeader);
			cmFragment.appendChild(cmBody);



			/* Add the completed fragment to the DOM. */
			CM.calendar.appendChild(cmFragment);
		},
		empty : function(container) {

			/* Using a named function so we can call it recursively. Stops when the original element has zero children. */
			function removeAllChildren(el){
				/* Only go forward if the current element has children. */
				if (el.children.length > 0) {
					/* Counting down instead of up so we take out the last child first. */
					for (var i = el.children.length - 1; i >= 0; i--) {
						/* Run on children recursively, starting with the last one. */
						removeAllChildren(el.children[i]);

						/* Now that we're past that, do stuff to the current element's target child. For now, adding a class. */
						console.log('Removing child of ' + el.classList + ' at index ' + i);
						//el.children[i].classList.add('badass');
						el.removeChild(el.children[i]);
					};
					/* Just a temporary log for testing. */
					console.log(el);
					console.log(' --- ');
				}
			};

			removeAllChildren(container);
		},
		expose : {
			equalHeights : function() {
				//console.log('equalHeights(): ' + settings.text);
			}
		}
	};



	methods.build( moment() );
	//methods.empty(CM.calendar);

	return methods.expose;
};
