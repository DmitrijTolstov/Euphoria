<script setup>
import { ref, reactive } from 'vue'

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
	<div class="form-info">
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
</template>
<style scoped lang='scss'></style>