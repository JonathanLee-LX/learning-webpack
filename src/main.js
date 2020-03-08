import _ from 'lodash'
import LowPoly from './assets/low-poly.png'

setTimeout(() => import('vue'), 5000)

function component() {
    var element = document.createElement('h1');
    element.innerHTML = _.join(['Hello', 'Webpack', 'With', 'Hot', 'module replacement'], ' ');
    element.classList.add('hello');
    element.style.textAlign = 'center';
    const back_img = new Image(800, 600);
    back_img.src = LowPoly;
    element.appendChild(back_img);
    return element;
}


function render() {
    document.querySelector('#app').appendChild(component());
}

window.onload = render;

if (module.hot) {
    module.hot.accept()
}
