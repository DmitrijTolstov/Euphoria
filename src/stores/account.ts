import { defineStore } from 'pinia';

export const account = defineStore('account',{
	state: () => ({ 

		wishlist:[],
		color:'',
		size:'',
		productCardInCart:[
			{
				id:1,
				name:'Blue Flower Print Crop Top',
				color:'red',
				size:'L',
				images:'src/assets/images/productCard/image-1.png',
				price:23
			},
		]

	 }),
  	getters: {
		getProductCardInCart(state){
			return state.productCardInCart.map(product => product)
		},
		sumPrice(state){
			return state.productCardInCart.reduce((acc,card) => {
				return acc + card.price
			},0 )
		}
		
		
  	},
  	actions: {
		deleteProduct(id:number){
		console.log(id);
			this.productCardInCart = this.productCardInCart.filter(product => product.id !== id)
		},
		addProduct(product){
			console.log(product);
			
			this.productCardInCart.push({...product,color:this.color,size:this.size})
		}
  },
})