import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet, useLocation } from "react-router"

// Map routes to page titles
const PAGE_TITLES = {
  "/dashboard": { title: "Dashboard", sub: "Your learning overview" },
  "/flashcards": { title: "Flashcards", sub: "AI-powered memory tools" },
  "/quizzes": { title: "Quizzes", sub: "Test your knowledge" },
  "/tutor": { title: "AI Tutor", sub: "Ask anything, learn faster" },
  "/planner": { title: "Study Planner", sub: "Organize your sessions" },
  "/exams": { title: "Mock Exams", sub: "Practice under pressure" },
};

export default function UserDashboardLayout() {
  const location = useLocation();
  const page = PAGE_TITLES[location.pathname] || { title: "Matalino", sub: "AI-Powered Learning" };

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="bg-[#F8F7F4] min-h-screen">

        {/* ── Top Bar ───────────────────────────────────────── */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between px-5 bg-[#F8F7F4]/90 backdrop-blur-md border-b border-gray-200/70">
          {/* Left: trigger + breadcrumb */}
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-gray-500 hover:text-gray-800 hover:bg-gray-100 p-1.5 rounded-lg transition-colors -ml-1" />

            <div className="h-4 w-px bg-gray-200" />

            <div>
              <span
                className="text-sm font-bold text-gray-900 leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {page.title}
              </span>
              <span className="hidden sm:inline text-xs text-gray-400 ml-2">
                — {page.sub}
              </span>
            </div>
          </div>

          {/* Right: status pill */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700">All systems live</span>
            </div>
          </div>
        </header>

        {/* ── Page Content ──────────────────────────────────── */}
        <main className="flex-1">
          <Outlet />
        </main>

      </SidebarInset>
    </SidebarProvider>
  );
}