import './App.css';

import axios from 'axios';


const App = () => {
  
  var token = "INSERT_API_KEY";
  let ethereumGasPrices = [];
  let bitcoinGasPrices = [];

  async function fetchData() {  
    
    //define the value pairs you want to lookup, see here: https://blockdaemon.com/documentation/ubiquity-api/specialized-apis/gas-fee-estimation-api/#:~:text=ethereum/mainnet-,Supported%20Protocols%20and%20Networks,-Here%20is%20a 
    let parameters = [  
        {id: 1, value: "ethereum/mainnet", label: "Ethereum" },
        {id: 2, value: "bitcoin/mainnet", label: "Bitcoin" },
    ]; 
    
    for (var i = 0; i < parameters.length; i++) { //loop the parameters array and fetch the necessary data
      console.log("Fetching ",parameters[i].label," gas prices, please wait...")

      let response = await axios({        
        method: "get",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "Application/json",          
          },          
        url: `https://svc.blockdaemon.com/universal/v1/${parameters[i].value}/tx/estimate_fee?apiKey=INSERT_API_KEY`,
      })
      
      if(parameters[i].label === "Ethereum") { //push the correct data to the different arrays
        ethereumGasPrices.push(response.data.estimated_fees);
        console.log("Fetched Ethereum gas prices");
      } else {
        bitcoinGasPrices.push(response.data.estimated_fees);
        console.log("Fetched Bitcoin gas prices");
      }
    }
  }

  function showGasPrices() {
    console.log("Ethereum: ",ethereumGasPrices[0].fast,ethereumGasPrices[0].medium,ethereumGasPrices[0].slow);
    console.log("Bitcoin: ",bitcoinGasPrices[0].fast,bitcoinGasPrices[0].medium, bitcoinGasPrices[0].slow);
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>Fetch data</button>
        <button onClick={showGasPrices}>Console log gas prices</button>
      </header>
    </div>
  );
}

export default App;