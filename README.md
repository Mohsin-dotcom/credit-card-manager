## Description
Welcome to a zooplus coding challenge based on a simple credit card management which helps a customer to manage his saved credit cards and add new credit card.

The customer can already do the following activities sucessfully

- Add a new credit card
- See a list of all saved cards.

The customer wants the following features to be added,
- Deletion of a card (Not implemented yet)
- Ability to select a preferred card from a list of saved cards.( Not implemented yet)

In regards to the customer ability to add a new credit card form , The following validations exist to ensure that the customer inputs 
the right credit card data properly

- Length of credit card number should be exactly 16 numeric characters
- Account Holder name is either two(2) or more alpha-numeric characters
- Card CVV is either exactly 3 or 4 characters.


Also there are requirements from the product owner that;
- When a new card is added by a customer , that card should be his preferred card.

Also the App contains a bug that need to be fixed.
Details of the bug is described below.

- When customer enters credit card number with spaced-out numbers  Eg.  "4555 4113 5678 4566"; the card number validation fails with a "Card number is invalid" error but this entry should be a valid entry.



## Task 1 -> Performance 

The Application simulates a long running computation , when it fetches default saved cards , this is computation is required , but implemented poorly in regards to reactjs performance. Could you please fix this.


## Task 2 -> Implement new requirement

- Deletion of a card (Not implemented yet)
- Ability to select a preferred card from a list of saved cards.( Not implemented yet) 

**Note** 

There is a css class `.preferred-card` that can be applied to a card when we detect that card as a preferred card

## Task 3 -> Implement Product owner requirement

- When a new card is added by a customer , that card should be his preferred card.


## Task 4 -> Fix the bug

Spaced-out credit card number entry like "4555 4113 5678 4566" should pass the credit card number validation.



##  Environment
- Node v16+
- React v18
- yarn v1
- Typescript v4

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# credit-card-manager
