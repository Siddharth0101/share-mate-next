"use client"
import { useRouter } from "next/navigation";  
import { useState, useEffect } from "react";

export default function TrackList({ isList }) {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false); 
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleItemClick = (item) => {
        if (isMounted) {
            router.push(`/track/${item.category.toLowerCase()}`);  
        }
    };

    return (
        <div>
            <div className="p-4 bg-gray-100 rounded-md">
                {isList && isList.length > 0 ? (
                    <ul className="space-y-2">
                        {isList.map((item, index) => (
                            <li 
                                key={index} 
                                className="flex justify-between p-3 bg-white rounded shadow-sm hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleItemClick(item)}
                            >
                                <span className="font-medium text-gray-700">{item.category}</span>
                                <span className="text-gray-500">₹{item.amount}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No items to display.</p>
                )}
            </div>
        </div>
    );
}
