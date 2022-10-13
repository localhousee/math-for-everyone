<script setup lang="ts">
defineProps({
  "title": String
})
</script>
<template>
  <div class="flex justify-center">
    <div class="w-full">
      <p class="text-pink-900/80 text-4xl lg:text-6xl text-center font-bold pt-24 lg:pt-16 pb-16" v-html="title" />
      <slot />
    </div>
    <div class="hidden lg:flex w-full items-center h-screen">
      <img src="calculator.png" alt="calculator" class="w-full h-full overflow-hidden">
    </div>
  </div>
</template>