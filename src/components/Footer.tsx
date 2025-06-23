import {
  Brain,
  Twitter,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-950 dark:from-black dark:via-purple-950 dark:to-indigo-950 text-white py-16 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Noten AI
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing how teams capture, analyze, and act on meeting
              insights with cutting-edge AI technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-purple-400" />
                <span className="text-sm">contact@Noten.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-purple-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <Zap className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    💰
                  </span>
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <Globe className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    🔌
                  </span>
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    📱
                  </span>
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <Users className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <Mail className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    💼
                  </span>
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    📰
                  </span>
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    🏆
                  </span>
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    📚
                  </span>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    🎓
                  </span>
                  Learning Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    💬
                  </span>
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <Shield className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center group"
                >
                  <span className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300">
                    📄
                  </span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                &copy; 2025 Noten AI. All rights reserved by Noten AI
              </p>
              <p className="text-gray-500 text-xl">
                Developed by <Link to="https://remonrifat.vercel.app/">Remon Rifat</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
