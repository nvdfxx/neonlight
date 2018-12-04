export default {
    state: {
        appLoading: false,
        accountID: null,
        nickname: null
    },
    mutations: {
        SET_APP_LOADING(state, payload) {
            state.appLoading = payload
        },
        SET_ACCOUNT_ID(state, payload) {
            state.accountID = payload
        },
        SET_NICKNAME(state, payload) {
            state.nickname = payload
        }
    },
    actions: {
        setAppLoading({commit}, payload) {
            commit('SET_APP_LOADING', payload)
        },
        setAccountID({commit}, payload) {
            commit('SET_ACCOUNT_ID', payload)
        },
        setNickname({commit}, payload) {
            commit('SET_NICKNAME', payload)
        }
    },
    getters: {
        getAppLoading: state => state.appLoading,
        getAccountID: state => state.accountID,
        getNickname: state => state.nickname
    }
}