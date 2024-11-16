import { defineStore } from 'pinia';
import { ref, computed,Ref} from 'vue';


type TBackgroundImage = {
	img: string,
	active:boolean
}


export const slider = defineStore('slider', () => {

		let bg:Ref<Array<TBackgroundImage>> = ref([
			{
				img:'src/assets/images/hero/hero-1.png',
				active:true
			},
			{
				img:'src/assets/images/hero/hero-2.png',
				active:false
			}
		])
		let minValue = ref(150)
		let maxValue = ref(450)

		const activeImage = computed(() =>{
			return bg.value.map(obj => obj)
		})
 
		function sliderValue(value:number[]):void{
			
			minValue.value = value[0]
			maxValue.value = value[1] 
		}

	return {sliderValue,activeImage,minValue,maxValue}
})
export default slider