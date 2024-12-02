<script setup lang="ts">
const props = withDefaults(defineProps<{ channel: {} }>(), {
	channel: undefined
})
</script>

<template>
<div class="channel-detail-component">
	<div class="top-bar">
		<header
			class="relative z-20 w-full border-b shadow-lg  border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
			<div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<nav aria-label="main navigation"
				     class="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700" role="navigation">
					<span class="text-emerald-500 text-xl font-bold">{{ props.channel?.title }}</span>
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
					<!-- Navigation links -->
					<ul role="menubar" aria-label="Select page"
					    class="invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">
						<li role="none" class="flex items-stretch">
							<a role="menuitem" aria-haspopup="false"
							   class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
							   href="javascript:void(0)"> <span>Shop</span></a>
						</li>
						<li role="none" class="flex items-stretch">
							<a role="menuitem" aria-current="page" aria-haspopup="false"
							   class="flex items-center gap-2 py-4 transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
							   href="javascript:void(0)"> <span>Account</span> </a>
						</li>
						<li role="none" class="flex items-stretch">
							<a role="menuitem" aria-haspopup="false"
							   class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
							   href="javascript:void(0)"> <span>Wishlist</span> </a>
						</li>
					</ul>
					<!-- Actions -->
					<div class="flex items-center justify-end px-6 ml-auto lg:ml-0 lg:flex-1 lg:p-0">
						<a href="#"
						   class="relative inline-flex items-center justify-center w-10 h-10 text-lg rounded-full text-emerald-500">
							<span class="text-emerald-400 pi pi-bell"/>
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
	<div class="channel-content"/>
</div>
</template>

<style scoped>

</style>