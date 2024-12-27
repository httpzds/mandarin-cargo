<template>
    <div class="avatar flex justify-center align-items-center">
        <Avatar :image="logo" class="mr-2" size="large" />
        <h1>Mandarin Cargo</h1>
    </div>
    <div class="card justify-center">
        <!-- <InputText class="w-full pi pi-search" type="text" v-model="value" placeholder="Search"/> -->
        <!-- <div class="p-input-icon-left w-full">
            <i class="pi pi-search"></i>
            <InputText type="text" v-model="value" placeholder="Search" />
        </div> -->
        <InputGroup>
            <InputGroupAddon>
                <Button icon="pi pi-search" severity="secondary" variant="text"/>
            </InputGroupAddon>
            <InputText placeholder="Keyword" />
        </InputGroup>
    </div>
    <!-- <Panel class="panel">
        <PanelMenu :model="items" class="w-full md:w-80 panel-menu" />
    </Panel> -->
    <Panel class="panel">
        <PanelMenu :model="items" class="w-full md:w-80 panel-menu">
            <template #item="{ item }">
                <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer group">
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
import OverlayBadge from 'primevue/overlaybadge';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import InputGroup from 'primevue/inputgroup';
import Button from 'primevue/button';
import InputGroupAddon from 'primevue/inputgroupaddon';

import logo from "@/assets/logo.png";

const items = ref([
    {
        label: 'Pending',
        icon: 'pi pi-clock',
        badge: 3,
        items: [
            {
                label: 'Documents',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Invoices',
                        icon: 'pi pi-file-pdf',
                        items: [
                            {
                                label: 'Pending',
                                icon: 'pi pi-stop'
                            },
                            {
                                label: 'Paid',
                                icon: 'pi pi-check-circle'
                            }
                        ]
                    },
                    {
                        label: 'Clients',
                        icon: 'pi pi-users'
                    }
                ]
            },
            {
                label: 'Images',
                icon: 'pi pi-image',
                items: [
                    {
                        label: 'Logos',
                        icon: 'pi pi-image'
                    }
                ]
            }
        ]
    },
    {
        label: 'In Stock',
        icon: 'pi pi-warehouse',
        items: [
            {
                label: 'Upload',
                icon: 'pi pi-cloud-upload'
            },
            {
                label: 'Download',
                icon: 'pi pi-cloud-download'
            },
            {
                label: 'Sync',
                icon: 'pi pi-refresh'
            }
        ]
    },
    {
        label: 'On The Way',
        icon: 'pi pi-truck',
        items: [
            {
                label: 'Phone',
                icon: 'pi pi-mobile'
            },
            {
                label: 'Desktop',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Tablet',
                icon: 'pi pi-tablet'
            }
        ]
    },
    {
        label: 'Sorting',
        icon: 'pi pi-clipboard',
        items: [
            {
                label: 'Phone',
                icon: 'pi pi-mobile'
            },
            {
                label: 'Desktop',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Tablet',
                icon: 'pi pi-tablet'
            }
        ]
    },
    {
        label: 'In Delivery',
        icon: 'pi pi-box',
        items: [
            {
                label: 'Phone',
                icon: 'pi pi-mobile'
            },
            {
                label: 'Desktop',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Tablet',
                icon: 'pi pi-tablet'
            }
        ]
    },
    {
        label: 'At The Pick-Up Point',
        icon: 'pi pi-shop',
        items: [
            {
                label: 'Phone',
                icon: 'pi pi-mobile'
            },
            {
                label: 'Desktop',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Tablet',
                icon: 'pi pi-tablet'
            }
        ]
    },
    {
        label: 'Accepted',
        icon: 'pi pi-cart-plus',
        items: [
            {
                label: 'Phone',
                icon: 'pi pi-mobile'
            },
            {
                label: 'Desktop',
                icon: 'pi pi-desktop'
            },
            {
                label: 'Tablet',
                icon: 'pi pi-tablet'
            }
        ]
    },
]);
</script>

<style>
.avatar{
    margin-bottom: 5px;
}

.card{
    margin-bottom: 14px;
}

.panel{
    padding: 0;
}

.panel-menu{
    margin-top: -16px;
}
</style>