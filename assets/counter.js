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

  days.textContent = d < 10 ? `<span>0</span><span>${ d }</span>` : d.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  hours.textContent = h < 10 ? `<span>0</span><span>${ h }</span>` : h.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  minutes.textContent = m < 10 ? `<span>0</span><span>${ m }</span>` : m.toString().split('').map(digit => `<span>${ digit }</span>`).join("");
  seconds.textContent = s < 10 ? `<span>0</span><span>${ s }</span>` : s.toString().split('').map(digit => `<span>${ digit }</span>`).join("");


  if (diff < 0) {
    clearInterval(interval);
    days.textContent = '<span>0</span><span>0</span>';
    hours.textContent = '<span>0</span><span>0</span>';
    minutes.textContent = '<span>0</span><span>0</span>';
    seconds.textContent = '<span>0</span><span>0</span>';
  }
}