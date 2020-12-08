<template>
    <div class="container container_header">
        <input type="text" class="input input_search" placeholder="Поиск по системе">
        <i class="material-icons input-icons-right">search</i>
        <div class="user-avatar">
            <img class="user-avatar__img" src="../assets/img/avatar.jpg" alt="Перейти в профиль">
            <div class="user-avatar__whois-block">
                <p class="user-avatar__name">Peter L.</p>
                <p class="user-avatar__role">Стажёр</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container_header {
    box-sizing: border-box;
    height: 100px;
    padding: 25px 45px 0 45px;
}
.input_search {
    width: 550px;
    float: left;
}
.user-avatar {
    float: right;
    width: auto;
    height: auto;
}
.user-avatar__img {
    float: left;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
}
.user-avatar__whois-block {
    margin-top: 10px;
    float: left;
}
.user-avatar__name {
    font-size: 16px;
    font-weight: 700;
}
.user-avatar__role {
    font-size: 12px;
    font-weight: 200;
    color: #666;
}
</style>