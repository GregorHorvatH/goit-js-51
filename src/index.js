import axios from 'axios';
import './styles.css';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  loader: document.querySelector('.loader'),
  pages: document.querySelector('.pages'),
  loadMore: document.querySelector('.load-more'),
};

const HITS_PER_PAGE = 40;
let isLoading = false;
let items = [];
let query = '';
let currentPage = 0;
let totalPages = 0;

const renderList = items => {
  const list = items
    .map(({ title, url }) => `<ul><a href="${url}">${title}</a></ul>`)
    .join('');

  refs.list.insertAdjacentHTML('beforeend', list);
};

const loaderOn = () => refs.loader.classList.add('visible');

const loaderOff = () => refs.loader.classList.remove('visible');

const fetchData = () => {
  isLoading = true;
  loaderOn();

  axios
    .get(
      `/search?query=${query}&page=${currentPage}&hitsPerPage=${HITS_PER_PAGE}`,
    )
    .then(({ data }) => {
      items = [...items, data.hits];
      totalPages = data.nbPages;
      renderList(data.hits);
      // renderButtons();
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      loaderOff();
      isLoading = false;
    });
};

const handleSubmit = e => {
  e.preventDefault();

  if (query === e.target.elements.query.value) return;

  query = e.target.elements.query.value;
  refs.list.innerHTML = '';
  currentPage = 0;
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

refs.form.addEventListener('submit', handleSubmit);
// refs.loadMore.addEventListener('click', handleLoadMoreClick);
refs.list.addEventListener('scroll', handleWindowScroll);

// scrollHeight: 740
// scrollLeft: 0
// scrollTop: 20.5
// scrollWidth: 716

// clientHeight: 717
// clientLeft: 0
// clientTop: 0
// clientWidth: 716
