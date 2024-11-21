<script setup>
import { account } from '@/stores/account';
import Button from '../button.vue';
import ProductCardAddToCart from '../ProductCardAddToCart.vue';

const store = account()


</script>

<template>

	<section class="productCart">
		<div class="productCart-details">
			<a>Product Details</a>
			<a>Price</a>
			<a>Quantity</a>
			<a>shipping</a>
			<a>subtotal</a>
			<a>action</a>
		</div>
		<div class="productCart-list" v-for='{ img, price, title, color, size, id } in store.getProductCardInCart'
			:key='id'>
			<ProductCardAddToCart :id='id' :img='img' :title='title' :color='color' :size='size' :price='price' />
		</div>
	</section>

</template>

<style scoped lang='scss'>
.productCart {
	margin-block-start: 40px;

	&-details {
		color: $light-gray;
		padding-block: 14px;
		display: grid;
		grid-template-columns: 400px repeat(5, 1fr);
		gap: 30px;
		padding-block: 26px;
		margin-block-end: 50px;
		position: relative;

		&::before {
			content: '';
			width: 100vw;
			height: 100%;
			left: 50%;
			transform: translateX(-50%);
			position: absolute;
			background-color: $gray;
			z-index: -1;
		}

		a {
			color: white;
			text-transform: uppercase;

			&:not(:first-child) {
				text-align: center;
			}
		}

	}

}
</style>