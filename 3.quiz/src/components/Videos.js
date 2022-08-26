import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  if (page === 1 && loading) return <div>Loading...</div>;

  if (error) return <div>There was an error!</div>;

  if (videos.length == 0) return <div>No data found!</div>;

  return (
    <div>
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        loader="Loading..."
        next={() => setPage(page + 8)}
      >
        {videos.map((video) => (
          <Video key={video.youtubeID} video={video} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
