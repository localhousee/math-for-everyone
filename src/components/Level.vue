<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import Game from "@/layouts/Game.vue";
import { generateQuestion } from "@/utilities/questions";

const level = useRoute().params.level;
const { question, answer, title } = generateQuestion(1);
const solved = ref(0);
const checkAnswer = () => { };
</script>
<template>
<Game :title="`Level ${level}`">
  <div class="px-12">
    <p>Problem solved: {{ solved }}</p>
    <p class="py-4 text-pink-700 font-semibold">{{ title }}</p>
    <p>{{ question }}</p>
    <input type="tel" v-model="answer" class="rounded-lg" />
    <button @click="checkAnswer" class="px-4 py-2 bg-pink-500 text-white rounded mt-4 lg:ml-4">Check</button>
  </div>
</Game>
</template>