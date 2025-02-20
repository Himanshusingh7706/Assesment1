import Cargirl from "../assets/images/Cargirl.png";

export default function WhyChooseUpride() {
    return (
        <section className="bg-[#F4F4F4] py-4 ">
            {/* Heading Section */}
            <div className="flex flex-col items-center text-center mx-auto px-6 md:px-12 py-12 max-w-3xl">
                <h3 className="md:text-[32px] text-[22px] font-semibold bg-gradient-to-r from-[#FF5757] via-[#FFBFB2] to-[#FF5757] bg-clip-text text-transparent uppercase">
                    Our Speciality
                </h3>

                <h2 className="text-2xl md:text-[45px] font-bold text-[#1E1E1E]">
                    Why Choose Upride for your <br /> Driving Journey?
                </h2>
            </div>

            {/* Main Content Section */}
            <div className="mx-auto px-6 md:px-12 flex flex-col md:flex-row max-w-7xl gap-10">
                {/* Left Content */}
                <div className="md:w-[60%] space-y-6">
                    <div className="space-y-4">
                        <div className="pb-4">
                            <h4 className="text-lg  font-bold text-[#1E1E1E] flex items-center">
                                <span className=" text-[25px] text-[#1E1E1E] mr-2">—</span> GPS-Enabled Vehicles
                            </h4>
                            <p className="text-[#1E1E1E] text-[22px] mt-2 pl-6">
                                Stay safe and track your progress with our cutting-edge technology that ensures every journey is monitored and secure.
                            </p>
                        </div>
                        <div className="pb-4">
                            <h4 className="text-lg font-bold text-[#474646] flex items-center">
                                <span className="mr-2 text-[25px]">+</span> Expert Instructors
                            </h4>
                        </div>
                        <div className="pb-4">
                            <h4 className="text-lg font-bold text-[#474646] flex items-center">
                                <span className="mr-2 text-[25px]">+</span> Personalized Classes
                            </h4>
                        </div>
                        <div className="pb-4">
                            <h4 className="text-lg font-bold text-[#474646] flex items-center">
                                <span className="mr-2 text-[25px]">+</span> Why Wait
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-[40%] w-full flex justify-center">
                    <img src={Cargirl} alt="Driving Journey" className="w-full max-w-sm md:max-w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
}
