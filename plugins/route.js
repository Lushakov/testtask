export default ({ app }) => {
    app.store.commit('breadcrumbs/addPages', [
        {name: 'Опросы', path: '/polls'},
        {name: 'Добавить опрос', path: '/polls/editor'},
        {name: 'Пользователи', path: '/users'},
        {name: 'Колл центр', path: '/calls'},
        {name: 'Черные списки', path: '/blacklists'},
    ])
    app.router.afterEach((to) => {
        app.store.commit('breadcrumbs/onChangePath', to.path);
    })
}