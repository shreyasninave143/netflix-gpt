import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="">
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="logo"
                />
            </div>
            <form className="mx-auto my-24 right-0 left-0 max-w-md absolute p-12 text-white bg-black bg-opacity-90 rounded-md">
                <h1 className="font-bold text-3xl py-4 my-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input type="text" placeholder="Email or phone number" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                {
                    isSignInForm ? (
                        <div>
                        </div>
                    ) : (
                        <div>
                            <input type="text" placeholder="First Name" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                            <input type="text" placeholder="Last Name" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                        </div>
                    )
                }
                <input type="password" placeholder="Password" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                <button className="my-2 py-3 w-full bg-red-600 rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="my-10 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix" : "Already a user"}? {isSignInForm ? "Sign Up" : "Sign In"} Now</p>
            </form>
        </div>
    )
}

export default Login;