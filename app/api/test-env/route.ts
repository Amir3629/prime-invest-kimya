import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const envCheck = {
      GMAIL_USER: process.env.GMAIL_USER ? '✅ Set' : '❌ Missing',
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? '✅ Set' : '❌ Missing',
      CLIENT_EMAIL: process.env.CLIENT_EMAIL ? '✅ Set' : '❌ Missing',
    }

    return NextResponse.json({
      message: 'Environment Variables Check',
      environment: envCheck,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Test failed', details: error },
      { status: 500 }
    )
  }
}