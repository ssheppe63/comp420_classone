var startBtn = document.querySelector("button[data-btn='start']");
var stopBtn = document.querySelector("button[data-btn='stop']");;
var popAudio = document.querySelector('#pop');


var running = false;
var interval;

startBtn.addEventListener("click", function() {
	if(running) return;
	running = true;
	interval = setInterval(cornify_add, 1000);
});

stopBtn.addEventListener("click", function() {
	clearInterval(interval);
	running = false;
});
