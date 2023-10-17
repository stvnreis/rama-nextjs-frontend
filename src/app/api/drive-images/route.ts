import { NextRequest } from 'next/server';

import { google } from 'googleapis';

export async function GET(req: NextRequest) {
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

  return new Response(JSON.stringify({ files: response.data.files }));
}
