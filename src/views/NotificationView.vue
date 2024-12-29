<template>
    <div class="avatar">
        <Avatar :image="logo" class="mr-2" />
        <h3>{{$t('news')}}</h3>
    </div>
    <div class="menu">
        <ul>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: blue; border: none;">
                            <i class="pi pi-box" style="color: white;"></i>
                        </div>
                        <span>{{$t('parcel')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: yellow; border: none;">
                            <i class="pi pi-book" style="color: black;"></i>
                        </div>
                        <span>{{$t('news')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: blue; border: none;">
                            <i class="pi pi-wallet" style="color: white;"></i>
                        </div>
                        <span>{{$t('wallet')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: rebeccapurple; border: none;">
                            <i class="pi pi-star" style="color: white;"></i>
                        </div>
                        <span>{{$t('bonus')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: green; border: none;">
                            <i class="pi pi-thumbs-up" style="color: white;"></i>
                        </div>
                        <span>{{$t('rating')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: rebeccapurple; border: none;">
                            <i class="pi pi-map" style="color: white;"></i>
                        </div>
                        <span>{{$t('new-branch')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: red; border: none;">
                            <i class="pi pi-truck" style="color: white;"></i>
                        </div>
                        <span>{{$t('home-delivery')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="menu-link">
                    <div class="menu-item">
                        <div class="icon-box" style="background-color: yellowgreen; border: none;">
                            <i class="pi pi-phone" style="color: white;"></i>
                        </div>
                        <span>{{$t('support')}}</span>
                        <i class="arrow pi pi-chevron-right"></i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';

import logo from "@/assets/logo.png";
</script>

<style scoped>
.avatar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -15px;
}

.menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.menu-link {
    text-decoration: none;
    color: inherit;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
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
    font-size: 11px;
}
</style>
