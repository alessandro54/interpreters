<template>
  <section class="justify-center w-full flex fixed bottom-3 inset-x-0">
    <div class="w-4/5 xl:w-1/3 flex items-center justify-between px-0 sm:px-5 shadow-lg backdrop-blur-md bg-white bg-opacity-50 rounded-xl">
      <div v-if="!(page <= 1)" @click="handlePreviousClick" class="-mt-px flex w-0 flex-1 justify-center md:justify-start cursor-pointer">
        <div
          class="inline-flex items-center border-t-2 border-transparent pr-1 py-4 text-sm font-medium select-none text-gray-400 hover:border-teal-300 hover:text-teal-300">
          <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-teal-400" aria-hidden="true" />
          Anterior
        </div>
      </div>
      <div v-else class="w-0 flex-1" />
      <!-- TODO paginator -->
      <div class="hidden md:-mt-px ">
        <a href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">1</a>
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <a href="#"
          class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page">2</a>
        <a href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">3</a>
        <span
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">...</span>
        <a href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">8</a>
        <a href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-indigo-500 hover:border-gray-300 hover:text-gray-700">9</a>
        <a href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">{{
            total }}</a>
      </div>
      <div v-if="!(page >= Math.floor(total / limit))" @click="handleNextClick"
        class="-mt-px flex w-0 flex-1 justify-center md:justify-end cursor-pointer">
        <div
          class="inline-flex items-center border-t-2 border-transparent pl-1 py-4 text-sm font-medium select-none text-gray-400 hover:border-teal-300 hover:text-teal-300">
          Siguiente
          <ArrowLongRightIcon class="ml-3 h-5 w-5 text-teal-400" aria-hidden="true" />
        </div>
      </div>
      <div v-else class="w-0 flex-1" />
    </div>
  </section>
</template>

<script>
import { useInterpreterStore } from '~~/stores/interpreter';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/20/solid'

export default defineComponent({
  data: () => {
    return {
      page: 1,
      limit: 15,
    }
  },
  async setup() {
    const store = useInterpreterStore();
    return { store: store, total: store.getTotalCount }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.handlePreviousClick();
          break;
        case 'ArrowRight':
          this.handleNextClick();
          break;
      }
    })
  },
  methods: {
    handlePreviousClick() {
      if (this.page <= 1) return;
      this.page--;
      this.store.$patch({
        data: this.store.getInterpreters(this.page, this.limit)
      })
    },
    handleNextClick() {
      if (this.page >= Math.floor(this.total / this.limit)) return;
      this.page++;
      this.store.$patch({
        data: this.store.getInterpreters(this.page, this.limit)
      })
    },
  },
  components: {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
  },
})
</script>
