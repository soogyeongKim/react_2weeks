import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Exchange from "../Components/Exchange";
import { getExchanges } from "../api";

const useGetExchanges = () => {
  const [exchanges, setExchagnes] = useState([]);
  const [loading, setLoading] = useState(true);
  const getExchange = async () => {
    try {
      const { data: exchanges } = await getExchanges();
      setExchagnes(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExchange();
  }, []);
  return { loading, exchanges };
};

const Exchanges = () => {
  const { loading, exchanges } = useGetExchanges();
  return loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
};
export default Exchanges;
