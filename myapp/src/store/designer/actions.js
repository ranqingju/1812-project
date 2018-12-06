import axios from 'axios'
import { Indicator } from 'mint-ui';

export default {
  /*获取设计师信息*/
  getDesigner({commit}){
    Indicator.open('正在加载');
    axios.defaults.timeout = 2000;
    axios({
      method:'get',
      url:'/usermodule-1.0/designer/getalldesigner'
    }).then((data)=>{
      console.log(data);
      Indicator.close();
      commit('getDesigner',data.data);
    }).catch(()=>{
      Indicator.close();
      Indicator.open('加载失败');
      setTimeout(()=>{
        Indicator.close();
      },2000)
    });
  }
}
