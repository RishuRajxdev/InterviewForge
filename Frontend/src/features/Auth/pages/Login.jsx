import React from "react";
import "../auth.form.scss";

const Login = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#1a1a1a] p-4">
    
  <div className="bg-olive-700 rounded-2xl p-8 max-w-md w-full">
    <h1 className="text-3xl font-bold text-zinc-800 text-center ">Login</h1>
    
    <form className="flex flex-col  gap-4 ">
      {/* Email Group */}
      <div className="flex flex-col gap-1 ">
        <label htmlFor="email" className="text-sm font-medium text-emerald-200">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="px-4 py-2 rounded-xl border border-emerald-600 bg-emerald-950 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Password Group */}
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-emerald-200">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter Password" 
          className="px-4 py-2 rounded-xl border border-emerald-600 bg-emerald-950 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {/* Button */}
      <button 
        type="submit" 
        className="mt-2 w-full h-11 bg-emerald-400 hover:bg-emerald-300 font-semibold text-emerald-950 rounded-xl transition-colors"
      >
        Login
      </button>
    </form>
  </div>
</main>
  );
};

export default Login;
