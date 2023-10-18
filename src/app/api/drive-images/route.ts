import { NextRequest, NextResponse } from 'next/server';

import { limiter } from '../config/limiter';

import { google } from 'googleapis';

export async function GET(req: NextRequest) {
  const origin = req.headers.get('origin');

  const remaining = await limiter.removeTokens(1);
  if (remaining < 0)
    return new Response(null, {
      status: 429,
      statusText: 'too may request',
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'text/plain',
      },
    });

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
    params: {
      q: `'${process.env.PARENT_FOLDER_ID}' in parents`,
    },
  });

  const response = await drive.files.list();

  return new NextResponse(JSON.stringify({ files: response.data.files }), {
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json',
    },
  });
}
