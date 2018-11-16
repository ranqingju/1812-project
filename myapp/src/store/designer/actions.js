import axios from 'axios'

export default {
  /*获取设计师信息*/
  getDesigner({commit}){
    axios({
      method:'get',
      url:'/usermodule-1.0/designer/getalldesigner'
    }).then((data)=>{
      commit('getDesigner',data.data);
    })
  }
}
