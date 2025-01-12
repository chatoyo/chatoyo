<script setup lang="ts">
import Empty from '@components/list/mui-empty.vue';

interface BulletinItem {
  title: string;
  link: string;
  pic: string;
  updatedAt: string;
  latestReview: {
    userName: string;
    content: string;
  };
}

interface BulletinBoardProp {
  data?: BulletinItem[];
}

const props = withDefaults(defineProps<BulletinBoardProp>(), {
  data: () => [
    {
      title: '关于元旦和春节假期放假放假的通知',
      link: 'string;',
      pic: '/images/avatar-test.jpg',
      updatedAt: '2025-1-1 0:00:00',
      latestReview: {
        userName: '公司的狗',
        content: '星穷列车，不许发车！'
      }
    },
    {
      title: '崩坏·星琼铁道3.0于1.15启动，翁法罗斯大揭秘',
      link: 'string;',
      pic: '/images/avatar-test.jpg',
      updatedAt: '2025-1-1 0:00:00',
      latestReview: {
        userName: '公司的狗',
        content: '星穷列车，不许发车！'
      }
    },
    {
      title: '震惊，崩坏IP烧鸡煞费苦心，竟然是为了......',
      link: 'string;',
      pic: '/images/avatar-test.jpg',
      updatedAt: '2025-1-1 0:00:00',
      latestReview: {
        userName: '公司的狗',
        content: '星穷列车，不许发车！'
      }
    },
    {
      title: '火神玛薇卡骑着摩托向你飞驰而来',
      link: 'string;',
      pic: '/images/avatar-test.jpg',
      updatedAt: '2025-1-1 0:00:00',
      latestReview: {
        userName: '公司的狗',
        content: '星穷列车，不许发车！'
      }
    }
  ]
});

const displayStyleClasses = ['waterfall-cards', 'board-list'];
</script>

<template>
  <div class="bulletin-board">
    <div class="title text-xl font-bold border-b-2 px-4 py-2">畅所欲言</div>
    <ul v-if="props.data.length" class="bulletin-list" :class="displayStyleClasses[1]">
      <li
        v-for="(item, index) in props.data"
        :key="index"
        class="bulletin flex flex-row dark:bg-blue-700/20 dark:hover:bg-blue-700/50 bg-indigo-100 hover:bg-indigo-200 duration-300 rounded-md cursor-pointer"
      >
        <img class="pic w-20" alt="" :src="item.pic" />
        <div class="text-content flex flex-col justify-around py-2 px-6 flex-1">
          <div class="head flex flex-row items-center">
            <div class="title text-lg font-bold flex-1">
              {{ item.title }}
            </div>
            <span>
              {{ item.updatedAt }}
            </span>
          </div>
          <div class="latestReview flex items-center">
            <span class="user font-semibold">{{ item.latestReview.userName }}： </span>
            <span class="content">{{ item.latestReview.content }}</span>
          </div>
        </div>
      </li>
    </ul>
    <empty v-if="!props.data.length" />
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .bulletin-board {
    @apply dark:bg-indigo-900 bg-sunrise-white
    dark:text-white text-indigo-950
      rounded-md
    flex flex-col gap-0;
  }

  .bulletin-list {
    @apply px-4 py-6 indent-2;
    &.waterfall-cards {
      @apply grid;
    }

    &.board-list {
      @apply flex flex-col gap-4;
    }
  }
}
</style>
