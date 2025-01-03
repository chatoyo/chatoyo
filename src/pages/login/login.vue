<script setup lang="ts">
import { useRouter } from 'vue-router';
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
</script>

<template>
  <div class="login-page">
    <div class="form">
      <span class="title">chatoyo </span>
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
            <svg
              class="shrink-0 size-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
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
            <svg
              class="shrink-0 size-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
              <circle cx="16.5" cy="7.5" r=".5"></circle>
            </svg>
          </div>
        </div>
      </form>

      <div class="submit-btn">
        <button type="submit" class="btn btn-login" @click="loginHandler">登陆</button>
        <button type="button" class="btn btn-reset-pwd" @click="redirect('reset-password')">重置密码</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    @apply w-full py-3 px-4 inline-flex justify-center duration-300 items-center text-sm font-medium rounded-lg;
  }

  .btn-login {
    @apply border border-transparent
		bg-teal-500 text-white
		hover:bg-teal-600
		focus:outline-none focus:bg-teal-600
		disabled:opacity-50 disabled:pointer-events-none;
  }

  .btn-reset-pwd {
    @apply border border-transparent
		bg-blue-500 text-white
		hover:bg-blue-600
		focus:outline-none focus:bg-blue-600
		disabled:opacity-50 disabled:pointer-events-none;
  }
}
</style>
