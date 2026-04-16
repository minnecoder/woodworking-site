import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        console.log("data from formdata",formData)
        const firstName = formData.get('first')?.toString().trim();
        const lastName = formData.get('last')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const subject = formData.get('subject')?.toString().trim();
        const message = formData.get('message')?.toString().trim();


        console.log(firstName)
        console.log("checking data????")
        console.log("before verify",{ firstName, lastName, email, subject, message });
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

console.log('Form data received:', { firstName, lastName, email, subject, message });
console.log('Resend API Key:')
console.log("should try to send email ")
        try {
            console.log('Sending email via Resend...');
            const { error } = await resend.emails.send({
                from: 'Contact Form <sean@parkintimbercrafts.com>',   // Must be from your verified domain in Resend
                to: ['sean@parkintimbercrafts.com'],                     // Your receiving email
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

            console.log('Resend response:', { error });
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