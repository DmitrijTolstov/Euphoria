import { defineStore } from 'pinia';

export const slider = defineStore('slider',{

	state:() =>({
		bg:[
			{
				img:'src/assets/images/hero/hero-1.png',
				active:true
			},
			{
				img:'src/assets/images/hero/hero-2.png',
				active:false
			}
		],
		minValue: 150,
		maxValue: 450
	}),
	getters:{

		activeImage(state){
			return state.bg.map(obj => obj)
		},

	},
	actions:{
		sliderValue(value:number[]):void{
			this.minValue = value[0]
			this.maxValue = value[1]
		
		}
	}

	
})