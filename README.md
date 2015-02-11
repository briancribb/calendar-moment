<h2>Calendar Moment</h2>
<p><small><em>A responsive event calendar built using Moment.js and with lists instead of tables.</em></small></p>

<p>I started with some inspiration from <a title="Tutorial: Creating a Responsive Calendar" href="http://www.searchdiscovery.com/blog/tutorial-creating-a-responsive-calendar/">this wonderful design tutorial</a>, and then started working on building the actual calendar from JavaScript. Everything changed for the better when I saw <a title="Paul Irish endorses Moment.js" href="https://plus.google.com/+PaulIrish/posts/htwWUqxHmUY">Paul Irish endorse Moment.js</a>. I am now using <a title="Moment.js" href="http://momentjs.com/">Moment.js</a> for the basis of this whole project.</p>
<p>The end result will start with an empty <code>div</code> and an <code>id</code>. The script will do the rest. I'm building this for myself at the moment, but eventually I might turn it into a plugin.</p>
<h3>Dependencies</h3>
<p>Calendar Moment requires the following files to work. These are currently being pulled from CDN's, but for Production use they would be concatenated and minified.</p>
<ul>
	<li>jQuery: From the Google CDN, Using 2.1.3 becaus IE8 can go to hell. However, if you're still chained to 1995 then this should still work with 1.x. I'm not going to test it for that, but it will probably work.</li>
	<li>jQuery Throttle/Debounce Plugin: This is Ben Alman's script, being pulled from CDNJS.</li>
	<li>MomentJS 2.9.0, also pulled from CDNJS.</li>
</ul>
<h3>Data Sources</h3>
<p>Data can come from anywhere, but will need to be converted into the format that Calendar Moment needs. I prefer to use the Google Calendar API, so I wrote a separate function to convert Google's cumbersome JSON response into a smaller form that's easier to read. You'll need some similar script if you want to use a different data source. Convert the response first, and then pass the resulting event array into Calendar Moment's <code>init</code> function.</p>
<p><em>Note: Just to make things easier to tweak, I've copied a JSON response from my Google Calendar and added it to my data transformation function. This way I can change dates and things without logging into my Google account. In a Production environment, I would pull the data first, transform it and then run Calendar Moment after the AJAX call succeeds.</em></p>