//login-form (need to make it shorter and more concise, also add some animations and make it more visually appealing)

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

export function LoginForm({
  setPage,
  className,
  ...props
}: {setPage: (value: boolean) => void} & React.ComponentProps<"div">) {
  return (
    <div className={cn("min-h-screen flex items-center justify-center p-0 bg-linear-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden", className)} {...props}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-[#ff006e]/20 to-[#8338ec]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-linear-to-br from-[#00f5d4]/10 to-[#00bbf9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#ff006e] rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-[#8338ec] rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#00f5d4] rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
        <div className="absolute top-60 left-60 w-1 h-1 bg-[#ffbe0b] rounded-full animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '2s' }} />
      </div>

      <Card className="w-full max-w-6xl border-0 shadow-none rounded-none overflow-hidden relative z-10 animate-in fade-in duration-700">
        <CardContent className="grid p-0 md:grid-cols-5 min-h-150">
          {/* Left Sidebar - Decorative Panel */}
          <div className="hidden md:flex flex-col bg-linear-to-br from-[#0066ff] to-[#7c3aed] p-10 relative overflow-hidden col-span-2">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Logo and Brand */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white text-2xl font-bold tracking-tight">Matalino</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Your AI-Powered
                  <br />
                  Study Companion
                </h2>
                <p className="text-blue-100 text-base mb-8">
                  Join thousands of students who are mastering their exams with intelligent flashcards and adaptive learning.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">AI-Powered Learning</h3>
                      <p className="text-blue-100 text-sm">Smart algorithms adapt to your learning style and pace</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">Progress Tracking</h3>
                      <p className="text-blue-100 text-sm">Real-time analytics to monitor your improvement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-xl p-3 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">Lightning Fast</h3>
                      <p className="text-blue-100 text-sm">Generate flashcards instantly from any material</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-3 px-5 hover:bg-white/15 transition-all">
                  <div className="flex -space-x-3">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#ff006e] to-[#ff6b9d] border-2 border-white shadow-lg" />
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#00d4ff] to-[#00a8e8] border-2 border-white shadow-lg" />
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#8338ec] to-[#a663cc] border-2 border-white shadow-lg" />
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#00f5d4] to-[#00d9c0] border-2 border-white shadow-lg" />
                  </div>
                  <div className="text-white">
                    <p className="text-sm font-bold">12,000+ Students</p>
                    <p className="text-xs text-blue-100">Studying smarter every day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <form className="p-8 md:p-12 bg-white flex flex-col justify-center col-span-3 relative">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#0066ff]/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-linear-to-tr from-[#7c3aed]/5 to-transparent rounded-tr-full" />

            <FieldGroup className="space-y-6 relative z-10 max-w-md mx-auto w-full">
              {/* Mobile Logo */}
              <div className="flex md:hidden items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-[#0066ff] to-[#7c3aed] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">Matalino</span>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent">
                  Welcome Back!
                </h1>
                <p className="text-gray-600 text-base">
                  Continue your learning journey
                </p>
              </div>

              {/* Email Field */}
              <Field>
                <FieldLabel htmlFor="email" className="text-gray-700 font-semibold text-sm mb-2 block">
                  Email Address
                </FieldLabel>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-[#0066ff] to-[#7c3aed] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="relative h-14 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#0066ff] focus:ring-4 focus:ring-[#0066ff]/10 rounded-2xl transition-all text-base px-5 hover:border-gray-300"
                  />
                </div>
              </Field>

              {/* Password Field */}
              <Field>
                <div className="flex items-center justify-between mb-2">
                  <FieldLabel htmlFor="password" className="text-gray-700 font-semibold text-sm">
                    Password
                  </FieldLabel>
                  <a
                    href="#"
                    className="text-sm text-[#0066ff] hover:text-[#0052cc] font-semibold transition-colors hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-[#0066ff] to-[#7c3aed] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    required 
                    className="relative h-14 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#0066ff] focus:ring-4 focus:ring-[#0066ff]/10 rounded-2xl transition-all text-base px-5 hover:border-gray-300"
                  />
                </div>
              </Field>

              {/* Remember Me Checkbox */}
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-5 h-5 text-[#0066ff] border-2 border-gray-300 rounded-md focus:ring-[#0066ff] focus:ring-2 cursor-pointer transition-all"
                />
                <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer select-none">
                  Remember me for 30 days
                </label>
              </div>

              {/* Sign In Button */}
              <Button 
                type="submit" 
                className="w-full h-14 bg-linear-to-r from-[#0066ff] to-[#7c3aed] hover:from-[#0052cc] hover:to-[#6929c4] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 text-base mt-2"
              >
                <span>Sign In</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200" />
                </div>
                <div className="relative bg-white px-6">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-4">
                {/* Google */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-14 border-2 border-gray-200 hover:border-[#0066ff] hover:bg-blue-50 rounded-2xl transition-all group transform hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
                  </svg>
                </Button>

                {/* Apple */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-14 border-2 border-gray-200 hover:border-[#0066ff] hover:bg-blue-50 rounded-2xl transition-all group transform hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" />
                  </svg>
                </Button>

                {/* Meta */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-14 border-2 border-gray-200 hover:border-[#0066ff] hover:bg-blue-50 rounded-2xl transition-all group transform hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" fill="currentColor" />
                  </svg>
                </Button>
              </div>

              {/* Sign Up Link */}
              <FieldDescription className="text-center text-gray-600 text-base pt-6">
                New to Matalino?{" "}
                <button 
                  type="button"
                  onClick={() => setPage(false)} 
                  className="text-[#0066ff] hover:text-[#0052cc] font-bold transition-all hover:underline"
                >
                  Create an account
                </button>
              </FieldDescription>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200 mt-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">Secure Login</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">256-bit Encryption</span>
                </div>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      {/* Bottom Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-20">
        <p className="text-gray-400 text-xs">
          © 2024 Matalino • <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> • <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </p>
      </div>
    </div>
  )
}