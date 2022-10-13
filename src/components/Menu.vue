<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full">
      <p class="text-pink-900/80 text-4xl lg:text-6xl text-center font-bold pt-24 lg:pt-16 pb-16">Math for <br /> Everyone</p>
      <div class="flex justify-center w-full">
        <div class="flex flex-col justify-center mx-auto w-full px-24 lg:px-0 lg:w-[12rem] py-6 space-y-4">
          <button class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">Start</button>
          <button class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">Help</button>
          <button class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">About</button>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex w-full items-center h-screen">
      <img src="calculator.png" alt="calculator" class="w-full h-full overflow-hidden">
    </div>
  </div>
</template>
