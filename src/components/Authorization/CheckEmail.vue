<script setup>
import { auth } from '../stores/auth';


const store = auth()

const backToLogin = (() => {
	store.backToLogin()
})


</script>
<template>
	<div class="checkEmail">
		<h1 class="checkEmail_title">Check Email</h1>
		<p class="checkEmail_text">
			Please check your email inbox and click on the provided link to reset your
			password . If you don’t receive email, <a><b>Click here to resend</b></a>
		</p>
		<a class="checkEmail_link" @click='backToLogin()'>
			<svg width="14" height="14" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.58325 1.25L0.716268 4.11698C0.504734 4.32852 0.504734 4.67148 0.716268 4.88302L3.58325 7.75"
					stroke="#3C4242" stroke-width="0.975" stroke-linecap="round" />
			</svg>
			Back to Login
		</a>
	</div>
</template>
<style scoped lang='scss'>
.checkEmail {
	margin-block-start: 60px;

	&_title {
		margin-block-end: 30px;
		font-size: $title;
	}

	&_text {
		margin-block-end: 30px;
		max-width: 510px;

		a {
			color: $purple;
		}
	}

	&_link {
		color: $gray;
		display: inline-flex;
		align-items: center;

		svg {
			margin-inline-end: 10px;
		}
	}
}
</style>