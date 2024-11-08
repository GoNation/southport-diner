import Navigation from './navigation';
import GoNationNavigation from './GoNationNavigation';
const NavigationLayout = ({
  aboutData,
  siteConfig,
  pathname,
  navigationRoutes = [],
}) => {
  // Return Navigation component with appropriate props
  return (
    <GoNationNavigation
      business={aboutData}
      routes={navigationRoutes}
      navSettings={siteConfig?.navigationSettings}
    />
  );
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
