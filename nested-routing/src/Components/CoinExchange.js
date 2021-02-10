import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.p`
  font-weight: 600;
`;

const CoinExchange = ({ name, fiats }) => (
  <Container>
    <Label>{name}</Label>
    <p>
      Pay On{" "}
      {fiats.map((fiat) => (
        <span key={fiat.name}>{fiat.name} </span>
      ))}
    </p>
  </Container>
);

CoinExchange.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ),
};

export default CoinExchange;
