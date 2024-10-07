<script setup>
import Button from './button.vue';

</script>
<template>

	<div class="verification">
		<h1 class="verification_title">Verification</h1>
		<p class="verification_text">
			Verify your code.
		</p>
		<form action="" class="form">
			<div class="form-code form-container">
				<label for="code">Verification Code </label>
				<input id='code' type="text">
				<p class="error">Error code!!!</p>
			</div>
			<Button class='form_btn' :title='"Verify Code"' />
		</form>
	</div>


</template>
<style scoped lang='scss'>
.verification {
	margin-block-start: 60px;
	min-width: 570px;

	&_title {
		font-size: $title;
		margin-block-end: 8px;
	}

	&_text {
		color: $gray;
	}
}
</style>