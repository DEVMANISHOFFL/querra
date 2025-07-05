'use client'
import React from 'react';
import { Raleway } from 'next/font/google';
import { useRouter } from 'next/navigation'

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-raleway',
})

const Navbar = () => {
    const router = useRouter()

    return (
        <div
            className={`sticky top-0 z-50 bg-white shadow-sm ${raleway.variable} font-sans`}
        >
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                {/* Logo */}
                <p className="text-3xl font-extrabold text-[#2f2d52] tracking-tight">
                    <span className="text-[#6C63FF]">.</span>querra
                </p>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-10 text-base font-medium text-[#55557b]">
                    <p className="hover:text-[#6C63FF] cursor-pointer transition">Pricing</p>
                    <p className="hover:text-[#6C63FF] cursor-pointer transition">Features</p>
                    <p className="hover:text-[#6C63FF] cursor-pointer transition">Docs</p>
                    <p className="hover:text-[#6C63FF] cursor-pointer transition">Support</p>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <p className="text-sm text-[#55557b] uppercase tracking-wide">EN</p>
                    <button className="bg-[#6C63FF] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#5a52d4] transition-all duration-200"
                        onClick={() => router.push('/upload')}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
