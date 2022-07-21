const todoItemTemplate = ({ id, text, isDone, date }) =>
  `<li class="todo-item" data-id="${id}">
    <label>
      <input type="checkbox" name="todo-done" ${isDone ? 'checked' : ''} />
      <div class="col">
        <span>${text}</span>
        <span class="date-time">${new Date(date)}</span>
      </div>
    </label>
    <button class="button danger">x</button>
  </li>`;

export default todoItemTemplate;
