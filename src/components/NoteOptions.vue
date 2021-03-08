<template>
    <edit-modal :note="note" :show="showEdit" :closeFunction="setEditModal.bind(this, false)" v-if="note"></edit-modal>
    <delete-confirm :note="note" :show="showDelete" :closeFunction="setDeleteModal.bind(this, false)" v-if="note"></delete-confirm>
    <div class="note-options is-flex is-align-items-center is-justify-content-flex-end">
        <div class="icon" @click="setEditModal(true)">
            <i class="gg-pen"></i>
        </div>
        <div class="icon" @click="setDeleteModal(true)">
            <i class="gg-trash"></i>
        </div>
    </div>
</template>

<script>
import EditModal from '@/components/EditModal'
import DeleteConfirm from '@/components/DeleteConfirm'
export default {
    props: {
        note: Object
    },
    components: {
        EditModal,
        DeleteConfirm
    },
    data () {
        return {
            showEdit: false,
            showDelete: false
        }
    },
    methods: {
        setEditModal (value) {
            this.showEdit = value;
        },
        setDeleteModal (value) {
            this.showDelete = value;
        }
    }
}
</script>