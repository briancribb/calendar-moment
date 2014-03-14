$(document).ready(function() {
	var calendarData = setupCalendarData(); // From separate file at the moment: calendar-data.js
	//console.log(calendarData);
	calendarMoment.init( $('#calendar'), moment(), calendarData);
});

var calendarMoment = {
	init: function($targetCalendar, targetMoment, cmEvents) {
		"use strict";
		calendarMoment.events = cmEvents || null;
		calendarMoment.$targetCalendar = $targetCalendar;


		$targetCalendar.on( "click", ".cm_nav button", function( event ) {
			if ( $(this).hasClass('cm_prev') ) {
				targetMoment.month( targetMoment.month() - 1 );
			} else if ( $(this).hasClass('cm_next') ) {
				targetMoment.month( targetMoment.month() + 1 );
			} else if ( $(this).hasClass('cm_now') ) {
				targetMoment = moment();
			}
			calendarMoment.build(targetMoment);
		});
		calendarMoment.build(targetMoment);
	},
	build: function(targetMoment) {
		"use strict";
		var currentMoment	= targetMoment.clone(),
			headerString	= '<header class="cm_header"><div class="cm_title">' + targetMoment.format("MMMM, YYYY") + '</div><nav id="cm_nav" class="cm_nav"><button class="cm_prev" disabled><< Prev</button><button class="cm_now" disabled>Now</button><button class="cm_next" disabled>Next >></button></nav></header>',
			weekdayString	= '<ul class="cm_weekdays"><li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li></ul>',
			weeksString		= '<section class="cm_weeks"><ul class="cm_days">',
			closingString	= '</section>';

		var calendarString	= headerString + weekdayString + weeksString,
			dayString		= '',
			thisMonth		= currentMoment.month(),
			daysInThisMonth	= currentMoment.daysInMonth(),
			lastWeekdayNum	= currentMoment.date( currentMoment.daysInMonth() ).weekday(),	//Careful. Sets the current month to it's last day.
			firstWeekdayNum	= currentMoment.date(1).weekday(),								// Careful. Sets the current month to first day. Important to do this second!
			beforeMonth		= false,
			afterMonth		= false;

		var dayCounter		= 1 - firstWeekdayNum, // Starting current Day as the first day on the calendar.
			lastDay			= (6 - lastWeekdayNum) + daysInThisMonth, // calendar starts at 1, not zero.
			totalDays		= lastDay + firstWeekdayNum;

		currentMoment.date(dayCounter); // Sets the first calendar cell to the appropriate day.


		for (var i = 0; i < totalDays; i++) {
			var extraClasses = '',
				eventString = buildEventString();

			beforeMonth = (dayCounter < 1) ? true : false;
			afterMonth = (dayCounter > daysInThisMonth) ? true : false;
			if (beforeMonth || afterMonth) {
				extraClasses += ' out_of_range';
			}
			var dayString =	'<li class="cm_day' + extraClasses + '">' + 
								'<div class="cm_day-cell">' + 
									'<span class="cm_day">' + currentMoment.format("dddd") + ', </span>' + 
									'<span class="cm_month">' + currentMoment.format("MMM") + '</span>' + 
									'<span class="cm_date"> ' + currentMoment.format("Do") + '</span>' + 
									'<div class="cm_event">' + 
									eventString + 
									'<div class="cm_event-time"></div>' + 
									'</div>' + 
								'</div>' + 
							'</li>';

			if ( (i +1) % 7 === 0 && dayCounter < daysInThisMonth) {
				dayString += '</ul><ul class="cm_days">';
			}
			dayCounter ++;
			calendarString += dayString;

			currentMoment.add('days', 1);
		}
		calendarString += ('</ul>' + closingString);
		calendarMoment.$targetCalendar.addClass('cm').html( calendarString );


		function buildEventString() {
			var eventString = '';

			for (var i = 0; i < calendarMoment.events.length; i++) {
				//var i = 0;
				//console.log('Loop: i = ' + i);
				var startMoment = moment(calendarMoment.events[i].startTime),
					endMoment = moment(calendarMoment.events[i].endTime);

				var test = moment(currentMoment).isBefore(startMoment)

				if ( currentMoment.format("MDYYYY") === startMoment.format("MDYYYY") ) {
					eventString += '<a class="cm_event__link" href="http://www.google.com">Event Name</a>';
				}
			}


			return eventString;
		}

		function buttonCheck() {
			// Check buttons to see if they should be enabled.
			var rightNow = moment(),
				$btnPrev = calendarMoment.$targetCalendar.find('#cm_nav .cm_prev'),
				$btnNow = calendarMoment.$targetCalendar.find('#cm_nav .cm_now'),
				$btnNext = calendarMoment.$targetCalendar.find('#cm_nav .cm_next');

			if ( targetMoment.month() ===  rightNow.month() ) {
				$btnPrev.prop('disabled', true);
				$btnNow.prop('disabled', true);
				$btnNext.prop('disabled', false);
			}
			else if ( moment( targetMoment ).isBefore( rightNow ) ) {
				$btnPrev.prop('disabled', true);
				$btnNow.prop('disabled', false);
				$btnNext.prop('disabled', false);
			}
			else if ( moment( targetMoment ).isAfter( rightNow ) ) {
				$btnPrev.prop('disabled', false);
				$btnNow.prop('disabled', false);
				$btnNext.prop('disabled', false);
			}
		}
		return buttonCheck();
	}
}