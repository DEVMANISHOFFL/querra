import React from 'react'

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#f5f6fa] via-white to-[#eef0f7] py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#2f2d52] leading-tight">
                    Chat with any PDF document.
                </h1>

                {/* Subheading */}
                <p className="mt-6 text-xl md:text-2xl text-[#55557b] font-medium">
                    From legal contracts to research papers,{' '}
                    <span className="text-[#6C63FF] font-semibold">Querra</span> brings
                    your PDFs to life. <br />
                    Ask questions, summarize content, extract insights — instantly.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <button className="bg-[#6C63FF] text-white text-lg px-6 py-3 rounded-2xl shadow-md hover:bg-[#5a52d4] transition-all duration-200">
                        Get Started
                    </button>
                    <button className="bg-white text-[#6C63FF] border border-[#6C63FF] px-6 py-3 rounded-2xl shadow-sm hover:bg-[#f1f0ff] transition-all duration-200">
                        Demo
                    </button>
                </div>

                {/* Avatars + Text */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    {/* Avatars */}
                    <div className="flex -space-x-3">
                        <img
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="user1"
                        />
                        <img
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="user2"
                        />
                        <img
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                            src="https://randomuser.me/api/portraits/men/12.jpg"
                            alt="user3"
                        />
                        <img
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                            src="https://randomuser.me/api/portraits/women/55.jpg"
                            alt="user4"
                        />
                        <img
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                            src="https://randomuser.me/api/portraits/men/91.jpg"
                            alt="user5"
                        />
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                        Loved by millions of happy users!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
