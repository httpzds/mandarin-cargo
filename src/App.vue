<template>
  <div>
    <div class="main-nav">
      <Button class="nav-item" as="router-link" label="Bosh sahifa" to="/" />
      <Button class="nav-item" as="router-link" label="Buyurtmalar" to="/orders" />
    </div>
    
    <div class="fixed-nav">
      <Button class="nav-item" icon="pi pi-home" as="router-link" to="/" />
      <Button class="nav-item" icon="pi pi-shopping-bag" as="router-link" to="/orders" />
      <Button class="nav-item" icon="pi pi-bell" as="router-link" to="/profile" />
      <Button class="nav-item" icon="pi pi-bars" as="router-link" to="/settings" />
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style>
.main-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.fixed-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  text-decoration: none;
  color: white;
  background-color: transparent;
  border: none;
  font-weight: bold;
}

.nav-item:hover {
  background-color: rgba(0, 123, 255, 0.7);
  cursor: pointer;
}

.nav-item.router-link-exact-active {
  background-color: rgba(0, 123, 255, 0.9);
}
</style>
