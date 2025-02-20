import aboutimg1 from "../assets/images/aboutimg1.png"
import aboutimg2 from "../assets/images/aboutimg2.png"
import aboutimg3 from "../assets/images/aboutimg3.png"
import aboutimg4 from "../assets/images/aboutimg4.png"
const AboutUs = () => {
    return (
        <>
            <section className="bg-[#F3ECE3] py-10 px-6 text-center mt-18">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] text-lg font-bold">
                    ABOUT US
                </h2>

                <div className="text-4xl font-bold max-w-2xl sm:mx-auto">
                    <h3>Transforming Driving Education Across India</h3>
                    <p className="text-[#191818] mt-4 text-[18px] font-[400]">
                        Upride began with a simple yet powerful idea: to redefine how India learns to drive. Born from the belief
                        that every individual deserves access to safe, reliable, and empowering driver education, Upride has grown
                        into a movement that’s transforming lives across the country.
                    </p>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-6 items-center">
                    <img src={aboutimg1} alt="Driving lesson" className="w-full sm:w-[300px] sm:h-[240px] h-[450px] rounded-lg shadow-md" />
                    <img src={aboutimg2} alt="Instructor" className="w-full sm:w-[300px] sm:h-[170px] h-[299px] rounded-lg shadow-md" />
                    <img src={aboutimg4} alt="Car training" className="w-full sm:w-[300px] sm:h-[240px] h-[450px] rounded-lg shadow-md" />
                    <img src={aboutimg3} alt="Motorcycle training" className="w-full sm:w-[300px] sm:h-[170px] h-[299px] rounded-lg shadow-md" />
                </div>
            </section>

            <section className="bg-[#F3ECE3] py-10 px-6 md:px-12 text-center">
                <div className="flex flex-col md:flex-row w-full md:gap-6 lg:gap-10 px-10">
                    <div className="md:w-[40%] text-left">
                        <div className="bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent font-bold">
                            OUR STORY
                        </div>
                        <div className="text-3xl md:text-5xl font-semibold">
                            Milestones That Define Our Success
                        </div>
                    </div>
                    <div className="md:w-[60%] text-left text-lg leading-relaxed">
                        At Upride, we realized driving education in India was stuck in reverse. From unprofessional instructors to outdated methods and a lack of focus on safety, traditional driving schools were failing learners. In 2023, our founders set out to rewrite the rules of driver education. That’s how Upride was born—with a mission to make learning to drive smarter, safer, and accessible to all.
                    </div>
                </div>
            </section>

            <section className="bg-[#F3ECE3] py-12">
                {/* Timeline Item Container */}
                <div className="flex flex-col md:flex-row items-center w-full md:w-full gap-3 sm:gap-0">
                    {/* Timeline Item 1 */}
                    <div className="flex flex-col items-center w-full md:w-1/3 text-center relative">
                        {/* Traffic Light Icon */}
                        <div className="relative flex items-center justify-center w-16 h-16 bg-[#EBD5D5] rounded-full">
                            <div className="absolute top-2 w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="absolute top-6 w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="absolute bottom-3 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>

                        {/* Dashed Line */}
                        <div className="hidden md:block absolute top-1/2 right-[-25%] w-[50%] border-t-2 border-dashed border-gray-400"></div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="flex flex-col items-center w-full md:w-1/3 text-center relative">
                        {/* Traffic Light Icon */}
                        <div className="relative flex items-center justify-center w-16 h-16 bg-[#F1E1E1] rounded-full">
                            <div className="absolute top-2 w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="absolute top-6 w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="absolute bottom-3 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>

                        {/* Dashed Line */}
                        <div className="hidden md:block absolute top-1/2 right-[-25%] w-[50%] border-t-2 border-dashed border-gray-400"></div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="flex flex-col items-center w-full md:w-1/3 text-center">
                        {/* Traffic Light Icon */}
                        <div className="relative flex items-center justify-center w-16 h-16 bg-[#F1E1E1] rounded-full">
                            <div className="absolute top-2 w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="absolute top-6 w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="absolute bottom-3 w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Timeline Text Content */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-6 md:mt-0">
                    {/* Text Item 1 */}
                    <div className="flex flex-col items-center md:w-1/3 text-center">
                        <h3 className="mt-4 font-bold text-[25px] bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                            2023
                        </h3>

                        <h3 className="mt-2 font-bold text-[25px]">The Idea Takes Shape</h3>
                        <p className="text-[#1E1E1E] text-[18px] max-w-xs ">
                            Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.
                        </p>
                    </div>

                    {/* Text Item 2 */}
                    <div className="flex flex-col items-center md:w-1/3 text-center">
                        <h3 className="mt-4 font-bold text-[25px] bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                            Early 2024
                        </h3>

                        <h4 className="mt-2 font-bold text-[25px]">Upride is Born</h4>
                        <p className="text-[#1E1E1E] text-[18px] max-w-xs">
                            Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.
                        </p>
                    </div>

                    {/* Text Item 3 */}
                    <div className="flex flex-col items-center md:w-1/3 text-center">
                        <h3 className="mt-4 font-bold text-[25px] bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                            Early 2024
                        </h3>

                        <h4 className="mt-2 font-bold text-[25px]">Upride is Born</h4>
                        <p className="text-[#1E1E1E] text-[18px] max-w-xs">
                            Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default AboutUs
