import { router } from './router';
import { createApp } from 'vue';
import App from './App.vue';

import 'virtual:windi-devtools';
import 'virtual:windi.css';
import "vue-tabler-icons";

const app = createApp(App);

app.use(router);
app.mount('#app');
