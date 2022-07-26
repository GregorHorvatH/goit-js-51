const todoItemTemplate = ({ id, text, isDone, date }) =>
  `<li class="todo-item" data-id="${id}">
    <label>
      <input type="checkbox" name="todo-done" ${isDone ? 'checked' : ''} />
      <div class="col">
        <span>${text}</span>
        <span class="date-time">${new Date(date)}</span>
      </div>
    </label>
    <button class="button success" data-type="view">view</button>
    <button class="button danger" data-type="remove">x</button>
  </li>`;

export default todoItemTemplate;
