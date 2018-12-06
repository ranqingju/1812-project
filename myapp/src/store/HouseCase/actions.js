import axios from 'axios';

export default {
    // 获取整屋案例 列表数据
    getInfo:function({commit}){
        axios({
            method:'get',
            url:'/usermodule-1.0/case/getallcase'
        })
        .then((info)=>{
            commit("getInfo",info);
        })
    },
    // 传递数据 到 案列详情页
    handleToList:function({commit},info){
        commit('handleToList',info);
    },
    // 案例收藏 功能
    handleCollect:function({commit}){
        commit('handleCollect');
    },
    // 案列详情页 初始化请求数据
    Init:function({commit}){
        commit("Init");
    },
    // 获取 我的 收藏 页面数据
    getMyCollection:function({commit}){
        commit("getMyCollection")
    },
    getDraft:function({commit}){
        axios({
            method:'get',
            url:'/usermodule-1.0/drafts/getallcasewithdrafts'
        }).then((data)=>{
            commit('getDraft',data);
        })
    },
    // 保存 案列 到 草稿箱
    handleSaveToDrafs:function({commit},info){

        // console.log(info.tit);
        //?user_id=1&theme=' + info.tit + '&theme_img=group1/M00/00/00/rB8xvlvo1dCAdt2UAACjidqkFl8696.jpg&status=0&casedesc=' + info.msg,
        // axios({
        //     method:'post',
        //     url:'/usermodule-1.0/case/makedrafts',
        //     data:{
        //         user_id:1,
        //         theme:info.tit,
        //         theme_img:"group1/M00/00/00/rB8xvlvo1dCAdt2UAACjidqkFl8696.jpg",
        //         status:0,
        //         casedesc:''+ info.msg
        //     } 
        // }).then((data)=>{
        //     console.log(data);
        // })
    },
    handleSendToCase({commit}){
        let id = 0;
        id++;
        if(id == 7){
            id = 0;
        }
        axios({
            method:'get',
            url:'/usermodule-1.0/drafts/publishcase?draftsid='+id
        }).then((data)=>{
            console.log(data);
        })
    }
}