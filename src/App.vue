<script setup lang="ts">
import { MoonStarsIcon, Error404Icon, FriendsIcon, HomeIcon, SunIcon } from 'vue-tabler-icons';
import { toggleColorScheme, isDark } from './theme';
</script>

<template>
  <div>
    <div class="dark:bg-dark-800">
      <div class="fixed w-full top-0 h-[60px]">
        <div class="h-full px-4">
          <div class="flex items-center justify-between h-full w-full">
            <div class="flex">
              <div class="dark:text-white pr-1">
                <HomeIcon v-if="$route.name === 'Home'" />
                <FriendsIcon v-else-if="$route.name === 'Welcome'" />
                <Error404Icon v-else />
              </div>
              <span class="text-md dark:text-white font-bold">{{ $route.name ? $route.name : 'Not Found' }}</span>
            </div>
            <button class="outline-none" @click="toggleColorScheme()">
              <div class="text-blue-500 dark:text-yellow-300">
                <MoonStarsIcon v-if="!isDark" />
                <SunIcon v-else />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid place-items-center h-[calc(100vh)]">
        <div class="flex flex-col items-center text-center">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
