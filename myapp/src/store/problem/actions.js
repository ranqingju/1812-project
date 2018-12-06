import axios from 'axios'
export default {
  getProblem({commit,state}){
    axios('https://www.easy-mock.com/mock/5c05428623916949913b8c67/usermodule-1.0/problem')
      .then((data)=>{
        commit('getProblem',data.data.data);
        if(state.answerObj.name===undefined){
          commit('getAnswer',1);
        }
      })
  },

  getAnswer({commit},val){
    commit('getAnswer',val);
  }
}
