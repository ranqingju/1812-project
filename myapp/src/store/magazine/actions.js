import axios from 'axios'
import { Indicator } from 'mint-ui';

export default {
  /*获取所有杂志*/
  getMagazine({commit}) {
    Indicator.open('正在加载');

    axios({
      method: 'get',
      url: '/usermodule-1.0/magazine/getmagazine'
    }).then((data) => {
      Indicator.close();
      commit('getMagazine', data.data);
    }).catch(()=>{
      Indicator.close();
      Indicator.open('加载失败');
      setTimeout(()=>{
        Indicator.close();
      },2000)
    });
    setTimeout(()=>{
      Indicator.close();
      Indicator.open('加载失败');
      setTimeout(()=>{
        Indicator.close();
      },2000)
    },2000);
  }
}
