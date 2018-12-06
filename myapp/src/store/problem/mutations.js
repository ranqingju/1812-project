export default {
  getProblem(state,val){
    state.problemList=val;
  },

  getAnswer(state,val){
    // console.log(state.problemList[val-1]);
    state.answerObj = {...state.problemList[val-1]};
  }
}
