<script setup>

</script>
<template>
	<footer class="footer">
		<div class="container">

			<div class="footer-container">
				<div class="footer-content">
					<div class="footer-content_block">
						<h4 class="footer-content__title">Need Help</h4>
						<a>Contact Us</a>
						<a>Track Order</a>
						<a>Returns & Refunds</a>
						<a>FAQ's</a>
						<a>Career</a>
					</div>
					<div class="footer-content_block">
						<h4 class="footer-content__title">Company</h4>
						<a>About Us</a>
						<a>euphoria Blog</a>
						<a>euphoriastan</a>
						<a>Collaboration</a>
						<a>Media</a>
					</div>
					<div class="footer-content_block">
						<h4 class="footer-content__title">More Info</h4>
						<a>Term and Conditions</a>
						<a>Privacy Policy</a>
						<a>Shipping Policy</a>
						<a>Sitemap</a>
					</div>
					<div class="footer-content_block">
						<h4 class="footer-content__title">Location</h4>
						<a>support@euphoria.in</a>
						<a>Eklingpura Chouraha, Ahmedabad Main Road</a>
						<a>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a>
					</div>
				</div>
				<h1 class="footer__title">Download The App </h1>
				<div class="footer-links">
					<div class="footer-links_social">
						<a class="footer_link">
							<img src="@/assets/images/icons/facebook.svg" alt="">
						</a>
						<a class="footer_link">
							<img src="@/assets/images/icons/instagram.svg" alt="">
						</a>
						<a class="footer_link">
							<img src="@/assets/images/icons/twitter.svg" alt="">
						</a>
						<a class="footer_link">
							<img src="@/assets/images/icons/linked.svg" alt="">
						</a>
					</div>
					<div class="footer-links_application application">
						<a>
							<img src="@/assets/images/icons/googleApp.svg" alt="">
							<div class="application-content">
								<p class="application__text">android app on</p>
								<h5 class="application__game">Google Play</h5>
							</div>
						</a>
						<a>
							<img src="@/assets/images/icons/phoneApp.svg" alt="">
							<div class="application-content">
								<p class="application__text">Available on the</p>
								<h5 class="application__game">App Store</h5>
							</div>
						</a>
					</div>
				</div>
				<div class='footer-accordeon accordeon'>
					<h4 class="accordeon__text">Popular Categories</h4>
					<div class="accordeon-arrow"></div>
				</div>

				<small class='footer_license'>Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</small>
			</div>

		</div>

	</footer>

</template>

<style scoped lang='scss'>
.footer {
	background-color: $gray;
	color: white;
	padding-block: 60px;

	&-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, auto);
		grid-template-areas:
			"content content content content"
			". . title title"
			"link link link link"
			"accordeon accordeon accordeon accordeon"
			"license license license license";
	}

	&-content {
		display: flex;
		justify-content: space-between;
		grid-area: content;
		gap: 80px;
		padding-inline: 70px;

		&_block {
			display: flex;
			flex-direction: column;

			a {
				&:not(:last-child) {
					margin-block-end: 8px;
				}
			}
		}

		&__title {
			margin-block-end: 15px;
			font-size: $title-footer;
		}

	}



	&__title {
		grid-area: title;
		margin-inline-start: auto;
		font-size: $title-footer;
		padding-inline-end: 70px;

	}



	&-links {
		grid-area: link;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-block-end: 50px;
		margin-block-start: 20px;
		padding-inline: 70px;

		&_social {
			display: flex;
			gap: 9px;

			.footer_link {
				padding-block: 10px;
				padding-inline: 10px;
				background-color: white;
				border-radius: 8px;
				min-width: 37px;
			}

		}

		.application {
			display: flex;
			gap: 20px;
			align-items: baseline;

			a {
				background-color: rgba(64, 64, 64, 1);
				border-radius: 15px;
				padding-block: 9px;
				padding-inline: 9px;
			}

			&-content {
				display: inline-flex;
				flex-direction: column;
				margin-inline-start: 10px;
			}

			&__text {
				font-size: 12px;
			}

		}
	}



	.accordeon {
		grid-area: accordeon;
		display: flex;
		padding-block: 30px;
		border-top: 1px solid $light-gray;
		border-bottom: 1px solid $light-gray;
		justify-content: space-between;
		align-items: center;

		&__text {
			font-size: $title-footer;
			padding-inline-start: 70px;
		}

		&-arrow {
			border: 3px solid $light-gray;
			border-top: 0;
			border-left: 0;
			transform: rotate(45deg);
			width: 17px;
			height: 17px;
			margin-inline-end: 20px;
			cursor: pointer;

			&:hover {
				transform: rotate(225deg);
			}
		}
	}

	&_license {
		grid-area: license;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		margin-block-start: 37px;
	}
}
</style>