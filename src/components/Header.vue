<script setup>
</script>

<template>
	<div class="container">

		<header class='header'>
			<img class='header_logo' src="@/assets/images/logo/logo.svg" alt="">
			<nav class="header-nav">
				<a>Shop</a>
				<a>Men</a>
				<a>Women</a>
				<a>Combos</a>
				<a>Joggers</a>
			</nav>
			<input class='header_search' type="text" placeholder='Search'>
			<div class="header-links">
				<button class="header_btn">
					<img src="@/assets/images/icons/heart.svg" alt="">
				</button>
				<button class="header_btn">
					<img src="@/assets/images/icons/user.svg" alt="">
				</button>
				<button class="header_btn">
					<img src="@/assets/images/icons/basket.svg" alt="">
				</button>
			</div>
		</header>
	</div>

</template>

<style scoped lang='scss'>
.header {
	padding-block: 31px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&-nav {
		display: flex;
		gap: 40px;
	}

	&_search {
		@include search
	}

	&-links {
		display: flex;
		gap: 12px;
	}

	&_btn {
		border-radius: 8px;
		padding-block: 12px;
		padding-inline: 12px;
		background-color: $light-gray;
	}
}
</style>