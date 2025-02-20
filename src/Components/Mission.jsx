import missionImg from '../assets/images/CarImage1.png';
import visionImg from '../assets/images/MissionImage2.png';
import Frame from '../assets/images/Frame.png';

const MissionVision = () => {
    return (
        <>
            {/* Mission & Vision Section */}
            <section className="bg-[#F9F9F9] lg:py-12 py-6 px-4 sm:px-6 lg:px-12">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8 items-center">

                    {/* Mission Image */}
                    <div className="flex justify-center">
                        <img src={missionImg} alt="Mission" className="rounded-lg shadow-md w-full max-w-md md:max-w-full" />
                    </div>

                    {/* Mission Content */}
                    <div className="flex flex-col lg:space-y-4 space-y-2 text-center md:text-left">
                        <h3 className="text-[#E42525] font-bold text-[25px]">Mission</h3>
                        <h2 className="text-xl md:text-[25px] font-bold">Empowering Confident and Responsible Drivers</h2>
                        <p className="text-[#1E1E1E] text-[17px] md:text-[22px]">
                            Empower learners through innovative training techniques, expert guidance, and a commitment to road safety, ensuring every journey begins with confidence.
                        </p>
                    </div>

                    {/* Vision Content */}
                    <div className="flex flex-col lg:space-y-4 space-y-2 text-center md:text-left">
                        <h3 className="text-[#E42525] font-bold text-[25px]">Vision</h3>
                        <h2 className="text-xl md:text-[25px] font-bold">Driving Education, Reinvented for India</h2>
                        <p className="text-[#1E1E1E] text-[17px] md:text-[22px]">
                            Our dream is big: Revolutionizing driver education across India by blending technology, expertise, and a customer-first approach.
                            Starting in Bangalore, we’re creating a movement where every learner becomes a responsible, skilled, and confident driver.
                        </p>
                    </div>

                    {/* Vision Image */}
                    <div className="flex justify-center">
                        <img src={visionImg} alt="Vision" className="rounded-lg shadow-md w-full max-w-md md:max-w-full" />
                    </div>
                </div>
            </section>

            {/* Founder Perspective Section */}
            <section className=" w-full text-center bg-white py-12 px-4 sm:px-6 lg:px-10">
                <p className="bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent font-bold text-[32px]">Founder Perspective</p>
                <h2 className="text-2xl md:text-[45px] font-bold">From the Founders Wheel – The <br className="hidden md:block" /> Vision Behind Upride</h2>
                <div className="relative mt-6 flex justify-center">
                    <img src={Frame} alt="Founder Perspective" className="w-full lg:px-10 px-6 rounded-lg shadow-lg" />
                </div>
            </section>
        </>
    );
};

export default MissionVision;
