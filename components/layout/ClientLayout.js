import React from 'react';
import Navigation from 'components/layout/navigation';
import Footer from 'components/layout/footer';
import config from 'content/config/config.json';
import useBusiness from 'hooks/useBusiness';
import { useRouter } from 'next/router';

export default function ClientLayout({ children, business }) {
  const router = useRouter();
  const { pathname } = router;
  if (!business?.name || !config) return null;

  return (
    <>
      <Navigation
        business={business}
        routes={config?.routes || []}
        navLayout={config?.navigationSettings?.navLayout}
        navPosition={config?.navigationSettings?.navPosition || 'fixed'}
        key={pathname}
        navigationSettings={config?.navigationSettings || {}}
      />
      {children}
      <Footer
        business={business}
        iframeURL={config?.iframeURL || null}
        routes={config?.routes || []}
      />
    </>
  );
}
