import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // when component unmounts, this will be called
        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);
    return (
        <div className="header absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img alt="logo" className="w-44"
                src={LOGO}
            />
            {user && <div className="flex p-3">
                <img alt="usericon" className="w-12 h-12"
                    // src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
                    src={user?.photoURL}
                />
                <button onClick={handleSignOut}
                    className="text-white font-bold">(Sign Out)
                </button>
            </div>}
        </div>
    )
}

export default Header;

// https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg