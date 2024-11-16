import { defineStore } from 'pinia';
import {ref, computed, Ref}from 'vue'

interface IProductCard {
		images:string,
		id:number,
		price:number
		name:string,
		brand:string,
		category: string
}
interface IDiscountCard{
	image: string,
				title:string,
				text:string,
				sale:string,
				link?:string,
				limitedStock: boolean,
				dayDiscount:boolean,
				color:string,
				direction: string
}
interface ILinkCard {
		image:string,
				content:{
					title:string,
					name?:string
				},
				category:string,
				arrival: boolean
			}

export const productCard = defineStore('productCard',() =>{

		const linkCard:Ref<ILinkCard[]> = ref([
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

		]) ;

		const discountCard:Ref<IDiscountCard[]> = ref([
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
);
		let productCard:Ref<IProductCard[] >= ref([
			{
				images:'src/assets/images/productCard/image-1.png',
				id:1,
				price:123,
				name:'Black Sweatshirt ',
				brand:'Jhanvi’s  Brand',
				category: 'women'
			},
			{
				images:'src/assets/images/productCard/image-2.png',
				id:2,
				price:37,
				name:'line Pattern Black ',
				brand:'AS’s  Brand',
				category: 'women'
			},
			{
				images:'src/assets/images/productCard/image-3.png',
				id:3,
				price:37,
				name:'Black Shorts',
				brand:'MM’s  Brand',
				category: 'women'
			},
			{
				images:'src/assets/images/productCard/image-4.png',
				id:4,
				price:119.,
				name:'Levender Hoodie',
				brand:'Nike’s  Brand',
				category: 'women'
			},
		]);

		let sectionCards:Ref<IProductCard[]>= ref([]);
		let fullCard:Ref<IProductCard> = ref({
			images: '',
			id: 0,
			price: 0,
			name: '',
			brand: '',
			category: ''
		});
		let cardOpen:boolean = true;
		



		const menCategory = computed(() =>{
			return linkCard.value.filter((card:{ category: string; arrival: boolean; })=> card.category === 'men' && card.arrival === false)
		});
		const womenCategory = computed(() =>{
			return linkCard.value.filter((card: { category: string; arrival: boolean; }) => card.category === 'women' && card.arrival === false)
		},)
		const sectionCard = computed(() => {
			return sectionCards
		});
		
		const showSection = (section:string) =>{
			sectionCards.value = productCard.value.filter(card => card.category === section)
			
		};
		function fullCardDescription  (id:number) {
			fullCard.value =  productCard.value.find((card)=> card.id == id)as IProductCard;

			
		}
		

		return {
			productCard,
			sectionCards,
			linkCard,
			discountCard,
			fullCard,
			cardOpen,
			menCategory,
			womenCategory
			,sectionCard,
			showSection
			,fullCardDescription
		}

	
})

export default productCard