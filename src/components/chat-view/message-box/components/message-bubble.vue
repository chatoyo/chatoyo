<script setup lang="ts">
	type MessgeBubbleProps = {
		content: string,
		self: boolean
	}

	const props = defineProps<MessgeBubbleProps>();

</script>

<template>
	<div :class="{'self-bubble': self, 'other-bubble': !self}">
		<div class="bubble-content">
			<p class="bubble-text">
			  {{ props.content }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@tailwind components;
.bubble-text{
	@apply text-base;
}

.self-bubble {

	@apply inline-block bg-blue-600 rounded-2xl p-4 shadow-sm;

	.bubble-text {
		@apply text-white;
	}
}

.other-bubble {

	@apply bg-purple-50 border border-gray-200 rounded-2xl p-4 space-y-3;

	.bubble-content {
		@apply space-y-1.5;

		.bubble-text {
			@apply text-gray-800; 
		}

	}
}
</style>