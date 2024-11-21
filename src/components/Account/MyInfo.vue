<script setup>

import FormAccount from '@/components/Account/FormAccount.vue';
import Address from '@/components/Account/Address.vue';

</script>
<template>

	<section class="info">
		<h2 class="info__title">My Info</h2>
		<p class="info__text">Contact Details</p>
		<FormAccount :component='"contactDetails"' />
		<Address />
	</section>

</template>
<style scoped lang='scss'>
.info {
	width: 100%;

	&__title {
		font-size: 28px;
		font-weight: 600;
	}

	&__text {
		font-size: 22px;
		font-weight: 600;
	}



}
</style>