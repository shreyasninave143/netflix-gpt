import { BG_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div className="bg-black relative -z-20">
            <div className="absolute -z-10 w-full">
                <img
                    src={BG_IMG_URL}
                    alt="logo"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )

}
export default GptSearch;