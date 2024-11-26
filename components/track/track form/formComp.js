export default function FormComp({isEnterCategory, setIsEnterCategory,
    isEnterAmount, setIsEnterAmount, isDescription, setIsDescription}) {
        
    return (
        <div className="flex justify-center p-4">
            <div className="bg-gray-700 w-full sm:w-[80vw] md:w-[60vw] lg:w-[50vw] h-auto m-5 rounded-lg shadow-lg p-6">
                <div className="flex justify-center text-white text-lg font-semibold mb-4">
                    Add Expense
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="text"
                        placeholder="Enter category"
                        className="w-full md:w-1/2 p-3 rounded-md text-gray-800"
                        onChange={(e)=>setIsEnterCategory(e.target.value)}
                        value={isEnterCategory}
                    />
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        className="w-full md:w-1/2 p-3 rounded-md text-gray-800"
                        onChange={(e)=>setIsEnterAmount(e.target.value)}
                        value={isEnterAmount}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Description"
                        className="w-full h-24 md:h-48 p-3 rounded-md text-gray-800 resize-none"
                        onChange={(e)=>setIsDescription(e.target.value)}
                        value={isDescription}
                    />
                </div>
            </div>
        </div>
    );
}
