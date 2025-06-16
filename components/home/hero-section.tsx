'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: any, className: string, delay?: number }) => (
  <div 
    className={`absolute ${className} floating-animation opacity-20`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="w-8 h-8 text-white" />
  </div>
);

const AnimatedSVG = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ac3c64" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#cc849d" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#c46c84" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path 
        d="M200,300 Q400,100 600,300 T1000,300 L1000,0 L0,0 Z" 
        fill="url(#gradient1)"
        className="animate-pulse"
      />
      <path 
        d="M0,700 Q250,500 500,700 T1000,700 L1000,1000 L0,1000 Z" 
        fill="url(#gradient1)"
        className="animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </svg>
  </div>
);

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-shadz via-puce to-contessa opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-mine-shaft/20 to-transparent" />
      
      {/* Animated SVG background */}
      <AnimatedSVG />
      
      {/* Floating icons */}
      <FloatingIcon icon={Sparkles} className="top-20 left-10" delay={0} />
      <FloatingIcon icon={TrendingUp} className="top-40 right-20" delay={1} />
      <FloatingIcon icon={Zap} className="bottom-40 left-20" delay={2} />
      <FloatingIcon icon={Star} className="bottom-20 right-10" delay={3} />
      
      {/* Interactive cursor effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Morphing background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-puce/30 to-contessa/30 morphing-blob blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-night-shadz/20 to-ferra/20 morphing-blob blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Enhanced badge with glow effect */}
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300 pulse-glow">
            <Star className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
            Trusted by 10,000+ companies worldwide
          </Badge>

          {/* Main heading with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block animate-slide-in-left">Transform Your</span>
              <span className="block bg-gradient-to-r from-white via-puce/80 to-white bg-clip-text text-transparent animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                Business Today
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-scale-in" style={{ animationDelay: '0.6s' }}>
              Discover innovative solutions that drive growth, enhance productivity, and transform your business for the digital age.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-night-shadz hover:bg-white/90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 shadow-2xl hover:shadow-white/20 card-hover-effect"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300 hover:border-white/50"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats with animations */}
          <div className="pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Users, label: '10,000+', description: 'Active Users', color: 'from-puce to-contessa' },
                { icon: Zap, label: '99.9%', description: 'Uptime', color: 'from-night-shadz to-puce' },
                { icon: Shield, label: '24/7', description: 'Support', color: 'from-contessa to-night-shadz' },
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm border-white/20 card-hover-effect ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 200 + 800}ms` }}
                >
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 hover:opacity-10 transition-opacity duration-300`} />
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-white/80">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Floating elements indicator */}
          <div className="pt-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto">
              <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}