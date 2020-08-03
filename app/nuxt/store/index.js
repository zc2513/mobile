export const state = () => ({

})

export const mutations = {

}
export const actions = {
    nuxtServerInit({ dispatch, commit }, { req, route, redirect, query, app: { $axios, router }}) {
        // eslint-disable-next-line no-console
        console.log('server init')
    }
}
export const getters = {

}
