import React from "react";

export default function SludDes({ dataDis }) {
    console.log(dataDis);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            <div className="max-w-3xl p-12 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out hover:shadow-lg opacity-90 hover:opacity-100">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
                    {dataDis?.category}
                </h1>
                <p className="text-3xl font-semibold text-gray-800 mb-6">
                    <span className="text-indigo-500">Amount:</span> ₹{dataDis?.amount}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">{dataDis?.description}</p>
            </div>
        </div>
    );
}
