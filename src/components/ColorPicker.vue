<script setup>
import { computed, ref } from 'vue';
let colorArr = ref([
	{
		color: 'purple',
		active: false
	}
	, {
		color: 'red',
		active: false
	}, {
		color: 'white',
		active: false
	}, {
		color: 'black',
		active: false
	}, { color: 'yellow' },
	{
		color: 'blue',
		active: false
	}, {
		color: 'pink',
		active: false
	}])

let props = defineProps({
	fullCard: Boolean
})

const activeColor = (ind) => {

	if (colorArr.value.some(item => item.active === true)) {

		colorArr.value.map(item => item.active = false)
		colorArr.value[ind].active = !colorArr.value[ind].active

	} else {

		colorArr.value[ind].active = !colorArr.value[ind].active
	}

}

</script>

<template>
	<div class="colorPicker" v-for='({ color, active }, ind) in colorArr'>
		<template v-if='!props.fullCard'>
			<div class="colorPicker-color" :style='{ backgroundColor: color }'></div>

			<p class="colorPicker__text">{{ color }}</p>
		</template>


		<template v-if='props.fullCard'>
			<div class="colorPicker-box" @click='activeColor(ind)' :style='{ borderColor: active ? "black" : "white" }'>
				<button class="colorPicker-color_card" :style='{ backgroundColor: color }'></button>

			</div>
		</template>

	</div>
</template>

<style scoped lang='scss'>
.colorPicker {
	text-align: center;

	&-box {
		width: 30px;
		height: 30px;
		border: 1px solid white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all .3s linear;

		&:has(.colorPicker-color_card:hover) {
			border-color: black;
		}

	}

	&-color {
		width: 36px;
		height: 36px;
		border-radius: 12px;
		margin-block-end: 12px;
		cursor: pointer;

		&_card {
			width: 22px;
			height: 22px;
			border-radius: 50%;
			cursor: pointer;
		}
	}

	&__text {
		font-size: 14px;
		color: $cardText;
		font-weight: 600;
	}
}
</style>