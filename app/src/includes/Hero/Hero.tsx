import TerminalSection from "@/components/TerminalSection"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import React from "react"

const terminalCommands = [
    "$ whoami",
    "desir-technologies",
    "$ cat mission.txt",
    "Building immersive digital experiences and innovative solutions for the modern world.",
    "$ ls -la services/",
    "total 8",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 web-development",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 mobile-apps",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ui-design",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 cloud-services",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ai-solutions",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 security-consulting",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 it-triage",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 data-analytics",
    "$ ./start-project.sh",
    "Initializing new project...",
    "Ready to build something amazing!",
  ]

export function Hero() {
 return (
  <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-tr from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 px-3 sm:px-6 md:px-12 transform rotate-0 font-sans">
<div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-screen bg-blend-overlay"></div>

<div className="flex flex-col gap-3 md:gap-4 z-20 w-full max-w-7xl mx-auto"><div className="mt-2 text-gray-300 text-center text-lg tracking-wider transform hover:scale-105 transition-all duration-300">✓ Installation complete</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto relative z-10 transform -rotate-0">
<div className="flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8 transform hover:scale-105 transition-all duration-500 backdrop-filter px-2 sm:px-4 md:px-6 z-20">
<div className="relative">
<div className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 w-12 sm:w-16 h-12 sm:h-16 bg-primary-200 rounded-md opacity-40 animate-pulse shadow-lg group-hover:scale-125 group-hover:opacity-60 transition-all duration-500"></div>
<span className="inline-block py-2 sm:py-3 px-3 sm:px-4 md:px-5 rounded-full bg-neutral-900/80 border-2 border-primary-500 text-neutral-100 text-xs sm:text-sm font-mono mb-4 sm:mb-6 hover:bg-neutral-800 transition-all duration-300 transform hover:-rotate-3 hover:scale-110 shadow-lg hover:shadow-primary-500/50 backdrop-blur-sm">
  npm install dev-forge
</span>
</div>

<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight">
<span className="relative text-gray-400 font-thin">
  Dev Forge
  <span className="absolute -top-2 sm:-top-3 -right-2 sm:-right-4 text-xs text-neutral-50 bg-primary-600 px-2 py-1 rounded-full transform -rotate-12 hover:rotate-12 transition-all duration-500 animate-pulse shadow-xl backdrop-blur-sm">
    Beta
  </span>
  :
</span>
<span className="block mt-2 sm:mt-3 text-gray-400 text-glow border-t border-gray-800/50 pt-2 sm:pt-3">Code. Ship. Scale.</span>
</h1>

<p className="text-neutral-100 text-sm sm:text-base md:text-lg lg:text-xl max-w-md md:max-w-lg leading-relaxed backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg bg-neutral-50/5 shadow-xl border border-neutral-50/20 transform hover:translate-y-[-4px] transition-all duration-300 hover:shadow-primary-500/30 relative z-10">
<div className="relative z-20">
  <span className="absolute -left-2 -top-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary-400 rounded-full animate-ping"></span>
</div>
The ultimate developer toolchain that adapts to{' '}
<div className="not-italic text-primary-300 font-medium">
  your workflow
</div>
, not the other way around. Build faster with less cognitive overhead.
</p>

<div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
<a className="group relative px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-gray-50 rounded-none font-medium shadow-xl overflow-hidden transition-all duration-500 hover:shadow-primary-500/50 transform hover:translate-y-[-12px] hover:scale-110 hover:bg-gray-900 active:bg-gray-800 text-center clip-path-trapezoid border-l-4 border-t-4 border-primary-300 backdrop-blur-sm w-full xs:w-auto">
  <span className="relative z-10 tracking-wider uppercase font-mono text-xs sm:text-sm md:text-base">Start Building Now</span>
  <span  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
</a>
<a href="https://webcrumbs.cloud/placeholder" className="group px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-transparent border border-gray-300 text-gray-800 rounded-md font-light relative overflow-hidden transition-all hover:border-gray-800 shadow-md hover:shadow-purple-400/30 hover:bg-gray-100 active:bg-gray-200 text-center w-full xs:w-auto">
  <span className="relative z-10">Read the Docs</span>
  <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 group-hover:backdrop-blur-sm"></span>
</a>
</div>

<div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6 mt-4 sm:mt-6 md:mt-8 z-20 relative">
<div className="flex -space-x-2 sm:-space-x-4">
  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-50" />
  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-neutral-50 hover:scale-110 transition-all duration-300 z-20" />
  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-3 border-purple-400 transform hover:scale-110 transition-all duration-300 z-40 shadow-lg" />
  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-pink-500 border-3 border-purple-400 text-xs sm:text-sm text-gray-50 font-bold transform hover:scale-125 transition-all duration-300 shadow-lg animate-pulse">
    12k+
  </div>
</div>
<p className="text-gray-300 text-xs sm:text-sm font-mono tracking-wider">Trusted by developers worldwide</p>
</div>
</div>

<div className="flex justify-center items-center mt-8 md:mt-0 px-3 sm:px-4 md:px-6 lg:px-8">
<div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg perspective-1000 preserve-3d">
<div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100 rounded-md opacity-30 animate-pulse delay-300 z-0"></div>
<div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-24 sm:w-36 h-24 sm:h-36 bg-neutral-200 rounded-md opacity-40 animate-pulse delay-700 shadow-lg shadow-primary-400/30 z-0"></div>

<div className="bg-neutral-50 border border-neutral-200 p-1 rounded-lg shadow-xl transform hover:translate-y-[-8px] hover:rotate-1 transition-all duration-500 backdrop-blur-md hover:shadow-primary-400/30 hover:border-primary-300/50 w-full">
  <div className="bg-gray-800 rounded-md overflow-hidden">
    <div className="flex items-center px-2 sm:px-3 md:px-4 py-2 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="flex space-x-2 sm:space-x-4">
        <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-none bg-pink-500 animate-pulse clip-path-square"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-purple-500 animate-pulse delay-150"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-blue-500 animate-pulse delay-300"></div>
      </div>
      <div className="mx-auto text-gray-300 text-xs md:text-sm font-mono bg-gray-800/70 px-2 sm:px-3 py-1 rounded-sm hidden xs:block">
        ~ terminal
      </div>
    </div>
    <div className="p-2 sm:p-3 md:p-4 lg:p-5 font-mono text-xs leading-relaxed bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 overflow-x-auto">
      <div className="flex items-center">
        <span className="text-gray-600 mr-2">$</span>
        <span className="text-gray-700 text-xs">npm install dev-forge -g</span>
      </div>
      
      <div className="mt-2 text-gray-500 text-xs">
        Installing dependencies...
      </div>
      
      <div className="mt-3 sm:mt-4 flex items-center">
        <span className="text-gray-300 mr-2">$</span>
        <span  className="text-gray-700 text-xs">forge init my-awesome-app</span>
      </div>
      
      <div className="mt-2 text-gray-700 text-xs">
        ? Select your stack:{' '}
        <span className="text-gray-800 font-medium">React + Tailwind</span>
      </div>
      
      <div className="mt-2 text-gray-700 text-xs">
        ? Set up CI/CD pipeline?{' '}
        <span className="text-gray-800 font-medium">Yes</span>
      </div>
      
      <div className="mt-2 text-gray-700 text-xs">
        ? Configure serverless functions?{' '}
        <span className="text-primary-400 font-medium">Yes</span>
      </div>
      
      <div className="mt-2 text-gray-500 text-xs">
        Creating project structure...
      </div>
      
      <div className="mt-2 text-gray-600 text-xs">✓ Project initialized</div>
      
      <div className="mt-3 sm:mt-4 flex items-center flex-wrap">
        <span className="text-gray-600 mr-2">$</span>
        <span className="text-gray-700 text-xs break-all xs:break-words">
          cd my-awesome-app && forge dev
        </span>
      </div>
      
      <div className="mt-2 text-primary-500 text-xs break-all xs:break-words glow-text">
        ⚡ Development server running at http://localhost:3000
      </div>
      
      <div className="mt-2 text-primary-500 text-xs break-words glow-text">
        ✨ GraphQL playground available at
        http://localhost:3000/api/graphql
      </div>
      
      <div className="mt-2 text-primary-500 text-xs break-all xs:break-words glow-text">
        🔧 Admin dashboard at http://localhost:3000/admin
      </div>
    </div>
  </div>
</div>

<div className="absolute top-6 sm:top-8 -right-2 sm:-right-4 md:-right-12 bg-gray-900 py-1 sm:py-2 px-2 sm:px-3 md:px-4 rounded-md shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110">
  <p className="text-gray-50 text-xs sm:text-sm md:text-base font-medium flex items-center">3x faster builds</p>
</div>
</div>
</div>
</div></div>
<div  className="w-full max-w-4xl mx-auto border-t border-gray-700/30 my-8"></div>





<div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-8 text-gray-300 backdrop-blur-sm py-2 px-2 sm:px-3 md:px-4 rounded-full bg-gray-800/40 shadow-lg z-30">
<div className="flex items-center hover:text-primary-400 transition-colors duration-300 transform hover:scale-110 hover:translate-y-[-4px] cursor-pointer my-1">
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2"
viewBox="0 0 20 20"
fill="currentColor"
>
<path 
  fillRule="evenodd"
  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
  clipRule="evenodd"
/>
</svg>
<span className="text-xs font-mono tracking-wider">Docs</span>
</div>
<div className="flex items-center hover:text-neutral-50 transition-colors duration-300 transform hover:scale-110 hover:translate-y-[-4px] cursor-pointer hover:text-primary-300 px-2 py-1 rounded-md my-1">
<svg 
xmlns="http://www.w3.org/2000/svg"
className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2"
viewBox="0 0 20 20"
fill="currentColor"
>
<path 
  fillRule="evenodd"
  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
  clipRule="evenodd"
/>
</svg>
<span className="text-xs sm:text-sm">Plugins</span>
</div>
<div className="flex items-center hover:text-primary-300 transition-colors duration-300 transform hover:scale-110 hover:translate-y-[-4px] cursor-pointer px-2 sm:px-3 py-1 sm:py-2 rounded-md hover:bg-gray-900/50 backdrop-blur-sm my-1">
<svg
xmlns="http://www.w3.org/2000/svg"
className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2"
viewBox="0 0 20 20"
fill="currentColor"
>
<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
</svg>
<span className="text-xs font-mono tracking-wider">Community</span>
</div>
</div>
</section> 
 )   
}