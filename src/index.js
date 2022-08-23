import axios from 'axios';
import './styles.css';

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// &q=cats&per_page=5&page=10';
axios.defaults.baseURL =
  'https://pixabay.com/api?key=17035174-bfc38ce79fe188f7bfeb26d93';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  loader: document.querySelector('.loader'),
  pages: document.querySelector('.pages'),
  loadMore: document.querySelector('.load-more'),
};

const DEFAULT_CURRENT_PAGE = 1;
const HITS_PER_PAGE = 5;

let isLoading = false;
let items = [];
let query = '';
let currentPage = DEFAULT_CURRENT_PAGE;
let totalPages = 0;

const renderList = items => {
  const list = items
    // .map(({ title, url }) => `<li><a href="${url}">${title}</a></li>`)
    .map(
      ({ previewURL, pageURL }) =>
        `<li><a href="${pageURL}"><img src="${previewURL}" /></a></li>`,
    )
    .join('');

  refs.list.insertAdjacentHTML('beforeend', list);
};

const loaderOn = () => refs.loader.classList.add('visible');

const loaderOff = () => refs.loader.classList.remove('visible');

const fetchData = async () => {
  isLoading = true;
  loaderOn();

  try {
    const response = await fetch(
      `https://pixabay.com/api?key=17035174-bfc38ce79fe188f7bfeb26d93&q=${query}&per_page=${HITS_PER_PAGE}&page=${currentPage}`,
    );
    const data = await response.json();

    // const { data } = await axios.get(
    //   `&q=${query}&per_page=${HITS_PER_PAGE}&page=${currentPage}`,
    // );

    // then
    items = [...items, data.hits];
    totalPages = data.totalHits / HITS_PER_PAGE;
    renderList(data.hits);
  } catch (error) {
    console.log(error.message);
  }

  // finally
  loaderOff();
  isLoading = false;
};

const handleSubmit = e => {
  e.preventDefault();

  if (query === e.target.elements.query.value) return;

  query = e.target.elements.query.value;
  refs.list.innerHTML = '';
  currentPage = DEFAULT_CURRENT_PAGE;
  items = [];

  if (!query) return;

  fetchData();
};

const handleLoadMoreClick = () => {
  currentPage += 1;
  fetchData();
};

const handleWindowScroll = ({ target }) => {
  if (
    target.scrollTop + target.clientHeight + 10 >= target.scrollHeight &&
    !isLoading
  ) {
    handleLoadMoreClick();
  }
};

// const renderButtons = () => {
//   const buttonList = Array(totalPages)
//     .fill()
//     .map((_, idx) => `<button data-page=${idx}>${idx + 1}</button>`)
//     .join('');

//   refs.pages.innerHTML = '';
//   refs.pages.insertAdjacentHTML('beforeend', buttonList);
// };

// const handlePageClick = e => {
//   currentPage = e.target.dataset.page;
//   fetchData();
// };

// refs.pages.addEventListener('click', handlePageClick);

// refs.loadMore.addEventListener('click', handleLoadMoreClick);
refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('scroll', handleWindowScroll);

// ----- async / await -----
const myTimeout = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('in timeout');
      resolve();
    }, 1000);
  });

const fn1 = async () => {
  await myTimeout();

  console.log('after timeout');
};

console.log('start');
fn1();
console.log('end');
