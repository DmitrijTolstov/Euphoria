<script setup>
import LinkProduct from '../components/LinkProduct.vue';
import Cardscontainer from '../components/Discount/DiscountContainer.vue';
import Stock from '../components/Discount/Discount.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import ProductCard from '../components/ProductCard.vue';
import CategoryMen from '../components/Category/CategoryMen.vue';
import CategoryWomen from '../components/Category/CategoryWomen.vue';
import Brands from '../components/Brands.vue';
import ProductCards from '../components/ProductCards.vue';
import Feedback from '../components/Feedback.vue';
import Shop from '../components/Shop.vue';



</script>
<template>
	<Header />
	<Hero />
	<div class="container">
		<Cardscontainer />
		<LinkProduct />
		<Stock />
		<Shop />
		<CategoryMen />
		<CategoryWomen />
		<Brands />
		<ProductCards />
		<Feedback />
	</div>
	<Footer />
</template>
<style scoped lang='scss'></style>