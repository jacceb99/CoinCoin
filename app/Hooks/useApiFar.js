import { useState } from "react";

export default useApi = (apiFunc, addToArray = false, coinIDData) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Loading marketdata
  const request = async (...args) => {
    setData(0);
    console.log("Innan load", coinIDData);
    setLoading(true);
    const response = apiFunc(...args).then((value) => {
      console.log(coinIDData);
      setLoading(false);
      if (!value.ok) return setError(true);
      if (addToArray) {
        coinIDData.push(value.data);
      }
      setError(false);
      console.log("Data has been succesfully called:", coinIDData);
      return coinIDData;
    });

    // if (addToArray) {
    //   var newArray = [...data, response.data[0]]; //
    //   setData(newArray);
    //   coinIDData.push(newArray);
    // } else {
    //   setData(response.data);
    // }
  };
  return { data, error, loading, request };
};
