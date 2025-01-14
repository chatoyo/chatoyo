<script setup lang="ts">
import portraitImg from '@/assets/img/head_portrait.jpg';

import { BaseChatMessage } from "@/models/chat-message.ts";
import MessageBubble from "./components/message-bubble.vue"
import { nextTick, ref } from "vue";
import { animation } from "@/utils/util";
import StatusContainer from './components/status-container.vue';
import { formatEpochTime } from '@/utils/message-time';
import Emoji from './components/emoji.vue';

type MessageBoxProps = {
  messages: Array<BaseChatMessage>;
  anchor?: number;
  type?: 'PRIVATE' | 'GROUP';
  userAvatar?: string;
};

const props = defineProps<MessageBoxProps>();

const scrollRef = ref<HTMLDivElement>();

let inputText = '';
let chatList = props.messages;

const sendText = () => {
  // console.log('*******sendTextTriggered')
      if (inputText) {
        let chatMsg = {
          self: true,
          content: inputText,
          avatar: props.userAvatar || portraitImg,
          status: 'READ',
          time: Date.now()
        };
        sendMsg(chatMsg);
        // Emitting an event up to parent to reorder or do something when a new message is sent
        //$emit('personCardSort', this.frinedInfo.id)
        inputText = "";
      } else {
        alert("消息不能为空哦~");
      }
    }

const sendMsg = (message: BaseChatMessage) => {
      chatList.push(message);
      scrollBottom();
    }

const sendEmoji = (emoji: string) => {
        let chatMsg = {
          self: true,
          content: emoji,
          avatar: props.userAvatar || portraitImg,
          status: 'READ',
          time: Date.now(),
          type: 1 as const,
        };
      sendMsg(chatMsg);
      clickEmoji();
    }
const showEmoji = ref(false);
const clickEmoji = () => {
      showEmoji.value = !showEmoji.value;
    }

const scrollBottom = () => {
      nextTick(() => {
        const scrollDom = scrollRef.value;
        animation(scrollDom, scrollDom!.scrollHeight - scrollDom!.clientHeight);
      });
    }

let lastMessageTime = 0;
let lastDividerTime = 0;

const hasDivider = (time: number | undefined, index: number) => {
  if(!time) return false;

  if(index === 0 // 第一条消息
    || time - lastMessageTime >= 600000 // 距离上次消息超过10分钟
    || (time - lastDividerTime >= 360000 && (time / 60000 | 0) > lastMessageTime / 60000)) { // 距离上个DividerTime超过6分钟，且确保上个消息和此条消息不在一个分钟内（比如都在22:59）
    lastDividerTime = time;
    lastMessageTime = time;
    return true;
  }
  lastMessageTime = time;
  return false;
};

</script>

<template>
  <div class="message-box" ref="scrollRef">
    
    <ul class="chat-content">
      <li v-for="(item, index) in props.messages" :key="index" class="flex flex-col" :class="{'items-end': item.self}">
        <div class="time-divider" v-if="hasDivider(item.time, index)">{{formatEpochTime(item.time)}}</div>

        <!-- SELF MESSAGE -->
        <div class="message self" v-if="item.self">
          <span class="pr-8"></span>
          <span class="message-time pb-[1.4rem]">
            {{formatEpochTime(item.time)}}
          </span>
          <div class="bubble-wrapper self">
            <MessageBubble :content="item.content" :self="true" :type="item.type"/>
            <StatusContainer :message="item"/>
          </div>
          <img class="avatar" :src="item.avatar" alt="" />
        </div>

        <!-- OTHER MESSAGE -->
        <div class="message other" v-else>
          <img class="avatar" :src="item.avatar" alt="" />
          <div class="bubble-wrapper other">
            <MessageBubble :content="item.content" :self="false" :type="item.type"/>
            <StatusContainer :message="item"/>
          </div>
          <span class="message-time">
            {{formatEpochTime(item.time)}}
          </span>
          <span class="pl-8"></span>
        </div>
      </li>
      <div class="h-36"></div>
    </ul>

    <div class="input-mask"></div>
    <div class="input-mask-dark"></div>

    <div class="chat-inputs">
        <div class="emoji boxinput" @click="clickEmoji">
          <img src="@/assets/img/emoji/smiling-face.png" alt="" />
        </div>
        <div class="emoji-content">
          <transition name="fade">
            <Emoji
              v-show="showEmoji"
              @sendEmoji="sendEmoji"
              @closeEmoji="clickEmoji"
            />
          </transition>
        </div>
        <!-- Text input box -->
        <input class="inputs" v-model="inputText" @keyup.enter="sendText" />
        <!-- Button to send text -->
        <div class="send boxinput" @click="sendText">
          <img src="@/assets/img/emoji/rocket.png" alt="" />
        </div>
      </div>
  </div>

