<script setup>
import { productCard } from '../stores/ProductCard';
import ProductCard from './ProductCard.vue';

import { ref } from 'vue'

const store = productCard()

const cards = ref(store.productCard)




</script>
<template>

	<section class="limeLight">
		<div class="limeLight-content">
			<div class="candle"></div>
			<h2 class="limeLight-content__title">
				In The Limelight
			</h2>
		</div>
		<div class='limeLight-cards'>
			<ProductCard v-for='card in cards' :key='card' :images='card.images' :name='card.name' :brand='card.brand'
				:price='card.price' />
		</div>
	</section>



</template>
<style scoped lang='scss'>
.limeLight {
	margin-block-end: 100px;

	&-content {
		display: flex;
		align-items: center;
		margin-block-end: 70px;

		&__title {
			font-size: $title;
		}

		.candle {
			@include purple-candle
		}
	}

	&-cards {
		display: flex;
		gap: 36px;
	}


}
</style>