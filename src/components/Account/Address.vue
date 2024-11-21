<script setup>
import Button from '../button.vue';
import AddressCard from './AddressCard.vue';

import { account } from '@/stores/account';

const store = account()

</script>
<template>
	<section class="address">
		<div class="address_text">
			<h3 class="address__title">Address</h3>
			<Button @click='store.findComponent("addAddress")' class='address_newCard' :title='"Add New"'></Button>
		</div>
		<div class="address-content">
			<AddressCard />
			<AddressCard />
			<AddressCard />
		</div>
	</section>

</template>
<style scoped lang='scss'>
.address {
	margin-block: 47px 100px;

	&_text {
		display: flex;
		justify-content: space-between;
	}

	&_newCard {
		font-weight: 600;
		color: $cardText;
	}

	&__title {
		font-size: 22px;
		font-weight: 600;
	}

	&-content {
		margin-block-start: 30px;
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
	}
}
</style>