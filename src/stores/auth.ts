import { defineStore } from 'pinia';

export const auth = defineStore('auth',{
	state: () => ({ 

		components:[
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

		],

		login:true,
		component:{
				img:'src/assets/images/authorization/signIn.png',
				component:'signIn'
			},

	 }),
  	getters: {
		
		
  	},
  	actions: {
		showComponents(component:string){
			this.component = this.components.find(data => data.component === component )
		},
  },
})