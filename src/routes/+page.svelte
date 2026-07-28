
<svelte:head>
	<title>Home</title>
</svelte:head>

<main>


	<!-- Quick Intro -->
	<section class="intro">
		<p>
			I'm Sean Parkin, a Minnesota woodworker turning walnut, cherry, and oak into furniture your
			family will pass down. Every piece is made in my Elk River shop — no mass production, no
			shortcuts. If you're looking for something built right, let's talk.
		</p>
	</section>

	<!-- Featured Work -->
	<!-- <section>
		<h2 style="text-align:center; font-size:2.5rem; margin-bottom:2rem;">Recent Work</h2>
		<div class="portfolio-grid">
			<div class="portfolio-item">
				<img
					src="https://johnsurbantimber.com/wp-content/uploads/2025/09/img_6600.1200x0.jpg"
					alt="Live-edge black walnut dining table"
				/>
				<p>Live-edge black walnut dining table — 96" × 42" — hand-rubbed oil finish</p>
			</div>
			<div class="portfolio-item">
				<img
					src="https://images.squarespace-cdn.com/content/v1/6659ea6f016ad42d2c5a6230/acf42cfa-b0fe-44ea-ba0c-d155b162f189/Basilica+Banner.png"
					alt="Custom walnut slab table"
				/>
				<p>Bookmatched walnut slab table — natural edges preserved</p>
			</div>
			<div class="portfolio-item">
				<img
					src="https://images.pexels.com/photos/33827325/pexels-photo-33827325/free-photo-of-modern-office-interior-with-wooden-desk.jpeg"
					alt="Minimalist walnut desk"
				/>
				<p>Walnut executive desk — clean lines, dovetail drawers</p>
			</div>
			<div class="portfolio-item">
				<img
					src="https://johnsurbantimber.com/wp-content/uploads/2025/09/shop_34.1200x0.jpg"
					alt="Custom cherry dining set"
				/>
				<p>Cherry dining table & benches — hand-cut mortise & tenon</p>
			</div>
		</div>
		<div style="text-align:center; margin-top:2rem;">
			<a href="/portfolio" class="btn">View Full Portfolio</a>
		</div>
	</section> -->

	<!-- Why Choose Me -->
	<section class="features">
		<h2 style="text-align:center; font-size:2.5rem; margin-bottom:3rem; grid-column:1 / -1;">
			Why Work With Me
		</h2>
		<div class="reasons">
			<div>
				<div class="feature-icon">🌳</div>
				<h3>Locally Sourced Hardwoods</h3>
				<p>Walnut, cherry, oak & maple from Minnesota & Midwest sources whenever possible.</p>
			</div>

			<div>
				<div class="feature-icon">♻️</div>
				<h3>Heirloom Quality</h3>
				<p>Finishes that age beautifully — no cheap shortcuts or particle board.</p>
			</div>
			<div>
				<div class="feature-icon">🏠</div>
				<h3>Made in Elk River</h3>
				<p>Everything crafted in my small Minnesota shop, one piece at a time.</p>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="cta">
		<h2>Ready for Furniture That Tells Your Story?</h2>
		<p>
			Whether it's a family dining table, a home office desk, or a live-edge showpiece — let's build
			something you'll love forever.
		</p>
		<a href="/contact" class="btn" style="background:white; color:#8b5a2b; margin-top:1.5rem;"
			>Get a Free Quote</a
		>
	</section>

	
</main>

<style>
main {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* height: 100vh; */
}
	.btn {
		display: inline-block;
		background: #8b5a2b;
		color: white;
		padding: 1rem 2rem;
		text-decoration: none;
		border-radius: 4px;
		font-weight: bold;
		font-size: 1.2rem;
	}
	.btn:hover {
		background: #a16a3a;
	}
	section {
		padding: 4rem 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	 .intro {
		padding-top: 6rem;
		text-align: center;
		font-size: 1.5rem;
		max-width: 800px;
		margin: 0 auto;
	
		
	}
	/* .portfolio-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin: 3rem 0;
	}
	.portfolio-item {
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}
	.portfolio-item img {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}
	.portfolio-item p {
		padding: 1rem;
		margin: 0;
		font-weight: bold;
		text-align: center;
	} */
	.features {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.reasons {
		display: flex;
		text-align: center;
	}
	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	} /* Replace with real icons if desired */
	.cta {
		background: #8b5a2b;
		color: white;
		text-align: center;
		padding: 5rem 1rem;
	}
	.cta h2 {
		font-size: 2.8rem;
		margin: 0 0 1.5rem;
	}
</style>
