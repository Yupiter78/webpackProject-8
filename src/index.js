import "../index.css";
import JS_IMAGE from '../assets/javascript.png';

console.log('Hello world!');

const headingHTML = document.createElement('h1');
headingHTML.textContent = 'I love JavaScript';
document.body.append(headingHTML);

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);