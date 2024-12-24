import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import 'primevue/resources/primevue.min.css';          // Основные стили
import 'primeicons/primeicons.css';                    // Иконки
import 'primeflex/primeflex.css';                      // Утилиты для Flexbox

import App from './App.vue';
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
