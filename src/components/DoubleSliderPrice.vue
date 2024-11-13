<script setup>
import { ref, onMounted } from 'vue';

import noUiSlider from 'nouislider';

const slider = ref(null)

let minValue = ref(0)
let maxValue = ref(0)

onMounted(() => {

	if (slider.value) {

		noUiSlider.create(slider.value, {
			start: [150, 450],
			connect: true,
			range: {
				'min': 0,
				'max': 1000
			},
		})

		slider.value.noUiSlider.on('update', (values, handle) => {
			[minValue.value, maxValue.value] = values.map(num => Math.floor(num))
		})

	}

})

</script>
<template>
	<div ref='slider' class="custom-slider"></div>
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