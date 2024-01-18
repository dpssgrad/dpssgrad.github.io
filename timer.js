let countdown;// setInterval function for countdown clock
let serviceInSession;// seTimeout function for when event is Live
const clock = document.getElementById('clock');// div that controls the clock container 
const livestreamButton = document.getElementById('door');// div that controls the button for the user to click to enter the live stream
const daysUnit = document.querySelector('.days');// span element that displays the amount of days
const hoursUnit = document.querySelector('.hours');// span element that displays the amount of hours
const minutesUnit = document.querySelector('.minutes');// span element that displays the amount of minutes
const secondsUnit = document.querySelector('.seconds');// span element that displays the amount of seconds

const startDate = new Date(2024, 0, 20, 10, 00, 00).getTime();// initial date and time the countdown clock started from (Year, Month, Day, Hours, Minutes, Seconds,)
startDate > Date.now() ? timer(startDate) : calculateFutureDate(startDate);// conditional statement that decides if the timer function should start with the start date or calculate another date
// timer function takes in a date parameter in milliseconds
function timer(date){
	// countdown holds the entire timer functionality 
	countdown = setInterval(()=>{
		const now = Date.now();// current date and time
		const differenceInTime = date - now;// distance between current time and future time of event
		// checks timer to see if the distance is zero and if zero
		if(differenceInTime < 0){
			clearInterval(countdown);// clear timer
			clock.classList.add("hide");// hide the clock div element
			livestreamButton.classList.remove("hide");// show the live stream button div element
			// keeps the live stream button div element on the screen for 2 hours or 7200000 milliseconds and then
			serviceInSession = setTimeout(()=>{
				livestreamButton.classList.add("hide");// hide live stream button div element
				calculateFutureDate(date);// past the date that countdown was counting down to, to the calculateFutureDate function
				clock.classList.remove("hide");// show the clock again
			},7200000); // after 2 hours do what's inside the setTimeout function
			return;
		}	
		timeLeft(differenceInTime);// each iteration of setInterval send updated distance to timeLeft function
	}, 1000);// every 1 second
}
// timeLeft function takes a time as a parameter in milliseconds and displays it in Days, Hours, Minutes, and Seconds
function timeLeft(time){
		const days = Math.floor(time /(1000 * 60 * 60 * 24));// milliseconds into days
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// milliseconds into hours
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// milliseconds into minutes
		const seconds = Math.floor((time % (1000 * 60)) / 1000);// milliseconds into seconds
		// conditional added to each portion of the time that will be displayed adds a zero to the front of numbers < 10
		const displayDays = `${days < 10 ? '0' : '' }${days}`;// days string that will be displayed 
		const displayHours = `${hours < 10 ? '0' : ''}${hours}`;// hours string that will be displayed
		const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;// minutes string that will be displayed
		const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`;// seconds string that will be displayed
		//displays the time strings on the page individually
		daysUnit.textContent = displayDays;
		hoursUnit.textContent = displayHours;
		minutesUnit.textContent = displayMinutes;
		secondsUnit.textContent = displaySeconds;
		// next line is for testing purposes
		// console.log(displayDays+" : " +displayHours+" : "+displayMinutes+" : "+displaySeconds);
}
// calculateFutureDate takes a number in milliseconds as a parameter 
function calculateFutureDate (dateTochange){	
		const newDate = new Date(dateTochange);// converts it to date format
		const weeklyDate  = newDate.setDate(newDate.getDate() +07);// adds 7 days to that date
		timer(weeklyDate);// sends it to the timer function
		//console.log("new: "+dateTochange);		
}

document.getElementById("clock").classList.add("hide")

document.getElementById('play').onclick = function() {
	document.getElementById("clock").classList.remove("hide")
	document.getElementById("play").classList.add("hide")
	document.getElementById("singsong").play();
	document.getElementById("beep").play();
	document.getElementById("beep").volume = 0.25;
 }
 
function myFunction1() {
	var popup = document.getElementById("myPopup1");
	popup.classList.toggle("show");
	document.getElementById("myPopup2").classList.remove("show");
	document.getElementById("myPopup3").classList.remove("show");
	document.getElementById("myPopup4").classList.remove("show");
}
function myFunction2() {
	var popup = document.getElementById("myPopup2");
	popup.classList.toggle("show");
	document.getElementById("myPopup1").classList.remove("show");
	document.getElementById("myPopup3").classList.remove("show");
	document.getElementById("myPopup4").classList.remove("show");
}
function myFunction3() {
	var popup = document.getElementById("myPopup3");
	popup.classList.toggle("show");
	document.getElementById("myPopup1").classList.remove("show");
	document.getElementById("myPopup2").classList.remove("show");
	document.getElementById("myPopup4").classList.remove("show");
}
function myFunction4() {
	var popup = document.getElementById("myPopup4");
	popup.classList.toggle("show");
	document.getElementById("myPopup1").classList.remove("show");
	document.getElementById("myPopup2").classList.remove("show");
	document.getElementById("myPopup3").classList.remove("show");
}
