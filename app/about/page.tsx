import React from 'react';
import PageCanvas from '../components/page-canvas';
import DetailedAboutView from './page'; // Imports from your safe directory

export default function AboutRoute() {
  return (
    <PageCanvas
      activeRoute="about"
      gradientStyle="linear-gradient(135deg, #7A9A86 0%, #121714 100%)"
      bgImageUrl=""
    >
      <p>about</p>
      {/* <DetailedAboutView /> */}
    </PageCanvas>
  );
} 