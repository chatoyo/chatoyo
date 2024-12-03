<script setup lang="ts">
import DetailHeader from "@components/channel/detail/detail-header.vue";
import ChatMessage, { ChannelMessage } from "@components/chat/chat-message.vue";

export type Channel = {
	id: number,
	title: string,
	description: string,
	pic: string
}

type ChannelDetailProps = {
	channel: Channel,
	messages: Array<ChannelMessage>
}

const props = defineProps<ChannelDetailProps>();


</script>

<template>
<div class="channel-detail-component">
	<div class="top-bar">
		<detail-header :title="props.channel.title" :pic="props.channel.pic"/>
	</div>
	
	<div class="chat-content">
		<chat-message :messages="props.messages"/>
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