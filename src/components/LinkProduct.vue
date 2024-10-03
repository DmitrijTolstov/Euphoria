<script setup>
import { productCard } from '../stores/ProductCard';
import ProductCard from './ProductCard.vue';

import { ref } from 'vue'

const store = productCard()

const cards = ref(store.cardArrival)


</script>
<template>

	<main class="arrival">
		<div class="arrival-content">
			<div class="candle"></div>
			<h2 class="arrival-content__title">
				New Arrival
			</h2>
		</div>

		<div class="arrival-container_cards">
			<ProductCard class='arrival-container_card' v-for='card in cards' :key='card' :product-name='card.content'
				:product-image='card.image' />

		</div>
		<div class="arrow">
			<div class="arrow-left">
				<svg width="18" height="18" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.5857 7L1.58569 7M6.58569 13L1.2928 7.70711C0.902277 7.31658 0.902277 6.68342 1.2928 6.29289L6.58569 0.999999"
						stroke="#3C4242" stroke-width="1.6" stroke-linecap="round" />
				</svg>

			</div>
			<div class="arrow-right">
				<svg width="18" height="18" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.5857 7L1.58569 7M6.58569 13L1.2928 7.70711C0.902277 7.31658 0.902277 6.68342 1.2928 6.29289L6.58569 0.999999"
						stroke="#3C4242" stroke-width="1.6" stroke-linecap="round" />
				</svg>

			</div>
		</div>
	</main>

</template>
<style scoped lang='scss'>
.arrival {
	position: relative;



	&-content {
		display: flex;
		align-items: center;

		&__title {
			font-size: $sup-title;
			font-weight: 600;
		}
	}

	&-container {

		&_cards {
			margin-block: 70px 95px;
			display: flex;
			gap: 40px;
			align-items: center;
			padding-inline: 37px;
			overflow: hidden;
		}

		&_card {
			min-width: 262px;
		}
	}

	.arrow {
		position: absolute;
		top: 60%;
		transform: translateY(-60%);
		display: flex;
		justify-content: space-between;
		width: 100%;

		&-left {
			cursor: pointer;
			position: relative;
			left: 0;
		}

		&-right {
			cursor: pointer;
			position: relative;
			right: 0;
			transform: rotate(180deg);
		}
	}

	.candle {
		@include purple-candle
	}
}
</style>