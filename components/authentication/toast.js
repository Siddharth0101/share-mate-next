export default function Toast({message,setToast}) {
    return <div className="w-full px-8 lg:px-16">
        <div className="bg-red-600 max-w-lg mx-auto h-12 flex items-center rounded-md justify-between">
            <div className="ml-1 text-white">{message}</div>
           <button onClick={()=>setToast((prev)=>!prev)}> <div className="mr-5 text-2xl text-black font-bold">X</div></button>
        </div>
    </div>
}