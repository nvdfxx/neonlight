import axios from 'axios'

export default {
    state: {
        appLoading: false,
        account: null
    },
    mutations: {
        SET_APP_LOADING(state, payload) {
            state.appLoading = payload
        },
        SET_ACCOUNT_ID(state, payload) {
            state.account = payload
        }
    },
    actions: {
        setAppLoading({commit}, payload) {
            commit('SET_APP_LOADING', payload)
        },
        setAccountID({commit}, payload) {
            commit('SET_APP_LOADING', true);
            axios.get(`https://api.wotblitz.ru/wotb/account/info/?application_id=d58946c3ef3b4f8124a5a5712a0d7ddb&account_id=${payload}`)
            .then(res => {
                commit('SET_ACCOUNT_ID', res.data.data[payload]);  
                commit('SET_APP_LOADING', false);
            })
        }
    },
    getters: {
        getAppLoading: state => state.appLoading,
        getAccount: state => state.account
    }
}