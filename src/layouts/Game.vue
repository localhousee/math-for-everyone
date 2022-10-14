<script setup lang="ts">
defineProps({
  title: String
});
</script>
<template>
<div class="flex justify-center">
  <div class="w-full">
    <p class="text-pink-900/80 text-4xl lg:text-6xl text-center font-bold pt-24 lg:pt-16 pb-16" v-html="title" />
    <slot />
  </div>
  <div class="hidden lg:flex w-3/4 items-center h-screen justify-center">
    <img src="/chalkboard.png" alt="calculator" class="w-3/4 h-3/4 overflow-hidden">
  </div>
</div>
</template>