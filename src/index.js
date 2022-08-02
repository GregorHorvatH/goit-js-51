import * as basicLightbox from 'basiclightbox';
import { v4 as uuidv4 } from 'uuid';
import todoItemTemplate from './js/todoItemTemplate.js';
import modalTemplate from './js/modalTemplate.js';
import mockData from './js/mockData.js';

import 'basiclightbox/dist/basicLightbox.min.css';
import './css/styles.css';

let items = mockData;

const refs = {
  todoList: document.querySelector('.todo-list'),
  form: document.querySelector('.form'),
  sortBy: document.querySelector('.sort-by'),
  queryInput: document.querySelector('.query-input'),
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
  };

  items.unshift(newTodo);
  render();
};

const handleSubmit = e => {
  e.preventDefault();
  addItem(e.target.elements.text.value);
  e.target.elements.text.value = '';
};

const handleQueryInput = e => {
  query = e.target.value.toLowerCase();

  render();
};

const handleSortChange = e => {
  sortBy = e.target.value.toLowerCase();

  render();
};

const removeItem = id => {
  items = items.filter(item => item.id !== id);

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

  render();
};

const viewItem = id => {
  const currentItem = items.find(item => item.id === id);
  const instance = basicLightbox.create(modalTemplate(currentItem.text));
  const button = instance.element().querySelector('button');

  button.addEventListener('click', instance.close);
  instance.show();
};

const onButtonClick = (type, id) => {
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
      onButtonClick(e.target.dataset.type, id);
      break;

    case 'INPUT':
      updateItem(id);
      break;
  }
};

render();

// ---- event listeners ----
refs.form.addEventListener('submit', handleSubmit);
refs.queryInput.addEventListener('input', handleQueryInput);
refs.sortBy.addEventListener('change', handleSortChange);
refs.todoList.addEventListener('click', handleItemClick);
