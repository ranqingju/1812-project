import axios from 'axios'

export default{
	/* 免费活动 */
	getalltrialactivity({commit}){
		axios({
			method:'get',
			url:'/usermodule-1.0/trialactivity/getalltrialactivity'
		}).then((data)=>{
			commit('getalltrialactivity',data.data);
		})
	},
	/* 免费报告 */
	gettrialreport({commit}){
		axios({
			method:'get',
			url:'/usermodule-1.0/trialreport/gettrialreport'
		}).then((data)=>{
			commit('gettrialreport',data.data);
		})
	}
}