import axios from 'axios'

export default{
	getmustread({commit}){
		axios({
			method:'get',
			url:'/usermodule-1.0/mustread/getmustread',
		}).then((data)=>{
			commit('getmustread',data.data);
		})
	}
}