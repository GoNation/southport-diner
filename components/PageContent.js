// components/PageContent.js
import React from 'react';
import componentFactory from 'components/ComponentFactory';
import { allConfigs } from 'component_configurations';
import NoDataPageDisplay from './NoDataPageDisplay';

const PageContent = ({ pageData, siteConfig, pageConfig }) => {
  const { pageComponents } = pageConfig;

  return (
    <>
      {pageComponents && pageComponents?.length ? (
        pageComponents.map((component, index) => (
          <React.Fragment key={index}>
            {componentFactory(
              {
                ...component,
                type: component.componentName,
                config:
                  (component?.config?.configName &&
                    allConfigs[component.config.configName]) ||
                  component?.config ||
                  allConfigs[component.configName],
                variation: component?.variation || null,
              },
              pageData,
              siteConfig
            )}
          </React.Fragment>
        ))
      ) : (
        <>
          <NoDataPageDisplay />
        </>
      )}
    </>
  );
};

export default PageContent;
