<script setup>
import CartDiscount from '@/components/Cart/CartDiscount.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import CartProduct from '@/components/Cart/CartProduct.vue'
import EmptyCart from '@/components/Cart/EmptyCart.vue';
import productCard from '@/stores/ProductCard';
import { storeToRefs } from 'pinia';
const store = productCard()
const { wishlist } = storeToRefs(store)

</script>
<template>
	<section class="cart">
		<template v-if='wishlist'>
			<div class="container">
				<Breadcrumbs />
				<div class="cart__text">
					<p>Please fill in the fields below and click place order to complete your purchase!</p>
					<p>Already registered? <a>Please login here</a></p>
				</div>
				<CartProduct />
				<CartDiscount />
			</div>
		</template>
		<template v-else>
			<EmptyCart />
		</template>
	</section>
</template>
<style scoped lang='scss'>
.cart {
	overflow: hidden;

	.breadCrumbs {
		margin-block: 50px 30px;
	}

	&__text {
		color: $cardText;

		a {
			color: $purple;
		}
	}
}
</style>