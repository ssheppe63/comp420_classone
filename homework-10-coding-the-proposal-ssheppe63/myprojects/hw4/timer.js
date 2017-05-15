/*
	TODO: Store references to the DOM objects in variables below
*/
var timerDiv = document.getElementById("timer");		// Where we will display the time
var startBtn = document.querySelector('button[data-btn="start"]');		// When clicked, start or resume timer
var pauseBtn = document.querySelector('button[data-btn="pause"]');		// When clicked, pause timer
var resetBtn = document.querySelector('button[data-btn="reset"]');		// When clicked, reset timer to original status
var tickAudio = document.querySelector('audio[data-audio="tick"]');		// Play once per second while the timer counts down
var alarmAudio = document.querySelector('audio[data-audio="alarm"]');		// Play repeatedly when timer reaches 00:00:00, 
					// until pause or reset is pressed (for simplicity)


/*
	TODO: Set initial values to the variables below
*/
var secDuration = 10;	// How long the timer is set, in seconds
var running = false;		// A boolean

/*
	TODO: Figure what this one may be used for (later)
*/
var timerInterval;

/*
	TODO: getTimeString takes in a number of seconds and return
	a time string in the format "hh+:mm:ss" (2 or more digits for hours,
	2 digits for minutes, 2 digits for seconds)

	Example: 	getTimeString(10) => "00:00:10"
				getTimeString(12000) => "03:36:45"
*/
function getTimeString(totalSeconds) {
	
	return (new Date(totalSeconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}

console.log(getTimeString(10));
console.log(getTimeString(13005));
/*
	TODO: render(displayDiv, totalSeconds) displays the totalSeconds
	in "hh+:mm:ss" format in the browser where displayDiv is
*/
function render(displayDiv, totalSeconds) {
	// displayDiv.appendChild(document.createElement("p"));
	// var node = document.createTextNode(getTimeString(totalSeconds));
	// var div = displayDiv.appendChild(para).appendChild(node);
	displayDiv.innerHTML = (getTimeString(totalSeconds));
	
}

// render(timerDiv, 13005);

/*
	TODO: Write functions that correspond to the specs of our buttons
*/

function runTimer() {
	if(secDuration != 0){
		secDuration += -1;
		render(timerDiv, secDuration)
		tickAudio.play();
	}
	else if(secDuration == 0){
		running = false;
		alarmAudio.play();
		console.log(running);
	}	
}


startBtn.addEventListener("click", function(e) {
	if(running) return;
	running = true;
	timerInterval = setInterval(function(){
		runTimer();
	}, 1000);
});

pauseBtn.addEventListener("click", function(e){
	if(running){
		clearingInterval();
	}
});

resetBtn.addEventListener("click", function(e){
	secDuration = 10;
	render(timerDiv, secDuration);
	clearingInterval();
})

function clearingInterval(){
	clearInterval(timerInterval);
	running = false;
}
	
	
	




/*
	TODO: Uncomment the line below when you have implemented render
*/
render(timerDiv, secDuration);