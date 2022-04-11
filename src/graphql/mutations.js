/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTradingCard = /* GraphQL */ `
  mutation CreateTradingCard(
    $input: CreateTradingCardInput!
    $condition: ModelTradingCardConditionInput
  ) {
    createTradingCard(input: $input, condition: $condition) {
      id
      name
      layout
      cmc
      colors
      colorIdentity
      type
      supertypes
      types
      subtypes
      rarity
      set
      setName
      text
      flavor
      artist
      number
      power
      toughness
      loyalty
      language
      gameFormat
      legality
      multiverseid
      printings
      source
      legalities {
        format
        legality
      }
      originalType
      originalText
      imageUrl
      watermark
      border
      reserved
      releaseDate
      cardId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateTradingCard = /* GraphQL */ `
  mutation UpdateTradingCard(
    $input: UpdateTradingCardInput!
    $condition: ModelTradingCardConditionInput
  ) {
    updateTradingCard(input: $input, condition: $condition) {
      id
      name
      layout
      cmc
      colors
      colorIdentity
      type
      supertypes
      types
      subtypes
      rarity
      set
      setName
      text
      flavor
      artist
      number
      power
      toughness
      loyalty
      language
      gameFormat
      legality
      multiverseid
      printings
      source
      legalities {
        format
        legality
      }
      originalType
      originalText
      imageUrl
      watermark
      border
      reserved
      releaseDate
      cardId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteTradingCard = /* GraphQL */ `
  mutation DeleteTradingCard(
    $input: DeleteTradingCardInput!
    $condition: ModelTradingCardConditionInput
  ) {
    deleteTradingCard(input: $input, condition: $condition) {
      id
      name
      layout
      cmc
      colors
      colorIdentity
      type
      supertypes
      types
      subtypes
      rarity
      set
      setName
      text
      flavor
      artist
      number
      power
      toughness
      loyalty
      language
      gameFormat
      legality
      multiverseid
      printings
      source
      legalities {
        format
        legality
      }
      originalType
      originalText
      imageUrl
      watermark
      border
      reserved
      releaseDate
      cardId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
