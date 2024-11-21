<script setup>
import WishlistCard from '@/components/wishlistCard.vue';
import EmptyWishlist from '../EmptyWishlist.vue';
import productCard from '@/stores/ProductCard';

const store = productCard()


</script>

<template>
	<section class="wishList">
		<template v-if='store.wishlist.length'>
			<h2 class="wishList__title">Wishlist</h2>
			<div class="wishList-product">
				<WishlistCard />
			</div>
		</template>

		<template v-else>
			<EmptyWishlist />
		</template>

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