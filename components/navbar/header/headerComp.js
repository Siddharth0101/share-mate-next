import MobNavModal from "../mobNavModal";
import ProfileModal from "../profileModal";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo site.png"; 

export default function HeaderComp({isMenuOpen,setIsMenuOpen,isProfileOpen,setIsProfileOpen}) {
  const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen((prev) => !prev);
    };

    return (
        <div>
            <div className="bg-slate-600 p-8">
                {/* {desktop-view} */}
                <div className={`lg:flex justify-between space-x-20 font-bold text-lg text-gray-100 ${isMenuOpen ? "hidden" : "hidden"} lg:block`}>
                    <div>
                        <div className="w-24">
                            <Image src={logo} alt="Site Logo" width={200} height={200} className="rounded-3xl" unoptimized />
                        </div>
                    </div>

                    <div className="flex space-x-9 m-8 font-extrabold text-2xl">
                        <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">  
                            <Link href="/track">Track</Link>
                        </div>
                        <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">
                            <Link href="/suggest">Data</Link>
                        </div>
                        <div className="hover:underline-offset-8 hover:underline hover:text-gray-300 transition duration-300 ease-in-out">
                            <Link href="/support">Support</Link>
                        </div>
                        <div className="relative">
                            <div className="w-10 cursor-pointer">
                                <Image src="/profile.png" alt="Profile" width={40} height={40} className="rounded-3xl" unoptimized onClick={toggleProfile} />
                                {isProfileOpen && (
                                    <div className="absolute -right-8 mt-12 z-20">
                                        <ProfileModal />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* {mobile-view} */}
                <div>
                    <div className="lg:hidden flex justify-between">
                        <div className="w-24">
                            <Image src={logo} alt="Site Logo" width={96} height={96} className="rounded-3xl" unoptimized />
                        </div>
                        <div className="relative z-20">
                            <button onClick={toggleMenu}>
                                <div className="space-y-3 mt-6">
                                    <div className="w-6 h-0.5 bg-gray-300"></div>
                                    <div className="w-6 h-0.5 bg-gray-300"></div>
                                    <div className="w-6 h-0.5 bg-gray-300"></div>
                                </div>
                                {isMenuOpen && (
                                    <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute -right-7`}>
                                        <MobNavModal toggleMenu={toggleMenu} />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