</template>

<style scoped>
@tailwind components;

@layer components {
  .message-box {
    scrollbar-gutter: stable;
    @apply p-8 h-full overflow-y-auto
  }

  .message-box::-webkit-scrollbar {
    @apply w-2 h-0 dark:bg-ultramarine-900 bg-slate-200
  }

  .message-box::-webkit-scrollbar-thumb {
    @apply dark:bg-slate-200 bg-white rounded-full
  }

  .chat-content {
    @apply flex flex-col gap-x-2 sm:gap-x-4;
  }

  .time-divider {
    @apply self-center dark:text-slate-200 text-purple-800 mt-4 mb-2 drop-shadow-[0_0_2px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_2px_rgba(255,255,255,0.35)];
  }

  .message {
    @apply grow my-3 relative z-0 flex gap-3;

    .message-time {
      @apply text-slate-700 dark:text-white self-center -z-20 opacity-0;
      transition: opacity 0.3s ease 50ms, transform 0.2s ease-in-out 100ms;
    }

    &.self {
      @apply w-full justify-end;

      .message-time {
        @apply translate-x-12;
      }

      &:hover {
        .message-time {
          @apply -translate-x-3 opacity-100;
        }
      }
    }

    &.other {
      @apply me-11;

      .message-time {
        @apply -translate-x-12;
      }

      &:hover {
        .message-time {
          @apply translate-x-3 opacity-100;
        }
      }
    }
  }

  .avatar {
    @apply inline-block size-9 rounded-full bg-white;
  }

  .bubble-wrapper {
    @apply inline-flex flex-col -z-10;
  }

  .status {
    @apply mt-1.5 flex items-center gap-x-1 text-xs dark:text-gray-200  text-gray-700;
  }

  .input-mask {
    @apply absolute bottom-0 left-0 w-[calc(100%-0.5rem)] h-28 pointer-events-none to-transparent dark:bg-gradient-to-t dark:from-ultramarine-900 dark:via-ultramarine-900/80 opacity-0 dark:opacity-100 transition-opacity duration-300;
  }
  .input-mask-dark {
    @apply absolute bottom-0 left-0 w-[calc(100%-0.5rem)] h-28 pointer-events-none to-transparent bg-gradient-to-t from-slate-200 via-slate-200/80 opacity-100 dark:opacity-0 transition-opacity duration-300;
  }

  .chat-inputs {
    @apply w-[90%] absolute bottom-0 m-[3%] flex;

    .boxinput {
      @apply w-[50px] h-[50px] bg-[rgb(66,70,86)] rounded-[15px] border border-[rgb(80,85,103)] relative cursor-pointer;
      img {
        @apply w-[30px] h-[30px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
      }
    }

    .emoji {
      @apply transition-all duration-300 bg-slate-200 dark:bg-[rgb(66,70,86)] border-2 border-[rgba(71,73,82,0.7)];
      &:hover {
        @apply bg-yellow-50 dark:bg-[rgb(46,49,61)] ;
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      @apply transition-opacity duration-150;
    }
    .fade-enter-from,
    .fade-leave-to {
      @apply opacity-0;
    }

    .inputs {
      @apply w-[90%] h-[50px] bg-slate-300 dark:bg-[rgb(66,70,86)] rounded-[15px] border-2 border-[rgb(34,135,225)] px-[10px] box-border transition duration-200 text-[20px] text-white font-light mx-[20px];
      &:focus {
        @apply outline-none;
      }
    }

    .send {
      @apply bg-[rgb(29,144,245)] border-0 transition-all duration-300 shadow-[0px_0px_5px_0px_rgba(0,136,255)] hover:shadow-[0px_0px_10px_0px_rgba(0,136,255)];
    }
  }
}
</style>
