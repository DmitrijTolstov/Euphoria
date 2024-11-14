<script setup>
import { auth } from '@/stores/auth.ts';
import Button from '../button.vue';


import { ref, computed } from 'vue'

const store = auth()

const pass = ref('')
const confPass = ref('')
const errorText = ref(false)

const validate = (() => {
	if (pass.value !== confPass.value) {
		errorText.value = true
	}
	return pass.value == confPass.value
})

const verification = (() => {
	store.verification()
})



</script>
<template>
	<div class="newPassword">
		<h1 class="newPassword_title">Create New Password</h1>
		<p class="newPassword_text">
			Create New Password
		</p>
		<form action="" class="form">
			<div class="form-password form-container">
				<div class="hide">
					<img src="@/assets/images/icons/hide.svg" alt="">
					hide
				</div>
				<label for="newPassword">Password </label>
				<input v-model='pass' id='newPassword' type="password">
				<p>Must be at least 8 characters.</p>
			</div>
			<div class="form-newPassword form-container">
				<label for="confirmPassword">Confirm Password </label>
				<input v-model='confPass' @blur='validate()' id='confirmPassword' type="password">
				<p class='error' :style='{ opacity: errorText ? 1 : 0 }'>New password and comfirm new password do not
					match</p>
			</div>
			<Button @click='verification()' class='form_btn' :title='"New Password"' />
		</form>
	</div>
</template>
<style scoped lang='scss'>
.newPassword {
	margin-block-start: 60px;
	min-width: 570px;

	&_title {
		font-size: $title;
		margin-block-end: 10px;
	}

	&_text {
		color: $gray;
	}

	.form {

		&-container {
			display: flex;
			flex-direction: column;
			position: relative;

			&:not(:last-child) {
				margin-block-start: 33px;
			}

			label {
				color: $gray;
				display: inline;
			}

			input {
				&:user-invalid+p {
					opacity: 1;
				}
			}

		}

		&_btn {
			@include button(false, true, true);
			margin-block-start: 60px;
		}

	}
}

.error {
	color: $error;
	cursor: default;
}
</style>