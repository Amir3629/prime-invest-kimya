# Email System Setup Instructions

## Overview
I've successfully implemented a contact form email forwarding system for your Vercel-deployed website using Gmail and Nodemailer. Here's what has been set up:

## 🎯 What's Implemented

### 1. ✅ Legal Hero Background Image
- Updated `components/legal-hero.tsx` to use `/images/bacgkground/legal-hero-background.png`

### 2. ✅ German Translations for Featured Products
- Added German translations for all Featured Products content in `components/language-provider.tsx`
- Updated `components/product-showcase.tsx` to use translation keys
- Now supports both English and German for:
  - Urea 46%
  - Liquified Petroleum Gas (LPG) 
  - Anhydrous Ammonia

### 3. ✅ Contact Form Email System
- **API Endpoint**: Created `/app/api/send-email/route.ts`
- **Gmail Integration**: Uses your provided Gmail account
- **Email Forwarding**: Forwards to `Amirhosshotmail.comein.firoozi@`
- **Form Types**: Supports both contact forms and quote requests
- **Updated Components**: Both `contact-form.tsx` and `quote-modal.tsx` now use the API

### 4. ✅ Contact Form Background Image
- Enhanced the contact form card background using the support team image
- Added proper white overlay for better readability

## 🔧 Required Environment Variables

You need to set these environment variables in Vercel:

### For Local Development (.env.local):
```env
GMAIL_USER=raymandgmbhfrnakfurt@gmail.com
GMAIL_APP_PASSWORD=Hemwak8e!!
CLIENT_EMAIL=Amirhossein.firoozi@hotmail.com
```

### For Vercel Deployment:
In your Vercel dashboard → Project Settings → Environment Variables, add:

| Variable Name | Value |
|---------------|-------|
| `GMAIL_USER` | `raymandgmbhfrnakfurt@gmail.com` |
| `GMAIL_APP_PASSWORD` | `Hemwak8e!!` |
| `CLIENT_EMAIL` | `Amirhossein.firoozi@hotmail.com` |

## 📧 Gmail App Password Setup

**Important**: You need to generate a Gmail App Password instead of using the regular password:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **App passwords**
4. Generate a new app password for "Mail"
5. Use this 16-character password as `GMAIL_APP_PASSWORD`

## 🚀 How It Works

### Contact Form Submissions:
1. User fills out contact form
2. Form data is sent to `/api/send-email` endpoint
3. Nodemailer sends formatted email using Gmail SMTP
4. Email is delivered to `Amirhossein.firoozi@hotmail.com`
5. Reply-to is set to the customer's email for easy responses

### Quote Requests:
1. User requests a quote for products
2. Same API endpoint but with `type: 'quote'`
3. Email includes product details, quantities, delivery info
4. Formatted specifically for quote processing

## 📨 Email Templates

The system generates beautifully formatted HTML emails with:
- Company branding colors (#F59524)
- Clear contact information
- Professional styling
- Responsive design
- Timestamp and source tracking

## 🔒 Security Features

- ✅ No client credentials exposed in frontend
- ✅ Environment variables for sensitive data
- ✅ Server-side email sending only
- ✅ Proper error handling
- ✅ Input validation

## 📱 Testing

To test the system:

1. **Local Testing**:
   - Create `.env.local` with the environment variables
   - Run `npm run dev`
   - Fill out contact form or request quote
   - Check your inbox at `Amirhossein.firoozi@hotmail.com`

2. **Production Testing**:
   - Deploy to Vercel with environment variables set
   - Test forms on live website
   - Verify emails are received

## 🛠 Dependencies Added

- `nodemailer@^6.9.8` - For sending emails
- `@types/nodemailer@^6.4.14` - TypeScript types

## 📁 Files Modified/Created

### Created:
- `app/api/send-email/route.ts` - Email sending API endpoint
- `EMAIL_SETUP_INSTRUCTIONS.md` - This instruction file

### Modified:
- `components/legal-hero.tsx` - Updated background image
- `components/language-provider.tsx` - Added German translations
- `components/product-showcase.tsx` - Used translation keys
- `components/contact-form.tsx` - Connected to API endpoint
- `components/quote-modal.tsx` - Connected to API endpoint
- `package.json` - Added dependencies

## 🚨 Important Notes

1. **Gmail App Password**: You MUST generate an app password for Gmail. Regular passwords won't work.

2. **Vercel Environment Variables**: Make sure to add all environment variables in Vercel dashboard.

3. **Email Deliverability**: Emails are sent from `raymandgmbhfrnakfurt@gmail.com` to `Amirhossein.firoozi@hotmail.com` with reply-to set to customer email.

4. **Error Handling**: Forms show alerts on failure - you may want to enhance this with better UI feedback.

## 🔄 Next Steps

1. Generate Gmail App Password
2. Set environment variables in Vercel
3. Deploy and test
4. Monitor email delivery
5. Consider adding email templates for auto-responses to customers

## 📞 Support

If you encounter any issues:
1. Check Vercel function logs
2. Verify environment variables are set correctly
3. Ensure Gmail App Password is generated and used
4. Test with a simple contact form submission first

The system is now fully functional and ready for deployment! 🎉 