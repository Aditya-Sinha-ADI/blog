import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer class="bg-gray-950 text-white py-10 rounded-t-3xl">
            <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
                    
                    <div className="flex w-full justify-between items-center gap-8 ">
                    <div className="w-full h-16 md:h-20 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-4 font-bold">
                        <img src="trybods-logo-beige-removedbg.png" alt="trybods logo" className="w-32 h-32"/>
                        </Link>
                    </div>

                    <div class="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8">
                        <a href="#" class="text-white-400 hover:text-white transition">About</a>
                        <a href="#" class="text-white-400 hover:text-white transition">Contact</a>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-center gap-6">
                        <Link>
                        <MdEmail className="text-2xl"/>
                        </Link>
                        <Link>
                        <FaLinkedinIn className="text-2xl"/>
                        </Link>
                        <Link>
                        <FaXTwitter className="text-2xl"/>
                        </Link>
                        <Link>
                        <FaFacebook className="text-2xl"/>
                        </Link>
                        <Link>
                        <FaInstagram className="text-2xl"/>
                        </Link>
                    </div>
                    
                    </div>

                </div>

                <hr class="border-white-700 my-6" />

                <div class="text-center text-white-500 text-sm">
                    &copy; 2025 trybods. All rights reserved.
                </div>
            </div>
        </footer>
    );
  };
  
  export default Footer;