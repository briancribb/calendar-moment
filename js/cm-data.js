var setupCalendarData = function() {
	var data = [
		{
			title:"First Event",
			startTime: "2014-05-15",
			endTime: "2014-05-17",
			where:"Over, TH",
			link: "http://www.google.com",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"TestCon",
			startTime: "2014-05-22",
			endTime: "2014-05-26",
			where:"Thatplace, SW",
			link: "http://www.google.com/testcon/",
			description:"A convention where people run tests.",
		},
		{
			title:"Yet Another Event",
			startTime: "2014-05-28",
			endTime: "2014-05-29",
			where:"Someplace Else",
			link: "http://www.google.com/yetanother/",
			description:"I'm still testing, so here's another fake event.",
		},
		{
			title:"Doing Stuff",
			startTime: "2014-06-15",
			endTime: "2014-06-17",
			where:"In a room.",
			link: "http://www.google.com",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"Get Warmer",
			startTime: "2014-06-22",
			endTime: "2014-06-24",
			where:"Nowhereville, North Nowhere",
			link: "http://www.google.com/getwarmer/",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"Spring Thingy",
			startTime: "2014-07-15",
			endTime: "2014-07-17",
			where:"Under a Bridge",
			link: "http://www.google.com/springthingie/",
			description:"This is really some kind of test. Totally.",
		},
	];
	for (var i = 0; i < data.length; i++) {
		data[i].momentStart = moment(data[i].startTime, 'YYYY-MM-DD');
		data[i].momentEnd = moment(data[i].endTime, 'YYYY-MM-DD');
	}

	return data;
	console.log(data);
}
