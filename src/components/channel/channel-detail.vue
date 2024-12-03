<script setup lang="ts">
import DetailHeader from "@components/channel/detail/detail-header.vue";
import ChatMessage from "@components/chat/chat-message.vue";

interface ChannelDetailProp {
	channel: {},
	message: []
}

const props = withDefaults(defineProps<ChannelDetailProp>(), {
	channel: undefined
})


</script>

<template>
<div class="channel-detail-component">
	<div class="top-bar">
		<detail-header :title="props.channel.title" :pic="props.channel.pic"/>
	</div>
	
	<div class="chat-content">
		<chat-message :message="props.message"/>
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