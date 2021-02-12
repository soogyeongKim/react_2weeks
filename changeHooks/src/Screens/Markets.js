import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Market from "../Components/Market";
import { getCoinMarkets } from "../api";

const useGetMarkets = ({ match }) => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMarkets = async () => {
    const { id } = match.params;
    try {
      const { data: markets } = await getCoinMarkets(id);
      setMarkets(markets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMarkets();
  }, []);
  return { loading, markets };
};

const Markets = ({ match }) => {
  const { loading, markets } = useGetMarkets({ match });
  return loading ? (
    <Loader />
  ) : (
    markets
      .filter((market) => market.market_url)
      .map((market, index) => (
        <Market
          key={market.id || index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );
};

export default Markets;
