const hand = document.querySelectorAll('.hand');
const arrowSecond = document.querySelector('.second-hand');
const arrowMinute = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();


const setTime = () => {
  const secondsDegrees = seconds/ 60* 360+90;
  const minutesDegrees = (minutes/60*360) + (seconds*0.1)+90;
  const hourDegrees =   (hours/12*360) + (minutes/60*30)+(seconds/3600*30) + 90;
  arrowSecond.style.transform = `rotate(${secondsDegrees}deg)`;
  arrowMinute.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  seconds+=1;
}

setInterval(setTime, 1000);
