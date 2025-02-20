"use client"
import { Button } from "@/components/ui/button"
import { Terminal, Copy } from "lucide-react"
import { useState } from "react";

export default function CTA() {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx create-100xrepo my-project');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Monorepo in Seconds!</h2>
      <p className="text-xl mb-8 text-gray-300">Experience the power of create-100xrepo today.</p>
      <div className="bg-gray-800 rounded-lg p-4 inline-flex items-center gap-2">
        <code className="text-green-400">npx create-100xrepo my-project</code>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={copyToClipboard}
          className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-700"
        >
          <span id="copyBtn"><Copy className="h-4 w-4" /></span>
        </Button>
      </div>
    </section>
  )
}

