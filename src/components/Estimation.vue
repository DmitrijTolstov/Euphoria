<script setup>

const props = defineProps({
	stars: Number
})


</script>
<template>

	<svg v-for='star in stars' width="20" height="19" viewBox="0 0 20 19" fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.91406 14.8835L15.8865 18.4882L14.3015 11.6943L19.5781 7.12325L12.6297 6.53374L9.91406 0.126465L7.19846 6.53374L0.25 7.12325L5.52658 11.6943L3.94167 18.4882L9.91406 14.8835Z"
			fill="#EDD146" />
	</svg>
</template>
<style scoped lang='scss'></style>
