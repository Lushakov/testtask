<template>
<div class="line">

    <div v-if="type === 'range'" class="range">
        <div>От</div>
 
        <input
        @change="changeProperty(condIndex, propIndex, type)"
        v-model="inputFrom"
        class="input"
        />

        <div>До</div>

        <input
        @change="changeProperty(condIndex, propIndex, type)"
        v-model="inputTo"
        class="input"
        />

        <i @click="deleteProperty(condIndex, propIndex)"
        class="material-icons"
        >highlight_off</i>
    </div>

    <div v-if="type === 'select'" class="select">
        <select 
        @change="changeProperty(condIndex, propIndex, type)"
        v-model="selected"
        class="cond_select input line"
        >
            <option
            v-for="(item, index) of options"
            :key="index"
            >
                {{item}}
            </option>
        </select>

        <i @click="deleteProperty(condIndex, propIndex)"
        class="material-icons"
        >highlight_off</i>
    </div>
</div>
</template>

<script>
export default {
    props: ['condIndex', 'propIndex', 'propData', 'type', 'options',],
    data() {
        console.log(this.propData);
        return {
            inputFrom: this.propData.from, 
            inputTo: this.propData.to,
            selected: this.propData.selected
        }
    },
    methods: {
        deleteProperty(condIndex, propIndex) {
            this.$store.commit('polls/deleteProperty', {condIndex, propIndex});
        },
        changeProperty(condIndex, propIndex, type) {
            let changeData;
            if (type === 'range') {
                changeData = {
                    from: this.$data.inputFrom,
                    to: this.$data.inputTo
                } 
            }
            if (type === 'select') {
                changeData = {
                    selected: this.$data.selected
                }
            }
            this.$store.commit('polls/changeProperty', {condIndex, propIndex, changeData});
        },
    }
}
</script>

<style lang="scss" scoped>
.range div{
    float: left;
    margin-right: 10px;
}
.range input {
    float: left;
    margin-right: 15px;
    width: 20%;
}
.material-icons {
    margin-top: 10px;
    color: #ccc;
    cursor: pointer;
    transition: .1s;
}
.material-icons:hover {
    color: rgb(174, 174, 174);
}
.select select{
    float: left;
    margin-right: 15px;
}
</style>