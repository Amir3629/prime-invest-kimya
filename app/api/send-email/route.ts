import { NextRequest, NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, type = 'contact' } = body

    // Debug: Log environment variables (remove in production)
    console.log('Environment check:', {
      GMAIL_USER: process.env.GMAIL_USER ? 'Set' : 'Missing',
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Missing',
      CLIENT_EMAIL: process.env.CLIENT_EMAIL ? 'Set' : 'Missing',
    })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.CLIENT_EMAIL) {
      console.error('Missing environment variables')
      return NextResponse.json(
        { error: 'Email configuration error' },
        { status: 500 }
      )
    }

    // Create transporter using Gmail
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content based on type
    let subject = ''
    let htmlContent = ''

    if (type === 'contact') {
      subject = `New Contact Form Submission from ${name}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #198c43; border-bottom: 2px solid #198c43; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 8px; border-left: 4px solid #198c43;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from the Prime Invest Kimya contact form on ${new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      `
    } else if (type === 'quote') {
      const { product, quantity, delivery, timeline, company } = body
      subject = `New Quote Request for ${product} from ${company}`
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #198c43; border-bottom: 2px solid #198c43; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Company & Contact Details:</h3>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Contact Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Product Details:</h3>
            <p><strong>Product:</strong> ${product || 'Not specified'}</p>
            <p><strong>Quantity:</strong> ${quantity || 'Not specified'} MT</p>
            <p><strong>Delivery Location:</strong> ${delivery || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          </div>
          
          ${message ? `
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Additional Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 8px; border-left: 4px solid #198c43;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This quote request was sent from the Prime Invest Kimya website on ${new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      `
    }

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: subject,
      html: htmlContent,
      replyTo: email, // Allow direct reply to the customer
    }

    console.log('Attempting to send email...')
    
    // Send email
    const result = await transporter.sendMail(mailOptions)
    
    console.log('Email sent successfully:', result.messageId)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Detailed error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}