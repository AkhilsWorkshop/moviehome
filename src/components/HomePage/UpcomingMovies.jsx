import axios from "axios";
import { useEffect, useState } from "react";
import CardCorner from "./Common/CardCorner";
import CardLandscape from "./Common/CardLandscape";

const UpcomingMovies = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&region=US`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
        console.log(content)
    }, [])


    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div className="text-white flex flex-col gap-5 my-10 relative">

            <div className="px-4 sm:px-10">

                <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Upcoming Movies</h1>

            </div>

            <CardLandscape content={content} media_type="movie" date={date} />

            <CardCorner />

        </div>
    )
}

export default UpcomingMovies
