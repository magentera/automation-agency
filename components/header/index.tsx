import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"


export default function Header() {
    return (<header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-24">
            <Link href="/" className="flex gap-3 items-center">
                <Image
                    src="/konuke.png"
                    alt="Konuke Logo"
                    width={120}
                    height={40}
                    className="h-20 w-auto"
                />
                <span className="font-bold">KONUKE</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
                <div className="flex items-center">
                    <Link href="#solutions" className="text-gray-700 hover:text-gray-900 font-medium">
                        Services
                    </Link>
                    {/* <ChevronDown className="ml-1 h-4 w-4 text-gray-500" /> */}
                </div>
                <Link href="#team" className="text-gray-700 hover:text-gray-900 font-medium">
                    Team
                </Link>
                <Link href="#faq" className="text-gray-700 hover:text-gray-900 font-medium">
                    FAQ
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
                    Talk to us
                </Link>
            </nav>
        </div>
    </header>
    )
}