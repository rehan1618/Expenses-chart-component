import data from './data.json' assert { type: 'json' };

const chartBars = document.querySelectorAll('.days');
const chart = document.querySelector('.chart');

const chartList = Array.from(chartBars);

let mostExpensiveDay = 0;
let mostExpensiveDayIndex = 0;

chart.addEventListener('mouseover', (e) => {
  if (e.target.className === 'bar') {
    e.target.style.opacity = '70%';
    e.target.previousElementSibling.classList.add('visible');
  }
});
chart.addEventListener('mouseout', (e) => {
  if (e.target.className === 'bar') {
    e.target.style.opacity = '100%';
    e.target.previousElementSibling.classList.remove('visible');
  }
});

for (let i = 0; i < chartList.length; i++) {
  const item = chartList[i];
  item.firstElementChild.innerText = `$ ${data[i].amount}`;
  const newHeight = Math.floor(data[i].amount) / 3;
  item.firstElementChild.nextElementSibling.style.height = `${newHeight}rem`;
  if (data[i].amount > mostExpensiveDay) {
    mostExpensiveDay = data[i].amount;
    mostExpensiveDayIndex = i;
  }
}
chartList[
  mostExpensiveDayIndex
].firstElementChild.nextElementSibling.style.backgroundColor =
  'hsl(186, 34%, 60%)';
