<script setup>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute()
let routePath = []


watchEffect(() => {
	routePath.push({
		route: route.path,
		name: route.name
	})

})
</script>
<template>
	<div class="breadCrumbs">
		<Router-link to='/' class="breadCrumbs_item">Shop</Router-link>
		<template v-if='routePath.length >= 1'>
			<Router-link class="breadCrumbs_item" v-for='route in routePath' :to='route.path'>{{ route.name }}
			</Router-link>
		</template>
	</div>
</template>
<style scoped lang='scss'>
.breadCrumbs {
	display: flex;
	align-items: center;
	gap: 25px;

	&_item {
		font-size: 18px;
		color: $cardText;
		position: relative;

		&:not(:last-child) {
			&::after {
				content: '>';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: -15px;
			}
		}}
}
</style>