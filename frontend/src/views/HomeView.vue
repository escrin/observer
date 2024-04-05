<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main>
      <table>
        <thead>
          <th>Host</th>
          <th>Operator</th>
          <th>Cloud</th>
          <th>Region</th>
          <th>Probe Successes</th>
        </thead>
      </table>
    </main>
  </div>
  <Footer>
    <RouterLink to="/register" class="button">Register a Node</RouterLink>
  </Footer>
</template>
