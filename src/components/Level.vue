<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import Game from "@/layouts/Game.vue";
import { generateQuestion } from "@/utilities/questions";

const level = useRoute().params.level;
const problem = ref({
  title: "",
  question: "",
  answer: "",
});
const solved = ref(0);
problem.value = generateQuestion(level);
const userInput = ref("");
const isWrong = ref(false);
const checkAnswer = () => {
  if (userInput.value.toLowerCase() !== problem.value.answer) {
    isWrong.value = true;
    setTimeout(() => isWrong.value = false, 3000);
  } else {
    solved.value++;
    isWrong.value = false;
    problem.value = generateQuestion(level);
    userInput.value = "";
  }
}
const refreshQuestion = () => problem.value = generateQuestion(level);
</script>
<template>
  <Game :title="`Level ${level}`">
    <div class="px-12 w-full text-center lg:text-start">
      <p>Problem solved: {{ solved }}</p>
      <p class="py-4 text-pink-700 font-semibold">{{ problem.title }}</p>
      <div class="flex flex-col justify-center">
        <button @click="refreshQuestion" class="underline text-pink-900">Change question</button>
        <div v-html="problem.question"></div>
      </div>
      <div class="flex space-x-2 items-center pt-12 justify-center">
        <input type="tel" v-model="userInput" class="rounded-lg text-sm" />
        <button @click="checkAnswer"
          class="px-4 py-2 bg-pink-500 text-white rounded lg:ml-4 disabled:bg-pink-700 disabled:cursor-not-allowed"
          :disabled="!userInput">Check</button>
      </div>
      <p v-show="isWrong" class="text-rose-500 font-bold text-center">Wrong answer!</p>
    </div>
  </Game>
</template>