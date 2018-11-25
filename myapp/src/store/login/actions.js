import axios from 'axios'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

export default {
  /*更新表单值*/
  changeInput({commit}, params) {
    commit('changeInput', params);
  },
  /*用户登录*/
  handleLogin({commit, state}) {
    Indicator.open('正在登陆，请稍后...');
    axios({
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      url: "/usermodule-1.0/user/login",
      params: {
        loginname: state.user_login,
        password: state.pwd_login
      }
    }).then((data) => {
      switch (data.data.code) {
        case '0':
          Indicator.close();
          Toast({
            message:'登陆成功',
            position:'center',
            duration: 3000
          });
          commit('handleLogin', data.data);
          break;
        case '1':
          Indicator.close();
          Toast({
            message:'用户名或密码错误',
            position:'center',
            duration: 3000
          });
          break;
        case '10001':
          Indicator.close();
          Toast({
            message:'用户名不能为空',
            position:'center',
            duration: 3000
          });
          break;
        case '10002':
          Indicator.close();
          Toast({
            message:'密码不能为空',
            position:'center',
            duration: 3000
          });
          break;
        default:
          Indicator.close();
          Toast({
            message:'未知错误',
            position:'center',
            duration: 3000
          });
          break;
      }
    }).catch(()=>{
      Indicator.close();
      Toast({
        message:'登陆失败',
        position:'center',
        duration: 3000
      });
    })
  },
  logout({commit}){
    axios({
      method:'get',
      url:'/usermodule-1.0/user/logout',
    }).then((data)=>{
      if(data.data.code==="0"){
        Toast({
          message: '退出登录',
          position: 'center',
          duration: 2000
        });
      }
    })
  }

}
