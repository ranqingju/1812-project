export default {
  /*更新表单*/
  changeInput(state, params) {
    switch (params.index) {
      case 0:
        state.phone_reg = params.val;
        break;
      case 1:
        state.vcCode = params.val;
        break;
      case 2:
        state.pwd_reg = params.val;
        break;
      default:
        break;
    }
  }
}
