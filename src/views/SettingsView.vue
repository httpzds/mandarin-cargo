<template>
    <div class="nav-fixed">
        <div class="accaunt">
            <span class="id">
                jp7654321
            </span>
            <span class="phone">
                +998914444444
            </span>
        </div>
        <div class="settings">
            <Select v-model="selectedLang" :options="languages" optionLabel="name" placeholder="Lang"
                class="w-full md:w-26" />
            <Button class="cog" type="button" icon="pi pi-cog" size="large" style="color: black;" />
        </div>
    </div>

    <div class="balance-panel">
        <Panel class="wallet">
            <div class="panel-header">
                <i class="pi pi-wallet icon"></i>
                <span>Wallet</span>
            </div>
            <div class="panel-content">
                <!-- <span class="balance">Balance: $100</span> -->
                <span class="balance">$ 100</span>
            </div>
        </Panel>
        <Panel class="bonus">
            <div class="panel-header">
                <i class="pi pi-gift icon"></i>
                <span>Bonus</span>
            </div>
            <div class="panel-content">
                <!-- <span class="balance">Bonus: $10</span> -->
                <span class="balance">$ 20</span>
            </div>
        </Panel>
    </div>
</template>


<script setup>
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Select from 'primevue/select';

import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const selectedLang = ref();
const languages = ref([
    { name: 'Uzbek', code: 'UZ' },
    { name: 'Russian', code: 'RU' },
    { name: 'English', code: 'EN' },
]);
</script>

<style scoped>
.nav-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    z-index: 1000;
}

.balance-panel {
    display: flex;
    gap: 10px;
    margin-top: 60px;
}

.balance-panel .wallet,
.balance-panel .bonus {
    flex: 1;
    border-radius: 13px;
    padding: 3px;
}

.panel-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #f8f8f8;
    margin-top: -15px;
}

.icon {
    font-size: 22px;
    color: #ffffff;
}

.panel-content {
    margin-top: 10px;
    font-size: 14px;
    color: #f3f3f3;
}

.wallet{
    background-color: #007bff;
}

.bonus{
    background-color: #9617e6dd;
}

.balance {
    display: block;
    text-align: left;
}

.accaunt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: -1px;
}

.accaunt .id {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.accaunt .phone {
    font-size: 12px;
    color: #555;
}

.settings {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-right: -5px;
}

.cog {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.w-full {
    width: auto !important;
}
</style>
