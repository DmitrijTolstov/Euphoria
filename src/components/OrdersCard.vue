<script setup>
import Button from './button.vue';

</script>
<template>
	<div class="card">
		<div class="card-header">
			<img src="@/assets/images/productCard/image-1.png" alt="">
			<div class="card-header_text">
				<p class="card-header__title"><b>Blue Flower Print Crop Top</b></p>
				<p class="card-header__color"><b>Color</b> : Yellow</p>
				<p class="card-header__quantity"><b>Quantity</b> : 1</p>
				<p class="card-header__total"><b>Total</b> : $23.00</p>
			</div>
		</div>
		<div class="card-content">
			<Button class='card-content_btn' :title="'View Detail'"> </Button>
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