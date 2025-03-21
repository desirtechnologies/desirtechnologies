// This will contain all interactive elements
import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface AccordionProps {
  title: string;
  icon: string;
  children: ComponentChildren;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionSection({ title, icon, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div class="border-b border-primary/10">
      <button
        onClick={onToggle}
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-primary/5 rounded-lg transition-colors duration-300"
      >
        <div class="flex items-center gap-3">
          <SimpleIcon type={icon} />
          <span>{title}</span>
        </div>
        <div class={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown />
        </div>
      </button>
      <div
        class={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div class="p-4 space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  return (
    <form onSubmit={handleSubmit} class="space-y-4">
      <div class="relative group">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          class="w-full pr-12 py-6 rounded-full border-primary/20 focus:border-primary/50 text-base group-hover:border-primary/30 transition-colors"
          required
        />
        <button
          type="submit"
          class="absolute right-1 top-1 h-10 w-10 rounded-full bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 transition-all transform hover:scale-105 active:scale-95"
        >
          <SimpleIcon type="arrow-right" />
          <span class="sr-only">Subscribe</span>
        </button>
      </div>
      <p class="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  );
}

export function MatrixBackground() {
  const [chars, setChars] = useState<Array<{ id: number; char: string; x: number; y: number }>>([]);

  useEffect(() => {
    if (!IS_BROWSER) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/"
    const footerElement = document.getElementById("animated-footer");
    if (!footerElement) return;

    const rect = footerElement.getBoundingClientRect();
    const initialChars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
    }));

    setChars(initialChars);

    const interval = setInterval(() => {
      setChars(prev => prev.map(item => ({
        ...item,
        char: Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : item.char,
        x: item.x + (Math.random() * 2 - 1) * 2,
        y: item.y + (Math.random() * 2 - 1) * 2,
      })));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {chars.map((item) => (
        <div
          key={item.id}
          class="absolute text-primary/20 font-mono text-sm"
          style={{
            transform: `translate(${item.x}px, ${item.y}px)`,
            opacity: Math.random(),
          }}
        >
          {item.char}
        </div>
      ))}
    </div>
  );
} 