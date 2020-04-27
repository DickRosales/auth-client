import React, { FunctionComponent, useRef } from 'react';
import styled from 'styled-components';
import useUserMedia from '../../hooks/useUserMedia';

let VideoPage: FunctionComponent = () => {
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const constraints = {
    audio: true,
    video: {
      facingMode: 'user',
      width: {
        min: 1280
      }, 
      height: {
        min: 720
      }
    },
  };

  let stream = useUserMedia(constraints);
  if (videoEl.current) {
    let video = videoEl.current;
    video.srcObject = stream;
    video.onloadedmetadata = (error) => {
      if (error) console.log(error);

      video.play();
    };
  }

  let handleStop = () => {
    stream.getTracks().forEach((track: any) => {
      track.stop();
    });
  }

  let handlePlay = () => {
    stream.getTracks().forEach((track: any) => {
      // track.play();
    });
  }

  return (
    <AppVideo>
      <VideoWrapper>
        <VideoStream ref={videoEl} />

        <a onClick={handlePlay}>Play</a>
        <a onClick={handleStop}>Stop</a>
      </VideoWrapper>
    </AppVideo>
  );
}

export default VideoPage;

const AppVideo = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100vh;
`;
const VideoWrapper = styled.div`
  width: 550px;
  min-width: 33%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutral['900']};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
`;
const VideoStream = styled.video`
  width: 400px;
  height: 350px;
  border: 1px solid white;
`;
