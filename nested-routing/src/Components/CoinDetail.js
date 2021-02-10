import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Markets from "../Routes/Markets";
import Exchanges from "../Routes/Exchanges";
import { Link, withRouter, Route } from "react-router-dom";

const Container = styled.div``;

const Label = styled.span`
  font-weight: 600;
`;

const Text = styled.p`
  margin-bottom: 5px;
`;

const List = styled.ul`
  display: flex;
  margin: 30px 0;
`;
const Item = styled.li`
  margin-right: 20px;
  text-transform: uppercase;
  border: 2px solid #39937f;
  border-radius: 4px;
  padding: 5px;
  font-weight: 600;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#39937f" : "white")};
`;

const CoinDetail = ({
  location: { pathname },
  id,
  name,
  symbol,
  description,
  rank,
  open_source,
  proof_type,
  org_structure,
}) => (
  <Container>
    <h1>
      {name}/{symbol}
    </h1>
    <p style={{ marginBottom: "30px" }}>{description}</p>
    <Text>
      <Label>Rank:</Label> {rank}
    </Text>
    <Text>
      <Label>Open Source:</Label> {open_source ? "Yes" : "No"}
    </Text>
    <Text>
      <Label>Proof Type:</Label> {proof_type}
    </Text>
    <Text>
      <Label>Structure:</Label> {org_structure}
    </Text>
    <List>
      <Item selected={pathname.includes("markets")}>
        <Link to={`/coins/${id}/markets`}>Markets</Link>
      </Item>
      <Item selected={pathname.includes("exchanges")}>
        <Link to={`/coins/${id}/exchanges`}>Exchanges</Link>
      </Item>
    </List>
    <Route path="/coins/:id/markets" component={Markets} />
    <Route path="/coins/:id/exchanges" component={Exchanges} />
  </Container>
);

CoinDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  open_source: PropTypes.bool.isRequired,
  proof_type: PropTypes.string.isRequired,
  org_structure: PropTypes.string.isRequired,
};

export default withRouter(CoinDetail);
