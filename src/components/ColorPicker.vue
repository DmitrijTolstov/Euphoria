<script setup>

let colorArr = ['purple', 'red', 'white', 'black', 'yellow', 'blue', 'pink']

</script>

<template>
	<div class="colorPicker" v-for='item in colorArr'>
		<template>
			<div class="colorPicker-color" :style='{ backgroundColor: item }'></div>

			<p class="colorPicker__text">{{ item }}</p>
		</template>


		<template v-if='true'>
			<div class="colorPicker-box">
				<div class="colorPicker-color_card" :style='{ backgroundColor: item }'></div>
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