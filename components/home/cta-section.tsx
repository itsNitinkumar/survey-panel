'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Users, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';

const benefits = [
  { icon: Gift, text: 'Free 14-day trial' },
  { icon: Shield, text: 'No credit card required' },
  { icon: Zap, text: 'Setup in under 5 minutes' },
  { icon: Users, text: '24/7 customer support' },
];

const FloatingElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <div 
    className={`absolute ${className} floating-animation opacity-20`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
      <defs>
        <radialGradient id="ctaGradient1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(172, 60, 100, 0.1)" />
          <stop offset="100%" stopColor="rgba(172, 60, 100, 0)" />
        </radialGradient>
        <radialGradient id="ctaGradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(204, 132, 157, 0.1)" />
          <stop offset="100%" stopColor="rgba(204, 132, 157, 0)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="150" fill="url(#ctaGradient1)" className="animate-pulse" />
      <circle cx="800" cy="800" r="200" fill="url(#ctaGradient2)" className="animate-pulse" style={{ animationDelay: '1s' }} />
    </svg>
  </div>
);

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element?.getBoundingClientRect();
      if (rect) {
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    element?.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (element) {
        observer.unobserve(element);
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="cta-section"
      className="section-padding relative overflow-hidden"
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-night-shadz via-contessa to-puce" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Interactive cursor effect */}
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />
      
      {/* Floating elements */}
      <FloatingElement className="top-20 left-20" delay={0}>
        <Sparkles className="w-8 h-8 text-white" />
      </FloatingElement>
      <FloatingElement className="top-32 right-32" delay={1}>
        <Zap className="w-6 h-6 text-white" />
      </FloatingElement>
      <FloatingElement className="bottom-32 left-40" delay={2}>
        <Shield className="w-7 h-7 text-white" />
      </FloatingElement>

      {/* Morphing background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 morphing-blob blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 morphing-blob blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 px-6 py-2">
            <Gift className="w-4 h-4 mr-2" />
            Limited Time Offer - Start Free Today
          </Badge>
          
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              <span className="block animate-slide-in-left">Start your transformation</span>
              <span className="block bg-gradient-to-r from-white via-puce/80 to-white bg-clip-text text-transparent animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                journey today
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of companies that have already transformed their business with our platform. 
              Start your free trial and see results in minutes, not months.
            </p>
          </div>

          {/* Enhanced benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center mb-3">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-center">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-night-shadz hover:bg-white/90 transition-all duration-300 transform hover:scale-105 text-xl px-12 py-8 shadow-2xl hover:shadow-white/20 font-bold"
            >
              <Sparkles className="mr-3 w-6 h-6" />
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-xl px-12 py-8 transition-all duration-300 hover:border-white/50 hover:scale-105"
            >
              <Users className="mr-3 w-6 h-6" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>10,000+ happy customers</span>
              </div>
            </div>
            
            <p className="text-white/70 text-lg">
              Trusted by industry leaders • 4.9/5 star rating • 98% customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}