import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/main.scss';
import 'virtual:svg-icons-register'; //引入svg虚拟模块，自动注册所有svg图标


createApp(App).mount('#app');
