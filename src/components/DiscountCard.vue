<script setup>
import Button from './button.vue';

import { ref } from 'vue'

const limited = ref(false)

const maincolor = ref('black')

const props = defineProps({
	img: String,
	title: String,
	text: String,
	sale: String,
	link: String,
	limitedStock: false,
	discount: false
})





</script>

<template>
	<div :style='{ backgroundImage: `url(${props.img})` }' class="card">
		<div :style='{ color: maincolor }' v-if='props.discount' class="card-content-shop">
			<div v-if='props.limitedStock' class="card-content-shop__limited">
				<span>Limited Stock</span>
			</div>
			<h4 class="card-content-shop__title">{{ props.title }}</h4>
			<p class="card-content-shop__text">{{ props.text }}</p>
			<p class="card-content-shop__sale">{{ props.sale }}</p>
			<div class="arrow">
				<svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.8423 1.66675L11.8423 23.675M22 15.2103L13.0394 24.1709C12.3783 24.832 11.3064 24.832 10.6452 24.1709L1.68465 15.2103"
						:stroke="maincolor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</div>
			<Button :style='{ color: maincolor, borderColor: maincolor }' class='card_btn' :title='"SHOP NOW"' />
		</div>

		<div v-else class="card-content">
			<p class="card-content__text">{{ props.text }}</p>
			<h4 class="card-content__title">{{ props.title }}</h4>
			<p class="card-content__sale">{{ props.sale }}</p>
			<a class="card-content_link">{{ props.link }}</a>
		</div>

	</div>
</template>

<style scoped lang='scss'>
.card {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 10px;
	min-width: 400px;
	height: 400px;


	&-content {
		max-width: 250px;
		margin-inline-start: 25px;
		color: white;
		margin-block-start: 70px;

		&__title {
			font-size: $card-title;
			margin-block: 24px 10px;
			font-weight: 800;
		}

		&__sale {
			font-size: $card-sale;
			font-family: 'Coresans';
		}

		&_link {
			font-size: $card-link;
			font-weight: 800;
			margin-block-start: 41px;
			display: inline-block;
			transition: transform .3s linear;

			&:hover {
				transform: scale(1.1);
			}
		}

		&__text {
			font-weight: 800;
		}

		&-shop {
			color: white;
			display: flex;
			flex-direction: column;
			max-width: 200px;
			margin-inline: 25px 25px;
			margin-block-start: 65px;

			&__title {
				font-size: $card-title;
				margin-block-end: 15px;
				font-weight: 600;
			}

			&__sale {
				font-size: $card-sale;
				margin-block: 10px 27px;
				font-weight: 700;
			}

			&__limited {
				max-width: 105px;
				background-color: $gray;
				padding-inline: 15px;
				padding-block: 10px;
				font-size: 12px;
				text-align: center;
				border-radius: 5px;
				margin-block-end: 28px;
				font-family: 'Causten';
				font-weight: 700;
			}

			.arrow {
				margin-inline-start: 15%;
			}
		}


	}

	&_btn {
		@include button(white, transparent, white);
		max-width: 111px;
		font-size: 12px;
		padding-inline: 18px;
		padding-block: 10px;
		margin-block-start: 30px;
	}

	&:nth-last-child(1) {
		flex-grow: 2;
	}

	&:nth-last-child(2) {
		flex-grow: 2;
	}


}
</style>