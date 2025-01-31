const buttons = document.querySelectorAll('.card-buttons button');
const sections = document.querySelectorAll('.card-section');
const card = document.querySelector('.card');
const time = document.querySelector('.card-contact .time');

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute('data-section');
  const section = document.querySelector(targetSection);
  targetSection !== '#about'
    ? card.classList.add('is-active')
    : card.classList.remove('is-active');

  card.setAttribute('data-state', targetSection);
  sections.forEach((s) => s.classList.remove('is-active'));
  buttons.forEach((b) => b.classList.remove('is-active'));
  e.target.classList.add('is-active');
  section.classList.add('is-active');
};

buttons.forEach((btn) => {
  btn.addEventListener('click', handleButtonClick);
});

function updateTime() {
  const now = new Date();

  let utchours = now.getUTCHours();
  let utcminutes = now.getUTCMinutes();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  utcDiff = hours - utchours;
  document.getElementById('time').textContent = `${hours}:${minutes} (UTC${
    utcDiff >= 1 ? `+${utcDiff}` : `-${utcDiff}`
  })
    `;
}
updateTime();
setInterval(updateTime, 1000);
