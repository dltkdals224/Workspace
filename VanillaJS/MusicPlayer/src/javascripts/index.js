// index.html과 App.js를 연결해주는 역할
import App from './App.js';

const config = {
    el: '#app'
};

new App(config).setup();