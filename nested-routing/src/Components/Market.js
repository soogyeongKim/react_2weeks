import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
  text-decoration: underline;
`;

const Market = ({ exchange_name }) => <Container>{exchange_name}</Container>;

Market.propTypes = {
  exchange_id: PropTypes.string.isRequired,
  exchange_name: PropTypes.string.isRequired,
};

export default Market;
