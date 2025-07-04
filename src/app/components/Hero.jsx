import {
    Brain,
    Upload,
    Zap,
    Shield,
    FileText,
    Users,
    Star,
    ArrowRight,
    Sparkles,
    Bot,
    Scale,
    DollarSign,
    Home,
    Heart,
    GraduationCap,
    Microscope,
    CheckCircle,
    Globe,
    Award,
} from "lucide-react"

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-indigo-100">
                {/* Decorative Elements */}
                <div className="absolute top-20  left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-40 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
                        <Sparkles className="h-5 w-5 text-blue-600 animate-spin" />
                        <span className="text-blue-700 text-sm font-semibold">Powered by Advanced AI Technology</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    <h1 className="text-7xl md:text-8xl font-black text-gray-900 leading-tight mb-8">
                        Unlock the Power of
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                            AI-Driven PDF Analysis
                        </span>
                    </h1>

                    <p className="mt-8 text-xl md:text-2xl text-gray-700 font-medium max-w-5xl mx-auto leading-relaxed">
                        Transform any PDF into an intelligent conversation. From research papers to legal documents,
                        <span className="text-blue-600 font-bold"> AnalyzeAI</span> brings your documents to life with instant
                        insights and revolutionary AI-powered analysis.
                    </p>

                    <div className="mt-16 flex justify-center gap-8 flex-wrap">
                        <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl px-12 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
                            <Brain className="h-6 w-6" />
                            Start Analyzing Now
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="bg-white text-gray-700 border-2 border-gray-300 px-12 py-5 rounded-2xl hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 flex items-center gap-3 shadow-lg text-xl">
                            <FileText className="h-6 w-6" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Enhanced Social Proof */}
                    {/* <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            
                            <div className="flex -space-x-4">
                                
                                {[1, 2, 3, 4, 5, 6].map((id) => (
                                    <div
                                        key={id}
                                        className="w-16 h-16 rounded-full border-4 border-white bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                                    >
                                        {String.fromCharCode(65 + id)}
                                      
                                    </div>
                                    
                                ))}
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                    <div className="flex text-yellow-500">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-6 w-6 fill-current" />
                                            
                                        ))}
                                        
                                    </div>
                                    <span className="text-gray-600 font-semibold">4.9/5</span>
                                </div>
                                <p className="text-gray-700 font-semibold text-lg">
                                    Trusted by <span className="text-blue-600">50,000+</span> professionals worldwide
                                </p>
                                <p className="text-gray-500">Join the AI revolution in document analysis</p>
                            </div>
                        </div>
                    </div> */}
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
                        <p className="text-gray-700 font-medium text-sm sm:text-base">
                            Loved by millions of happy users!
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "50K+", label: "Active Users", icon: <Users className="h-8 w-8" /> },
                            { number: "2M+", label: "Documents Analyzed", icon: <FileText className="h-8 w-8" /> },
                            { number: "99.9%", label: "Accuracy Rate", icon: <Award className="h-8 w-8" /> },
                            { number: "150+", label: "Countries", icon: <Globe className="h-8 w-8" /> },
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                                    <div className="flex justify-center mb-4">{stat.icon}</div>
                                    <div className="text-4xl font-black mb-2">{stat.number}</div>
                                    <div className="text-blue-100 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-gray-900 mb-6">Why Professionals Choose AnalyzeAI</h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Experience the future of document analysis with cutting-edge AI technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Upload className="h-10 w-10" />,
                                title: "Instant Upload & Process",
                                desc: "Drag, drop, and start chatting with any PDF in seconds. Our advanced AI processes documents instantly with zero setup required.",
                                color: "from-blue-500 to-blue-600",
                                bgColor: "bg-blue-50",
                                features: ["Drag & Drop Interface", "Instant Processing", "No Setup Required"],
                            },
                            {
                                icon: <Zap className="h-10 w-10" />,
                                title: "Lightning-Fast Responses",
                                desc: "Get AI-powered insights and answers instantly with our state-of-the-art language models trained on millions of documents.",
                                color: "from-green-500 to-green-600",
                                bgColor: "bg-green-50",
                                features: ["Sub-second Responses", "Advanced AI Models", "Real-time Analysis"],
                            },
                            {
                                icon: <Shield className="h-10 w-10" />,
                                title: "Source-Referenced Accuracy",
                                desc: "Every response includes precise citations and page references for complete transparency and trust in your analysis.",
                                color: "from-purple-500 to-purple-600",
                                bgColor: "bg-purple-50",
                                features: ["Precise Citations", "Page References", "100% Transparency"],
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`group ${item.bgColor} border-2 border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-8 shadow-lg`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-6 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{item.desc}</p>
                                <ul className="space-y-3">
                                    {item.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section className="py-32 bg-gradient-to-r from-indigo-100 via-blue-100 to-purple-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-gray-900 mb-6">Perfect for Every Document Type</h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            From simple reports to complex research papers - our AI handles it all
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {[
                            { emoji: "📊", title: "Financial Reports", color: "from-green-400 to-green-500" },
                            { emoji: "⚖️", title: "Legal Contracts", color: "from-blue-400 to-blue-500" },
                            { emoji: "📚", title: "Research Papers", color: "from-purple-400 to-purple-500" },
                            { emoji: "📋", title: "User Manuals", color: "from-orange-400 to-orange-500" },
                            { emoji: "🎓", title: "Academic Texts", color: "from-indigo-400 to-indigo-500" },
                            { emoji: "🏥", title: "Medical Records", color: "from-red-400 to-red-500" },
                            { emoji: "📈", title: "Business Plans", color: "from-teal-400 to-teal-500" },
                            { emoji: "🔬", title: "Scientific Studies", color: "from-cyan-400 to-cyan-500" },
                            { emoji: "📝", title: "Technical Docs", color: "from-gray-400 to-gray-500" },
                            { emoji: "📖", title: "E-books", color: "from-pink-400 to-pink-500" },
                        ].map((doc, i) => (
                            <div
                                key={i}
                                className={`bg-gradient-to-br ${doc.color} text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group cursor-pointer`}
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{doc.emoji}</div>
                                <div className="font-bold text-sm">{doc.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI SPECIALISTS */}
            <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-gray-900 mb-6">
                            <Bot className="inline h-12 w-12 mr-4 text-blue-600" />
                            Specialized AI Agents
                        </h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Domain-specific AI models trained to understand the nuances of different industries and document types
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Scale className="h-8 w-8" />,
                                domain: "Legal",
                                desc: "Contracts, compliance, case analysis",
                                color: "from-blue-500 to-indigo-500",
                                bgColor: "bg-blue-50",
                            },
                            {
                                icon: <DollarSign className="h-8 w-8" />,
                                domain: "Finance",
                                desc: "Reports, audits, market analysis",
                                color: "from-green-500 to-emerald-500",
                                bgColor: "bg-green-50",
                            },
                            {
                                icon: <Home className="h-8 w-8" />,
                                domain: "Real Estate",
                                desc: "Property docs, agreements, valuations",
                                color: "from-orange-500 to-red-500",
                                bgColor: "bg-orange-50",
                            },
                            {
                                icon: <Heart className="h-8 w-8" />,
                                domain: "Healthcare",
                                desc: "Medical records, research, protocols",
                                color: "from-red-500 to-pink-500",
                                bgColor: "bg-red-50",
                            },
                            {
                                icon: <GraduationCap className="h-8 w-8" />,
                                domain: "Education",
                                desc: "Academic papers, curriculum, assessments",
                                color: "from-purple-500 to-violet-500",
                                bgColor: "bg-purple-50",
                            },
                            {
                                icon: <Microscope className="h-8 w-8" />,
                                domain: "Research",
                                desc: "Scientific papers, data analysis, insights",
                                color: "from-cyan-500 to-blue-500",
                                bgColor: "bg-cyan-50",
                            },  
                        ].map((agent, i) => (
                            <div
                                key={i}
                                className={`${agent.bgColor} border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1`}
                            >
                                <div
                                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${agent.color} text-white mb-6 shadow-lg`}
                                >
                                    {agent.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{agent.domain}</h3>
                                <p className="text-gray-600 text-lg">{agent.desc}</p>
                                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto text-lg transform hover:scale-105">
                            Explore All Agents
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-32 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-gray-900 mb-6">What Our Users Say</h2>
                        <p className="text-gray-600 text-xl">Join thousands of satisfied professionals worldwide</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                quote:
                                    "Querra completely transformed how I handle legal documents. What used to take hours now takes minutes. The accuracy and source referencing is absolutely incredible.",
                                author: "Rajat Sharma",
                                role: "Corporate Lawyer",
                                company: "Goldman & Associates",
                                rating: 5,
                                avatar: "RS",
                            },
                            {
                                quote:
                                    "As a researcher analyzing dozens of papers weekly, this tool has become absolutely indispensable. The AI insights are remarkably accurate and save me countless hours.",
                                author: "Dr. Isha Thakur",
                                role: "Research Scientist",
                                company: "Kalda Specialist Group",
                                rating: 5,
                                avatar: "IT",
                            },
                        ].map((testimonial, i) => (
                            <div
                                key={i}
                                className="bg-white border-2 border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                                <div className="flex text-yellow-500 mb-6">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <Star key={j} className="h-6 w-6 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-gray-700 text-xl mb-8 italic leading-relaxed font-medium">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold text-lg">{testimonial.author}</div>
                                        <div className="text-gray-600 font-medium">{testimonial.role}</div>
                                        <div className="text-gray-500 text-[12px] mt-[-4px]">{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-6xl font-black mb-8">Ready to Transform Your Workflow?</h2>
                    <p className="text-blue-100 text-2xl mb-16 max-w-3xl mx-auto">
                        Join thousands of professionals who've revolutionized how they work with documents using AI
                    </p>

                    <div className="flex justify-center gap-8 flex-wrap mb-12">
                        <button className="group bg-white text-blue-600 text-xl px-12 py-5 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center gap-4 font-bold transform hover:scale-105">
                            <Brain className="h-7 w-7" />
                            Start Free Trial
                            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center gap-4 font-bold text-xl">
                            <Users className="h-7 w-7" />
                            Book a Demo
                        </button>
                    </div>

                    <div className="flex justify-center items-center gap-8 text-blue-100">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
