<script setup lang="ts">
import SidebarMenu from '@assets/sidebar-menu.ts';
import { icon } from '@/utils/transcript.ts';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useLayoutStore, useUserStore } from '@/store';
import { formatEpochTime } from '@/utils/message-time';

type SidebarProps = {};
const props = withDefaults(defineProps<SidebarProps>(), {});

// UI
const layoutStore = useLayoutStore();
const isDarkMode = computed(() => layoutStore.darkMode);

const showCardio = ref<boolean>(false);
const iconWithStyle = (iconName: string): string[] => [icon(iconName)];
const mouseEnterTimeout = ref<any>(null);
const mouseLeaveTimeout = ref<any>(null);
const handleHoverAvatar = () => {
  if (mouseLeaveTimeout.value) {
    clearTimeout(mouseLeaveTimeout.value);
    mouseLeaveTimeout.value = null;
  }
  mouseEnterTimeout.value = setTimeout(() => {
    showCardio.value = true;
  }, 500);
};
const handleLeaveAvatar = () => {
  if (mouseEnterTimeout.value) {
    clearTimeout(mouseEnterTimeout.value);
    mouseEnterTimeout.value = null;
  }
  mouseLeaveTimeout.value = setTimeout(() => {
    showCardio.value = false;
  }, 50);
};

// Routing
const router = useRouter();
const route = useRoute();
const isActive = (itemRoute: string): {} => ({
  'active-item': isCurrentRoute(itemRoute)
});
const isCurrentRoute = (itemRoute: string) => route.name === itemRoute;
const handleClick = (target: string) => {
  router.push({ name: target });
};

// User
const userStore = useUserStore();
const userInfo = computed(() => userStore.getUser);

// Util
const formattedSex = computed(() => {
  switch (userInfo.value.gender) {
    case 0:
      return 'Female';
    case 1:
      return 'Male';
    default:
      return ' ';
  }
});

const formattedLoginTime = computed(() => {
  if (userInfo.value.latestLoginAt === 0) return '请登录';
  const loginTime = formatEpochTime(userInfo.value.latestLoginAt);
  return loginTime;
});
</script>

<template>
  <transition name="fade" :duration="{ enter: 200, leave: 300 }">
    <div class="login-card" v-show="showCardio" @mouseenter="handleHoverAvatar" @mouseleave="handleLeaveAvatar">
      <img :src="userInfo.picture" alt="Avatar" class="login-card__avatar" />
      <div class="login-card__content">
        <h3 class="login-card__name">{{ userInfo.name }}</h3>
        <p class="login-card__sex">{{ formattedSex }}</p>
        <p class="login-card__login-time">登陆时间: {{ formattedLoginTime }}</p>
      </div>
    </div>
  </transition>
  <div class="sidebar">
    <div class="logo" @click="handleClick('home')">ChatoYo</div>
    <div
      class="avatar-box hidden md:w-full md:flex md:flex-col md:items-center"
      @mouseenter="handleHoverAvatar"
      @mouseleave="handleLeaveAvatar"
    >
      <div
        class="avatar"
        :class="isActive('setting')"
        @click="
          () => {
            handleClick('setting');
            handleLeaveAvatar();
          }
        "
      >
        <img class="avatar-img" :src="userInfo.picture" alt="avatar-test.jpg" />
      </div>
    </div>

    <ul class="nav-container">
      <li
        class="nav"
        :class="isActive(item.target)"
        v-for="(item, index) in SidebarMenu"
        :key="index"
        @click="handleClick(item.target)"
      >
        <span class="!text-2xl" :class="iconWithStyle(item.icon)" />
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

  .login-card {
    @apply bg-white cursor-pointer rounded-lg shadow-[2px_1px_3px_1px_rgba(0,0,0,0.07),-2px_1px_3px_1px_rgba(0,0,0,0.07)] p-4 flex gap-4 items-center absolute min-w-48 max-w-fit h-28 left-[7.4rem] top-[5.5rem] z-10;

    &__avatar {
      @apply w-8 h-8 rounded-full object-cover;
    }

    &__content {
      @apply flex flex-col;
    }

    &__name {
      @apply text-lg font-semibold;
    }

    &__sex,
    &__login-time {
      @apply text-sm text-gray-600;
    }
  }
}
</style>
