import axios from 'axios'

export default {
  /*更新表单值*/
  changeInput({commit}, params) {
    commit('changeInput', params);
  },
  /*用户登录*/
  handleLogin({commit, state}) {
    axios({
      method: 'get',
      url: "/usermodule-1.0/user/login",
      data: {
        loginname: state.user_login,
        password: state.pwd_login
      }
    }).then((data) => {
      console.log(data);
      switch (data.code) {
        case 0:
          alert('登录成功');
          commit('handleLogin', data.data);
          break;
        case 1:
          alert('用户名或密码错误！');
          break;
        case 10001:
          alert('用户名不能为空');
          break;
        case 10002:
          alert('密码不能为空');
          break;
        default:
          alert('未知错误！');
          break;
      }
    })
  },



}
