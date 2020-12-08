<template>
    <div class="container container-breabcrumbs">
        <NuxtLink
            v-if="this.$route.path !== '/'"
            class="breabcrumbs-item"
            no-prefetch
            to="/"
        >
            <i class="material-icons">home</i>
        </NuxtLink>
        <NuxtLink
            v-for="item of breadcrumbs" 
            :key="item.name"
            class="breabcrumbs-item"
            no-prefetch
            :to="item.path"
        >
            <i class="material-icons">arrow_right_alt</i>
            <p>{{item.name}}</p>
        </NuxtLink>
    </div>
</template>
<script>
export default {
    computed: {
        breadcrumbs() {return this.$store.getters['breadcrumbs/breadcrumbs']}
    }
}
</script>
<style scoped>
.container-breabcrumbs{
    padding-left: 45px;
    width: auto;
}

.breabcrumbs-item:link,
.breabcrumbs-item:visited,
.breabcrumbs-item:active,
.breabcrumbs-item:hover { 
    text-decoration: none;
}
.breabcrumbs-item {
    display: inline-block;
    text-decoration: none;
    color:rgb(50, 50, 50);
    vertical-align: middle;
}
.breabcrumbs-item i {
    float: left;
    font-size: 20px;
}
.breabcrumbs-item p {
    float: left;
    font-size: 12px;
    line-height: 20px;
}
.breabcrumbs-item:last-child p{
    color:rgb(179, 179, 179);
    cursor: default;
}
</style>