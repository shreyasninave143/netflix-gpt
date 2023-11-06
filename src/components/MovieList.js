import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="">
            <h1 className="font-bold text-2xl p-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar p-4">
                <div className="flex">
                    {
                        movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieList;