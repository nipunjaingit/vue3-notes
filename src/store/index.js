import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage
});

export const store = createStore({
    state () {
      return {
        notes: []
      }
    },
    mutations: {
        addNote (state, note) {
            state.notes = [...state.notes, note];
        },
        deleteNote (state, note) {
            let notes = state.notes;
            let index = notes.findIndex(n => {
                return n.id === note.id
            })
            if (index > -1) {
                notes.splice(index, 1);
            }
            state.notes = notes;
        },
        updateNote (state, note) {
            let notes = state.notes;
            let index = notes.findIndex(n => {
                return n.id === note.id
            })
            if (index > -1) {
                notes[index] = note;
            }
            state.notes = notes;
        }
    },
    actions: {},
    plugins: [vuexLocalStorage.plugin]
})
