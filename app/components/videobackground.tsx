"use client"

import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust this as needed */
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  /* Style your content here */
  padding: 20px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const VideoBackgroundComponent: React.FC = () => {
  return (
    <VideoContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/public/gradientbg.mp4" type="video/mp4" />
      </VideoBackground>
    </VideoContainer>
  );
};

export default VideoBackgroundComponent;
