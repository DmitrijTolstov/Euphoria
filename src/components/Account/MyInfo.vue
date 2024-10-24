<script setup>

import { ref, computed } from 'vue'

let flags = ref(false)

let input = ref('')

let change = computed(() => {
	flags.value = !flags.value
})


</script>
<template>

	<section class="info">
		<h2 class="info__title">My Info</h2>
		<p class="info__text">Contact Details</p>
		<form class='form'>
			<div class="form-details">
				<div class="form-details__input">
					<label for="name">Your Name</label>
					<input v-model='input' v-if='flags' id='name' type="text" placeholder='dadasdada'>
					<p v-else class='form-details__input__text'>{{ input }}</p>
				</div>
				<button @click.prevent='change()' class='form-details__btn'>Change</button>
			</div>
			<div class="form-details">
				<div class="form-details__input">
					<label for="email">Email Address</label>
					<input v-model='input' v-if='flags' id='name' type="text" placeholder='dadasdada'>
					<p v-else class='form-details__input__text'>{{ input }}</p>
				</div>
				<button @click.prevent='change()' class='form-details__btn'>Change</button>
			</div>
			<div class="form-details">
				<div class="form-details__input">
					<label for="phone">Phone Number</label>
					<input v-model='input' v-if='flags' id='name' type="text" placeholder='dadasdada'>
					<p v-else class='form-details__input__text'>{{ input }}</p>
				</div>
				<button @click.prevent='change()' class='form-details__btn'>Change</button>
			</div>
			<div class="form-details">
				<div class="form-details__input">
					<label for="password">Password</label>
					<input v-model='input' v-if='flags' id='name' type="text" placeholder='dadasdada'>
					<p v-else class='form-details__input__text'>{{ input }}</p>
				</div>
				<button @click.prevent='change()' class='form-details__btn'>Change</button>
			</div>
		</form>
	</section>

</template>
<style scoped lang='scss'>
.info {
	width: 100%;

	&__title {
		font-size: 28px;
		font-weight: 600;
	}

	&__text {
		font-size: 22px;
		font-weight: 600;
	}

	.form {
		display: flex;
		flex-direction: column;
		margin-block-start: 40px;
		gap: 40px;

		&-details {
			display: flex;
			justify-content: space-between;
			gap: 30px;
			align-items: end;

			&__input {
				display: flex;
				flex-direction: column;
				min-height: 70px;
				width: 100%;

				label {
					color: $cardText;
				}

				input {
					width: 100%;
				}

				&__text {
					font-size: 18px;
					font-weight: 600;
					margin-block-start: 5px;
				}
			}

			&__btn {
				cursor: pointer;
			}

		}

	}


}
</style>