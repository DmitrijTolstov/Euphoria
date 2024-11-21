<script setup>
import { computed } from 'vue';
import AddAddressForm from '@/components/Account/AddAddressForm.vue';
import BillingDetailsForm from '@/components/Account/BillingDetailsForm.vue';
import ContactDetailsForm from '@/components/Account/ContactDetailsForm.vue';
import Button from '@/components/button.vue';

const components = {
	'billingDetails': BillingDetailsForm,
	'addAddress': AddAddressForm,
	'contactDetails': ContactDetailsForm
}

const props = defineProps({
	component: String
})

let component = computed(() => {
	return components[props.component]
})
</script>
<template>

	<form class='form'>

		<component :is="component"></component>

	</form>

</template>
<style lang='scss'>
.form {
	display: flex;
	flex-direction: column;
	margin-block-start: 40px;
	gap: 40px;
	width: 100%;

	&-newAddress,
	&-billingDetails {
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

		&-box {
			display: flex;
			gap: 32px;
			width: 100%;

		}

	}

	&_input {
		display: flex;
		flex-direction: column;
		min-height: 70px;
		width: 100%;

		&__newAddress,
		&__billingDetails {
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