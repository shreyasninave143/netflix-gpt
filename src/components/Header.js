import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
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

    const handleGptSearchClick = () => {
        // Toggle GPT Search button
        dispatch(toggleGptSearchView());
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }
    return (
        <div className="header absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img alt="logo" className="w-44"
                src={LOGO}
            />
            {user && (
                <div className="flex p-3">
                    {showGptSearch && <select onChange={handleLanguageChange}
                    className="p-2 bg-gray-900 text-white m-2">
                    {
                        SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier}>{lang.name}</option>)
                    }
                    </select>}
                    <button onClick={handleGptSearchClick}
                        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg">
                        GPT Search
                    </button>
                    <img alt="usericon" className="w-12 h-12"
                        // src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
                        src={user?.photoURL}
                    />
                    <button onClick={handleSignOut}
                        className="text-white font-bold">(Sign Out)
                    </button>
                </div>
            )}
        </div>
    )
}
export default Header;