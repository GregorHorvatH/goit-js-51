// CRUD
// Create, Read, Update, Delete

export const readTodos = () =>
  new Promise(resolve => {
    setTimeout(() => {
      let items = [];

      try {
        items = JSON.parse(localStorage.getItem('todos'));
      } catch (error) {
        console.log(error);
      }

      // reject('Error happened, lol :)');
      resolve(items || []);
    }, 500);
  });

export const createTodo = newTodo => {
  readTodos().then(items => {
    items.unshift(newTodo);
    localStorage.setItem('todos', JSON.stringify(items));
  });
};

export const updateTodo = id => {
  readTodos().then(items => {
    items = items.map(item =>
      item.id === id
        ? {
            ...item,
            isDone: !item.isDone,
          }
        : item,
    );
    localStorage.setItem('todos', JSON.stringify(items));
  });
};

export const deleteTodo = id => {
  readTodos().then(items => {
    items = items.filter(item => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(items));
  });
};

export const saveTodosForm = formData => {
  localStorage.setItem('todosFormData', JSON.stringify(formData));
};

export const loadTodosForm = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let formData = {};

      try {
        formData = JSON.parse(localStorage.getItem('todosFormData'));
      } catch (error) {
        console.log(error);
      }

      reject('error happened');
      // resolve(formData || {});
    }, 600);
  });
