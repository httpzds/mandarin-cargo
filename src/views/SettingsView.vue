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
            <SelectLang />
            <!-- <Button class="lang" type="button" icon="pi pi-language" size="large" style="color: black;" /> -->
            <Drawer v-model:visible="visibleRight" header="Drawer" position="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </Drawer>
            <Button class="cog" type="button" @click="visibleRight = true" icon="pi pi-cog" size="large"
                style="color: black;" />
        </div>
    </div>
    <div class="balance-panel">
        <Panel class="wallet">
            <div class="panel-header">
                <i class="pi pi-wallet icon"></i>
                <span>{{ $t('wallet') }}</span>
            </div>
            <div class="panel-content">
                <!-- <span class="balance">Balance: $100</span> -->
                <span class="balance">$ 100</span>
            </div>
        </Panel>
        <Panel class="bonus">
            <div class="panel-header">
                <i class="pi pi-gift icon"></i>
                <span>{{ $t('bonus') }}</span>
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
                            <span class="title">{{$t('personal-info')}}</span>
                            <span class="client"><i class="pi pi-exclamation-circle"></i>{{$t('enter-info')}}</span>
                        </div>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <img :src="branch" alt="User photo" class="info-photo" />
                        <div class="content">
                            <span class="title">{{$t('your-branches')}}</span>
                            <span class="client"><i class="pi pi-exclamation-circle"></i>{{$t('enter-branches')}}</span>
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
                <span class="referral-bonus">{{ $t('ref-panel.bonus') }}</span>
                <p>{{ $t('ref-panel.desc') }}</p>
                <Button class="referral-button" :label="$t('ref-panel.btn')" />
                <!-- <ButtonLink/> -->
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
import Drawer from 'primevue/drawer';

import id_card from '@/assets/id.png';
import branch from '@/assets/branch.png';

import SelectLang from '@/components/SelectLang.vue';
// import ButtonLink from '@/components/ButtonLink.vue';

import { ref } from 'vue';

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const loading = ref(false);
const visibleRight = ref(false);

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

<style>
.p-drawer-right .p-drawer {
    max-width: 14rem;
    height: 99.7%;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.nav-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .625rem 1.25rem;
    box-shadow: 0 -0.125rem .625rem rgba(0, 0, 0, 0.1);
    background-color: white;
    z-index: 1000;
}

.balance-panel {
    display: flex;
    gap: .625rem;
    margin-top: 3.75rem;
}

.balance-panel .wallet,
.balance-panel .bonus {
    flex: 1;
    border-radius: .8125rem;
    padding: .1875rem;
}

.panel-header {
    display: flex;
    align-items: center;
    gap: .625rem;
    font-size: 1rem;
    font-weight: bold;
    color: #f8f8f8;
    margin-top: -0.9375rem;
}

.icon {
    font-size: 1.375rem;
    color: #ffffff;
}

.panel-content {
    margin-top: .625rem;
    font-size: .875rem;
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
    margin-left: -0.0625rem;
}

.accaunt .id {
    font-weight: bold;
    font-size: 1.375rem;
    margin-bottom: .3125rem;
    text-transform: uppercase;
}

.accaunt .phone {
    font-size: .75rem;
    color: #555;
}

.settings {
    display: flex;
    gap: .625rem;
    align-items: center;
    margin-right: -0.3125rem;
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

.menu-info li{
    margin-bottom: -7px;
}

.menu-info {
    margin-top: .625rem;
}

.menu-link {
    text-decoration: none;
    color: inherit;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem 0;
}

.menu-item .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.icon-box {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: .125rem solid;
    border-radius: 50%;
    margin-right: .625rem;
}

.icon-box i {
    font-size: 17.6px;
    color: white;
}

.menu-item span {
    flex: 1;
    margin-left: .3125rem;
}

.arrow {
    color: grey;
    font-size: .875rem;
    margin-left: auto;
}

.info-photo {
    width: 2.8125rem;
    height: 2.8125rem;
    /* border-radius: 50%; */
    object-fit: cover;
    margin-right: .5rem;
    background-color: transparent;
}


.title {
    color: #808080;
    font-size: .75rem;
    margin-bottom: .1875rem;
}

.client {
    color: #007bff;
    font-size: .875rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.client i {
    margin-right: .375rem;
}

.referral-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.25rem;
}

.referral {
    background: linear-gradient(80deg, hsl(228, 94%, 59%), #15eefd);
    padding: .625rem;
    border-radius: .9375rem;
    text-align: center;
    color: white;
    width: 100%;
}

.referral-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .625rem;
}

.referral-bonus {
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: -1.375rem;
}

.referral p {
    margin: 0;
    font-size: .875rem;
    color: white;
    margin-bottom: .25rem;
}

.referral .p-button {
    background-color: white;
    background-clip: border-box;
    font-size: 1rem;
    font-weight: bold;
    padding: .625rem 1.25rem;
    border-radius: .625rem;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color: transparent;
    margin-bottom: -0.5rem;
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
    gap: 1.25rem;
    justify-content: space-between;
    margin-top: 1.25rem;
    margin-bottom: 2.8125rem;
}

.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(50% - .625rem);
    background-color: #f9f9f9;
    padding: .625rem;
    border-radius: .625rem;
    box-shadow: 0 .125rem .3125rem rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
}

.card-pic {
    width: 3.125rem;
    height: 3.125rem;
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
