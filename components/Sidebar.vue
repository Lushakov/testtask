<template>
    <div class="container container_sidebar">
        <NuxtLink class="sidebar-item" active-class="sidebar-item_active" no-prefetch to="/polls">
            <i class="material-icons">poll</i>
            <p>Опросы</p>
        </NuxtLink>
        <NuxtLink class="sidebar-item" active-class="sidebar-item_active" no-prefetch to="/users">
            <i class="material-icons">people_outline</i>
            <p>Пользователи</p>
        </NuxtLink>
        <NuxtLink class="sidebar-item" active-class="sidebar-item_active" no-prefetch to="/blacklists">
            <i class="material-icons">report_problem</i>
            <p>Чёрные списки</p>
        </NuxtLink>
        <NuxtLink class="sidebar-item" active-class="sidebar-item_active" no-prefetch to="/calls">
            <i class="material-icons">call</i>
            <p>Колл-центр</p>
        </NuxtLink>
    </div>
</template>

<style scoped>
.container_sidebar {
    margin-top: 100px;
    padding: 0 10px;
    box-sizing: border-box;
}
.sidebar-item:link,
.sidebar-item:visited,
.sidebar-item:active,
.sidebar-item:hover { 
    text-decoration: none;
}
.sidebar-item {
    display: block;
    text-decoration: none;
    color:rgb(50, 50, 50);
    width: 100%;
    height: 90px;
    padding: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 2px solid #ffffff;
    border-radius: 8px;
    transition: .1s;
}
.sidebar-item p {
    width: 100%;
    text-align: center;
    font-size: 14px;
}
.sidebar-item i {
    width: 100%;
    text-align: center;
    font-size: 40px;
}
.sidebar-item:hover {
    color: #dbf28b;
    border: 2px solid #dbf28b;
    cursor: pointer;
}
.sidebar-item_active {
    background: #f5f5f5;
}
.sidebar-item_active:hover {
    background: #f0f0f0;
    border: 2px solid #ffffff;
    color:rgb(50, 50, 50);
    cursor: default;
}
</style>