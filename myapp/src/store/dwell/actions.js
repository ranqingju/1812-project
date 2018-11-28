import axios from 'axios'

export default{
	getliveupdate({commit}){
		axios({
			method:'get',
			url:'/usermodule-1.0/liveupdate/getliveupdate'
		}).then((data)=>{
			console.log(data.data)
			commit('getliveupdate',data.data);
		})
	}
}