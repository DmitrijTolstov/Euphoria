<script setup>
import { productCard } from '../stores/ProductCard';
import ProductCard from './ProductCard.vue';

import { ref } from 'vue'

const store = productCard()

const cards = ref(store.productCard)




</script>
<template>

	<div class='cards'>
		<ProductCard v-for='card in cards' :key='card' :images='card.images' :name='card.name' :brand='card.brand'
			:price='card.price' />
	</div>



</template>
<style scoped lang='scss'>
.cards {
	margin-block-end: 100px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-block-end: 70px;
	gap: 24px;


	&__title {
		font-size: $title;
	}

	.candle {
		@include purple-candle
	}



}
</style>