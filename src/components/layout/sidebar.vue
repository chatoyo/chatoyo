<script setup lang="ts">
import SidebarMenu from "@assets/sidebar-menu.ts"
import {icon} from "@/utils/transcript.ts";
import {useRoute, useRouter} from "vue-router";

type SidebarProps = {
	avatar?: string
}

const props = withDefaults(
	defineProps<SidebarProps>(),
	{
		avatar: "/images/avatar-test.jpg"
	}
);

const router = useRouter()
const route = useRoute()

const iconWithStyle = (iconName: string): string[] => [icon(iconName)];
const isActive = (itemRoute: string): {} => ({
	'active-item': isCurrentRoute(itemRoute)
});

const isCurrentRoute = (itemRoute: string) => route.name === itemRoute;

const handleClick = (target: string) => {
	router.push({name: target})
}
</script>

<template>
	<div class="sidebar">
		<div class="logo" @click="handleClick('home')">
			ChatoYo
		</div>
		<div class="avatar" :class="isActive('setting')" @click="handleClick('setting')">
			<img class="avatar-img" :src="props.avatar" />
		</div>

		<ul class="nav-container">
			<li class="nav" :class="isActive(item.target)" v-for="(item,index) in SidebarMenu" :key="index"
				@click="handleClick(item.target)">
				<span :class="iconWithStyle(item.icon)" class="text-2xl" />
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
	.sidebar {
		@apply bg-[#04263E] min-w-24 flex flex-col items-center py-8 gap-8;

		.logo {
			@apply text-[#12D989] uppercase select-none cursor-pointer font-extrabold
		}

		.active-item {
			@apply px-0 w-full bg-emerald-500 hover:text-white hover:bg-emerald-500
			/*应该清除和未选中状态下互斥的样式*/
		}

		.avatar{
			@apply inline-flex justify-center items-center h-16 w-full cursor-pointer py-2 rounded-md
			hover:bg-slate-300/50
			transition-all duration-300;

			.avatar-img {
				@apply rounded-[50%] aspect-square h-[95%]
				hover:h-full
				transition-all duration-300
			}
		}

		.nav-container {
			@apply flex flex-col gap-2 w-full;
			.nav {
				@apply text-white py-4 px-6 cursor-pointer transition-all duration-300 rounded-md inline-flex justify-center
				dark:text-white
				hover:text-emerald-500 hover:bg-slate-300/50
			}
		}
	}
	
}
</style>