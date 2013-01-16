var worker = new Worker("js/wordgen.js");
var out = document.querySelector("#results");
var paragraphCount = document.querySelector("#paragraphCount");
var startWith = document.querySelector("#beginWith");

worker.addEventListener("message", setResults);

function setResults(e) {
	out.innerHTML = e.data;
}

function tupacsumMore(len) {
	worker.postMessage({len : len, startWith: startWithIt()});
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

paragraphCount.addEventListener("change", updateTupacsum);
startWith.addEventListener("change", updateTupacsum);
updateTupacsum();
