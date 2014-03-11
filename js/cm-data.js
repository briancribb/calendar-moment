var setupCalendarData = function() {
	var data = [
		{
			title:"First Event",
			startTime: "2014-03-15",
			endTime: "2014-03-17",
			where:"Over There",
			link: "http://www.google.com",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"TestCon",
			endTime: "2014-03-22",
			startTime: "2014-03-25",
			where:"Over There",
			link: "http://www.google.com/testcon/",
			description:"A convention where people run tests.",
		},
		{
			title:"Yet Another Event",
			endTime: "2014-03-28",
			startTime: "2014-03-29",
			where:"Someplace Else",
			link: "http://www.google.com/yetanother/",
			description:"I'm still testing, so here's another fake event.",
		},
		{
			title:"Doing Stuff",
			endTime: "2014-04-01",
			startTime: "2014-04-03",
			where:"In a room.",
			link: "http://www.google.com",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"Get Warmer",
			endTime: "2014-04-07",
			startTime: "2014-04-08",
			where:"Nowhereville, North Nowhere",
			link: "http://www.google.com/getwarmer/",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"Spring Thingy",
			endTime: "2014-04-14",
			startTime: "2014-04-16",
			where:"Under a Bridge",
			link: "http://www.google.com/springthingie/",
			description:"This is really some kind of test. Totally.",
		},
	];
	for (var i = 0; i < data.length; i++) {
		data[i].momentStart = moment(data[i].startTime, 'YYYY-MM-DD');;
		data[i].momentEnd = moment(data[i].endTime, 'YYYY-MM-DD');;
	}

	return data;
	console.log(data);
}
