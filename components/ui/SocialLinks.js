import React, { useState } from 'react';
import {
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsFacebook,
} from 'react-icons/bs';
import { Link, Text, useTheme } from '@chakra-ui/react';
import { sanitizeUrl } from 'helpers';

const SocialLinks = ({ links, withHandles, className, large, size, fill }) => {
  const businessHasLinks = links && Object.values(links).some(link => link);
  if (!businessHasLinks) return null;
  const theme = useTheme();
  const primaryColor = theme.colors.primary;
  const icoSize = size || (large ? 45 : 20);
  const defaultFill = fill || '#ffffff';
  const hoverFill = primaryColor;

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialMedia = [
    { name: 'Facebook', icon: BsFacebook, url: links.facebook },
    { name: 'Instagram', icon: BsInstagram, url: links.instagram },
    { name: 'LinkedIn', icon: BsLinkedin, url: links.linkedin },
    { name: 'YouTube', icon: BsYoutube, url: links.youtube },
    { name: 'Twitter', icon: BsTwitter, url: links.twitter },
    { name: 'Pinterest', icon: BsPinterest, url: links.pinterest },
  ];

  const txt = val => {
    if (withHandles) {
      return <Text ml={2}>{val}</Text>;
    }
    return null;
  };

  const styles = {
    link: {
      mr: 3,
      my: { md: 0, lg: 2 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: hoveredIcon ? 'underline' : 'none',
    },
  };

  return (
    <>
      {socialMedia.map((media, index) => {
        if (!media.url) return null;
        const IconComponent = media.icon;

        return (
          <Link
            key={index}
            href={sanitizeUrl(media.url, media.name)}
            target="_blank"
            rel="noreferrer"
            className={className}
            sx={styles.link}
            onMouseEnter={() => setHoveredIcon(media.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <IconComponent
              fill={hoveredIcon === media.name ? hoverFill : defaultFill}
              size={icoSize}
            />
            {txt(media.name)}
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
