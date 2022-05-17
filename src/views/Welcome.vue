<script setup lang="ts">
</script>

<template>
  <span v-if="$route.params.name.length <= 15 && $route.params.name.length >= 3" class="text-xl dark:text-white font-mono">Welcome, {{ $route.params.name }}!</span>
  <span v-if="$route.params.name.length > 15 || $route.params.name.length < 3" class="text-xl text-red-500 font-mono">Your name's length can't be greater than 15 or less than 3</span>
  <span class="text-gray-300 dark:text-dark-100">Dynamic Route</span>
</template>

<style>
</style>
