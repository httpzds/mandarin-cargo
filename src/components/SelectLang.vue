<template>
    <div class="language-comp">
        <Select v-model="selectedLang" :options="languages" optionLabel="name" placeholder="Lang" class="w-full md:w-26" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedLang = ref();
const languages = ref([
    { name: 'Uzbek', code: 'UZ' },
    { name: 'Russian', code: 'RU' },
    { name: 'English', code: 'EN' },
]);
</script>

<style scoped>

</style>