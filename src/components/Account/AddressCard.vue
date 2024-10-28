<script setup>
import Button from '../button.vue';

</script>

<template>


	<div class="card">
		<h4 class="card_name">Jhanvi shah</h4>
		<p class="card_phone">8980252445</p>
		<p class="card_address">
			1/4 Pragatinagar Flats, opp. jain derasar , near Jain
			derasar, Vijaynagar road
		</p>
		<div class="card-btns">
			<Button class='card-btns_btn' :title='"Home"'></Button>
			<Button class='card-btns_btn' :title='"Default billing address"'></Button>
		</div>
		<div class="card-btns_edit">
			<Button :title='"Remove"' class='remove'></Button>
			<Button :title='"Edit"' class='edit'></Button>
		</div>
	</div>


</template>
<style scoped lang='scss'>
.card {
	padding-inline: 42px;
	padding-block: 24px;
	color: $cardText;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: $light-gray;
	border-radius: 12px;
	max-width: 435px;
	flex-basis: 45%;

	&_name {
		font-size: $addressCardTitle;
		color: black;
	}

	&-btns {
		display: flex;
		gap: 12px;

		&_btn {
			@include button($cardText, transparent, $cardText);
			padding-block: 7px;
			padding-inline: 19px;
		}
	}

	&-btns_edit {
		display: flex;
		gap: 21px;
		color: black;

		.remove {
			font-weight: 600;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: 1px;
				height: 100%;
				background-color: $cardText;
				top: 0;
				right: -10px;
				cursor: auto;
			}
		}

		.edit {
			font-weight: 600;
		}
	}




}
</style>