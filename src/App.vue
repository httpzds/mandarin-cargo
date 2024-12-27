<template>
  <div>
    <div class="fixed-nav">
      <Button class="nav-item" icon="pi pi-home" variant="text" rounded aria-label="Home" as="router-link" to="/" size="large"/>
      <Button class="nav-item" icon="pi pi-shopping-bag" variant="text" rounded aria-label="Bag" as="router-link" to="/orders" size="large"/>
      <Button class="nav-item" icon="pi pi-bell" variant="text" rounded aria-label="Bell" as="router-link" to="/news" size="large"/>
      <Button class="nav-item" icon="pi pi-bars" variant="text" rounded aria-label="Bar" as="router-link" to="/settings" size="large"/>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style>
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
  /* background-color: rgba(0, 123, 255, 0.9); */
  background-color: rgba(180, 244, 185, 0.9);
}
</style>