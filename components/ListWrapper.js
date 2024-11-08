// This is a React component that takes {children} which can be anything.
// At the top of the component will be the title, and subheading
// At the bottom will be the call to action button

import React from 'react';
import Link from 'next/link';

export default function ListWrapper({ children, data }) {
  const style = {
    // Entire container styles here
    storyContainer: {
      style: `story-container bg-dark py-10 px-5 text-center`,
      props: ``,
    },
    titleContainer: {
      style: `title-container  mt-8 mb-4`,
      props: ``,
    },
    title: {
      style: `title text-white text-4xl lg:text-6xl font-bold`,
      props: ``,
    },
    subTitle: {
      style: `sub-title text-2xl lg:text-4xl text-white`,
      props: ``,
    },
    ctaContainer: {
      style: `button-container text-center mt-12 mb-5`,
      props: ``,
    },
    ctaLink: {
      style: `link-button border-2 border-white py-3 px-24 cursor-pointer text-white hover:bg-white hover:text-dark duration-1000 text-2xl lg:text-4xl w-full lg:w-auto font-body`,
      props: ``,
    },
  };
  const storyContainer = style.storyContainer.style;
  const titleContainer = style.titleContainer.style;
  const title = style.title.style;
  const subTitle = style.subTitle.style;
  const ctaContainer = style.ctaContainer.style;
  const ctaLink = style.ctaLink.style;

  return (
    <div className={storyContainer}>
      <div className={titleContainer}>
        <h2 className={title}>{data.title}</h2>
        <p className={subTitle}>{data.subtitle}</p>
      </div>
      {children}
      <div className={ctaContainer}>
        <Link href={data.ctaLink}>
          <span className={ctaLink}>{data.ctaText}</span>
        </Link>
      </div>
    </div>
  );
}
