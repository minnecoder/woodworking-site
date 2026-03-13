<script>
	import { Icon } from 'svelte-icons-pack';
	import { FaBrandsEtsy, FaBrandsFacebook, FaBrandsInstagram } from 'svelte-icons-pack/fa';
</script>

<nav>
	<a class="logo" href="/">Logo Goes Here!</a>
	<ul class="links">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/work">Work</a></li>
		<li><a href="/testimonials">Testimonials</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
	<div class="social-links">
		<li class="social-icons"><a href="/"><Icon src={FaBrandsFacebook} /></a></li>
		<li class="social-icons"><a href="/"><Icon src={FaBrandsEtsy} /></a></li>
		<li class="social-icons"><a href="/"><Icon src={FaBrandsInstagram} /></a></li>
		<li class="social-icons secret"><a href="/login">Secret</a></li>
	</div>
</nav>

<style>
	nav {
		margin: 0 1rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
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
