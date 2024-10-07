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
			<div class="dotts">
				<div class="dott active"></div>
				<div class="dott"></div>
				<div class="dott"></div>
			</div>
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
		gap: 18px;
		overflow-x: clip;
		position: relative;
		padding-inline: 8px;

		.dotts {
			position: absolute;
			bottom: -20px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;



			.dott {
				width: 8px;
				height: 8px;
				background-color: $gray;
				border-radius: 50%;
				opacity: .3;
				cursor: pointer;

				&.active {
					opacity: 1;
				}

				&:not(:last-child) {
					margin-inline-end: 4px;
				}


			}
		}
	}



}
</style>