import { defineStore } from 'pinia';

export const productCard = defineStore('productCard',{

	state:() =>({

		cardArrival:[
			{
				image:'src/assets/images/arrival/image-1.png',
				content:'Knitted Joggers'
			},
			{
				image:'src/assets/images/arrival/image-2.png',
				content:'Full Sleeve'
			},
			{
				image:'src/assets/images/arrival/image-3.png',
				content:'Active T-Shirts'
			},
			{
				image:'src/assets/images/arrival/image-4.png',
				content:'Active T-Shirts'
			},
			{
				image:'src/assets/images/arrival/image-1.png',
				content:'Knitted Joggers'
			},
			{
				image:'src/assets/images/arrival/image-2.png',
				content:'Full Sleeve'
			},
			{
				image:'src/assets/images/arrival/image-3.png',
				content:'Active T-Shirts'
			},
			{
				image:'src/assets/images/arrival/image-4.png',
				content:'Active T-Shirts'
			}
		],


		stockCard:[
			{
				image: 'src/assets/images/stock/image-1.png',
				title:'Hawaiian Shirts',
				text:'Dress up in summer vibe',
				sale:'UPTO 50% OFF',
				link:'',
				limitedStock: false,
				dayDiscount:false
			},
			{
				image: 'src/assets/images/stock/image-2.png',
				title:'Printed T-Shirt',
				text:'New Designs Every Week',
				sale:'UPTO 40% OFF',
				link:'',
				limitedStock: true,
				dayDiscount:false
			},
			{
				image: 'src/assets/images/stock/image-3.png',
				title:'Cargo Joggers',
				text:'Move with style & comfort',
				sale:'UPTO 50% OFF',
				link:'',
				dayDimitedStock: false,
			},
			{
				image: 'src/assets/images/stock/image-4.png',
				title:'Urban Shirts',
				text:'Live In Confort',
				sale:'FLAT 60% OFF',
				link:'',
				limitedStock: false,
				dayDiscount:false
			},
			{
				image: 'src/assets/images/stock/image-5.png',
				title:'Oversized T-Shirts',
				text:'Street Style Icon',
				sale:'FLAT 60% OFF',
				link:'',
				limitedStock: false,
				dayDiscount:false
			}
		]
		
	}),
	getters:{

		
	},
	actions:{
		
	}

	
})