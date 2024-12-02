<script setup lang="ts">
import ChannelList from "@/components/channel/channel-list.vue";
import ChannelDetail from "@/components/channel/channel-detail.vue";
import HomeCard from "@/components/home/home-card.vue";

const channelSelected = ref<{}>()
</script>

<template>
<div class="home-page flex flex-row w-full">
	<channel-list v-model:selected-channel="channelSelected"/>
	<div class="main-container">
		<channel-detail v-if="channelSelected" :channel="channelSelected"/>
		<home-card v-else/>
	</div>
</div>
</template>

<style scoped>
@tailwind components;
@layer components {
	.main-container {
		@apply flex-1 bg-[#0c263a] h-screen w-full
	}
}
</style>