<template>
    <div class="language-comp">
        <!-- <Select v-model="selectedLang" :options="languages" optionLabel="name" placeholder="Lang" class="w-full md:w-26" /> -->
        <Button class="lang" type="button" icon="pi pi-language" size="large" style="color: black;" @click="switchLang" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';

import { useI18n } from "vue-i18n";

const { t, locale } = useI18n(); 

const switchLang = () => {
    const availableLangs = ['en', 'ru', 'uz'];
    const currentIndex = availableLangs.indexOf(locale.value);
    const nextIndex = (currentIndex + 1) % availableLangs.length;
    locale.value = availableLangs[nextIndex];
    localStorage.setItem('lang', locale.value);
};


// const selectedLang = ref();
// const languages = ref([
//     { name: 'Uzbek', code: 'UZ' },
//     { name: 'Russian', code: 'RU' },
//     { name: 'English', code: 'EN' },
// ]);
</script>

<style scoped>
.lang {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
</style>