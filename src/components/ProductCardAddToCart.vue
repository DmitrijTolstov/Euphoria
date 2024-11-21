<script setup>

import { ref } from 'vue';
import { account } from '@/stores/account';

const store = account()

let count = ref(0)

const props = defineProps({
	title: String,
	color: String,
	size: String,
	img: String,
	price: Number,
	id: Number
})


</script>
<template>
	<div class="card">
		<div class="card-header">
			<img :src="props.img" alt="">
			<div class="card-header_text">
				<p class="card-header__title"><b>{{ props.title }}</b></p>
				<p class="card-header__color"><b>Color</b> : {{ props.color }}</p>
				<p class="card-header__size"><b> size </b> : {{ props.size }}</p>
			</div>
		</div>

		<div class="card-content">
			<p class="price"><b>${{ props.price }}.00</b></p>
			<div class="quantity">
				<button @click='count--'><img src="@/assets/images/icons/minus.svg" alt=""></button>
				<p>{{ count }}</p>
				<button @click='count++'><img src="@/assets/images/icons/plus.svg" alt=""></button>
			</div>
			<p class="shipping">FREE</p>
			<p class="subtotal">${{ props.price }}.00</p>
			<div class="action">
				<button @click='store.deleteProduct(props.id)'><img src="@/assets/images/icons/delete.svg"
						alt=""></button>
			</div>
		</div>
	</div>


</template>
<style scoped lang='scss'>
.card {
	display: grid;
	gap: 30px;
	grid-template-columns: 400px 1fr;

	&-header {
		display: flex;
		gap: 20px;
		text-align: left;

		&_text {
			display: flex;
			flex-direction: column;
		}

		&__size {
			color: $cardText;
		}

		img {
			max-width: 120px;
			max-height: 100px;
			cursor: pointer;
		}

		&__title {
			font-size: $productCardText;
		}

	}

	&-content {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		text-align: center;
		gap: 30px;

		.quantity {
			background-color: $light-gray;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 12px;
			width: 100px;
			padding-block: 12px;
			margin: 0 auto;
			gap: 10px;
			height: 36px;

			p {
				width: 10px;
			}

			img {
				cursor: pointer;
				padding: 5px;
			}
		}

	}

}
</style>