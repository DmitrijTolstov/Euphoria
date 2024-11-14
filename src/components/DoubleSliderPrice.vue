<script setup>
import { ref, onMounted } from 'vue';

import noUiSlider from 'nouislider';
import { slider } from '../stores/slider';

const store = slider()

const doubleSlider = ref(null)


onMounted(() => {

	if (doubleSlider.value) {

		noUiSlider.create(doubleSlider.value, {
			start: [store.minValue, store.maxValue],
			connect: true,
			range: {
				'min': 0,
				'max': 1000
			},
		})

		doubleSlider.value.noUiSlider.on('update', (values, handle) => {
			store.sliderValue(values.map(num => Math.floor(num)))
		})

	}

})

</script>
<template>
	<div ref='doubleSlider' class="custom-slider"></div>
</template>

<style lang='scss'>
.custom-slider {

	.noUi-target {
		border: none;
	}

	.noUi-base {
		height: 3px;
		background-color: $cardText;

		.noUi-connect {
			background-color: $purple;
			height: 3px;
		}
	}

	.noUi-handle {
		width: 16px;
		height: 16px;
		background-color: $purple;
		border-radius: 50%;
		right: -10px;

		&::before {
			display: none;
		}

		.noUi-touch-area {
			display: none;

			&::after {
				display: none;
			}
		}
	}
}
</style>