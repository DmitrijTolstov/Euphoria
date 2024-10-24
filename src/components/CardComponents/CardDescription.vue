<script setup>
</script>

<template>
	<section class="description">
		<div class="candle">
			<div></div>
			<h4 class='description__title'>
				Product Description
			</h4>
		</div>
		<div class="description-container">
			<div class="description-content">
				<nav class="description_links">
					<a>Description</a>
					<a class='comments'>User comments</a>
					<a class='question'>Question & Answer</a>
				</nav>
				<div class="description-product">
					<div class="description__text">
						100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck.
						Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere.
						Infinite range of matte-finish HD prints.
					</div>
					<div class="description_table">
						<div class="description_table-style">
							<p class="description_table-text">Fabric</p>
							<p class="description_table-desc">Bio-washed Cotton</p>
						</div>
						<div class="description_table-style">
							<p class="description_table-text">Fabric</p>
							<p class="description_table-desc">Bio-washed Cotton</p>
						</div>
						<div class="description_table-style">
							<p class="description_table-text">Fabric</p>
							<p class="description_table-desc">Bio-washed Cotton</p>
						</div>
						<div class="description_table-style">
							<p class="description_table-text">Fabric</p>
							<p class="description_table-desc">Bio-washed Cotton</p>
						</div>
						<div class="description_table-style">
							<p class="description_table-text">Fabric</p>
							<p class="description_table-desc">Bio-washed Cotton</p>
						</div>
						<div class="description_table-style">
							<p class="description_table-text">Fabric</p>
							<p class="description_table-desc">Bio-washed Cotton</p>
						</div>
					</div>
				</div>
			</div>
			<div class="description_video">
				<img src="@/assets/images/shop/images-1.png" alt="">
			</div>
		</div>
	</section>

</template>

<style scoped lang='scss'>
.description {


	&__title {
		font-size: $productCardTitle;
	}

	&-container {
		display: flex;
		justify-content: space-between;
		gap: 90px;
	}

	&_links {
		display: flex;
		gap: 65px;
		margin-block-end: 45px;

		a {
			position: relative;

			&::after {
				content: '1';
				position: absolute;
				width: 20px;
				height: 20px;
				background-color: rgb(92, 92, 211);
				border-radius: 4px;
				right: -35px;
				color: white;
				text-align: center
			}


		}


	}


	&__text {
		margin-block-end: 30px;
	}

	&_table {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		text-align: center;
		margin-block-end: 30px;

		&-style {
			background-color: $light-gray;
			padding-block: 12px 24px;
			padding-inline: 50px;
			position: relative;



		}

		&-text {
			color: $cardText;
		}

	}

	&_video {}

	.candle {
		display: flex;
		margin-block-end: 30px;

		div {
			@include purple-candle;
		}
	}
}
</style>