import React from 'react';
import PageCanvas from '../components/page-canvas';
import ProjectsView from '@/app/pages/projects/projects'; 

export default function ProjectsRoute() {
  return (
    <PageCanvas
      activeRoute="projects"
      gradientStyle="linear-gradient(135deg, #2c2c2e 0%, #0a0a0a 100%)"
    >
      <ProjectsView />
    </PageCanvas>
  );
}