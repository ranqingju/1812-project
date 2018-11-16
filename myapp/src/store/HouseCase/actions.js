import axios from 'axios';

export default {
    getInfo:function({commit}){

        axios({
            method:'get',
            url:'/usermodule-1.0/case/getallcase'
        })
        .then((info)=>{
            commit("getInfo",info);
        })
    },
    handleToList:function({commit},id){
        commit('handleToList',id);
    },
    handleCollect:function({commit}){
        commit('handleCollect');
    },
    handleCollect:function({commit}){
        commit('handleCollect');
    },
    Init:function({commit}){
        commit("Init");
    } 
}