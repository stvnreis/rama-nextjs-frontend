import { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

const CLIENT_ID =
  '336626246670-2ffvr4toshocchqu4hse9fh4f9e1lad4.apps.googleusercontent.com '
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
  )

  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
    params: {
      q: `mimeType = 'image/jpeg'`,
    },
  })

  const response = await drive.files.list()

  res.status(200).json({ files: response.data.files as DriveFile[] })
}
