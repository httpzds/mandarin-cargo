import "./assets/main.css";

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { languages } from "./i18n";
import { defaultLocale } from "./i18n";
import { createI18n } from "vue-i18n";

import App from './App.vue';
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import router from './router';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const localeStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: localeStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false || 'none',
        }
    },
});

app.mount('#app');