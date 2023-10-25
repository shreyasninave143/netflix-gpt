import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log(error);
            navigate('/error');
        });

    }
    return (
        <div className="header absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img alt="logo" className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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