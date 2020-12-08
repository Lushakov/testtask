export const state = () => ({
    breadcrumbs: [],
    pages: []
})
export const mutations = {
    onChangePath(state, path) {
        state.breadcrumbs = state.pages.filter(item => path.includes(item.path))
    },
    addPages(state, pages) {
        state.pages = (pages.length < 2) ? pages 
        :pages.sort((a, b) => a.path.length - b.path.length);
    }
}
export const actions = {}
export const getters = {
    breadcrumbs: s => s.breadcrumbs
}