<template>
    <div class="note">
        <div class="p-4">
            <b>{{note.title}}</b>
            <p>{{note.note}}</p>
        </div>
        <note-options :note="note"></note-options>
    </div>
</template>

<script>
import NoteOptions from '@/components/NoteOptions'
export default {
    components: {
        NoteOptions
    },
    props: {
        note: Object
    }    
}
</script>