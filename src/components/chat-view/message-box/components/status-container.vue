<script setup lang="ts">
import { BaseChatMessage } from '@/models';
import StatusSent from './status-sent.vue';
import StatusUnread from './status-unread.vue';
import StatusSending from './status-sending.vue';

type StatusProps = {
    message: BaseChatMessage
}
const props = defineProps<StatusProps>();

</script>

<template>
    <div v-if="message.self === false" class="hidden">
    </div>
    <div v-else-if="message.status === 'SENT'">
        <StatusSent/>
    </div>
    <div v-else-if="message.status === 'UNREAD'">
        <StatusUnread/>
    </div>
    <div v-else-if="message.status === 'SENDING'">
        <StatusSending/>
    </div>
</template>