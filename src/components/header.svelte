<script>
	import { Icon } from 'svelte-icons-pack';
	import logo from '$lib/assets/ptc-logo-nobg2.png';
	import { FaBrandsEtsy, FaBrandsFacebook, FaBrandsInstagram } from 'svelte-icons-pack/fa';
</script>

<nav>
	<a class="logo" href="/"><img alt="The project logo" src={logo} /></a>
	<ul class="links">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/work">Work</a></li>
		<li><a href="/testimonials">Testimonials</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
	<div class="social-links">
		<li class="social-icons"><a href="/"><Icon src={FaBrandsFacebook} size=32 /></a></li>
		<li class="social-icons"><a href="/"><Icon src={FaBrandsInstagram} size=32	 /></a></li>
		<li class="social-icons secret"><a href="/">Secret</a></li>
	</div>
</nav>

<style>
	nav {
		/* margin: 0 1rem; */
		padding: .5rem 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background: #f0f0f0;
	}
	.logo img {
		height: 4rem;
		width: 6rem;
		aspect-ratio: 1/1;
	}
	.logo {
		padding-top: 0.2 5rem;
		text-decoration: none;
		color: #000;
	}
	.links,
	.social-links {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.social-links {
		margin-top: 0.75rem;
	}

	.links {
		padding-top: 1rem;
	}

	.links li,
	.social-links li {
		list-style: none;
	}
	.links a,
	.social-links a {
		padding: 0rem 0.5rem;
		text-decoration: none;
		color: black;
	}

	.social-icons {
		margin-top: 0.25rem;
	}
	.secret a {
		opacity: 0;
		/* color: white; */
		cursor: default;
	}
</style>
