import { getHiddenMessage } from './dom-function.js';

const ourButton = document.getElementById('secret-button');
const ourHiddenMessage = document.getElementById('secret-message');

ourButton.addEventListener('click', () => {getHiddenMessage(ourHiddenMessage)});