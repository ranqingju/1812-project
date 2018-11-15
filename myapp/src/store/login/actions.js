import axios from 'axios'

export default {
  /*用户登录*/
  handleLogin({commit, state}) {
    axios({
      methods:'get',
      url:'/user/login',
      data:{
        loginname:state.user_login,
        password:state.pwd_login
      }
    }).then((data) => {
      switch(data.code){
        case 0:
          commit('handleLogin',data.data);break;
        case 1:
          alert('用户名或密码错误！');
      }
    })
  }
}
