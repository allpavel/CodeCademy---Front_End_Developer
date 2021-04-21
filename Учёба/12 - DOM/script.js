// const textElement = document.querySelector('.lesson__text');
// const getComment = textElement.nextSibling;

// console.log(getComment);
// console.log(getComment.data);

// getComment.data = 'Hello World!';
// console.log(getComment.data);

// const newElement = document.createElement('div');
// newElement.innerHTML = `Живи, а работай в 
// <span class="yellow">свободное время!</span>`;
// console.log(newElement);

// const textElement = document.querySelector('.lesson__text');
// const newElement = document.createElement('div');
// newElement.innerHTML = `Живи, а работай в 
// <span class="yellow">свободное время!</span>`;

// textElement.before(newElement);

// const element = document.querySelector('.lesson__text');
// const elementClassNames = element.className;
// console.log(elementClassNames);
// element.classList.add('active');
// const element = document.querySelector('.lesson__text');
// element.classList.add('active');
// const elementClassNames = element.className;
// console.log(elementClassNames);

// if (element.classList.contains('active')) {
//     console.log('Active is in element!');
// };

// for (let className of element.classList) {
//     console.log(className);
// };

// // element.style.color = 'red';
// // element.style.marginLeft = '50px';

// console.log(element.style.color);

// element.style.cssText = `
//     color: red;
//     margin-left: 50px;
//     text-decoration: underline;
//     font-style: italic;`
// ;

const element = document.querySelector('.like');
const elementClassName = element.className;
console.log(elementClassName);
console.log(element);

const listEl = document.querySelectorAll('li');
console.log(listEl[1]);
const textList = listEl.innerHTML;
console.log(textList);