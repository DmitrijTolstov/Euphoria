<script setup>
import Filter from '../Filter.vue';
import ProductCards from '../ProductCards.vue';
import { useRoute } from 'vue-router';
let route = useRoute()
import { productCard } from '@/stores/ProductCard';
const store = productCard()

</script>
<template>
	<section class="sectionClothing">
		<div class="sectionClothing-container">
			<div class="sectionClothing-container_filter">
				<Filter />
			</div>

			<div class="sectionClothing-container_cards">
				<h2 class="sectionClothing-container_cards__title">{{ route.name }} Clothing</h2>
				<ProductCards :cards='store.sectionCard.value' />

			</div>
		</div>
		<div class="sectionClothing-contents">
			<div class="sectionClothing-contents_online">
				<h2 class="sectionClothing-contents__title">
					Clothing for {{ route.name }} Online in India
				</h2>
				<div class="sectionClothing-contents__text">
					<p><span>Reexplore {{ route.name }}'s Clothing Collection Online at Euphoria</span></p>
					<p>Women's Clothing – Are you searching for the best website to buy Clothing for Women online in
						India? Well, your search for the coolest and most stylish {{ route.name }} clothing ends here.
						From trendy
						Casual {{ route.name }} Wear Online shopping to premium quality cotton women's apparel, Euphoria
						has
						closet of Women Collection covered with the latest and best designs of Women's Clothing Online.
					</p>
					<p>Our collection of clothes for women will make you the trendsetter with an iconic resemblance of
						choice in {{ route.name }} Wear. </p>
					<p><span>One-Stop Destination to Shop Every Clothing for Women: Euphoria</span></p>
					<p>Today, Clothing for Women is gaining more popularity above all. This is because gone are the days
						when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is
						in Casual {{ route.name }} Wear which is a comfortable outfit. Concerning this, Euphoria has a
						big fat
						range of Stylish Women's Clothing that would make her the winner wherever she goes. </p>
					<p>Our collection of clothes for women will make you the trendsetter with an iconic resemblance of
						choice in {{ route.name }} Wear. It is quite evident to say that there are very few {{
							route.name }} Clothing online
						stores where you can buy Western Wear for Women comprising the premium material and elegant
						design that you are always seeking for. Basically, </p>
					<a>See More</a>
				</div>
			</div>

			<div class="sectionClothing-contents_bestPrice">
				<h2 class="sectionClothing-contents__title">
					Buy Women's Clothing at Best Price
				</h2>
				<div class="sectionClothing-contents_bestPrice-tables">
					<div class="sectionClothing-contents_bestPrice-table">
						<h3>Women's Clothing</h3>
						<p>Pick Any 4- {{ route.name }} Plain T-shirt Combo</p>
						<p>Pick Any 4- Plain {{ route.name }} Boxer Combo</p>
						<p>Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</p>
						<p>Multicolor Checkered Long Casual Shirts for Women</p>
						<p>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</p>
						<p>Blue Floral Anarkali Kurti</p>
						<p>Jade Black Narrow Cut Flexible Women Jeggings</p>
						<p>Mustard-yellow Solid Straight-Fit Women Pant</p>
						<p>Women Pants Combo - Pick Any 2</p>
						<p>Pista Green Solid Boxy Casual Shirts for Women</p>
						<p>Plain Burgundy {{ route.name }} Boxer</p>
						<p>Striped Front Tie Casual Shirts for Women</p>
					</div>
					<div class="sectionClothing-contents_bestPrice-table">
						<h3>Best Price</h3>
						<p>₹1099</p>
						<p>₹1099</p>
						<p>₹1399</p>
						<p>₹499</p>
						<p>₹799</p>
						<p>₹599</p>
						<p>₹998</p>
						<p>₹499</p>
						<p>₹800</p>
						<p>₹449</p>
						<p>₹349</p>
						<p>₹449</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped lang='scss'>
.sectionClothing {

	&-container {
		display: flex;
		gap: 50px;

		&_filter {
			min-width: 294px;
			height: 100%;
			border: 1px solid $border-feedback;
			border-right: 2px solid $border-feedback;
			border-left: 2px solid $border-feedback;
			padding-inline: 32px;
			padding-block: 20px;
			border-radius: 8px;
		}

		&_cards {
			width: 100%;
			margin-block-start: 50px;

			&__title {
				font-size: 22px;
				font-weight: 600;
				margin-block-end: 50px;

			}

		}
	}


	&-contents {
		margin-block-start: 100px;

		&_online {
			margin-block-end: 100px;
		}

		&__title {
			font-size: $title-footer;
			font-weight: 600;
			margin-block-end: 30px;
			position: relative;

			&:before {
				@include purple-candle
			}
		}

		&__text {
			color: $cardText;

			p {
				display: inline-block;

				&:not(&:has(span)) {
					margin-block-end: 20px;
				}

				span {
					display: inline-block;
					margin-block-end: 25px;
					font-weight: 600;
				}
			}
		}

		&_bestPrice {

			margin-block-end: 100px;

			&-tables {
				display: grid;
				grid-template-columns: 4fr 1fr;


			}

			&-table {
				display: grid;
				gap: 30px;
				font-size: 20px;

				h3 {
					margin-block-end: 20px;
					font-size: 24px;
					font-weight: 600;
				}

				&:last-child {
					text-align: center;
				}
			}


		}
	}




}
</style>