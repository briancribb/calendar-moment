"use strict"; // Using strict, because it's a good habit.
$(document).ready(function() {
	// do stuff.

/*
	var testMoment = moment("01-01-2014", "MM-DD-YYYY");
	console.log('Days in Septenmber: ' + moment("2012-09", "YYYY-MM").daysInMonth() );
	console.log('Day: ' + moment().day() );
	console.log('Weekday: ' + moment().weekday() );
	console.log('Test Weekday: ' + testMoment.weekday() );
*/


	var timeNames = {
		months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
	}


	var now = moment();
	console.log('Month: ' + timeNames.months[now.month()] );
	console.log('Days in this month: ' + now.daysInMonth() );
	console.log('Day: ' + timeNames.months[now.day()] );
	console.log('Weekday: ' + timeNames.months[now.weekday()] );
	console.log('First day of this month (day): ' + timeNames.weekdays[now.date(1).weekday()] );
	console.log('Last day of this month (day): ' + timeNames.weekdays[now.date( now.daysInMonth() ).weekday()] );
});









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