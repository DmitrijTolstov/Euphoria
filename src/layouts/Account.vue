<script setup>
import Address from '../components/Account/Address.vue';
import MyInfo from '../components/Account/MyInfo.vue';
import Orders from '../components/Account/Orders.vue';
import OrdersDetails from '../components/Account/OrdersDetails.vue';
import Wishlist from '../components/Account/Wishlist.vue';
import EmptyWishlist from '../components/EmptyWishlist.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import ProductCard from '../components/ProductCard.vue';
import Error404 from './Error404.vue';
import AddAddressForm from '../components/Account/AddAddressForm.vue';
import { computed } from 'vue'
import { account } from '../stores/account';

let store = account()

let components = {
	'address': Address,
	'wishlist': Wishlist,
	'emptyWishlist': EmptyWishlist,
	'orders': Orders,
	'ordersDetails': OrdersDetails,
	'myInfo': MyInfo,
	'addAddress': AddAddressForm
}

let showComponent = computed(() => {
	return components[store.component]
})



</script>
<template>
	<Header />
	<section class="account">
		<div class="container">
			<div :style='{ marginBlockEnd: store.wishlist.length ? "50px" : "100px" }' class="account-container">
				<div class="account-content">
					<div class="candle">
						<div class=""></div>
						<h2 class="account__title">Hello Jhanvi</h2>
					</div>
					<p class="account__text">Welcome to your Account</p>
					<div class="account-links">
						<div @click='store.findComponent("orders")' class="account-link">
							<img src="@/assets/images/icons/orders.svg" alt="">
							My orders
						</div>
						<div @click='store.findComponent("wishlist")' class="account-link">
							<img src="@/assets/images/icons/heart.svg" alt="">
							Wishlist
						</div>
						<div @click='store.findComponent("myInfo")' class="account-link">
							<img src="@/assets/images/icons/user.svg" alt="">
							My info
						</div>
						<div class="account-link">
							<img src="@/assets/images/icons/sign.svg" alt="">
							Sign out
						</div>
					</div>
				</div>
				<div class="account-info">
					<component :is='showComponent'></component>
				</div>
			</div>
			<div v-if='store.wishlist.length' class="account-viewed">
				<div class="candle">
					<div class=""></div>
					<h1 class='account-viewed__title'>Recently Viewed</h1>
				</div>
				<div class="account-viewed-container">
					<ProductCard :images='"src/assets/images/productCard/image-1.png"' :name='"White T-Shirt"'
						:brand='"Priya’s  Brand"' :price='13' />
					<ProductCard :images='"src/assets/images/productCard/image-1.png"' :name='"White T-Shirt"'
						:brand='"Priya’s  Brand"' :price='13' />
					<ProductCard :images='"src/assets/images/productCard/image-1.png"' :name='"White T-Shirt"'
						:brand='"Priya’s  Brand"' :price='13' />
					<ProductCard :images='"src/assets/images/productCard/image-1.png"' :name='"White T-Shirt"'
						:brand='"Priya’s  Brand"' :price='13' />
					<ProductCard :images='"src/assets/images/productCard/image-1.png"' :name='"White T-Shirt"'
						:brand='"Priya’s  Brand"' :price='13' />
				</div>
			</div>
		</div>
	</section>
	<Footer />
</template>
<style scoped lang='scss'>
.account {
	&-info {
		width: 100%;
	}

	&-container {
		display: flex;
		gap: 50px;
	}

	&__title {
		font-size: 28px;
		font-weight: 600;
	}

	&__text {
		color: $cardText;
	}

	&-links {
		margin-block-start: 41px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		min-width: 295px;
	}

	&-link {
		display: flex;
		gap: 15px;
		color: $cardText;
		padding-block: 11px;
		padding-inline-start: 40px;
		cursor: pointer;

		&:hover {
			background-color: $light-gray;
			border-left: 2px solid $gray;
			border-radius: 8px;

		}
	}

	&-viewed {

		margin-block-end: 100px;

		&-container {
			display: flex;
			gap: 37px;
			margin-block-start: 30px;
			overflow: hidden;
		}

		&__title {
			font-size: $title-footer;
		}
	}
}

.candle {
	display: flex;
	margin-block-end: 12px;

	div {
		@include purple-candle
	}
}
</style>