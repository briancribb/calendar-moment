$(document).ready(function() {
	"use strict";
	var calendarData = setupCalendarData(); // From separate file at the moment: calendar-data.js
	//console.log(calendarData);
	calendarMoment.build( $('#calendar'), moment(), calendarData);
});

var calendarMoment = function($targetCalendar, targetMoment, cmEvents) {
	calendarMoment.events = cmEvents || null;

	var headerString	= '<header class="cm_header"><div class="cm_title"></div><nav id="cm_nav" class="cm_nav"><button class="cm_prev" disabled><< Prev</button><button class="cm_now" disabled>Now</button><button class="cm_next" disabled>Next >></button></nav></header>',
		weekdayString	= '<ul class="cm_weekdays"><li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li></ul>',
		weeksString		= '<section class="cm_weeks">',
		closingString	= '</section>';


	$targetCalendar.on( "click", "button", function( event ) {
		if ( $(this).hasClass('cm_prev') ) {
			targetMoment.month( targetMoment.month() - 1 );
		} else if ( $(this).hasClass('cm_next') ) {
			targetMoment.month( targetMoment.month() + 1 );
		} else {
			targetMoment = moment();
		}
		buildCalendar(cmEvents);
	});



	calendarMoment.build = function(cmEvents) {

	}
}
