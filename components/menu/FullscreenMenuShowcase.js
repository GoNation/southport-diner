import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Section from 'components/ui/Section';
import Center from '../ui/common/Center';
import Container from 'components/ui/Container';
import OpacityBG from '../ui/OpacityBG';
import getTopLevelMenuSections from 'helpers/menu/getTopLevelMenuSections';

import OpacButton from '../ui/common/OpacButton';

const FullscreenMenuShowcase = ({
  frame = false,
  classList = '',
  menu,
  story,
}) => {
  const { cloudinaryId, description } = story.media[0];
  const topLevelMenuSections = getTopLevelMenuSections(menu);
  return (
    <div
      className="min-h-screen w-full bg-center bg-cover lg:bg-fixed relative"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId})`,
      }}
    >
      <OpacityBG></OpacityBG>
      <Section bg="white" small>
        <Container size="small">
          <div className="relative">
            <Center>
              <div className="absolute top-0 z-0 hidden md:block">
                {/* <Image className="" src={border} alt="border"></Image> */}
              </div>
              <div className="md:py-16 md:px-6 relative z-10">
                {story.title ? (
                  <h3 className="text-4xl text-center md:text-6xl text-white mb-4">
                    {story.title}
                  </h3>
                ) : (
                  'Our Menus'
                )}

                {topLevelMenuSections.map(itm => (
                  <div className="pb-2" key={itm._id}>
                    <Link href={'/menus'}>
                      <a className="text-xs md:text-sm text-white font-body uppercase">
                        <OpacButton>
                          <span className="uppercase">{itm.name}</span>
                        </OpacButton>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </Center>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FullscreenMenuShowcase;
