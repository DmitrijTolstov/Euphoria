<script setup>

import { ref, onMounted, computed } from 'vue'


let images = [
	{
		id: 1,
		data: "src/assets/images/productCard/image-1.png"
	},
	{
		id: 2,
		data: "src/assets/images/productCard/image-2.png"
	},
	{
		id: 3,
		data: "src/assets/images/productCard/image-3.png"
	},
	{
		id: 4,
		data: "src/assets/images/productCard/image-1.png"
	},
	{
		id: 5,
		data: "src/assets/images/productCard/image-2.png"
	}
]

let sliderCard = ref()
onMounted(() => {
	sliderCard.value

})

let distance = ref(0)


let next = () => {
	distance.value -= 95
	sliderCard.value.map(item => {
		item.style.top += distance.value + 'px'
	})
}

let prev = () => {
	distance.value += 95

	sliderCard.value.map(item => {
		item.style.top += distance.value + 'px'
	})
}

</script>
<template>

	<div class="slider">
		<div class="slider-card">
			<div ref='sliderCard' :style='{ top: distance + "px" }' class="slider-img" v-for='{ data } in images'>
				<img :src="data" alt="">
			</div>
		</div>
		<div class="slider_arrows">
			<button :disabled='distance == 0' @click='prev' class="arrow-top slider_arrow"></button>
			<button :disabled='distance == -190' @click='next' class="arrow-bottom slider_arrow"></button>
		</div>
	</div>

</template>
<style scoped lang='scss'>
.slider {

	&-card {
		display: grid;
		place-items: center;
		max-height: calc(75px * 3 + 22px * 2);
		overflow: hidden;
		gap: 18px;
	}

	&-img {
		width: 77px;
		height: 77px;
		border-radius: 9px;
		border: 1px solid white;
		display: grid;
		place-items: center;
		position: relative;

		img {
			width: 68px;
			height: 68px;
			border-radius: 9px;
		}

		&:hover {
			border-color: black;
		}
	}

	&_arrows {
		display: grid;
		place-items: center;
		margin-block-start: 24px;

		.arrow-top {
			transform: rotate(-45deg);
			margin-block-end: 12px;
			box-shadow: 3px 2px 3px 1px rgba(0, 0, 0, 0.04);
		}

		.arrow-bottom {
			transform: rotate(135deg);
			background-color: $gray;
			color: white;
		}
	}

	&_arrow {
		width: 21px;
		height: 21px;
		border-radius: 50%;
		position: relative;
		cursor: pointer;

		&::before {
			width: 8px;
			height: 8px;
			content: '';
			position: absolute;
			border-top: 2px solid;
			border-right: 2px solid;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>