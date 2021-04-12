import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Loading marketdata
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    if (!response.ok) return setError(true);

    setError(false);
    // console.log("UseApi data: ", response.data);

    // console.log("UseApi > Replacing data:");
    setData(response.data);
  };
  return { data, error, loading, request };
};
