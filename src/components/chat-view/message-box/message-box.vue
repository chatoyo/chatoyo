<script setup lang="ts">
import {BaseChatMessage} from "@/models/chat-message.ts";

type ChannelMessageProps = {
	messages: Array<BaseChatMessage>
}

const props = defineProps<ChannelMessageProps>();
</script>

<template>
<ul class="message-box">
	<li class="message" v-for="(item,index) in props.messages" :key="index">
		<div class="self" v-if="item.self">
			<div class="inline-flex flex-col justify-end">
				
				<div class="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
					<p class="text-sm text-white">
						{{ item.content }}
					</p>
				</div>
				
				<span class="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-200">
		          <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
		               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		            <path d="M18 6 7 17l-5-5"></path>
		            <path d="m22 10-7.5 7.5L13 16"></path>
		          </svg>
		          已发送
        </span>
			</div>
			<img class="avatar"
			     :src="item.avatar"
			     alt="Avatar">
		</div>
		<div class="other" v-else>
			<img class="avatar"
			     :src="item.avatar"
			     alt="Avatar">
			<div>
				<div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3">
					<div class="space-y-1.5">
						<p class="mb-1.5 text-sm text-gray-800">
							{{ item.content }}
						</p>
					</div>
				</div>
				<span class="status mt-1.5 flex items-center gap-x-1 text-xs text-gray-200">
		        <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
		             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		          <path d="M18 6 7 17l-5-5"></path>
		          <path d="m22 10-7.5 7.5L13 16"></path>
		        </svg>
            已发送
        </span>
			</div>
		</div>
	</li>
</ul>
</template>

<style scoped>
@tailwind components;
@layer components {
	.message-box {
		@apply space-y-5 flex flex-col gap-x-2 sm:gap-x-4
	}
	
	.message {
		@apply grow
	}
	
	.self {
		@apply flex gap-2 w-full justify-end space-y-3
	}
	
	.other {
		@apply max-w-lg me-11 flex gap-2
	}
	
	.avatar {
		@apply inline-block size-9 rounded-full bg-white
	}
}
</style>