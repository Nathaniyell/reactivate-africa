type HeroProps = {
    title?: string;
    title2?: string;
    tagline?: string;
    isContactPage?: boolean;
    backgroundImage?: string;
};

const HeroSection = ({
    title,
    tagline,
    title2,
    isContactPage,
    backgroundImage,
}: HeroProps) => {
    return (
        <section
            className="relative w-full text-white overflow-hidden min-h-[80vh] flex items-center justify-center"
            style={
                backgroundImage
                    ? {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }
                    : {
                        backgroundImage: 'linear-gradient(to bottom right, #892626, #f7923e)'
                    }
            }
        >
            {/* Animated blobs - only show when no background image is provided */}
            {!backgroundImage && (
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f7923e] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#892626] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-[#f7923e] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            )}

            <div className="relative container mx-auto px-4 py-28 md:py-36">
                <div className="max-w-4xl mx-auto text-center">
                    {!backgroundImage && <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">

                        <span className="text-white font-semibold tracking-wider">
                            Inspiring Youth-led Change
                        </span>

                    </div>}


                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffcc]">
                            {title || "Our Innovative"}
                        </span>{" "}
                        {isContactPage && <br />}
                        <span className="text-white">{title2 || "Programs"}</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                        {tagline ||
                            "Transforming lives through education, entrepreneurship, and leadership development initiatives designed for Africa's youth."}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;