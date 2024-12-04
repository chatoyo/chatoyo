<script setup lang="ts">
import SidebarMenu from '@assets/sidebar-menu.ts';
import { icon } from '@/utils/transcript.ts';
import { useRoute, useRouter } from 'vue-router';

type SidebarProps = {
  avatar?: string;
};

const props = withDefaults(defineProps<SidebarProps>(), {
  avatar: '/images/avatar-test.jpg'
});

const router = useRouter();
const route = useRoute();

const iconWithStyle = (iconName: string): string[] => [icon(iconName)];
const isActive = (itemRoute: string): {} => ({
  'active-item': isCurrentRoute(itemRoute)
});

const isCurrentRoute = (itemRoute: string) => route.name === itemRoute;

const handleClick = (target: string) => {
  router.push({ name: target });
};
</script>

<template>
  <div class="sidebar">
    <div class="logo" @click="handleClick('home')">ChatoYo</div>
    <div class="avatar" :class="isActive('setting')" @click="handleClick('setting')">
      <img class="avatar-img" :src="props.avatar" />
    </div>

    <ul class="nav-container">
      <li
        class="nav"
        :class="isActive(item.target)"
        v-for="(item, index) in SidebarMenu"
        :key="index"
        @click="handleClick(item.target)"
      >
        <span :class="iconWithStyle(item.icon)" class="text-2xl" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .sidebar {
    @apply bg-[#04263E] w-screen h-[4.5rem] flex px-2 flex-row items-center gap-8
		md:flex-col md:h-full md:py-8 md:w-28 md:px-0 overflow-clip;
  }

  .logo {
    @apply text-[#12D989] uppercase select-none cursor-pointer font-extrabold hidden
		md:block;
  }

  .avatar {
    @apply hidden justify-center items-center h-16 w-fit cursor-pointer py-2 rounded-full
		md:w-16 md:inline-flex
		hover:bg-slate-300/50
		transition-all duration-300;

    &.active-item {
      @apply bg-emerald-500 hover:text-white hover:bg-emerald-500 rounded-none
			md:px-0;
      @media (min-width: 768px) {
          width: 140%;
        }
      /*应该清除和未选中状态下互斥的样式*/
    }

    &:hover {
      .avatar-img {
        @apply h-full;
      }
    }

    .avatar-img {
      @apply rounded-[50%] aspect-square h-[95%]
			hover:h-full
			transition-all duration-300;
    }
  }

  .nav-container {
    @apply flex flex-row w-full justify-between
		md:flex-col md:gap-2 md:justify-center items-center;

    .nav {
      @apply text-white py-4 px-12 cursor-pointer transition-all duration-300 rounded-full inline-flex justify-center items-center
			md:px-6 md:h-16 md:w-16
			dark:text-white
			hover:text-emerald-500 hover:bg-slate-300/50;

      &.active-item {
        @apply bg-emerald-500 hover:text-white hover:bg-emerald-500 rounded-none
				md:px-0;
        @media (min-width: 768px) {
          width: 140%;
        }
        /*应该清除和未选中状态下互斥的样式*/
      }
    }
  }
}
</style>
