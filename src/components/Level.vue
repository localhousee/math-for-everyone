<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import Game from "@/layouts/Game.vue";
import { generateQuestion } from "@/utilities/questions";

const level = useRoute().params.level;
let question = ref({
  title: "",
  description: "",
  answer: 0,
});
const solved = ref(0);
question.value = generateQuestion(level);
const userInput = ref("");
const isWrong = ref(false);
const checkAnswer = () => {
  if (parseInt(userInput.value) === question.value.answer) {
    solved.value++;
    isWrong.value = false;
    question.value = generateQuestion(level);
    userInput.value = "";
  } else {
    isWrong.value = true;
    setTimeout(() => isWrong.value = false, 5000);
  }
}
const refreshQuestion = () => question.value = generateQuestion(level);
</script>
<template>
  <Game :title="`Level ${level}`">
    <div class="px-12 w-full text-center lg:text-start">
      <p>Problem solved: {{ solved }}</p>
      <p class="py-4 text-pink-700 font-semibold">{{ question.title }}</p>
      <p>{{ question.description }}? <button @click="refreshQuestion" class="underline text-pink-900">Change question</button></p>
      <div class="flex space-x-2 items-center pt-12 justify-center">
        <input type="tel" v-model="userInput" class="rounded-lg text-sm" />
        <button @click="checkAnswer" class="px-4 py-2 bg-pink-500 text-white rounded lg:ml-4 disabled:bg-pink-700 disabled:cursor-not-allowed" :disabled="!userInput">Check</button>
      </div>
      <span v-show="isWrong" class="text-rose-500 font-bold">Wrong answer!</span>
    </div>
  </Game>
</template>