import React from "react";
import { useState } from "react";
import {LoginForm} from "@/components/login-form";
import {SignupForm} from "@/components/signup-form";
function AccountLayout() {
  
    const [showLogin, setShowLogin] = useState(true);
  
    return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        {
            showLogin ? <LoginForm setPage={setShowLogin} /> : <SignupForm setPage={setShowLogin} />
        }
      </div>
    </div>
  );
}

export default AccountLayout;
