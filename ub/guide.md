# Coding guide

## API key and .env file

This repo requires you to get a Blockdaemon API key in orde to use Ubiquity.<br />
Register for an API key [here](https://app.blockdaemon.com/signin/register).<br />
Add a `.env` file in the root folder and add the API key like so:<br />
`REACT_APP_API_KEY=yourapikeyhere` (without " or ')<br />

Developers can test their API key by uncommenting line 9 from the repo, to `console.log` their API key:<br />

    //console.log(token)


You can reference the full Ubiquity documentation [here](https://blockdaemon.com/documentation/ubiquity-api/universal-api/universal-api-overview/).

## Launch the app

`git clone` the repo, `npm install` dependencies and `npm start` to launch the app.

## Variables

The `App.js` file imports useState from React. The empty arrays are defined for each chain, they will hold the data after the fetching has occured.

    const [bitcoinGasPricesMainnet, setBitcoinGasPricesMainnet] = useState();
    const [bitcoinGasPricesTestnet, setBitcoinGasPricesTestnet] = useState(); 
    ...  
    
    let bitcoinMainnetGasPricesArray = [];
    let bitcoinTestnetGasPricesArray = [];
    ...

## Functions
The app consists of 2 functions, `fetchData()` and `showData()`.

### fetchData()

It's important to note that Ubiquity allows you to fetch data from different chains with one API call, or command.<br />
In order to do so, we need to make sure our parameters are correct. In our app, we fetch data from 4 mainnet and 4 testnet chains.<br >
Make sure to add or delete chains as you wish. Subsequently, you'll want to modify the `useState()` and `arrays` lines as well.<br />
Check [here](https://ubiquity.docs.blockdaemon.com/#tag/Protocols/operation/GetProtocolEndpoints) for a full list of the supported chains.<br />

    let parameters = [
      "bitcoin/mainnet",
      "bitcoin/testnet",
      "bitcoincash/mainnet",
      "bitcoincash/testnet",
      "ethereum/mainnet",
      "ethereum/goerli",
      "litecoin/mainnet",
      "litecoin/testnet"
    ];

The Ubiquity API expects a string per chain.

