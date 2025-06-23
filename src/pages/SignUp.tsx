
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Brain, Eye, EyeOff, Mail, Lock, User, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:bg-dark-gradient flex">
      {/* Left side - Sign up form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-8 group">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Noten AI
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Create your account
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First name</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="pl-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last name</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="pl-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email address</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="pl-12 pr-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
              />
              <Label htmlFor="terms" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I agree to the{' '}
                <Link to="/terms" className="text-purple-600 hover:text-purple-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-purple-600 hover:text-purple-500">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Create account
            </Button>
          </form>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link to="/signin" className="text-purple-600 hover:text-purple-500 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Benefits section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 dark:bg-gray-950 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="relative z-10">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center mb-8 transform rotate-12">
            <Brain className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Start your journey today
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-300">
              <Check className="w-6 h-6 text-green-400 mr-3" />
              <span>AI-powered meeting transcription</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Check className="w-6 h-6 text-green-400 mr-3" />
              <span>Automatic action item extraction</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Check className="w-6 h-6 text-green-400 mr-3" />
              <span>Real-time sentiment analysis</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Check className="w-6 h-6 text-green-400 mr-3" />
              <span>Strategic insights dashboard</span>
            </div>
          </div>
          <p className="text-gray-400">
            More than 10k+ professionals joined us, it's your turn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
