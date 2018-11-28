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
            
            // localStorage.clear();
            localStorage.bimg = info.bimg;
            localStorage.simg = info.simg;
            localStorage.id = info.id;
        })
    },
    // 收藏案例
    handleCollect:function(state){
        state.Info[state.Index].status = !state.Info[state.Index].status;
        
        // 修改数据库 状态
        axios({
            method:"patch",
            url:"/casecollection/addcasecollection?caseid=" + localStorage.id,
            data:{
                status:state.Info[state.Index].status,       
            }
        }).then((data)=>{
            // console.log(data);
        })
        // 判断状态 添加 删除 数据
        if(state.Info[state.Index].status){
            state.houseCollect.push( JSON.parse( JSON.stringify(state.Info[state.Index]) ));
        }else{
            state.houseCollect.splice(state.Index,1);
        }

        state.collectStatus = state.Info[state.Index].status;
    },
    // 初始化页面状态
    Init:function(state){
        // state.collectStatus = state.Info[state.Index].status;
        axios({
            method:'get',
            url:'/usermodule-1.0/casedetail/getallcasedetail?casedetailid='+ localStorage.id
        })
        .then((data)=>{
            state.houseList = data.data; 
            state.houseList.simg = localStorage.simg;
            state.houseList.bimg = localStorage.bimg;
        })

       
        // state.Info.forEach((value)=>{
            
        //         if(state.houseCollect.indexOf(value) == -1 && value.status){
        //             // if(value.status){
        //                 state.houseCollect.push(value);

        //             // }
        //         }
        // })

        console.log(state.houseList);
    }
    // handleCollectToList:function(state,index){
    //     state.flag = true;
    //     state.houseList = state.houseCollect[index];
    // }
}