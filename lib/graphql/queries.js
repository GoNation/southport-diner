// lib/graphql/queries.js

import { gql } from 'graphql-request';

export const GET_PAGES_BY_BUSINESS_ID = gql`
  query ListPagesByBusiness($businessId: String!) {
    listPagesByBusiness(businessId: $businessId) {
      id
      businessId
      name
      path
      seoPageTitle
      pageDescription
      hidePageHero
      navOrder
      navHidden
      fetchingStrategy
      dataTypes {
        stories
        shout
        poweredImages
        about
        gallery
        events
        menu
      }
      pageComponents {
        id
        componentName
        identifier
        config
      }
    }
  }
`;
