
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bot, Clock, Users, FileText, Zap, Shield, Calendar, Mail, Database, Smartphone } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Transcription",
      description: "Advanced speech recognition that handles multiple speakers, accents, and background noise with 99% accuracy.",
      details: [
        "Support for 50+ languages",
        "Real-time transcription",
        "Speaker identification",
        "Noise filtering technology"
      ]
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "Get concise, intelligent summaries that capture key decisions, important discussions, and outcomes.",
      details: [
        "Customizable summary templates",
        "Key topic extraction",
        "Decision tracking",
        "Executive briefings"
      ]
    },
    {
      icon: Zap,
      title: "Action Item Extraction",
      description: "Automatically identify and assign action items with deadlines and responsible parties.",
      details: [
        "Automatic task assignment",
        "Due date detection",
        "Priority classification",
        "Follow-up reminders"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: Clock, title: "Real-time Processing", description: "Get results in under 60 seconds" },
    { icon: Users, title: "Team Collaboration", description: "Share and collaborate on meeting insights" },
    { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant with end-to-end encryption" },
    { icon: Calendar, title: "Calendar Integration", description: "Sync with Google Calendar, Outlook, and more" },
    { icon: Mail, title: "Email Summaries", description: "Automatic email reports to stakeholders" },
    { icon: Database, title: "Data Analytics", description: "Meeting insights and productivity metrics" },
    { icon: Smartphone, title: "Mobile Access", description: "Access summaries on any device" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to transform your meetings into actionable insights
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-20 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Additional Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
