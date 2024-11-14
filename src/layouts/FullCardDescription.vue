<script setup>
import CardContent from '@/components/CardComponents/CardContent.vue';
import CardDescription from '@/components/CardComponents/CardDescription.vue';
import ProductCard from '@/components/ProductCard.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';



</script>
<template>
	<Header />
	<div class="container">
		<CardContent />
		<CardDescription />
		<div class="similarProducts">
			<h1 class='similarProducts__title'>Recently Viewed</h1>
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
	</div>
	<Footer />
</template>
<style scoped lang='scss'>
.similarProducts {

	&__title {
		font-size: $title-footer;
		font-weight: 600;
		@include purple-candle
	}

	&-container {
		display: flex;
		gap: 37px;
		flex-wrap: wrap;
		margin-block: 30px 100px;
	}
}
</style>