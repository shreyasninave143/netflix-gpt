import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const gpt = useSelector(store => store.gpt);
    const { moviesListGpt, moviesDataGpt } = gpt;
    if(!moviesListGpt) return null;
    return (
        <div className="bg-black mt-7 opacity-80">
            {
                moviesListGpt.map((movie, index) => <MovieList key={movie} title={movie} movies={moviesDataGpt[index]} />)
            }
        </div>
    )
}
export default GptMovieSuggestions;