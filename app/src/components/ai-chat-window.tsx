"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Info, Maximize2, Minimize2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

interface AiChatWindowProps {
  open: boolean
  onClose: () => void
}

const JARVIS_VERSION = "2.1.0"
const JARVIS_CAPABILITIES = [
  "Natural Language Processing",
  "Code Analysis",
  "Technical Documentation",
  "System Diagnostics",
  "Data Analysis",
]

export function AiChatWindow({ open, onClose }: AiChatWindowProps) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content: "Hello! I'm Jarvis, your AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Here you would typically make an API call to your AI service
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I received your message: "${input}"`,
        },
      ])
    }, 1000)
  }

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
        <DialogContent
          className={`${isFullscreen ? "w-screen h-screen max-w-none m-0 rounded-none" : "sm:max-w-[500px]"}`}
        >
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 space-x-4">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <div>
                <DialogTitle>Jarvis AI Assistant</DialogTitle>
                <p className="text-xs text-muted-foreground">v{JARVIS_VERSION}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Info</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Capabilities:</p>
                    <ul className="text-xs space-y-1">
                      {JARVIS_CAPABILITIES.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFullscreen(!isFullscreen)}>
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                <span className="sr-only">{isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}</span>
              </Button>
            </div>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 h-[400px] overflow-y-auto p-4 rounded-lg border">
              {messages.map((message, i) => (
                <div key={i} className={`flex gap-2 ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"}`}>
                  {message.role === "assistant" && <Bot className="h-6 w-6 mt-1 flex-shrink-0" />}
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground ml-auto"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
}

