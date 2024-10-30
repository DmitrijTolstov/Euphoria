<script setup>
import Button from '../components/button.vue';

</script>
<template>
	<section class="error">
		<div class="error_img">
			<img src="@/assets/images/logo/error.png" alt="">
		</div>
		<div class="error-content">
			<h1 class="error__title">Oops! Page not found</h1>
			<p class="error__text">
				The page you are looking for might have been removed or
				temporarily unavailable.
			</p>
			<Button class='error_btn' :title='"Back to HomePage"'></Button>

		</div>
	</section>
</template>
<style scoped lang='scss'>
.error {
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