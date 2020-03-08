import Vue from 'vue';
import App from './components/App.vue';
import './assets/index.less';

const vm = new Vue({
    name: "vue-with-webpack",
    data() {
        return {
            text: "Hello Webpack!!!"
        };
    },
    render(h) {
        return h(App);
    }
});

vm.$mount("#app");