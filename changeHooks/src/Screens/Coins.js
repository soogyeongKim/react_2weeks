import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Coin from "../Components/Coin";
import { getCoins } from "../api";

const useGetCoin = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCoin = async () => {
    try {
      const { data: coins } = await getCoins();
      setCoins(coins);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoin();
  }, []);

  return { loading, coins };
};

const Coins = () => {
  const { loading, coins } = useGetCoin();
  return loading ? (
    <Loader />
  ) : (
    coins
      .filter((coin) => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map((coin) => <Coin key={coin.id} {...coin} />)
  );
};

export default Coins;
