const counter = document.querySelector('.counter');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const date = counter.dataset.date.split(',');
const count = new Date(date[0], date[1] - 1, date[2], date[3]);

const interval = setInterval(updateCounter, 1000);
updateCounter();

function updateCounter() {
  const now = new Date().getTime();
  const diff = count - now;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // days.innerHTML = d < 10 ? `<span>0</span><span>${ d }</span>` : d.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  // hours.innerHTML = h < 10 ? `<span>0</span><span>${ h }</span>` : h.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  // minutes.innerHTML = m < 10 ? `<span>0</span><span>${ m }</span>` : m.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  // seconds.innerHTML = s < 10 ? `<span>0</span><span>${ s }</span>` : s.toString().split('').map(digit => `<span>${ digit }</span>`).join("");


  // if (diff < 0) {
  //   clearInterval(interval);
  //   const daysContainer = document.querySelector('.is-days');
  //   daysContainer.style.display = 'none';
  //   // days.innerHTML = '<span>0</span><span>0</span>';
  //   hours.innerHTML = '<span>0</span><span>0</span>';
  //   minutes.innerHTML = '<span>0</span><span>0</span>';
  //   seconds.innerHTML = '<span>0</span><span>0</span>';
  // }

  if (diff < 0) {
    days.innerHTML = '<span>0</span><span>0</span>';
    hours.innerHTML = '<span>0</span><span>0</span>';
    minutes.innerHTML = '<span>0</span><span>0</span>';
    seconds.innerHTML = '<span>0</span><span>0</span>';
  } else {
    days.innerHTML = d < 10 ? `<span>0</span><span>${ d }</span>` : d.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
    hours.innerHTML = h < 10 ? `<span>0</span><span>${ h }</span>` : h.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
    minutes.innerHTML = m < 10 ? `<span>0</span><span>${ m }</span>` : m.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
    seconds.innerHTML = s < 10 ? `<span>0</span><span>${ s }</span>` : s.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  }

  if (diff < 0) {
    clearInterval(interval);
    const daysContainer = document.querySelector('.is-days');
    daysContainer.style.display = 'none';
    hours.innerHTML = '<span>0</span><span>0</span>';
    minutes.innerHTML = '<span>0</span><span>0</span>';
    seconds.innerHTML = '<span>0</span><span>0</span>';
  }
}