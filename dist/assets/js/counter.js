const days = document.querySelector('.daystime');
const hours = document.querySelector('.hourstime');
const minutes = document.querySelector('.minutestime');
const seconds = document.querySelector('.secondstime');

const daystext = document.querySelector('.daystext');
const hourstext = document.querySelector('.hourstext');
const minutestext = document.querySelector('.minutestext');
const secondstext = document.querySelector('.secondstext');

let goal = new Date();
goal.setYear(goal.getFullYear()+1);
goal.setMonth(0);
goal.setDate(1);
goal.setHours(0, 0, 0, 0);
console.log(goal);

let countdown = function(){
  let now = new Date();
  let d = Math.floor((goal - now) / 86400000);
  days.innerHTML = d;
  daystext.innerHTML = declOfNum(d, ['день', 'дня', 'дней']);
  let h = Math.floor((goal - now) % 86400000 / 3600000 );
  hours.innerHTML = h;
  hourstext.innerHTML = declOfNum(h, ['час', 'часа', 'часов']);
  let m = Math.floor((goal - now) % 86400000 % 3600000 / 60000);
  minutes.innerHTML = m;
  minutestext.innerHTML = declOfNum(m, ['минута', 'минуты', 'минут']);
  let s = Math.floor((goal - now) % 86400000 % 3600000 % 60000 / 1000);
  seconds.innerHTML = s;
  secondstext.innerHTML = declOfNum(s, ['секунда', 'секунды', 'секунд']);

};

setInterval(countdown, 1000);

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
