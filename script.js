const hr = document.getElementById('js-clock-hour');
const min = document.getElementById('js-clock-min');
const sec = document.getElementById('js-clock-sec');

function displayTime(){
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hrotation = 30*hh + mm/2;
  let mmrotation = 6*mm;
  let srotation = 6*ss;

  hr.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mmrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime, 1000)