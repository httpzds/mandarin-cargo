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
            <!-- <Select v-model="selectedLang" :options="languages" optionLabel="name" placeholder="Lang"
                class="w-full md:w-26" /> -->
            <Button class="lang" type="button" icon="pi pi-language" size="large" style="color: black;" />
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
    <div class="menu-info">
        <ul>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <img :src="id_card" alt="User photo" class="info-photo" />
                        <div class="content">
                            <span class="title">Personal information</span>
                            <span class="client"><i class="pi pi-exclamation-circle"></i>Enter your personal information</span>
                        </div>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                    <div class="menu-item">
                        <img :src="branch" alt="User photo" class="info-photo" />
                        <div class="content">
                            <span class="title">Your branches</span>
                            <span class="client"><i class="pi pi-exclamation-circle"></i>Enter information about branch</span>
                        </div>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <div class="referral-panel">
        <Panel class="referral">
            <div class="referral-header">
                <span class="referral-bonus">Get $20 Bonus</span>
                <p>Share the link to the app and get a bonus</p>
                <Button class="referral-button" label="Share Link" />
            </div>
        </Panel>
    </div>
    <div class="card-container">
        <div class="card" v-for="n in 6" :key="n">
            <div class="card-title">Title {{ n }}</div>
            <div class="card-pic">
                <img :src="branch" alt="Card image" />
            </div>
        </div>
    </div>
</template>


<script setup>
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Select from 'primevue/select';

import id_card from '@/assets/id.png';
import branch from '@/assets/branch.png';

import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

// const selectedLang = ref();
// const languages = ref([
//     { name: 'Uzbek', code: 'UZ' },
//     { name: 'Russian', code: 'RU' },
//     { name: 'English', code: 'EN' },
// ]);
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

.wallet {
    background-color: #007bff;
}

.bonus {
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

.lang {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.cog {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.w-full {
    width: auto !important;
}

.menu-info ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.menu-info{
    margin-top: 10px;
}

.menu-link {
    text-decoration: none;
    color: inherit;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}

.menu-item .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.icon-box {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 50%;
    margin-right: 10px;
}

.icon-box i {
    font-size: 1.1rem;
    color: white;
}

.menu-item span {
    flex: 1;
    margin-left: 5px;
}

.arrow {
    color: grey;
    font-size: 14px;
    margin-left: auto;
}

.info-photo {
    width: 45px;
    height: 45px;
    /* border-radius: 50%; */
    object-fit: cover;
    margin-right: 8px;
    background-color: transparent;
}


.title {
    color: #808080;
    font-size: 12px;
    margin-bottom: 3px;
}

.client {
    color: #007bff;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.client i{
    margin-right: 6px;
}

.referral-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.referral {
    background: linear-gradient(80deg, hsl(228, 94%, 59%), #15eefd);
    padding: 10px;
    border-radius: 15px;
    text-align: center;
    color: white;
    width: 100%;
}

.referral-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.referral-bonus {
    font-size: 18px;
    font-weight: bold;
    margin-top: -22px;
}

.referral p {
    margin: 0;
    font-size: 14px;
    color: white;
    margin-bottom: 4px;
}

.referral .p-button {
    background-color: white;
    background-clip: border-box;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden; 
    color: transparent;
    margin-bottom: -8px;
}

.referral .p-button::before {
    content: 'Share Link'; 
    background: linear-gradient(80deg, hsl(228, 94%, 59%), #15eefd); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    color: transparent;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1; 
}

.referral .p-button:hover {
    opacity: 0.9;
}

.referral-button {
    background-color: white;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 45px;
}

.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(50% - 10px);
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.card-pic {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
</style>
