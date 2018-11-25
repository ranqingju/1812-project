import axios from 'axios'

export default {
  /*更新表单*/
  changeInput({commit}, params) {
    commit('changeInput', params);
  },

  /*获取验证码*/
  handleGetCode({commit, state}) {
    axios({
      method: 'get',
      url: '/usermodule-1.0/sign/msg',
      params: {
        mobile: state.phone_reg
      }
    }).then((data) => {
      console.log(data);
    });
  },

  /*注册*/
  handleRegister({commit, state}) {
    axios({
      method: 'post',
      url: '/usermodule-1.0/user/reg',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        mobile: state.phone_reg,
        name: '',
        user_name: '',
        password: state.pwd_reg,
        mobilecode: state.vcCode
      }
    }).then((data) => {
      console.log(data);
    })
  }
}
