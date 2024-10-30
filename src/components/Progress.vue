<script setup>
</script>
<template>
	<div class="progress">
		<div class="progress-box">
			<div class="progress-circle placed"></div>
			<p class="progress__text">improssed</p>
		</div>
		<div class="progress-box">
			<div class="progress-circle inprogress"></div>
			<p class="progress__text">improssed</p>
		</div>
		<div class="progress-box">
			<div class="progress-circle"></div>
			<p class="progress__text">improssed</p>
		</div>
		<div class="progress-box delivered">
			<div class="progress-circle"></div>
			<p class="progress__text">improssed</p>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.progress {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-block-start: 50px;



	&-box {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		min-height: 50px;
		gap: 10px;
		font-weight: 600;


		&:not(:last-child) {
			&::after {
				content: "";
				position: absolute;
				width: 400%;
				height: 4px;
				background-color: rgb(190, 188, 189);
				top: 9px;
				left: 29px;
				z-index: -1;
			}
		}

	}

	&-circle {
		width: 16px;
		height: 16px;
		background-color: rgb(190, 188, 189);
		border-radius: 50%;

	}

}

.placed {
	width: 20px;
	height: 20px;
	background-color: black;
}

.inprogress {
	width: 20px;
	height: 20px;
	background-color: rgba(190, 188, 189, 1);
	position: relative;

	&:before {
		content: "";
		position: absolute;
		width: 14px;
		height: 14px;
		background-color: black;
		border-radius: 50%;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}

.delivered {
	color: rgba(190, 188, 189, 1);
}
</style>