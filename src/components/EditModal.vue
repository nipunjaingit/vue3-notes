<template>
    <teleport to="body">
        <div class="modal" v-if="show">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="inner-content is-relative">
                    <input class="input" type="text" placeholder="Title" v-model="title">
                    <textarea class="textarea mt-2" type="text" placeholder="Add a note" v-model="noteText"></textarea>
                    <div class="is-flex is-align-items-center is-justify-content-center mt-2">
                        <button class="button mx-2 confirm-button red" @click="closeFunction">
                            <span class="icon">
                                <i class="gg-close"></i>
                            </span>
                        </button>
                        <button class="button mt-2 confirm-button green" @click="saveNote">
                            <span class="icon">
                                <i class="gg-check"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        note: Object,
        show: Boolean,
        closeFunction: Function
    },
    data () {
        return {
            title: this.note.title,
            noteText: this.note.note
        }
    },
    methods: {
        ...mapMutations(['updateNote']),
        saveNote () {
            this.updateNote({id: this.note.id, title: this.title, note: this.noteText});
            this.closeFunction();
        }
    }
}
</script>