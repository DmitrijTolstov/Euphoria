<script setup>
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute()
let routePath = ref([])


watchEffect(() => {
	routePath.value.push({
		route: route.path,
		name: route.name
	})
	console.log(routePath);

})
</script>
<template>
	<div class="breadCrumbs">
		<router-link to='/' class="breadCrumbs_item">Shop</router-link>
		<template v-if='routePath.length >= 1'>
			<RouterLink class="breadCrumbs_item" :to='route.path' v-for='route in routePath'>{{ route.name }}
			</RouterLink>
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
		}
	}
}
</style>