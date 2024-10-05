<script setup>
import { feedback } from '../stores/feedback';
import FeedbackCard from './FeedbackCard.vue';

import { ref } from 'vue'

const store = feedback()


const commentscard = ref(store.comments)

</script>
<template>
	<section class="feedback">
		<div class="feedback-content">
			<div class="candle"></div>
			<h2 class="feedback-content__title">
				Feedback
			</h2>
		</div>
		<div class="feedback-cards">
			<FeedbackCard v-for='card in commentscard' :key='card' :comment='card.comment' :name='card.name'
				:images='card.images' :star='card.star' />
		</div>
	</section>

</template>
<style scoped lang='scss'>
.feedback {
	margin-block-end: 100px;

	&-content {
		display: flex;
		align-items: center;
		margin-block-end: 70px;

		&__title {
			font-size: $title;
			font-weight: 600;
		}

		.candle {
			@include purple-candle
		}
	}

	&-cards {
		display: flex;
		gap: 25px;
		overflow: hidden;
	}


}
</style>