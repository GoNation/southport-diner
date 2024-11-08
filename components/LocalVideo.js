import React from 'react';

// This is a functional component that receives a video source as a prop
const LocalVideo = ({ src }) => {
  return (
    // The video tag is used to embed video content
    <video
      width="100%" // The width of the video player
      height="100%" // The height of the video player
      style={{ objectFit: 'cover', height: '100vh' }} // CSS styles applied to the video player
      muted // The video will start playing muted
      autoPlay // The video will start playing as soon as it is ready
      loop // The video will start over again, every time it is finished
      playsInline // Allows the video to be played "inline", that is within the element's playback area
    >
      <source src={src} type="video/mp4" /> // The source of the video file Your
      browser does not support the video tag. // This text displays if the
      browser does not support the video tag
    </video>
  );
};

export default LocalVideo; // Exporting the LocalVideo component
