var CM = {
	init: function(settings) {
		"use strict";
		CM.events = settings.events;
		CM.$targetCalendar = settings.$targetCalendar;
		var targetMoment = settings.targetMoment;
		console.log('CM.events:');
		console.log(CM.events);
		console.log(' ');


		CM.$targetCalendar.on( "click", ".cm_nav button", function( event ) {
			if ( $(this).hasClass('cm_prev') ) {
				targetMoment.month( targetMoment.month() - 1 );
			} else if ( $(this).hasClass('cm_next') ) {
				targetMoment.month( targetMoment.month() + 1 );
			} else if ( $(this).hasClass('cm_now') ) {
				targetMoment = moment();
			}
			CM.build(targetMoment);
		});
		CM.build(targetMoment);


		/*
		$(window).resize( $.debounce( 250, function() {
			//console.log('Resizing.');
			CM.equalHeight(true);
		} ) );
		*/
	},
	build: function(targetMoment) {
		"use strict";
		var currentMoment	= targetMoment.clone(),
			headerString	= '<header class="cm_header"><div class="cm_title">' + targetMoment.format("MMMM, YYYY") + '</div><nav id="cm_nav" class="cm_nav"><button class="cm_prev button" disabled><< Prev</button><button class="cm_now button" disabled>Now</button><button class="cm_next button" disabled>Next >></button></nav></header>',
			openingString	= '<section class="cm_body">',
			weekdayString	= '<ul class="cm_weekdays"><li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li></ul>',
			weeksString		= '<ul class="cm_week">', // ul tag is closed after days are built.
			closingString	= '</section>'; // Closes cm_body and cm_body.

		var calendarString	= headerString + openingString + weekdayString + weeksString,
			dayString		= '',
			thisMonth		= currentMoment.month(),
			daysInThisMonth	= currentMoment.daysInMonth(),
			lastWeekdayNum	= currentMoment.date( currentMoment.daysInMonth() ).weekday(),	//Careful. Sets the current month to it's last day.
			firstWeekdayNum	= currentMoment.date(1).weekday();								// Careful. Sets the current month to first day. Important to do this second!

		var dayCounter		= 1 - firstWeekdayNum, // Starting current Day as the first day on the calendar.
			lastDay			= (6 - lastWeekdayNum) + daysInThisMonth, // calendar starts at 1, not zero.
			totalDays		= lastDay + firstWeekdayNum;

		currentMoment.date(dayCounter); // Sets the first calendar cell to the appropriate day.


		for (var i = 0; i < totalDays; i++) {
			var extraClasses = '',
				calendarEvent = buildEvent( parseInt( currentMoment.format("YYYYMMDD") ) );
			//console.log(calendarEvent);
			if ( dayCounter < 1 || dayCounter > daysInThisMonth ) {
				extraClasses += ' out_of_range';
			}
			if (calendarEvent.eventString === '') {
				extraClasses += ' no_event';
			} else {
				extraClasses += calendarEvent.eventClass;
			}
			var eventSpanString =	CM.events[ calendarEvent.eventIndex ].momentStart.format("Do") + 
									' - ' + 
									CM.events[ calendarEvent.eventIndex ].momentEnd.format("Do");

			var dayString =	'<li class="cm_day' + extraClasses + '">' + 
								'<div class="cm_day-cell">' + 
									'<div class="cm_date-title">' + 
										//'<span class="cm_day-name">' + currentMoment.format("dddd") + ', </span>' + 
										//'<span class="cm_month">' + currentMoment.format("MMM") + '</span>' + 
										'<span class="cm_date">' + currentMoment.format("Do") + '</span>' + 
										//'<span class="cm_date-span">' + eventSpanString + '</span>' + 
									'</div>' + 
									calendarEvent.eventString + 
								'</div>' + 
							'</li>';

			if ( (i +1) % 7 === 0 && dayCounter < daysInThisMonth) {
				dayString += '</ul><ul class="cm_week">';
			}
			dayCounter ++;
			calendarString += dayString;

			currentMoment.add('days', 1);
		}
		calendarString += ('</ul>' + closingString);
		CM.$targetCalendar.addClass('cm').html( calendarString ).find('.cm_body').addClass('justAddedThis');


		function buildEvent( currentMomentInt ) {
			var eventString = '',
				eventClass = '',
				eventIndex = 0,
				dataAttr = '',
				buildEventMarkup = function(index, classToAdd) {
					eventIndex = index;
					eventClass = classToAdd;
					dataAttr += ' data-event-index="' + index + '"'
					//return '<!-- Event Markup -->';

					return	'<div class="cm_event"' + dataAttr + '>' + 
								'<div class="cm_event__content">' + 
									'<div class="cm_event__title">' + 
										'<a class="cm_event__link" target="_blank" href="' + CM.events[index].url + '">' + CM.events[index].summary + '</a>' + 
									'</div>' + 
									'<div class="cm_event__location">' + CM.events[index].location + '</div>' + 
									'<div class="cm_event__desc"></div>' + 
								'</div>' + 
							'</div>';

				};

			for (var j = 0; j < CM.events.length; j++) {
				var eventStartInt		= parseInt( moment(CM.events[j].startTime).format("YYYYMMDD") ),
					eventEndInt			= parseInt( moment(CM.events[j].endTime).format("YYYYMMDD") );

				if ( currentMomentInt === eventStartInt ) {
					eventString = buildEventMarkup(j, ' cm_event--start');
				} else if ( currentMomentInt === eventEndInt ) {
					eventString = buildEventMarkup(j, ' cm_event--end');
				} else if ( currentMomentInt > eventStartInt && currentMomentInt < eventEndInt ) {
					eventString = buildEventMarkup(j, ' cm_event--middle');
				}
			}

			return {eventString:eventString, eventClass:eventClass, eventIndex:eventIndex};
		}

		function initBuild() {
			// Check buttons to see if they should be enabled.
			var rightNow = moment(),
				$btnPrev = CM.$targetCalendar.find('#cm_nav .cm_prev'),
				$btnNow = CM.$targetCalendar.find('#cm_nav .cm_now'),
				$btnNext = CM.$targetCalendar.find('#cm_nav .cm_next');

			if ( targetMoment.month() ===  rightNow.month() ) {
				$btnPrev.prop('disabled', true).addClass('alt');
				$btnNow.prop('disabled', true).addClass('alt');
				$btnNext.prop('disabled', false).removeClass('alt');
			}
			else if ( moment( targetMoment ).isBefore( rightNow ) ) {
				$btnPrev.prop('disabled', true).addClass('alt');
				$btnNow.prop('disabled', false).removeClass('alt');
				$btnNext.prop('disabled', false).removeClass('alt');
			}
			else if ( moment( targetMoment ).isAfter( rightNow ) ) {
				$btnPrev.prop('disabled', false).removeClass('alt');
				$btnNow.prop('disabled', false).removeClass('alt');
				$btnNext.prop('disabled', false).removeClass('alt');
			}
			CM.$dayCells = CM.$targetCalendar.find('.cm_day');
			CM.$eventCells = CM.$targetCalendar.find('.cm_event');
			//CM.equalHeight(true);
		}
		return initBuild();
	},
	equalHeight: function(clearValue) {
		//console.log('equalHeight()');
		"use strict";
		var tallest = 0;

		function checkHeight($target) {
			var thisHeight = $target.height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		}
		if (clearValue) {
			CM.$dayCells.removeAttr('height');
			CM.$eventCells.removeAttr('height');
		}

		CM.$dayCells.each(function() {
			checkHeight( $(this) );
		}).css('min-height',tallest);

		tallest = 0; // reseting tallest so we can do the day cells.

		CM.$eventCells.each(function() {
			checkHeight( $(this) );
		}).css('min-height',tallest);
	}
}