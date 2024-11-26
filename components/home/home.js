import Image from "next/image";

export default function HomePage() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 flex items-center justify-center p-4 text-white text-2xl font-bold bg-black/50 z-10">
                When your friends think 'I'll pay you back' means 'I hope you forget!' 😂
            </div>
            <div className="absolute inset-0">
                <Image 
                    src="/forgot.png" 
                    alt="home" 
                    layout="fill" 
                    objectFit="cover" 
                    className="w-full h-full" 
                />
            </div>
        </div>
    );
}
