import { useEffect, useState } from "react";
import { fetchData } from "../../utils/constant";

const useFetchAllData = (checkData) => {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    makeApiCall();
  }, [checkData]);

  const makeApiCall = async () => {
    const data = await fetchData(checkData);
    setApiData(data);
  };

  return {apiData};
};

export default useFetchAllData;
