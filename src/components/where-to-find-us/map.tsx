import React, { useEffect } from 'react';

import { Loader } from '@googlemaps/js-api-loader';

export const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      console.log('map init');

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
        region: 'BR',
        language: 'pt-br',
      });

      const { Map } = await loader.importLibrary('maps');

      const { Marker } = (await loader.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: -21.28246980616398,
        lng: -50.32672004996667,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 18,
        mapId: 'RAMABUSINESS_NEXTJS_MAPID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      new Marker({
        map,
        position,
      });
    };

    initMap();
  }, []);

  return <div className="h-full w-full" ref={mapRef}></div>;
};
