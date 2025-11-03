import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
  try {
    const { name, email, businessName, source, purpose } = await request.json();

    if (!name || !email || !purpose) {
      return NextResponse.json({ error: 'Name, email, and purpose are required' }, { status: 400 });
    }

    const newInquiry = await client.create({
      _type: 'inquiry',
      name,
      email,
      businessName,
      source,
      purpose,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Inquiry submitted successfully', inquiry: newInquiry }, { status: 201 });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
  }
} 