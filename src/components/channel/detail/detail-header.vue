<script setup lang="ts">
export type ChannelDetailHeaderProps = {
	title: string,
	pic: string
}

const props = defineProps<ChannelDetailHeaderProps>();
</script>

<template>
<header
	class="relative z-20 w-full border-b shadow-lg
			border-slate-200 bg-white/90 shadow-slate-700/5
			after:absolute after:top-full after:left-0 after:z-10 after:block
			after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
	<div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
		<nav aria-label="main navigation"
		     class="flex gap-2 h-16 items-center justify-between font-medium text-slate-700" role="navigation">
			<div class="channel-logo flex gap-4 items-center flex-1 lg:max-w-[80%]">
				<img :src="props.pic" :alt="props.title" width="40" height="40"
				     class="max-w-full rounded-full"/>
				<span class="text-[#04263E] text-xl font-bold select-none text-nowrap whitespace-nowrap text-ellipsis">{{ props.title }}</span>
			</div>
			
			<!-- Mobile trigger -->
			
			<div class="flex items-center justify-end px-6 ml-auto lg:ml-0 lg:p-0">
				<a href="#"
				   class="relative inline-flex items-center justify-center w-10 h-10 text-lg rounded-full text-emerald-500 hover:bg-slate-300 transition-all duration-300">
<!--					<span class="text-[#04263E] pi pi-sun"/>-->
					<span class="text-[#04263E] pi pi-moon"/>
				</a>
			</div>
			<div class="flex items-center">
				<div class="relative">
					<input type="text"
					       placeholder="搜索..."
					       class="py-2 px-4 block w-full border-0 hover:outline-teal-400 rounded-lg text-sm transition-all duration-300
					       focus:outline-teal-500 focus:ring-teal-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400"
					/>
					<div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
						<span class="pi pi-search cursor-pointer"/>
					</div>
				</div>
			</div>
			
			
			<div class="flex items-center justify-end px-6 ml-auto lg:ml-0  lg:p-0">
				<a href="#"
				   class="relative inline-flex items-center justify-center w-10 h-10 text-lg rounded-full text-emerald-500 hover:bg-slate-300 transition-all duration-300">
					<span class="text-[#04263E] pi pi-bell"/>
					<span
						class="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
            2
            <span class="sr-only"> new messages </span>
          </span>
				</a>
			</div>
		</nav>
	</div>
</header>
</template>

<style scoped>

</style>