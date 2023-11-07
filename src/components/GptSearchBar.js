import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addMoviesDataListGpt } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const language = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const searchMovieInTMDB = async (gptMovie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + gptMovie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleGptSearchClick = async () => {
        // Make an API call to GPT API and get Movie results
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value + " only give mw names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Commando, Golmaal";
        const gptMovieResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        // HW: Handle error
        if (!gptMovieResult.choices) {
            return <h1>Movies not found</h1>
        }
        // Array of movies - ['Hera Pheri', ' Andaz Apna Apna', ' Golmaal: Fun Unlimited', ' Welcome', ' 3 Idiots']
        const moviesListByGpt = gptMovieResult?.choices[0]?.message?.content.split(",");

        // Fetch movies data from TMDB database - returns array of promises
        const arrOfPromises = moviesListByGpt.map(gptMovie => searchMovieInTMDB(gptMovie));
        const moviesDataByGpt = await Promise.all(arrOfPromises);
        dispatch(addMoviesDataListGpt({ moviesListGpt: moviesListByGpt, moviesDataGpt: moviesDataByGpt }));
    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="bg-black w-1/2 grid grid-cols-12">
                <input
                    ref={searchText}
                    placeholder={lang[language].gptSearchPlaceholder}
                    type="text"
                    className="p-4 m-4 border-black col-span-9" />
                <button onClick={handleGptSearchClick}
                    className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3"
                >
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
}
export default GptSearchBar;