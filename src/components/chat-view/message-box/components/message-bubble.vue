<script setup lang="ts">
	type MessgeBubbleProps = {
		content: string,
		self: boolean,
		type?: 1 | 2
	}

	const props = defineProps<MessgeBubbleProps>();

</script>

<template>
	<div v-if="type === 1">
		<img
			:src="content"
			alt="表情"
			style="width: 100px; height: 100px"
		/>
	</div>
	<div v-else :class="{'self-bubble': self, 'other-bubble': !self}">
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

	@apply break-words text-wrap bg-blue-600 rounded-xl max-w-lg p-4 shadow-[0px_0px_10px_12px_slate-200] dark:shadow-dark-bg transition-shadow duration-300 dark:duration-200 hover:shadow-[0px_0px_2px_1.5px_#8b8680] hover:dark:shadow-lightBlue-900 hover:duration-0;

	&::before{
        @apply right-10 top-3 content-[''] absolute w-0 h-0 !border-l-blue-600;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 10px solid;
    }

	.bubble-text {
		@apply text-white;
	}
}

.other-bubble {

	@apply break-words text-wrap bg-purple-50 border border-gray-200 rounded-xl max-w-lg p-4 space-y-3 shadow-[0px_0px_10px_12px_slate-200] dark:shadow-dark-bg transition-shadow duration-300 dark:duration-200 hover:shadow-[0px_0px_2px_3px_lightgrey] hover:dark:shadow-gray-500 hover:duration-0;

	&::after{
        @apply left-10 top-3 content-[''] absolute w-0 h-0 !border-r-purple-50;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 10px solid;
    }

	.bubble-content {
		@apply space-y-1.5;

		.bubble-text {
			@apply text-gray-800; 
		}

	}
}
</style>