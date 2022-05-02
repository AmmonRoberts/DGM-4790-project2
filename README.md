# Introduction
This is a Next.js app I built for my DGM4790 course at UVU. This app uses the MTG API found at https://magicthegathering.io/. 

# Instructions
*Access to the AWS Amplify backend is required to run locally*

You can get started by cloning this repo. 

Once you've done that, open a terminal in the repository folder and run these commands in order:

```
npm run dev
npm amplify pull
```

Then, to run the app locally, run

```
npm run dev
```


# Features
- [Searches](https://github.com/AmmonRoberts/DGM-4790-project2/blob/main/src/components/SearchResultsDialog.js) for cards and returns a list of matches
  - Searches can be filtered by card name or card type
    - Searching by name is the default
- [Cards](https://github.com/AmmonRoberts/DGM-4790-project2/blob/main/src/components/PlayingCard.js) can be saved to a shared collection
- Cards can be deleted from the collection
  - Only the "owner" of a card may delete it
- [Profile page](https://github.com/AmmonRoberts/DGM-4790-project2/blob/main/src/components/Profile.js) showing user's email address
- Uses [Next.js API](https://github.com/AmmonRoberts/DGM-4790-project2/tree/main/src/pages/api) to retrieve card data
- Stores saved cards in DynamoDB using AWS AppSync
- Uses AWS Cognito to manage authentication and authorization