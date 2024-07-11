import React from "react";

const VideoPlayer = ({ playlistId }) => {
  return (
    <div className="rounded-lg">
      <iframe
        width="300"
        height="250"
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Playlist"
        className="rounded-2xl"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
