<template>
   <div class="container container_pages">
       <div class="page-menu">
           <div 
            v-for="(value, index) of pageMenu"
            :key="index" 
            v-on:click="changeCurrentPage(index)" 
            :class="['page-menu__item', { 'page-menu__item-active': currentIndex === index }]"
           >
                {{value}}
           </div>
       </div>
       <div class="page">
           <component v-bind:is="currentPage" class="container"></component>
       </div>
   </div>
</template>
<script>
import Parameters from './Parameters'
import Questions from './Questions'
import Logic from './Logic'
import Conditions from './Conditions'
import Respondents from './Respondents'

const pages = [
    'Parameters',
    'Questions',
    'Logic',
    'Conditions',
    'Respondents'
]
export default {
    components: {
        Parameters,
        Questions,
        Logic,
        Conditions,
        Respondents
    },
    data: () => ({
        pageMenu: ['Параметры', 'Вопросы', 'Логика', 'Условия', 'Респонденты'],
        pages,
        currentIndex: 4,
        currentPage: pages[4]
    }),
    methods: {
        changeCurrentPage(i) {
            this.currentIndex = i
            this.currentPage = pages[i]
        }
    }
}
</script>
<style scoped>
.page-menu {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #c1e837;
}
.page-menu__item {
    width: auto; 
    height: 100%;
    float: left;
    line-height: 40px;
    padding: 0 20px;
    margin-right: 50px;
    color: #0c7722;
    border-bottom: 3px solid #fff;
    box-sizing: border-box;
    transition: .1s;
}
.page-menu__item:last-child {
    margin-right: 0px;
}
.page-menu__item:hover {
    border-bottom: 3px solid #c1e837;
    cursor: pointer;
}
.page-menu__item-active {
    border-bottom: 3px solid #c1e837;
    cursor: default;
}
.page {
    box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, 0.13);
}
</style>