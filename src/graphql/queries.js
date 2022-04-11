/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTradingCard = /* GraphQL */ `
  query GetTradingCard($id: ID!) {
    getTradingCard(id: $id) {
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
export const listTradingCards = /* GraphQL */ `
  query ListTradingCards(
    $filter: ModelTradingCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradingCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTradingCards = /* GraphQL */ `
  query SyncTradingCards(
    $filter: ModelTradingCardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTradingCards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
