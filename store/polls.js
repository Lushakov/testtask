export const state = () => ({
    conditions: [],
    conf: [
        {
            name: 'Возраст респондента',
            type: 'range',
            dataTitle: 'Диапазон',
            defaultData: {from: null, to: null},
            options: null,
            button: 'Добавить диапазон',
            class: 'container-condition_beige',
        },
        {
            name: 'Тип карты лояльности',
            type: 'select',
            dataTitle: 'Тип',
            defaultData: {selected: ''},
            options: ['Gold', 'Silver'],
            button: 'Добавить тип',
            class: 'container-condition_blue'
        },
        {
            name: 'Статус карты лояльности',
            type: 'select',
            dataTitle: 'Статус',
            defaultData: {selected: ''},
            options: ['Активна', 'Неактивна'],
            button: 'Добавить Статус',
            class: 'container-condition_green' 
        }
    ]
})
export const mutations = {
    newCondition(state) {
        state.conditions.push({
            name: '',
            data: [],
            button: null,
            class:'container-condition_gray',
            id: _createId(),
        });
    },
    deleteCondition(state, condIndex) {
        state.conditions.splice(condIndex, 1);
    },
    changeCondition(state, {condIndex, name}) {
        const confObj = _getConfObj({state, name})
        state.conditions[condIndex].data = [{
            ...confObj.defaultData,
            id: _createId()
        }]
        for(const prop in confObj) {
            if(prop === 'defaultData') continue
            state.conditions[condIndex][prop] = confObj[prop]
        }
    },
    newProperty(state, condIndex) {
        const confObj = _getConfObj({state, condIndex})
        const data = {
            ...confObj.defaultData,
            id: _createId()
        }
        state.conditions[condIndex].data.push(data);
    },
    deleteProperty(state, {condIndex, propIndex}) {
        state.conditions[condIndex].data.splice(propIndex, 1);
    },
    changeProperty(state, {condIndex, propIndex, changeData}) {
        const data = state.conditions[condIndex].data[propIndex];
        for(const prop in changeData) data[prop] = changeData[prop]
    },
}
export const actions = {}
export const getters = {
    conditions: s => s.conditions,
    conf: s => s.conf
}


const _getConfObj = ({state, name, condIndex}) => {
    if(!name) name = state.conditions[condIndex].name;
    return state.conf.find(item => item.name === name);
}

let _id=0;
const _createId = () => (_id++)