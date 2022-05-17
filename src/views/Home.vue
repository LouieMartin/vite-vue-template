<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const name = ref<string>('');
const router = useRouter();
const enter = () => {
  router.push(`/welcome/${encodeURIComponent(name.value)}`);
};
</script>

<template dark>
  <span class="text-xl dark:text-white font-mono">Vite Vue Template</span>
  <span class="text-gray-300 dark:text-dark-100">A Vite.js and Vue.js template for minimalists.</span>
  <input @keydown.enter="enter()" v-model="name" type="text" class="mt-10 border-light-900 border py-2 px-2 rounded-md outline-none text-center dark:border-dark-300 dark:text-white dark:placeholder-dark-100 bg-transparent" placeholder="What is your name?" />
  <input :disabled="name === ''" @click="enter()" type="submit" class="mt-3 px-5 py-1 disabled:bg-dark-900 dark:text-white dark:bg-dark-500 rounded font-semibold" value="Enter" />
</template>

<style>
</style>
