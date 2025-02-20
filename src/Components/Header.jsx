import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import searchicon from '../assets/images/searchicon.png';
// import vector from '../assets/images/vector.png';
import vector from "../assets/images/vector.png";


const Header = () => {
    return (
        <div className="bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            {/* Left Side - Logos */}
            <div className="flex items-center space-x-3 h-[41px]">
                <img src={image1} alt="Image 1" className="h-8" />
                <img src={image2} alt="Image 2" className="h-8" />
            </div>

            {/* Center - Navigation (Hidden on mobile, shown on tablets & larger) */}
            <nav className="hidden md:flex h-auto">
                <ul className="flex justify-center space-x-6">
                    <li><a href="#" className="text-[#1E1E1E] hover:text-red-500">Services</a></li>
                    <li><a href="#" className="text-[#1E1E1E] hover:text-red-500">About Us</a></li>
                    <li><a href="#" className="text-[#1E1E1E] hover:text-red-500">Resources</a></li>
                    <li><a href="#" className="text-[#1E1E1E] hover:text-red-500">FAQs</a></li>
                    <li><a href="#" className="text-[#1E1E1E] hover:text-red-500">Contact Us</a></li>
                </ul>
            </nav>

            {/* Right Side - Icons */}
            <div className="flex items-center space-x-3 h-[41px]">
                <img src={searchicon} alt="Search" className="h-6 cursor-pointer" />
                {/* Show menu icon only on mobile */}
                <img src={vector} alt="Menu" className="h-6 cursor-pointer" />
            </div>
        </div>
    );
};

export default Header;
