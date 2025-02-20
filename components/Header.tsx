import { Github } from "lucide-react"

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            100xrepo
          </a>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a 
            href="https://github.com/AbdulBasit2733/100xrepo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
