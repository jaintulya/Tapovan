import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, parentName, phone, email, grade, type, notes } = body;

    // Validation
    if (!studentName || !parentName || !phone || !grade) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Generate unique reference ID for Session 2027-28
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `TVS-2027-${randomNum}`;

    // Log to server output
    console.log(`[ADMISSION ENQUIRY] Received ${refCode} for ${studentName} (${grade}), Phone: ${phone}`);

    return NextResponse.json({
      success: true,
      refCode,
      message: 'Admission enquiry submitted successfully!'
    });
  } catch (error) {
    console.error('Admission API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred. Please call the school office directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: 'active', message: 'Tapovan Admissions API' });
}
