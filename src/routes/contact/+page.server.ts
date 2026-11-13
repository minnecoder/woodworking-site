import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const firstName = formData.get('first')?.toString().trim();
        const lastName = formData.get('last')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const subject = formData.get('subject')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        // Basic validation
        if (!firstName || !lastName || !email || !subject || !message) {
            return fail(400, { 
                error: 'All fields are required',
                firstName, 
                lastName,
                email, 
                subject,
                message 
            });
        }
        else{
            console.log('Form data is valid. Proceeding to send email...');
        }

        if (!env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return fail(500, { error: 'Email service is not configured. Please try again later.' });
        }

        try {
            const resend = new Resend(env.RESEND_API_KEY);
            const { error } = await resend.emails.send({
                from: 'Contact Form <info@parkintimbercrafts.com>',   // Must be from your verified domain in Resend
                to: ['parkintimbercrafts@protonmail.com'],              // Your receiving email
                replyTo: email,                                  // So you can reply directly
                subject: `New Contact Form Message from ${firstName} ${lastName}}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong>${message}</p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `,
                // Optional: text version for better deliverability
                text: `
                    New Contact Form Submission
                    
                    First Name: ${firstName}
                    Last Name: ${lastName}
                    Email: ${email}
                    Subject: ${subject}
                    Message: ${message}
                `
            });

            if (error) {
                console.error('Resend error:', error);
                return fail(500, { error: 'Failed to send email. Please try again later.' });
            }

            return { success: true };
        } catch (err) {
            console.error('Unexpected error:', err);
            return fail(500, { error: 'Something went wrong. Please try again.' });
        }
    }
};