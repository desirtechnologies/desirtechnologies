"use client"

import { useState } from "react"
import { Bot } from "lucide-react"
import { Button } from "@/views/components/ui/button"
import { AiChatWindow } from "@/views/components/ai-chat-window"

export function AiChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
        <span className="sr-only">Open AI Chat</span>
      </Button>
      <AiChatWindow open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

