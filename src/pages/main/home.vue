<script setup lang="ts">

import ChannelList from "@/components/channel/channel-list.vue";
import ChannelDetail from "@/components/channel/channel-detail.vue";
</script>

<template>
<div class="home-page flex flex-row w-full">
	<channel-list/>
	<channel-detail class="flex-1"/>
</div>
</template>

<style scoped>

</style>