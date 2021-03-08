import { createApp } from 'vue'
import 'bulma/css/bulma.css';
import '@/assets/main.css';
import { store } from './store/index';
import App from './App.vue';

const app = createApp(App);

app.use(store)
app.mount('#app');
