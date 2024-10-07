<script setup>


import { ref } from 'vue'
import Estimation from './Estimation.vue';

const props = defineProps({
	comment: String,
	name: String,
	images: String,
	star: Number
})


</script>
<template>
	<div class="card">
		<div class="card-content">
			<img :src="props.images" alt="">
			<div class="card-content_rating">
				<Estimation :star='props.star' />
			</div>
			<h5 class="card-content_name">{{ props.name }}</h5>
			<p class="card-content_comment">{{ props.comment }}</p>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.card {
	border: 1px solid $border-feedback;
	border-radius: 10px;
	padding-inline: 23px;
	padding-block: 23px;
	min-width: 396px;
	transition: box-shadow .2s linear;
	cursor: pointer;

	&:hover {
		box-shadow: 3px -2px 12px 2px rgba(34, 60, 80, 0.13);
	}



	&-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto 1fr;

		grid-template-areas:
			"avatar rating"
			"avatar ."
			"name name"
			"comment comment"
		;


		&_rating {
			display: flex;
			justify-content: end;
			align-items: start;



		}

		&_name {
			grid-area: name;
			font-size: $feedback-name;
			margin-block: 20px;
		}

		&_comment {
			grid-area: comment;
		}
	}
}
</style>