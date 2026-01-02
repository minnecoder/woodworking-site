<script>
	import Footer from '../../components/footer.svelte';
	import Header from '../../components/header.svelte';
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<Header />

<div class="contact-form">
	<form action="" method="post">
		<h3>Send us a message</h3>
		<div class="name">
			<label>First Name<input type="text" name="first" /></label>
			<label>Last Name<input type="text" name="last" /></label>
		</div>
		<label>Email<input type="email" name="email" /></label>
		<label>Subject<input type="text" name="subject" /></label>
		<label>Message<textarea name="message" rows="8" cols="33"></textarea> </label>
		<button type="submit">Send</button>
	</form>
</div>
<Footer />

<style>
	.contact-form {
		padding: 1.5rem;
		width: 60%;
		max-width: 900px;
		margin: 1.5rem auto;
		background-color: #61845f;
		border: 1px solid #61845f;
		box-sizing: border-box;
	}

	.name {
		display: flex;
	}

	.name label {
		color: #f5f5f5;
		width: 100%;
	}

	form h3 {
		font: inherit;
		font-size: 1.5rem;
		color: #f5f5f5;
		text-align: center;
	}

	form input {
		padding: 0.75rem;
		margin-top: 0.25rem;
	}

	form textarea {
		margin-top: 0.25rem;
		resize: none;
	}

	label {
		color: #f5f5f5;
		margin: 1rem;
		display: flex;
		flex-direction: column;
	}

	form button {
		background-color: #3e5e43;
		color: #f5f5f5;
		padding: 1.5rem 3rem;
		border: none;
		margin-top: 1rem;
		margin-left: calc(50% - 3rem);
		cursor: pointer;
		font: inherit;
	}
</style>
