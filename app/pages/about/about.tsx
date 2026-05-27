import React from 'react';

export default function DetailedAboutView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 pb-12 text-white">
      <div className="lg:col-span-6 flex flex-col justify-end">
        <p className="text-lg font-medium text-white/80 mb-2">Brand Architect</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">About</h1>
      </div>
      <div className="lg:col-span-6 flex flex-col justify-end max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold">The Person Behind the Work</h2>
        <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
          Rooted in engineering precision, driven by creative design. I combine structural logic with beautiful UI frameworks.
        </p>
      </div>
    </div>
  );
}