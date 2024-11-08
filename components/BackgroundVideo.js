const BackgroundVideo = ({
  videoUrl,
  videoTitle = 'Video Player',
  containerClass = 'bg-black p-8 relative',
  videoClass = 'h-96 sm:h-[400px] lg:h-[750px] pt-4 md:pt-0',
  rippleSrc = '/ripple.svg',
  rippleClass = 'rotate-180 absolute -top-4 md:-top-4 lg:-top-8 left-0 right-0 w-full',
}) => (
  <div className={containerClass}>
    <img src={rippleSrc} alt="Ripple effect" className={rippleClass} />
    <iframe
      className={videoClass}
      src={videoUrl}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

export default BackgroundVideo;
