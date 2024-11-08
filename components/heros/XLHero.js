import React from 'react';
import Image from 'next/image';
import HeroTitle from './HeroTitle';
import Button from '../ui/common/Button';
import Center from '../ui/common/Center';
import XLHeroShout from '../XLHeroShout';
const XLHero = ({ shout }) => {
  return (
    <section className="flex flex-wrap h-screen max-h-screen">
      <div className="h-4/5 w-1/2  p-[128px]">
        <Center>
          <div>
            <HeroTitle></HeroTitle>
            <p className="my-6 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi provident magni
              eaque corrupti culpa recusandae, nobis, vitae totam ducimus{' '}
            </p>
            <div className="mt-28">
              <Button>Order Online</Button>
            </div>
          </div>
        </Center>
      </div>
      <div className="h-4/5 w-1/2  flex items-end bg-primary flex items-center justify-center">
        <Image
          width={1200}
          height={1000}
          src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="max-w-3xl"
        />
      </div>
      <div className="w-1/2 h-1/5 bg-secondary pl-[128px]">
        <Center verticalOnly>
          <ul className="flex">
            <li className="mr-10">
              <a href="">Catering Menu</a>
            </li>
            <li className="mr-10">
              <a href="">Brunch Menu</a>
            </li>
            <li className="mr-10">
              <a href="">Lunch Menu</a>
            </li>
            <li className="">
              <a href="">Dinner Menu</a>
            </li>
          </ul>
        </Center>
      </div>
      <div className="w-1/2 h-1/5  ">
        <XLHeroShout shout={shout} />
      </div>
    </section>
  );
};

export default XLHero;
