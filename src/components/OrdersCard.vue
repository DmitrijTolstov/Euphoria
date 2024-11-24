<script setup>
import { account } from '@/stores/account';
import Button from './button.vue';
const store = account()

let cards = store.getProductCardInCart


</script>
<template>
	<div class="card" v-for='{ images, name, price, color } in cards'>
		<div class="card-header">
			<img :src='images' alt="">
			<div class="card-header_text">
				<p class="card-header__title"><b>{{ name }}</b></p>
				<p class="card-header__color"><b>Color</b> : {{ color }}</p>
				<p class="card-header__quantity"><b>Quantity</b> : 1</p>
				<p class="card-header__total"><b>Total</b> : ${{ price }}.00</p>
			</div>
		</div>
		<div class="card-content">
			<router-link to='/ordersDetails'>
				<Button class='card-content_btn' :title="'View Detail'"> </Button>
			</router-link>
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