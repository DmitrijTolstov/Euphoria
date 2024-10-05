<script setup>
import Category from './Category.vue';


import { productCard } from '@/stores/ProductCard.ts';

import { ref } from 'vue'

const store = productCard()

const menCategory = ref(store.menCategory)




</script>
<template>
	<Category :cards='menCategory' :title='"Men"' />
</template>
<style scoped lang='scss'></style>