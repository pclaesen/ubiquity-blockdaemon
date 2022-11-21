# Using the Blockdaemon Ubiquity API to fetch cross-chain gas prices

Blockdaemon's Ubiquity API lets you fetch data from different blockchains easily, using a simple API call.
In this basic app, we'll use Ubiquity to easily get the gas prices (fast, medium, slow) from 4 different blockchains:

1. Bitcoin
2. Bitcoin Cash
3. Ethereum
4. Litecoin

We will fetch both the mainnet and testnet gas prices of each chain.
You can reference the gas fee API documentation [here](https://blockdaemon.com/documentation/ubiquity-api/specialized-apis/gas-fee-estimation-api/).
## Get up and running

To use this app, `git clone` the repo.
Run `npm install`, add a `.env` file in the root folder and obtain a [Blockdaemon API key](https://app.blockdaemon.com/signin/register).
Open the .env file and add the API key like so:
`REACT_APP_API_KEY=yourapikeyhere` (without " or ')
Save the .env file and run `npm start`, allow to open port 3000 if needed.
The app will now load in your browser.

## Using the app

The app usage is very simple.
First, get the data by using the `Fetch data` button.
Make sure to open the console to see the different events that are logged.
Once that's done, press the `Show gas prices` button to see the gas fees for the 4 different blockchains.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

