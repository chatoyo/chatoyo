<script setup lang="ts">
/**
 * Props:
 * - modelValue: a boolean that determines if the toggle is ON or OFF
 * - id: an optional id for the input (to tie the <label> and <input> together)
 * - disabled: an optional boolean to disable the toggle
 */
const model = defineModel<boolean>();
const props = withDefaults(
  defineProps<{
    id?: string;
    disabled?: boolean;
  }>(),
  {
    id: 'toggle-' + Math.floor(Math.random() * 10000),
    disabled: false
  }
);

const containerRef = ref<HTMLLabelElement>();

const onChange = (e: any) => {
  model.value = (e.target as HTMLInputElement).checked;
  containerRef.value?.classList.add('fade-out');
  setTimeout(() => {
    containerRef.value?.classList.remove('fade-out');
  }, 120);
};
</script>

<template>
  <!-- 
    Use "relative flex flex-col flex-wrap items-center gap-2" 
    so it matches your layout from the example
  -->
  <div class="relative flex flex-col flex-wrap items-center gap-1">
    <!-- The toggle container -->
    <label class="toggle-container" ref="containerRef" :for="props.id">
      <input type="checkbox" :id="props.id" :checked="model" :disabled="props.disabled" @change="onChange" />
      <!-- The custom slider/handle background -->
      <span class="checkmark"></span>
    </label>

    <!-- The label that displays next to the toggle -->
    <!-- Notice that we use <slot> here so the parent component can pass any text -->
    <label class="toggle-label" :for="props.id">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;

@layer components {
  .toggle-label {
    @apply cursor-pointer text-slate-100 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400;
  }

  .toggle-container {
    @apply h-[24px];

    &.fade-out {
      .checkmark::before {
        opacity: 0;
      }
    }
  }

  .toggle-container input {
    @apply absolute opacity-0 h-0 w-0 cursor-pointer;
  }

  .checkmark {
    transition-timing-function: ease-out;
    @apply relative inline-block w-[48px] h-[24px] bg-slate-300
    rounded-xl transition-all duration-300 cursor-pointer;
  }

  /* 
    --------------------------------
    Slider
    -------------------------------- 
  */
  .checkmark::after {
    @apply absolute top-[2.1px] left-[2px] w-[20px] h-[20px] rounded-full
    bg-white transition-all;
    content: '';
  }

  /* 
    --------------------------------
    Checkmark
    -------------------------------- 
  */
  .checkmark::before {
    transform: scaleX(1.1);
    @apply inline-block text-white absolute top-[3px] left-[6px] content-["Off"] text-[12px]
    transition-transform duration-200 translate-x-[19px];
  }

  /* 
    --------------------------------
    Hover states
    -------------------------------- 
  */
  .toggle-container:hover .checkmark {
    @apply bg-slate-400;
  }

  .toggle-container:hover .checkmark::after {
    @apply bg-slate-100;
  }

  /* 
    --------------------------------
    Checked states
    -------------------------------- 
  */
  .toggle-container input:checked ~ .checkmark {
    @apply bg-emerald-500;
    /* checked:bg-emerald-400 */
  }

  .toggle-container input:checked ~ .checkmark::after {
    left: 26px;
    @apply bg-white;
  }

  .toggle-container input:checked ~ .checkmark::before {
    @apply translate-x-0 content-['On'];
  }

  /* 
    --------------------------------
    Hover while checked
    -------------------------------- 
  */
  .toggle-container:hover input:checked ~ .checkmark {
    @apply bg-emerald-600;
    /* checked:hover:bg-emerald-300 */
  }

  .toggle-container:hover input:checked ~ .checkmark::after {
    @apply bg-white;
    /* checked:hover:after:bg-emerald-600 */
  }

  .toggle-container input:focus ~ .checkmark {
    @apply outline-4;
  }

  .toggle-container input:checked:focus ~ .checkmark {
    /* If needed, replicate any focus styles when checked */
  }

  /* 
    --------------------------------
    Disabled state
    -------------------------------- 
  */
  .toggle-container input:disabled ~ .checkmark {
    @apply bg-slate-200 cursor-not-allowed;
    /* disabled:bg-slate-200 */
  }

  .toggle-container input:disabled ~ .checkmark::after {
    @apply bg-slate-300;
    /* disabled:after:bg-slate-300 */
  }
}
</style>
