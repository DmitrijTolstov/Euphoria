<script setup>
import CardContent from './CardComponents/CardContent.vue';
import CardDescription from './CardComponents/CardDescription.vue';
import ProductCard from './ProductCard.vue';



</script>
<template>
	<CardContent />
	<CardDescription />
	<div class="similarProducts">
		<div class="candle">
			<div class=""></div>
			<h1 class='similarProducts__title'>Recently Viewed</h1>
		</div>
		<div class="similarProducts-container">
			<ProductCard :name='"zczxc"' :brand='"qwerty"' :price='24'
				:images='"src/assets/images/productCard/image-1.png"' />
			<ProductCard :name='"zczxc"' :brand='"qwerty"' :price='24'
				:images='"src/assets/images/productCard/image-1.png"' />
			<ProductCard :name='"zczxc"' :brand='"qwerty"' :price='24'
				:images='"src/assets/images/productCard/image-1.png"' />
			<ProductCard :name='"zczxc"' :brand='"qwerty"' :price='24'
				:images='"src/assets/images/productCard/image-1.png"' />
			<ProductCard :name='"zczxc"' :brand='"qwerty"' :price='24'
				:images='"src/assets/images/productCard/image-1.png"' />
		</div>
	</div>
</template>
<style scoped lang='scss'>
.similarProducts {

	&__title {
		font-size: $title-footer;
		font-weight: 600;
	}

	&-container {
		display: flex;
		gap: 37px;
		flex-wrap: wrap;
		margin-block: 30px 100px;
	}
}

.candle {
	display: flex;
	gap: 12px;

	div {
		@include purple-candle
	}
}
</style>