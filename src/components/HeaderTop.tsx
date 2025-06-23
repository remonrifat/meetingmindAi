
import { X, Bell, Gift, Info } from 'lucide-react';
import { useState } from 'react';

const HeaderTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 text-center relative">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Bell className="w-4 h-4" />
        <span className="text-sm font-medium">
          🎉 Limited Time: Get 50% off Pro Plan + Free AI Analysis Credits!
        </span>
        <Gift className="w-4 h-4" />
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HeaderTop;
