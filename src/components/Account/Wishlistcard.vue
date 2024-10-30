<script setup>
import { computed, reactive, ref } from 'vue';
import Button from '../button.vue';



let wishlist = ref(true)
let orders = ref(false)
let ordersDetails = ref(false)
let productCard = ref(false)


let displayFlex = reactive({
	display: 'flex',
	gap: '50px',
	justifyContent: 'space-between'
})

let displayGrid = reactive({
	gap: '30px',
	gridTemplateColumns: '400px repeat(5, 1fr)',
	display: 'grid'
})

let count = ref(0)

let addCount = () => {
	count.value++
}

let displayCard = computed(() => {
	return productCard.value ? displayGrid : displayFlex
})

</script>

<template>
	<section class="productCart">

		<div :style='displayCard' class="productCart__item">
			<div class="product">
				<img v-if='wishlist' class='product__img' src='@/assets/images/icons/x.svg' />
				<img src="@/assets/images/productCard/image-1.png" alt="">

				<div class="product-content">
					<template v-if='productCard'>
						<p class="product-content__title"><b>Blue Flower Print Crop Top</b></p>
						<p class="product-content__color"><b>Color</b> : Yellow</p>
						<p class="product-content__size"><b>Size </b> : M</p>
					</template>
					<template v-if='wishlist'>
						<p class="product-content__title"><b>Blue Flower Print Crop Top</b></p>
						<p class="product-content__color"><b>Color</b> : Yellow</p>
						<p class="product-content__size"><b>Size </b> : M</p>
						<p class="product-content__quantity"><b>Quantity</b> : 1</p>

					</template>
					<template v-if='orders'>
						<p class="product-content__title"><b>Blue Flower Print Crop Top</b></p>
						<p class="product-content__color"><b>Color</b> : Yellow</p>
						<p class="product-content__quantity"><b>Quantity</b> : 1</p>
						<p class="product-content__total"><b>Total</b> : $23.00</p>
					</template>

					<template v-if='ordersDetails'>
						<p class="product-content__title"><b>Blue Flower Print Crop Top</b></p>
						<p class="product-content__color"><b>Color</b> : Yellow</p>
					</template>
				</div>
			</div>

			<template v-if="productCard">
				<div class="productCard-box">
					<p class="price"><b>$29.00</b></p>
					<div class="quantity">
						<img src="@/assets/images/icons/minus.svg" alt="">
						<p>{{ count }}</p>
						<img @click='addCount()' src="@/assets/images/icons/plus.svg" alt="">
					</div>
					<p class="shipping">FREE</p>
					<p class="subtotal">$29.00</p>
					<div class="action">
						<img src="@/assets/images/icons/delete.svg" alt="">
					</div>
				</div>
			</template>

			<template v-if='wishlist'>
				<div class="card-box">
					<p class="total"><b>$29.00</b></p>
					<Button v-if="wishlist" class='productCart_btn' :title='"Add to cart"'></Button>

				</div>
			</template>

			<template v-if='orders'>
				<div class="card-box">
					<Button class='productCart__item__btn' :title="'View Detail'"> </Button>
				</div>
			</template>

			<template v-if='ordersDetails'>
				<div class="card-box">
					<p class="product-content__quantity"><b>Qty</b> : 1</p>
					<p class="price"><b>$29.00</b></p>
					<div class="action">
						<img src="@/assets/images/icons/x.svg" alt="">
					</div>
				</div>
			</template>
		</div>
	</section>
</template>

<style scoped lang='scss'>
.productCart {

	&__item {

		align-items: center;
		position: relative;
		margin-block-end: 30px;
		text-align: center;
		margin-block: 30px;

		.product {
			display: flex;
			gap: 20px;
			text-align: left;

			img {
				max-width: 120px;
				max-height: 100px;
			}

			&-content {
				&__title {
					font-size: $productCardText;
				}

				&__size {
					color: $cardText;
				}
			}

			&__img {
				cursor: pointer;
			}



		}

		&::after {
			content: '';
			width: 100%;
			height: 1px;
			background-color: $gray;
			position: absolute;
			bottom: -31px;
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

		&__btn {
			@include button(false, true, white);
			grid-column: -1
		}



	}

	&_btn {
		@include button(false, true, white);
		grid-column: -1;
	}

	.card-box {
		display: flex;
		gap: 50px;
		align-items: center;

		.action {
			margin-inline-start: 120px;
		}
	}
}
</style>