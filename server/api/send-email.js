// server/api/send-email.js (Nuxt 3)
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'Name, email, and message are required.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${body.name}`,
      text: body.message,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to send email.',
    });
  }
});
