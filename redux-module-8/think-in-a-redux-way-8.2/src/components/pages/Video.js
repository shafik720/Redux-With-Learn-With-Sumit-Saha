import { useParams } from "react-router";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";

export default function Video() {
    const { videoId } = useParams();
    const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

    let content = null;
    if (isLoading && !isError) {
        content = <PlayerLoader></PlayerLoader>
    }
    if (!isLoading && isError) {
        content = <Error message="some error happened"></Error>
    }
    if (!isLoading && !isError && !video.id) {
        content = <Error message="No Videos found"></Error>
    }
    if (!isLoading && !isError && video.id) {
        content = <>
            <Player link={video.link} title={video.title} />
            <Description video={video}/>
        </>
    }

    let secondContent = null;
    if (!isLoading && !isError && video.id){
        secondContent = <RelatedVideos id={video?.id} title={video?.title} />;
    }
    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {content}
                    </div>

                    {secondContent}
                </div>
            </div>
        </section>
    );
}
