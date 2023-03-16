import App from './app';

const app = new App();
const appElem = document.querySelector('#app');
appElem?.append(app.render());