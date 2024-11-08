// React and Next imports
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// Component imports
import PageHead from './PageHead';
import FixedCallToActions from './FixedCallToActions';

// Utility and helper imports
import buildAvatar from 'helpers/general/buildAvatar';
import ShoutModal from 'components/ui/ShoutModal';
import { ModalProvider } from 'hooks/useModal';
import { computePageData } from 'helpers/pageHelpers';

// Layout components
import MainContent from './MainContent';
import FooterLayout from './FooterLayout';
import PageHeroSection from './PageHeroSection';
import NavigationLayout from './NavigationLayout';
import buildCover from 'helpers/general/buildCover';
import GoNationQuickAction from 'components/GoNationQuickAction';
import {
  FiPhone,
  FiNavigation,
  FiGift,
  FiBookOpen,
  FiShoppingBag,
} from 'react-icons/fi';
import slugifyLower from 'helpers/printing/slugifyLower';
import getGoogleString, {
  decideMapString,
  getAppleMapsString,
} from 'helpers/printing/getGoogleString';

const retrieveIcon = routeName => {
  switch (routeName) {
    case 'call':
      return <FiPhone />;
    case 'directions':
      return <FiNavigation />;
    case 'gift-cards':
      return <FiGift />;
    case 'reservations':
      return <FiBookOpen />;
    case 'takeout':
      return <FiShoppingBag />;
    default:
      return null;
  }
};

const WithLayout = Component => {
  return function WrappedComponent(props) {
    const { pathname, asPath } = useRouter();
    const { pageData = {}, pageConfig, siteConfig, navigationRoutes } = props;

    if (!pageConfig) return null;
    const {
      poweredImagesData = null,
      aboutData,
      storyPageHeroData,
    } = props.pageData || {};

    const {
      pageTitle,
      seoPageTitle,
      pageDescription,
      customPageHero,
      hidePageHero,
      pageHeroTitle,
      visiblePageDescription,
      cloudinaryId,
    } = useMemo(
      () => computePageData(pageConfig, aboutData, pathname, poweredImagesData),
      [pageConfig, aboutData, pathname, poweredImagesData]
    );

    return (
      <ModalProvider>
        <PageHead
          title={seoPageTitle || pageTitle}
          description={pageDescription}
          avatar={buildAvatar(aboutData)}
          image={
            cloudinaryId
              ? `https://res.cloudinary.com/gonation/w_400/q_auto/f_auto/${cloudinaryId}`
              : buildCover(aboutData)
          }
          domain={pageData?.domain || null}
        />
        <NavigationLayout
          {...{ aboutData, siteConfig, pathname, navigationRoutes }}
        />
        <PageHeroSection
          {...{
            hidePageHero,
            asPath,
            customPageHero,
            poweredImagesData,
            pageHeroTitle,
            visiblePageDescription,
            pageDescription,
            aboutData,
            storyPageHeroData,
          }}
        />
        <MainContent {...{ Component, props, pageConfig }} />
        <FooterLayout {...{ aboutData, siteConfig, navigationRoutes }} />
        <ShoutModal />
        {/* <FixedCallToActions business={aboutData} /> */}
        <GoNationQuickAction
          actions={[
            ...navigationRoutes
              .filter(
                rt =>
                  !rt?.navVisibility.hidden && rt?.navVisibility?.isQuickAction
              )
              .map(rt => ({
                name: rt.name,
                icon: retrieveIcon(slugifyLower(rt.name)),
                href: rt.href || rt?.basicInfo?.path,
              })),
            {
              name: 'Call',
              icon: <FiPhone />,
              href: `tel:${aboutData?.phone}`,
            },
            {
              name: 'Directions',
              icon: <FiNavigation />,
              href: decideMapString(aboutData),
            },
          ]}
        />
      </ModalProvider>
    );
  };
};

export default WithLayout;
