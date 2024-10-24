<script setup>
import Button from '../button.vue';

import { ref } from 'vue'

let count = ref(0)

let addCount = () => {
	count.value++
}
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
		<div class="productCart-list">
			<div class="productCart-list__item">
				<div class="product">
					<img src="@/assets/images/productCard/image-1.png" alt="">

					<div class="product-content">
						<p class="product-content__title"><b>Blue Flower Print Crop Top</b></p>
						<p class="product-content__color">Color : Yellow</p>
						<p class="product-content__size">Size : M</p>
					</div>
				</div>
				<p class="price"><b>$29.00</b></p>
				<div class="quantity">
					<img src="@/assets/images/icons/minus.svg" alt="">
					<p>{{ count }}</p>
					<img @click='addCount()' src="@/assets/images/icons/plus.svg" alt="">
				</div>
				<p class="shipping">FREE</p>
				<p class="total"><b>$29.00</b></p>
				<div class="action">
					<img src="@/assets/images/icons/delete.svg" alt="">
				</div>
			</div>
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

	&-list {


		&__item {
			display: grid;
			gap: 30px;
			grid-template-columns: 400px repeat(5, 1fr);
			text-align: center;
			align-items: center;
			position: relative;
			margin-block-end: 100px;

			.product {
				display: flex;
				text-align: left;
				gap: 20px;

				img {
					max-width: 120px;
					max-height: 100px;
				}

				&-content {
					&__title {
						font-size: $productCardText;
					}

					&__color {
						color: $cardText;
					}

					&__size {
						color: $cardText;
					}
				}



			}

			&::after {
				content: '';
				width: 100%;
				height: 1px;
				background-color: $gray;
				position: absolute;
				bottom: -50px;
				left: 0;
			}

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

}
</style>