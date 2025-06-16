'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
  Cpu
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const FeatureIcon = ({ icon: Icon, gradient }: { icon: any, gradient: string }) => (
  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
    <Icon className="w-8 h-8 text-white" />
  </div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    
    {/* Floating geometric shapes */}
    <div className="absolute top-20 left-20 w-4 h-4 bg-night-shadz/20 rotate-45 floating-animation" />
    <div className="absolute top-40 right-32 w-6 h-6 bg-puce/20 rounded-full floating-animation-delayed" />
    <div className="absolute bottom-32 left-40 w-5 h-5 bg-contessa/20 floating-animation" style={{ animationDelay: '2s' }} />
  </div>
);

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast performance with our optimized infrastructure, global CDN, and cutting-edge technology stack.',
    benefits: ['99.9% uptime guarantee', 'Global CDN network', 'Auto-scaling capabilities', 'Edge computing'],
    gradient: 'from-night-shadz to-contessa',
    accent: 'night-shadz',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection systems.',
    benefits: ['SOC 2 Type II certified', 'GDPR compliant', '256-bit encryption', 'Zero-trust architecture'],
    gradient: 'from-ferra to-puce',
    accent: 'ferra',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Automation',
    description: 'Leverage artificial intelligence to automate workflows, predict outcomes, and optimize business processes intelligently.',
    benefits: ['Machine learning insights', 'Predictive analytics', 'Smart workflows', 'Automated reporting'],
    gradient: 'from-contessa to-night-shadz',
    accent: 'contessa',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Advanced collaboration tools that keep distributed teams connected, productive, and aligned across time zones.',
    benefits: ['Real-time collaboration', 'Video conferencing', 'File sharing & sync', 'Team workspaces'],
    gradient: 'from-puce to-ferra',
    accent: 'puce',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain deep insights with powerful analytics, custom dashboards, and interactive data visualization tools.',
    benefits: ['Custom dashboards', 'Real-time reporting', 'Data export options', 'Predictive modeling'],
    gradient: 'from-scorpion to-gunsmoke',
    accent: 'scorpion',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Scale your business globally with our worldwide infrastructure, multi-region deployment, and localization support.',
    benefits: ['Multi-region support', 'Global load balancing', '150+ countries', 'Localization tools'],
    gradient: 'from-cape-cod to-corduroy',
    accent: 'cape-cod',
  },
];

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
      <AnimatedBackground />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-night-shadz border-night-shadz/20 bg-night-shadz/5 hover:bg-night-shadz/10 transition-colors">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Everything you need to
            <span className="gradient-text block">succeed and grow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to transform your business operations, drive sustainable growth, 
            and keep you ahead of the competition in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`feature-card group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-white ${
                visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`} />
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
              
              <CardHeader className="relative z-10 pb-4">
                <FeatureIcon icon={feature.icon} gradient={feature.gradient} />
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-night-shadz transition-colors duration-300 mb-3">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li 
                      key={benefitIndex} 
                      className={`flex items-center text-sm text-gray-700 transform transition-all duration-300 ${
                        hoveredCard === index ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${benefitIndex * 50}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-night-shadz font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} 
                   style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }} />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to experience these features?</p>
          <Badge className="bg-gradient-to-r from-night-shadz to-contessa text-white px-6 py-2 text-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
            <TrendingUp className="w-4 h-4 mr-2" />
            Start your free trial today
          </Badge>
        </div>
      </div>
    </section>
  );
}