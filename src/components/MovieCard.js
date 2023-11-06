import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {
return (
    <div className="w-40 pr-2">
        <img alt="movie_image"
        src={IMG_CDN + posterPath}
        />
    </div>
)
}
export default MovieCard;