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
import PrivateRoute from "./helpers/PrivateRoute";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
         <LandingPage />
        }
      />
      <Route path="/account" element={<AccountLayout />} />
      <Route path="/user-dashboard" element={ <PrivateRoute><UserDashboardLayout /></PrivateRoute>}>
        <Route
          index
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="lessons"
          element={
            <PrivateRoute>
              <Lessons />
            </PrivateRoute>
          }
        />
        <Route
          path="exams"
          element={
            <PrivateRoute>
              <Exams />
            </PrivateRoute>
          }
        />
        <Route
          path="notes"
          element={
            <PrivateRoute>
              <Notes />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
