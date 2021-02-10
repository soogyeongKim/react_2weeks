import React from "react";
import CoinDetailPresenter from "./CoinDetailPresenter";
import { getCoinDetail } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    coinDetail: {},
  };
  getCoinDetail = async (id) => {
    try {
      const { data: coinDetail } = await getCoinDetail(id);
      this.setState({
        coinDetail,
      });
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
    this.getCoinDetail(id);
  }

  render() {
    return <CoinDetailPresenter {...this.state} />;
  }
}
