import React from 'react';
import { Hero } from './Hero';
import { ProcessSteps } from './ProcessSteps';
import { ProductCards } from './ProductCards';
import { TestimonialCarousel } from './TestimonialCarousel';
import { BlogPreview } from './BlogPreview';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Hero onNavigate={onNavigate} />
      <ProcessSteps />
      <ProductCards />
      <TestimonialCarousel />
      <BlogPreview />
    </div>
  );
}
