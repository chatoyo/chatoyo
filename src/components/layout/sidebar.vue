<script setup lang="ts">
import SidebarMenu from '@assets/sidebar-menu.ts';
import { icon } from '@/utils/transcript.ts';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { useLayoutStore } from '@/store';

type SidebarProps = {
  avatar?: string;
};

const props = withDefaults(defineProps<SidebarProps>(), {
  avatar: '/images/avatar-test.jpg'
});

const router = useRouter();
const route = useRoute();
const layoutStore = useLayoutStore();

const iconWithStyle = (iconName: string): string[] => [icon(iconName)];
const isActive = (itemRoute: string): {} => ({
  'active-item': isCurrentRoute(itemRoute)
});

const isCurrentRoute = (itemRoute: string) => route.name === itemRoute;

const handleClick = (target: string) => {
  router.push({ name: target });
};

const isDarkMode = computed(() => layoutStore.darkMode);
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

    <div class="skin-toggle" @click="layoutStore.toggleDarkMode(!isDarkMode)">
      <span
        class="pi"
        :class="{
          'pi-moon': isDarkMode,
          'pi-sun': !isDarkMode
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .sidebar {
    @apply w-screen h-[4.5rem] flex px-2 flex-row items-center gap-8 overflow-x-clip transition-none transition-colors
		bg-amber-50 dark:bg-ultramarine-700
		md:flex-col md:h-full md:py-8 md:w-28 md:px-0;
  }

  .logo {
    @apply uppercase select-none cursor-pointer font-extrabold hidden
		text-lotus dark:text-emerald-accent
		md:block;
  }

  .avatar {
    @apply hidden justify-center items-center h-16 w-fit cursor-pointer py-2 rounded-full
		md:w-full md:inline-flex
		hover:bg-slate-300/50
		transition-all duration-300;

    &.active-item {
      @apply hover:text-white rounded-none
			bg-lotus dark:bg-emerald-500
			md:px-0 md:w-[150%];

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
    @apply flex flex-row w-full justify-between items-center flex-1
		md:flex-col md:gap-2 md:justify-start;

    .nav {
      @apply py-4 px-12 cursor-pointer transition-all duration-300 rounded-full inline-flex justify-center items-center
			md:px-6 md:h-16 md:w-16
			text-lotus dark:text-white
			hover:text-emerald-500 hover:bg-slate-300/50;

      &.active-item {
        @apply bg-lotus text-white dark:bg-emerald-500 dark:hover:text-white
				md:px-0 md:w-[150%];
      }
    }
  }

  .skin-toggle {
    @apply py-4 px-12 cursor-pointer transition-all duration-300 rounded-full justify-center items-center
		hidden md:inline-flex
		md:px-6 md:h-16 md:w-16
		text-lotus dark:text-white
		hover:text-emerald-500 hover:bg-slate-300/50;
  }
}
</style>
