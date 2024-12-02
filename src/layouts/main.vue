<script setup lang="ts">

import Sidebar from "@/components/layout/sidebar.vue";
</script>

<template>
<div class="layout">
	<sidebar />
	<router-view/>
</div>
</template>

<style scoped>
@layer component {
	.layout {
		@apply min-h-[100vh] flex flex-row
	}
}
</style>