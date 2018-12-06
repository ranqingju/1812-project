import axios from "axios";

export default {
    // 获取所有整屋案例数据
    getInfo:function(state,info){
        state.Info = info.data;
    },
    // 储存当前下标 和 当前整屋案例信息
    handleToList:function(state,info){
        axios({
            method:'get',
            url:'/usermodule-1.0/casedetail/getallcasedetail?casedetailid='+info.id
        })
        .then((data)=>{
            state.houseList = data.data;
          
            state.houseList.simg = info.simg;
            state.houseList.bimg = info.bimg;
            
            // 图片和案列ID 存入本地
            localStorage.bimg = info.bimg;
            localStorage.simg = info.simg;
            localStorage.id = info.id;
        })
    },
    // 初始化 案列详情 页面状态
    Init:function(state){
        axios({
            method:'get',
            url:'/usermodule-1.0/casedetail/getallcasedetail?casedetailid='+ localStorage.id
        })
        .then((data)=>{
            state.houseList = data.data; 
            state.houseList.simg = localStorage.simg;
            state.houseList.bimg = localStorage.bimg;
        })
    },
    // 案列收藏按钮
    handleCollect:function(state){
        axios({
            method:"get",
            url:"/usermodule-1.0/casecollection/addcasecollection?caseid=" + localStorage.id,
        }).then((data)=>{
            if(data.data.code == 0){
                state.collectStatus = !state.collectStatus;

                if(state.collectStatus){
                    state.status = !state.status;
                    setTimeout(()=>{
                        state.status = !state.status;
                    },2000)
                }
            }
        })
    },
    // 获取我的收藏案列
    getMyCollection:function(state){
        axios({
            method:'get',
            url:'/usermodule-1.0/casecollection/getallcasecollection'
        }).then((data)=>{
            state.myCollection = data.data;
        })
    },
    // 获取 草稿箱信息
    getDraft:function(state,data){
        state.drafts = data.data;
    }
}