<script setup>
</script>
<template>

	<main class="brands">

		<div class="brands-content">
			<h2 class="brands-content__title">
				Top Brands Deal
			</h2>
			<p class="brands-content__text">
				Up To <span>60%</span> off on brands
			</p>
		</div>
		<div class="brands-cards">
			<div class="brands-card">
				<img src="@/assets/images/brands/image-1.png" alt="">
			</div>
			<div class="brands-card">
				<img src="@/assets/images/brands/image-2.png" alt="">
			</div>
			<div class="brands-card">
				<img src="@/assets/images/brands/image-3.png" alt="">
			</div>
			<div class="brands-card">
				<img src="@/assets/images/brands/image-4.png" alt="">
			</div>
			<div class="brands-card">
				<img src="@/assets/images/brands/image-5.png" alt="">
			</div>
		</div>

	</main>


</template>
<style scoped lang='scss'>
.brands {
	background-color: $gray;
	margin-block-end: 78px;
	padding-block: 45px 60px;
	border-radius: 12px;

	&-content {
		text-align: center;
		margin-block-end: 67px;

		&__title {
			font-size: 50px;
			color: white;
			margin-block-end: 22px;
			font-weight: 800;
		}

		&__text {
			font-size: 22px;
			color: white;


			span {
				color: rgba(251, 209, 3, 1);
			}
		}


	}

	&-cards {
		display: flex;
		gap: 25px;
		align-items: center;
		justify-content: center;
	}

	&-card {
		background-color: white;
		border-radius: 12px;
		min-width: 180px;
		min-height: 85px;
		display: flex;
		align-items: center;
		justify-content: center;
	}


}
</style>