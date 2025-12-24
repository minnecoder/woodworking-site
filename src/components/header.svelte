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
		<li><a href="/">Testimonials</a></li>
		<li><a href="/">Contact</a></li>
		<li><a href="/"><Icon src={FaBrandsFacebook} /></a></li>
		<li><a href="/"><Icon src={FaBrandsEtsy} /></a></li>
		<li><a href="/"><Icon src={FaBrandsInstagram} /></a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 10rem;
	}
	.logo {
		padding-top: 0.75rem;
		text-decoration: none;
		color: #000;
	}
	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	.links li {
		list-style: none;
	}
	.links a {
		padding: 0rem 0.5rem;
		text-decoration: none;
		color: black;
	}
</style>
