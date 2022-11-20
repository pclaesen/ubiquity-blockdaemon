import './App.css';
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [ethereumGasPrices, setEthereumGasPrices] = useState();
  const [bitcoinGasPrices, setBitcoinGasPrices] = useState();
  
  let token = process.env.REACT_APP_BD_API;
  let ethereumGasPricesArray = [];
  let bitcoinGasPricesArray = [];

  async function fetchData() {  
    
    //define the value pairs you want to lookup, see here: https://blockdaemon.com/documentation/ubiquity-api/specialized-apis/gas-fee-estimation-api/#:~:text=ethereum/mainnet-,Supported%20Protocols%20and%20Networks,-Here%20is%20a 
    let parameters = ["ethereum/mainnet","bitcoin/mainnet"];

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
      
      //push the correct data to the different arrays:
      if(parameters[i] === "ethereum/mainnet") {
        ethereumGasPricesArray.push(response.data.estimated_fees);
        console.log("Fetched Ethereum gas prices");       
      } else {
        bitcoinGasPricesArray.push(response.data.estimated_fees);
        console.log("Fetched Bitcoin gas prices");        
      }      
    }   
  }

  function SetGasPrices() {
    console.log("Ethereum: ",ethereumGasPricesArray[0].fast,ethereumGasPricesArray[0].medium,ethereumGasPricesArray[0].slow);
    console.log("Bitcoin: ",bitcoinGasPricesArray[0].fast,bitcoinGasPricesArray[0].medium, bitcoinGasPricesArray[0].slow);
    setEthereumGasPrices(ethereumGasPricesArray);
    setBitcoinGasPrices(bitcoinGasPricesArray);        
  }

  const RenderPrices =() => {    
    if (ethereumGasPrices) {          
      return(
        <div className='prices'>
          Ethereum max total fee:<br />
          {ethereumGasPrices[0].fast.max_total_fee}<br />
          <br />
          Bitcoin max fee:<br />
          {bitcoinGasPrices[0].fast}
        </div>
      )
    }    
  }

  return (
    <>
      <div className="main">        
          <button onClick={fetchData}>Fetch data</button>
          <button onClick={SetGasPrices}>Show gas prices (fetch data first)</button>
          <RenderPrices />
      </div>
    </>
  );
}
export default App;