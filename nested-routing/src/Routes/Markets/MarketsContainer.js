import React from "react";
import MarketsPresenter from "./MarketsPresenter";
import { getCoinMarkets } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    markets: [],
  };
  getCoinMarkets = async (id) => {
    try {
      const { data: markets } = await getCoinMarkets(id);
      this.setState({ markets });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.getCoinMarkets(id);
  }
  render() {
    return <MarketsPresenter {...this.state} />;
  }
}
