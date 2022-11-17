import logo from './logo.svg';
import './App.css';

import React from 'react';
import axios from 'axios';


const App = () => {
  

  var token = "WwDng-70BqNijzwDLk3p-bOnlfyN3FXmTBbifjea3wBAE8jy"

  // async function fetchData() {
  //   let dataFetched = await axios({
  //     method: "get",
  //     url: `https://svc.blockdaemon.com/universal/v1/ethereum/mainnet/`,
  //     headers: {
  //       "Access-Control-Allow-Origin" : "*",
  //       "Content-type": "Application/json",
  //       "Authorization": `Bearer ${token}`
  //       },
           
  //     })
  //   console.log(dataFetched);  
  // }

  async function fetchData() {

    const parameters = {
      "protocol" : {
        "ethereum",
          
        "algorand"
      },
      "network:" mainnet"
    }
    
    let response = await axios({
      method: "get",
      url: `https://svc.blockdaemon.com/universal/v1/${parameters}?apiKey=WwDng-70BqNijzwDLk3p-bOnlfyN3FXmTBbifjea3wBAE8jy`,
      // headers: {
      //   "Access-Control-Allow-Origin" : "*",
      //   "Content-type": "Application/json",
      //   "Authorization": `Bearer ${token}`
      //   },
           
      })
      console.log(response.data.estimated_fees)
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>Fetch data</button>
      </header>
    </div>
  );
}

export default App;
