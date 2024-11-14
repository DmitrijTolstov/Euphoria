<script setup>
import ColorPicker from './ColorPicker.vue';
import DoubleSliderPrice from './DoubleSliderPrice.vue';
import SizePicker from './SizePicker.vue';

import { slider } from '../stores/slider';

const store = slider()

</script>
<template>
	<div class="filter">
		<details>
			<summary>
				<p>Filter</p>
				<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.83333 6.33333L2.83333 1.75M2.83333 18.25L2.83333 10M13.8333 18.25L13.8333 10M8.33333 18.25V13.6667M8.33333 10V1.75M13.8333 6.33333L13.8333 1.75M1 6.33333H4.66667M6.5 13.6667H10.1667M12 6.33333L15.6667 6.33333"
						stroke="#807D7E" stroke-width="1.8" stroke-linecap="round" />
				</svg>
			</summary>
			<div class="filter-clothing filter-items">
				<div class="filter-clothing_item filter-items_item">
					<p>Tops</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Printed T-shirts</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Plain T-shirts</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Kurti</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Boxers</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Full sleeve T-shirts</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Joggers</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Payjamas</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
				<div class="filter-clothing_item filter-items_item">
					<p>Jeans</p>
					<img src="@/assets/images/icons/arrow.svg" alt="">
				</div>
			</div>
			<div class="filter-settings">
				<details>
					<summary>Price</summary>
					<div class="filter-price">
						<DoubleSliderPrice />
						<div class="slider-inputs">
							<input type="text" :value='store.minValue' name="" id="">
							<input type="text" :value='store.maxValue' name="" id="">
						</div>
					</div>

				</details>
				<details>
					<summary>Colors</summary>
					<div class="filter-colors">
						<ColorPicker />
					</div>
				</details>
				<details>
					<summary>Size</summary>
					<div class="filter-size">
						<SizePicker />
					</div>
				</details>
				<details>
					<summary>Dress Style</summary>
					<div class="filter-dressStyle filter-items">
						<div class="filter-dressStyle_item filter-items_item">
							<p>Classic</p>
							<img src="@/assets/images/icons/arrow.svg" alt="">
						</div>
						<div class="filter-dressStyle_item filter-items_item">
							<p>Casual</p>
							<img src="@/assets/images/icons/arrow.svg" alt="">
						</div>
						<div class="filter-dressStyle_item filter-items_item">
							<p>Business</p>
							<img src="@/assets/images/icons/arrow.svg" alt="">
						</div>
						<div class="filter-dressStyle_item filter-items_item">
							<p>Sport</p>
							<img src="@/assets/images/icons/arrow.svg" alt="">
						</div>
						<div class="filter-dressStyle_item filter-items_item">
							<p>Elegant</p>
							<img src="@/assets/images/icons/arrow.svg" alt="">
						</div>
						<div class="filter-dressStyle_item filter-items_item">
							<p>Formal (evening)</p>
							<img src="@/assets/images/icons/arrow.svg" alt="">
						</div>
					</div>
				</details>

			</div>
		</details>




	</div>
</template>
<style scoped lang='scss'>
.filter {

	details {
		summary {
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
		}
	}

	&-settings {
		margin-block-start: 60px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		max-width: 232px;

		&:not(:first-child) {
			summary {
				&:after {
					content: '';
					width: 8px;
					height: 8px;
					border-top: 2.8px solid #8A8989;
					border-right: 2.8px solid #8A8989;
					transition: 0.3s;
					transform: rotate(135deg);
				}
			}

		}


		details {
			&[open] {
				summary {
					&:after {
						transform: rotate(-45deg);
					}
				}
			}
		}

	}


	&-items {
		margin-block-start: 50px;

		&_item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;

			&:not(:last-child) {
				margin-block-end: 18px;
			}
		}
	}


	&-size {
		display: flex;
		flex-wrap: wrap;
		margin-block-start: 50px;
		gap: 20px;

	}

	&-colors {
		display: flex;
		flex-wrap: wrap;
		margin-block-start: 50px;
		gap: 20px;
	}

	&-price {
		margin-block-start: 50px;

	}

	.slider-inputs {
		display: flex;
		gap: 30px;

		input {
			max-width: 97px;
			text-align: center;		}


	}

}
</style>