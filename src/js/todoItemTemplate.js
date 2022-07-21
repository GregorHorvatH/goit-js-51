const todoItemTemplate = ({ id, text, isDone }) =>
  `<li class="todo-item" data-id="${id}">
    <label>
      <input type="checkbox" name="todo-done" ${isDone ? 'checked' : ''} />
      <div class="col">
        <span>${text}</span>
        <span class="date-time">2022-07-21 19:35</span>
      </div>
    </label>
    <button class="button danger">x</button>
  </li>`;

export default todoItemTemplate;
