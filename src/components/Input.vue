<template>
    <div class="is-relative input-container has-background-white p-2">
        <input class="input" type="text" placeholder="Title" v-model="noteTitle">
        <textarea class="textarea mt-2" type="text" placeholder="Add a note" v-model="note"></textarea>
        <button class="button mt-2 add-button" :disabled="note === ''" @click="saveNote">
            <span class="icon">
                <i class="gg-add-r"></i>
            </span>
        </button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
export default {
    data () {
        return{
            noteTitle: '',
            note: ''
        }
    },
    methods: {
        ...mapMutations(['addNote']),
        saveNote () {
            if (this.note !== '') {
                this.addNote({id: uuidv4(), title: this.noteTitle, note: this.note})
                this.note = '';
                this.noteTitle = '';
            }
        }
    }
}
</script>