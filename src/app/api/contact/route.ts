import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, department, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    console.log(`[CONTACT MESSAGE] From: ${name} (${email}), Dept: ${department}`);

    return NextResponse.json({
      success: true,
      message: 'Message delivered to Tapovan Vatsalyadham administration.'
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred.' },
      { status: 500 }
    );
  }
}
