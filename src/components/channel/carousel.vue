<script setup lang="ts">
import { icon } from '@utils/transcript.ts';
import { computed, ref, watch } from 'vue';

const current = ref<number>(0);
type CarouselItem = {
  title: string;
  pic: string;
  link: string;
};
type CarouselProp = {
  data?: CarouselItem[];
};

const props = withDefaults(defineProps<CarouselProp>(), {
  data: () => [
    {
      title:
        '哪位来客？那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！那维莱特！',
      pic: 'https://bbs-static.miyoushe.com/static/2024/12/09/6f632edd96fd8d0877defc3d52c4905c_507210531003439103.jpg',
      link: 'https://www.bilibili.com'
    },
    {
      title: '原神5.2活动速递第二期',
      pic: 'https://bbs-static.miyoushe.com/static/2024/12/05/ad71b978abcce2379d9b0d2167e11cf9_4421245705265550958.png',
      link: 'https://www.miyoushe.com'
    }
  ]
});
const viewList = computed(() => []);

const slideRef = ref<HTMLDivElement>();
const wrapperRef = ref<HTMLDivElement>();

const navigate = (direction: number) => {
  let newIndex = (current.value += direction);
  if (newIndex === -1) {
    newIndex = props.data.length - 1;
  } else if (newIndex === props.data.length) newIndex = 0;
  current.value = newIndex;
};
const peerItem = ref({
  prev: 0,
  next: 0
});

watch(current, () => {
  slideRef.value.style.transform = `translateX(${-(current.value + 1) * wrapperRef.value.clientWidth}px)`;
});

const linkHandler = (linkURL: string) => {
  //todo: if the same origin router.push else open new window and redirect
  window.open(linkURL);
};

// todo: 如何能做到像B站那样首尾相接呢？
// todo: 定时播放
</script>

<template>
  <div class="carousel-wrapper" ref="wrapperRef">
    <!-- Carousel wrapper -->
    <div class="core" ref="slideRef">
      <div class="pic-item prev" @click="linkHandler(props.data[peerItem.prev].link)">
        <img :src="props.data[peerItem.prev].pic" :alt="props.data[peerItem.prev].title" />
      </div>
      <div class="pic-item" v-for="(item, index) in props.data" :key="index" @click="linkHandler(item.link)">
        <img :src="item.pic" :alt="item.title" />
      </div>
      <div class="pic-item next" @click="linkHandler(props.data[peerItem.next].link)">
        <img :src="props.data[peerItem.next].pic" :alt="props.data[peerItem.next].title" />
      </div>
    </div>

    <!-- Slider indicators and controllers -->
    <div class="footer-panel">
      <div class="title-control">
        <div class="title">{{ props.data[current].title }}</div>
        <div class="controllers">
          <button class="arrow left" @click="navigate(-1)">
            <span :class="icon('angle-left')" />
          </button>
          <button class="arrow right" @click="navigate(1)">
            <span :class="icon('angle-right')" />
          </button>
        </div>
      </div>
      <ul class="slider-indicators">
        <li
          v-for="(_item, index) in props.data"
          class="indicator"
          :class="{ selected: current === index }"
          :aria-current="current === index"
          @click="current = index"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .carousel-wrapper {
    @apply relative w-full h-56 md:h-96 rounded-lg touch-pan-y overflow-hidden;
  }

  .core {
    @apply h-full rounded-lg flex duration-300 transition-transform;
    .pic-item {
      @apply duration-700 w-full h-full shrink-0 cursor-pointer;
      img {
        @apply w-full h-full;
      }
    }
  }

  .footer-panel {
    @apply absolute bottom-0 z-[29]  w-full
    bg-gradient-to-b from-transparent to-gray-600/60 h-20 py-3 px-6
    rounded-b-lg
    flex flex-col items-start justify-center gap-3;

    .title-control {
      @apply flex flex-row w-full gap-16;
      .title {
        @apply text-xl text-slate-200 font-normal
        select-none cursor-pointer
        flex-1 overflow-hidden
        text-ellipsis text-nowrap;
      }

      .controllers {
        @apply text-white flex gap-4;
        .arrow {
          @apply bg-gray-700/40 px-2 hover:bg-gray-700/80 rounded-md duration-200;
        }
      }
    }
  }

  .slider-indicators {
    @apply flex gap-1.5 items-center;

    .indicator {
      @apply w-2 h-2 rounded-full bg-white/60 cursor-pointer;
      &.selected {
        @apply bg-white w-3 h-3;
      }
    }
  }
}
</style>
