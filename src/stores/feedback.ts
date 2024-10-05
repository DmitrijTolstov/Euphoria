import { defineStore } from 'pinia';

export const feedback = defineStore('feedback',{

	state:() =>({
		comments:[
			{
				images:'src/assets/images/feedback/image-1.png',
				name:'Floyd Miles',
				comment:`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
				star:3
			},
			{
				images:'src/assets/images/feedback/image-2.png',
				name:'Ronald Richards',
				comment:`ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
				star:4
			},
			{
				images:'src/assets/images/feedback/image-3.png',
				name:'Savannah Nguyen',
				comment:`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
				star:2
			},
			{
				images:'src/assets/images/feedback/image-2.png',
				name:'Ronald Richards',
				comment:'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
				star:4
			}
		]
	}),
	getters:{

	
	},
	actions:{
		
	}

	
})