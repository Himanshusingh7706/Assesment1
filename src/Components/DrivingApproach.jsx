export default function DrivingApproach() {
    return (
        <div className="bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-12">
            <div className="bg-[#F2EAEA] p-6 sm:p-10 rounded-2xl   mx-auto shadow-xs">
                <h3 className="bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent text-xl sm:text-2xl font-bold text-center uppercase">
                    Our Unique Approach
                </h3>
                <h2 className="text-lg sm:text-4xl font-bold text-center mt-2">
                    <span className="text-[#1E1E1E]">Driving Smarter, Learning Better</span>
                </h2>
                <p className="text-center lg:pl-48 lg:pr-48 text-[#1E1E1E] text-[16px] sm:text-[22px] mt-2">
                    At Upride, we don’t just teach driving—we redefine it. Here’s how we make your learning journey exceptional.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <Card
                        icon="🚗"
                        title="Instructor On Demand"
                        description="At Upride, we don’t just teach driving—we redefine it. Here’s how we make your learning journey exceptional."
                    />
                    <Card
                        icon="🚘"
                        title="Learn on Your Own Vehicle"
                        description="Get personalized training on your car or bike to build confidence with the vehicle you’ll use daily."
                    />
                    <Card
                        icon="📚"
                        title="Comprehensive Training"
                        description="From beginner-friendly courses to refresher sessions, we cater to all skill levels."
                    />
                </div>
            </div>
        </div>
    );
}

function Card({ icon, title, description }) {
    return (
        <div className="bg-[#F0E1E1] p-6 rounded-lg  shadow-xs">
            <div className="text-red-500 text-3xl sm:text-5xl">{icon}</div>
            <h4 className="font-bold text-[#1E1E1E] text-lg sm:text-[25px] mt-2 ">{title}</h4>
            <p className="text-[#1E1E1E] text-[16px] sm:text-[20px] mt-1 font-[400] ">{description}</p>
        </div>
    );
}
