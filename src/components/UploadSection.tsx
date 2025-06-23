
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileAudio, Bot, CheckCircle } from 'lucide-react';

const UploadSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file upload logic here
    simulateUpload();
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
    }, 3000);
  };

  return (
    <section id="upload" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Try SmartMeet Now
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upload a meeting recording and see the magic happen in real-time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              isDragOver 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' 
                : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {!isUploading && !uploadComplete && (
              <>
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Drop your meeting file here
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Supports MP3, MP4, WAV, and more. Maximum file size: 2GB
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={simulateUpload}
                >
                  Choose File
                </Button>
              </>
            )}

            {isUploading && (
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <FileAudio className="w-8 h-8 text-blue-600 animate-pulse" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <Bot className="w-8 h-8 text-purple-600 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Processing your meeting...
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI is transcribing and analyzing your content
                </p>
              </div>
            )}

            {uploadComplete && (
              <div className="space-y-6">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Analysis Complete!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your meeting summary is ready. Here's what we found:
                </p>
                
                {/* Sample Results */}
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📋 Key Topics Discussed:</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Product roadmap, Q4 goals, team restructuring</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">✅ Action Items:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                        <li>• Sarah: Finalize product specs by Friday</li>
                        <li>• Mike: Schedule team one-on-ones</li>
                        <li>• Team: Review Q4 budget proposals</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎯 Decisions Made:</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Approved budget increase for marketing team</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => {setUploadComplete(false); setIsUploading(false);}}
                  variant="outline"
                  className="mr-4"
                >
                  Try Another File
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Full Access
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
