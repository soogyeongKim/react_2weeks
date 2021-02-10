import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const MarketsPresenter = ({ loading, markets }) =>
  loading ? (
    <Loader />
  ) : (
    markets.map((market, index) => (
      <Market key={market.exchange_id + index} {...market} />
    ))
  );

MarketsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_id: PropTypes.string.isRequired,
      exchange_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MarketsPresenter;
