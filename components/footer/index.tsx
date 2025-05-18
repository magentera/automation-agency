// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Konuke. All rights reserved.</p>
      <p className="mt-2">
        <Link href="/privacy" className="hover:underline mx-2">
          Privacy Policy
        </Link>
        |
        <Link href="/terms" className="hover:underline mx-2">
          Terms of Service
        </Link>
      </p>
    </footer>
  );
}
