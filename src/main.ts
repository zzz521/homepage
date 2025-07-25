import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/styles/main.scss';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
