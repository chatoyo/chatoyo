<script setup lang="ts">
import {ChatItem, BaseChatMessage} from "@/models";

import MessageBox from "./message-box/message-box.vue";
import ChatViewHeader from "./header/chat-view-header.vue";

type ChatViewProps = {
	currentChat: ChatItem,
	messages: Array<BaseChatMessage>
}

const props = defineProps<ChatViewProps>();
</script>

<template>
<div class="channel-detail-component">
	<div class="header">
		<ChatViewHeader :title="props.currentChat.title"
		               :pic="props.currentChat.pic"/>
	</div>
	
	<div class="chat-content">
		<MessageBox :messages="props.messages"/>
	</div>
</div>
</template>

<style scoped>
@tailwind components;
@layer components {
	.chat-content {
		@apply p-8
	}
}
</style>