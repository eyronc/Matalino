import { Route, Routes } from "react-router";
// @ts-ignore
import AccountLayout from "@/layouts/account-layout";
// @ts-ignore
import UserDashboardLayout from "@/layouts/user-dashboard";
import LandingPage from "@/pages/LandingPage";
// @ts-ignore
import Study from "@/pages/Study";
// @ts-ignore
import Lessons from "@/pages/Lessons";
// @ts-ignore
import Exams from "@/pages/Exams";
// @ts-ignore
import Notes from "@/pages/Notes";
// @ts-ignore
import Dashboard from "@/pages/Dashboard";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account" element={<AccountLayout/>} />
      
      {/* Nested routes */}
      <Route path="/user-dashboard" element={<UserDashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="exams" element={<Exams />} />
        <Route path="notes" element={<Notes />} />
      </Route>

      <Route path="/study" element={<Study />} />
    </Routes>
  );
}

export default App;