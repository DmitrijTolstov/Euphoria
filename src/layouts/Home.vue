<script setup>
import Arrival from '../components/LinkProduct.vue';
import Cardscontainer from '../components/DiscountContainer.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import ProductCard from '../components/ProductCard.vue';
import Stock from '../components/Discount.vue';



</script>
<template>
	<Header />
	<Hero />
	<div class="container">
		<Cardscontainer />
		<Arrival />
		<Stock />
	</div>
	<Footer />
</template>
<style scoped lang='scss'></style>