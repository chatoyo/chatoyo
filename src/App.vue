<script setup lang="ts">
</script>

<template>
<div class="min-h-[100vh] flex flex-col justify-center p-4">
	<h1 class="title-demo">如果你看到这一行字，并且这行字是粗体且宝石色，说明启动成功</h1>
	<h1 class="title-demo">Welcome to ChatoYo</h1>
</div>
</template>

<style scoped>
@tailwind components;
@layer components {
	.title-demo {
		@apply text-xl text-emerald-500 font-bold text-center
	}
}
</style>
