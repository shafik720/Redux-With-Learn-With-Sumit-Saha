import { useGetRelatedVideoQuery } from "../../../features/api/apiSlice";
import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ id, title }) {
    const { data: video, isLoading, isError } = useGetRelatedVideoQuery({ id, title });

    let content = null;
    if (isLoading && !isError) {
        content = <RelatedVideoLoader></RelatedVideoLoader>
    }
    if (!isLoading && isError) {
        content = <Error message="some error happened"></Error>
    }
    if(!isLoading && !isError && video.length === 0){
        content = <Error message="No Video Found !"></Error>
    }
    if(!isLoading && !isError && video.length > 0){
        content = video.map(videos => <RelatedVideo key={videos.id} video={videos}></RelatedVideo>)
    }
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
