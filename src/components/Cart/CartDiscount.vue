<script setup>
import Button from '../button.vue';

</script>

<template>

	<section class="discountCart">
		<div class="discountCart-codes">

			<h4 class="discountCart-codes__title">Discount Codes</h4>
			<p class="discountCart-codes__text">Enter your coupon code if you have one</p>
			<div class="discountCart-codes-coupon">
				<input type="text">
				<Button class='discountCart-codes__btn' :title='"Apply Coupon"' />
			</div>
			<Button class='discountCart__btn' :title='"Continue Shopping"' />

		</div>
		<div class="discountCart-price price">
			<div class="price-subTotal">
				Sub Total <span>price</span>
			</div>
			<div class="price-shipping">
				Shipping <span>price</span>
			</div>
			<div class="price-grandTotal">
				<b>Grand Total</b> <b>price</b>
			</div>
			<Button class='price__btn' :title='"Proceed To Checkout"' />
		</div>
	</section>

</template>

<style scoped lang='scss'>
.discountCart {
	display: flex;
	justify-content: space-between;
	margin-block-start: 100px;
	position: relative;

	&::before {
		content: '';
		background-color: $light-gray;
		width: 100vw;
		height: 100%;
		position: absolute;
		z-index: -1;
		left: 50%;
		transform: translateX(-50%);
	}

	&-codes {
		margin-block: 20px 117px;


		&__title {
			font-size: $title-footer;
		}

		&__text {
			margin-block-start: 10px;
			color: $cardText;
		}

		&-coupon {
			margin-block: 41px;

			input {
				border-radius: 8px 0 0 8px;
				height: 43px;
			}
		}

		&__btn {
			@include button(false, true, white);
			border-radius: 0 8px 8px 0;
		}

	}


	&__btn {
		@include button(true, white, black)
	}

}



.price {
	margin-block: 39px;
	font-size: 22px;

	&-subTotal {
		display: flex;
		justify-content: space-between;
	}

	&-shipping {
		display: flex;
		justify-content: space-between;
		margin-block-start: 20px;
	}

	&-grandTotal {
		display: flex;
		justify-content: space-between;
		margin-block: 40px 100px;
	}

	&__btn {
		@include button(false, true, white)
	}
}
</style>