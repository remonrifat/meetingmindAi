
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in border border-purple-200 dark:border-purple-700">
          <Zap className="w-4 h-4 mr-2 animate-pulse" />
          Next-Generation AI Meeting Intelligence
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent mb-8 animate-fade-in leading-tight">
          Transform Meetings Into
          <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Strategic Insights
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Leverage advanced AI to automatically transcribe, summarize, and extract actionable insights from your meetings. 
          Turn conversations into competitive advantages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl text-white font-semibold"
            >
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">
            <Play className="w-6 h-6 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        {/* Enhanced Demo Preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300">MeetingMind AI Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Live Analysis</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    Meeting Intelligence
                  </h3>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 text-left border border-gray-200 dark:border-gray-600">
                    <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      <div className="flex items-center"><span className="font-semibold text-purple-600">📊 Topics:</span> <span className="ml-2">Q4 Strategy, Budget Review, Team Expansion</span></div>
                      <div className="flex items-center"><span className="font-semibold text-blue-600">💡 Decisions:</span> <span className="ml-2">Approved $2M marketing budget increase</span></div>
                      <div className="flex items-center"><span className="font-semibold text-green-600">⏰ Duration:</span> <span className="ml-2">45 minutes • 8 participants</span></div>
                      <div className="flex items-center"><span className="font-semibold text-orange-600">🎯 Sentiment:</span> <span className="ml-2">Positive (85% confidence)</span></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                    Action Items
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border-l-4 border-purple-500 p-4 rounded-r-lg text-sm">
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Sarah Johnson</div>
                      <div className="text-gray-600 dark:text-gray-300">Prepare Q4 marketing strategy presentation</div>
                      <div className="text-xs text-purple-500 mt-1">Due: Friday, 3 days remaining</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-l-4 border-green-500 p-4 rounded-r-lg text-sm">
                      <div className="font-semibold text-green-700 dark:text-green-300">Mike Chen</div>
                      <div className="text-gray-600 dark:text-gray-300">Review and finalize budget allocations</div>
                      <div className="text-xs text-green-500 mt-1">Due: Wednesday, 1 day remaining</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 border-l-4 border-orange-500 p-4 rounded-r-lg text-sm">
                      <div className="font-semibold text-orange-700 dark:text-orange-300">Team</div>
                      <div className="text-gray-600 dark:text-gray-300">Schedule Q1 planning follow-up session</div>
                      <div className="text-xs text-orange-500 mt-1">Due: Next week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
