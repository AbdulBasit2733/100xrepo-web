"use client"
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx create-100xrepo my-project');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
        🚀 Supercharge Your Monorepo Workflow
      </h1>

      <p className="text-xl sm:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto">
        Instantly scaffold a powerful Turbo Repo monorepo with frontend,
        backend, WebSocket, and database support.
      </p>

      <div className="flex justify-center items-center gap-x-2 mt-4">
        <div className="bg-gray-800 rounded-lg p-4 inline-flex items-center gap-2">
          <code className="text-green-400">npx create-100xrepo my-project</code>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={copyToClipboard}
            className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-700"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </section>
  );
}
