<script setup>
import { stock } from '../stores/stock';
import StockCard from './StockCard.vue';

const store = stock()

</script>
<template>

	<div class="container">
		<div class="stockCard">
			<StockCard v-for='card in store.stockCard' :link='card.link' :text='card.text' :title='card.title'
				:sale='card.sale' :img='card.img' />
		</div>
	</div>

</template>
<style scoped lang='scss'>
.stockCard {
	display: flex;
	gap: 30px;
	justify-content: space-between;
}
</style>