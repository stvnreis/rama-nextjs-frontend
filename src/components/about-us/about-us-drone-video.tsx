import YouTube from 'react-youtube';

export const AboutUsDroneVideo = () => {
  const height = innerHeight > 500 ? '350' : '220'
  const width = innerWidth > 800 ? '500' : '400'
  return (
    <YouTube
      videoId="wVtuddc4_Cw"
      opts={{ playerVars: { autoPlay: 0 }, height, width }}
      onReady={_onReady}
    />
  );
};

function _onReady(event: any) {
  event.target.pauseVideo();
}
