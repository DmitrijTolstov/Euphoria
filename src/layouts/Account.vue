<script setup>
import MyInfo from '../components/Account/MyInfo.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';


</script>
<template>
	<Header />
	<section class="account">
		<div class="container">
			<div class="account-container">
				<div class="account-content">
					<div class="candle">
						<div class=""></div>
						<h2 class="account__title">Hello Jhanvi</h2>
					</div>
					<p class="account__text">Welcome to your Account</p>
					<div class="account-links">
						<div class="account-link">
							<img src="@/assets/images/icons/orders.svg" alt="">
							My orders
						</div>
						<div class="account-link">
							<img src="@/assets/images/icons/heart.svg" alt="">
							Wishlist
						</div>
						<div class="account-link">
							<img src="@/assets/images/icons/user.svg" alt="">
							My info
						</div>
						<div class="account-link">
							<img src="@/assets/images/icons/sign.svg" alt="">
							Sign out
						</div>
					</div>
				</div>
				<MyInfo />
			</div>
		</div>
	</section>
	<Footer />
</template>
<style scoped lang='scss'>
.account {

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
}

.candle {
	display: flex;
	margin-block-end: 12px;

	div {
		@include purple-candle
	}
}
</style>