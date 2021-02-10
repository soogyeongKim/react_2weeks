import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinExchange from "../../Components/CoinExchange";

const ExchangePresenter = ({ loading, exchanges }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange, index) => (
      <CoinExchange key={exchange.id + index} {...exchange} />
    ))
  );

ExchangePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string.isRequired })
      ),
    })
  ).isRequired,
};

export default ExchangePresenter;
