<script setup>
let sizeArr = ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']

import { computed } from 'vue';
const props = defineProps({
	fullCard: Boolean
})

let width = computed(() => {
	return props.fullCard ? '30px' : '61px'
})

</script>
<template>
	<div class="sizePicker" v-for='item in sizeArr'>

		<button :style='{ minWidth: width }' class="sizePicker-size">{{ item }} </button>

	</div>
</template>
<style scoped lang='scss'>
.sizePicker {
	text-align: center;

	&-size {
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

		&:active,
		&:focus,
		&:hover {
			background-color: $gray;
			color: white;
		}
	}

}
</style>