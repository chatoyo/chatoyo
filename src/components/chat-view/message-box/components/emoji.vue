 <script setup lang="ts">
  import { defineEmits, ref } from "vue";
  
  // Import emoji assets
  import slightlySmilingFace from "@/assets/img/emoji/slightly-smiling-face.png";
  import smilingFace from "@/assets/img/emoji/smiling-face.png";
  import smilingFaceWithHeartEyes from "@/assets/img/emoji/smiling-face-with-heart-eyes.png";
  import smilingFaceWithSunglasses from "@/assets/img/emoji/smiling-face-with-sunglasses.png";
  import thinkingFace from "@/assets/img/emoji/thinking-face.png";
  import tiredFace from "@/assets/img/emoji/tired-face.png";
  import moneyMouthFace from "@/assets/img/emoji/money-mouth-face.png";
  import loudlyCryingFace from "@/assets/img/emoji/loudly-crying-face.png";
  import poutingFace from "@/assets/img/emoji/pouting-face.png";
  import faceScreamingInFear from "@/assets/img/emoji/face-screaming-in-fear.png";
  import faceVomiting from "@/assets/img/emoji/face-vomiting.png";
  import faceWithoutMouth from "@/assets/img/emoji/face-without-mouth.png";
  import faceWithTongue from "@/assets/img/emoji/face-with-tongue.png";
  import clownFace from "@/assets/img/emoji/clown-face.png";
  import newMoonFace from "@/assets/img/emoji/new-moon-face.png";
  import ghost from "@/assets/img/emoji/ghost.png";
  import jackOLantern from "@/assets/img/emoji/jack-o-lantern.png";
  import moneyBag from "@/assets/img/emoji/money-bag.png";
  import pileOfPoo from "@/assets/img/emoji/pile-of-poo.png";
  import shamrock from "@/assets/img/emoji/shamrock.png";
  import hibiscus from "@/assets/img/emoji/hibiscus.png";
  import lips from "@/assets/img/emoji/lips.png";
  import sparkles from "@/assets/img/emoji/sparkles.png";
  import star from "@/assets/img/emoji/star.png";
  import twoHearts from "@/assets/img/emoji/two-hearts.png";
  import rainbow from "@/assets/img/emoji/rainbow.png";
  import thoughtBalloon from "@/assets/img/emoji/thought-balloon.png";
  
  // Emits declaration
  const emit = defineEmits(["sendEmoji", "closeEmoji"]);
  
  // Reactive data
  const emojiList = ref<Array<string>>([
    slightlySmilingFace,
    smilingFace,
    smilingFaceWithHeartEyes,
    smilingFaceWithSunglasses,
    thinkingFace,
    tiredFace,
    moneyMouthFace,
    loudlyCryingFace,
    poutingFace,
    faceScreamingInFear,
    faceVomiting,
    faceWithoutMouth,
    faceWithTongue,
    clownFace,
    newMoonFace,
    ghost,
    jackOLantern,
    moneyBag,
    pileOfPoo,
    shamrock,
    hibiscus,
    lips,
    sparkles,
    star,
    twoHearts,
    rainbow,
    thoughtBalloon,
  ]);
  
  // Methods
  const sendEmoji = (item: string) => {
    emit("sendEmoji", item);
  };
  
  const closeEmoji = () => {
    emit("closeEmoji");
  };
  </script>

<template>
    <div class="emoji-content">
      <div class="emoji">
        <div class="emoji-wrapper">
          <ul class="emoji-list">
            <li
              class="emoji-item"
              v-for="(item, index) in emojiList"
              :key="index"
              @click="sendEmoji(item)"
            >
              <img :src="item" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="mask" @click="closeEmoji"></div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .emoji-content {
    .emoji {
      @apply w-96 h-52 bg-gray-800 absolute -top-56 -left-2.5 rounded-lg transition z-30;
  
      &::after {
        @apply block absolute z-40;
        content: "";
        border-width: 10px;
        border-style: solid;
        border-color: rgb(39, 42, 55) transparent transparent transparent;
        @apply -bottom-2 left-4;
      }
  
      .emoji-wrapper {
        @apply w-full h-full overflow-y-scroll p-1 box-border relative;
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0));
        mask-composite: exclude;
        -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0));
        -webkit-mask-composite: destination-in;
  
        &::-webkit-scrollbar {
          @apply w-1;
        }
  
        &::-webkit-scrollbar-thumb {
          @apply rounded-lg bg-gray-500 dark:bg-gray-600;
        }
  
        &::-webkit-scrollbar-track {
          @apply bg-white dark:bg-gray-800;
        }
  
        .emoji-list {
          @apply flex flex-wrap ml-2.5;
  
          .emoji-item {
            @apply list-none w-12 h-12 rounded-lg m-1.5 relative cursor-pointer hover:bg-gray-700;
  
            img {
              @apply w-9 h-9 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
            }
          }
        }
      }
    }
  
    .mask {
      @apply w-full h-full fixed bg-transparent left-0 top-0 z-10;
    }
  }
  </style>
  
  