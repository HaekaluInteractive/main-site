import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Submission received:', body)
    // TODO: validate, store in DB, or send email
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 })
  }
}
