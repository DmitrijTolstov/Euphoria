import { defineStore } from 'pinia';

export const account = defineStore('account',{
	state: () => ({ 

		component:'',
		wishlist:[]

	 }),
  	getters: {
		
		
  	},
  	actions: {
		findComponent (component)  {
			this.component = component
}
  },
})