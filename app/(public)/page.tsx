import { HeroSection } from '@/components/home/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      
    </main>
  );
}