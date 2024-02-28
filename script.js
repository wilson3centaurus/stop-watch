const displayHours = document.querySelector('.display-hours');
const displayMins = document.querySelector('.display-minutes');
const displaySecs = document.querySelector('.display-seconds');
const displayMilisec = document.querySelector('.display-miliseconds');

const startTime = document.querySelector('.start-time');
const stopTime = document.querySelector('.stop-time');
const resetTime = document.querySelector('.reset-time');

let time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
};

let intervals = {
  interval1: undefined,
  interval2: undefined,
  interval3: undefined,
  interval4: undefined
}

let clockRunning = false;

startTime.addEventListener('click', () => {
  clockRunning = true;
  intervals.interval1 = setInterval(startMiliseconds, 1);
  intervals.interval2 = setInterval(startSeconds, 1000);
  intervals.interval3 = setInterval(startMinutes, 60000);
  intervals.interval4 = setInterval(startHours, 3600000);
});

stopTime.addEventListener('click', stopClock);

function stopClock() {
  if (clockRunning === true) {
    clearInterval(intervals.interval1);
    clearInterval(intervals.interval2);
    clearInterval(intervals.interval3);
    clearInterval(intervals.interval4);
    clockRunning = false;
  }
}

resetTime.addEventListener('click', () => {
  stopClock();

  time.hours = 0;
  time.minutes = 0;
  time.seconds = 0;
  time.milliseconds = 0;

  displayHours.innerHTML = `0${time.minutes}`;
  displayMins.innerHTML = `0${time.minutes}`;
  displaySecs.innerHTML = `0${time.minutes}`;
  displayMilisec.innerHTML = `0${time.minutes}`;
});


function startMiliseconds() {
  
  displayMilisec.innerHTML = `${time.milliseconds += 1}`;
  if (time.milliseconds === 60) {
    time.milliseconds = 0;
  }
}

function startSeconds() {
  
  displaySecs.innerHTML = `${time.seconds += 1}`;
  if (time.seconds === 60) {
    time.seconds = 0;
  }
}

function startMinutes() {
  displayMins.innerHTML = `${time.minutes += 1}`;
  if (time.minutes === 60) {
    time.minutes = 0;
  }
}

function startHours() {
  displayHours.innerHTML = `${hours.hours += 1}`;
  if (time.hours === 60) {
    time.hours += 1;
  }
}
