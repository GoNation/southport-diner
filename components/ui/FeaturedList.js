import React from 'react';
import Image from 'next/image';
import { BsDiamond } from 'react-icons/bs';

import { rowCalc } from 'helpers/propHandlers/itemsPerRow';

const FeaturedList = ({
  sectionContent,
  data = [],
  itemTitleClasNames,
  itemSubtitleClassNames,
  itemTextClassNames,
  alertnateTextClassNames,
  itemsPerRow = 2,
  itemsPerRowDesktop = 4,
  itemsPerRowTablet = 3,
}) => {
  const rowsInContainer = rowCalc(itemsPerRow);

  // todo we will need to integrate TW-merge with this to allow for custom classes
  const style = {
    cardSection: {
      style: `card-section flex flex-col  items-center md:flex-row  justify-between flex-wrap`,
      props: ``,
    },
    cardContainer: {
      style: `card bg-white my-8 w-full flex flex-col   items-stretch md:w-1/2 lg:w-1/4 flex-grow-1`,
      props: ``,
    },
    cardContentContainer: {
      style: 'px-4',
    },
    nameContainer: {
      style: `name-container  mb-4 mt-4`,
      props: ``,
    },
    titleVariantContainer: {
      style: `title-container flex justify-between items-center w-[280px] h-[25px]`,
      props: ``,
    },
    cardTitle: {
      style: `card-title text-dark text-2xl lg:text-3xl tracking-widest text-black font-bold `,
      props: ``,
    },
    variant: {
      style: `variant text-lg lg:text-xl text-primary font-body`,
      props: ``,
    },
    cardDesc: {
      style: `card-desc text-dark text-base lg:text-sm text-left`,
      props: ``,
    },
    cardDescTwoContainer: {
      style: `card-desc-two-container mb-4 text-dark  text-center lg:text-sm`,
      props: ``,
    },
    cardDescTwo: {
      style: `card-desc-two text-dark text-left font-body leading-8`,
      props: ``,
    },
    cardDescTheeContainer: {
      style: `card-desc-three-container text-dark`,
      props: ``,
    },
    cardDescThree: {
      style: `card-desc-three text-dark`,
      props: ``,
    },
  };

  const getIcon = idx => {
    const iconStyle = 'w-64 h-64 md:w-24 md:h-24 xl:w-32 xl:h-32';
    if (idx < 1) {
      return <img src="/cake.svg" alt="" className={iconStyle} />;
    } else {
      return <img src="/steak.svg" alt="" className={iconStyle} />;
    }
  };

  const cardSection = style.cardSection.style;
  const cardContainer = style.cardContainer.style;
  const nameContainer = style.nameContainer.style;
  const titleVariantContainer = style.titleVariantContainer.style;
  const cardContentContainer = style.cardContentContainer.style;
  const cardTitle = style.cardTitle.style;
  const variant = style.variant.style;
  const cardDesc = style.cardDesc.style;
  const cardDescTwoContainer = style.cardDescTwoContainer.style;
  const cardDesctwo = style.cardDescTwo.style;
  const cardDescTheeContainer = style.cardDescTheeContainer.style;
  const cardDescThree = style.cardDescThree.style;
  return (
    <div className={cardSection}>
      {data.map((item, index) => (
        <>
          <div className={cardContainer} key={item.title}>
            <Image
              src={item.imageUrl}
              width={300}
              height={300}
              className="object-cover h-full w-full subtle-shadow"
              alt={'featured photo'}
            />
            <div className={cardContentContainer}>
              <div className={nameContainer}>
                <div className={titleVariantContainer}>
                  <h2 className={cardTitle}>{item.title}</h2>
                  <span className={variant}>${item.subtitle}</span>
                </div>
                <p className={cardDesc}>{item.firstBody}</p>
              </div>
              <div className={cardDescTwoContainer}>
                <p className={cardDesctwo}>{item.secondBody}</p>
              </div>
              <div className={cardDescTheeContainer}>
                <p className={cardDescThree}>{item.thirdBody}</p>
              </div>
            </div>
          </div>
          {index < data.length - 1 ? getIcon(index) : ''}
        </>
      ))}
    </div>
  );
};

export default FeaturedList;
