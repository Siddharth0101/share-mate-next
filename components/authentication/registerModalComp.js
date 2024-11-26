"use client"
export default function RegisterModalComp({setToast,setMessage,isUserName ,setIsUserName, isEmail, setIsEmail ,isPassword ,setIsPassword ,isConfirmPassword ,setIsConfirmPassword}) {
    const userNameHandler=(e)=>{
        let value=e.target.value
        let upperCaseUserName=value.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
        setIsUserName(upperCaseUserName)
    }
    const emailHandler=(e)=>{
        let value=e.target.value.toLowerCase()
        setIsEmail(value)
    }
    const passwordHandler=(e)=>{
        let value=e.target.value
        setIsPassword(value)
    }
    const confirmPasswordHandler=(e)=>{
        let value=e.target.value
        setIsConfirmPassword(value)
    }
    const registerHandler= async (e)=>{
        e.preventDefault()
        if(isPassword!=isConfirmPassword) {
            setToast(true)
            setMessage("password do not match")
            return 
        }
        if(isPassword.length<=6) {
            setToast(true)
            setMessage("Password must be longer than 6 characters")
            return 
        }
        const data={
            userName:isUserName,
            email:isEmail,
            password:isConfirmPassword,
            returnSecureToken:true
        }
        try {
            const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=98206EE1-C8F6-4452-ABC9-FB0CF8ECABB9",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body:JSON.stringify(data)
            })
            const resData=await response.json()
            console.log(resData)
        } catch (error) {
    //         const responseData = await response.json(); 
    // console.log(responseData);
        }
        console.log(data)
        setToast(true);
        setMessage("Registration successful!");
    }
    return <div className="flex justify-center">
        <div className="lg:max-w-xl h-auto md:max-w-md  p-5 m-5  bg-gray-300  rounded-2xl  shadow-2xl ">
            <form onSubmit={registerHandler}>
                <div className="flex justify-center text-2xl text-black font-bold ">
                    Register
                </div>
                <div>
                    <div className="ml-4 text-xl text-gray-900">
                        User Name
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-900 rounded-md w-full text-xl p-1" onChange={userNameHandler} value={isUserName} required/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl text-gray-900">
                        Email
                    </div>
                    <div className="m-2">
                        <input type="email" className="bg-slate-900 rounded-md w-full text-xl p-1" onChange={emailHandler} value={isEmail} required/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl text-gray-900">
                        Password
                    </div>
                    <div className="m-2">
                        <input type="password" className="bg-slate-900 rounded-md w-full text-xl p-1" onChange={passwordHandler} value={isPassword} required/>
                    </div>
                </div>
                <div>
                    <div className="ml-4 text-xl text-gray-900">
                        Confirm Password
                    </div>
                    <div className="m-2">
                        <input type="text" className="bg-slate-900 rounded-md w-full text-xl p-1" onChange={confirmPasswordHandler} value={isConfirmPassword} required/>
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="outline bg-gray-600 hover:bg-green-800 m-1 w-[50vw] rounded-3xl text-white text-2xl p-1">Register</button>
                </div>
            </form>
        </div>
    </div>
}