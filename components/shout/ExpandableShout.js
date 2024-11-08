import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
dayjs.extend(relativeTime);

import parseCloudinaryImage from 'helpers/cloudinary/parseCloudinaryImage';

function ExpandableShout({
  shout,
  isExpandable = true,
  bg = 'https://res.cloudinary.com/gonation/image/upload/v1693076784/sites/thc/esmith7196_Capture_a_high-quality_photograph_of_a_rich_and_text_3ded2088-2032-4fc6-82f7-99c6feb728cc.png',
}) {
  const [expanded, setExpanded] = useState(!isExpandable);
  const [imageExpanded, setImageExpanded] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const handleImageClick = () => {
    if (isExpandable) {
      setImageExpanded(!imageExpanded);
    } else {
      setLightboxVisible(true);
    }
  };

  const linkTitle = shout?.ctas ? Object.keys(shout.ctas)[0] || '' : '';
  const linkAddress = linkTitle?.length ? shout?.ctas[linkTitle] : '';
  const linkIsUrl = linkAddress.includes('http') ? '_blank' : '';

  const renderImage = () => (
    <img
      className={`object-contain w-auto order-2 md:order-1 ${
        imageExpanded ? 'w-auto ' : 'w-auto'
      } md:my-0 md:w-auto md:max-h-[400px] lg:max-h-[550px] 2xl:max-h-[750px] xl:max-w-6xl `}
      src={parseCloudinaryImage({
        cloudinaryId: shout?.image?.image?.cloudinaryId,
        width: 800,
      })}
      alt=""
      onClick={handleImageClick}
    />
  );

  const expandedView = (
    <div className="relative md:max-w-none mx-auto flex flex-col md:flex-row items-start md:items-center ">
      <div className="relative order-2 md:order-1">{renderImage()}</div>
      <div className="md:pr-8 sm:max-w-md md:max-w-none order-1 md:order-1 mb-8 md:mb-0 md:px-8 lg:px-16">
        <p className="font-bold inline text-4xl sm:text-5xl lg:text-5xl text-white font-display leading-10">
          {shout?.title || 'Recent Shout:'} <br />
        </p>
        <p className="text-lg md:text-lg my-2 md:my-6 text-white font-bold max-w-2xl xl:max-w-3xl">
          {shout?.text}
        </p>

        <Link target={linkIsUrl} href={`${linkAddress}`}>
          {linkTitle ? (
            <button className="bg-transparent text-primary py-2 px-8 font-bold uppercase text-base mt-2  border-2 xl:text-xl hover:bg-primary hover:text-white transition-all duration-500 ease">
              {linkTitle}
            </button>
          ) : (
            ''
          )}
        </Link>
      </div>
    </div>
  );

  return (
    <div
      className={`relative p-6 md:p-0 lg:p-0 w-full lg:bg-fixed md:py-16 ${
        expanded ? 'py-12' : ''
      } relative`}
      style={{
        backgroundImage: `url(${bg === 'avatar' ? '' : bg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className=" absolute left-0 top-0 w-full h-full bg-primary bg-opacity-80 md:bg-gradient-to-r md:from-black md:via-black/60 md:to-transparent"></div>
      <p className="absolute bottom-4 right-4 text-xs md:text-sm xl:text-base italic text-white">
        Shouted {dayjs(shout?.createdAt).fromNow()}
      </p>
      {expanded ? expandedView : null}
      {lightboxVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-90 flex justify-center items-center z-50 p-12 sm:p-24 "
          onClick={() => setLightboxVisible(false)}
        >
          <div className="max-h-full flex flex-col items-center justify-center">
            {renderImage()}
            <div className="text-center text-white absolute bottom-4 max-w-sm  md:max-w-lg bg-black py-1">
              <h3 className="font-bold text-white">{shout?.title}</h3>
              <p className="text-white text-xs">{shout?.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpandableShout;
