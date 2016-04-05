/*  Notes for constructing the url where this data came from.
	// Getting an appropriate date.
	function myFunction() {
		var d = new Date();
		var n = d.toISOString();
		document.getElementById("demo").innerHTML = n;
	}

	// https://console.developers.google.com/project

	// url format.
	https://www.googleapis.com/calendar/v3/calendars/{calendarid}/events?key={Your Public API Key}

*/

var setupCalendarData = function() {
	var cmEvents = [];

	var fakeData =
		{
			"kind": "calendar#events",
			"etag": "\"1418078761809000\"",
			"summary": "Webdev Test",
			"description": "Just for testing.",
			"updated": "2016-02-08T22:46:01.809Z",
			"timeZone": "America/New_York",
			"accessRole": "reader",
			"defaultReminders": [],
			"nextSyncToken": "COjo8YbDt8ICEAAYAQ==",
			"items": [
			{
				"kind": "calendar#event",
				"etag": "\"2835594223344000\"",
				"id": "n578q7v8ktg6mok5i3hs762ofk",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=bjU3OHE3djhrdGc2bW9rNWkzaHM3NjJvZmsgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05CMT16:31:23.000Z",
				"updated": "2016-02-05T17:31:51.672Z",
				"summary": "More Stuff",
				"description": "Somewhere you can get many, many tacos.",
				"location": "Portland, ME, USA",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-01"
				},
				"end": {
					"date": "2016-02-01"
				},
				"transparency": "transparent",
				"iCalUID": "n578q7v8ktg6mok5i3hs762ofk@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594313790000\"",
				"id": "qq1mhh3dqmtkhbf5armb74r6ls",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=cXExbWhoM2RxbXRraGJmNWFybWI3NHI2bHMgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05T16:32:36.000Z",
				"updated": "2016-02-05T17:32:36.895Z",
				"summary": "Weird Night of Things",
				"description": "Never know what will happen at one of these.",
				"location": "That guy's house",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
						"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
						"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-04"
				},
				"end": {
					"date": "2016-02-05"
				},
				"transparency": "transparent",
				"iCalUID": "qq1mhh3dqmtkhbf5armb74r6ls@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594361586000\"",
				"id": "gqb8sldpq9v04je2ra1pru7qnc",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=Z3FiOHNsZHBxOXYwNGplMnJhMXBydTdxbmMgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2015-04-05T16:33:00.000Z",
				"updated": "2015-04-05T16:33:00.793Z",
				"summary": "Random Event",
				"description": "Random details",
				"location": "Random Place",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2015-04-06"
				},
				"end": {
					"date": "2015-04-08"
				},
				"transparency": "transparent",
				"iCalUID": "gqb8sldpq9v04je2ra1pru7qnc@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594407460000\"",
				"id": "f9u2vhjrm37c7ks69cr6v6230o",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=Zjl1MnZoanJtMzdjN2tzNjljcjZ2NjIzMG8gMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2015-04-05T16:33:23.000Z",
				"updated": "2015-04-05T16:33:23.730Z",
				"summary": "Testing Things",
				"description": "For SCIENCE.",
				"location": "My laboratory",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2015-04-07"
				},
				"end": {
					"date": "2015-04-09"
				},
				"transparency": "transparent",
				"iCalUID": "f9u2vhjrm37c7ks69cr6v6230o@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594484154000\"",
				"id": "vn3ig80srl193mnh5l9kbbr25g",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=dm4zaWc4MHNybDE5M21uaDVsOWtiYnIyNWcgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2015-04-05T16:34:02.000Z",
				"updated": "2015-04-05T16:34:02.077Z",
				"summary": "One More Time",
				"description": "Another test event with random stuff in it.",
				"location": "Washington, DC, USA",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2015-04-18"
				},
				"end": {
					"date": "2015-04-19"
				},
				"transparency": "transparent",
				"iCalUID": "vn3ig80srl193mnh5l9kbbr25g@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2836156762914000\"",
				"id": "9fqbub1jsmo6oggq9pague4ts0",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=OWZxYnViMWpzbW82b2dncTlwYWd1ZTR0czAgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2015-04-05T16:31:09.000Z",
				"updated": "2015-04-08T22:39:41.457Z",
				"summary": "Something Happening",
				"description": "This is a description of the place where stuff is happening.",
				"location": "Somewhere Nice",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2015-04-22"
				},
				"end": {
					"date": "2015-04-25"
				},
				"transparency": "transparent",
				"iCalUID": "9fqbub1jsmo6oggq9pague4ts0@google.com",
				"sequence": 0
			}
			]
	}

	var fakeDataSingle =
		{
			"kind": "calendar#events",
			"etag": "\"1418078761809000\"",
			"summary": "Webdev Test",
			"description": "Just for testing.",
			"updated": "2015-04-08T22:46:01.809Z",
			"timeZone": "America/New_York",
			"accessRole": "reader",
			"defaultReminders": [],
			"nextSyncToken": "COjo8YbDt8ICEAAYAQ==",
			"items": [
			{
				"kind": "calendar#event",
				"etag": "\"2835594223344000\"",
				"id": "n578q7v8ktg6mok5i3hs762ofk",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=bjU3OHE3djhrdGc2bW9rNWkzaHM3NjJvZmsgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05CMT16:31:23.000Z",
				"updated": "2016-02-05T16:31:51.672Z",
				"summary": "More Stuff",
				"description": "Somewhere you can get many, many tacos.",
				"location": "Portland, ME, USA",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-01"
				},
				"end": {
					"date": "2016-02-01"
				},
				"transparency": "transparent",
				"iCalUID": "n578q7v8ktg6mok5i3hs762ofk@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594313790000\"",
				"id": "qq1mhh3dqmtkhbf5armb74r6ls",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=cXExbWhoM2RxbXRraGJmNWFybWI3NHI2bHMgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05T16:32:36.000Z",
				"updated": "2016-02-05T16:32:36.895Z",
				"summary": "Weird Night of Things",
				"description": "Never know what will happen at one of these.",
				"location": "That guy's house",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
						"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
						"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-04"
				},
				"end": {
					"date": "2016-02-04"
				},
				"transparency": "transparent",
				"iCalUID": "qq1mhh3dqmtkhbf5armb74r6ls@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594361586000\"",
				"id": "gqb8sldpq9v04je2ra1pru7qnc",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=Z3FiOHNsZHBxOXYwNGplMnJhMXBydTdxbmMgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05T16:33:00.000Z",
				"updated": "2016-02-05T16:33:00.793Z",
				"summary": "Random Event",
				"description": "Random details",
				"location": "Random Place",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-06"
				},
				"end": {
					"date": "2016-02-06"
				},
				"transparency": "transparent",
				"iCalUID": "gqb8sldpq9v04je2ra1pru7qnc@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594407460000\"",
				"id": "f9u2vhjrm37c7ks69cr6v6230o",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=Zjl1MnZoanJtMzdjN2tzNjljcjZ2NjIzMG8gMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05T16:33:23.000Z",
				"updated": "2016-02-05T16:33:23.730Z",
				"summary": "Testing Things",
				"description": "For SCIENCE.",
				"location": "My laboratory",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-07"
				},
				"end": {
					"date": "2016-02-07"
				},
				"transparency": "transparent",
				"iCalUID": "f9u2vhjrm37c7ks69cr6v6230o@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2835594484154000\"",
				"id": "vn3ig80srl193mnh5l9kbbr25g",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=dm4zaWc4MHNybDE5M21uaDVsOWtiYnIyNWcgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-02-05T16:34:02.000Z",
				"updated": "2016-02-05T16:34:02.077Z",
				"summary": "One More Time",
				"description": "Another test event with random stuff in it.",
				"location": "Washington, DC, USA",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-02-18"
				},
				"end": {
					"date": "2016-02-18"
				},
				"transparency": "transparent",
				"iCalUID": "vn3ig80srl193mnh5l9kbbr25g@google.com",
				"sequence": 0
			},
			{
				"kind": "calendar#event",
				"etag": "\"2836156762914000\"",
				"id": "9fqbub1jsmo6oggq9pague4ts0",
				"status": "confirmed",
				"htmlLink": "https://www.google.com/calendar/event?eid=OWZxYnViMWpzbW82b2dncTlwYWd1ZTR0czAgMDhuNTE4cXViMDVyajcycjQ0aDJldDU3aTRAZw",
				"created": "2016-03-05T16:31:09.000Z",
				"updated": "2016-03-08T22:39:41.457Z",
				"summary": "Something Happening",
				"description": "This is a description of the place where stuff is happening.",
				"location": "Somewhere Nice",
				"creator": {
					"email": "brian.cribb@gmail.com",
					"displayName": "Brian Cribb"
				},
				"organizer": {
					"email": "08n518qub05rj72r44h2et57i4@group.calendar.google.com",
					"displayName": "Webdev Test",
					"self": true
				},
				"start": {
					"date": "2016-03-22"
				},
				"end": {
					"date": "2016-03-22"
				},
				"transparency": "transparent",
				"iCalUID": "9fqbub1jsmo6oggq9pague4ts0@google.com",
				"sequence": 0
			}
			]
	}

	var formattedDateSpan = function(startDateString, endDateString) {
		var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'],
			monthNamesAbbr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
			myStartDate = new Date( startDateString ),
			myEndDate = new Date( endDateString );

		var myString =	monthNamesAbbr[ myStartDate.getMonth() ] + ' ' + myStartDate.getUTCDate(); // Ex. 'Jan 6' 

		if (  myStartDate.getMonth() === myEndDate.getMonth() && myStartDate.getFullYear() === myEndDate.getFullYear() ) {
			//If within the same month of the same year.
			myString += '-' + myEndDate.getUTCDate();
			// Ex. 'Jan 6' + '-7' for a final string of:   "Jan 6-7"

		} else {
			// Either the month or the year is different. Starting string example: 'Jan 6'
			var startYear, endYear;

			if (  myStartDate.getFullYear() === myEndDate.getFullYear() ) {
				// Same year, which means we have a different month within that year.
				startYear = endYear = ''; // Won't be displaying years, so an empty string for both.

			} else {
				// If ending in the next year.
				startYear = ', ' + myStartDate.getFullYear(); // Ex. ', 2014'
				endYear   = ', ' + myEndDate.getFullYear();   // Ex. ', 2015'
			}

			// Add the strings together. We display the ending month no matter what, since the month or year will be different. Year strings might be empty.
			myString += startYear + ' - ' + monthNamesAbbr[ myEndDate.getMonth() ] + ' ' + myEndDate.getUTCDate() + endYear;
			/*
				* Ex. 'Jan 6' + ', 2014' + ' - ' + 'Feb' + ' ' + '4' + ', ' + '2015'
				* If in different years, the final string would be:			"Jan 6, 2014 - Feb 4, 2015"
				* Same year with different month, the final string would be:	"Jan 6 - Feb 4"
				*/
		}
		return myString;
	}

	//var calendarURL = "https://www.googleapis.com/calendar/v3/calendars/08n518qub05rj72r44h2et57i4@group.calendar.google.com/events?key=AIzaSyDTG_U9jFru1SxYkcLkHFdBMKSDPBf5ENU&orderby=startTime&singleEvents=true&timeMin=2015-04-09T16:55:55.290Z";
	//$.when( $.ajax(calendarURL) ).then( function success(data) {
	//	var json = data.feed.entry;
		var json = fakeDataSingle;


		for (var i = 0; i < json.items.length; i++) {
			var item = json.items[i];
			var tempObject = {
				summary			: item.summary,
				startTime		: item.start.date,
				endTime			: item.end.date,
				location		: item.location,
				description		: item.description,
				mapLink			: "http://maps.google.com/maps?q=" + ( item.location.replace(/\s*,\s*/g, '+') ) + "&hl=en",
				dateSpan		: formattedDateSpan( item.start.date, item.end.date ),
				momentStart		: moment(item.start.date, 'YYYY-MM-DD'),
				momentEnd		: moment(item.end.date, 'YYYY-MM-DD')
			};
			cmEvents.push(tempObject);
		};

		//$.each(json.items, function(i, item) {
		//});

		/*
			* In a real AJAX call, Calendar Moment would be called at this point. For now, we're just returning the data.
			* calendarMoment.init( $targetCalendar, moment(), cmEvents);
		*/
	//} , failure);

	//var failure = function() {
		//console.log( "The data failed somehow." );
	//}
	//console.log(cmEvents);
	return cmEvents;
}
