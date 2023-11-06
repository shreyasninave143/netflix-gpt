import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    // Fetch data from TMDB API and update store
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
                MainContainer 
                  - Video Background
                  - Video Title
                Secondary container
                  - MovieList * n
                  - Cards * n
            */}
        </div>
    )
}

export default Browse;