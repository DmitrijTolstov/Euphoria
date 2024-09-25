<script setup>


import { ref } from 'vue'

const comment = ref('naognsOgvnsogno;sd')
const name = ref('Floyd Miles')

</script>
<template>
	<div class="card">
		<div class="card-content">
			<img src="@/assets/images/feedback/miles.png" alt="">
			<div class="card-content_rating">
				<svg v-for="(item) in 5" width="20" height="19" viewBox="0 0 20 19" fill="#EDD146"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.7476 7.12325L12.7991 6.52407L10.0835 0.126465L7.36789 6.53374L0.419434 7.12325L5.69601 11.6943L4.11111 18.4882L10.0835 14.8835L16.0559 18.4882L14.4806 11.6943L19.7476 7.12325ZM10.0835 13.0763L6.44981 15.2701L7.41621 11.1338L4.20775 8.35058L8.44061 7.98335L10.0835 4.08873L11.7361 7.99301L15.9689 8.36025L12.7604 11.1435L13.7268 15.2797L10.0835 13.0763Z"
						fill="#EDD146" />
				</svg>
			</div>
			<h5 class="card-content_name">{{ name }}</h5>
			<p class="card-content_comment">{{ comment }}</p>
		</div>
	</div>
</template>
<style scoped lang='scss'>
.card {
	border: 1px solid $gray;
	border-radius: 10px;
	padding-inline: 23px;
	padding-block: 23px;
	max-width: 396px;
	transition: box-shadow .2s linear;

	&:hover {
		box-shadow: 4px -14px 30px 12px rgba(34, 60, 80, 0.13)
	}



	&-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto 1fr;

		grid-template-areas:
			"avatar rating"
			"avatar ."
			"name name"
			"comment comment"
		;


		&_rating {
			display: flex;
			justify-content: end;
			align-items: start;

			svg {
				fill: #EDD146;
			}

		}

		&_name {
			grid-area: name;
			font-size: $feedback-name;
			margin-block: 20px;
		}

		&_comment {
			grid-area: comment;
		}
	}
}
</style>