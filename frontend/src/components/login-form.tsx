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
    <div className={cn("fixed inset-0 w-full h-full flex items-center justify-center p-4 md:p-6 bg-linear-to-br from-slate-900 via-blue-900 to-violet-900", className)} {...props} style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <Card className="w-full max-w-5xl h-[85vh] md:h-[90vh] border-0 shadow-2xl rounded-3xl overflow-hidden relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ backgroundColor: 'transparent' }}>
        <CardContent className="grid p-0 md:grid-cols-2 h-full">
          {/* Left Panel */}
          <div className="hidden md:flex flex-col justify-between bg-linear-to-br from-[#0066ff] to-[#7c3aed] p-10 relative overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 shrink-0">
              <div className="flex items-center gap-3 mb-8 animate-in slide-in-from-left duration-500">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white text-2xl font-bold tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Matalino</span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-3 leading-tight animate-in slide-in-from-left duration-700 delay-100" style={{ fontWeight: 700 }}>
                Welcome Back
              </h2>
              <p className="text-blue-100 text-base animate-in slide-in-from-left duration-700 delay-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                Sign in to continue your learning journey
              </p>
            </div>

            <div className="space-y-3 relative z-10 shrink-0 my-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/15 transition-all hover:scale-105 animate-in slide-in-from-left duration-700 delay-300 cursor-pointer">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontWeight: 600 }}>Track Progress</p>
                  <p className="text-blue-100 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Real-time analytics</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/15 transition-all hover:scale-105 animate-in slide-in-from-left duration-700 delay-400 cursor-pointer">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontWeight: 600 }}>AI Learning</p>
                  <p className="text-blue-100 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Smart flashcards</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-2 px-4 relative z-10 hover:bg-white/15 transition-all animate-in slide-in-from-left duration-700 delay-500 shrink-0">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-200 to-blue-400 border-2 border-white" />
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-200 to-purple-400 border-2 border-white" />
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-pink-200 to-pink-400 border-2 border-white" />
              </div>
              <p className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>12,000+ students</p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <form className="p-6 md:p-8 lg:p-10 bg-white flex flex-col justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
            <FieldGroup className="space-y-3 animate-in slide-in-from-right duration-700 max-w-md mx-auto w-full">
              <div className="flex md:hidden items-center justify-center gap-3 mb-6">
                <div className="w-11 h-11 bg-linear-to-br from-[#0066ff] to-[#7c3aed] rounded-2xl flex items-center justify-center shadow-lg cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-[#0066ff] to-[#7c3aed] bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>Matalino</span>
              </div>

              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontWeight: 700 }}>Sign In</h1>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Enter your credentials</p>
              </div>

              <Field>
                <FieldLabel htmlFor="email" className="text-gray-700 font-medium text-sm mb-2 block cursor-pointer" style={{ fontWeight: 600 }}>
                  Email
                </FieldLabel>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-[#0066ff] to-[#7c3aed] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="relative h-12 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 rounded-xl transition-all px-4 hover:border-gray-300 cursor-text"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </Field>

              <Field>
                <div className="flex items-center justify-between mb-2">
                  <FieldLabel htmlFor="password" className="text-gray-700 font-medium text-sm cursor-pointer" style={{ fontWeight: 600 }}>
                    Password
                  </FieldLabel>
                  <a href="#" className="text-sm text-[#0066ff] hover:text-[#0052cc] font-medium transition-colors cursor-pointer hover:underline" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Forgot?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-[#0066ff] to-[#7c3aed] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    required 
                    className="relative h-12 bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 rounded-xl transition-all px-4 hover:border-gray-300 cursor-text"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </Field>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 text-[#0066ff] border-gray-300 rounded focus:ring-[#0066ff] cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Remember me
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-linear-to-r from-[#0066ff] to-[#7c3aed] hover:from-[#0052cc] hover:to-[#6929c4] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Sign In
              </Button>

              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button 
                  variant="outline" 
                  type="button"
                  className="h-12 border-2 border-gray-200 hover:border-[#0066ff] hover:bg-blue-50 rounded-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </Button>

                <Button 
                  variant="outline" 
                  type="button"
                  className="h-12 border-2 border-gray-200 hover:border-[#0066ff] hover:bg-blue-50 rounded-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                  </svg>
                </Button>

                <Button 
                  variant="outline" 
                  type="button"
                  className="h-12 border-2 border-gray-200 hover:border-[#0066ff] hover:bg-blue-50 rounded-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Button>
              </div>

              <FieldDescription className="text-center text-gray-600 text-sm pt-2">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setPage(false)} 
                  className="text-[#0066ff] hover:text-[#0052cc] font-medium transition-colors cursor-pointer hover:underline"
                >
                  Sign up
                </button>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}