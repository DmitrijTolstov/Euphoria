<script setup>
import Category from './Category.vue';

import { productCard } from '@/stores/ProductCard.ts';

import { ref } from 'vue'

const store = productCard()

const womenCategory = ref(store.womenCategory)




</script>
<template>
	<Category :cards='womenCategory' :title='"Women"' />
</template>
<style scoped lang='scss'></style>