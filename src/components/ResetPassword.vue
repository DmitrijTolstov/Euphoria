<script setup>
import { auth } from '../stores/auth';
import Button from './button.vue';

const store = auth()

const backToLogin = (() => {
	store.backToLogin()
})

const checkEmail = (() => {
	store.checkEmail()
})

</script>
<template>
	<div class="resetPassword">
		<h1 class="resetPassword__title">Reset Your Password</h1>
		<p class="resetPassword__text">Enter your email and we'll send you a link to reset your password.</p>
		<a class="resetPassword_link">Please check it.</a>
		<form class="form"></form>
		<div class="form-email form-container">
			<label for="email">Email</label>
			<input id='email' type="email">
			<p class="error">We can not find your email.</p>
		</div>
		<Button @click='checkEmail()' class='resetPassword_btn' :title='"Send"' />
		<div class="form_backToLogin">
			<p @click='backToLogin()'>Back to <a> Login</a></p>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.resetPassword {
	margin-block-start: 60px;

	&__title {
		font-size: $title;
		margin-block-end: 10px;
	}

	&_link {
		color: $gray;
		margin-block-start: 5px;
		cursor: pointer;
	}

	&_btn {
		margin-block-start: 60px;
		@include button(false, true, true);
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

		&_backToLogin {
			margin-block-start: 10px;

			a {
				@include link
			}
		}
	}

	.error {
		color: $error;
		opacity: 0;
		cursor: default;
		margin-block-start: 8px;
	}
}
</style>