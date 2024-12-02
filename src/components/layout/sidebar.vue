<script setup lang="ts">
import SidebarMenu from "@assets/sidebar-menu.ts"
import {icon} from "@/utils/transcript.ts";

import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

const iconWithStyle = (iconName: string): string[] => [icon(iconName)]
const navStyle = (itemRoute: string): {} => ({
	'active-item': currentRoute(itemRoute)
})

const currentRoute = (itemRoute: string) => route.name === itemRoute
</script>

<template>
<div class="sidebar bg-[#04263E] min-w-24 flex flex-col items-center py-8 gap-8">
	<div class="logo text-[#12D989] uppercase select-none cursor-pointer font-extrabold"
	     @click="router.push({name:'home'})">
		ChatoYo
	</div>
	<div class="avatar" :class="navStyle('setting')" @click="router.push({name:'setting'})">
		<img class="avatar-img" src="/images/avatar-test.jpg"/>
	</div>
	
	<ul class="navigation flex flex-col gap-2 w-full">
		<li class="nav"
		    :class="navStyle(item.target)"
		    v-for="(item,index) in SidebarMenu" :key="index"
		    @click="router.push({name:item.target})">
			<span :class="iconWithStyle(item.icon)"
			      class="text-2xl"/>
		</li>
	</ul>
</div>
</template>

<style scoped>
@tailwind components;
@layer components {
	.nav {
		@apply text-white py-4 px-6 cursor-pointer transition-all duration-300 rounded-md inline-flex justify-center
		dark:text-white
		hover:text-emerald-500 hover:bg-slate-300/50
	}
	
	.active-item {
		@apply px-0 w-full bg-emerald-500 hover:text-white hover:bg-emerald-500
		/*应该清除和未选中状态下互斥的样式*/
	}
	
	.avatar{
		@apply inline-flex justify-center items-center h-16 w-full cursor-pointer py-2 rounded-md
		hover:bg-slate-300/50
		transition-all duration-300
	}
	
	.avatar-img {
		@apply rounded-[50%] aspect-square h-[95%]
		hover:h-full
		transition-all duration-300
	}
}
</style>