import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"


export default function Header() {
    return (<header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
            <Link href="/" className="mr-8 flex gap-3 items-center">
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
                    <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                        Solutions
                    </Link>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </div>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                    Blog
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                    Customers
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                    Pricing
                </Link>
                <div className="flex items-center">
                    <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                        Resources
                    </Link>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </div>
                <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                    Talk to us
                </Link>
            </nav>
        </div>
        <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Log in
            </Link>
            <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
                Sign up
            </Link>
        </div>
    </header>
    )
}