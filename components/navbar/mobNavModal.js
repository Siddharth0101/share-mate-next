import Link from "next/link";

export default function MobNavModal({toggleMenu}) {
    return <div className="flex justify-end mt-10">
      <div className="w-80 h-56 shadow-2xl rounded-lg bg-gray-900 outline outline-gray-300">
        <ul className="text-center">
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1">
                <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><Link href="/track"  onClick={toggleMenu}>Track</Link></li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><Link href="/suggest" onClick={toggleMenu}>Suggest</Link></li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><Link href="/support" onClick={toggleMenu}>Support</Link></li>
            <li className="font-bold text-xl p-1 text-white outline outline-gray-300 outline-1"><Link href="/login"  onClick={toggleMenu}>Login</Link></li>
            <li className="font-bold text-xl p-1 text-white"><Link href="/register">Register</Link></li>
        </ul>
      </div>
    </div>
}