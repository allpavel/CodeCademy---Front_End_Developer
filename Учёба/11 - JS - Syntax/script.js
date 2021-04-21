console.log('Hello World!');

let arr = ['Ваня', 'Паша', 'Маша'];

let delElem;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'Паша') {
        delElem = arr[i];
        arr.splice(i, 1);
    }
}

console.log(delElem);
console.log(arr);