<script setup lang="ts">
import { ChatItem, BaseChatMessage } from "@/models";

import MessageBox from "./message-box/message-box.vue";
import ChatViewHeader from "./header/chat-view-header.vue";

type ChatViewProps = {
	currentChat: ChatItem,
	messages: Array<BaseChatMessage>
}

const props = defineProps<ChatViewProps>();
</script>

<template>
	<div class="chat-view">
		<ChatViewHeader :title="props.currentChat.title" :pic="props.currentChat.pic" />

		<MessageBox :messages="props.messages" />
	</div>
</template>

<style scoped>
@tailwind components;

@layer components {
	.chat-view {
		@apply h-full relative
	}
}
</style>