"use client";

import React from "react";
import { Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { supabaseBrowser } from "@/lib/supabase/browser";


export default function Page() {

    const handleLoginWithOAuth = (provider: "google") => {
        // Implement OAuth login here
        const supabase = supabaseBrowser();
        supabase.auth.signInWithOAuth({ 
            provider,
            
            options: { 
                redirectTo: window.location.origin + "/auth/callback",
             },
        });
    } 



  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 rounded-md border p-5 space-y-5 bg-gray-900">
      
    <div className="flex justify-center gap-2">
        <Key size={32} color="white" />
        <h1 className="text-2xl font-bold text-white">Lifelong Dashboard</h1>
    </div>

      <Button 
        className="w-full flex items-center gap-2" 
        variant="outline"
        onClick={()=>handleLoginWithOAuth("google")}
        >
            <FcGoogle/>Sign In With Google</Button>
      
      </div>
      <div className="glowBox -z-10"></div>
    </div>
  );
}