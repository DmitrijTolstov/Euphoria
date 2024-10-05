import { defineStore } from 'pinia';




export const productCard = defineStore('productCard',{

	state:()=>({

		linkCard:[
			{
				image:'src/assets/images/arrival/image-1.png',
				content:{
					title:'Knitted Joggers',
					name:''
				},
				category:'men',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-2.png',
				content:{
					title:'Full Sleeve',
					name:''
				},
				category:'men',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-3.png',
				content:{
					title:'Active T-Shirts',
					name:''
				},
				category:'men',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-4.png',
				content:{
					title:'Urban Shirts',
					name:''
				},
				category:'women',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-1.png',
				content:{
					title:'Knitted Joggers',
					name:''
				},
				category:'men',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-2.png',
					content:{
					title:'Full Sleeve',
					name:''
				},
				category:'men',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-3.png',
				content:{
					title:'Active T-Shirts',
					name:''
				},
				category:'men',
				arrival: true
			},
			{
				image:'src/assets/images/arrival/image-4.png',
				content:{
					title:'Urban Shirts',
					name:''
				},
				category:'women',
				arrival: true
			},
			{
				image:'src/assets/images/menCategory/image-1.png',
				content:{
					title:'Shirts',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-2.png',
				content:{
					title:'Printed T-Shirts',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-3.png',
				content:{
					title:'Plain T-Shirt',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-4.png',
				content:{
					title:'Polo T-Shirt',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-5.png',
				content:{
					title:'Hoodies & Sweetshirt',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-6.png',
				content:{
					title:'Explore Now!',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-7.png',
				content:{
					title:'Activewear',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},
			{
				image:'src/assets/images/menCategory/image-8.png',
				content:{
					title:'Boxers',
					name:'Explore Now!'
				},
				category:'men',
				arrival: false
			},

			{
				image:'src/assets/images/womenCategory/image-1.png',
				content:{
					title:'Hoodies & Sweetshirt',
					name:'Explore Now!'
				},
				category:'women',
				arrival: false
			},
			{
				image:'src/assets/images/womenCategory/image-2.png',
				content:{
					title:'Coats & Parkas',
					name:'Explore Now!'
				},
				category:'women',
				arrival: false
			},
			{
				image:'src/assets/images/womenCategory/image-3.png',
				content:{
					title:'Tees & T-Shirt',
					name:'Explore Now!'
				},
				category:'women',
				arrival: false
			},
			{
				image:'src/assets/images/womenCategory/image-4.png',
				content:{
					title:'Boxers',
					name:'Explore Now!'
				},
				category:'women',
				arrival: false
			},


		],

		discountCard:[
			{
				image: 'src/assets/images/stock/image-1.png',
				title:'Hawaiian Shirts',
				text:'Dress up in summer vibe',
				sale:'UPTO 50% OFF',
				link:'',
				limitedStock: false,
				dayDiscount:true,
				color:'white',
				direction: 'left'
			},
			{
				image: 'src/assets/images/stock/image-2.png',
				title:'Printed T-Shirt',
				text:'New Designs Every Week',
				sale:'UPTO 40% OFF',
				link:'',
				limitedStock: true,
				dayDiscount:true,
				color:'white',
				direction: 'right'
			},
			{
				image: 'src/assets/images/stock/image-3.png',
				title:'Cargo Joggers',
				text:'Move with style & comfort',
				sale:'UPTO 50% OFF',
				link:'',
				limitedStock: false,
				dayDiscount: true,
				color:'black',
				direction: 'right'
			},
			{
				image: 'src/assets/images/stock/image-4.png',
				title:'Urban Shirts',
				text:'Live In Confort',
				sale:'FLAT 60% OFF',
				link:'',
				limitedStock: false,
				dayDiscount:true,
				color:'black',
				direction: 'right'
			},
			{
				image: 'src/assets/images/stock/image-5.png',
				title:'Oversized T-Shirts',
				text:'Street Style Icon',
				sale:'FLAT 60% OFF',
				link:'',
				limitedStock: false,
				dayDiscount:true,
				color:'black',
				direction: 'right'
			}
		],

		productCard:[
			{
				images:'src/assets/images/productCard/image-1.png',
				price:123,
				name:'Black Sweatshirt with ....',
				brand:'Jhanvi’s  Brand'
			},
			{
				images:'src/assets/images/productCard/image-2.png',
				price:37,
				name:'line Pattern Black H...',
				brand:'AS’s  Brand'
			},
			{
				images:'src/assets/images/productCard/image-3.png',
				price:37,
				name:'Black Shorts',
				brand:'MM’s  Brand'
			},
			{
				images:'src/assets/images/productCard/image-4.png',
				price:119.,
				name:'Levender Hoodie with ...',
				brand:'Nike’s  Brand'
			},
		]
		
	}),
	getters:{

		menCategory(state){
			return state.linkCard.filter((card:{ category: string; arrival: boolean; })=> card.category === 'men' && card.arrival === false)
		},
		womenCategory(state){
			return state.linkCard.filter((card: { category: string; arrival: boolean; }) => card.category === 'women' && card.arrival === false)
		}
		
		
	},
	actions:{
		
	}

	
})