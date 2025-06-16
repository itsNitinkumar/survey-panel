import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  Sparkles,
  Award,
  Shield,
  Zap
} from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API Documentation', href: '#api' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Security', href: '#security' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Blog', href: '#blog' },
    { name: 'Newsroom', href: '#news' },
  ],
  support: [
    { name: 'Help Center', href: '#help' },
    { name: 'Contact Support', href: '#contact' },
    { name: 'System Status', href: '#status' },
    { name: 'Community Forum', href: '#community' },
    { name: 'Training', href: '#training' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security Policy', href: '#security-policy' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#twitter', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Github, href: '#github', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn', color: 'hover:text-blue-500' },
];

const certifications = [
  { icon: Shield, label: 'SOC 2 Certified' },
  { icon: Award, label: 'ISO 27001' },
  { icon: Zap, label: '99.9% Uptime' },
];

export function Footer() {
  return (
    <footer className="bg-mine-shaft text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="footerGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-mine-shaft via-mine-shaft/95 to-mine-shaft/90" />
      
      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Enhanced brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-night-shadz to-contessa rounded-xl mr-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Elevate</span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Transform your business with innovative solutions that drive growth, enhance productivity, 
                and deliver exceptional results in today's competitive landscape.
              </p>
              
              {/* Certifications */}
              <div className="space-y-4 mb-8">
                <h4 className="text-white font-semibold">Trusted & Certified</h4>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 bg-gray-800/50">
                      <cert.icon className="w-3 h-3 mr-2" />
                      {cert.label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Enhanced social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-r from-night-shadz to-contessa rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product links */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Product</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Enhanced bottom section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <span className="font-medium">© 2025 Elevate. All rights reserved.</span>
              <div className="flex items-center space-x-6">
                <Badge variant="outline" className="border-gray-600 text-gray-400 bg-gray-800/50">
                  <MapPin className="w-3 h-3 mr-2" />
                  San Francisco, CA
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-400 bg-gray-800/50">
                  <Shield className="w-3 h-3 mr-2" />
                  Enterprise Ready
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 mr-2" />
                hello@elevate.com
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-500 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" /> for businesses that want to grow and thrive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}