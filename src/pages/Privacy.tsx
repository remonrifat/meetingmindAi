
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-950">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-8">
            
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Protection</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement industry-standard security measures to protect your personal information and meeting data.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>End-to-end encryption for all meeting recordings</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>GDPR and CCPA compliant data handling</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We only collect information necessary to provide our AI meeting analysis services:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Meeting recordings and transcripts (with your consent)</li>
                <li>Account information (name, email, organization)</li>
                <li>Usage analytics to improve our service</li>
                <li>Technical data for system performance</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Data</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your data is used exclusively for providing and improving our AI meeting analysis services:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Generate meeting summaries and action items</li>
                <li>Improve AI accuracy and performance</li>
                <li>Provide customer support</li>
                <li>Send service updates and security notifications</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Sharing</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We never sell your personal data. We only share information in these limited circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>With trusted service providers under strict agreements</li>
                <li>To protect our users and prevent fraud</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have complete control over your data:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Access and download your data at any time</li>
                <li>Request corrections to inaccurate information</li>
                <li>Delete your account and all associated data</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="text-purple-600 dark:text-purple-300 font-medium">
                  Email: privacy@Noten.ai
                </p>
                <p className="text-purple-600 dark:text-purple-300">
                  Address: 123 Privacy Street, San Francisco, CA 94105
                </p>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
