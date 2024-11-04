<script setup>

let sizeArr = ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']

import { computed } from 'vue';

let width = computed(() => {
	return true ? '61px' : '30px'
})

</script>
<template>
	<div class="sizePicker" v-for='item in sizeArr'>

		<div :style='{ width: width }' class="sizePicker-size">{{ item }} </div>

	</div>
</template>
<style scoped lang='scss'>
.sizePicker {
	text-align: center;

	&-size {
		// width: 30px;
		height: 30px;
		border: 1px solid $border-feedback;
		border-radius: 8px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-block: 9px;
		padding-inline: 9px;
		transition: all .3s linear;
		cursor: pointer;

		&:hover {
			background-color: $gray;
			color: white;
		}
	}

}
</style>