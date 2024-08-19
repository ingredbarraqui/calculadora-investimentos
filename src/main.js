import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';

import LabelFromYup from './components/LabelFromYup.vue';
import './style/base.css';

const app = createApp(App);
const pinia = createPinia();

app.component('LabelFromYup', LabelFromYup);
app.use(pinia);
app.use(router)
app.mount('#app')
