export default{
	/* 免费活动 */
	getalltrialactivity(state,params){
		state.trialactivityList = params;
	},
	/* 免费报告 */
	gettrialreport(state,params){
		state.trialreportList = params;
	}
}