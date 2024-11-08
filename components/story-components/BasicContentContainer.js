import React from 'react';
import Image from 'next/image';
// import line from '../../assets/line.png';

const BasicContentContainer = ({ businessData, withBorder, title = '' }) => {
  if (withBorder) {
    return (
      <section className="py-8 px-4 bg-background">
        <div className="m-auto max-w-lg text-primary">
          {/* <Image
            className=""
            layout="responsive"
            src={line}
            alt="border line"
          ></Image> */}
          <p className="py-6 leading-8 text-white">{businessData.desc}</p>
          {/* <Image
            className="rotate-180"
            layout="responsive"
            src={line}
            alt="border line"
          ></Image> */}
        </div>
      </section>
    );
  }

  const displayPageTitle = () => {
    if (title.length) {
      return (
        <h1 className="relative  text-3xl md:text-5xl lg:text-7xl uppercase text-white mb-8">
          {title}
        </h1>
      );
    }
  };

  return (
    <section className="py-12 px-4 ">
      <div className="m-auto max-w-lg">
        {title.length ? displayPageTitle() : ''}
        <p className="font-body leading-9 text-primary">{businessData.desc}</p>
      </div>
    </section>
  );
};

export default BasicContentContainer;
