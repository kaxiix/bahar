import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

type SheetForm = {
  name: string;
  itemNames: string;
  totalPrice: string;
  company: string;
  add: string;
  city: string;
  phone: string;
  email: string;
  note: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: SheetForm = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:I1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            body.name,
            body.itemNames,
            body.totalPrice,
            body.company,
            body.city,
            body.add,
            body.phone,
            body.email,
            body.note
          ]
        ]
      }
    });

    return NextResponse.json({ data: response.data }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
