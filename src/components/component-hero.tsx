type HeroProps = {
    title?: string;
    title2?: string;
    tagline?: string;
    isContactPage?: boolean;
    backgroundImage?: string;
    tagline2?: string;
};

const HeroSection = ({
    title,
    tagline,
    title2,
    isContactPage,
    backgroundImage,
    tagline2
}: HeroProps) => {
    return (
        <section
            className="relative w-full overflow-hidden min-h-[80vh] flex items-center justify-center"
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
                        backgroundColor: 'white'
                    }
            }
        >
            <div className={`relative container mx-auto px-4 ${backgroundImage ? 'py-20' : 'py-16 min-h-[80vh] flex items-center justify-center border-b-[#f7923e] border-b-2 bg-rose-100 '}`}>
                <div className="max-w-4xl mx-auto text-center">
                    {!backgroundImage && (
                        <div className="mb-4 inline-block px-4 py-2 bg-[#892626]/10 rounded-full">
                            <span className="text-[#892626] font-semibold tracking-wider">
                                {tagline}
                            </span>
                        </div>
                    )}

                    <h1 className={`${backgroundImage ? 'text-white' : 'text-[#892626]'} text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight`}>
                        <span className={backgroundImage ? "bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffcc]" : ""}>
                            {title || "Our Innovative"}
                        </span>{" "}
                        {isContactPage && <br />}
                        <span className={backgroundImage ? "text-white" : "text-[#f7923e]"}>{title2 || "Programs"}</span>
                    </h1>

                    <p className={`max-w-3xl mx-auto text-lg md:text-xl ${backgroundImage ? 'text-white/90' : 'text-gray-700'} mb-6 leading-relaxed`}>
                        {tagline2}
                    </p>

                </div>
            </div>


            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className={`w-8 h-8 ${backgroundImage ? "text-white" : "text-[#892626]"}`}
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