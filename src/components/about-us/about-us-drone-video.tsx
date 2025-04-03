import YouTube from 'react-youtube';

export const AboutUsDroneVideo = () => {
  return (
    <YouTube
      videoId="wVtuddc4_Cw"
      opts={{
        playerVars: { autoPlay: 0 },
      }}
      onReady={_onReady}
      className="flex items-center justify-center w-full"
    />
  );
};

function _onReady(event: any) {
  event.target.pauseVideo();
}
