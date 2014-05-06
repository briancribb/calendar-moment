var setupCalendarData = function() {
	var data = [
		{
			title:"First Event",
			startTime: "2014-05-02",
			endTime: "2014-05-04",
			where:"Over, TH",
			url: "http://www.google.com",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"TestCon",
			startTime: "2014-05-11",
			endTime: "2014-05-13",
			where:"Thatplace, SW",
			url: "http://www.google.com/testcon/",
			description:"A convention where people run tests.",
		},
		{
			title:"Yet Another Event",
			startTime: "2014-05-16",
			endTime: "2014-05-18",
			where:"Someplace Else",
			url: "http://www.google.com/yetanother/",
			description:"I'm still testing, so here's another fake event.",
		},
		{
			title:"Doing Stuff",
			startTime: "2014-05-20",
			endTime: "2014-05-22",
			where:"In a room.",
			url: "http://www.google.com",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"Get Warmer",
			startTime: "2014-05-23",
			endTime: "2014-05-26",
			where:"Nowhereville, North Nowhere",
			url: "http://www.google.com/getwarmer/",
			description:"This is really some kind of test. Totally.",
		},
		{
			title:"Spring Thingy",
			startTime: "2014-05-28",
			endTime: "2014-05-30",
			where:"Under a Bridge",
			url: "http://www.google.com/springthingie/",
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
