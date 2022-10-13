<script setup lang="ts">
import Main from "@/layouts/Main.vue";
</script>

<template>
  <Main title="Math for <br /> Everyone">
    <div class="flex justify-center w-full">
      <div class="flex flex-col justify-center mx-auto w-full px-24 lg:px-0 lg:w-[12rem] py-6 space-y-4 text-center">
        <button
          class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">Start</button>
        <router-link to="/help"
          class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">Help</router-link>
        <button
          class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">About</button>
      </div>
    </div>
  </Main>
</template>
