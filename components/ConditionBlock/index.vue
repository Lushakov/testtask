<template>
    <div :class="'container ' + condition.class">

        <div v-if="condIndex !== 0" class="and_block">
            И
        </div>

        <div class="left_block">
            <div class="cond_index line">
                Условие {{condIndex + 1}}
            </div>
            <div 
             v-for="(item, index) of condition.data"
             :key="index"
             class="row_index line"
             >
             <div v-if="index !== 0" class="or_block">ИЛИ</div>
             {{condition.dataTitle + ' ' + (index + 1)}}
            </div>
        </div>

        <div class="right_block">
            <select 
             @change="onChangeCondition(condIndex)"
             v-model="selected"
             class="cond_select input line"
            >
                <option
                 v-for="(item, index) of conf"
                 :key="index"
                >
                    {{item.name}}
                </option>
            </select>
            <ConditionProp
             v-for="(item, index) of condition.data" 
             :key="item.id" 
             :condIndex="condIndex"
             :propIndex="index"
             :propData="item"
             :type="condition.type"
             :options="condition.options"
            />

            <div class="buttons_line line">
                <div 
                @click="deleteCondition(condIndex)"
                class="button button-delete"
                >
                    <i class="material-icons">delete</i>
                    <span>Удалить условие</span>
                </div>

                <div
                @click="newProperty(condIndex)"
                v-if="condition.button"
                class="button button-add" >
                    <i class="material-icons">add</i>
                    <span>{{condition.button}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ConditionProp from './ConditionProp'
export default {
    props: ['condition', 'condIndex'],
    components: {ConditionProp},
    data(){
        return {
            selected: this.$props.condition.name
        }
    },
    computed: {
        conf() {return this.$store.getters['polls/conf']}
    },
    methods: {
        onChangeCondition(condIndex) {
            const name = this.selected;
            this.$store.commit('polls/changeCondition', {name, condIndex});
        },
        deleteCondition(condIndex){
            this.$store.commit('polls/deleteCondition', condIndex);
        },
        newProperty(condIndex) {
            this.$store.commit('polls/newProperty', condIndex);
        },
    }
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>