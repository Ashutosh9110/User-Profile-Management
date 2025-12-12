import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-4 grid grid-cols-3 items-center">
          <div></div>

          <h1 className="text-3xl font-bold text-center">
            Profile Module
          </h1>

          <nav className="flex justify-end items-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium 
              shadow hover:bg-teal-800 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View
            </Link>

            <Link
              to="/edit"
              className="px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-medium 
              shadow hover:bg-teal-800 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Edit
            </Link>
          </nav>
        </div>
      </header>

      <main className="w-full flex justify-center mt-8 px-4">
        <div className="w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<ViewProfile />} />
            <Route path="/edit" element={<EditProfile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
