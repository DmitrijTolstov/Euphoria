<script setup>
import { computed } from 'vue';
import Button from '../button.vue';
import { ref } from 'vue'



let wishlist = ref(false)
let orders = ref(true)

let gridArea = computed(() => {
	return wishlist.value ? '1/5' : '1/3'
})


let count = ref(0)

let addCount = () => {
	count.value++
}

</script>

<template>
	<section class="productCart">
		<div class="productCart__item">
			<div :style='{ gridColumn: gridArea }' class="product">
				<Button v-if='wishlist' class='product__btn' :title='"X"' />
				<img src="@/assets/images/productCard/image-1.png" alt="">

				<div class="product-content">
					<template v-if='!orders'>
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
				</div>
			</div>

			<template v-if="!orders">
				<p class="price"><b>$29.00</b></p>
				<div class="quantity">
					<img src="@/assets/images/icons/minus.svg" alt="">
					<p>{{ count }}</p>
					<img @click='addCount()' src="@/assets/images/icons/plus.svg" alt="">
				</div>
				<p class="shipping">FREE</p>
				<div class="action">
					<img src="@/assets/images/icons/delete.svg" alt="">
				</div>
			</template>

			<template v-if='wishlist'>
				<p class="total"><b>$29.00</b></p>
				<Button v-if="wishlist" class='productCart_btn' :title='"Add to cart"'></Button>
			</template>

			<template v-if='orders'>
				<Button class='productCart__item__btn' :title="'View Detail'"> </Button>
			</template>
		</div>
	</section>
</template>

<style scoped lang='scss'>
.productCart {

	&__item {
		display: grid;
		gap: 30px;
		grid-template-columns: 400px repeat(5, 1fr);
		align-items: center;
		position: relative;
		margin-block-end: 30px;

		.product {
			display: flex;
			gap: 20px;
			grid-column: 1/5;

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

			&__btn {
				padding-block: 14px;
				padding-inline: 14px;
			}

		}

		&::after {
			content: '';
			width: 100%;
			height: 1px;
			background-color: $gray;
			position: absolute;
			bottom: -30px;
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
}
</style>