<script setup>
import Button from '@/components/button.vue';

</script>
<template>
	<section class="emptyCart">
		<div class="emptyCart_img">
			<img src="@/assets/images/logo/emptyCart.png" alt="">
		</div>
		<div class="emptyCart-content">
			<h1 class="emptyCart__title">Your cart is empty and sad</h1>
			<p class="emptyCart__text">
				Add something to make it happy!
			</p>
			<Router-link to='/shop'><Button class='emptyCart_btn' :title='"Continue Shopping"'></Button></Router-link>

		</div>
	</section>
</template>
<style scoped lang='scss'>
.emptyCart {
	text-align: center;
	margin-block: 80px 100px;


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