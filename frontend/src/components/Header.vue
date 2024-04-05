<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="px-5 flex justify-between items-center h-[10vh]">
    <RouterLink to="/" class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[35px] -translate-y-1">
        <path
          stroke="#eeaa00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="33"
          d="m479.09 131.427-96.134 51.397M129.52 262.152l124.408 66.511m124.667-66.51-124.407 66.51m-.26 0v135.532m133.437-206.838L253.928 186.05l-133.437 71.307v142.61l133.437 71.306 133.438-71.306zM256 40.728v80.073M32.91 131.428l96.135 51.396"
        />
      </svg>
      <h1 class="text-2xl">
        <span class="text-primary">Escrin</span>&nbsp;<span class="text-accent">Observer</span>
      </h1>
    </RouterLink>
    <slot />
  </header>
</template>
