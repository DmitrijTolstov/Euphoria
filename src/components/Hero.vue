<script setup>
import { slider } from '../stores/slider';
import Button from './button.vue';

const store = slider()


</script>


<template>

	<div class="hero">
		<div class="slider_bg">
			<div class="slider_item" v-for='slider in store.activeImage'>
				<img :src="slider.img" alt="">
			</div>
		</div>
		<div class="container">
			<div class="hero-content">
				<p class="hero-content__text">T-shirt / Tops</p>
				<h1 class="hero-content__title">Summer Value Pack</h1>
				<p class="hero-content__text">cool / colorful / comfy</p>
				<Button class='hero_btn' :title='"Shop Now"' />
			</div>
			<div class="slider">
				<div @click='store.nextBg()' class="slider-arrow_left arrow"></div>
				<div @click='store.nextBg()' class="slider-arrow_right arrow"></div>
			</div>
			<div class="dotts">
				<div class="dott_left dott active "></div>
				<div class="dott_right dott"></div>
			</div>

		</div>
	</div>
</template>
<style scoped lang='scss'>
.hero {
	color: white;
	position: relative;
	margin-block-end: 200px;

	&_btn {
		@include button(false, white, black)
	}

	&-content {
		margin-inline-start: 94px;
		padding-block: 130px;
		max-width: 440px;

		&__text {
			font-size: $sup-title;
			font-family: 'CoreSans';
			font-weight: 500;
			margin-block-end: 40px;
		}

		&__title {
			font-size: $big-title;
			font-weight: 800;
			margin-block: 40px;
		}
	}





	.slider {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;

		&_bg {
			width: 100%;
			position: absolute;
			z-index: -1;
			display: flex;
			overflow: hidden;
		}

		&_item {
			min-width: 100%;

			img {
				width: 100%;
				max-height: 800px;

			}
		}
	}

	.arrow {
		@include arrow(white, 25px, 3px)
	}

	.slider-arrow_left {
		left: 45px;
		transform: rotate(45deg);
	}

	.slider-arrow_right {
		right: 45px;
		transform: rotate(-135deg);
	}

	.dotts {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -70px;
		display: flex;
		gap: 2px;

		.dott {
			width: 60px;
			background-color: white;
			height: 10px;
			opacity: .6;
			cursor: pointer;

			&.active {
				opacity: 1;
			}


			&_left {
				border-radius: 8px 0 0 8px;
			}

			&_right {
				border-radius: 0 8px 8px 0;
			}
		}

	}


}
</style>