<script setup lang="ts">

const current = defineModel<number>('current', {default: 0});
const props = withDefaults(
  defineProps<{
    data?: { url: string }[];
  }>(),
  {
    data: () => [
      {
        url: 'https://bbs-static.miyoushe.com/static/2024/12/09/6f632edd96fd8d0877defc3d52c4905c_507210531003439103.jpg'
      },
      {
        url: 'https://bbs-static.miyoushe.com/static/2024/12/05/ad71b978abcce2379d9b0d2167e11cf9_4421245705265550958.png'
      }
    ]
  }
);

const navigate = (direction: 1 | -1) => {
  let newIndex = current.value += direction;
  if (newIndex === -1) {newIndex = props.data.length - 1}
  else if (newIndex === props.data.length) newIndex = 0;
  current.value = newIndex;
};

</script>

<template>
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div
        class="duration-700 ease-in-out"
        v-for="(item, index) in props.data"
        :key="index"
        :class="{ hidden: current === index }"
      >
        <img
          :src="item.url"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      v-for="(_item, index) in props.data"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        :aria-current="current === index"
        @click="current = index"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="navigate(-1)"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="navigate(1)"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<style scoped></style>
