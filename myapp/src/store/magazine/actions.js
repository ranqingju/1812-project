import axios from 'axios'

export default {
  /*获取所有杂志*/
  getMagazine({commit}) {
    axios({
      method: 'get',
      url: '/usermodule-1.0/magazine/getmagazine'
    }).then((data) => {
      commit('getMagazine', data.data);
    })
  }
}
