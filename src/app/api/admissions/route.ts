import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    const newEnquiry = {
      refCode,
      studentName,
      parentName,
      phone,
      email: email || 'Not provided',
      grade,
      type: type || 'Day Scholar',
      notes: notes || '',
      submittedAt: new Date().toISOString(),
      status: 'New'
    };

    // Save to local JSON store in data/admissions.json
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, 'admissions.json');
      let existing: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existing = JSON.parse(fileContent || '[]');
      }
      existing.unshift(newEnquiry);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    } catch (fsErr) {
      console.warn('Could not write to local JSON file (read-only environment on Vercel):', fsErr);
    }

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
  try {
    const filePath = path.join(process.cwd(), 'data', 'admissions.json');
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return NextResponse.json(JSON.parse(data || '[]'));
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json([]);
  }
}
