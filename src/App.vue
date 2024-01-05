<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="my-4 mx-auto">
      <h1 class="text-2xl text-center">Giant Bomb Game Repository</h1>
      <nav class="w-full text-baase text-center py-4 divide-x divide-slate-300">
        <RouterLink to="/" class="inline text-lg py-0 px-4 hover:ring hover:ring-slate-200 border-none">Search</RouterLink>
        <RouterLink to="/cart" class="inline text-lg py-0 px-4 hover:ring hover:ring-slate-200">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
