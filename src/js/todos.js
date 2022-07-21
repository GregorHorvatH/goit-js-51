import todoItemTemplate from './todoItemTemplate.js';
import mockData from './mockData.js';

const items = mockData;

const refs = {
  todoList: document.querySelector('.todo-list'),
  form: document.querySelector('.form'),
  sortBy: document.querySelector('.sort-by'),
  queryInput: document.querySelector('.query-input'),
};
let sortBy = '';
let query = '';

const sort = (filteredItems) => {
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

const addItem = (text) => {
  const newTodo = {
    id: uuid.v4(), // script imported from cdnjs
    text,
    isDone: false,
    date: Date.now(),
  };

  items.unshift(newTodo);
  render();
};

const handleRemoveItem = () => {
  items.shift();
  render();
};

const handleSubmit = (e) => {
  e.preventDefault();
  addItem(e.target.elements.text.value);
  e.target.elements.text.value = '';
};

const handleQueryInput = (e) => {
  query = e.target.value.toLowerCase();

  render();
};

const handleSortChange = (e) => {
  sortBy = e.target.value.toLowerCase();

  render();
};

render();

// ---- event listeners ----
refs.form.addEventListener('submit', handleSubmit);
refs.queryInput.addEventListener('input', handleQueryInput);
refs.sortBy.addEventListener('change', handleSortChange);
