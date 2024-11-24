<script setup>
import Button from '../button.vue';

</script>
<template>
	<div class="form-newAddress">
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
		<div class="form_input  form_input__newAddress form_input__newAddress_area">
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
</template>
<style lang='scss'></style>