<template>
    <div class="main-content">
        <Navbar />
        <div class="content mt-5">
            <Input />
            <NoteContainer />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        Navbar: defineAsyncComponent(() => import('@/components/Layout/Navbar')),
        Input: defineAsyncComponent(() => import('@/components/Input')),
        NoteContainer: defineAsyncComponent(() => import('@/components/NoteContainer'))
    }
}
</script>