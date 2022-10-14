<script setup lang="ts">
import Main from "@/layouts/Main.vue";
import { ref } from "vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { PresentationChartBarIcon } from "@heroicons/vue/24/outline";

const open = ref(false);
const level = ref(1);
</script>

<template>
  <Main title="Math for <br /> Everyone">
    <div class="flex justify-center w-full">
      <div class="flex flex-col justify-center mx-auto w-full px-24 lg:px-0 lg:w-[12rem] py-6 space-y-4 text-center">
        <button @click="open = true"
          class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">Start</button>
        <router-link to="/help"
          class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">Help</router-link>
        <button
          class="py-2 lg:py-4 lg:font-bold bg-transparent hover:bg-pink-300 text-pink-900 w-full rounded-full border-2 border-transparent hover:border-pink-900">About</button>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center lg:items-center lg:p-0">
            <TransitionChild as="template" enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 w-full sm:max-w-md lg:max-w-sm">
                <div class="bg-white p-4 sm:p-6">
                  <div class="lg:flex lg:items-start">
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 lg:m-3 lg:h-12 lg:w-12">
                      <PresentationChartBarIcon class="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center lg:mt-0 lg:ml-4 lg:text-left">
                      <DialogTitle as="h3" class=" py-3 text-lg font-medium leading-6 text-pink-900 lg:text-xl lg:font-semibold">Choose your level
                      </DialogTitle>
                      <div class="mt-2 flex w-full justify-center items-center space-x-2 text-sm">
                        <p class="text-gray-700">Level: </p>
                        <select v-model="level" class="rounded text-xs">
                          <option v-for="i in 12" :value="i">{{ i }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 lg:flex lg:flex-row lg:justify-end lg:px-6 lg:space-x-4">
                  <router-link :to="`/game/${level}`"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-pink-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 lg:w-auto"
                    >Go</router-link>
                  <button type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:w-auto lg:mt-0"
                    @click="open = false">Cancel</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </Main>
</template>
