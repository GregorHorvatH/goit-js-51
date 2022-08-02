import newsTemplate from './newsTemplate.js';

const URL = 'https://hn.algolia.com/api/v1/search';

const refs = {
  query: document.querySelector('.query'),
  loader: document.querySelector('.loader'),
  newsList: document.querySelector('.news-list'),
};

const showLoader = () => {
  refs.loader.classList.add('show');
  refs.newsList.classList.remove('show');
};

const hideLoader = () => {
  refs.loader.classList.remove('show');
  refs.newsList.classList.add('show');
};

const render = (hits) => {
  const list = hits
    .map(({ title, url }) => newsTemplate({ title, url }))
    .join('');

  refs.newsList.innerHTML = '';
  refs.newsList.insertAdjacentHTML('beforeend', list);
};

const handleQueryChange = (e) => {
  const query = e.target.value;

  if (!query) {
    refs.newsList.innerHTML = '';
    return;
  }

  showLoader();
  fetch(`${URL}?hitsPerPage=10&query=${query}`)
    .then((res) => res.json())
    .then(({ hits }) => render(hits))
    .finally(hideLoader);
};

function throttle(callback, delay) {
  let timerId = 0;

  return function (e) {
    if (timerId) return;

    timerId = setTimeout(() => {
      callback(e);
      timerId = 0;
    }, delay);
  };
}

function debounce(callback, delay) {
  let timerId = 0;

  return function (e) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(e);
      timerId = 0;
    }, delay);
  };
}

refs.query.addEventListener('input', debounce(handleQueryChange, 500));

// ----- question ------
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};

console.log(rps('paper', 'paper'));
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
