import _ from 'lodash';
import * as basicLightbox from 'basiclightbox';
import { v4 as uuidv4 } from 'uuid';
import flatpickr from 'flatpickr';
import moment from 'moment';
import todoItemTemplate from './js/todoItemTemplate';
import modalTemplate from './js/modalTemplate';
// import mockData from './js/mockData';
import {
  readTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  saveTodosForm,
  loadTodosForm,
} from './js/todosApi';

import 'basiclightbox/dist/basicLightbox.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import './css/styles.css';

// let items = mockData;
let items = [];

const refs = {
  clock: document.querySelector('.clock'),
  todoList: document.querySelector('.todo-list'),
  form: document.querySelector('.form'),
  formText: document.querySelector('.form-text'),
  sortBy: document.querySelector('.sort-by'),
  queryInput: document.querySelector('.query-input'),
  deadline: document.querySelector('.deadline'),
  loader: document.querySelector('.loader'),
};
let sortBy = '';
let query = '';

const sort = filteredItems => {
  switch (sortBy) {
    case 'name-asc':
      return [...filteredItems].sort((a, b) => a.text.localeCompare(b.text));

    case 'name-desc':
      return [...filteredItems].sort((a, b) => b.text.localeCompare(a.text));

    case 'done-asc':
      return [...filteredItems].sort((a, b) => a.isDone - b.isDone);

    case 'done-desc':
      return [...filteredItems].sort((a, b) => b.isDone - a.isDone);

    case 'date-asc':
      return [...filteredItems].sort((a, b) => a.date - b.date);

    case 'date-desc':
      return [...filteredItems].sort((a, b) => b.date - a.date);

    default:
      return filteredItems;
  }
};

const render = () => {
  const filteredItems = query
    ? items.filter(({ text }) => text.toLowerCase().includes(query))
    : items;
  const sortedItems = sort(filteredItems);
  const list = sortedItems.map(todoItemTemplate).join('');

  refs.todoList.innerHTML = '';
  refs.todoList.insertAdjacentHTML('beforeend', list);
};

const addItem = text => {
  const newTodo = {
    id: uuidv4(), // script imported from cdnjs
    text,
    isDone: false,
    date: Date.now(),
    deadline: moment(refs.deadline.value, 'DD/MM/YY').valueOf(),
  };

  createTodo(newTodo);
  items.unshift(newTodo);

  render();
};

const saveFormData = () =>
  saveTodosForm({ query, sortBy, input: refs.formText.value });

const handleSubmit = e => {
  e.preventDefault();
  addItem(e.target.elements.text.value);
  e.target.elements.text.value = '';
  refs.deadline.value = '';
  saveFormData();
};

const handleQueryInput = e => {
  query = e.target.value.toLowerCase();

  saveFormData();
  render();
};

const handleSortChange = e => {
  sortBy = e.target.value.toLowerCase();

  saveFormData();
  render();
};

const removeItem = id => {
  items = items.filter(item => item.id !== id);

  deleteTodo(id);
  render();
};

const updateItem = id => {
  items = items.map(item =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item,
  );

  updateTodo(id);
  render();
};

const viewItem = id => {
  const currentItem = items.find(item => item.id === id);
  const instance = basicLightbox.create(modalTemplate(currentItem.text));
  const button = instance.element().querySelector('button');

  button.addEventListener('click', instance.close);
  instance.show();
};

const onItemButtonClick = (type, id) => {
  switch (type) {
    case 'view':
      viewItem(id);
      break;

    case 'remove':
      removeItem(id);
      break;
  }
};

const handleItemClick = e => {
  const parent = e.target.closest('li');
  const { id } = parent.dataset;

  switch (e.target.nodeName) {
    case 'BUTTON':
      onItemButtonClick(e.target.dataset.type, id);
      break;

    case 'INPUT':
      updateItem(id);
      break;
  }
};

const readFormData = formData => {
  refs.formText.value = formData.input || '';
  refs.sortBy.value = formData.sortBy || '';
  refs.queryInput.value = formData.query || '';

  sortBy = formData.sortBy || '';
  query = formData.query || '';
};

const renderClock = () => {
  // const leesonEnd = moment(
  //   '2022-08-09 21:30:00',
  //   'YYYY-MM-DD HH:mm:ss',
  // ).valueOf();
  // const currentTime = moment().valueOf();
  // const diff = leesonEnd - currentTime;

  // let seconds = Math.floor(diff / 1000);
  // let minutes = Math.floor(seconds / 60);
  // let hours = Math.floor(minutes / 60);

  // seconds = seconds % 60;
  // minutes = minutes % 60;

  // refs.clock.textContent = `${hours}:${minutes}:${seconds}`;
  refs.clock.textContent = moment().format('YYYY-MM-DD HH:mm:ss');
};

flatpickr(refs.deadline, {
  allowInput: true,
  dateFormat: 'd/m/Y',
});

renderClock();
setInterval(renderClock, 1000);

refs.loader.classList.add('show');

// Promise.all([readTodos(), loadTodosForm()])
//   .then(([data, formData]) => {
//     items = data;
//     readFormData(formData);
//     render();
//   })
//   .catch(error => {
//     console.log('error:', error);
//   })
//   .finally(() => {
//     refs.loader.classList.remove('show');
//   });

Promise.allSettled([readTodos(), loadTodosForm()])
  .then(([{ value: data = [] }, { value: formData = {}, reason }]) => {
    items = data;
    readFormData(formData);
    render();

    if (reason) {
      console.log(reason);
    }
  })
  .catch(error => {
    console.log('error:', error);
  })
  .finally(() => {
    refs.loader.classList.remove('show');
  });

// ---- event listeners ----
refs.form.addEventListener('submit', handleSubmit);
refs.queryInput.addEventListener('input', handleQueryInput);
refs.sortBy.addEventListener('change', handleSortChange);
refs.todoList.addEventListener('click', handleItemClick);
refs.formText.addEventListener('input', _.throttle(saveFormData, 500));
