// CRUD
// Create, Read, Update, Delete

export const createTodo = newTodo => {
  const items = readTodos();

  items.unshift(newTodo);
  localStorage.setItem('todos', JSON.stringify(items));
};

export const readTodos = () => {
  let items = [];

  try {
    items = JSON.parse(localStorage.getItem('todos'));
  } catch (error) {
    console.log(error);
  }

  return items || [];
};

export const updateTodo = id => {
  let items = readTodos();

  items = items.map(item =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item,
  );
  localStorage.setItem('todos', JSON.stringify(items));
};

export const deleteTodo = id => {
  let items = readTodos();

  items = items.filter(item => item.id !== id);
  localStorage.setItem('todos', JSON.stringify(items));
};

export const saveTodosForm = formData => {
  localStorage.setItem('todosFormData', JSON.stringify(formData));
};

export const loadTodosForm = () => {
  let formData = {};

  try {
    formData = JSON.parse(localStorage.getItem('todosFormData'));
  } catch (error) {
    console.log(error);
  }

  return formData || {};
};
