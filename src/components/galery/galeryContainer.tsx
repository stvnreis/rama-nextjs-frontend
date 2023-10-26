import Image from 'next/image';

import { DriveFile } from '../../types/drive-files';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Data = {
  files: DriveFile[];
};

export const GaleryContainer = () => {
  const { data } = useQuery<Data>({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await axios.get('/api/drive-images');

      return data;
    },
  });

  return (
    <div className="flex gap-5 h-96 w-full">
      {data?.files.map((file, index) => {
        return (
          <Image
            src={`https://drive.google.com/uc?export=view&id=${file.id}`}
            alt={file.name}
            loading="eager"
            sizes="100vw"
            key={index}
          />
        );
      })}
    </div>
  );
};
