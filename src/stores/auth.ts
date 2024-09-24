import { defineStore } from 'pinia';

export const auth = defineStore('auth',{
	state: () => ({ 

		login:true,
		image: 'src/assets/images/authorization/signIn.png',
		resetPass : false,
		checkedEmail: false,
		sign:true,
		newPass: false,
		verif:false

	 }),
  	getters: {
  	},
  	actions: {

		sighUp(){
			this.image = 'src/assets/images/authorization/signUp.png',
			this.login = false
		},

		logIn(){
			this.image = 'src/assets/images/authorization/signIn.png',
			this.login = true
		},

		resetPassword(){
			this.image = 'src/assets/images/authorization/resetPassword.png',
			this.resetPass = true
			
		},
		backToLogin(){
			this.sign = true
			this.checkedEmail = false,
			this.resetPass = false
			this.image = 'src/assets/images/authorization/signIn.png'
		},
		checkEmail(){
			this.sign = false,
			this.resetPass = false
			this.checkedEmail = true
			this.image = 'src/assets/images/authorization/checkEmail.png'
		},

		newPassword(){
			this.newPass = true
			this.login = false
			this.sign = false
			this.image = 'src/assets/images/authorization/createPassword.png'
		},
		verification(){
			this.newPass = false
			this.login = false
			this.sign = false
			this.verif = true
			this.image = 'src/assets/images/authorization/verification.png'
		}
    
  },
})