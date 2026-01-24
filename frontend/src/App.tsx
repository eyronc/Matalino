import { Route, Routes } from "react-router";
import  AccountLayout  from "@/layouts/account-layout";
import  UserDashboardLayout  from "@/layouts/user-dashboard";
import LandingPage from "@/pages/LandingPage";
import Study from "@/pages/Study";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account" element={<AccountLayout/>} />
      <Route path="/user-dashboard" element={<UserDashboardLayout />} />
      <Route path="/study" element={<Study />} />
    </Routes>
  );
}

export default App;
