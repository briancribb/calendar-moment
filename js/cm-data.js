/*  Notes for constructing the url where this data came from.
  // Getting an appropriate date.
  function myFunction() {
	  var d = new Date();
	  var n = d.toISOString();
	  document.getElementById("demo").innerHTML = n;
  }

  // https://console.developers.google.com/project

  // Calendar ID for my test calendar
  // 08n518qub05rj72r44h2et57i4@group.calendar.google.com

  // API Key:
  // AIzaSyDTG_U9jFru1SxYkcLkHFdBMKSDPBf5ENU

  // url format.
  https://www.googleapis.com/calendar/v3/calendars/{calendarid}/events?key={Your Public API Key}

  // Working url string.
https://www.googleapis.com/calendar/v3/calendars/08n518qub05rj72r44h2et57i4@group.calendar.google.com/events?key=AIzaSyDTG_U9jFru1SxYkcLkHFdBMKSDPBf5ENU&orderby=startTime&singleEvents=true&timeMin=2014-12-09T16:55:55.290Z

*/

var setupCalendarData = function() {
	var cmEvents = [];

	var fakeData =
		{
		 "kind": "calendar#events",
		 "etag": "\"1418078761809000\"",
		 "summary": "Webdev Test",
		 "description": "Just for testing.",
		 "updated": "2014-12-08T22:46:01.809Z",
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
		   "created": "2014-12-05T16:31:23.000Z",
		   "updated": "2014-12-05T16:31:51.672Z",
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
			"date": "2014-12-26"
		   },
		   "end": {
			"date": "2014-12-27"
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
		   "created": "2014-12-05T16:32:36.000Z",
		   "updated": "2014-12-05T16:32:36.895Z",
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
			"date": "2014-12-31"
		   },
		   "end": {
			"date": "2015-01-01"
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
		   "created": "2014-12-05T16:33:00.000Z",
		   "updated": "2014-12-05T16:33:00.793Z",
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
			"date": "2015-01-06"
		   },
		   "end": {
			"date": "2015-01-07"
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
		   "created": "2014-12-05T16:33:23.000Z",
		   "updated": "2014-12-05T16:33:23.730Z",
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
			"date": "2015-01-15"
		   },
		   "end": {
			"date": "2015-01-16"
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
		   "created": "2014-12-05T16:34:02.000Z",
		   "updated": "2014-12-05T16:34:02.077Z",
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
			"date": "2015-02-18"
		   },
		   "end": {
			"date": "2015-02-19"
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
		   "created": "2014-12-05T16:31:09.000Z",
		   "updated": "2014-12-08T22:39:41.457Z",
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
			"date": "2014-12-09"
		   },
		   "end": {
			"date": "2014-12-10"
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

		var myString =	monthNamesAbbr[ myStartDate.getMonth() ] + ' ' + myStartDate.getUTCDate();

		if (  myStartDate.getMonth() === myEndDate.getMonth() ) {
			//If within the same month.
			myString += '-' + myEndDate.getUTCDate() + ', ' + myEndDate.getFullYear();
		} else {
			// Not the same month.
			if (  myStartDate.getFullYear() === myEndDate.getFullYear() ) {
				// if in the same year
				var startYear = '';
			} else {
				var startYear = ', ' + myStartDate.getFullYear();
			}
			myString += startYear + ' - ' + monthNamesAbbr[ myEndDate.getMonth() ] + ' ' + myEndDate.getUTCDate() + ', ' + myEndDate.getFullYear();
		}
		return myString;
	}

	//var calendarURL = "https://www.googleapis.com/calendar/v3/calendars/08n518qub05rj72r44h2et57i4@group.calendar.google.com/events?key=AIzaSyDTG_U9jFru1SxYkcLkHFdBMKSDPBf5ENU&orderby=startTime&singleEvents=true&timeMin=2014-12-09T16:55:55.290Z";
	//$.when( $.ajax(calendarURL) ).then( function success(data) {
	//	var json = data.feed.entry;
		var json = fakeData;

		$.each(json.items, function(i, item) {
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
		});

		/*
		if( Quill.base.props.$eventWidget[0] ) {
			Quill.base.calendarWidget( Quill.base.props.$eventWidget );
		}
		if( Quill.base.props.$calendar[0] ) {
			calendarMoment.init( Quill.base.props.$calendar, moment(), Quill.base.events);
		}
		*/
	//} , failure);

	//var failure = function() {
		//console.log( "The data failed somehow." );
	//}

	return cmEvents;
}
