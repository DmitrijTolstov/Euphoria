<script setup>

import LinkCard from '../LinkCard.vue';
import { ref } from 'vue'

const props = defineProps({

	title: String,
	cards: Array

})

const cards = ref(props.cards)

</script>
<template>

	<main class="category">
		<h2 class="category-content__title">Categories For {{ title }}</h2>
		<section class="category-cards">
			<LinkCard v-for='card in cards' :key='card' :image='card.image' :title='card.content.title'
				:name='card.content.name' />
		</section>
	</main>


</template>
<style scoped lang='scss'>
.category {
	position: relative;
	margin-block-end: 100px;

	&-content {
		display: flex;
		align-items: center;

		&__title {
			font-size: $sup-title;
			font-weight: 600;
			@include purple-candle
		}

	}



	&-cards {
		display: flex;
		gap: 49px;
		flex-wrap: wrap;
		margin-block-start: 70px;
	}




}
</style>