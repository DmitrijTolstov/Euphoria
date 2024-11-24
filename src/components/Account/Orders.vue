<script setup>
import Button from '../button.vue';
import OrdersCard from '../OrdersCard.vue';
import OrdersInformationCard from './OrdersInformationCard.vue';


</script>

<template>
	<section class="orders">
		<h2 class="orders__title">My Orders</h2>
		<div class="orders-status">
			<Button :title='"Active"' class='orders-status_btn'></Button>
			<Button :title='"Cancelled"' class='orders-status_btn'></Button>
			<Button :title='"Completed"' class='orders-status_btn'></Button>

		</div>
		<div class="orders-content">
			<OrdersInformationCard />
			<OrdersCard />
			<router-view name='ordersDetails'></router-view>
		</div>
	</section>
</template>
<style scoped lang='scss'>
.orders {
	margin-block-end: 100px;

	.orders__title {
		font-size: 22px;
		font-weight: 600;
	}

	&-status {
		display: flex;
		justify-content: space-between;
		margin-block: 38px 20px;

		&_btn {
			font-size: 22px;
			font-weight: 600;
			padding-inline: 53px;
			padding-block: 12px;
			transition: all .3s linear;
			position: relative;

			&::after {
				position: absolute;
				content: '';
				width: 0;
				height: 1px;
				bottom: 0;
				left: 0;
				transition: all .3s linear;
				background-color: $gray;
			}

			&:active,
			&:focus {
				background-color: $light-gray;

				&::after {
					width: 100%;
				}
			}

			&:hover {
				background-color: $light-gray;

				&::after {
					width: 100%;
				}

			}
		}
	}

	&-content {
		display: flex;
		flex-direction: column;
		gap: 30px;

	}

}
</style>