import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../components/Cards/MediaCard";
import { TRENDING } from "../config/config";


const Trending = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`${TRENDING}${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white">
            <div className="flex flex-col justify-center items-center my-10">

                <div className="mb-5">
                    <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Trending TV shows and movies</h1>
                </div>

                <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap">

                    {content.slice(0, 16).map((singleMovie) => (

                        singleMovie.media_type === "person"
                            ?
                            <></>
                            :
                            <MediaCard movie={singleMovie} />

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Trending
