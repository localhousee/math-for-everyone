<script setup lang="ts">
import { computed, ref } from "vue";
import arrayOfLevel from "@/utilities/levels";
import Main from "@/layouts/Main.vue";

const levels = arrayOfLevel;
const level = ref(0);
const showLevelDescription = ref(false);

const decrement = () => { if (level.value > 0) level.value-- };
const increment = () => { if (level.value < 11) level.value++ };

const currentLevel = computed(() => level.value + 1);
const toggleText = computed(() => showLevelDescription.value === true ? "Hide" : "Show");
const isFirstLevel = computed(() => currentLevel.value === 1);
const isLastLevel = computed(() => currentLevel.value === 12);
</script>
<template>
  <Main title="Help">
    <div class="flex flex-col w-full px-8 text-pink-900">
      <p class="text-2xl lg:text-4xl pb-4 lg:pb-6">How to play?</p>
      <p class="py-3 text-sm lg:text-lg">1. Choose your level, we have 12 levels. <button class="underline text-pink-500 hover:text-pink-700" @click="showLevelDescription = !showLevelDescription">{{ toggleText }} level</button></p>
      <div class="px-12 lg:max-w-md text-sm border border-pink-900 bg-pink-300/30 rounded-lg py-4" v-show="showLevelDescription">
        <div class="flex space-x-4 w-full justify-between pb-4">
          <button @click="decrement()" :disabled="isFirstLevel" :class="['uppercase', isFirstLevel ? 'text-gray-600' : 'text-pink-900']">prev</button>
          <span class="font-semibold">Level {{ currentLevel }}</span>
          <button @click="increment()" :disabled="isLastLevel" :class="['uppercase', isLastLevel ? 'text-gray-600' : 'text-pink-900']">Next</button>
        </div>
        <ul class="list-disc list-outside text-sm">
          <li v-for="item in levels[level]" class="lg:font-semibold">{{ item }}</li>
        </ul>
      </div>
      <p class="py-3 text-sm lg:text-lg">2. It will generates 10 questions for you, solve it</p>
      <p class="py-3 text-sm lg:text-lg">3. There's no time limit so please <span class="italic">enjoy</span> solve problems</p>
      <router-link to="/" class="py-3 text-sm underline text-pink-500 hover:text-pink-700">Back to Menu</router-link>
    </div>
  </Main>
</template>