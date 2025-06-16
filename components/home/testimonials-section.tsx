'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, TrendingUp, Award, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AnimatedQuote = ({ className }: { className?: string }) => (
  <div className={`absolute ${className} opacity-10`}>
    <svg width="120" height="120" viewBox="0 0 120 120" className="text-white">
      <path
        d="M30 45c0-16.5 13.5-30 30-30s30 13.5 30 30c0 16.5-13.5 30-30 30-5 0-10-1-14-3l-10 15-6-4 10-15c-6-7-10-15-10-23z"
        fill="currentColor"
        className="animate-pulse"
      />
    </svg>
  </div>
);

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    company: 'TechVision Inc.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'This platform completely transformed our entire workflow and business operations. We experienced a remarkable 300% increase in productivity within just the first month. The automation features are absolutely game-changing for any modern business.',
    rating: 5,
    highlight: '300% productivity boost',
    metric: '+300%',
    metricLabel: 'Productivity',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    company: 'InnovateLab Solutions',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The security features are absolutely outstanding and exceed industry standards. We can now confidently scale globally knowing our sensitive data is protected by enterprise-grade security measures and compliance frameworks.',
    rating: 5,
    highlight: 'Enterprise-grade security',
    metric: '99.9%',
    metricLabel: 'Security Score',
  },
  {
    name: 'Emily Watson',
    role: 'Operations Director',
    company: 'GlobalTech Dynamics',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The analytics dashboard provides insights we never had access to before. Data-driven decision making has become effortless and intuitive. This platform is absolutely revolutionary for business intelligence.',
    rating: 5,
    highlight: 'Data-driven insights',
    metric: '10x',
    metricLabel: 'Better Insights',
  },
  {
    name: 'David Kim',
    role: 'Founder & CEO',
    company: 'StartUp Velocity',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'As a rapidly growing startup, we needed a solution that could scale seamlessly with our expansion. This platform grew with us effortlessly as we expanded from just 5 employees to over 500 team members.',
    rating: 5,
    highlight: 'Seamless scaling',
    metric: '100x',
    metricLabel: 'Team Growth',
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Engineering',
    company: 'CloudFirst Systems',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The integration capabilities are phenomenal and exceeded all our expectations. We successfully connected all our essential tools and systems in minutes, not months. The platform just works beautifully and intuitively.',
    rating: 5,
    highlight: 'Seamless integrations',
    metric: '50+',
    metricLabel: 'Integrations',
  },
  {
    name: 'James Wilson',
    role: 'Head of Digital Transformation',
    company: 'Enterprise Solutions Co.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Customer support is truly exceptional and sets the gold standard. With 24/7 availability and rapid problem resolution, they consistently deliver outstanding service. This is exactly how customer support should be done.',
    rating: 5,
    highlight: '24/7 exceptional support',
    metric: '<2min',
    metricLabel: 'Response Time',
  },
];

export function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleTestimonials(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
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
    <section className="section-padding bg-gradient-to-br from-mine-shaft via-cape-cod to-scorpion relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedQuote className="top-20 left-10 floating-animation" />
      <AnimatedQuote className="bottom-20 right-10 floating-animation-delayed" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(172, 60, 100, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(204, 132, 157, 0.1) 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 text-white border-white/20 bg-white/10 hover:bg-white/20 transition-colors">
            <Heart className="w-4 h-4 mr-2 text-red-400" />
            Customer Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
            Trusted by industry
            <span className="block bg-gradient-to-r from-puce via-contessa to-night-shadz bg-clip-text text-transparent">
              leaders worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their businesses and achieved 
            remarkable results with our innovative platform and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`testimonial-card relative overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
                visibleTestimonials.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-puce/10 via-transparent to-contessa/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                {/* Quote icon with animation */}
                <div className="relative mb-6">
                  <Quote className={`w-10 h-10 text-puce/60 transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`} />
                </div>
                
                {/* Rating with enhanced styling */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 text-yellow-400 fill-current transition-all duration-300 ${
                        hoveredCard === index ? 'animate-pulse' : ''
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Content with better typography */}
                <p className="text-white/90 mb-8 leading-relaxed text-base">
                  "{testimonial.content}"
                </p>

                {/* Metric highlight */}
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-gradient-to-r from-puce to-contessa text-white border-0 px-4 py-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {testimonial.highlight}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{testimonial.metric}</div>
                    <div className="text-xs text-gray-300">{testimonial.metricLabel}</div>
                  </div>
                </div>

                {/* Author with enhanced layout */}
                <div className="flex items-center">
                  <Avatar className="w-14 h-14 mr-4 ring-2 ring-white/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-night-shadz to-puce text-white text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-300 text-sm font-medium">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-puce/20 to-transparent" 
                   style={{ clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)' }} />
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-3">
              <Award className="w-5 h-5 mr-2" />
              4.9/5 Average Rating
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-3">
              <Star className="w-5 h-5 mr-2" />
              10,000+ Happy Customers
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-3">
              <TrendingUp className="w-5 h-5 mr-2" />
              98% Customer Satisfaction
            </Badge>
          </div>
          <p className="text-gray-400 text-sm">
            Join the growing community of successful businesses transforming with our platform
          </p>
        </div>
      </div>
    </section>
  );
}