import { defineStore } from 'pinia';

export const stock = defineStore('stock',{

	state:() =>({
		cards:[
			{
				img:'src/assets/images/stockcard/stockCard-1.png',
				text:'Low Price',
				title:'High Coziness',
				sale:'UPTO 50% OFF ',
				link:'Explore Items'
			},
			{
				img:'src/assets/images/stockcard/stockCard-2.png',
				text:'Beyoung Presents',
				title:'Breezy Summer Style',
				sale:'UPTO 50% OFF ',
				link:'Explore Items'
			},
			
		],
	}),
	getters:{

		stockCard(state){
			return state.cards.map(card => card)
		}

	},
	actions:{
		
	}

	
})