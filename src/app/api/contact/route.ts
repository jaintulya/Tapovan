import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const studentName = body.studentName || body.name || '';
    const parentName = body.parentName || body.name || '';
    const phone = body.phone || '';
    const email = body.email || '';
    const grade = body.grade || body.department || '';
    const area = body.area || '';
    const message = body.message || body.notes || '';

    if ((!parentName && !studentName) || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (Name, Phone, and Message).' },
        { status: 400 }
      );
    }

    console.log(`[CONTACT MESSAGE] From: ${parentName || studentName}, Phone: ${phone}, Grade: ${grade}`);

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
