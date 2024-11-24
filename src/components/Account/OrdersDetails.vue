<script setup>
import Progress from '../Progress.vue';
import OrdersInformationCard from './OrdersInformationCard.vue';
import OrdersDetailsCard from '../OrdersDetailsCard.vue';
import { account } from '@/stores/account';
const store = account()
</script>
<template>
	<section class="ordersDetails">
		<div class="ordersDetails-link">
			<router-link to='/orders' style='padding: 10px;'>
				<div class="arrow"></div>
			</router-link>
			<h2 class="ordersDetails__title">Order Details</h2>
		</div>
		<OrdersInformationCard />
		<Progress />
		<div class="ordersDetails-info">
			<p><span>8 June 2023 3:40 PM </span></p>
			<p>Your order has been successfully verified.</p>
		</div>
		<div v-if="store.getProductCardInCart.length" class="ordersDetails-cards">
			<OrdersDetailsCard />
		</div>
	</section>
</template>
<style scoped lang='scss'>
.ordersDetails {

	&__title {
		font-size: 22px;
		font-weight: 600;
		margin-inline-start: 18px;
	}

	&-link {
		display: flex;
		align-items: center;
		margin-block-end: 50px;

		.arrow {
			width: 8px;
			height: 8px;
			border-left: 1px solid black;
			border-top: 1px solid black;
			transform: rotate(-45deg);
			cursor: pointer;
		}
	}


	&-info {
		background-color: $light-gray;
		padding-block: 24px;
		padding-inline: 29px;
		border-radius: 8px;
		position: relative;
		margin-block: 50px 79px;

		p {
			display: inline;
			font-weight: 600;
		}

		&>p {
			margin-inline-end: 37px;

			span {
				color: $cardText;
			}
		}

		&:before {
			content: '';
			position: absolute;
			width: 42px;
			height: 42px;
			background-color: $light-gray;
			transform: rotate(45deg);
			top: -10px;
			left: 120px;
			z-index: -1;
		}
	}

	&-cards {
		display: flex;
		flex-direction: column;
		padding-inline: 50px;
		padding-block: 30px;
		gap: 60px;
		background-color: $light-gray;
		border-radius: 8px;
		margin-block-end: 100px;
		overflow: hidden;
	}

}
</style>