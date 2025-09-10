import sgMail from '@sendgrid/mail'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error('Missing required fields')
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    // Create email message
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    // Send email using SendGrid
    await sgMail.send(msg)

    return {
      status: 200,
      message: 'Email sent successfully'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      status: 500,
      message: error.message || 'Failed to send email'
    }
  }
}) 