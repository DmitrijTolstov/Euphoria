<script setup>
import { productCard } from '../../stores/ProductCard';
import StockCard from './DiscountCard.vue';

import { ref } from 'vue'

const store = productCard()

const discountCard = ref(store.discountCard)

</script>
<template>


	<main class="stock">
		<div class="stock-content">
			<div class="candle"></div>
			<h2 class="stock-content__title">Big Saving Zone</h2>
		</div>
		<section class="stock-container">
			<StockCard v-for='card in discountCard' :img='card.image' :title='card.title' :text='card.text'
				:sale='card.sale' :limited-stock='card.limitedStock' :discount='card.dayDiscount' :color='card.color'
				:direction='card.direction' />
		</section>
	</main>


</template>
<style scoped lang='scss'>
.stock {
	margin-block-end: 100px;

	&-content {
		display: flex;
		align-items: center;
		margin-block-start: 70px;

		.candle {
			@include purple-candle
		}

		&__title {
			font-size: $sup-title;
			font-weight: 800;
		}
	}

	&-container {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		margin-block-start: 70px;
	}


}
</style>