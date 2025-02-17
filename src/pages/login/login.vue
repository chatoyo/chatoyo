<script setup lang="ts">
import { useRouter } from 'vue-router';
import googleIcon from '@assets/img/google.png';
import githubIcon from '@assets/img/github-mark.png';
import { onMounted, ref } from 'vue';
import { requestUserInfo, useUserStore } from '@/store';
import { getJSON } from '@/request/main';
import UserIcon from '@/assets/svgs/UserIcon.vue';
import PasswordIcon from '@/assets/svgs/PasswordIcon.vue';

const router = useRouter();

interface LoginForm {
  username: string;
  password: string;
}

const redirect = (target: string) => {
  router.push({ name: target });
};

const loginHandler = () => {
  // TODO: verify
  // TODO: redirect
  redirect('home');
};

const isLogging = ref(true);
const isHoverOverGoogle = ref(false);
const handleClickGoogle = () => {
  window.location.href = '/api/auth/google';
}
const isHoverOverGithub = ref(false);
const handleClickGithub = () => {
  window.location.href = '/api/auth/github';
}
/**
 * on Mounted, check if user info exist by requesting.
 * If yes (which uses the JWT Token in cookies: authToken), redirect to home page after setting userInfo in the Info store.
 * If no, stay in the current page.
 */
onMounted(async () => {
  try {
    const userStore = useUserStore();
    await requestUserInfo(userStore);
    if(userStore.getAuthenticated) redirect('home'); // redirects to home page
  } 
  catch (error) {
    console.error(`Error requesting UserInfo: [${error}].\n It may be normal if it's the first time you log in this app.'`);
    isLogging.value = false;
  } 
});
</script>

<template>
  <div class="login-page">
    <div class="form">
      <span class="title">chatoyo</span>
      <form class="form-core">
        <div class="relative">
          <input
            type="email"
            class="duration-300 peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="用户名 / 邮箱"
          />
          <div
            class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
          >
          <UserIcon/>
          </div>
        </div>

        <div class="relative">
          <input
            type="password"
            class="duration-300 peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="密码"
          />
          <div
            class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
          >
            <PasswordIcon/>
          </div>
        </div>
      </form>
      <div class="btn btn-oauth" @click="handleClickGoogle" 
      @mouseenter="() => {isHoverOverGoogle = true}" @mouseleave="() => {isHoverOverGoogle = false}">
        <img v-if="!isHoverOverGoogle" :src="googleIcon" class="btn-oauth__icon image-form"/>
        <span v-else class="btn-oauth__icon clip-form google-mask"> </span>
        <span class="btn-oauth__text">通过 Google 登陆</span>
      </div>
      <div class="btn btn-oauth" @click="handleClickGithub" 
      @mouseenter="() => {isHoverOverGithub = true}" @mouseleave="() => {isHoverOverGithub = false}">
        <img v-if="!isHoverOverGithub" :src="githubIcon" class="btn-oauth__icon image-form"/>
        <span v-else class="btn-oauth__icon clip-form github-mask"> </span>
        <span class="btn-oauth__text">通过 Github 登陆</span>
      </div>
      <div class="submit-btn">
        <button type="submit" class="btn btn-login" @click="loginHandler">
          登陆
          <i v-if="isLogging" class="pi pi-spin pi-spinner"></i>
        </button>
        <button type="button" class="btn btn-reset-pwd" @click="redirect('reset-password')">重置密码</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .login-page {
    @apply flex w-full min-h-screen flex-col justify-center items-center
		bg-[url('/images/login/bg-login.jpg')] bg-center bg-cover;
  }

  .form {
    @apply w-96 bg-[#0c263a]/50 p-4 rounded-md;
  }

  .title {
    @apply py-4 uppercase text-emerald-500 font-extrabold w-full inline-flex justify-center text-2xl select-none;
  }

  .form-core {
    @apply max-w-sm space-y-4;
  }

  .submit-btn {
    @apply flex flex-col md:flex-row gap-2 my-6;
  }

  .btn {
    @apply w-full inline-flex justify-center duration-300 gap-3 text-sm items-center font-medium rounded-lg cursor-pointer;
  }

  .btn-login {
    @apply border border-transparent h-11
		bg-teal-500 text-white
		hover:bg-teal-600
		focus:outline-none focus:bg-teal-600
		disabled:opacity-50 disabled:pointer-events-none;
  }

  .btn-reset-pwd {
    @apply border border-transparent h-11
		bg-blue-500 text-white
		hover:bg-blue-600
		focus:outline-none focus:bg-blue-600
		disabled:opacity-50 disabled:pointer-events-none;
  }

  .btn-oauth{
      @apply w-full h-11 flex items-center justify-start gap-6 mt-6 relative
      bg-lightBlue-100 border-2 border-slate-200 rounded-lg hover:text-transparent hover:font-extrabold transition-colors duration-300
      text-slate-600 hover:bg-[linear-gradient(90deg,rgba(44,44,44,0.2)_0%,rgba(44,44,44,0.2)_45%,rgba(255,255,255,1)_50%,rgba(44,44,44,0.2)_55%,rgba(44,44,44,0.2)_100%);];
      &:hover{
        background-size: 300% 300%;
        animation: 3s gradient 500ms ease infinite;
        background-clip: text;
      }

      &__icon {
        @apply h-8 w-8 ml-4 z-10;
        &.clip-form {
          @apply bg-lightBlue-100;
          mask-size: cover; /* Adjust size if needed */
          mask-repeat: no-repeat;
          mask-position: center;
          animation: appear 0.3s ease;
          &.google-mask{
            mask-image: url('@assets/img/google.png');
          }
          &.github-mask{
            mask-image: url('@assets/img/github-mark.png');
          }
        }
      }
  }
}
@keyframes gradient {
  0% {
    background-position: 70% 50%;
  }
  100% {
    background-position: 30% 50%;
  }
}
@keyframes appear {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
