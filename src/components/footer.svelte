<script>
	import { Icon } from 'svelte-icons-pack';
	import { AiOutlineMail } from 'svelte-icons-pack/ai';
	import { FaBrandsEtsy, FaBrandsFacebook, FaBrandsInstagram } from 'svelte-icons-pack/fa';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="main">
		<div class="links">
			<a href="mailto:"><Icon src={AiOutlineMail} color="black" size="32" /></a>
			<a href="/">
				<Icon src={FaBrandsEtsy} color="black" size="32" />
			</a>
			<a href="/">
				<Icon src={FaBrandsFacebook} color="black" size="32" />
			</a>
			<a href="/">
				<Icon src={FaBrandsInstagram} color="black" size="32" />
			</a>
		</div>
		&copy; {currentYear} Sean Parkin
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		padding: 2rem 0;
	}
	.links {
		padding-bottom: 0.5rem;
	}
</style>
