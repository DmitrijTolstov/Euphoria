<script setup>

import FormAccount from '@/components/Account/FormAccount.vue';
import Address from '@/components/Account/Address.vue';
import ContactDetailsForm from './ContactDetailsForm.vue';
import AddAddressForm from './AddAddressForm.vue';

let newAddress = false

</script>
<template>

	<section class="info">
		<h2 class="info__title">My Info</h2>

		<p v-if='newAddress' class="info__text">Add Address</p>

		<p v-else class="info__text">Contact Details</p>

		<template v-if='newAddress'>
			<AddAddressForm />
		</template>

		<template v-else>
			<ContactDetailsForm />
			<Address @changeAddress='newAddress = true' />
		</template>


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
		margin-block-end: 50px;
	}



}
</style>