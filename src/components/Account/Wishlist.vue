<script setup>
import Wishlistcard from './Wishlistcard.vue';


</script>

<template>
	<section class="wishList">
		<h2 class="wishList__title">Wishlist</h2>
		<div class="wishList-product">
			<Wishlistcard />
			<Wishlistcard />
			<Wishlistcard />
		</div>

	</section>
</template>

<style scoped lang='scss'>
.wishList {

	&__title {
		font-size: $productCardTitle;
		font-weight: 600;
	}

	&-product {
		display: flex;
		flex-direction: column;
		gap: 40px;
		margin-block: 50px 100px;
	}
}
</style>