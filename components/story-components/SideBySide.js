import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Body from '../ui/Body';
import Title from '../ui/common/Title';
import CTA from '../ui/CTA';
// import line from '../../assets/line.png';
// import lineAlt from '../../assets/line_alt.png';

const SideBySide = ({ story, noBody }) => {
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  return (
    <div className="bg-primary py-10 px-4 md:py-24 ">
      <div className="mb-10 max-w-5xl m-auto">
        {/* <Image src={lineAlt} alt="line here" /> */}
      </div>
      <Fade top>
        <div className="flex items-start md:items-center max-w-5xl m-auto flex-col md:flex-row justify-center">
          <div className={`mb-4 md:mb-0 text-left md:w-2/5 `}>
            <Title>{story.title}</Title>
          </div>
          <div className={`md:w-3/5 md:p-4 max-w-md font-display`}>
            {noBody ? (
              ''
            ) : (
              <>
                <Body body={story.body} />
                <div className="mt-9"></div>
              </>
            )}

            <CTA url={`${linkAddress}`}>{linkTitle}</CTA>
          </div>
        </div>
      </Fade>
      <div className="mt-12   max-w-5xl m-auto">
        <Image src={lineAlt} alt="line here" className="rotate-180" />
      </div>
    </div>
  );
};

export default SideBySide;
