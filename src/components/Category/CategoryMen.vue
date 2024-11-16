<script setup>
import Category from './Category.vue';


import { productCard } from '@/stores/ProductCard.ts';

import { ref } from 'vue'

const store = productCard()



</script>
<template>
	<Category :cards='store.menCategory' :title='"Men"' />
</template>
<style scoped lang='scss'></style>