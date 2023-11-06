const VideoTitle = (props) => {
    const { title, overview } = props;

    return (
        <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-2 w-1/4">{overview}</p>
            <div>
                <button className="text-black bg-white px-5 py-2 text-xl font-bold m-2 rounded-lg hover:bg-opacity-80">▶ Play</button>
                <button className="text-white bg-gray-600 px-5 py-2 text-xl font-bold m-2 rounded-lg">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;