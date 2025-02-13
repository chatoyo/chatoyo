<script setup lang="ts"></script>

<template>
  <div class="profile-page">
    <div class="profile__row">
      <div
        class="banner rounded-lg min-h-72 bg-[url('@assets/img/banner/curved0.jpg')] bg-cover flex flex-col relative"
      >
        <div class="banner__title">个人资料</div>
        <div
          class="banner__mask rounded-lg flex-1 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"
        ></div>
      </div>
      <div class="profile__bar">
        <img class="profile__avatar w-20 aspect-square rounded-md" alt="aa" src="/images/avatar-test.jpg" />
        <div class="profile__name flex flex-col gap-2 h-full">
          <div class="text-xl font-semibold">青雀</div>
          <div class="text-base text-slate-600">前端开发工程师</div>
        </div>
        <div class="ml-auto mr-10 flex gap-5">
          <Button label="聊天" icon-pos="left" icon="pi pi-comments" />
          <Button
            label="关注"
            :pt="{
              label: { class: 'text-white' },
              icon: { class: 'text-white' },
              root: { class: '!bg-blue-500 !border-blue-500 hover:!bg-blue-400' }
            }"
            severity="info"
            icon-pos="left"
            icon="pi pi-plus"
          />
        </div>
      </div>
    </div>
    <div class="profile__row mt-12 flex-wrap flex -mx-3">
      <div class="px-3 h-96 w-full xl:basis-1/3 max-w-full">
        <MuiCard class="" md-height="24rem" hide-detail-link></MuiCard>
      </div>
      <div class="px-3 h-96 w-full xl:basis-1/3 max-w-full">
        <MuiCard class="" md-height="24rem"></MuiCard>
      </div>
      <div class="px-3 h-96 w-full xl:basis-1/3 max-w-full">
        <MuiCard class="" md-height="24rem"></MuiCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .profile-page {
    @apply p-6 dark:bg-dark-bg;

    .banner {
      .banner__title {
        @apply z-20 select-none absolute inset-y-0 py-4 px-6 text-slate-100 font-bold;
      }
    }

    .profile__bar {
      @apply relative flex flex-auto items-center min-w-0 p-4 mx-6 -mt-12 gap-5 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200;
    }
  }
}
</style>
