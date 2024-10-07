<script setup>
import { stock } from '../../stores/stock';
import StockCard from './DiscountCard.vue';

const store = stock()

</script>
<template>

	<div class="stockCards">
		<StockCard class='stockCard' v-for='card in store.stockCard' :link='card.link' :text='card.text'
			:title='card.title' :sale='card.sale' :img='card.img' />
	</div>

</template>
<style scoped lang='scss'>
.stockCards {
	display: flex;
	gap: 30px;
	margin-block-end: 99px;


	.stockCard {
		background-size: contain;
	}
}
</style>