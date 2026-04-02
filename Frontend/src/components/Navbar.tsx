import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white">
            <div className="relative flex items-center justify-between">
                <Link to="/about" className="text-sm tracking-wider hover:opacity-70 transition-opacity">
                    about
                </Link>
                <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-lg tracking-[0.3em] hover:opacity-70 transition-opacity">
                    STUDIO LD
                </Link>
                <a 
                    href="https://www.linkedin.com/in/lexie-downie-61468a257/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm tracking-wider hover:opacity-70 transition-opacity"
                >
                    in
                </a>
            </div>
        </nav>
    )
}
