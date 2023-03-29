import {reactive} from 'vue'
export const store = reactive({
    searchKey:'',
    config:{
        title: '',
        originalTitle:'',
        language:'',
        score: 0
    }
})