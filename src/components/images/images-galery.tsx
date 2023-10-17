import Image from 'next/image'

export default async function ImagesGalery() {
  const response = await fetch('http://localhost:3000/api/drive-images', {
    method: 'GET',
  })

  const data: Data = await response.json()
  return (
    <Image
      className="w-full h-full"
      src={`https://https://drive.google.com/uc?export=view&id=${data.files[0].id}`}
      alt={data.files[0].name}
      loading="lazy"
      // radius="none"
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
      key={3}
    />
  )
}
