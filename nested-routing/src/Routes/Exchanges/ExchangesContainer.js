import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { getCoinExchanges } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    exchanges: [],
  };
  getCoinExchanges = async (id) => {
    try {
      const { data: exchanges } = await getCoinExchanges(id);
      this.setState({ exchanges });
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
    this.getCoinExchanges(id);
  }
  render() {
    return <ExchangesPresenter {...this.state} />;
  }
}
