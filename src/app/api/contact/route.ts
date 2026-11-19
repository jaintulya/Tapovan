import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    const newMessage = {
      id: 'msg_' + Date.now(),
      name,
      email,
      phone,
      department: department || 'General',
      message,
      submittedAt: new Date().toISOString()
    };

    // Save to local JSON store in data/contact-messages.json
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, 'contact-messages.json');
      let existing: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existing = JSON.parse(fileContent || '[]');
      }
      existing.unshift(newMessage);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    } catch (fsErr) {
      console.warn('Could not write to local JSON file:', fsErr);
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
