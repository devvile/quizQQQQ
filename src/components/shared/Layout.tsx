import React from "react"
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps{
    children: React.ReactNode
}

export default function Layout({children}:LayoutProps){
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
          {/* Header */}
            <Header/>
          {/* Main content */}
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
            <Footer/>
        </div>
      );
}