const modalTemplate = (text = '') =>
  `<div class="modal">
    <div class="modal-body">
      <p>${text}</p>
      <button>close</button>
    </div>
  </div>`;

export default modalTemplate;
