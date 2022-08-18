// CRUD
// Create, Read, Update, Delete

import axios from 'axios';

axios.defaults.baseURL = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1';

// ----- axios -----
export const readTodos = () =>
  axios.get('http://localhost:8080/todos').then(({ data }) => data);

export const createTodo = newTodo =>
  axios.post('/todos', newTodo).then(({ data }) => data);

export const updateTodo = (id, payload) =>
  axios.put(`/todos/${id}`, payload).then(({ data }) => data);

export const deleteTodo = id => axios.delete(`/todos/${id}`);

// ----- fetch -----
// export const readTodos = () =>
//   fetch('https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1uyi').then(res => {
//     if (res.ok) {
//       return res.json();
//     }

//     throw new Error(res.statusText);
//   });

// export const createTodo = newTodo =>
//   fetch(URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newTodo),
//   }).then(res => res.json());

// export const updateTodo = (id, payload) =>
//   fetch(`${URL}/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

// export const deleteTodo = id => fetch(`${URL}/${id}`, { method: 'DELETE' });

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

      // reject('error happened');
      resolve(formData || {});
    }, 600);
  });
