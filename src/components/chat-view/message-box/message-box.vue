<script setup lang="ts">
import SentStatusIcon from "@/assets/svgs/SentStatusIcon.vue";
import portraitImg from '@/assets/img/head_portrait.jpg';

import { BaseChatMessage } from "@/models/chat-message.ts";
import MessageBubble from "./components/message-bubble.vue"
import { nextTick, ref } from "vue";
import { animation } from "@/utils/util";

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
          status: ''
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

const scrollBottom = () => {
      nextTick(() => {
        const scrollDom = scrollRef.value;
        animation(scrollDom, scrollDom!.scrollHeight - scrollDom!.offsetHeight);
      });
    }
</script>

<template>
  <div class="message-box" ref="scrollRef">
    <ul class="chat-content">
      <li class="message" v-for="(item, index) in props.messages" :key="index">
        <!-- SELF MESSAGE -->
        <div class="self" v-if="item.self">
          <div class="self-wrapper">
            <MessageBubble :content="item.content" :self="true" />
            <span class="self-status">
              <SentStatusIcon />
              已发送
            </span>
          </div>
          <img class="avatar" :src="item.avatar" alt="" />
        </div>

        <!-- OTHER MESSAGE -->
        <div class="other" v-else>
          <img class="avatar" :src="item.avatar" alt="" />
          <div>
            <MessageBubble :content="item.content" :self="false" />
            <span class="status">
              <SentStatusIcon />
              已发送
            </span>
          </div>
        </div>
      </li>
      <span class="h-28"></span>
    </ul>
    <div class="input-mask"></div>
    <div class="input-mask-dark"></div>
    <div class="chat-inputs">
        <div class="emoji boxinput" @click="">
          <img src="@/assets/img/emoji/smiling-face.png" alt="" />
        </div>
        <div class="emoji-content">
          <Emoji
            v-show="undefined"
            @sendEmoji=""
            @closeEmoji=""
          />
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
    @apply w-2 h-1 bg-ultramarine-900 dark:bg-slate-200
  }

  .message-box::-webkit-scrollbar-thumb {
    @apply bg-slate-200 dark:bg-ultramarine-900
  }

  .chat-content {
    @apply space-y-5 flex flex-col gap-x-2 sm:gap-x-4;
  }

  .message {
    @apply grow;
  }

  .self {
    @apply flex gap-2 w-full justify-end space-y-3;
  }

  .other {
    @apply max-w-lg me-11 flex gap-2;
  }

  .avatar {
    @apply inline-block size-9 rounded-full bg-white;
  }

  /* Self (sender) styles */
  .self-wrapper {
    @apply inline-flex flex-col justify-end;
  }

  .self-status {
    @apply mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-200;
  }

  .status {
    @apply mt-1.5 flex items-center gap-x-1 text-xs text-gray-200;
  }

  .input-mask {
    @apply absolute bottom-0 left-0 w-full h-32 pointer-events-none to-transparent dark:bg-gradient-to-t dark:from-ultramarine-900 dark:via-ultramarine-900/80 opacity-0 dark:opacity-100 transition-opacity duration-300;
  }
  .input-mask-dark {
    @apply absolute bottom-0 left-0 w-full h-32 pointer-events-none to-transparent bg-gradient-to-t from-slate-200 via-slate-200/80 opacity-100 dark:opacity-0 transition-opacity duration-300;
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
      @apply transition-all duration-300;
      &:hover {
        @apply bg-[rgb(46,49,61)] border border-[rgb(71,73,82)];
      }
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
