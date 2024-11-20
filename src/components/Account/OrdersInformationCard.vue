<script setup>
import { account } from '@/stores/account';
let store = account()

</script>
<template>
	<div @click='store.findComponent("ordersDetails")' class="orders-info">
		<div class="orders-information">
			<h4 class="orders-information__num">Order no: #123456789</h4>
			<p class="orders-information__text"><b>Order Date </b><span>: 2 June 2023 2:40 PM</span> </p>
			<p class="orders-information__text"><b>Estimated Delivery Date </b><span>: 8 June 2023</span> </p>
		</div>
		<div class="orders-info__status">
			<p><b>Order Status </b><span>: Inprogress</span> </p>
			<p><b>Payment Method </b><span>: Cash on delivery </span></p>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.orders-info {
	display: flex;
	justify-content: space-between;
	align-items: end;
	font-size: 14px;
	background-color: $light-gray;
	padding-block: 28px;
	padding-inline: 47px;
	border-radius: 12px;
	cursor: pointer;

	&>div>p>span {
		opacity: .6;
	}

	.orders-information {
		&__num {
			font-size: 20px;
			font-weight: 600;
			margin-block-end: 14px;
		}

	}
}
</style>