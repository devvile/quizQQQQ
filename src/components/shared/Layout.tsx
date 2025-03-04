import React from "react"
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps{
    children: React.ReactNode
}

export default function Layout({children}:LayoutProps){
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 min-w-screen">
          {/* Header */}
            <Header/>
          {/* Main content */}
          <main className="flex-grow h-[var(--content-height)]">
            <div className="mx-auto">
              {children}
            </div>
          </main>
            <Footer/>
        </div>
      );
}