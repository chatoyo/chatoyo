<script setup
        lang="ts">
import {ref} from "vue";
import MessageList from "@components/list/list.vue";
import {List} from '@/models'

const message = ref<List[]>([
	{
		id: 1,
		title: '刘伟',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/def1f2abcfc2af0bbe2e5900a60a5ee1_5699547505742166353.png'
	}, {
		id: 2,
		title: '蔡浩宇',
		description: "你说得对，但是你说得对",
		pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/870472d6104dbbe7ea18b27c13763ccb_5300916022261002498.png'
	},
]);
</script>

<template>
<div class="message-center">
	<message-list :data="message"
	              title="消息中心"
	              subtitle="Message Center"
	              class="w-[20rem]"/>
</div>
</template>

<style scoped>

</style>