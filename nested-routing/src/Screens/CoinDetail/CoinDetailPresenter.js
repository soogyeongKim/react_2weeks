import React from "react";

import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinDetail from "../../Components/CoinDetail";

const CoinDetailPresenter = ({ coinDetail, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <CoinDetail key={coinDetail.id} {...coinDetail}></CoinDetail>
  );

CoinDetailPresenter.propTypes = {
  coinDetail: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CoinDetailPresenter;
