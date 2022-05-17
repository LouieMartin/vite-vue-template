<script setup lang="ts">
import { MoonStarsIcon, SunIcon } from 'vue-tabler-icons';
import { isDark, toggleColorScheme } from './theme';
</script>

<template>
  <div>
    <div class="dark:bg-dark-800">
      <div class="h-[60px] flex align-center px-4">
        <div class="flex justify-between w-full">
          <button class="outline-none" @click="toggleColorScheme()">
            <div class="text-blue-500 dark:text-yellow-300">
              <MoonStarsIcon v-if="!isDark" />
              <SunIcon v-if="isDark" />
            </div>
          </button>
        </div>
      </div>
      <div class="grid place-items-center h-[calc(100vh-60px)]">
        <div class="flex flex-col items-center text-center">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
