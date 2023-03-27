/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      userID
      commonID
      createdAt
      images
      categoryID
      categoryName
      locationID
      locationName
      title
      description
      updatedAt
      owner
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        commonID
        createdAt
        images
        categoryID
        categoryName
        locationID
        locationName
        title
        description
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getListingByCrearedAt = /* GraphQL */ `
  query GetListingByCrearedAt(
    $commonID: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getListingByCrearedAt(
      commonID: $commonID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        commonID
        createdAt
        images
        categoryID
        categoryName
        locationID
        locationName
        title
        description
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
