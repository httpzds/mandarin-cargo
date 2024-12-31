<template>
    <div class="wallet-chip">
        <!-- <Chip label="$ 567 " icon="pi pi-wallet"  /> -->
        <Tag icon="pi pi-wallet" severity="success" value="" rounded>$ 567</Tag>
    </div>
    <div class="avatar flex justify-center align-items-center">
        <Avatar :image="logo" class="mr-2" size="large" />
        <h1>{{ $t('title') }}</h1>
    </div>
    <div class="card justify-center">
        <!-- <InputText class="w-full pi pi-search" type="text" v-model="value" placeholder="Search"/> -->
        <!-- <div class="p-input-icon-left w-full">
            <i class="pi pi-search"></i>
            <InputText type="text" v-model="value" placeholder="Search" />
        </div> -->
        <InputGroup>
            <InputGroupAddon>
                <Button icon="pi pi-search" severity="secondary" variant="text" />
            </InputGroupAddon>
            <InputText :placeholder="$t('placeholders.search')" />
        </InputGroup>
    </div>
    <!-- <Panel class="panel">
        <PanelMenu :model="items" class="w-full md:w-80 panel-menu" />
    </Panel> -->
    <Panel class="panel">
        <PanelMenu :model="items" class="w-full md:w-80 panel-menu">
            <template #item="{ item }">
                <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer group"
                    @click="navigateToUrl(item.url)">
                    <span :class="[item.icon, 'text-primary group-hover:text-inherit']" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </a>
            </template>
        </PanelMenu>
    </Panel>
</template>

<script setup>
import { ref } from "vue";
import PanelMenu from 'primevue/panelmenu';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar';
import InputGroup from 'primevue/inputgroup';
import Button from 'primevue/button';
import InputGroupAddon from 'primevue/inputgroupaddon';

// import { defineComponent } from "vue";

import { useI18n } from "vue-i18n";

import logo from "@/assets/logo.png";

const { t } = useI18n();

const navigateToUrl = (url) => {
    if (url) {
        window.location.href = url;
    }
};

const items = ref([
    {
        label: t('pending'),
        icon: 'pi pi-clock',
        badge: 3,
        url: 'https://picsum.photos/',
        items: [
            {
                label: 'Documents',
                icon: 'pi pi-file',
                url: 'https://picsum.photos/',
                items: [
                    {
                        label: 'Invoices',
                        icon: 'pi pi-file-pdf',
                        url: 'https://picsum.photos/',
                        items: [
                            {
                                label: 'Pending',
                                icon: 'pi pi-stop',
                                url: 'https://picsum.photos/'
                            },
                            {
                                label: 'Paid',
                                icon: 'pi pi-check-circle',
                                url: 'https://picsum.photos/'
                            }
                        ]
                    },
                    {
                        label: 'Clients',
                        icon: 'pi pi-users',
                        url: 'https://picsum.photos/'
                    }
                ]
            },
            {
                label: 'Images',
                icon: 'pi pi-image',
                url: 'https://picsum.photos/',
                items: [
                    {
                        label: 'Logos',
                        icon: 'pi pi-image',
                        url: 'https://picsum.photos/'
                    }
                ]
            }
        ]
    },
    {
        label: t('in-stock'),
        icon: 'pi pi-warehouse',
        url: 'https://picsum.photos/'
    },
    {
        label: t('on-the-way'),
        icon: 'pi pi-truck',
        url: 'https://picsum.photos/'
    },
    {
        label: t('sorting'),
        icon: 'pi pi-clipboard',
        url: 'https://picsum.photos/'
    },
    {
        label: t('in-delivery'),
        icon: 'pi pi-box',
        url: 'https://picsum.photos/'
    },
    {
        label: t('pick-up'),
        icon: 'pi pi-shop',
        url: 'https://picsum.photos/'
    },
    {
        label: t('accepted'),
        icon: 'pi pi-cart-plus',
        url: 'https://picsum.photos/'
    },
]);
</script>


<style>
.wallet-chip {
    display: flex;
    justify-content: end;
    align-items: end;
    margin-top: -0.375rem;
    margin-bottom: -1.625rem;
}

.wallet-chip .bg-primary {
    background-color: rebeccapurple;
}

.bg-primary {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .625rem;
    border-radius: 50%;
}

.avatar {
    margin-bottom: .3125rem;
}

.card {
    margin-bottom: .875rem;
}

.panel {
    padding: 0;
}

.panel-menu {
    margin-top: -1rem;
}
</style>