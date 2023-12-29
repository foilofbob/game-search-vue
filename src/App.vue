<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Giant Bomb Game Repository</h1>
      <nav>
        <RouterLink to="/">Search</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
}

header .wrapper {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
