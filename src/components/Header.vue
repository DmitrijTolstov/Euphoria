<script setup>
import { useRoute } from 'vue-router';
import { productCard } from '../stores/ProductCard';

const store = productCard()

</script>

<template>
	<div class="container">

		<header class='header'>
			<img class='header_logo' src="@/assets/images/logo/logo.svg" alt="">
			<nav class="header-nav">
				<Router-link to='/shop'>Shop</Router-link>
				<Router-link @click='store.showSection("men")' to='/menCategory'>Men</Router-link>
				<Router-link @click='store.showSection("women")' to='/womenCategory'>Women</Router-link>
				<a>Combos</a>
				<a>Joggers</a>
			</nav>
			<input class='header_search' type="text" placeholder='Search'>
			<div class="header-links">
				<Router-link to='/wishlist' class="header_btn">
					<svg width="18" height="18" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M8.99486 2.93014C7.49535 1.18262 4.99481 0.712545 3.11602 2.31275C1.23723 3.91295 0.972726 6.5884 2.44815 8.48096C3.67486 10.0545 7.38733 13.3732 8.60407 14.4474C8.7402 14.5675 8.80827 14.6276 8.88766 14.6512C8.95695 14.6718 9.03277 14.6718 9.10207 14.6512C9.18146 14.6276 9.24952 14.5675 9.38565 14.4474C10.6024 13.3732 14.3149 10.0545 15.5416 8.48096C17.017 6.5884 16.7848 3.89611 14.8737 2.31275C12.9626 0.729378 10.4944 1.18262 8.99486 2.93014Z"
							stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</Router-link>
				<Router-link to='/MyAccount' class="header_btn">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.99992 9.66668C10.3011 9.66668 12.1666 7.8012 12.1666 5.50001C12.1666 3.19882 10.3011 1.33334 7.99992 1.33334C5.69873 1.33334 3.83325 3.19882 3.83325 5.50001C3.83325 7.8012 5.69873 9.66668 7.99992 9.66668ZM7.99992 9.66668C4.31802 9.66668 1.33325 11.9053 1.33325 14.6667M7.99992 9.66668C11.6818 9.66668 14.6666 11.9053 14.6666 14.6667"
							stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" />
					</svg>

				</Router-link>
				<Router-link to='/cart' class="header_btn">
					<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.5 1.33334H2.00526C2.85578 1.33334 3.56986 1.97376 3.6621 2.81926L4.3379 9.01409C4.43014 9.85959 5.14422 10.5 5.99474 10.5H13.205C13.9669 10.5 14.6317 9.98341 14.82 9.24519L15.9699 4.73593C16.2387 3.68213 15.4425 2.65742 14.355 2.65742H4.5M4.52063 13.5208H5.14563M4.52063 14.1458H5.14563M13.6873 13.5208H14.3123M13.6873 14.1458H14.3123M5.66667 13.8333C5.66667 14.2936 5.29357 14.6667 4.83333 14.6667C4.3731 14.6667 4 14.2936 4 13.8333C4 13.3731 4.3731 13 4.83333 13C5.29357 13 5.66667 13.3731 5.66667 13.8333ZM14.8333 13.8333C14.8333 14.2936 14.4602 14.6667 14 14.6667C13.5398 14.6667 13.1667 14.2936 13.1667 13.8333C13.1667 13.3731 13.5398 13 14 13C14.4602 13 14.8333 13.3731 14.8333 13.8333Z"
							stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" />
					</svg>
				</Router-link>
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

		&:hover {
			background-color: $purple;

			svg {
				path {
					stroke: white;
				}
			}
		}
	}
}
</style>