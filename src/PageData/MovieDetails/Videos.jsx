import ReactPlayer from "react-player"

const Videos = ({ video, videoURL }) => {
    return (
        <div>
            <>

                {video === undefined ?
                    <></>
                    :

                    <div className="flex flex-col gap-5 flex-nowrap">
                        <h1 className="border-l-4 pl-2 border-yellow-500 text-slate-400 text-sm font-semibold uppercase">Videos</h1>
                        <div className="flex h-[13rem] w-[23rem]">
                            <ReactPlayer className="" url={videoURL} height="100%" />
                        </div>

                    </div>

                }

            </>
        </div>
    )
}

export default Videos
