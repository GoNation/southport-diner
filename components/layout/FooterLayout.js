import Footer from './footer';
import FixedFooter from './FixedFooter';
import BenjaminFooter from './BenjaminFooter';
import MinimalFooter from './MinimalFooter';
const FooterLayout = ({
  aboutData,
  siteConfig,
  navigationRoutes,
  fixedFooter = false,
  benjaminFooter = true,
  minimalFooter = false,
}) => {
  // Return Footer component with appropriate props
  if (fixedFooter) {
    return (
      <FixedFooter
        business={aboutData}
        iframeURL={siteConfig?.iframeURL}
        routes={navigationRoutes || []}
        siteConfig={siteConfig}
      />
    );
  }

  if (minimalFooter) {
    return (
      <MinimalFooter
        business={aboutData}
        iframeURL={siteConfig?.iframeURL}
        routes={navigationRoutes || []}
        siteConfig={siteConfig}
      />
    );
  }
  if (benjaminFooter) {
    return (
      <BenjaminFooter routes={navigationRoutes || []} business={aboutData} />
    );
  }
  return (
    <Footer
      business={aboutData}
      iframeURL={siteConfig?.iframeURL}
      routes={navigationRoutes || []}
      siteConfig={siteConfig}
    />
  );
};

export default FooterLayout;
