<script setup>


const props = defineProps({

	category: String,
	title: String,
	name: String,
	image: String,
	arrival: Boolean

})


</script>
<template>
	<div class="product-card">
		<img :src="props.image" alt="">
		<div class="product-card_content">
			<h4 class="product-card__content_title">
				<b>{{ props.title }}</b>
			</h4>
			<p v-if='!props.arrival' class="product-card_content__name">
				{{ props.name }}
			</p>
			<div v-if='!props.arrival' class=" arrow">
				<svg width="18" height="18" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.5857 7L1.58569 7M6.58569 13L1.2928 7.70711C0.902277 7.31658 0.902277 6.68342 1.2928 6.29289L6.58569 0.999999"
						stroke="black" stroke-width="1.6" stroke-linecap="round" />
				</svg>
			</div>
		</div>

	</div>
</template>
<style scoped lang='scss'>
.product-card {
	max-width: 282px;
	position: relative;
	max-height: 441px;
	cursor: pointer;

	&_content {
		margin-block-start: 30px;
		position: relative;

		&__title {
			font-size: $card-link;
			font-weight: 700;
		}

		&__name {
			font-size: $card-name;
			color: $gray;
		}

		.arrow {
			position: absolute;
			z-index: 10;
			right: 0;
			top: 50%;
			transform: translateY(-50%) rotate(180deg);
		}

	}




}
</style>