// 'use server'
// import { google } from 'googleapis'

// export default async function ImagesGalery() {
//   const oauth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URI,
//   )

//   oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
//   })

//   const drive = google.drive({
//     version: 'v3',
//     auth: oauth2Client,
//     params: {
//       q: `'${process.env.PARENT_FOLDER_ID}' in parents`,
//     },
//   })

//   const response = await drive.files.list()
//   const data: Data = response.data as Data

//   // const images = data.files?.map((item, index) => (
//   //   <Image
//   //     className="w-full h-full"
//   //     src={`https://drive.google.com/uc?export=view&id=${item.id}`}
//   //     alt={item.name!}
//   //     loading="lazy"
//   //     sizes="100vw"
//   //     fill
//   //     style={{
//   //       objectFit: 'cover',
//   //     }}
//   //     key={index}
//   //   />
//   // ))

//   return {
//     images: data.files.map(
//       (image) => `https://drive.google.com/uc?export=view&id=${image.id}`,
//     ),
//   }
// }
