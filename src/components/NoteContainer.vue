<template>
    <div class="notes">
        <note v-for="(note, index) in notes" :key="index" :note="note"></note>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        Note: defineAsyncComponent(() => import('@/components/Note'))
    },
    computed: {
        ...mapState(['notes'])
    }
}
</script>