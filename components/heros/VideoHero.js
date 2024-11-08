import { useState } from 'react';
import { FaRegLemon } from 'react-icons/fa';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OpacityBG from '../ui/OpacityBG';
import ShoutCard from '../shout/ShoutCard';
import Title from 'components/ui/Title';
import YouTubeEmbed from 'components/YouTubeEmbed';

export const VideoHero = ({
  imgClassList = 'h-screen md:h-[900px] lg:h-[800px] xl:h-[850px]',
  imageWrapperClassList = '',
  interval = 6000,
  transitionTime = 3000,
  story,
  shout,
  showLogo = false,
  business,
  video = '',
  border = '',
}) => {
  const [displayShoutOverlay, setDisplayShoutOverlay] = useState(false);
  const defaultImageStyle = 'object-cover flex ';
  const media = story?.media;
  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <span className="text-white render-icon px-2">
          <img className="max-w-[25px]" src="/svg.svg" alt="Lemon" />
        </span>
      );
    }
    return (
      <span className="text-white render-icon px-2">
        <FaRegLemon></FaRegLemon>
      </span>
    );
  };

  return (
    <div className={`relative ${border}`} id="video-container">
      <OpacityBG strength="opacity-10"></OpacityBG>
      {video.length ? (
        <div className="relative z-0 md:mt-0">
          <YouTubeEmbed videoId={'YTEv2p6zI20'} />
          <div className="absolute top-0 bottom-0 w-full h-full flex z-0 justify-center items-center text-white text-3xl md:text-6xl lg:text-8xl uppercase text-center">
            <div className="h-full flex justify-center items-center">
              {showLogo ? (
                <div className="w-fit m-auto p-4 bg-opacity-40 bg-white">
                  <img
                    src="/market-hospitality-group.png"
                    alt={business.name}
                  />
                </div>
              ) : (
                ''
              )}
              <p className={'font-body uppercase'}>{/* {story.title} */}</p>
            </div>
          </div>
        </div>
      ) : (
        <Carousel
          animationHandler="fade"
          autoPlay={true}
          infiniteLoop={true}
          interval={interval}
          transitionTime={transitionTime}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          swipeable={false}
          showIndicators={false}
        >
          {media.map(({ cloudinaryId, name, description }) => (
            <img
              key={cloudinaryId}
              alt={name || description}
              className={`${defaultImageStyle} ${imgClassList}`}
              layout="fill"
              // width={1900}
              // height={800}
              // width={800}
              // height={800}
              src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
            />
          ))}
        </Carousel>
      )}

      {/* {shout ? <Shout data={shout}></Shout> : ''} */}

      <div className="absolute h-full top-24 md:top-0 bottom-0 w-full flex flex-col md:flex-row z-20  md:justify-center pr-12   justify-end  p-4">
        <div className="lg:absolute lg:left-2 lg:bottom-2 z-20">
          {shout ? (
            <ShoutCard
              displayShoutOverlay={displayShoutOverlay}
              setDisplayShoutOverlay={setDisplayShoutOverlay}
              data={shout}
              business={business}
            />
          ) : (
            ''
          )}
        </div>

        <div className="  left-0 top-0 w-full h-full flex -z-10 justify-center items-center md:pt-24 lg:pt-0 lg:items-end lg:justify-center ">
          {showLogo ? <img className="max-w-[200px]" src={`/logo.png`} /> : ''}
          {story?.title?.length ? (
            <Title
              size={`text-7xl mt-4 normal-case text-white font-display !uppercase text-shadow mb-32`}
              center={true}
            >
              {story.title}
            </Title>
          ) : (
            ''
          )}
        </div>
      </div>
      <OpacityBG strength="opacity-10"></OpacityBG>
    </div>
  );
};
