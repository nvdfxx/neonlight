export default {
    state: {
        appLoading: false,
        accountID: null
    },
    mutations: {
        SET_APP_LOADING(state, payload) {
            state.appLoading = payload
        },
        SET_ACCOUNT_ID(state, payload) {
            state.accountID = payload
        }
    },
    actions: {
        setAppLoading({commit}, payload) {
            commit('SET_APP_LOADING', payload)
        },
        setAccountID({commit}, payload) {
            commit('SET_ACCOUNT_ID', payload)
        }
    },
    getters: {
        getAppLoading: state => state.appLoading,
        getAccountID: state => state.accountID
    }
}