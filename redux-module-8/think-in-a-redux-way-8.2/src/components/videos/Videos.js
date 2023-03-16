import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
    const {data : videos, isLoading, isError} = useGetVideosQuery();
    console.log(videos);

    let content = null ;
    if(isLoading && !isError){
        content = <VideoLoader></VideoLoader>
    }
    if(!isLoading && isError){
        content = <Error></Error>
    }
    if(!isLoading && !isError && videos.length > 0){
        content = videos.map(video=><Video video={video} key={video.id}></Video>)
    }
    return (
        <>
            {content}
        </>
    );
}
