import './view/style.css'
import template from './view/templates/matriz.hbs?raw'
import Handlebars from 'handlebars';
import imgX from './assets/X.png';
import imgO from './assets/O.png';

const matriz = Handlebars.compile(template);
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = matriz({ imgX, imgO });
