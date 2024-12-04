<script setup lang="ts">
import {Channel} from "@/models";
import {ChannelMessage} from "@/models";

import ChatMessage from "@components/chat/chat-message.vue";
import DetailHeader from "@components/channel/detail/detail-header.vue";

type ChannelDetailProps = {
	channel: Channel,
	messages: Array<ChannelMessage>
}

const props = defineProps<ChannelDetailProps>();
</script>

<template>
<div class="channel-detail-component">
	<div class="header">
		<detail-header :title="props.channel.title"
		               :pic="props.channel.pic"/>
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