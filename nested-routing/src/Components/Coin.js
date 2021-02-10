import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-decoration: underline;
  margin-bottom: 15px;
`;

const Ranking = styled.span`
  font-weight: 600;
`;

const Coin = ({ id, name, symbol, rank }) => (
  <Link to={`/coins/${id}`}>
    <Container>
      <Ranking>#{rank}</Ranking> {name}/{symbol} →
    </Container>
  </Link>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};

export default Coin;
