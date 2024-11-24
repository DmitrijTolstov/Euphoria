<script setup>
import { account } from '@/stores/account';
import { storeToRefs } from 'pinia';

const store = account()

const { getProductCardInCart } = storeToRefs(store)


</script>
<template>
	<div class="card" v-for='{ images, color, name, price, id } in getProductCardInCart'>
		<div class="card-header">
			<img :src="images" alt="">
			<div class="card-header_text">
				<p class="product-content__title"><b>{{ name }}</b></p>
				<p class="product-content__color"><b>Color</b> : {{ color }}</p>
			</div>
		</div>

		<div class="card-content">
			<p class="quantity"><b>Qty</b> : 1</p>
			<p class="price"><b>${{ price }}.00</b></p>
			<button @click='store.deleteProduct(id)'><img src="@/assets/images/icons/x.svg" alt=""></button>
		</div>
	</div>

</template>
<style scoped lang='scss'>
.card {
	display: flex;
	gap: 30px;
	justify-content: space-between;
	position: relative;

	&::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: $gray;
		position: absolute;
		bottom: -31px;
		left: 0;
	}

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
			width: 100px;
			height: 100px;
			cursor: pointer;
		}

		&__title {
			font-size: $productCardText;
		}

	}

	&-content {
		display: flex;
		gap: 60px;
		align-items: baseline;

		&_btn {
			@include button(false, $purple, white)
		}

	}

}
</style>