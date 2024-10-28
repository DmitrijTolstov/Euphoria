<script setup>
import Wishlistcard from './Wishlistcard.vue';


</script>

<template>
	<section class="wishList">
		<h2 class="wishList__title">Wishlist</h2>
		<div class="wishList-product">
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
		gap: 40px;
		align-items: center;
		margin-block: 50px 100px;
	}
}
</style>