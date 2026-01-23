import { ComponentExample } from "@/components/component-example";
import { Route, Routes } from "react-router";
import  AccountLayout  from "@/layouts/account-layout";
import  UserDashboardLayout  from "@/layouts/user-dashboard";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ComponentExample />} />
      <Route path="/account" element={<AccountLayout/>} />
      <Route path="/user-dashboard" element={<UserDashboardLayout />} />
      
    </Routes>
  );
}

export default App;
