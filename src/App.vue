<template>
  <div>
    <div class="main-nav">
      <Button class="nav-item" as="router-link" label="Bosh sahifa" to="/" />
      <Button class="nav-item" as="router-link" label="Buyurtmalar" to="/orders" />
    </div>
    <router-view>

    </router-view>
  </div>
  
</template>

<script setup>
import Button from "primevue/button"
</script>

<style>
.nav-item {
  text-decoration: none;
}
.nav-item.router-link-exact-active {
  text-transform: uppercase;
}
</style>