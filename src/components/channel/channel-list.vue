<script setup lang="ts">
const channels = ref([
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
])

const selected = defineModel<{ id: number }>("selectedChannel")
</script>

<template>
<div class="channel-list-component">
	<div class="title flex gap-2 items-baseline select-none min-h-12">
		<span class="text-xl font-bold text-emerald-400">频道</span>
		<span class="text-md font-bold text-emerald-400">Channel</span>
		<button
			v-if="selected"
			@click="selected=undefined"
			class="ml-auto inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none justify-self-center whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
			<span>返回首页</span>
		</button>
	</div>
	
	<ul class="divide-y divide-slate-100">
		<li class="channel-item"
		    :class="{'selected': selected?.id === item.id}"
		    v-for="(item,index) in channels"
		    :key="index"
		    @click="selected=item"
		>
			<div class="shrink-0">
				<a href="#" class="relative flex items-center justify-center w-10 h-10 text-white rounded-full">
					<img :src="item.pic" alt="user name" title="user name" width="40" height="40"
					     class="max-w-full rounded-full"/>
					<span
						class="absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
						<span class="sr-only"> offline </span>
					</span>
				</a>
			</div>
			<div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
				<h4 class="text-base text-slate-100">{{ item.title }}</h4>
				<p class="description">{{
						item.description
					}}</p>
			</div>
		</li>
	</ul>
</div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
	.channel-list-component {
		@apply w-[25rem] bg-[#184183] px-4 py-8 flex flex-col gap-4
	}
	
	.channel-item {
		@apply flex items-center gap-4 px-4 py-3 select-none cursor-pointer
		hover:bg-slate-300/20 transition-all duration-300;
		
		.description {
			@apply w-full text-sm truncate text-slate-400;
		}
		
		&.selected {
			@apply bg-sky-200/30;
			
			.description {
				@apply text-slate-800;
			}
		}
		
	}
	
}
</style>