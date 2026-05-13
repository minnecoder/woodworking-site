<script>
	import { Icon } from 'svelte-icons-pack';
	import { AiOutlineMail } from 'svelte-icons-pack/ai';
	import { FaBrandsEtsy, FaBrandsFacebook, FaBrandsInstagram } from 'svelte-icons-pack/fa';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="main">
		<div class="links">
			<a href="mailto:"><Icon src={AiOutlineMail} color="white" size="48" /></a>
			<a href="/">
				<Icon src={FaBrandsFacebook} color="white" size="48" />
			</a>
			<a href="/">
				<Icon src={FaBrandsInstagram} color="white" size="48" />
			</a>
		</div>
		&copy; {currentYear} Sean Parkin
	</div>
</footer>

<style>
	footer {
		background: #000;
		color: white;
		display: flex;
		justify-content: center;
		padding: 2rem 0;
	}
	.links {
		padding-bottom: 0.5rem;
		padding-left: 1rem;
	}
	.links a {
		padding: 0rem 0.5rem;
		text-decoration: none;
	}
</style>
