import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Link, Button } from '@chakra-ui/react';

const ParallaxContentContainer = ({ story, config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!story) return null;

  const { title, subtitle, body, links, media } = story;

  const linkTitle = Object.keys(links || {})[0];
  const linkAddress = links?.[linkTitle];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % media.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [media]);

  const getBgString = img =>
    `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${img}) center/cover no-repeat`;

  return (
    <Box {...config.container}>
      {media.map((img, index) => (
        <Box
          key={img.cloudinaryId}
          bg={[
            `${getBgString(img.cloudinaryId)}`,
            `${getBgString(img.cloudinaryId)}`,
            `${getBgString(img.cloudinaryId)}`,
            `${getBgString(img.cloudinaryId)} fixed`,
          ]}
          opacity={currentSlide === index ? 1 : 0}
          transition="opacity 1s"
          zIndex={currentSlide === index ? 1 : 0}
          {...config.image}
        />
      ))}

      <Box {...config.contentBox}>
        {title && <Heading {...config.title}>{title}</Heading>}
        {subtitle && <Heading {...config.subtitle}>{subtitle}</Heading>}
        {body && (
          <Box
            {...config.body}
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          />
        )}
        {linkTitle && (
          <Link href={linkAddress} {...config.link}>
            <Button variant={config.variant}>{linkTitle}</Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ParallaxContentContainer;
