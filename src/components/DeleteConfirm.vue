<template>
    <teleport to="body">
        <div class="modal" v-if="show">
            <div class="modal-background"></div>
            <div class="modal-content">
                <h4>Are you sure you want to delete this note ?</h4>
                <div class="is-flex is-align-items-center is-justify-content-center mt-2">
                    <button class="button mx-2 confirm-button red" @click="closeFunction">
                        <span class="icon">
                            <i class="gg-close"></i>
                        </span>
                    </button>
                    <button class="button mx-2 confirm-button green" @click="deleteFunction">
                        <span class="icon">
                            <i class="gg-check"></i>
                        </span>
                    </button>
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
        closeFunction: Function,
        show: Boolean
    },
    methods: {
        ...mapMutations(['deleteNote']),
        deleteFunction () {
            this.deleteNote(this.note);
            this.closeFunction();
        }
    }
}
</script>