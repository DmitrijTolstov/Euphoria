<script setup>
import FormAccount from '@/components//FormAccount.vue';
import Payment from './Payment.vue';
import Button from '../button.vue';


</script>

<template>
	<section class="checkOut">
		<FormAccount />
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