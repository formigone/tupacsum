var _gaq = _gaq || [];
_gaq.push([ '_setAccount', 'UA-15090706-1' ]);
_gaq.push([ '_trackPageview' ]);
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

var worker = new Worker("js/wordgen.js");
var out = document.querySelector("#results");
var paragraphCount = document.querySelector("#paragraphCount");
var startWith = document.querySelector("#beginWith");

worker.addEventListener("message", setResults);

function setResults(e) {
	out.innerHTML = e.data;
}

function tupacsumMore(len) {
	worker.postMessage({
		len : len,
		startWith : startWithIt()
	});
}

function getParagraphCount() {
	return paragraphCount.options[paragraphCount.selectedIndex].value;
}

function startWithIt() {
	return startWith.checked;
}

function updateTupacsum() {
	tupacsumMore(getParagraphCount());
}

function updateCount() {
	var count = parseInt(getParagraphCount());
	_gaq.push([ '_trackEvent', 'Tupacsum', 'Paragraph Count',
			'Settings Changed', count, false ]);
	updateTupacsum();
}

function updateStartWith() {
	var startWith = startWithIt() ? 1 : 0;
	_gaq.push([ '_trackEvent', 'Tupacsum', 'Start With', 'Settings Changed',
			startWith, false ]);
	updateTupacsum();
}

paragraphCount.addEventListener("change", updateCount);
startWith.addEventListener("change", updateStartWith);
updateTupacsum();
