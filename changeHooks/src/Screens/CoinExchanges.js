import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Exchange from "../Components/CoinExchange";
import { getCoinExchanges } from "../api";

const useGetCoinExchanges = ({ match }) => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCoinExchange = async () => {
    const { id } = match.params;
    try {
      const { data: exchanges } = await getCoinExchanges(id);
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoinExchange();
  }, []);

  return { loading, exchanges };
};

const CoinExchanges = ({ match }) => {
  const { loading, exchanges } = useGetCoinExchanges({ match });
  return loading ? (
    <Loader />
  ) : (
    exchanges
      .filter((exchange) => exchange.fiats.length > 0)
      .map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
};

export default CoinExchanges;
