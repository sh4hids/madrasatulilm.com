import React from 'react';
import styled from 'styled-components';
import { space, layout, flexbox, color } from 'styled-system';

const VideoContainer = styled.div`
  text-align: center;
  ${space};
  ${layout};
  ${flexbox};
  ${color};
`;

const Video = ({
  videoSrcURL,
  videoTitle,
  frameHeight,
  frameWidth,
  ...props
}) => (
  <VideoContainer {...props}>
    <iframe
      height={frameHeight}
      width={frameWidth}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoContainer>
);

export default Video;
