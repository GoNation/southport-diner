// pages/index.js
import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import PageContent from 'components/PageContent';
import { fetchPageData } from 'helpers/fetchPageData';

const HomePage = ({ pageData, siteConfig, pageConfig }) => {
  return (
    <PageContent
      pageData={pageData}
      siteConfig={siteConfig}
      pageConfig={pageConfig}
    />
  );
};

export default WithLayout(HomePage);

export async function getStaticProps() {
  const path = '/';
  return fetchPageData(path);
}
