<script setup lang="ts">
import { computed, ref } from "vue";
import Main from "@/layouts/Main.vue";

const levels = [
  ["Introduction to digit number until 50", "Addition and subtraction of digit number until 20", "Determine length and weight with non-standard units", "Comparing length, weight, length of time, and temperature"],
  ["Introduction to digit number until 100", "Addition and subtraction of digit number until 100", "Multiplication and division of digit number until 100", "Introduction to currency values and equivalence", "Determine length, weight, and time in standard units", "Introduction to the fractions 1/2, 1/3 , and 1/4", "Characteristics of two-dimentional figure and three-dimentional figure"],
  ["Introduction to digit numbers up to 1000 and simple fractions", "Relationship between standard units for length, weight, and time", "Simetri lipat dan simetri putar pada bangun datar", "Introduction to angles and types of angles", "Characteristics of various two-dimentional figure", "Introduction to simple drawing diagrams"],
  ["Introduction of equivalent fractions with pictures", "Determine factor, common factor, Greatest Common Divisor (GCD), and Least Common Multiple (LCM)", "Rounding up the results of length and weight measurements", "Perimeter and area of squares, rectangles and triangles", "Squared numbers and square root numbers", "Simple bar chart introduction", "Determine the size of the angle on a two-dimentional figure in standard units"],
  ["Adding and subtracting two fractions with different denominators", "Introduction to decimal fractions and percent", "Recognition of scale through floor plans", "Finding nets of cubes and blocks", "Presentation of data in the form of tables, bar and line charts"],
  ["Recognition of negative integers using the number line", "Mixed arithmetic operations with digit numbers, fractions and/or decimals", "Elements, circumference and area of a circle", "Introduction to cubes, blocks, prisms, pyramids, tubes, cones", "Introduction of modus, median, and mean of single data"],
  ["Operations to count integers and fractions", "Sets, subsets, and binary operations on two sets", "One variable linear equations and inequalities", "The ratio of two scales and proportions, speed and discharge", "Social arithmetic", "Perimeter and area formulas for different types of quadrilaterals and triangles", "The angle of two parallel lines cut by the transversal", "Data presentation (tables, line charts, bars, and pie)"],
  ["Number sequence pattern and object configuration sequence", "The position of a point in the Cartesian coordinate plane", "Relationships and functions", "Linear function", "Two-variable system of linear equations", "Pythagorean Theorem", "Surface area and volume of flat side three-dimentional figure", "Summing up the mean, median, mode, and distribution of the data", "Probability of an event from an experiment"],
  ["Operations on numbers to the power of rational numbers and the form of roots", "Quadratic equation and its roots", "Quadratic functions in the form of tables, equations, and graphs", "Discriminant of quadratic functions and graphs", "Similarity and congruence between flat shapes", "Surface area and volume of curved side three-dimentional figure"],
  ["Equations and inequalities absolute value linear form of one variable", "Three-variable system of linear equations", "System of inequalities of two variables", "Linear functions, quadratic functions, and rational functions", "Composition of functions and inverse functions", "Trigonometric ratios in a right triangle", "Trigonometric comparison of related angles", "Sine and cosine rules"],
  ["Two-variable linear program", "Matrix equality and matrix operations", "The determinant and inverse of a matrix of the order 2x2", "Arithmetic and Geometric Sequences", "Limits of algebraic functions", "Derivatives of algebraic functions", "Maximum and minimum values", "Indeterminate integrals of algebraic functions"],
  ["Distance in space", "The size of the cluster data concentration and spread", "Rules for counting, permutations, and combinations", "Probability of compound events"]
]
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