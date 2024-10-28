<script setup>
import { ref, reactive } from 'vue'
import Button from './button.vue';

let newAddress = ref(false)


let input = reactive({
	inputName: {
		value: ref('Jhanvi Shah'),
		active: false
	},
	inputEmail: {
		value: ref('Jhanvi@gmail.com'),
		active: false
	},
	inputNum: {
		value: ref('8980252445'),
		active: false
	},
	inputPass: {
		value: ref('123456'),
		active: false
	},

})

let change = (event) => {
	input[event.target.dataset.name].active = !input[event.target.dataset.name].active;
}
</script>
<template>

	<form class='form'>
		<div v-if='newAddress' class="form-info">
			<div class="form-details">
				<div class="form-details__input form_input">
					<label for="name">Your Name</label>
					<input v-model='input.inputName.value' v-if='input.inputName.active' id='name' type="text">
					<p v-else class='form-details__input__text'>{{ input.inputName.value }}</p>
				</div>
				<button data-name="inputName" @click.prevent='change' class='form-details__btn'>Change</button>
			</div>
			<div class="form-details">
				<div class="form-details__input form_input">
					<label for="email">Email Address</label>
					<input v-model='input.inputEmail.value' v-if='input.inputEmail.active' id='email' type="text">
					<p v-else class='form-details__input__text'>{{ input.inputEmail.value }}</p>
				</div>
				<button data-name='inputEmail' @click.prevent='change' class='form-details__btn'>Change</button>
			</div>
			<div class="form-details">
				<div class="form-details__input form_input">
					<label for="phone">Phone Number</label>
					<input v-model='input.inputNum.value' v-if='input.inputNum.active' id='phone' type="text">
					<p v-else class='form-details__input__text'>{{ input.inputNum.value }}</p>
				</div>
				<button data-name='inputNum' @click.prevent='change' class='form-details__btn'>Change</button>
			</div>
			<div class="form-details">
				<div class="form-details__input form_input">
					<label for="password">Password</label>
					<input v-model='input.inputPass.value' v-if='input.inputPass.active' id='password' type="password">
					<p v-else class='form-details__input__text'>{{ input.inputPass.value }}</p>
				</div>
				<button data-name='inputPass' @click.prevent='change' class='form-details__btn'>Change</button>
			</div>
		</div>

		<div v-else class="form-newAddress">
			<div class="form_input  form_input__newAddress">
				<label for="firstName">First Name*</label>
				<input id='firstName' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="lastName">last Name*</label>
				<input id='lastName' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="country">Country / Region*</label>
				<input id='country' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="company">Company Name</label>
				<input id='company' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="address">Street Address*</label>
				<input id='address' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="unit">Apt, suite, unit</label>
				<input id='unit' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="city">City*</label>
				<input id='city' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="state">State*</label>
				<input id='state' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="phone">Phone*</label>
				<input id='phone' type="text">
			</div>
			<div class="form_input  form_input__newAddress">
				<label for="code">Postal Code*</label>
				<input id='code' type="text">
			</div>
			<div class="form_input  form_input__newAddress_area">
				<label for="instruction">Delivery Instruction</label>
				<textarea name="instruction" id="instruction" placeholder='Delivery Instruction'></textarea>
			</div>
			<div class="form_input  form_input__newAddress">
				<div class="form_input-checkbox">
					<input type="checkbox" name="" id="shipping">
					<label for="shipping">Set as default shipping address</label>
				</div>
				<div class="form_input-checkbox">
					<input type="checkbox" name="" id="billing">
					<label for="billing">Set as default billing address</label>
				</div>
			</div>
			<div class="form-newAddress_btns">
				<Button class='form-newAddress_btn__save' :title='"Save"'></Button>
				<Button class='form-newAddress_btn__cancel' :title='"Cancel"'></Button>
			</div>
		</div>
	</form>

</template>
<style scoped lang='scss'>
.form {
	display: flex;
	flex-direction: column;
	margin-block-start: 40px;
	gap: 40px;
	width: 100%;

	&-newAddress {
		display: flex;
		gap: 42px;
		flex-wrap: wrap;
		justify-content: space-between;

		&_btns {
			flex-basis: 100%;
			display: flex;
			gap: 30px;
		}

		&_btn {

			&__save {
				@include button(false, true, white)
			}

			&__cancel {
				@include button(false, $light-gray, $gray)
			}
		}

	}

	&_input {
		display: flex;
		flex-direction: column;
		min-height: 70px;
		width: 100%;

		&__newAddress {
			flex-basis: 46%;

			label {
				font-weight: 600;
				font-size: 18px;
			}

			input {
				border: none;
				background-color: $light-gray;
				;
			}

			&_area {
				flex-basis: 100%;

				textarea {
					background-color: $light-gray;
					padding-inline-start: 21px;
					padding-block-start: 17px;
					min-height: 150px;
					border-radius: 8px;
					resize: none;
				}
			}

		}

		&-checkbox {
			display: flex;
			gap: 7px;
			align-items: center;

			&:first-child {
				margin-block-end: 15px;
			}

			&>input {
				width: 16px;
				height: 16px;
				accent-color: $gray;
			}
		}



	}

	&-details {

		display: flex;
		justify-content: space-between;
		gap: 30px;
		align-items: end;

		&__input {
			label {
				color: $cardText;
			}

			input {
				width: 100%;
			}

			&__text {
				font-size: 18px;
				font-weight: 600;
				margin-block-start: 5px;
			}
		}

		&__btn {
			cursor: pointer;
		}

	}

}
</style>