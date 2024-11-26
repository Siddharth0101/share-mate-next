export default function TrackList({ isList }) {
    
    return (
        <div className="p-4 bg-gray-100 rounded-md">
            {isList && isList.length > 0 ? (
                <ul className="space-y-2">
                    {isList.map((item, index) => (
                        <li 
                            key={index} 
                            className="flex justify-between p-3 bg-white rounded shadow-sm hover:bg-gray-50 cursor-pointer"
                            onClick={""}
                        >
                            <span className="font-medium text-gray-700">{item.category}</span>
                            <span className="text-gray-500">${item.amount}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No items to display.</p>
            )}
        </div>
    );
}
