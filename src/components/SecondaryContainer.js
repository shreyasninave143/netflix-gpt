import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies.popularMovies);
    if (movies === null) return;
    return (
        <div className="bg-black">
            <div className="-mt-60 relative z-10">
                {movies && <MovieList title="Now Playing" movies={movies} />}
                <MovieList title="Trending" movies={movies} />
                {popularMovies && <MovieList title="Popular" movies={popularMovies} />}
                <MovieList title="Upcoming Movies" movies={movies} />
                <MovieList title="Horror" movies={movies} />
            </div>
        </div>
    )
}
export default SecondaryContainer;