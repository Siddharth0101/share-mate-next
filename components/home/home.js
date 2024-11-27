import Image from "next/image";
export default function HomePage() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 flex items-center justify-center p-4 text-white text-2xl font-bold bg-black/50 z-10">
           
            </div>
            <div className="absolute inset-0">
                <Image 
                    src="/forgot.png" 
                    alt="home" 
                    className="w-full h-full object-cover" 
                    height={5000}
                    width={10000}
                    priority
                />
            </div>
        </div>
    );
}
