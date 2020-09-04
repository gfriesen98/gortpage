var username = "gort";
var greetings = [
    "whaddya' want...",
    "get on with it...",
    "c'mon hurry it up...",
    "what're you lookin' for?",
    "all you need...",
    "what's goin' on?",
    "why are you still here?",
    "on your way out?",
    "yeah...",
    "here again...?",
    "waiting for your request."
]

window.addEventListener('load', (e) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    determineGreet();
    displayTime(time);
});

// document.getElementById("y").addEventListener('click', (e) => {
//     document.getElementById('autism-container').style.display = "block";
// });

setInterval(() => {
    var today = new Date();
    var time = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    document.getElementById("time").innerHTML = time.toLowerCase();
}, 1000);

const displayTime = (time) => document.getElementById("time").innerHTML = time;

 const determineGreet = ()  => 
     document.getElementById("greeting").innerText = greetings[Math.floor(Math.random() * greetings.length)];

const check_search = () => {
    if (document.forms["search-eng-form"]['q'].value == "") {
        event.preventDefault();
    }
}