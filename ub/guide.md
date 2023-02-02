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
The app consists of 2 functions, `fetchData()` and `SetGasPrices()`.

### fetchData()

It's important to note that Ubiquity allows you to fetch data from different chains with one API call, or command.<br />
In order to do so, we need to make sure our parameters are correct. In our app, we fetch data from 4 mainnet and 4 testnet chains.<br >
Make sure to add or delete chains as you wish. Subsequently, you'll want to modify the `useState()` and `arrays` lines as well.<br />
Check [here](https://blockdaemon.com/documentation/ubiquity-api/specialized-apis/gas-fee-estimation-api) for a full list of the supported chains.<br />

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

### SetGasPrices()

This function uses the fetched data from the arrays to update the React state:

    setBitcoinGasPricesMainnet(bitcoinMainnetGasPricesArray);
    setBitcoinGasPricesTestnet(bitcoinTestnetGasPricesArray);
    ...

It first checks if there is data present in the first array we used:

    if(bitcoinMainnetGasPricesArray.length > 0) {
        ...
    }

When `bitcoinMainnetGasPricesArray.length` returns a value greater than 0, it means the fetched data from our API call was used successfully to populate the array.
If the length of the array is 0, the app will show an alert to warn the user that he needs to fetch the data first.

## Rendering the data

    const RenderPrices =() => {
    ...

Handles the rendering of the React state array data.