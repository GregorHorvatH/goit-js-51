import moment from 'moment';

// const formatDate = dateMillis => {
//   const createdAt = new Date(dateMillis);
//   const year = createdAt.getFullYear();
//   const month = (createdAt.getMonth() + 1).toString().padStart(2, 0);
//   const day = createdAt.getDate().toString().padStart(2, 0);
//   const hours = createdAt.getHours().toString().padStart(2, 0);
//   const minutes = createdAt.getMinutes().toString().padStart(2, 0);
//   const seconds = createdAt.getSeconds().toString().padStart(2, 0);

//   return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`; // YYYY/MM/DD HH:MM:SS
// };

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const todoItemTemplate = ({ id, text, isDone, date, deadline }) => {
  // const formattedDate = formatDate(date);
  const created = moment(date).format(DATE_FORMAT);
  const endDate = deadline ? moment(deadline).format('YYYY-MM-DD') : '--';

  return `<li class="todo-item" data-id="${id}">
    <label>
      <input type="checkbox" name="todo-done" ${isDone ? 'checked' : ''} />
      <div class="col">
        <span>${text}</span>
        <span class="date-time">created: ${created}</span>
        <span class="date-time">deadline: ${endDate}</span>
      </div>
    </label>

    <div>
      <button class="button success" data-type="view">view</button>
      <button class="button danger" data-type="remove">x</button>
    </div>
  </li>`;
};

export default todoItemTemplate;
