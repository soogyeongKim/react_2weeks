import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Price from "../Components/Price";
import { getPrices } from "../api";

const useGetPrices = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPrice = async () => {
    try {
      const { data: prices } = await getPrices();
      setPrices(prices);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPrice();
  }, []);
  return { loading, prices };
};

const Prices = () => {
  const { loading, prices } = useGetPrices();
  return loading ? (
    <Loader />
  ) : (
    prices.map((price) => <Price key={price.id} {...price} />)
  );
};

export default Prices;
