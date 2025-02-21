import { Github, Package, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">© 2025 100xrepo. MIT License.</p>
        </div>
        <div className="flex space-x-4">
          <Link  href="https://github.com/AbdulBasit2733" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github className="h-6 w-6" />
          </Link>
          <Link 
            href="https://www.npmjs.com/package/create-100xrepo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <Package className="h-5 w-5" />
          </Link>
          <Link href="https://x.com/Abdul_2003_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

