export default {
    handleToList:function(state,index){
        state.discussList = state.info[index];
    },
    handleToNavs:function(state,index){
        state.navsList = state.navs[index];
    },
    handleToImgs:function(state,index){
        state.imgsList = state.imgs[index];
    }
}