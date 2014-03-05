"use strict"; // Using strict, because it's a good habit.
$(document).ready(function() {
	/*
	// Playing with the library.
	var now = moment("06-01-2014", "MM-DD-YYYY");
	console.log( 'Month: ' + moment.months( now.month() ) );
	console.log( 'Days in this month: ' + now.daysInMonth() );
	//console.log('Date: ' + moment(now.date(0)).date() );
	//console.log('Date 0: ' + moment(now.date(0)).date() );
	//console.log( 'Weekday: ' + moment.weekdays( now.weekday() ) );
	console.log( 'First day of this month (day): ' + moment.weekdays(now.date(1).weekday()) );
	console.log( 'Last day of this month (day): ' + moment.weekdays( now.date( now.daysInMonth() ).weekday() ) );
	console.log(' ================================== ');
	console.log(' ================================== ');
	*/
	var calendarData = setupCalendarData(); // From separate file at the moment: calendar-data.js
	console.log(calendarData);
	calendarMoment( $('#calendar'), moment(), calendarData);
});

var calendarMoment = function($targetCalendar, targetMoment, calendarData) {
	var headerString = '<header class="cm_header"><div class="cm_title"></div><nav id="cm_nav" class="cm_nav"><button class="cm_prev" disabled><< Prev</button><button class="cm_now" disabled>Now</button><button class="cm_next" disabled>Next >></button></nav></header>',
		weekdayString = '<ul class="weekdays"><li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li></ul>',
		weeksString = '<section class="weeks"></section>';
		calendarData = calendarData || [];

		$targetCalendar.addClass('cm').html( headerString + weekdayString + weeksString );
		var $btnPrev = $targetCalendar.find('#cm_nav .cm_prev'),
			$btnNow = $targetCalendar.find('#cm_nav .cm_now'),
			$btnNext = $targetCalendar.find('#cm_nav .cm_next');
	/*
	console.log('Current year was: ' + currentMoment.year() );
	console.log('Current month was: ' + currentMoment.month() );
	currentMoment.month( currentMoment.month() + 15 );
	console.log('Current month is: ' + currentMoment.month() );
	console.log('Current year is: ' + currentMoment.year() );
	*/
	var buildCalendar = function() {
		//console.log('Current month is: ' + targetMoment.month() );
		var currentMoment = targetMoment.clone(),
			calendarString = '',
			thisMonth = currentMoment.month(),
			daysInThisMonth = currentMoment.daysInMonth(),
			lastWeekdayNum = currentMoment.date( currentMoment.daysInMonth() ).weekday(),	//Careful. Sets the current month to it's last day.
			firstWeekdayNum = currentMoment.date(1).weekday(),								// Careful. Sets the current month to first day. Important to do this second!
			beforeMonth = false,
			afterMonth = false;

		var dayCounter = 1 - firstWeekdayNum, // Starting current Day as the first day on the calendar.
			lastDay = (6 - lastWeekdayNum) + daysInThisMonth, // calendar starts at 1, not zero.
			totalDays = lastDay + firstWeekdayNum;

		currentMoment.date(dayCounter); // Sets currentMoment to whatever previous day appears first on the calendar.
		
		calendarString += '<ul class="days">';

		for (var i = 0; i < totalDays; i++) {
			var extraClasses = '';

			beforeMonth = (dayCounter < 1) ? true : false;
			afterMonth = (dayCounter > daysInThisMonth) ? true : false;

			if (beforeMonth || afterMonth) {
				extraClasses += ' out_of_range';
			}

			var dayString =	'<li class="cm_day' + extraClasses + '">' + 
								'<div class="day_cell">' + 
									'<span class="day">' + currentMoment.format("dddd") + ', </span>' + 
									'<span class="month">' + currentMoment.format("MMM") + '</span>' + 
									'<span class="date"> ' + currentMoment.format("Do") + '</span>' + 
								'</div>' + 
							'</li>';

			if ( (i +1) % 7 === 0 && dayCounter < daysInThisMonth) {
				dayString += '</ul><ul class="days">';
			}
			dayCounter ++;
			calendarString += dayString;

			currentMoment.add('days', 1);
		}
		calendarString +=  '</ul>';
		$targetCalendar.find('.cm_title').html( targetMoment.format("MMMM, YYYY") );
		$targetCalendar.find('.weeks').html(calendarString);


		// Check buttons to see if they should be enabled.
		var rightNow = moment();
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
	};
	buildCalendar();

	$( "#cm_nav" ).on( "click", "button", function( event ) {
		if ( $(this).hasClass('cm_prev') ) {
			targetMoment.month( targetMoment.month() - 1 );
		} else if ( $(this).hasClass('cm_next') ) {
			targetMoment.month( targetMoment.month() + 1 );
		} else {
			targetMoment = moment();
		}
		buildCalendar();
	});

}


// Another function I might use later, when I have more content.
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}