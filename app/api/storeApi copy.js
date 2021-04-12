import React from 'react';
import {View, StyleSheet} from 'react-native'

function storeApi(props) {

  const [coinID, setCoinID] = useState([]);
  const [coinMarket, setCoinMarket] = useState([]);
  
  useEffect(() => {
    loadCoinIDData();
    loadCoinMarketData();
  }, []);

  //Loading coin ID data
  const loadCoinIDData = async () => {
    const response = await coinIDData.getCoinIDData();
    setCoinID(response.data);
  };

  var coinName = "Inte fått värde";

  for (let i = 0; i < coinID.length; i++) {
    if (
      userInputCoinID === coinID[i].id ||
      userInputCoinID === coinID[i].symbol
    ) {
      coinExists = true;
      console.log(
        "Name: " + coinID[i].id + " " + "Ticker: " + coinID[i].symbol
      );
      coinName = coinID[i].id;
      break;
    }
  }


    //Loading marketdata
    const loadCoinMarketData = async () => {
      const marketResponse = await coinMarketData.getCoinMarketData(coinName);
      setCoinMarket(marketResponse.data);
    };
  };


return(
);
}


export default storeApi