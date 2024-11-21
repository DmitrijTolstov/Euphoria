<script setup>
import productCard from '@/stores/ProductCard';
import Button from '@/components/button.vue';

import { storeToRefs } from 'pinia';
const store = productCard()

const { wishlist } = storeToRefs(store)

</script>
<template>
	<div class="card" v-for='card of wishlist'>
		<div class="card-header">
			<button @click='store.deleteProduct(card.id)'><img class='product__img'
					src='@/assets/images/icons/x.svg' /></button>
			<img :src="card.images" alt="">
			<div class="card-header_text">
				<p class="product-content__title"><b>{{ card.name }}</b></p>
				<p class="product-content__color"><b>Color</b> : Yellow</p>
				<p class="product-content__size"><b>Size </b> : M</p>
				<p class="product-content__quantity"><b>Quantity</b> : 1</p>
			</div>
		</div>
		<div class="card-content">
			<p class="total"><b>${{ card.price }}.00</b></p>
			<Button class='card-content_btn' :title='"Add to cart"'></Button>
		</div>
	</div>

</template>
<style scoped lang='scss'>
.card {
	display: flex;
	gap: 30px;
	justify-content: space-between;

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
		display: flex;
		text-align: center;
		align-items: center;
		gap: 50px;

		&_btn {
			@include button(false, $purple, white)
		}

	}

}
</style>