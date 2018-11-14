import axios from 'axios';

export default {
    getInfo:function({commit}){
        axios({
            method:'get',
            url:'http://localhost:3000/info'
        })
        .then((info)=>{
            commit("getInfo",info);
        })
    },
    handleToList:function({commit},index){
        commit('handleToList',index);
    }
}