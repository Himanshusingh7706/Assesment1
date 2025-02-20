import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-300 py-6 px-3 md:px-10">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Logo & Description */}
                <div className="md:col-span-1 text-left pl-4">
                    <div className="flex  md:justify-start items-center space-x-2 h-[41px]">
                        <img src={image1} alt="Image 1" className="h-8" />
                        <img src={image2} alt="Image 2" className="h-8" />
                    </div>
                    <p className="text-[16px] text-[#5F5F5F] mt-2">
                        Learn Driving and get a driving license. Find top-rated driving schools near you.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-1 text-left pl-4">
                    <h3 className="text-[20px] text-[#1E1E1E] font-[500] mb-2">Services</h3>
                </div>
                <div className="md:col-span-1 text-left pl-4">
                    <h3 className="text-[20px] text-[#1E1E1E] font-[500]  mb-2">About Us</h3>
                    <ul className="text-[16px] text-[#5F5F5F] space-y-1">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1 text-left pl-4">
                    <h3 className="text-[20px] text-[#1E1E1E] font-[500] mb-2">Resources</h3>
                    <ul className="text-[16px] text-[#5F5F5F] space-y-1">
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div className="md:col-span-1 text-left pl-4">
                    <h3 className="text-[20px] text-[#1E1E1E] font-[500] mb-2">FAQs</h3>
                </div>
                <div className="md:col-span-1 text-left pl-4">
                    <h3 className="text-[20px] text-[#1E1E1E] font-[500] mb-2">Contact Us</h3>
                </div>

                {/* Subscription Section */}
                <div className="md:col-span-2 flex flex-col  md:items-start text-left pl-4">
                    <h3 className="text-[20px] text-[#000000] font-[500] mb-2">Join the Upride Community Today!</h3>
                    <p className="text-sm text-[#101424] mt-1">
                        Subscribe now and never miss an update on all things driving.
                    </p>

                    {/* Responsive Input & Button */}
                    <div className="flex flex-row mt-3 w-full bg-white rounded-full border border-gray-300 shadow-sm">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-2 py-2 text-[16px] text-[#57585C] outline-none bg-transparent"
                        />
                        <button className="bg-red-500 text-white px-6 py-2 text-sm rounded-full shadow-md hover:bg-red-600 transition  sm:rounded-l-none sm:rounded-r-full">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm text-[##B6B6B6] mt-6 border-t pt-4">
                <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
        </footer>
    );
}
