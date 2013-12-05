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
	buildCalendar( $('#calendar'), monthToBuild);
});


function buildCalendar($targetCalendar, currentMoment) {
	var calendarString = '<ul class="weekdays"><li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li></ul>';



	var thisMonth = currentMoment.month(),
		daysInThisMonth = currentMoment.daysInMonth(),
		firstWeekdayNum = currentMoment.date(1).weekday(),
		lastWeekdayNum = currentMoment.date( currentMoment.daysInMonth() ).weekday(),
		beforeMonth = false,
		afterMonth = false;

	var firstDay = 1 - firstWeekdayNum,
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

	$targetCalendar.html(calendarString);

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