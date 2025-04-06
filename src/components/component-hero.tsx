
type HeroProps = {
    title?: string,
    title2?: string,
    tagline?: string,
    isContactPage?: boolean
}
const HeroSection = ({ title, tagline, title2, isContactPage }: HeroProps) => {
    return (
        <div>
            <section className="relative bg-gradient-to-br from-[#1b4d2e] to-[#2d7d46] text-white overflow-hidden">

                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F08232] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#4CAF50] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-[#1b4d2e] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative container mx-auto px-4 py-28 md:py-36">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            {isContactPage && <span className="text-[#F08232] font-semibold tracking-wider">EMPOWERING AFRICA&apos;S FUTURE</span>}

                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d1fae5]">
                                {title || "Our Innovative"}
                            </span> {" "}
                            {isContactPage && <br />}
                            <span className="text-[#F08232]">{title2 || "Programs"}</span>
                        </h1>

                        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
                            {tagline || "Transforming lives through education, entrepreneurship, and leadership development initiatives designed for Africa's youth."}
                            
                        </p>

                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section >
        </div>




    )
}

export default HeroSection



