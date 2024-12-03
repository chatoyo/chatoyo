<script setup lang="ts">
import ChannelList from "@components/list/list.vue";
import ChannelDetail, { Channel } from "@/components/channel/channel-detail.vue";
import HomeCard from "@/components/home/home-card.vue";
import {ref} from "vue";
import { ChannelMessage } from "@/components/chat/chat-message.vue";

const channelSelected = ref<Channel | undefined>(undefined);

const chatLog = ref<Array<ChannelMessage>>([
	{
		content: '你好，我是西风骑士团团长，琴·古恩希尔德。叫我琴就好',
		avatar: 'https://patchwiki.biligame.com/images/ys/8/8d/lm9cpnooekvfzfy7fbogykwjro3v5lw.png',
		status: '',
		self: false
	},
	{
		content: '亻尔女子',
		avatar: 'https://patchwiki.biligame.com/images/ys/5/58/qp92ut2iic6699bu9h72reklefh1yb1.png',
		status: '',
		self: true
	}, {
		content: '旅行者姐姐，要和可莉一起去炸鱼吗',
		avatar: 'https://patchwiki.biligame.com/images/ys/2/26/59ohlo0p92xb8d7qut9ul8wi0ij6ehw.png',
		status: "", self: false
	},
]);

const channels = ref<Array<Channel>>([
	{
		id: 1,
		title: '原神项目组',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/def1f2abcfc2af0bbe2e5900a60a5ee1_5699547505742166353.png'
	}, {
		id: 2,
		title: '崩坏·星穹铁道项目组',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/870472d6104dbbe7ea18b27c13763ccb_5300916022261002498.png'
	}, {
		id: 3,
		title: '绝区零项目组',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2022/05/27/3896559583929f643fbe39ec1d6ca1c9_1026345827445617861.png'
	}, {
		id: 4,
		title: '崩坏3项目组',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/4080f2eb748823d8c38507c3d7b69b36_936817768851375073.png'
	}, {
		id: 5,
		title: '崩坏学园2项目组',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/11/320a35c423a3d8ca043d7ee14a8c7925_602536019813937911.png'
	}, {
		id: 6,
		title: '未定事件簿项目组',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/a103c80cb895bfdfb7496f4233b63158_8329011972047580487.png'
	},
]);
</script>

<template>
<div class="home-page flex flex-row w-full">
	<channel-list class="w-[20rem]"
	              v-model:selected-channel="channelSelected"
	              :data="channels"
	              title="频道"
	              subtitle="Channel"/>
	<div class="main-container">
		<channel-detail v-if="channelSelected" :channel="channelSelected" :messages="chatLog"/>
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