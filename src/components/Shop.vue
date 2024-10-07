<script setup>
import Button from './button.vue';

</script>
<template>
	<section class="shop">
		<div class="shop-container">
			<div class="shop-content">
				<h2 class="shop-content__title">WE MADE YOUR EVERYDAY FASHION BETTER!</h2>
				<p class="shop-content__text">
					In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable &
					Affordable fashion 24/7
				</p>
				<Button class='shop-content_btn' :title='"Shop Now"' />
			</div>
			<div class="shop-image">
			</div>
		</div>
	</section>
</template>
<style scoped lang='scss'>
.shop {
	margin-block-end: 100px;

	&-container {
		display: flex;
	}

	&-content {
		display: flex;
		align-items: start;
		justify-content: center;
		flex-direction: column;
		background-image: url(@/assets/images/shop/images-1.png);
		color: white;
		padding-inline: 74px;
		padding-block: 185px;
		background-repeat: no-repeat;
		background-size: cover;
		width: 50%;
		border-radius: 0 0 0 8px;

		&__title {
			font-size: $title;
			font-weight: 800;
			margin-block-end: 30px;
		}

		&__text {
			margin-block-end: 50px;
			opacity: .5;

		}

		&_btn {
			@include button(true, white, black)
		}
	}

	&-image {
		background-image: url(@/assets/images/shop/images-2.png);
		width: 50%;
		background-position: center;
		background-size: cover;
		border-radius: 0 8px 8px 0;
	}
}
</style>