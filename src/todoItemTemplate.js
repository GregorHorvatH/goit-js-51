const todoItemTemplate = ({ id, text, isDone }) => `
<li class="todo-item" data-id="${id}">
  <input type="checkbox" name="todo-done" ${isDone ? 'checked' : ''} />
  <span>${text}</span>
  <button class="button delete">x</button>
</li>`;

export default todoItemTemplate;
