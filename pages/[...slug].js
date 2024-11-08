// pages/[...slug].js
import React from 'react';
import fs from 'fs';
import path from 'path';
import WithLayout from 'components/layout/WithLayout';
import PageContent from 'components/PageContent';
import { fetchPageData } from 'helpers/fetchPageData';
import { retrieveStaticPaths } from 'helpers/pageHelpers';

const DynamicPage = ({ pageData, siteConfig, pageConfig }) => {
  if (!pageData) {
    return <div>Page not found!</div>;
  }

  return (
    <PageContent
      pageData={pageData}
      siteConfig={siteConfig}
      pageConfig={pageConfig}
    />
  );
};

export default WithLayout(DynamicPage);

export const getStaticPaths = async () => {
  const paths = await retrieveStaticPaths(fs, path);

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps({ params }) {
  const path =
    params.slug && params.slug.length > 0
      ? `/${params.slug.join('/').toLowerCase()}`
      : '/';

  //   ! with 1 offs, this could cause issues potentially. But very unlikely.
  if (path === '/home') {
    return {
      notFound: true, // Return a 404 if somehow /home is still requested
    };
  }

  return fetchPageData(path);
}
