import React, { useState, useEffect, useRef } from "react"; // Added React import
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query"; // Assuming this hook exists

interface TerminalSectionProps {
  title?: string;
  commands?: string[];
}

export default function TerminalSection({ title = "Terminal", commands = [] }: TerminalSectionProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Assuming this hook works correctly

  // Typing effect
  useEffect(() => {
    // Ensure commands exist and lineIndex is valid before starting/continuing
    if (!commands || commands.length === 0 || lineIndex >= commands.length) {
        setIsBlinking(true); // Keep cursor blinking if no commands or finished
        return;
    }

    setIsBlinking(false); // Stop blinking while typing
    const typingSpeed = isMobile ? 30 : 40;
    let typingTimeout: ReturnType<typeof setTimeout> | null = null; // Use timeout for better control

    const typeCharacter = () => {
        const currentCommand = commands[lineIndex];

        if (charIndex < currentCommand.length) {
            setCurrentLine((prev) => prev + currentCommand[charIndex]);
            setCharIndex((prev) => prev + 1);
            typingTimeout = setTimeout(typeCharacter, typingSpeed); // Schedule next character
        } else {
            // End of command line - pause, then add line, reset, and move to next
            typingTimeout = setTimeout(() => {
                setLines((prev) => [...prev, currentLine]);
                setCurrentLine("");
                setLineIndex((prev) => prev + 1);
                setCharIndex(0);
                setIsBlinking(true); // Start blinking again between lines/after finish
                 // No need to recall typeCharacter here, the useEffect dependency array handles the next line
            }, 500); // Pause duration at end of line
        }
    };

    typingTimeout = setTimeout(typeCharacter, typingSpeed); // Start typing the first character of the current line

    // Cleanup function
    return () => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setIsBlinking(true); // Ensure cursor blinks if effect stops abruptly
    };
    // Rerun effect when lineIndex changes (to start typing next line) or commands change
  }, [commands, lineIndex, isMobile]); // Removed charIndex and currentLine dependencies to simplify and avoid potential issues


  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentLine]); // Scroll when lines array updates or current line updates

  // Simple blinking cursor effect (independent interval)
  // Note: Blinking state is controlled more precisely within the typing useEffect now.
  // This separate blinker is mainly for when typing is paused or finished.
  // You might merge the logic if needed, but this separation can be fine.
  useEffect(() => {
    const blinkInterval = setInterval(() => {
        // Only toggle blink if not actively typing (controlled by typing effect)
        if(lineIndex >= commands.length || charIndex === 0) { // Blink when finished or between lines
             setIsBlinking((prev) => !prev);
        }
    }, 500); // Cursor blink speed

    return () => clearInterval(blinkInterval);
  }, [lineIndex, commands.length, charIndex]); // Re-evaluate blinking state logic if typing state changes


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        // Optional: keep or remove the boxShadow animation based on preference
        // boxShadow: ["0 0 10px rgba(0, 255, 0, 0.3)", "0 0 15px rgba(0, 255, 0, 0.5)", "0 0 10px rgba(0, 255, 0, 0.3)"],
      }}
      transition={{
        duration: 0.5,
        // boxShadow: { // Example if you keep boxShadow animation
        //   duration: 2,
        //   repeat: Infinity, // Use Infinity for endless repeat
        //   repeatType: "reverse",
        // },
      }}
       // Ensure these CSS classes are defined in your project
      className="terminal scanlines relative overflow-hidden rounded-lg border border-green-500/30 bg-black shadow-lg shadow-green-500/20"
    >
      {/* Header */}
      <div className="terminal-header flex items-center justify-between px-3 py-1.5 bg-gray-800 border-b border-gray-700">
        <span className="font-retro text-xs text-gray-300">{title}</span>
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Body */}
      <div
        className={`terminal-body font-mono p-3 text-green-400 overflow-y-auto ${isMobile ? "text-xs" : "text-sm"}`} // Using font-mono is typical for terminals
        ref={terminalRef}
        style={{ height: isMobile ? "180px" : "200px" }} // Fixed height for scroll
      >
        {lines.map((line, index) => (
          // Render previous lines without prompt/cursor
          <div key={index} className="whitespace-pre-wrap break-words"> {/* Ensure lines wrap */}
            <span className="text-cyan-400 mr-1">$</span>{line} {/* Example prompt */}
          </div>
        ))}
        {/* Render current typing line */}
        {lineIndex < commands.length && ( // Only show current line if there are commands left
           <div className="terminal-prompt whitespace-pre-wrap break-words">
               <span className="text-cyan-400 mr-1">$</span> {/* Example prompt */}
               {currentLine}
               {/* Blinking cursor */}
               <span className={`terminal-cursor inline-block w-2 h-4 bg-green-400 ml-0.5 ${isBlinking ? "opacity-100 animate-blink" : "opacity-0"}`}></span>
           </div>
        )}
      </div>

      {/* Optional Scanlines Overlay */}
      {/* <div className="scanlines-overlay absolute inset-0 pointer-events-none"></div> */}

      {/* Ensure CSS for terminal elements, scanlines, font-retro, and animate-blink are defined */}
      {/* Example blink animation in global CSS or Tailwind config:
          @keyframes blink { 50% { opacity: 0; } }
          .animate-blink { animation: blink 1s step-end infinite; }
      */}
    </motion.div>
  );
}