import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  setPage,
  className,
  ...props
}: {setPage: (value: boolean) => void} & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 min-h-screen items-center justify-center p-4 bg-linear-to-br from-[#f5f5f7] to-[#efefef]", className)} {...props}>
      <Card className="overflow-hidden border-0 shadow-2xl max-w-5xl w-full rounded-3xl">
        <CardContent className="grid p-0 md:grid-cols-2 min-h-150">
          {/* Left Side - Form */}
          <form className="p-8 md:p-12 bg-white flex flex-col justify-center">
            <FieldGroup className="space-y-6">
              {/* Header with Logo */}
              <div className="flex flex-col items-center md:items-start gap-3 mb-2">
                <div className="bg-linear-to-br from-[#8B7EFF] to-[#A89DFF] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-1 bg-linear-to-r from-[#1d1d1f] to-[#8B7EFF] bg-clip-text">Welcome Back</h1>
                  <p className="text-[#86868b] text-sm font-medium">
                    Continue your journey with Matalino
                  </p>
                </div>
              </div>

              {/* Email Field */}
              <Field>
                <FieldLabel htmlFor="email" className="text-[#6e6e73] font-semibold text-xs uppercase tracking-wider mb-3 block">
                  Email Address
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="h-11 bg-[#f5f5f7] border-2 border-transparent focus:bg-white focus:border-[#8B7EFF] focus:ring-0 rounded-xl transition-all hover:bg-[#efefef]"
                />
              </Field>

              {/* Password Field */}
              <Field>
                <div className="flex items-center justify-between mb-3">
                  <FieldLabel htmlFor="password" className="text-[#6e6e73] font-semibold text-xs uppercase tracking-wider">
                    Password
                  </FieldLabel>
                  <a
                    href="#"
                    className="text-xs text-[#8B7EFF] hover:text-[#7A6DEF] font-bold transition-colors cursor-pointer"
                  >
                    Forgot?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="h-11 bg-[#f5f5f7] border-2 border-transparent focus:bg-white focus:border-[#8B7EFF] focus:ring-0 rounded-xl transition-all hover:bg-[#efefef]"
                />
              </Field>

              {/* Sign In Button */}
              <Field>
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-linear-to-r from-[#8B7EFF] to-[#A89DFF] hover:from-[#7A6DEF] hover:to-[#9980FF] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-base"
                >
                  Sign In
                </Button>
              </Field>

              {/* Separator */}
              <FieldSeparator className="my-6">
                <span className="text-[#86868b] text-xs font-semibold uppercase tracking-widest px-3 bg-white">Or continue with</span>
              </FieldSeparator>

              {/* Social Login Buttons */}
              <Field className="grid grid-cols-3 gap-3">
                {/* Apple */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-11 border-2 border-[#e8e8ed] hover:border-[#8B7EFF] hover:bg-[#f9f7ff] rounded-xl transition-all group cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#1d1d1f] group-hover:scale-110 transition-transform">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                </Button>

                {/* Google */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-11 border-2 border-[#e8e8ed] hover:border-[#8B7EFF] hover:bg-[#f9f7ff] rounded-xl transition-all group cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#1d1d1f] group-hover:scale-110 transition-transform">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>

                {/* Meta */}
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-11 border-2 border-[#e8e8ed] hover:border-[#8B7EFF] hover:bg-[#f9f7ff] rounded-xl transition-all group cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#1d1d1f] group-hover:scale-110 transition-transform">
                    <path
                      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </Field>

              {/* Sign Up Link */}
              <FieldDescription className="text-center text-[#86868b] text-sm mt-6">
                New here?{" "}
                <a 
                  onClick={() => setPage(false)} 
                  className="text-[#8B7EFF] hover:text-[#7A6DEF] font-bold cursor-pointer transition-colors"
                >
                  Create an account
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* Right Side - Purple Panel */}
          <div className="bg-linear-to-br from-[#8B7EFF] via-[#9980FF] to-[#7A6DEF] relative hidden md:flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Gradient blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#A89DFF]/50 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6A5ADF]/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            
            {/* Content */}
            <div className="relative z-10 w-full max-w-md space-y-8">
              {/* Header */}
              <div className="space-y-3 text-white">
                <h2 className="text-4xl font-bold leading-tight">
                  Master your exams with ease.
                </h2>
                <p className="text-purple-100 text-sm font-medium">
                  Experience the next generation of AI-driven study tools.
                </p>
              </div>
              
              {/* Feature Cards */}
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className="bg-white/20 rounded-xl p-2.5 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Smart Flashcards</p>
                    <p className="text-purple-100 text-xs">AI-generated active recall</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className="bg-white/20 rounded-xl p-2.5 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Progress Analytics</p>
                    <p className="text-purple-100 text-xs">Real-time performance tracking</p>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 py-3 px-4 rounded-full hover:bg-white/15 transition-all">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-purple-200 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-purple-300 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-purple-400 border-2 border-white" />
                </div>
                <p className="text-xs font-bold text-white">+12k students joined</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms Footer */}
      <FieldDescription className="text-center text-[#a5a5af] text-xs uppercase tracking-wide">
        Secure Encryption •{" "}
        <a href="#" className="hover:text-[#8B7EFF] transition-colors cursor-pointer">
          Terms
        </a>{" "}
        •{" "}
        <a href="#" className="hover:text-[#8B7EFF] transition-colors cursor-pointer">
          Privacy
        </a>
      </FieldDescription>
    </div>
  )
}
