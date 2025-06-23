
import { Bot, Clock, Users, FileText, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Transcription",
      description: "Advanced speech recognition that handles multiple speakers, accents, and background noise with 99% accuracy."
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "Get concise, intelligent summaries that capture key decisions, important discussions, and outcomes."
    },
    {
      icon: Zap,
      title: "Action Item Extraction",
      description: "Automatically identify and assign action items with deadlines and responsible parties."
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Upload your meeting and get results in under 60 seconds, no matter the file size."
    },
    {
      icon: Users,
      title: "Speaker Identification",
      description: "Distinguish between different speakers and attribute quotes and decisions accurately."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your meeting data is encrypted and secure with enterprise-grade privacy protection."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smarter Meetings
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to transform your meeting recordings into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover-scale bg-white dark:bg-gray-800"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
