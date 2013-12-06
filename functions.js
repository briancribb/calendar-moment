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

	var monthToBuild = moment("02-01-2014", "MM-DD-YYYY");
	calendarMoment( $('#calendar'), monthToBuild);
});

var calendarMoment = function($targetCalendar, targetMoment) {
	var headerString = '<header class="calendar_header"><div class="calendar_title"></div><nav id="calendar_nav" class="calendar_nav"><button class="prev"><< Prev</button><button class="now">Now</button><button class="next">Next >></button></nav></header>',
		weekdayString = '<ul class="weekdays"><li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li></ul>',
		weeksString = '<section class="weeks"></section>';

		$targetCalendar.html( headerString + weekdayString + weeksString );
	/*
	console.log('Current year was: ' + currentMoment.year() );
	console.log('Current month was: ' + currentMoment.month() );
	currentMoment.month( currentMoment.month() + 15 );
	console.log('Current month is: ' + currentMoment.month() );
	console.log('Current year is: ' + currentMoment.year() );
	*/
	var buildCalendar = function() {
		var currentMoment = targetMoment.clone();
		console.log('Current month is: ' + targetMoment.month() );
		var currentMoment = targetMoment.clone(),
			calendarString = '',
			thisMonth = currentMoment.month(),
			daysInThisMonth = currentMoment.daysInMonth(),
			firstWeekdayNum = currentMoment.date(1).weekday(),
			lastWeekdayNum = currentMoment.date( currentMoment.daysInMonth() ).weekday(),
			beforeMonth = false,
			afterMonth = false;

		var today = targetMoment.date(),
			firstDay = 1 - firstWeekdayNum,
			lastDay = (6 - lastWeekdayNum) + daysInThisMonth, // calendar starts at 1, not zero.
			currentDay = firstDay,
			totalDays = lastDay + firstWeekdayNum;

		calendarString += '<ul class="days">';

		for (var i = 0; i < totalDays; i++) {
			var extraClasses = '',
				dayDisplayed = currentDay,
				outOfRangeDate = 0;

			beforeMonth = (currentDay < 1) ? true : false;
			afterMonth = (currentDay > daysInThisMonth) ? true : false;


			if (beforeMonth) {
				outOfRangeDate = moment(currentMoment.date(currentDay)).date();
				extraClasses += ' out_of_range';
				dayDisplayed = outOfRangeDate;
			}

			if (afterMonth) {
				var outOfRangeDate = currentDay - daysInThisMonth;
				extraClasses += ' out_of_range';
				dayDisplayed = outOfRangeDate;
			}

			//console.log('outOfRangeDate = ' + outOfRangeDate);

			var dayString =	'<li class="calendar-day' + extraClasses + '">' + 
								'<div class="day_cell">' + 
									'<span class="day">' + moment.weekdaysShort(currentDay) + ', </span>' + 
									'<span class="month">Dec</span>' + 
									'<span class="date"> ' + dayDisplayed + '</span>' + 
								'</div>' + 
							'</li>';

			if ( (i +1) % 7 === 0 && currentDay < daysInThisMonth) {
				dayString += '</ul><ul class="days">';
			}
			currentDay ++;
			calendarString += dayString;
		}
		calendarString +=  '</ul>';
		$targetCalendar.find('.calendar_title').html( targetMoment.format("MMMM, YYYY") );
		$targetCalendar.find('.weeks').html(calendarString);
	}
	buildCalendar();

	$( "#calendar_nav" ).on( "click", "button", function( event ) {
		if ( $(this).hasClass('prev') ) {
			targetMoment.month( targetMoment.month() - 1 );
		} else if ( $(this).hasClass('next') ) {
			targetMoment.month( targetMoment.month() + 1 );
		} else {
			targetMoment = moment();
		}
		buildCalendar();
	});

}


// Another function I'll use later, when I have more content.

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