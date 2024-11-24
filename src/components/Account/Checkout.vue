<script setup>
import Payment from './Payment.vue';
import Button from '../button.vue';
import BillingDetailsForm from './BillingDetailsForm.vue';


</script>

<template>
	<section class="checkOut">
		<h2 class="checkOut__title">Check Out</h2>
		<p class="checkOut__text">Billing Details</p>
		<BillingDetailsForm />
		<div class="checkOut-payment">
			<h2 class="checkOut-payment__title">Payment Method</h2>
			<p class="checkOut-payment__text">All transactions are secure and encrypted.</p>
			<Payment />
			<Button class='checkOut-payment_btn' :title='"Pay Now"' />
		</div>
	</section>
</template>

<style scoped lang='scss'>
.checkOut {

	&__title {
		font-size: $title-footer;
		font-weight: 600;
		margin-block-end: 20px;
		@include purple-candle
	}

	&__text {
		font-size: $feedback-name;
		font-weight: 600;
		margin-block-end: 50px;
	}

	&-payment {
		margin-block-end: 100px;

		&__title {
			font-size: 22px;
			font-weight: 600;
		}

		&_btn {
			@include button(false, true, white);
		}
	}
}
</style>