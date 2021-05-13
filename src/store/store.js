import { createStore } from 'vuex'
import { hash, hashSimple } from '../lib/hasher.js'
import { copyById } from '../lib/copier.js'
import { iconString } from '../lib/iconer.js'
import { CHANGE_ALIAS, CHANGE_MASTER, COPY } from './mutation-types'
import { SHA1_B64, SHA1_B64_MIN_TWO } from './algo-types'

export default createStore({
    state: {
        master: "",
        alias: "",
        iconString: "",
        copied: null,
        algos: [SHA1_B64, SHA1_B64_MIN_TWO]
    },
    getters: {
        isCopied: (state) => (algo) => {
            return state.copied === algo
        },
        masterIconString (state) {
            return iconString(state.master)     
        },
        hash: (state) => (algo) => {
            switch (algo) {
                case SHA1_B64:
                    if (state.master === "" && state.alias === "") {
                        return "<10 Chars SHA1 B64>"
                    }
                    return hashSimple(state.master, state.alias, 10)
                case SHA1_B64_MIN_TWO:
                    if (state.master === "" && state.alias === "") {
                        return "<10 Chars SHA1 B64 ll/UU/11/++>"
                    }
                    return hash(state.master, state.alias, 10)
            }
        },
        algos (state) {
            return state.algos
        }
    },
    mutations: {
        [COPY](state, algo) {
            state.copied = algo
            copyById('result-' + algo)
        },
        [CHANGE_ALIAS](state, newAlias) {
            state.alias = newAlias
            state.copied = null
        },
        [CHANGE_MASTER](state, newMaster) {
            state.master = newMaster
            state.copied = null
        }
    }
})