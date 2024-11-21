<script setup>
</script>
<template>
	<div class="form-billingDetails">
		<div class="form_input  form_input__billingDetails">
			<label for="firstName">First Name*</label>
			<input id='firstName' type="text">
		</div>
		<div class="form_input  form_input__billingDetails">
			<label for="lastName">last Name*</label>
			<input id='lastName' type="text">
		</div>
		<div class="form_input  form_input__billingDetails">
			<label for="country">Country / Region*</label>
			<input id='country' type="text">
		</div>
		<div class="form_input  form_input__billingDetails">
			<label for="company">Company Name</label>
			<input id='company' type="text">
		</div>
		<div class="form_input  form_input__billingDetails">
			<label for="address">Street Address*</label>
			<input id='address' type="text">
		</div>
		<div class="form_input  form_input__billingDetails">
			<label for="unit">Apt, suite, unit</label>
			<input id='unit' type="text">
		</div>
		<div class="form-billingDetails-box">
			<div class="form_input  form_input__billingDetails">
				<label for="city">City*</label>
				<input id='city' type="text">
			</div>
			<div class="form_input  form_input__billingDetails">
				<label for="state">State*</label>
				<input id='state' type="text">
			</div>

			<div class="form_input  form_input__billingDetails">
				<label for="code">Postal Code*</label>
				<input id='code' type="text">
			</div>
		</div>
		<div class="form_input  form_input__billingDetails">
			<label for="phone">Phone*</label>
			<input id='phone' type="text">
		</div>
		<div class="form-newAddress_btns">
			<Button class='form-billingDetails_btn__save' :title='"Continue to delivery"'></Button>
		</div>
		<div class="form_input  form_input__billingDetails">
			<div class="form_input-checkbox">
				<input type="checkbox" name="" id="billing">
				<label for="billing">Save my information for a faster checkout</label>
			</div>
		</div>

	</div>
</template>
<style scoped lang='scss'></style>