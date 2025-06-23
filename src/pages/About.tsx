
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Meetings Analyzed' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      description: 'Former AI researcher at Google with 10+ years in machine learning.',
      image: '/placeholder.svg'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO',
      description: 'Ex-Microsoft engineer specializing in natural language processing.',
      image: '/placeholder.svg'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Product',
      description: 'Product leader with experience at Zoom and Slack.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-4">
            About SmartMeet
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make meetings more productive and actionable through the power of AI. 
            Founded in 2023, SmartMeet transforms how teams capture, understand, and act on meeting insights.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To eliminate the friction between meetings and action. We believe every meeting should result 
              in clear outcomes, assigned tasks, and forward momentum. Our AI-powered platform ensures 
              nothing important gets lost in translation.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <Globe className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A world where teams spend less time in meetings and more time executing. We envision 
              intelligent systems that understand context, extract meaning, and accelerate decision-making 
              across organizations of all sizes.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate experts in AI, product development, and customer success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
