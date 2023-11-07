import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if(!posterPath) return null;
    return (
        <div className="w-40 pr-2">
            <img alt="movie_card"
                src={IMG_CDN + posterPath}
            />
        </div>
    )
}
export default MovieCard;