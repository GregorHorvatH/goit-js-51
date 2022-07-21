console.log('module 06.1');

// console.log(document.getElementById('paraggraph-1'));
// console.log(document.querySelector('#paragraph-3'));
// console.log(document.querySelector('.paragraph-2'));
// console.log(document.querySelectorAll('p.paragraph-2'));

// ---- create lists dynamically, v.1 ----
// const names = ['Bobby', 'Peter', 'Chris'];
// const ul = document.createElement('ul');

// names.forEach((name) => {
//   const li = document.createElement('li');

//   li.classList = 'item';
//   li.textContent = name;
//   ul.appendChild(li);
// });

// document.querySelector('body').appendChild(ul);

// ---- create lists dynamically, v.2 ----
// const names = ['Bobby', 'Peter', 'Chris'];

// const ul = document.createElement('ul');
// const list = names.map((name) => `<li class="item">${name}</li>`);

// ul.insertAdjacentHTML('beforeend', list.join(''));
// document.querySelector('body').appendChild(ul);

// ---- example ----
// function removeExclamationMarks(s) {
// return s.replace(/!/g, ''); // replaceAll
// return s.replace('!', '');

// return s.replaceAll('L', 't');
// return s.replace(/l/gi, 't');
// }

// console.log(removeExclamationMarks('HelLo WorLd!'));
// console.log(removeExclamationMarks('HeLlo World!!!!!'));

// ----
