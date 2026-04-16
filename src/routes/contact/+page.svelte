<script lang="ts">
 import Footer from '../../components/footer.svelte';
    import Header from '../../components/header.svelte';
    import { enhance } from '$app/forms';
    
    // This will be populated by SvelteKit after form submission
    let { form } = $props<{
        form?: {
            success?: boolean;
            error?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
			subject?: string;
            message?: string;
        };
    }>();
</script>

<svelte:head>
    <title>Contact Us</title>
</svelte:head>

<Header />
<div class="main">
    <h2>Contact Us</h2>
	{#if form?.success}
    <p class="success">✅ Thank you! Your message has been sent.</p>
{:else if form?.error}
    <p class="error">❌ {form.error}</p>
{/if}
    <p>
        Email us directly to <a class="email-link" href="mailto:sean@parkintimbercrafts.com"
            >sean@parkintimbercrafts.com</a
        > or fill out the form below and we will be in touch.
    </p>

    <div class="contact-form">
        {#if form?.success}
            <div class="success-message">✓ {form.message}</div>
        {:else if form?.errors}
            <div class="error-message">✗ {form.errors.message}</div>
        {/if}

        <form action="" method="post" use:enhance>
            <h3>Send us a message</h3>
            <div class="name">
                <label>First Name<input type="text" name="first" value={form?.firstName ?? ''}  /></label>
                <label>Last Name<input type="text" name="last" value={form?.lastName ?? ''}  /></label>
            </div>
            <label>Email<input type="email" name="email" value={form?.email ?? ''}  /></label>
            <label>Subject<input type="text" name="subject" value={form?.subject ?? ''}  /></label>
            <label>Message<textarea name="message" rows="8" cols="33" value={form?.message ?? ''} ></textarea> </label>
            <button type="submit">Send  Message</button>
        </form>
    </div>
</div>
<Footer />

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* height: 100vh; */
    }
    .main p {
        text-align: center;
        width: 60%;
    }
    .main h2 {
        padding: 0.5rem 1.5rem;
        background: #865040;
        color: #f5f5f5;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    .email-link {
        color: black;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
    }
    .contact-form {
        padding: 1.5rem;
        width: 60%;
        margin: 1.5rem auto;
        background-color: rgb(207, 207, 207);
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .name {
        display: flex;
    }

    .name label {
        width: 100%;
    }

    form h3 {
        font: inherit;
        font-size: 1.5rem;
        text-align: center;
    }

    form input {
        padding: 0.75rem;
        margin-top: 0.25rem;
        border-radius: 5px;
        font: inherit;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    form textarea {
        margin-top: 0.25rem;
        font: inherit;
        padding: 0.75rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        resize: none;
    }

    label {
        margin: 1rem;
        display: flex;
        flex-direction: column;
    }

    form button {
        background-color: #333;
        color: #f5f5f5;
        padding: 1.5rem 3rem;
        border: none;
        border-radius: 5px;
        margin-top: 1rem;
        margin-left: calc(50% - 3rem);
        cursor: pointer;
        font: inherit;
    }

    form button:disabled {
        background-color: #999;
        cursor: not-allowed;
    }

    .success-message {
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        border: 1px solid #c3e6cb;
        text-align: center;
    }

    .error-message {
        background-color: #f8d7da;
        color: #721c24;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        border: 1px solid #f5c6cb;
        text-align: center;
    }
</style>
