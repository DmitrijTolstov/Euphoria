import { defineStore } from 'pinia';
import { Ref,ref } from 'vue';

type TComponents = {
	img:string,
	component: string
}


export const auth = defineStore('auth',() => {

		const components:Ref<TComponents[]> = ref([
			{
				img:'src/assets/images/authorization/resetPassword.png',
				component:'resetPass'
			},
			{
				img:'src/assets/images/authorization/Verification.png',
				component:'verif'
			},
			{
				img:'src/assets/images/authorization/CheckEmail.png',
				component:'checkEmail'
			},
			{
				img:'src/assets/images/authorization/createPassword.png',
				component:'newPass'
			},
			{
				img:'src/assets/images/authorization/signIn.png',
				component:'signIn'
			},
			{
				img:'src/assets/images/authorization/signUp.png',
				component:'signUp'
			},

		])

		let login = ref(true)
		let componentLayout:Ref<TComponents> = ref({
				img:'src/assets/images/authorization/signIn.png',
				component:'signIn'
			})

		function showComponents(component:string){
			componentLayout.value = components.value.find(data => data.component === component )!
		}
		return{showComponents,login,componentLayout}
})
export default auth