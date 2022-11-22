import './App.css';
import axios from 'axios';
import { useState } from 'react';

let token = process.env.REACT_APP_API_KEY;

const App = () => {

  console.log(token)

  const [bitcoinGasPricesMainnet, setBitcoinGasPricesMainnet] = useState();
  const [bitcoinGasPricesTestnet, setBitcoinGasPricesTestnet] = useState(); 
  const [bitcoinCashGasPricesMainnet, setBitcoinCashGasPricesMainnet] = useState();
  const [bitcoinCashGasPricesTestnet, setBitcoinCashGasPricesTestnet] = useState();
  const [ethereumGasPricesMainnet, setEthereumGasPricesMainnet] = useState();
  const [ethereumGasPricesGoerli, setEthereumGasPricesGoerli] = useState();
  const [litecoinGasPricesMainnet, setLitecoinGasPricesMainnet] = useState();
  const [litecoinGasPricesTestnet, setLitecoinGasPricesTestnet] = useState();  
  
  let bitcoinMainnetGasPricesArray = [];
  let bitcoinTestnetGasPricesArray = [];
  let bitcoinCashMainnetGasPricesArray = [];
  let bitcoinCashTestnetGasPricesArray = [];
  let ethereumMainnetGasPricesArray = [];
  let ethereumGoerliGasPricesArray = [];
  let litecoinMainnetGasPricesArray = [];
  let litecoinTestnetGasPricesArray = [];
  

  async function fetchData() {  
    
    //define the value pairs you want to lookup, see here: https://blockdaemon.com/documentation/ubiquity-api/specialized-apis/gas-fee-estimation-api/#:~:text=ethereum/mainnet-,Supported%20Protocols%20and%20Networks,-Here%20is%20a 
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

    console.log("Fetching gas prices, please wait...")
    
    //loop the parameters array and fetch the necessary data
    for (var i = 0; i < parameters.length; i++) {      

      let response = await axios({        
        method: "get",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "Application/json",          
          },          
        url: `https://svc.blockdaemon.com/universal/v1/${parameters[i]}/tx/estimate_fee/`,
      });
      
      //push the data to the correct array:
      if(parameters[i] === "bitcoin/mainnet") {
          bitcoinMainnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Bitcoin mainnet gas prices");
          console.log(bitcoinMainnetGasPricesArray);        
      } else if(parameters[i] === "bitcoin/testnet") {
          bitcoinTestnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Bitcoin testnet gas prices");
          console.log(bitcoinTestnetGasPricesArray); 
      } else if(parameters[i] ==="bitcoincash/mainnet") {
          bitcoinCashMainnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Bitcoin Cash mainnet gas prices");
          console.log(bitcoinCashMainnetGasPricesArray);        
      } else if(parameters[i] === "bitcoincash/testnet") {
          bitcoinCashTestnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Bitcoin Cash testnet gas prices");
          console.log(bitcoinCashTestnetGasPricesArray);
      } else if(parameters[i] === "ethereum/mainnet") {
          ethereumMainnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Ethereum mainnet gas prices");
          console.log(ethereumMainnetGasPricesArray);
      } else if(parameters[i] === "ethereum/goerli") {
          ethereumGoerliGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Ethereum Goerli gas prices");
          console.log(ethereumGoerliGasPricesArray);
      } else if(parameters[i] === "litecoin/mainnet") {
          litecoinMainnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Litecoin mainnet gas prices");
          console.log(litecoinMainnetGasPricesArray);
      } else if(parameters[i] === "litecoin/testnet") {
          litecoinTestnetGasPricesArray.push(response.data.estimated_fees);
          console.log("Fetched Litecoin testnet gas prices");
          console.log(litecoinTestnetGasPricesArray);
      }        
    }   
  }

  function SetGasPrices() {
    console.log("Bitcoin mainnet: ",bitcoinMainnetGasPricesArray[0].slow, bitcoinMainnetGasPricesArray[0].medium, bitcoinMainnetGasPricesArray[0].fast);
    console.log("Bitcoin testnet: ",bitcoinTestnetGasPricesArray[0].slow, bitcoinTestnetGasPricesArray[0].medium, bitcoinTestnetGasPricesArray[0].fast);
    console.log("Bitcoin Cash mainnet: ",bitcoinCashMainnetGasPricesArray[0].slow, bitcoinCashMainnetGasPricesArray[0].medium, bitcoinCashMainnetGasPricesArray[0].fast);
    console.log("Bitcoin Cash testnet: ",bitcoinCashTestnetGasPricesArray[0].slow, bitcoinCashTestnetGasPricesArray[0].medium, bitcoinCashTestnetGasPricesArray[0].fast);
    console.log("Ethereum mainnet: ",ethereumMainnetGasPricesArray[0].slow, ethereumMainnetGasPricesArray[0].medium, ethereumMainnetGasPricesArray[0].fast);
    console.log("Ethereum Goerli: ",ethereumGoerliGasPricesArray[0].slow, ethereumGoerliGasPricesArray[0].medium, ethereumGoerliGasPricesArray[0].fast);
    console.log("Litecoin mainnet: ",litecoinMainnetGasPricesArray[0].slow,litecoinMainnetGasPricesArray[0].medium, litecoinMainnetGasPricesArray[0].fast);
    console.log("Litecoin testnet: ",litecoinTestnetGasPricesArray[0].slow,litecoinTestnetGasPricesArray[0].medium, litecoinTestnetGasPricesArray[0].fast);

    setBitcoinGasPricesMainnet(bitcoinMainnetGasPricesArray);
    setBitcoinGasPricesTestnet(bitcoinTestnetGasPricesArray);
    setBitcoinCashGasPricesMainnet(bitcoinCashMainnetGasPricesArray);
    setBitcoinCashGasPricesTestnet(bitcoinCashTestnetGasPricesArray);
    setEthereumGasPricesMainnet(ethereumMainnetGasPricesArray);
    setEthereumGasPricesGoerli(ethereumGoerliGasPricesArray);
    setLitecoinGasPricesMainnet(litecoinMainnetGasPricesArray);
    setLitecoinGasPricesTestnet(litecoinTestnetGasPricesArray);            
  }

  const RenderPrices =() => {    
    if (ethereumGasPricesMainnet) {          
      return(
        <>
        <div className="fees-title">
          Fees per chain (slow / medium / fast):<br/>
        </div>
        <div className="fees-detail">
          <br />
          Bitcoin mainnet: {[bitcoinGasPricesMainnet[0].slow," / ", bitcoinGasPricesMainnet[0].medium," / ", bitcoinGasPricesMainnet[0].fast]} sats<br />
          <br />
          Bitcoin testnet: {[bitcoinGasPricesTestnet[0].slow," / ", bitcoinGasPricesTestnet[0].medium," / ", bitcoinGasPricesTestnet[0].fast]} sats<br />
          <br />
          Bitcoin Cash mainnet: {[bitcoinCashGasPricesMainnet[0].slow," / ", bitcoinCashGasPricesMainnet[0].medium," / ", bitcoinCashGasPricesMainnet[0].fast]} sats<br />
          <br />
          Bitcoin Cash testnet: {[bitcoinCashGasPricesTestnet[0].slow," / ", bitcoinCashGasPricesTestnet[0].medium," / ", bitcoinCashGasPricesTestnet[0].fast]} sats<br />
          <br />
          Ethereum mainnet (max total): {[ethereumGasPricesMainnet[0].slow.max_total_fee," / ", ethereumGasPricesMainnet[0].medium.max_total_fee," / ", ethereumGasPricesMainnet[0].fast.max_total_fee]} wei<br />          
          <br />
          Ethereum Goerli (max total): {[ethereumGasPricesGoerli[0].slow.max_total_fee," / ", ethereumGasPricesGoerli[0].medium.max_total_fee," / ", ethereumGasPricesGoerli[0].fast.max_total_fee]} wei<br />          
          <br />
          Litecoin mainnet: {[litecoinGasPricesMainnet[0].slow," / ", litecoinGasPricesMainnet[0].medium," / ", litecoinGasPricesMainnet[0].fast]} LTC<br />
          <br />
          Litecoin testnet: {[litecoinGasPricesTestnet[0].slow," / ", litecoinGasPricesTestnet[0].medium," / ", litecoinGasPricesTestnet[0].fast]} LTC<br />
          <br />          
        </div>
        </>
      )
    }    
  }

  return (
    <>
      <div className="main">        
        <button onClick={fetchData}>Fetch data</button>
        <button onClick={SetGasPrices}>Show gas prices (fetch data first)</button>
        <br />
        <br />
        <RenderPrices />
      </div>
    </>
  );
}
export default App;