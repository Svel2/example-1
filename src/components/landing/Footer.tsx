import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#5B63A8] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#5B63A8] font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">PayView</span>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed max-w-xs">
              We are giving our students the best and suitable services for building their bright future.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer transition-colors">
                 <Facebook size={18} />
              </div>
              <div className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer transition-colors">
                 <Twitter size={18} />
              </div>
              <div className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer transition-colors">
                 <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-indigo-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-indigo-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24h Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quick Chat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-indigo-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our office</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-indigo-300 text-xs">
            Copyright © 2023. All Right Reserved by PayView Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
