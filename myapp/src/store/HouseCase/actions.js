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
    },
    // handleCollectToList:function({commit},index){
    //     commit('handleCollectToList',index);
    // }
}