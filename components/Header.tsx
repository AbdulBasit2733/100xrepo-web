import { Github, Package } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gray-900  py-4 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            100xrepo
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="https://github.com/AbdulBasit2733/100xrepo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
          <Link 
            href="https://www.npmjs.com/package/create-100xrepo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <Package className="h-5 w-5" />
            <span>NPM</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
