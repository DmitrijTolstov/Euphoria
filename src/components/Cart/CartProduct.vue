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
		<div class="productCart-container">
			<div class="productCart-list" v-for='{ images, price, name, color, size, id } in store.getProductCardInCart'
				:key='id'>
				<ProductCardAddToCart :id='id' :img='images' :name='name' :color='color' :size='size' :price='price' />
			</div>
		</div>
	</section>

</template>

<style scoped lang='scss'>
.productCart {
	margin-block-start: 40px;

	&-container {
		display: flex;
		flex-direction: column;
		gap: 100px;
		overflow-y: hidden;
	}

	&-details {
		color: $light-gray;
		padding-block: 14px;
		display: grid;
		grid-template-columns: 400px repeat(5, 1fr);
		gap: 30px;
		padding-block: 26px;
		margin-block-end: 50px;
		position: relative;

		a {
			color: white;
			text-transform: uppercase;

			&:not(:first-child) {
				text-align: center;
			}
		}

		&::after {
			position: absolute;
			content: '';
			width: 100vw;
			height: 100%;
			background-color: $gray;
			z-index: -1;
			left: 50%;
			transform: translateX(-50%);
		}

	}

	&-list {
		position: relative;

		&::after {
			content: '';
			width: 100%;
			height: 1px;
			left: 0;
			top: -50px;
			position: absolute;
			background-color: $gray;
			z-index: -1;
		}
	}

}
</style>