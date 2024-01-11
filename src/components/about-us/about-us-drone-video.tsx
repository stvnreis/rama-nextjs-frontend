import YouTube from 'react-youtube';

export const AboutUsDroneVideo = () => {
  return (
    <YouTube
      videoId="wVtuddc4_Cw"
      opts={{ playerVars: { autoPlay: 0 } }}
      onReady={_onReady}
    />
  );
};

function _onReady(event: any) {
  event.target.pauseVideo();
}
