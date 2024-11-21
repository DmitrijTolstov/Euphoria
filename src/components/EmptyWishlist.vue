<script setup>
import Button from './button.vue';

</script>
<template>
	<section class="emptyWishlist">
		<div class="emptyWishlist-heart">
			<svg width="55" height="55" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd"
					d="M8.99486 2.93014C7.49535 1.18262 4.99481 0.712545 3.11602 2.31275C1.23723 3.91295 0.972726 6.5884 2.44815 8.48096C3.67486 10.0545 7.38733 13.3732 8.60407 14.4474C8.7402 14.5675 8.80827 14.6276 8.88766 14.6512C8.95695 14.6718 9.03277 14.6718 9.10207 14.6512C9.18146 14.6276 9.24952 14.5675 9.38565 14.4474C10.6024 13.3732 14.3149 10.0545 15.5416 8.48096C17.017 6.5884 16.7848 3.89611 14.8737 2.31275C12.9626 0.729378 10.4944 1.18262 8.99486 2.93014Z"
					stroke="rgba(40, 166, 66, 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
		<div class="emptyWishlist-content">
			<h1 class="emptyWishlist__title">Your wishlist is empty.</h1>
			<p class="emptyWishlist__text">
				You don’t have any products in the wishlist yet. You will find a lot
				of interesting products on our Shop page.
			</p>
			<Router-link to='/shop'><Button class='emptyWishlist_btn'
					:title='"Continue Shopping"'></Button></Router-link>

		</div>
	</section>
</template>
<style scoped lang='scss'>
.emptyWishlist {
	text-align: center;
	border: 1px solid $light-gray;
	border-radius: 8px;
	margin-block-end: 100px;

	&-heart {
		width: 170px;
		height: 170px;
		background-color: rgba(240, 249, 244, 1);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-block: 60px 78px;
	}

	&-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		max-width: 459px;
		margin: 0 auto;
		margin-block-end: 78px;
	}

	&__title {
		font-size: $title;
		font-weight: 600;
	}

	&__text {
		color: $gray;
	}

	&_btn {
		margin-block-start: 48px;
		@include button(false, true, white);
		max-width: 250px;
	}


}
</style>