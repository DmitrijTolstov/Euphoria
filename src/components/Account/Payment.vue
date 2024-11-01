<script setup>
import { ref, computed } from 'vue'

let checked = ref(false)

let contentVisible = (() => {
	console.log(checked.value);

	return + checked.value === 1
})

</script>
<template>
	<div class="payment">
		<div class="payment-card">
			<div class="payment-card-checkBox">
				<input value='1' :checked='checked' v-model='checked' type="radio" id='paymentCard1' name='paymentCard'>
				<div class="payment-card-checkbox_text">
					<label for='paymentCard1' class="title">Credit Card</label>
					<p class="text">We accept all major credit cards.</p>
				</div>
			</div>
			<div v-if='contentVisible()' class="payment-card-content">
				<div class="content-cards">
					<div class="card">
						<img src="@/assets/images/icons/googlePay.png" alt="">
					</div>
					<div class="card">
						<img src="@/assets/images/icons/visa.png" alt="">
					</div>
					<div class="card">
						<img src="@/assets/images/icons/paypal.png" alt="">
					</div>
					<div class="card">
						<img src="@/assets/images/icons/paypass.png" alt="">
					</div>
				</div>
				<div class="content-form">
					<form class='form'>
						<input type="text" id="number" placeholder='Card number'>
						<input type="text" id="name" placeholder='Name of card'>
						<input autocomplete='username' type="text" id="date" placeholder='Expiration date (MM/YY)'>
						<input autocomplete='new-password' type="password" id="security" placeholder='Security Code'>
					</form>
				</div>
			</div>
		</div>
		<div class="payment-card">
			<div class="payment-card-checkBox">
				<input value='2' v-model='checked' type="radio" id='paymentCard2' name="paymentCard">
				<div class="payment-card-checkbox_text">
					<label for='paymentCard2' class="title">Cash on delivery</label>
					<p class="text">Pay with cash upon delivery.</p>
				</div>
			</div>
		</div>
		<div class="payment-card">
			<div class="payment-card-checkBox">
				<input value='3' v-model='checked' type="radio" id='paymentCard3' name="paymentCard">
				<div class="payment-card-checkbox_text">
					<label for='paymentCard3' class="title">Paypal</label>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.payment {
	background-color: $light-gray;
	padding-block: 45px;
	padding-inline: 28px;
	border-radius: 12px;
	margin-block: 30px 50px;


	&-card {

		&:not(:last-child) {
			margin-block-end: 30px;
		}

		.content {

			&-cards {
				display: flex;
				align-items: center;
				gap: 20px;
				margin-block: 30px;

				.card {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 80px;
					height: 46px;
					background-color: white;
					border-radius: 8px;
					cursor: pointer;
				}
			}

			&-form {
				.form {
					display: flex;
					flex-wrap: wrap;
					gap: 30px;
					width: 100%;

					input {
						width: calc(100% / 2 - 65px * 2);
					}

				}
			}

		}

		&-checkBox {
			display: flex;
			align-items: center;
			gap: 15px;



			input[type=radio] {
				width: 18px;
				height: 18px;
				accent-color: $cardText;
			}
		}

		&-checkbox_text {
			.title {
				font-size: 20px;
				font-weight: 700;
				margin-block-end: 6px;
				cursor: pointer;
			}

		}

	}







	&-content {}
}
</style>