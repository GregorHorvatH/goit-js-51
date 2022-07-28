const newsTemplate = ({ url, title }) =>
  `<a href="${url}" target="_blank">
    <span>${title}</span>
  </a>`;

export default newsTemplate;
