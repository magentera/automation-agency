import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: ed@nexusaiautomation.co.nz</p>
            <p>Phone: (+64) 210-888-9455</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-sm">&copy; 2024 <Link href="https://nexusaiautomation.co.nz">Nexus AI Automation</Link>. All rights reserved.</p>
            <div className="mt-2">
              <Link href="/privacy-policy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              {" | "}
              <Link href="/terms-of-service" className="text-sm hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

