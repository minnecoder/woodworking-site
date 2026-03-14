<script lang="ts">
	import { redirect } from '@sveltejs/kit';

	// This is a placeholder for the actual authentication logic.
	// In a real application, you would handle form submission and authentication here.
	// For demonstration purposes, we will just redirect to the home page on form submission.

	export const actions = {
		default: async ({ request }) => {
			const formData = await request.formData();
			const username = formData.get('username');
			const password = formData.get('password');

			// Here you would typically validate the username and password against your database.
			// For this example, we will assume any non-empty credentials are valid.

			if (username && password) {
				// Redirect to the home page after successful login
				throw redirect(302, '/');
			} else {
				// Handle invalid credentials (e.g., show an error message)
				return { error: 'Invalid username or password' };
			}
		}
	};
</script>

<h1>Login page</h1>
<form action="" method="post">
	<label for="username">Username:</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password:</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Login</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 300px;
		margin: 0 auto;
	}

	label {
		margin: 1rem 0 0.5rem 0;
	}

	input {
		padding: 0.5rem;
		font-size: 1rem;
	}

	button {
		margin-top: 1.5rem;
		padding: 0.75rem;
		font-size: 1rem;
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
