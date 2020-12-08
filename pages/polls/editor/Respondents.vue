<template>
    <div class="container">
        <div class="head-text">Добавить опрос</div>
        <ConditionBlock v-for="(item, index) of conditions" :key="index" :condition="item" :condIndex="index" />
        <div class="add-button" @click="newCondition">
            <div>
                <p>
                    <i class="material-icons">add_circle_outline</i>
                    <br>Нажмите, чтобы добавить новое условие выборки.
                    <br>Все условия связываются между собой логическим "И"
                </p>
            </div>
        </div>
        <PollFooter />
    </div>
</template> 
<script>
import ConditionBlock from '../../../components/ConditionBlock'
import PollFooter from '../../../components/PollFooter' 
export default {
    components: {
        ConditionBlock,
        PollFooter
    },
    computed: {
        conditions() {return this.$store.getters['polls/conditions']},
    },
    methods: {
        newCondition() {
            this.$store.commit('polls/newCondition');
        }
    }
}
</script>
<style scoped>
.head-text {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: rgb(142, 142, 142);
}
.add-button {
    width: 100%;
    height: 160px;
    padding: 20px;
    box-sizing: border-box;
}
.add-button div {
    text-align: center;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    background: #fff;
    border: 2px solid rgb(208, 208, 208);
    border-radius: 8px;
    color: #28af44;
    font-size: 16px;
}
.add-button p {
    margin-top: 20px;
}
.add-button i {
    font-size: 30px;
}
.add-button div:hover {
    background: rgb(252, 252, 252);
    cursor: pointer;
    
}
.add-button div:active{
    background: rgb(250, 250, 250);
}
</style>