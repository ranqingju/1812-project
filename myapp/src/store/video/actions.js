import axios from 'axios'

export default{
	getvideo({commit}){
		axios({
			method:"get",
			url:'/usermodule-1.0/video/getvideo'
		}).then((data)=>{
			commit('getvideo',data.data);
		})
	}
}