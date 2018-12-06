export default {
  /*更新数据*/
  changeInput(state, params) {
    switch (params.index) {
      case 0 :
        state.user_login = params.val;
        break;
      case 1 :
        state.pwd_login = params.val;
        break;
      default :
        break;
    }
  },
  /*用户登录*/
  handleLogin(state, params) {
    state.curUserMessage = params.user_data;
  }
}
