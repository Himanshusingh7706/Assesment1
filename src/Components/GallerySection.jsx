import Gallery from "../assets/images/GalleryFrame.png";

export default function GallerySection() {
    return (
        <>
            {/* Gallery Intro Section */}
            <section className="bg-[#F2EAEA] py-12 sm:text-center text-start px-4 md:px-8">
                <div className=" sm:max-w-4xl mx-auto">
                    {/* Heading */}
                    <h3 className="bg-gradient-to-r from-[#FF5757] via-[#FFBFB2] to-[#FF5757] bg-clip-text text-transparent text-[28px] font-bold uppercase">
                        Our Gallery
                    </h3>

                    <h2 className="text-2xl md:text-[46px] font-bold text-[#1E1E1E] mt-2">
                        Moments That Drive Us Forward
                    </h2>

                    {/* Description */}
                    <p className="text-[22px] mt-4 sm:px-2 md:px-6 gap-[7px] text-[#1E1E1E]">
                        Take a glimpse into our journey! From empowering first-time drivers to celebrating
                        milestones, our gallery captures the essence of what we do.
                    </p>
                    <p className="text-[22px] mt-4 sm:px-2 md:px-6 gap-[7px] text-[#1E1E1E]">
                        Each photo tells a story of growth, confidence, and success—because at Upride, every
                        moment on the road is a moment to celebrate.
                    </p>

                    {/* Instagram Button */}
                    <div className="mt-6">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-[16px] inline-block px-6 py-3 border border-red-400 text-[#FF5757] font-semibold rounded-full 
                            hover:bg-red-400 hover:text-white transition duration-300"
                        >
                            Visit Our Instagram
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery Image Section */}
            <section className="bg-[#F2EAEA] px-4 md:px-10 py-12 ">
                <div className=" mx-auto">
                    <img src={Gallery} alt="Gallery" className="w-full rounded-lg shadow-lg" />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 bg-[#F2EAEA] md:px-10 sm:py-12 py-6">
                <div className=" mx-auto bg-[#F2ECEC] rounded-lg  shadow-lg md:p-6 p-1">
                    <h2 className="md:text-4xl text-3xl text-[#000000] font-bold  p-4 sm:text-center mb-4">Frequently Asked Questions</h2>
                    <ul className="space-y-2">
                        <li className="last:border-none">
                            <button className="w-full flex lg:text-[25px] text-[16px] justify-between items-center p-4 text-left font-semibold hover:bg-gray-200 transition-all">
                                How long does it take to learn driving?
                                <span className="text-red-500">−</span>
                            </button>
                            <p className="p-4 text-[#000000] text-[18px]">
                                The time it takes to learn depends on your experience and the course you choose. On average, it takes around 10 to 20 lessons to become a confident driver.
                            </p>
                        </li>
                        {["How does Upride work?", "How do I book a class?", "How can I pay for lessons?", "Can I reschedule my lesson?", "Can I learn with my own car?"].map((question, index) => (
                            <li key={index} className=" last:border-none lg:text-[25px] text-[16px]">
                                <button className="w-full flex justify-between items-center p-4 text-left font-semibold hover:bg-gray-200 transition-all">
                                    {question}
                                    <span className="text-gray-500">+</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
