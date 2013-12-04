"use strict"; // Using strict, because it's a good habit.
$(document).ready(function() {
	// do stuff.

	var now = moment();
	console.log( 'Month: ' + moment.months( now.month() ) );
	console.log( 'Days in this month: ' + now.daysInMonth() );
	console.log('Date: ' + now.date() );
	console.log( 'Weekday: ' + moment.weekdays( now.weekday() ) );
	console.log( 'First day of this month (day): ' + moment.weekdays(now.date(1).weekday()) );
	console.log( 'Last day of this month (day): ' + moment.weekdays( now.date( now.daysInMonth() ).weekday() ) );


});








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