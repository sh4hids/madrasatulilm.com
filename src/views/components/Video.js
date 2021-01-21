import React from 'react';
import styled from 'styled-components';
import { space, layout, flexbox, color } from 'styled-system';

const VideoContainer = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  ${space};
  ${layout};
  ${flexbox};
  ${color};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoContainer {...props}>
    <iframe
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
