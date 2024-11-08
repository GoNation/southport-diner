import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts } from './fonts';

import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { ImageComponent } from './components/ImageComponent';
import { ContentComponent } from './components/ContentComponent';
import { SideBySideImage } from './components/SideBySideImage';
import { ContentBanner } from './components/ContentBanner';
import { StackedNavigation } from './components/StackedNavigation';
import { ListNavItems } from './components/ListNavItems';
import { Dropdown } from './components/Dropdown';
import { Button } from './components/Button';
import { GlobalStyles } from './global';
import { TitleWithBorder } from './components/TitleWithBorder';
import { Parallax } from './components/Parallax';
import { ListCards } from './components/ListCards';
import { Card } from './components/Card';
import { PageHero } from './components/PageHero';
import { NavItem } from './components/NavItem';
import PopUp from './components/PopUp';
import { Lightbox } from './components/LightBox';
import { ImageGrid } from './components/ImageGrid';
import { ImageBoxes } from './components/ImageBoxes';
import { Masonry } from './components/Masonry';
import { HeroShout } from './components/HeroShout';
import { AllIn } from './components/AllIn';
import { Menu } from './components/Menu';
import { MenuItem } from './components/MenuItem';
import { Price } from './components/Price';
import { PriceWithVariants } from './components/PriceWithVariants';
import { Section } from './components/Section';
import { CustomForm } from './components/CustomForm';
import { Navigation } from './components/Navigation';
import { ContactLayout } from './components/ContactLayout';
import { GoogleIframeMap } from './components/GoogleIframeMap.js';
import { MinimalHours } from './MinimalHours';
import { SocialLinks } from './SocialLinks';
import { Phone } from './Phone';
import { Address } from './Address';

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        ...GlobalStyles,
      },
    },
  },
  components: {
    Heading,
    Text,
    Button,
    ImageComponent,
    ContentComponent,
    SideBySideImage,
    ContentBanner,
    StackedNavigation,
    ListNavItems,
    NavItem,
    Dropdown,
    TitleWithBorder,
    Parallax,
    ListCards,
    Card,
    PageHero,
    PopUp,
    Lightbox,
    ImageGrid,
    ImageBoxes,
    Masonry,
    HeroShout,
    AllIn,
    Menu,
    MenuItem,
    Price,
    PriceWithVariants,
    Section,
    CustomForm,
    Navigation,
    MinimalHours,
    GoogleIframeMap,
    ContactLayout,
    SocialLinks,
    Phone,
    Address,
  },
});

export default theme;
