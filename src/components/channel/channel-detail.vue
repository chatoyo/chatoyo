<script setup lang="ts">
import {ref} from 'vue';

const props = withDefaults(defineProps<{ channel: {} }>(), {
	channel: undefined
})

const chatLog = ref([
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
	}
])
</script>

<template>
<div class="channel-detail-component">
	<div class="top-bar">
		<header
			class="relative z-20 w-full border-b shadow-lg
			border-slate-200 bg-white/90 shadow-slate-700/5
			after:absolute after:top-full after:left-0 after:z-10 after:block
			after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
			<div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<nav aria-label="main navigation"
				     class="flex h-16 items-center justify-between font-medium text-slate-700" role="navigation">
					<div class="channel-logo flex gap-4 items-center">
						<img :src="props.channel?.pic" :alt="props.channel?.title" width="40" height="40"
						     class="max-w-full rounded-full"/>
						<span class="text-[#04263E] text-xl font-bold select-none">{{ props.channel?.title }}</span>
					</div>
					
					<!-- Mobile trigger -->
					<button class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
					        aria-expanded="false" aria-label="Toggle navigation">
						<div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
							<span aria-hidden="true"
							      class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
							<span aria-hidden="true"
							      class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
							<span aria-hidden="true"
							      class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
						</div>
					</button>
					
					<div class="flex items-center justify-end px-6 ml-auto lg:ml-0 lg:flex-1 lg:p-0">
						<a href="#"
						   class="relative inline-flex items-center justify-center w-10 h-10 text-lg rounded-full text-emerald-500 hover:bg-slate-300">
							<span class="text-[#04263E] pi pi-bell"/>
							<span
								class="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
            2
            <span class="sr-only"> new emails </span>
          </span>
						</a>
					</div>
				</nav>
			</div>
		</header>
	</div>
	
	
	<div class="chat-content">
		
		<ul class="space-y-5">
			
			<li class="flex gap-x-2 sm:gap-x-4" v-for="(item,index) in chatLog" :key="index">
				<div class="self grow text-end space-y-3" v-if="item.self">
					<div class="inline-flex flex-col justify-end">
						<!-- Card -->
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
					<img class="inline-block size-9 rounded-full"
					     :src="item.avatar"
					     alt="Avatar">
				</div>
				<div class="other max-w-lg me-11 " v-else>
					<img class="inline-block size-9 rounded-full"
					     :src="item.avatar"
					     alt="Avatar">
					<div>
						<!-- Card -->
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