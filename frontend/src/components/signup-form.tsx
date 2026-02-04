import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
  setPage,
  className,
  ...props
}: { setPage: (value: boolean) => void } & React.ComponentProps<"div">) {
  return (
    <div className={cn("min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden", className)} {...props}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-linear-to-br from-[#ff006e]/20 to-[#fb5607]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-[#8338ec]/20 to-[#3a0ca3]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-linear-to-br from-[#00f5d4]/10 to-[#00d9c0]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '3s' }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-24 w-3 h-3 bg-[#ff006e] rotate-45 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0s' }} />
        <div className="absolute top-48 right-40 w-2 h-2 bg-[#8338ec] rounded-full animate-bounce" style={{ animationDuration: '4.1s', animationDelay: '1.2s' }} />
        <div className="absolute bottom-40 left-52 w-2.5 h-2.5 bg-[#00f5d4] rotate-45 animate-bounce" style={{ animationDuration: '3.7s', animationDelay: '0.8s' }} />
        <div className="absolute bottom-28 right-28 w-2 h-2 bg-[#fb5607] rounded-full animate-bounce" style={{ animationDuration: '4.3s', animationDelay: '2s' }} />
        <div className="absolute top-72 left-72 w-1.5 h-1.5 bg-[#ffbe0b] rotate-45 animate-bounce" style={{ animationDuration: '3.9s', animationDelay: '1.5s' }} />
        <div className="absolute top-96 right-64 w-2 h-2 bg-[#3a0ca3] rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2.5s' }} />
      </div>

      <Card className="w-full max-w-6xl border-0 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm bg-black/40 relative z-10">
        <CardContent className="grid p-0 md:grid-cols-5 min-h-screen md:min-h-187.5">
          {/* Left Sidebar - Decorative Panel */}
          <div className="hidden md:flex flex-col bg-linear-to-br from-[#ff006e] via-[#8338ec] to-[#3a0ca3] p-8 relative overflow-hidden col-span-2">
            {/* Animated Dotted Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Floating Gradient Shapes */}
            <div className="absolute top-16 right-16 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute bottom-24 left-16 w-40 h-40 bg-white/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Logo and Brand */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#ff006e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white text-2xl font-bold tracking-tight">Matalino</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Transform Your
                  <br />
                  Study Experience
                </h2>
                <p className="text-pink-100 text-base mb-8">
                  Join our community of learners and unlock the power of AI-driven education.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">Smart Flashcards</h3>
                      <p className="text-pink-100 text-sm">AI generates perfect study materials in seconds</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">Spaced Repetition</h3>
                      <p className="text-pink-100 text-sm">Scientifically proven learning techniques</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">Personalized Learning</h3>
                      <p className="text-pink-100 text-sm">Adaptive paths tailored to your goals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">Gamified Progress</h3>
                      <p className="text-pink-100 text-sm">Earn rewards as you learn and grow</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof & Stats */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-3 px-5 inline-flex hover:bg-white/15 transition-all">
                  <div className="flex -space-x-3">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#ff006e] to-[#ff6b9d] border-2 border-white shadow-lg" />
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#8338ec] to-[#a663cc] border-2 border-white shadow-lg" />
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#00f5d4] to-[#00d9c0] border-2 border-white shadow-lg" />
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#fb5607] to-[#ff8500] border-2 border-white shadow-lg" />
                  </div>
                  <div className="text-white">
                    <p className="text-sm font-bold">12,000+ Students</p>
                    <p className="text-xs text-pink-100">Achieving their goals</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all">
                    <p className="text-3xl font-bold text-white">4.9</p>
                    <p className="text-xs text-pink-100 mt-1">Average Rating</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all">
                    <p className="text-3xl font-bold text-white">98%</p>
                    <p className="text-xs text-pink-100 mt-1">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <form className="p-8 md:p-12 bg-white flex flex-col justify-center col-span-3 relative">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#ff006e]/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-linear-to-tr from-[#8338ec]/5 to-transparent rounded-tr-full" />

            <FieldGroup className="space-y-5 relative z-10 max-w-md mx-auto w-full">
              {/* Mobile Logo */}
              <div className="flex md:hidden items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-[#ff006e] to-[#8338ec] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-[#ff006e] to-[#8338ec] bg-clip-text text-transparent">Matalino</span>
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-[#ff006e] to-[#8338ec] bg-clip-text text-transparent">
                  Create Account
                </h1>
                <p className="text-gray-600 text-base">
                  Start your journey to smarter studying
                </p>
              </div>

              {/* Full Name Field */}
              <Field>
                <FieldLabel htmlFor="fullname" className="text-gray-700 font-semibold text-sm mb-2 block">
                  Full Name
                </FieldLabel>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-[#ff006e] to-[#8338ec] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="relative h-14 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#ff006e] focus:ring-4 focus:ring-[#ff006e]/10 rounded-xl transition-all text-base px-5 hover:border-gray-300"
                  />
                </div>
              </Field>

              {/* Email Field */}
              <Field>
                <FieldLabel htmlFor="email" className="text-gray-700 font-semibold text-sm mb-2 block">
                  Email Address
                </FieldLabel>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-[#ff006e] to-[#8338ec] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="relative h-14 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#ff006e] focus:ring-4 focus:ring-[#ff006e]/10 rounded-xl transition-all text-base px-5 hover:border-gray-300"
                  />
                </div>
              </Field>

              {/* Password Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password" className="text-gray-700 font-semibold text-sm mb-2 block">
                    Password
                  </FieldLabel>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-[#ff006e] to-[#8338ec] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="relative h-14 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#ff006e] focus:ring-4 focus:ring-[#ff006e]/10 rounded-xl transition-all text-base px-5 hover:border-gray-300"
                    />
                  </div>
                </Field>

                <Field>
                  <FieldLabel htmlFor="confirm-password" className="text-gray-700 font-semibold text-sm mb-2 block">
                    Confirm Password
                  </FieldLabel>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-r from-[#ff006e] to-[#8338ec] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="relative h-14 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#ff006e] focus:ring-4 focus:ring-[#ff006e]/10 rounded-xl transition-all text-base px-5 hover:border-gray-300"
                    />
                  </div>
                </Field>
              </div>

              {/* Password Requirements */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Password must contain:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>At least 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>One uppercase & one lowercase letter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>One number or special character</span>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  required
                  className="w-5 h-5 text-[#ff006e] border-2 border-gray-300 rounded focus:ring-[#ff006e] focus:ring-2 cursor-pointer mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer select-none">
                  I agree to the{" "}
                  <a href="#" className="text-[#ff006e] hover:text-[#e6005c] font-semibold hover:underline">
                    Terms of Service
                  </a>
                  {" "}and{" "}
                  <a href="#" className="text-[#ff006e] hover:text-[#e6005c] font-semibold hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Create Account Button */}
              <Button 
                type="submit" 
                className="w-full h-14 bg-linear-to-r from-[#ff006e] to-[#8338ec] hover:from-[#e6005c] hover:to-[#6d28d9] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 text-base mt-2"
              >
                <span>Create Account</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200" />
                </div>
                <div className="relative bg-white px-6">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Or sign up with</span>
                </div>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-3 gap-4">
                {/* Google */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-14 border-2 border-gray-200 hover:border-[#ff006e] hover:bg-pink-50 rounded-xl transition-all group transform hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
                  </svg>
                </Button>

                {/* Apple */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-14 border-2 border-gray-200 hover:border-[#ff006e] hover:bg-pink-50 rounded-xl transition-all group transform hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" />
                  </svg>
                </Button>

                {/* Meta */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-14 border-2 border-gray-200 hover:border-[#ff006e] hover:bg-pink-50 rounded-xl transition-all group transform hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" fill="currentColor" />
                  </svg>
                </Button>
              </div>

              {/* Sign In Link */}
              <FieldDescription className="text-center text-gray-600 text-base pt-4">
                Already have an account?{" "}
                <a 
                  onClick={() => setPage(true)} 
                  className="text-[#ff006e] hover:text-[#e6005c] font-bold cursor-pointer transition-colors hover:underline"
                >
                  Sign in
                </a>
              </FieldDescription>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200 mt-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">GDPR Compliant</span>
                </div>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      {/* Bottom Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-20">
        <p className="text-gray-400 text-xs">
          © 2024 Matalino • <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> • <a href="#" className="hover:text-white transition-colors">Terms of Service</a> • <a href="#" className="hover:text-white transition-colors">Help Center</a>
        </p>
      </div>
    </div>
  )
}