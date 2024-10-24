<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import CartDiscount from '@/components/Cart/CartDiscount.vue';
import CartProduct from '@/components/Cart/CartProduct.vue';



</script>

<template>
	<Header />
	<section class="cart">
		<div class="container">
			<div class="breadCrumbs"></div>
			<div class="cart__text">
				<p>Please fill in the fields below and click place order to complete your purchase!</p>
				<p>Already registered? <a>Please login here</a></p>
			</div>
			<CartProduct />
			<CartDiscount />
		</div>
	</section>
	<Footer />
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