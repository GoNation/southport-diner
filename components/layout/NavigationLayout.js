import Navigation from './navigation';
import GoNationNavigation from './GoNationNavigation';
import { DefaultNavigation } from 'gonation-components';
import buildAvatar from 'helpers/general/buildAvatar';
import { transformNavigationData } from 'helpers/transformNavigationData';

const NavigationLayout = ({
  aboutData,
  siteConfig,
  pathname,
  navigationRoutes = [],
}) => {
  const logo = buildAvatar(aboutData);
  const defaultNavProps = transformNavigationData(navigationRoutes, logo);

  return <DefaultNavigation {...defaultNavProps} />;
  // Return Navigation component with appropriate props

  //   return (
  //     <GoNationNavigation
  //       business={aboutData}
  //       routes={navigationRoutes}
  //       navSettings={siteConfig?.navigationSettings}
  //     />
  //   );
};

export default NavigationLayout;

{
  /* <Navigation
  business={aboutData}
  navLayout={siteConfig?.navigationSettings?.navLayout || 'stacked'}
  navPosition={siteConfig?.navigationSettings?.navPosition || 'fixed'}
  key={pathname}
  routes={navigationRoutes || []}
  navigationSettings={siteConfig?.navigationSettings || {}}
/>; */
}
