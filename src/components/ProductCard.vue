<script setup>
import { productCard } from '../stores/ProductCard';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
	name: String,
	price: Number,
	brand: String,
	images: String,
	id: Number,

})

const store = productCard()

const directionForFullCard = computed(() => {
	router.push('/fullDescription')
	return store.fullCardDescription(props.id)
})

const addToWishlist = (id) => {
	store.addToWishlist(id, true)
}

let activeHeart = computed(() => {

	for (let card of store.wishlist) {

		if (card.id === props.id) {
			
			return card.active
		}
	}
})

</script>
<template>
	<div @click='directionForFullCard' class="productCard">
		<img :src="props.images" alt="">
		<div class="productCard-content">
			<div class="productCard-content__description">
				<p class='productCard-content__name'><b>{{ props.name }}</b></p>
				<p class='productCard-content__brand'>{{ props.brand }}</p>
			</div>
			<div class="productCard__price">
				<p><b>${{ props.price }}.00</b></p>
			</div>
		</div>
		<div @click.stop='addToWishlist(props.id)' class="likes">
			<button>
				<svg :fill='activeHeart ? "red" : "white"' width="18" height="18" viewBox="0 0 18 16" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M8.99486 2.93014C7.49535 1.18262 4.99481 0.712545 3.11602 2.31275C1.23723 3.91295 0.972726 6.5884 2.44815 8.48096C3.67486 10.0545 7.38733 13.3732 8.60407 14.4474C8.7402 14.5675 8.80827 14.6276 8.88766 14.6512C8.95695 14.6718 9.03277 14.6718 9.10207 14.6512C9.18146 14.6276 9.24952 14.5675 9.38565 14.4474C10.6024 13.3732 14.3149 10.0545 15.5416 8.48096C17.017 6.5884 16.7848 3.89611 14.8737 2.31275C12.9626 0.729378 10.4944 1.18262 8.99486 2.93014Z"
						:stroke='activeHeart ? " red" : "#807D7E "' stroke-width=" 1.5" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</button>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.productCard {
	min-width: 282px;
	position: relative;
	max-height: 441px;
	cursor: pointer;


	&-content {
		margin-block-start: 30px;
		display: flex;
		justify-content: space-between;
		align-items: end;

		&__name {
			font-size: $productCardName;
			font-weight: 700;
		}

		&__brand {
			color: $gray;
			font-size: $productCardBrand;
		}

	}

	&__price {
		background-color: $light-gray;
		border-radius: 8px;
		padding-block: 10px;
		padding-inline: 10px;
		font-size: $productCardPrice;

	}

	.likes {
		position: absolute;
		border-radius: 50%;
		background-color: white;
		padding-block: 10px;
		padding-inline: 10px;
		top: 27px;
		right: 21px;
		width: 38px;
		height: 38px;
		cursor: pointer;

		button {

			&:hover {
				svg {
					fill: red;

					path {
						stroke: red
					}
				}
			}
		}

	}
}
</style>