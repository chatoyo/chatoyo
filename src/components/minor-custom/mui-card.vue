<script setup lang="ts">
import { icon } from '@utils/transcript.ts';

type MuiCardProps = {
  title: string;
  hideDetailLink?: boolean;
  mdHeight?: string;
};

const props = withDefaults(defineProps<MuiCardProps>(), {
  title: '',
  hideDetailLink: false,
  mdHeight: '26rem'
});
</script>

<template>
  <div class="card-component" :class="[`md:h-[${props.mdHeight}]`]">
    <div class="card__head">
      <div class="head__title">
        <span v-if="props.title">{{ props.title }}</span>
        <slot name="title" />
      </div>
      <div class="head__detail-link" v-show="!props.hideDetailLink">
        <span>更多</span>
        <span :class="icon('angle-right')" />
      </div>
    </div>
    <div class="card__content">
      <slot name="default" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .card-component {
    @apply rounded-md flex flex-col justify-center gap-2 dark:bg-[#27293d]
		p-2;

    .card__head {
      @apply text-slate-100 rounded-sm py-1 px-4 inline-flex items-center;

      .head__title {
        @apply flex-1 text-lg font-semibold;
      }

      .head__detail-link {
        @apply flex items-center justify-center cursor-pointer;
      }
    }

    .card__content {
      @apply flex-1 overflow-hidden;
    }
  }
}
</style>
