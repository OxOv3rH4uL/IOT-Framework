import NavBar from "@/components/pages/Navbar"
import About from "@/components/pages/About"
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen flex-col bg-black">
      <NavBar></NavBar>
      <div className="flex-col items-center justify-center mt-40 pt-10">
        <About></About>
      </div>
    </main>
  )
}
