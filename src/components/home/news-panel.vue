<script setup lang="ts">
interface NewsItem {
  title: string;
  link: string;
  hot: string;
}

interface NewsPanelProp {
  data: NewsItem[];
}

const props = withDefaults(defineProps<NewsPanelProp>(), {
  data: [
    {
      title: '关于元旦和春节假期放假放假的通知',
      link: 'string;',
      hot: 'string;'
    },
    {
      title: '崩坏·星琼铁道3.0于1.15启动，翁法罗斯大揭秘',
      link: 'string;',
      hot: 'string;'
    },
    {
      title: '震惊，崩坏IP烧鸡煞费苦心，竟然是为了......',
      link: 'string;',
      hot: 'string;'
    },
    {
      title: '火神玛薇卡骑着摩托向你飞驰而来',
      link: 'string;',
      hot: 'string;'
    }
  ]
});
</script>

<template>
  <div class="news-panel">
    <div class="title text-xl font-bold border-b-2 px-4 py-2">新闻</div>
    <ul class="news-list">
      <li v-for="(item, index) in props.data" :key="index" class="news-item">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .news-panel {
    @apply dark:bg-emerald-800 bg-sunrise-white
    dark:text-white text-indigo-950

    flex flex-col gap-2
    rounded-md;
  }

  .news-list {
    @apply indent-2 cursor-pointer px-4 py-2 duration-300;

    .news-item {
      @apply text-lg hover:underline;
    }
  }
}
</style>
