/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
