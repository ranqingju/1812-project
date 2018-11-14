export default {
    getInfo:function(state,info){
        state.Info = info.data;
        // console.log(state.Info);
    },
    handleToList:function(state,index){
        // state.Index = index;
        state.houseList = state.Info[index];
    }
}