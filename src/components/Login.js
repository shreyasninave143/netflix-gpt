import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, USER_AVATAR_TOM } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        // if error message present then return
        if (message) return;

        // Sign In / Sign up
        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR_TOM
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
    }

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
            <form onSubmit={(e) => (e.preventDefault())}
                className="mx-auto my-24 right-0 left-0 max-w-md absolute p-12 text-white bg-black bg-opacity-90 rounded-md">
                <h1 className="font-bold text-3xl py-4 my-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input ref={email} type="text" placeholder="Email or phone number" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                {
                    isSignInForm ? (
                        <div>
                        </div>
                    ) : (
                        <div>
                            <input ref={name} type="text" placeholder="Name" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                            {/* <input type="text" placeholder="Last Name" className="p-3 my-2 w-full bg-gray-700 rounded-lg" /> */}
                        </div>
                    )
                }
                <input ref={password} type="password" placeholder="Password" className="p-3 my-2 w-full bg-gray-700 rounded-lg" />
                <p className="text-red-500 text-sm">{errorMessage}</p>
                {
                    // errorMessage ? (
                    //     <p className="text-red-500 text-sm">{errorMessage}</p>
                    // ) : (
                    //     <p className="text-green-500 text-sm">Login Successful</p>
                    // )
                }
                <button className="my-2 py-3 w-full bg-red-600 rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="my-10 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix" : "Already a user"}? {isSignInForm ? "Sign Up" : "Sign In"} Now</p>
            </form>
        </div>
    )
}

export default Login;