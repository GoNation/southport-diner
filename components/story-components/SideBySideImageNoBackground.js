import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-reveal';
import Body from '../ui/Body';
import CTA from '../ui/CTA';
import Title from '../ui/Title';
import Blob from 'components/Blob';
import SVG from 'components/SVG';

const SideBySideImageNoBackground = ({
  story,
  reversed,
  containerClassList,
  noNegativeMargin = false,
  widthLeft = 'lg:w-7/12',
  widthRight = 'lg:w-5/12',
  largerImageHeight = false,
  leftAlign = false,
  useBlob = false,
  svg,
}) => {
  if (!story || !story.media[0]) {
    return null;
  }
  const { cloudinaryId, description } = story.media[0];
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];

  const getMargin = () => (noNegativeMargin ? '' : 'lg:mt-[-200px]');

  const renderImages = () => {
    return story.media.map(({ cloudinaryId, description = story.name }) => (
      <Fade duration={500} delay={500} key={story.name} left>
        <div className="pb-2 md:pb-3	 xl:pb-0 md:pr-2">
          {useBlob
            ? renderBlob(cloudinaryId)
            : renderDefaultImage(description, cloudinaryId)}
        </div>
      </Fade>
    ));

    function renderDefaultImage(description, cloudinaryId) {
      return (
        <div className="relative">
          <img
            alt={description}
            className={`attachment-fixed object-contain max-h-[450px] ${
              largerImageHeight && 'lg:max-h-[175px]'
            }`}
            src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
          />
        </div>
      );
    }

    function renderBlob(cloudinaryId) {
      return (
        <Blob
          backgroundImage={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
        ></Blob>
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:items-stretch  px-2 lg:items-center py-12 md:py-30 lg:py-12 relative">
      <div
        className={`${widthLeft} pb-12  lg:pb-0 h-full md:mt-12  text-center ${
          reversed ? 'md:order-5' : ''
        }`}
      >
        <div className={`flex flex-col`}>{renderImages()}</div>
      </div>
      <Fade duration={500} delay={500} right>
        <div
          className={`${widthRight} lg:min-h-[450px] relative py-12 subtle-shadow-sm px-5 font-display   rounded-md   ${
            reversed ? 'md:order-1 lg:mr-2' : 'lg:mr-4 lg:ml-2'
          }`}
        >
          <div
            className={`h-full leading-loose text-lg text-center ${
              reversed ? ' ' : ''
            }`}
          >
            <div className={`mb-3 flex flex-col items-center`}>
              <Title
                withCSSBorder={false}
                size={`text-5xl text-tertiary text-center  xl:text-5xl mt-4  w-fit     normal-case ${
                  reversed && '!border-primary '
                }`}
                center={false}
              >
                {story.title}
              </Title>
              <Title
                size={`text-2xl text-black  md:text-2xl xl:text-4xl mt-4 normal-case max-w-sm font-body text-secondary text-left${
                  reversed && ''
                }`}
                center={true}
              >
                {story.subtitle}
              </Title>
            </div>
            <div
              className={`text-dark text-base text-center font-body story-body leading-loose mb-12 text-dark max-w-lg m-auto`}
            >
              <Body body={story.body} />
            </div>
          </div>

          <div className={`flex justify-center`}>
            {linkTitle && linkAddress ? (
              <CTA classList="py-8" tertiary url={`${linkAddress}`}>
                {linkTitle}
              </CTA>
            ) : (
              ''
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SideBySideImageNoBackground;
